import "./theme.css";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import config from "./config";
import { useBrandMeta } from "../../shared/hooks/useBrandMeta";

/* ── Animation Helpers ── */
const springBounce = { type: "spring", stiffness: 300, damping: 20 };
const springGentle = { type: "spring", stiffness: 200, damping: 22 };

function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return [ref, inView];
}

/* ══════════════════════════════════════════════════════════
   BENTO GRID SERVICES
   ══════════════════════════════════════════════════════════ */
function BentoServices() {
  const [ref, inView] = useScrollReveal(0.1);

  return (
    <section id="services" className="bg-[#E1EAF9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={springGentle}
          className="mb-14 text-center"
        >
          <span
            className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#F15928]"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            {config.servicesSection.eyebrow}
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight text-[#16205B]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {config.servicesSection.headline}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.services.map((service, i) => {
            const isLarge = service.size === "large";
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  ...springBounce,
                  delay: i * 0.08,
                }}
                className={`card-tilt ${isLarge ? "sm:col-span-2" : ""}`}
              >
                <div
                  className={`card-tilt-inner group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl ${
                    isLarge ? "min-h-[280px]" : "min-h-[200px]"
                  }`}
                >
                  {/* Background image for large cards */}
                  {isLarge && service.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                  )}

                  <div className="relative z-10">
                    <span className="mb-3 block text-3xl">{service.icon}</span>
                    <h3
                      className="mb-2 text-lg font-bold text-[#16205B]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed text-[#16205B]/60"
                      style={{ fontFamily: "'Figtree', sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   ABOUT ME
   ══════════════════════════════════════════════════════════ */
function AboutMe() {
  const [ref, inView] = useScrollReveal(0.15);

  const stats = [
    { value: "15+", label: "Years" },
    { value: "2,000+", label: "Jobs" },
    { value: "Same-Day", label: "Available" },
  ];

  return (
    <section id="about" className="bg-white/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12">
        {/* Photo */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={springGentle}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80"
              alt="Jake the handyman"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-[#0372FF]/10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ ...springGentle, delay: 0.15 }}
        >
          <span
            className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#F15928]"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            About Me
          </span>
          <h2
            className="mb-6 text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight text-[#16205B]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Just a guy who loves fixing things
          </h2>
          <p
            className="mb-8 text-base leading-relaxed text-[#16205B]/65"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            {config.aboutMe}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ ...springBounce, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center rounded-2xl bg-[#E1EAF9] px-6 py-4"
              >
                <span
                  className="text-xl font-extrabold text-[#F15928]"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs font-semibold text-[#16205B]/60"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   HOW IT WORKS
   ══════════════════════════════════════════════════════════ */
function HowItWorks() {
  const [ref, inView] = useScrollReveal(0.1);

  return (
    <section id="process" className="bg-[#E1EAF9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={springGentle}
          className="mb-14 text-center"
        >
          <span
            className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#F15928]"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            {config.processSection.eyebrow}
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight text-[#16205B]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {config.processSection.headline}
          </h2>
        </motion.div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotate: i % 2 === 0 ? -2 : 2,
                    }
                  : {}
              }
              whileHover={{ rotate: 0, scale: 1.04, y: -4 }}
              transition={{ ...springBounce, delay: i * 0.1 }}
              className="cursor-default rounded-2xl bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <span
                className="mb-3 block text-4xl font-extrabold text-[#F15928]/20"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                0{step.step}
              </span>
              <h3
                className="mb-2 text-lg font-bold text-[#16205B]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-[#16205B]/60"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   REVIEWS CAROUSEL
   ══════════════════════════════════════════════════════════ */
function Reviews() {
  const [ref, inView] = useScrollReveal(0.1);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
    }
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({ left: dir * 340, behavior: "smooth" });
    }
  };

  return (
    <section id="reviews" className="bg-white/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={springGentle}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <span
              className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#F15928]"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              What People Say
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight text-[#16205B]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Happy homeowners
            </h2>
          </div>
          {/* Scroll Arrows (desktop) */}
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1EAF9] text-[#16205B] transition-all duration-200 hover:bg-[#16205B] hover:text-white disabled:opacity-30"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1EAF9] text-[#16205B] transition-all duration-200 hover:bg-[#16205B] hover:text-white disabled:opacity-30"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Scrolling Cards */}
        <div
          ref={scrollRef}
          className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {config.reviews.featured.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...springBounce, delay: 0.1 + i * 0.1 }}
              className="min-w-[300px] max-w-[340px] flex-shrink-0 snap-start rounded-2xl border-2 border-[#A3A9F5]/30 bg-white p-7 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="h-5 w-5 text-[#F15928]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p
                className="mb-5 text-sm leading-relaxed text-[#16205B]/70"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                "{review.text}"
              </p>
              <p
                className="text-sm font-bold text-[#16205B]"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                — {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   FINAL CTA
   ══════════════════════════════════════════════════════════ */
function FinalCTA() {
  const [ref, inView] = useScrollReveal(0.2);

  return (
    <section id="contact" className="bg-[#E1EAF9] px-6 py-24 lg:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={springGentle}
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#F15928] p-10 text-center shadow-2xl shadow-[#F15928]/20 sm:p-16"
      >
        <h2
          className="mb-5 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {config.finalCTA.headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <p
          className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-white/80"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          {config.finalCTA.body}
        </p>
        <motion.a
          href={config.finalCTA.primaryCTA.href}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block rounded-2xl bg-[#16205B] px-10 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#0D1440] hover:shadow-xl"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          {config.finalCTA.primaryCTA.label}
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   HOME PAGE
   ══════════════════════════════════════════════════════════ */
export default function HomePage() {
  useBrandMeta("handyman", config.companyName);
  return (
    <div data-brand="handyman" className="min-h-screen bg-[#E1EAF9]">
      <Nav />
      <Hero />
      <BentoServices />
      <AboutMe />
      <HowItWorks />
      <Reviews />
      <FinalCTA />
      <Footer />
    </div>
  );
}
