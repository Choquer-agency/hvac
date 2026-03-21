import "./theme.css";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import config from "./config";
import { useBrandMeta } from "../../shared/hooks/useBrandMeta";

const smoothEase = [0.22, 1, 0.36, 1];

/* ── Reusable scroll-reveal wrapper ── */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: smoothEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated Counter ── */
function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 30 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      setDisplay(Math.round(v));
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ══════════════════════════════════════════
   Stats Bar
   ══════════════════════════════════════════ */
function StatsBar() {
  return (
    <section className="relative z-10 bg-[#0F1520]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
        {config.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="flex flex-col items-center justify-center px-6 py-10 lg:py-14 bg-[#0F1520]">
              <p
                className="mb-2 text-[clamp(2rem,4vw,3.5rem)] font-bold text-white"
                style={{ fontFamily: "'Rethink Sans', sans-serif" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   About Statement — word-by-word scroll reveal
   ══════════════════════════════════════════ */
function AboutStatement() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = config.aboutStatement.split(" ");

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative bg-[#F5F2EC] px-6 py-32 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-4xl">
        <p
          className="text-[clamp(1.5rem,3.2vw,2.6rem)] font-medium leading-[1.4] tracking-tight"
          style={{ fontFamily: "'Rethink Sans', sans-serif" }}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#1B2A4A26", "#0F1520"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="mr-[0.3em] inline-block transition-none"
    >
      {children}
    </motion.span>
  );
}

/* ══════════════════════════════════════════
   Featured Project — with parallax image
   ══════════════════════════════════════════ */
function FeaturedProject() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      id="featured"
      className="relative overflow-hidden bg-[#0F1520] px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image with parallax */}
          <Reveal className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <motion.img
                src={config.featuredProject.image}
                alt={config.featuredProject.title}
                className="h-full w-full object-cover"
                style={{ y: imageY, scale: 1.2 }}
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4A843]">
                <span className="inline-block h-[2px] w-8 bg-[#D4A843]" />
                {config.featuredProject.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="mb-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
                style={{ fontFamily: "'Rethink Sans', sans-serif" }}
              >
                {config.featuredProject.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mb-10 text-lg leading-relaxed text-white/60">
                {config.featuredProject.description}
              </p>
            </Reveal>

            {/* Project stats */}
            <Reveal delay={0.24}>
              <div className="mb-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {config.featuredProject.stats.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="mb-1 text-xl font-bold text-white"
                      style={{ fontFamily: "'Rethink Sans', sans-serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D4A843] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A843]/20 hover:-translate-y-0.5"
                style={{ fontFamily: "'Rethink Sans', sans-serif" }}
              >
                Book Your Inspection
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Services Section
   ══════════════════════════════════════════ */
function ServicesSection() {
  return (
    <section id="services" className="bg-[#F5F2EC] px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            <span className="inline-block h-[2px] w-8 bg-[#D4A843]" />
            {config.servicesSection.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-16 max-w-xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[#0F1520]"
            style={{ fontFamily: "'Rethink Sans', sans-serif" }}
          >
            {config.servicesSection.headline}
          </h2>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/10">
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient overlay — intensifies on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out">
                  {/* Category line */}
                  <div className="mb-3 h-[2px] w-0 bg-[#D4A843] transition-all duration-500 ease-out group-hover:w-10" />
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Rethink Sans', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  {/* Description slides up on hover */}
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 transition-all duration-500 ease-out group-hover:max-h-32">
                    {service.description}
                  </p>
                  {/* Arrow appears on hover */}
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-[#D4A843] opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Marquee Text Band
   ══════════════════════════════════════════ */
function MarqueeBand() {
  return (
    <section className="overflow-hidden border-y border-[#1B2A4A]/10 bg-[#F5F2EC] py-6">
      <div className="architect-marquee flex whitespace-nowrap">
        {[...Array(3)].map((_, setIdx) => (
          <div key={setIdx} className="architect-marquee-track flex shrink-0">
            {config.marqueeWords.map((word, i) => (
              <span
                key={`${setIdx}-${i}`}
                className="mx-8 text-[clamp(1rem,2vw,1.5rem)] font-medium uppercase tracking-[0.15em] text-[#1B2A4A]/15"
                style={{ fontFamily: "'Rethink Sans', sans-serif" }}
              >
                {word}
                <span className="ml-8 text-[#D4A843]/30">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Parallax Image Divider
   ══════════════════════════════════════════ */
function ParallaxDivider() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={sectionRef} className="relative h-[50vh] overflow-hidden lg:h-[60vh]">
      <motion.img
        src={config.parallaxImage}
        alt="Home inspection services"
        className="absolute inset-0 h-[130%] w-full object-cover"
        style={{ y }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#0F1520]/40" />
      <div className="relative flex h-full items-center justify-center">
        <Reveal>
          <p
            className="text-center text-[clamp(1.5rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "'Rethink Sans', sans-serif" }}
          >
            Every property tells a story.<br />
            <span className="text-[#D4A843]">We make sure you know the full picture.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Process Section — with animated line
   ══════════════════════════════════════════ */
function ProcessSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="bg-[#F5F2EC] px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            <span className="inline-block h-[2px] w-8 bg-[#D4A843]" />
            {config.processSection.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-20 max-w-xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[#0F1520]"
            style={{ fontFamily: "'Rethink Sans', sans-serif" }}
          >
            {config.processSection.headline}
          </h2>
        </Reveal>

        {/* Steps */}
        <div className="relative">
          {/* Static connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden h-[2px] bg-[#1B2A4A]/10 lg:block" />
          {/* Animated fill line (desktop) */}
          <motion.div
            className="absolute left-0 top-6 hidden h-[2px] bg-[#D4A843] lg:block"
            style={{ width: lineWidth }}
          />
          {/* Connecting line (mobile) */}
          <div className="absolute bottom-0 left-6 top-0 w-[2px] bg-[#1B2A4A]/10 lg:hidden" />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {config.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.12}>
                <div className="group relative flex gap-6 lg:flex-col lg:gap-4">
                  {/* Step circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D4A843] text-lg font-bold text-white shadow-lg shadow-[#D4A843]/20 transition-transform duration-300 group-hover:scale-110">
                    {step.step}
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-lg font-bold text-[#0F1520]"
                      style={{ fontFamily: "'Rethink Sans', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#1B2A4A]/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Reviews Section
   ══════════════════════════════════════════ */
function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="bg-[#F5F2EC] px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            <span className="inline-block h-[2px] w-8 bg-[#D4A843]" />
            Client Testimonials
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-16 max-w-lg text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[#0F1520]"
            style={{ fontFamily: "'Rethink Sans', sans-serif" }}
          >
            Trusted by homeowners and realtors across BC
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.reviews.featured.map((review, i) => (
            <Reveal key={review.author} delay={i * 0.1}>
              <div className="group rounded-2xl border border-[#1B2A4A]/5 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: review.rating }, (_, j) => (
                    <svg
                      key={j}
                      className="h-5 w-5 text-[#E0BC5E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-sm leading-relaxed text-[#1B2A4A]/70">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4A843]/10 text-sm font-bold text-[#D4A843]" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
                    {review.author.charAt(0)}
                  </div>
                  <p
                    className="text-sm font-semibold text-[#0F1520]"
                    style={{ fontFamily: "'Rethink Sans', sans-serif" }}
                  >
                    {review.author}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Final CTA Section
   ══════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 lg:px-12 lg:py-36"
      style={{
        background:
          "linear-gradient(135deg, #D4A843 0%, #E0BC5E 50%, #D4A843 100%)",
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
            {config.finalCTA.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "'Rethink Sans', sans-serif" }}
          >
            {config.finalCTA.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-white/85">
            {config.finalCTA.body}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <a
            href={config.finalCTA.primaryCTA.href}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-bold text-[#1B2A4A] transition-all duration-300 hover:bg-[#0F1520] hover:text-white hover:shadow-xl hover:-translate-y-0.5"
            style={{ fontFamily: "'Rethink Sans', sans-serif" }}
          >
            {config.finalCTA.primaryCTA.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Certification Badge Banner (scrolling marquee)
   ══════════════════════════════════════════ */
const certBadges = [
  { src: "/images/gmw/ica-logo.png", alt: "ICA Inspection Certification" },
  { src: "/images/gmw/cpbc-logo.jpg", alt: "Consumer Protection BC" },
  { src: "/images/gmw/asttbc-logo.jpg", alt: "ASTTBC Property Inspectors" },
  { src: "/images/gmw/usgbc-logo.jpg", alt: "USGBC Member" },
  { src: "/images/gmw/bbb-logo.png", alt: "BBB Accredited Business" },
  { src: "/images/gmw/spectora-badge.png", alt: "Spectora Certified Reports" },
  { src: "/images/gmw/leed-logo.jpg", alt: "LEED Green Associate" },
];

function CertBanner() {
  const track = [...certBadges, ...certBadges, ...certBadges];
  return (
    <section className="bg-[#F5F2EC] border-y border-[#1B2A4A]/10 py-5 overflow-hidden">
      <div
        className="flex gap-12 items-center"
        style={{
          animation: "certScroll 28s linear infinite",
          width: "max-content",
        }}
      >
        {track.map((badge, i) => (
          <img
            key={i}
            src={badge.src}
            alt={badge.alt}
            className="h-10 md:h-12 w-auto object-contain flex-shrink-0"
            style={{ mixBlendMode: "multiply" }}
          />
        ))}
      </div>
      <style>{`
        @keyframes certScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════════
   HomePage — Compose all sections
   ══════════════════════════════════════════ */
export default function HomePage() {
  useBrandMeta("gmw-architect", config.companyName);
  return (
    <div data-brand="gmw-architect" className="min-h-screen bg-[#F5F2EC]">
      <Nav />
      <Hero />
      <CertBanner />
      <StatsBar />
      <AboutStatement />
      <FeaturedProject />
      <ServicesSection />
      <MarqueeBand />
      <ParallaxDivider />
      <ProcessSection />
      <ReviewsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
