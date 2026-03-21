import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import config from "../config";

const slowEase = [0.25, 0.46, 0.45, 0.94];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img
          src={config.hero.image}
          alt="Luxury interior design"
          className="h-[120%] w-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Text Content — centered, minimal */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        style={{ opacity: textOpacity }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: slowEase, delay: 0.3 }}
          className="mb-6 text-sm font-light uppercase tracking-[0.3em] text-white/70"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          {config.hero.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: slowEase, delay: 0.6 }}
          className="mb-8 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          {config.hero.headline}
        </motion.h1>

        {/* CTA */}
        <motion.a
          href={config.hero.primaryCTA.href}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: slowEase, delay: 1.2 }}
          className="group flex items-center gap-3 text-sm font-light tracking-[0.15em] uppercase text-[#C4A882] transition-colors duration-500 hover:text-white"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          {config.hero.primaryCTA.label}
          <svg
            width="20"
            height="20"
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
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="h-10 w-[1px] bg-white/30"
        />
      </motion.div>
    </section>
  );
}
