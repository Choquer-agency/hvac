import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Star } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];

/* ── Animated counter ── */
function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const numericPart = value.replace(/[^0-9]/g, "");
    const target = parseInt(numericPart);
    if (isNaN(target)) { setCount(value); return; }

    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(value);
        clearInterval(timer);
      } else {
        const formatted = Math.floor(start);
        if (value.includes("K")) setCount(formatted + "K");
        else if (value.includes("M")) setCount(formatted + "M");
        else setCount(String(formatted));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { aboutSection } = config;

  return (
    <section id="about" ref={ref} className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            className="text-3xl font-bold text-[#1A1A2E] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {aboutSection.headline}
          </h2>
          <p
            className="mt-4 text-base leading-relaxed text-[#6B7280]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {aboutSection.body}
          </p>
        </motion.div>

        {/* Image + badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          {/* Large background text */}
          <p
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none text-[8rem] font-bold leading-none tracking-tight text-gray-100 sm:text-[12rem]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ABOUT
          </p>

          {/* Central image */}
          <div className="relative z-10 mx-auto flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
              alt="Marketing professional"
              className="h-80 w-64 rounded-3xl object-cover shadow-2xl shadow-black/10 sm:h-96 sm:w-72"
            />
          </div>

          {/* Achievement badges */}
          {aboutSection.achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease }}
              className={`absolute z-20 hidden rounded-2xl bg-white p-3 shadow-xl shadow-black/8 sm:block ${
                i === 0
                  ? "left-0 top-1/4 sm:left-4 lg:left-8"
                  : "right-0 bottom-1/4 sm:right-4 lg:right-8"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    i === 0 ? "bg-[#FFE0D0]" : "bg-[#7C3AED]/10"
                  }`}
                >
                  {i === 0 ? (
                    <Award className="h-5 w-5 text-[#F4845F]" />
                  ) : (
                    <Star className="h-5 w-5 text-[#7C3AED]" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1A1A2E]">{ach.label}</p>
                  <p className="text-[10px] text-[#6B7280]">{ach.sublabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mx-auto mt-20 grid max-w-4xl gap-8 sm:grid-cols-3"
        >
          {aboutSection.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-4xl font-bold text-[#1A1A2E] sm:text-5xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <Counter value={stat.value} suffix={stat.value.includes("%") ? "%" : ""} />
              </p>
              <p className="mt-2 text-sm text-[#6B7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
