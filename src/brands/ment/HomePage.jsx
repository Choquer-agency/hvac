import "./theme.css";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import config from "./config";
import { useBrandMeta } from "../../shared/hooks/useBrandMeta";

const slowEase = [0.25, 0.46, 0.45, 0.94];

/* ── Reusable fade-in wrapper ── */
function FadeIn({ children, delay = 0, className = "", y = 24 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: slowEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   EDITORIAL ABOUT BLOCK
   ═══════════════════════════════════════════ */
function EditorialAbout() {
  return (
    <section id="about" className="bg-[#F5F0EB] px-6 py-32 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-5xl">
        {/* Pull Quote */}
        <FadeIn>
          <blockquote
            className="mb-20 text-left text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.25] text-[#4A4038] border-l-2 border-[#C4A882] pl-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            &ldquo;{config.pullQuote}&rdquo;
          </blockquote>
        </FadeIn>

        {/* Gold divider */}
        <FadeIn delay={0.2}>
          <div className="mx-auto mb-20 h-[1px] w-24 bg-[#C4A882]" />
        </FadeIn>

        {/* Two-column about with portrait */}
        <FadeIn delay={0.3}>
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <p
                className="text-sm font-light uppercase tracking-[0.2em] text-[#C4A882] mb-8"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Meet Julieta
              </p>
              <div className="overflow-hidden">
                <img
                  src="/images/ment/julieta-portrait.webp"
                  alt="Julieta Diaz, Founder of MENT Interior Design"
                  className="w-full max-w-sm object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p
                className="text-base leading-[1.9] text-[#4A4038]/70"
                style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
              >
                {config.aboutStatement}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PORTFOLIO SHOWCASE (MAGAZINE GRID)
   ═══════════════════════════════════════════ */
function PortfolioShowcase() {
  const items = config.portfolio;

  return (
    <section id="portfolio" className="bg-[#2C2622] px-6 py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p
            className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-[#C4A882]/70"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Selected Work
          </p>
          <h2
            className="mb-20 text-[clamp(2rem,4vw,3.5rem)] text-[#F5F0EB]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            Portfolio
          </h2>
        </FadeIn>

        {/* Staggered Masonry Grid */}
        <div className="grid gap-5 md:grid-cols-5 md:grid-rows-2">
          {/* Left column — tall featured image spanning 2 rows */}
          <FadeIn className="md:col-span-2 md:row-span-2" delay={0.1}>
            <PortfolioCard item={items[0]} aspect="aspect-[3/4] md:aspect-auto md:h-full" />
          </FadeIn>

          {/* Right column — two wide images stacked */}
          <FadeIn className="md:col-span-3" delay={0.2}>
            <PortfolioCard item={items[1]} aspect="aspect-[16/9]" />
          </FadeIn>
          <FadeIn className="md:col-span-3" delay={0.3}>
            <PortfolioCard item={items[2]} aspect="aspect-[16/9]" />
          </FadeIn>
        </div>

        {/* Bottom row — small image + CTA */}
        <div className="mt-5 grid gap-5 md:grid-cols-5">
          <FadeIn className="md:col-span-2" delay={0.35}>
            <PortfolioCard item={items[3]} aspect="aspect-[4/3]" />
          </FadeIn>
          <div className="md:col-span-3 flex items-center justify-center">
            <FadeIn delay={0.45}>
              <a
                href="#contact"
                className="group flex items-center gap-3 text-sm font-light tracking-[0.15em] uppercase text-[#F5F0EB]/50 transition-colors duration-500 hover:text-[#C4A882]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                View All Projects
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, aspect = "aspect-[4/3]" }) {
  return (
    <div className={`group relative overflow-hidden ${aspect}`}>
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.03] group-hover:brightness-105"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <p
          className="text-xs font-light uppercase tracking-[0.2em] text-white/60"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          {item.category}
        </p>
        <h3
          className="mt-1 text-2xl text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
          }}
        >
          {item.title}
        </h3>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   DESIGN ELEMENTS / CRAFTSMANSHIP
   ═══════════════════════════════════════════ */
function MaterialsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="materials"
      ref={sectionRef}
      className="bg-[#F5F0EB] px-6 py-32 lg:px-0 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-5">
        {/* Image — 60% */}
        <div className="relative overflow-hidden lg:col-span-3 lg:h-[85vh]">
          <motion.img
            src="/images/ment/tablescape.jpg"
            alt="Curated tablescape design by MENT"
            className="h-full w-full object-cover"
            style={{ y: imageY }}
            loading="lazy"
          />
        </div>

        {/* Text — 40% */}
        <div className="flex flex-col justify-center overflow-hidden lg:col-span-2 lg:px-16 lg:py-32 py-16">
          <FadeIn>
            <p
              className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-[#C4A882]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Design Elements
            </p>
            <h2
              className="mb-10 text-[clamp(2rem,3.5vw,3rem)] text-[#4A4038]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              Details That
              <br />
              Define a Space
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="mb-12 text-base leading-[1.9] text-[#4A4038]/60"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              We curate every element with the same care a gallery brings to an
              exhibition — each piece chosen for its texture, its warmth, and
              the way it harmonizes with the whole.
            </p>
          </FadeIn>

          {/* Materials List */}
          <div className="max-w-sm space-y-5">
            {config.materials.map((material, i) => (
              <FadeIn key={material} delay={0.3 + i * 0.08}>
                <div className="group">
                  <span
                    className="text-lg text-[#4A4038]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 400,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {material}
                  </span>
                  <div className="mt-2 h-[1px] w-12 bg-[#C4A882]/40 transition-all duration-700 group-hover:w-20 group-hover:bg-[#C4A882]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROCESS SECTION
   ═══════════════════════════════════════════ */
function ProcessSection() {
  const processRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start end", "end start"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0.1, 0.8], [0.1, 1]);

  return (
    <section id="process" ref={processRef} className="bg-[#F5F0EB] px-6 py-32 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p
            className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-[#C4A882]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {config.processSection.eyebrow}
          </p>
          <h2
            className="mb-24 text-[clamp(2rem,4vw,3.5rem)] text-[#4A4038]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            {config.processSection.headline}
          </h2>
        </FadeIn>

        {/* Steps with scroll-progressive vertical line */}
        <div className="relative">
          {/* Background track */}
          <div className="absolute left-[18px] top-2 bottom-2 w-[1px] bg-[#4A4038]/10 md:left-[22px]" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-[18px] top-2 bottom-2 w-[1px] bg-[#4A4038] md:left-[22px]"
            style={{
              scaleY: lineScaleY,
              opacity: lineOpacity,
              transformOrigin: "top",
            }}
          />

          <div className="space-y-20">
            {config.process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.15} y={32}>
                <div className="flex gap-8 md:gap-14">
                  {/* Number */}
                  <div className="relative z-10 flex-shrink-0">
                    <span
                      className="text-3xl md:text-4xl text-[#C4A882]"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 300,
                      }}
                    >
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3
                      className="mb-4 text-2xl md:text-3xl text-[#4A4038]"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 500,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="max-w-lg text-base leading-[1.9] text-[#4A4038]/60"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   REVIEWS SECTION
   ═══════════════════════════════════════════ */
function ReviewsSection() {
  const reviews = config.reviews.featured;

  return (
    <section id="reviews" className="bg-[#C4A882]/10 px-6 py-32 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p
            className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-[#C4A882]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Kind Words
          </p>
          <h2
            className="mb-24 text-[clamp(2rem,4vw,3.5rem)] text-[#4A4038]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            From our clients
          </h2>
        </FadeIn>

        {/* Featured Review — large, centered */}
        <FadeIn delay={0.15}>
          <div className="mb-16 max-w-3xl mx-auto text-center">
            {/* Large quotation mark */}
            <span
              className="mb-4 block text-8xl leading-none text-[#C4A882]/40"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;
            </span>
            <blockquote
              className="-mt-10 mb-8 text-[clamp(1.3rem,2.5vw,1.8rem)] leading-[1.5] text-[#4A4038]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              {reviews[0].text}
            </blockquote>
            <p
              className="text-sm font-light tracking-[0.1em] text-[#4A4038]/50"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              &mdash; {reviews[0].author}
            </p>
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.2}>
          <div className="mx-auto mb-16 h-[1px] w-16 bg-[#C4A882]/40" />
        </FadeIn>

        {/* Two smaller reviews */}
        <div className="grid gap-16 md:grid-cols-2 md:divide-x md:divide-[#4A4038]/10">
          {reviews.slice(1).map((review, i) => (
            <FadeIn key={review.author} delay={0.25 + i * 0.1}>
              <div className={i === 1 ? "md:pl-16" : ""}>
                <span
                  className="mb-4 block text-5xl leading-none text-[#C4A882]/30"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="-mt-6 mb-6 text-base leading-[1.8] text-[#4A4038]/70"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {review.text}
                </blockquote>
                <p
                  className="text-sm font-light tracking-[0.1em] text-[#4A4038]/40"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  &mdash; {review.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section id="contact" className="bg-[#2C2622] px-6 py-32 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <p
            className="mb-6 text-xs font-light uppercase tracking-[0.3em] text-[#C4A882]/60"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {config.finalCTA.eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            className="mb-8 text-[clamp(2rem,5vw,4rem)] text-[#F5F0EB]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            {config.finalCTA.headline}
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            className="mx-auto mb-14 max-w-xl text-base leading-[1.9] text-[#F5F0EB]/50"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            {config.finalCTA.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-light tracking-[0.15em] uppercase text-[#C4A882] transition-colors duration-500 hover:text-[#F5F0EB]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {config.finalCTA.primaryCTA.label}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PARALLAX IMAGE BREAK
   ═══════════════════════════════════════════ */
function ParallaxBreak({ src, alt, height = "h-[60vh]" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 h-[130%] w-full object-cover"
        style={{ y }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   COLOR WASH IMAGE BREAK — B&W to warm tint on scroll
   ═══════════════════════════════════════════ */
function ColorWashBreak({ src, alt, height = "h-[60vh]" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 0.55]);
  const grayscale = useTransform(scrollYProgress, [0.15, 0.55], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 h-[130%] w-full object-cover"
        style={{
          y,
          scale,
          filter: useTransform(grayscale, (v) => `grayscale(${v})`),
        }}
        loading="lazy"
      />
      {/* Warm champagne-gold gradient that fades in on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: overlayOpacity,
          background:
            "linear-gradient(135deg, rgba(196,168,130,0.5) 0%, rgba(74,64,56,0.6) 50%, rgba(44,38,34,0.7) 100%)",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════════ */
export default function HomePage() {
  useBrandMeta("ment", config.companyName);
  return (
    <div data-brand="ment" className="min-h-screen bg-[#F5F0EB]">
      <Nav />
      <Hero />
      <EditorialAbout />
      <PortfolioShowcase />
      <ColorWashBreak
        src="/images/ment/julieta-kitchen.jpg"
        alt="Julieta Diaz in a beautifully designed kitchen"
      />
      <MaterialsSection />
      <ProcessSection />
      <ParallaxBreak
        src="/images/ment/stone-texture.webp"
        alt="Natural stone texture detail"
        height="h-[50vh]"
      />
      <ReviewsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
