import "./theme.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import InlineCTA from "./components/InlineCTA";
import WhyTriCities from "./components/WhyTriCities";
import ParallaxDivider from "./components/ParallaxDivider";
import config from "./config";
import { useBrandMeta } from "../../shared/hooks/useBrandMeta";

/* ─── Scroll-animated wrapper ─── */
function FadeInView({ children, delay = 0, className = "", direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   SERVICES SECTION — Image-backed cards, asymmetric grid
   ═══════════════════════════════════════════════════ */
function ServicesSection() {
  const { servicesSection, services } = config;

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeInView>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0096B7] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {servicesSection.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] uppercase leading-tight mb-14"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {servicesSection.headline}
          </h2>
        </FadeInView>

        {/* Asymmetric image card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const isTall = i === 0 || i === 4;
            const isWide = i === 5;
            return (
              <FadeInView
                key={service.slug}
                delay={i * 0.08}
                direction={i % 2 === 0 ? "left" : "right"}
                className={`${isTall ? "lg:row-span-2" : ""} ${isWide ? "sm:col-span-2" : ""}`}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden rounded-lg cursor-pointer h-full ${
                    isTall ? "min-h-[400px] lg:min-h-[500px]" : "min-h-[240px] sm:min-h-[280px]"
                  }`}
                >
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
                  {/* Blue accent line — slides in on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00B4D8] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-10" />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <h3
                      className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {service.name}
                    </h3>
                    <p
                      className="text-gray-200 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-w-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {service.shortDescription}
                    </p>
                  </div>
                </motion.div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PROCESS SECTION — Visual timeline with image panel
   ═══════════════════════════════════════════════════ */
function ProcessSection() {
  const { processSection, process } = config;
  const [activeStep, setActiveStep] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const timeoutRef = useRef(null);

  const handleStepClick = useCallback((i) => {
    setActiveStep(i);
    setUserInteracted(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setUserInteracted(false), 10000);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (userInteracted) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % process.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [userInteracted, process.length]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const progressPercent = ((activeStep + 1) / process.length) * 100;

  return (
    <section id="process" className="bg-[#F5F7FA] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeInView className="mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00B4D8] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {processSection.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] uppercase leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {processSection.headline}
          </h2>
        </FadeInView>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Timeline */}
          <div className="relative pl-14 sm:pl-16">
            {/* Background line */}
            <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-[#E2E8F0]" />
            {/* Active progress line */}
            <motion.div
              className="absolute left-[19px] sm:left-[23px] top-0 w-[2px] bg-[#00B4D8] origin-top"
              animate={{ height: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            <div className="space-y-1">
              {process.map((step, i) => {
                const isActive = activeStep === i;
                return (
                  <FadeInView key={step.step} delay={i * 0.1}>
                    <button
                      onClick={() => handleStepClick(i)}
                      className="w-full text-left relative py-4"
                    >
                      {/* Step number circle */}
                      <div
                        className={`absolute -left-14 sm:-left-16 top-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 z-10 ${
                          isActive
                            ? "bg-[#00B4D8] text-white scale-110"
                            : "bg-[#E2E8F0] text-gray-400 hover:bg-[#d1d8e0]"
                        }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {String(step.step).padStart(2, "0")}
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-base sm:text-lg font-bold uppercase tracking-wide transition-colors duration-300 ${
                          isActive ? "text-[#1a1a1a]" : "text-gray-400"
                        }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {step.title}
                      </h3>

                      {/* Expandable description */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p
                              className="text-gray-500 text-sm leading-relaxed pt-3 pb-2"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </FadeInView>
                );
              })}
            </div>

            {/* CTA below timeline */}
            <FadeInView delay={0.4} className="mt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 bg-[#00B4D8] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#0096B7] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Book Your Free Consultation
              </a>
            </FadeInView>
          </div>

          {/* Right — Image panel */}
          <FadeInView direction="right" className="sticky top-28">
            <div className="relative overflow-hidden rounded-lg h-[350px] sm:h-[420px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={process[activeStep].image}
                  alt={process[activeStep].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 to-transparent" />
              {/* Step indicator overlay */}
              <div className="absolute bottom-6 left-6 flex gap-2">
                {process.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === activeStep ? "w-8 bg-[#00B4D8]" : "w-3 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SERVICE AREAS SECTION
   ═══════════════════════════════════════════════════ */
function ServiceAreasSection() {
  const { serviceAreas } = config;

  return (
    <section id="areas" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInView>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00B4D8] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {serviceAreas.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] uppercase leading-tight mb-14"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {serviceAreas.headline}
          </h2>
        </FadeInView>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Map image */}
          <FadeInView direction="left">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={serviceAreas.mapImage}
                alt="TriCities Flooring service areas in British Columbia"
                className="w-full h-auto"
                data-no-shimmer
              />
            </div>
          </FadeInView>

          {/* Right — Area list */}
          <div className="space-y-4">
            {serviceAreas.areas.map((area, i) => (
              <FadeInView key={area.name} delay={i * 0.1} direction="right">
                <div className="group relative bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg p-6 pl-8 hover:border-[#00B4D8]/40 transition-all duration-300 hover:shadow-md">
                  {/* Blue left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00B4D8]/20 group-hover:bg-[#00B4D8] transition-colors duration-300 rounded-l-lg" />
                  <div className="flex items-center gap-4">
                    <div className="text-[#00B4D8] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-[#1a1a1a] font-bold text-base uppercase tracking-wide"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {area.name}
                      </h3>
                      <p
                        className="text-gray-500 text-sm mt-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   REVIEWS SECTION
   ═══════════════════════════════════════════════════ */
function ReviewsSection() {
  const { reviews } = config;

  return (
    <section id="reviews" className="bg-[#F5F7FA] py-20 md:py-28 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInView>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00B4D8] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Client Testimonials
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] uppercase leading-tight mb-14"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What Our Clients Say
          </h2>
        </FadeInView>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.featured.map((review, i) => (
            <FadeInView key={review.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group bg-white border border-[#E2E8F0] hover:border-[#00B4D8]/30 rounded-lg p-8 h-full flex flex-col transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-[#00B4D8]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="text-gray-600 text-sm leading-relaxed flex-1 mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  "{review.text}"
                </p>
                <div>
                  <p
                    className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wide"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-gray-400 text-xs mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {review.title}
                  </p>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════ */
function FinalCTASection() {
  const { finalCTA } = config;

  return (
    <section id="contact" className="bg-[#00B4D8]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {finalCTA.headline}
            </h2>
            <p
              className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {finalCTA.body}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={finalCTA.primaryCTA.href}
                className="px-10 py-4 bg-white text-[#00B4D8] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#F5F7FA] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {finalCTA.primaryCTA.label}
              </a>
              <a
                href={finalCTA.secondaryCTA.href}
                className="px-10 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-[#00B4D8] transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {finalCTA.secondaryCTA.label}
              </a>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   STICKY MOBILE CTA
   ═══════════════════════════════════════════════════ */
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] px-6 py-3"
        >
          <a
            href="#contact"
            className="block w-full text-center px-6 py-3 bg-[#00B4D8] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#0096B7] transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get Your Free Quote
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════ */
export default function HomePage() {
  useBrandMeta("tricities-flooring", config.companyName);
  return (
    <div data-brand="tricities-flooring" className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <ServicesSection />
      <InlineCTA text="Ready to see samples in your home?" />
      <WhyTriCities />
      <ProcessSection />
      <ParallaxDivider />
      <ServiceAreasSection />
      <InlineCTA text="Let's create the space of your dreams." />
      <ReviewsSection />
      <FinalCTASection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
