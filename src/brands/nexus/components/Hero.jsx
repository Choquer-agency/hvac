import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { hero } = config;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="px-6 pt-28 pb-6 lg:pt-36 lg:pb-8">
      <div className="mx-auto max-w-6xl">
        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-10 flex flex-wrap items-center gap-5"
        >
          {hero.featurePills.map((pill, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-sm text-[#1A1A2E]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <CheckCircle2 className="h-4 w-4 text-[#1A1A2E]" strokeWidth={2.5} />
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Massive headline — lighter weight */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-[#1A1A2E]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {hero.headline}
        </motion.h1>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#6B7280]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {hero.body}{" "}
          <span className="font-semibold text-[#1A1A2E]">{hero.bodyBold}</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-10"
        >
          <a
            href={hero.primaryCTA.href}
            className="group inline-flex items-center gap-3 rounded-full border-2 border-[#1A1A2E] px-7 py-4 text-base font-medium text-[#1A1A2E] transition-all duration-300 hover:bg-[#1A1A2E] hover:text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1A2E] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#1A1A2E]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            {hero.primaryCTA.label}
          </a>
        </motion.div>

        {/* Social proof — tight to video */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55, ease }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="flex -space-x-2.5">
            {["bg-[#7C3AED]", "bg-[#F4845F]", "bg-[#FFD166]", "bg-[#06D6A0]", "bg-[#3B82F6]"].map(
              (bg, i) => (
                <div
                  key={i}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-[2.5px] border-[#FAFAF8] ${bg} text-[10px] font-bold text-white`}
                >
                  {["JD", "MK", "AS", "KL", "RT"][i]}
                </div>
              )
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1A1A2E]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {hero.socialProof.count}
            </p>
            <p className="text-xs text-[#6B7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
              {hero.socialProof.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
