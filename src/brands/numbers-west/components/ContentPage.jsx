import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];
const SQRT = (n) => Math.sqrt(n * n * 2);

export default function ContentPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}
          className="mb-10 flex flex-wrap items-center gap-5">
          {["Articles", "Frameworks", "AI Strategies"].map((pill) => (
            <span key={pill} className="flex items-center gap-2 text-sm text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <CheckCircle2 className="h-4 w-4 text-[#1A2332]" strokeWidth={2.5} />{pill}
            </span>
          ))}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
          className="max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {config.content.headline}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {config.content.body}
        </motion.p>

        {/* Newsletter-style card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4, ease }}
          className="relative mt-16 overflow-hidden bg-[#1A2332] px-8 py-14 sm:px-16 sm:py-18"
          className="nw-dark-card">
          <div className="pointer-events-none absolute" style={{ top: 79, right: -1, width: SQRT(80), height: 2, backgroundColor: "rgba(80,136,184,0.3)", transformOrigin: "top right", transform: "rotate(45deg)" }} />
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#5088B8]/10 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/60">
              <Sparkles className="h-3.5 w-3.5 text-[#B8D0E4]" />
              Coming soon
            </div>

            <h2 className="text-4xl font-medium leading-tight text-white sm:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Follow along on LinkedIn
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              In the meantime, follow Kathryn on LinkedIn for daily insights on product strategy, AI-augmented product ownership, and problem-first thinking.
            </p>

            <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={config.content.linkedinCTA.href} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#1A2332] transition-all duration-200 hover:bg-gray-100"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <Linkedin className="h-4 w-4" />
                {config.content.linkedinCTA.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Email signup */}
            <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input type="email" placeholder="Or subscribe for updates" className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/25 focus:border-[#5088B8] focus:ring-2 focus:ring-[#5088B8]/20" style={{ fontFamily: "'DM Sans', sans-serif" }} />
              <button className="rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
