import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Star } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];

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
      if (start >= target) { setCount(value); clearInterval(timer); }
      else {
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
    <section id="about" ref={ref} className="px-4 py-16 sm:px-6 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>{aboutSection.headline}</h2>
          <p className="mt-4 text-base leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{aboutSection.body}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative mx-auto mt-16 max-w-3xl">
          <p className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none text-[4rem] font-bold leading-none tracking-tight text-gray-100 sm:text-[8rem] lg:text-[12rem] overflow-hidden"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>ABOUT</p>
          <div className="relative z-10 mx-auto flex justify-center">
            <div className="nw-card-sm h-64 w-48 bg-gradient-to-br from-[#384D68] to-[#4E6E8E] shadow-2xl shadow-black/10 sm:h-96 sm:w-72 flex items-center justify-center">
              <span className="text-5xl font-bold text-white/20" style={{ fontFamily: "'DM Sans', sans-serif" }}>KC</span>
            </div>
          </div>

          {aboutSection.achievements.map((ach, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease }}
              className={`nw-card-sm absolute z-20 hidden bg-white p-3 shadow-xl shadow-black/8 sm:block ${i === 0 ? "left-0 top-1/4 sm:left-4 lg:left-8" : "right-0 bottom-1/4 sm:right-4 lg:right-8"}`}>
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center ${i === 0 ? "bg-[#B8D0E4]/30" : "bg-[#5088B8]/10"}`}
                  style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
                  {i === 0 ? <Award className="h-5 w-5 text-[#4E6E8E]" /> : <Star className="h-5 w-5 text-[#5088B8]" />}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1A2332]">{ach.label}</p>
                  <p className="text-[10px] text-[#8A9BB0]">{ach.sublabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mx-auto mt-20 grid max-w-4xl gap-8 sm:grid-cols-3">
          {aboutSection.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-bold text-[#1A2332] sm:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <Counter value={stat.value} suffix={stat.value.includes("%") ? "%" : ""} />
              </p>
              <p className="mt-2 text-sm text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
