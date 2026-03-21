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
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ── Word-by-word scroll reveal ── */
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(progress, range, ["#1B2A4A26", "#1B2A4A"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="mr-[0.3em] inline-block transition-none"
    >
      {children}
    </motion.span>
  );
}

/* ── Package Icon Map ── */
function PackageIcon({ icon, className = "w-6 h-6" }) {
  const icons = {
    sun: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    cpu: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7V7z" />
      </svg>
    ),
    sparkles: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    mountain: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l7.5-12L15 15l6-9v15H3z" />
      </svg>
    ),
  };
  return icons[icon] || null;
}

/* ══════════════════════════════════════════
   Stats Bar
   ══════════════════════════════════════════ */
function StatsBar() {
  return (
    <section className="relative z-10 bg-[#111D33]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/5 lg:grid-cols-4">
        {config.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="flex flex-col items-center justify-center px-6 py-10 lg:py-14">
              <p
                className="mb-2 text-[clamp(2rem,4vw,3.5rem)] font-bold text-white"
                style={{ fontFamily: "Outfit, sans-serif" }}
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
      className="relative bg-white px-6 py-24 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <p
          className="text-[clamp(1.5rem,3.2vw,2.6rem)] font-medium leading-[1.4] tracking-tight"
          style={{ fontFamily: "Outfit, sans-serif" }}
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

/* ══════════════════════════════════════════
   Models Showcase — equal height cards
   ══════════════════════════════════════════ */
function ModelsShowcase() {
  return (
    <section id="models" className="bg-white px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#B8912E]">
            <span className="inline-block h-[2px] w-8 bg-[#B8912E]" />
            {config.modelsSection.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-16 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[#1B2A4A] whitespace-nowrap"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {config.modelsSection.headline}
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {config.models.map((model, i) => (
            <Reveal key={model.slug} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#1B2A4A]/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Specs overlay on hover */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1B2A4A]/90 via-[#1B2A4A]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="p-6 w-full">
                      <div className="flex gap-4 text-white/90 text-xs font-medium uppercase tracking-wider">
                        <span>{model.sqft} sqft</span>
                        <span className="text-white/30">|</span>
                        <span>{model.bedrooms} bed</span>
                        <span className="text-white/30">|</span>
                        <span>{model.bathrooms} bath</span>
                      </div>
                    </div>
                  </div>
                  {/* Price badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: "#D4A843",
                      color: "#1B2A4A",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    From {model.startingPrice}
                  </div>
                </div>

                {/* Content — flex-grow to equalize height */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-xl font-bold text-[#1B2A4A] mb-1"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {model.name}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "#B8912E" }}
                  >
                    {model.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-[#2D4A6F] mb-5 line-clamp-3">
                    {model.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {model.features.map((f) => (
                      <span
                        key={f}
                        className="inline-block px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{
                          backgroundColor: "#F5F2EC",
                          color: "#2D4A6F",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      color: "#1B2A4A",
                    }}
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </a>
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
   Marquee Band — slanted, larger, bolder words
   ══════════════════════════════════════════ */
function MarqueeBand() {
  return (
    <section
      className="relative overflow-hidden py-0"
      style={{
        transform: "rotate(-2deg) scale(1.05)",
        margin: "-1rem 0",
      }}
    >
      <div className="bg-[#1B2A4A] py-5 lg:py-6">
        <div className="evergreen-marquee flex whitespace-nowrap">
          {[...Array(3)].map((_, setIdx) => (
            <div key={setIdx} className="flex shrink-0">
              {config.marqueeWords.map((word, i) => (
                <span
                  key={`${setIdx}-${i}`}
                  className="mx-6 lg:mx-10 text-[clamp(1.1rem,2.5vw,1.75rem)] font-bold uppercase tracking-[0.12em] text-white/90"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {word}
                  <span className="ml-6 lg:ml-10 text-[#D4A843]/50">&#9679;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
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

  const stepIcons = [
    <svg key="configure" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    <svg key="build" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>,
    <svg key="ship" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1 2 1 2-1 2 1 2-1zm7 0V9a1 1 0 00-1-1h-2l-3 8h5a1 1 0 001-1zm-7 4a2 2 0 11-4 0m10 0a2 2 0 11-4 0" />
    </svg>,
    <svg key="install" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>,
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="bg-[#1B2A4A] px-6 py-28 lg:px-12 lg:py-36"
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
            className="mb-20 max-w-xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {config.processSection.headline}
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-[2px] bg-white/10 lg:block" />
          <motion.div
            className="absolute left-0 top-6 hidden h-[2px] bg-[#D4A843] lg:block"
            style={{ width: lineWidth }}
          />
          <div className="absolute bottom-0 left-6 top-0 w-[2px] bg-white/10 lg:hidden" />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {config.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.12}>
                <div className="group relative flex gap-6 lg:flex-col lg:gap-4">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D4A843] text-[#1B2A4A] shadow-lg shadow-[#D4A843]/20 transition-transform duration-300 group-hover:scale-110">
                    {stepIcons[i]}
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-lg font-bold text-white"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">
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
   Parallax Divider — split layout with image
   ══════════════════════════════════════════ */
function ParallaxDivider() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="relative grid lg:grid-cols-2 min-h-[50vh]">
      {/* Left — text */}
      <div className="flex items-center justify-center bg-[#1B2A4A] px-8 py-20 lg:px-16 lg:py-28">
        <Reveal>
          <div className="max-w-md">
            <p
              className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4A843] mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Serving Greater Vancouver & Beyond
            </p>
            <p
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-white mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Your property. Inspected with precision,{" "}
              <span className="text-[#D4A843]">reported with clarity.</span>
            </p>
            <p className="text-sm leading-relaxed text-white/50">
              From booking to report — thorough inspections, detailed photography, and complete peace of mind.
            </p>
          </div>
        </Reveal>
      </div>
      {/* Right — clean image */}
      <div className="relative overflow-hidden min-h-[300px]">
        <motion.img
          src={config.parallaxImage}
          alt="GMW property inspection"
          className="absolute inset-0 h-[120%] w-full object-cover"
          style={{ y }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Package Add-Ons — luxury feel
   ══════════════════════════════════════════ */
function PackagesSection() {
  return (
    <section id="packages" className="bg-[#111D33] px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            <span className="inline-block h-[2px] w-8 bg-[#D4A843]" />
            Curated Upgrades
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-6 max-w-xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Elevate every detail
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-16 max-w-lg text-sm leading-relaxed text-white/50">
            Each package is designed to enhance your home with premium materials and intelligent systems — because the details define the experience.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] hover:border-[#D4A843]/20 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A843]/10 text-[#D4A843]">
                  <PackageIcon icon={pkg.icon} />
                </div>

                {/* Name + Price */}
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: "#D4A843", fontFamily: "Outfit, sans-serif" }}
                >
                  {pkg.price}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mt-auto">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0 text-[#D4A843]/70"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Gallery Section — Asymmetric Grid
   ══════════════════════════════════════════ */
function GallerySection() {
  return (
    <section className="bg-white px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#B8912E]">
            <span className="inline-block h-[2px] w-8 bg-[#B8912E]" />
            Gallery
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-16 max-w-xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-[#1B2A4A]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            See what&apos;s possible
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {config.galleryImages.map((img, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className={i === 0 || i === 3 ? "row-span-2" : ""}
            >
              <div className="group relative overflow-hidden rounded-xl h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                    i === 0 || i === 3 ? "h-full min-h-[300px]" : "h-48 sm:h-56 lg:h-64"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1B2A4A]/0 transition-colors duration-500 group-hover:bg-[#1B2A4A]/30" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {img.alt}
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
   Reviews Section — luxury editorial layout
   ══════════════════════════════════════════ */
function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#1B2A4A] px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            <span className="inline-block h-[2px] w-8 bg-[#D4A843]" />
            Homeowner Stories
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-16 max-w-lg text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Trusted by homeowners nationwide
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {config.reviews.featured.map((review, i) => (
            <Reveal key={review.author} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-8 lg:p-10 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/15 h-full flex flex-col">
                {/* Large quote mark */}
                <div
                  className="text-5xl font-serif leading-none mb-4 select-none"
                  style={{ color: "#D4A843" }}
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.rating }, (_, j) => (
                    <svg key={j} className="h-4 w-4 text-[#D4A843]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-white/70 mb-8 flex-1">
                  {review.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/8">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: "rgba(208,255,113,0.1)",
                      color: "#D4A843",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {review.author}
                    </p>
                    <p className="text-xs text-white/30">Verified Homeowner</p>
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
   Final CTA
   ══════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 lg:px-12 lg:py-36"
      style={{ backgroundColor: "#F5F2EC" }}
    >
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "#B8912E", fontFamily: "Outfit, sans-serif" }}
          >
            {config.finalCTA.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-[#1B2A4A]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {config.finalCTA.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-[#2D4A6F]">
            {config.finalCTA.body}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <a
            href={config.finalCTA.primaryCTA.href}
            className="group inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1B2A4A]/15"
            style={{
              fontFamily: "Outfit, sans-serif",
              backgroundColor: "#1B2A4A",
              color: "#FFFFFF",
            }}
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
   HomePage — Compose all sections
   ══════════════════════════════════════════ */
export default function HomePage() {
  useBrandMeta("gmw-evergreen", config.companyName);
  return (
    <div data-brand="gmw-evergreen" className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <StatsBar />
      <AboutStatement />
      <ModelsShowcase />
      <MarqueeBand />
      <ProcessSection />
      <ParallaxDivider />
      <PackagesSection />
      <GallerySection />
      <ReviewsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
