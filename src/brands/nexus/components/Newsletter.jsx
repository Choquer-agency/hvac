import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Newsletter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-6 pt-8 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="relative mx-auto max-w-7xl overflow-hidden bg-[#1A1A2E] px-8 py-14 sm:px-16 sm:py-18"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% 100%, 0 100%)",
          borderRadius: "20px",
        }}
      >
        {/* Diagonal accent line */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: 79,
            right: -1,
            width: Math.sqrt(80 * 80 * 2),
            height: 2,
            backgroundColor: "rgba(124,58,237,0.3)",
            transformOrigin: "top right",
            transform: "rotate(45deg)",
          }}
        />

        {/* Glow effects */}
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#F4845F]/8 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/60">
            <Sparkles className="h-3.5 w-3.5 text-[#FFD166]" />
            Free weekly insights
          </div>

          <h2
            className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Stay ahead of the curve
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join 12,000+ marketers getting our weekly breakdown of AI tools, prompts, and strategies that are actually working right now.
          </p>

          <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/25 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#1A1A2E] transition-all duration-200 hover:bg-gray-100"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <p className="mt-4 text-xs text-white/20" style={{ fontFamily: "'Inter', sans-serif" }}>
            No spam, ever. Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
