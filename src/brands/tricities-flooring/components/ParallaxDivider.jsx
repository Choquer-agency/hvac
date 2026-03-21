import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import config from "../config";

export default function ParallaxDivider() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const { parallaxDivider } = config;

  return (
    <section
      ref={sectionRef}
      className="relative h-[300px] md:h-[400px] overflow-hidden"
    >
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-125"
          style={{ backgroundImage: `url(${parallaxDivider.image})` }}
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Stats */}
          <div className="flex gap-12 md:gap-20 mb-6">
            {parallaxDivider.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-4xl md:text-6xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.number}{stat.suffix}
                </div>
                <p
                  className="text-white/70 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          {/* Tagline */}
          <p
            className="text-lg md:text-2xl font-bold text-white uppercase tracking-wider"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {parallaxDivider.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
