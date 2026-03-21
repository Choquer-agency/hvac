import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import config from "../config";

function CounterNumber({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ParallaxDivider() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const { parallaxDivider } = config;

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-[-15%] bg-cover bg-center"
          style={{ backgroundImage: `url(${parallaxDivider.image})` }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated stats line */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-[#D4A843]">
              <CounterNumber target={parallaxDivider.stats[0].number} suffix={parallaxDivider.stats[0].suffix} />
            </span>{" "}
            {parallaxDivider.stats[0].label}.{" "}
            <span className="text-[#D4A843]">
              <CounterNumber target={parallaxDivider.stats[1].number} suffix={parallaxDivider.stats[1].suffix} />
            </span>{" "}
            {parallaxDivider.stats[1].label}.
          </h2>
          <p
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase mb-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {parallaxDivider.tagline}
          </p>
        </motion.div>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block px-10 py-4 bg-[#D4A843] text-[#1B2A4A] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#B8912E] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Get a Quote
        </motion.a>
      </div>
    </section>
  );
}
