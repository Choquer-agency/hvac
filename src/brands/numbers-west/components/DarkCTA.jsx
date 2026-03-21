import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function DarkCTA({ headline, subtext, primaryCTA, secondaryCTA }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32" style={{ background: "linear-gradient(135deg, #384D68, #4E6E8E)" }}>
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }}
          className="text-3xl font-bold text-white md:text-4xl lg:text-[2.5rem] leading-[1.2]" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}>
          {headline}
        </motion.h2>
        {subtext && (
          <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-4 text-base text-[#B8D0E4]/80 md:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {subtext}
          </motion.p>
        )}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {primaryCTA && (
            <Link to={primaryCTA.href} className="inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#384D68] transition-all duration-200 hover:bg-[#F4F7FA] hover:shadow-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {primaryCTA.label}
            </Link>
          )}
          {secondaryCTA && (
            <Link to={secondaryCTA.href} className="inline-block rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {secondaryCTA.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
