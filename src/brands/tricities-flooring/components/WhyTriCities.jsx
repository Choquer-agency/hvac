import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import config from "../config";

const differentiatorIcons = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function WhyTriCities() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const { whySection } = config;

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${whySection.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-white/90" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00B4D8] mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {whySection.eyebrow}
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] uppercase leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {whySection.headline}
            </h2>
            <p
              className="text-gray-500 leading-relaxed max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {whySection.body}
            </p>
          </motion.div>

          {/* Right — Differentiator Cards */}
          <div className="space-y-4">
            {whySection.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-lg p-6 pl-8 hover:border-[#00B4D8]/40 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Blue left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00B4D8]/20 group-hover:bg-[#00B4D8] transition-colors duration-300 rounded-l-lg" />

                <div className="flex items-start gap-5">
                  <div className="text-[#00B4D8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    {differentiatorIcons[item.icon] || differentiatorIcons.shield}
                  </div>
                  <div>
                    <h3
                      className="text-[#1a1a1a] font-bold text-base uppercase tracking-wide mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-500 text-sm leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
