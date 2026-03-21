import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
    <span ref={ref} className="counter-number">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { hero, stats } = config;

  const renderHeadline = () => {
    if (!hero.highlightWord) return hero.headline;
    const parts = hero.headline.split(hero.highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#D4A843]">{hero.highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="hero" className="relative bg-[#1B2A4A] pt-20 md:pt-24 overflow-hidden">
      {/* Main hero content — tighter padding */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text with choreographed stagger */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#D4A843] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase leading-[1.05] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {renderHeadline()}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {hero.body}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={hero.primaryCTA.href}
                className="px-8 py-3.5 bg-[#D4A843] text-[#1B2A4A] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#B8912E] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {hero.primaryCTA.label}
              </a>
              <a
                href={hero.secondaryCTA.href}
                className="px-8 py-3.5 border-2 border-gray-600 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:border-[#D4A843] hover:text-[#D4A843] transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {hero.secondaryCTA.label}
              </a>
            </motion.div>
          </div>

          {/* Right — Image with clip-path reveal */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm bg-[#243656]">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#D4A843] z-10" />
              <img
                src={hero.backgroundImage}
                alt="Commercial construction project"
                className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="border-t border-[#243656] bg-[#1B2A4A]">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4A843] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <CounterNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <p
                  className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
