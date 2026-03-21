import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function SectionLabel({ label, headline, subtext, light = false, centered = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={centered ? "text-center" : ""}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className={`mb-3 text-xs font-medium tracking-[0.2em] uppercase ${light ? "text-[#B8D0E4]/70" : "text-[#8A9BB0]"}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {label}
        </motion.p>
      )}
      {headline && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] leading-[1.2] ${light ? "text-white" : "text-[#1A2332]"}`}
          style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
        >
          {headline}
        </motion.h2>
      )}
      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${light ? "text-[#B8D0E4]/80" : "text-[#8A9BB0]"} ${centered ? "mx-auto" : ""}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
}
