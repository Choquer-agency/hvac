import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Newsletter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 pt-8 pb-16 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
        className="nw-dark-card relative mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:px-16 sm:py-18"
        style={{ backgroundColor: "#1A2332" }}>
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#5088B8]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#4E6E8E]/8 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="nw-card-sm mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 sm:mb-8">
            <Sparkles className="h-3.5 w-3.5 text-[#B8D0E4]" />Free weekly insights
          </div>

          <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Stay ahead of the curve
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50 sm:mt-5 sm:text-base lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Join product leaders getting our weekly breakdown of prioritization frameworks, AI tools, and problem-first strategies that are actually working right now.
          </p>

          <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:mt-10 sm:flex-row">
            <input type="email" placeholder="Enter your email address"
              className="flex-1 border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/25 focus:border-[#5088B8] focus:ring-2 focus:ring-[#5088B8]/20 sm:px-5 sm:py-4"
              style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "3px" }} />
            <button className="nw-card-sm group inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[#1A2332] transition-all duration-200 hover:bg-gray-100 sm:px-7 sm:py-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Subscribe <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <p className="mt-4 text-xs text-white/20" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            No spam, ever. Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
