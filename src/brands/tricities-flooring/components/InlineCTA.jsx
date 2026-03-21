import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InlineCTA({ text = "Ready to see samples in your home?", buttonLabel = "Book a Free Consultation", href = "#contact" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative bg-white py-14 md:py-16 overflow-hidden">
      {/* Subtle top/bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
      >
        <p
          className="text-gray-500 text-base sm:text-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {text}
        </p>
        <a
          href={href}
          className="shrink-0 px-8 py-3.5 bg-[#00B4D8] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#0096B7] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {buttonLabel}
        </a>
      </motion.div>
    </section>
  );
}
