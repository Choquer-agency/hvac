import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function BCGrantCallout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { bcGrant } = config;

  return (
    <section ref={ref} className="px-4 py-12 sm:px-6 lg:py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
        className="nw-dark-card relative mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:px-16 sm:py-18"
        style={{ backgroundColor: "#1A2332" }}>
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#5088B8]/10 blur-[120px]" />

        <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-12">
          <div className="max-w-xl">
            <div className="nw-card-sm mb-4 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 sm:mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#B8D0E4]" />{bcGrant.label}
            </div>
            <h2 className="text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-4xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {bcGrant.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50 sm:mt-5 sm:text-base lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {bcGrant.body}
            </p>
            <div className="mt-6 sm:mt-8">
              <Link to={bcGrant.cta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#1A2332] transition-all duration-200 hover:bg-gray-100 sm:px-7 sm:py-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {bcGrant.cta.label} <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-6xl font-bold text-white/20 sm:text-7xl md:text-8xl lg:text-9xl" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.03em" }}>
              {bcGrant.stat}
            </span>
            <span className="mt-2 max-w-[200px] text-sm text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {bcGrant.statCaption}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
