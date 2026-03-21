import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import config from "../config";

const smoothEase = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { hero } = config;
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={sectionRef} id="home" className="relative w-full bg-white">
      {/* Text Content — sits on white bg, below nav */}
      <div className="pt-28 lg:pt-36 pb-12 lg:pb-16 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{
                  backgroundColor: "#F0F7F0",
                  color: "#2D6A4F",
                  fontFamily: "Outfit, sans-serif",
                  border: "1px solid rgba(45,106,79,0.2)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                {hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#193133] leading-[1.05] tracking-tight mb-5"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Modern homes,
              <br />
              <span style={{ color: "#2D6A4F" }}>built smarter</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: smoothEase }}
              className="text-base sm:text-lg text-[#2A4A4D] max-w-lg leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {hero.body}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: smoothEase }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={hero.primaryCTA.href}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#193133]/15"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  backgroundColor: "#193133",
                  color: "#FFFFFF",
                }}
              >
                {hero.primaryCTA.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href={hero.secondaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold border border-[#193133]/20 text-[#193133] hover:bg-[#F0F7F0] transition-all duration-300"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {hero.secondaryCTA.label}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-width Image — clean, no overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: smoothEase }}
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(300px, 55vh, 600px)" }}
      >
        <motion.img
          src={hero.image}
          alt="Evergreen modular home"
          className="w-full h-full object-cover"
          style={{ scale: imageScale }}
        />
      </motion.div>
    </section>
  );
}
