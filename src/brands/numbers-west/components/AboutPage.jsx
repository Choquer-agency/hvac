import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, ArrowRight, CheckCircle2, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];
const SQRT = (n) => Math.sqrt(n * n * 2);

export default function AboutPage() {
  return (<><AboutHero /><Bio /><Philosophy /><ConnectCTA /></>);
}

function AboutHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-28 pb-6 lg:pt-36 lg:pb-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}
          className="mb-10 flex flex-wrap items-center gap-5">
          {["30+ Years Experience", "SAFe Practice Consultant", "Cross-Industry Advisor"].map((pill) => (
            <span key={pill} className="flex items-center gap-2 text-sm text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <CheckCircle2 className="h-4 w-4 text-[#1A2332]" strokeWidth={2.5} />{pill}
            </span>
          ))}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
          className="max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Kathryn Choquer
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Founder, Numbers West. Product strategist. Problem definer. Vision scaler. —{" "}
          <span className="font-semibold text-[#1A2332]">she doesn't teach theory, she gives you the tactical structure to actually change how your organization works.</span>
        </motion.p>
      </div>
    </section>
  );
}

function Bio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Image + badges section (same pattern as AboutSection on home) */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative mx-auto max-w-3xl">
          <p className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none text-[4rem] font-bold leading-none tracking-tight text-gray-100 sm:text-[8rem] lg:text-[12rem]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>ABOUT</p>
          <div className="relative z-10 mx-auto flex justify-center">
            <div className="h-80 w-64 rounded-3xl bg-gradient-to-br from-[#384D68] to-[#4E6E8E] shadow-2xl shadow-black/10 sm:h-96 sm:w-72 flex items-center justify-center">
              <span className="text-5xl font-bold text-white/20" style={{ fontFamily: "'DM Sans', sans-serif" }}>KC</span>
            </div>
          </div>
          {[{ label: "Certified", sublabel: "SAFe Practice Consultant" }, { label: "Advisor", sublabel: "Companies Across North America" }].map((ach, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.5 + i * 0.15, duration: 0.5, ease }}
              className={`absolute z-20 hidden rounded-2xl bg-white p-3 shadow-xl shadow-black/8 sm:block ${i === 0 ? "left-0 top-1/4 sm:left-4 lg:left-8" : "right-0 bottom-1/4 sm:right-4 lg:right-8"}`}>
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${i === 0 ? "bg-[#B8D0E4]/30" : "bg-[#5088B8]/10"}`}>
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

        {/* Bio text */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mx-auto mt-20 max-w-3xl text-center">
          {config.about.bio.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 first:mt-0 text-base leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { philosophy } = config.about;

  return (
    <section ref={ref} className="px-4 sm:px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Dark card with clipped corner (newsletter-style) */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="nw-dark-card relative overflow-hidden px-6 py-10 sm:px-16 sm:py-14"
          style={{ backgroundColor: "#1A2332" }}>
          <div className="pointer-events-none absolute" style={{ top: 79, right: -1, width: SQRT(80), height: 2, backgroundColor: "rgba(80,136,184,0.3)", transformOrigin: "top right", transform: "rotate(45deg)" }} />
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#5088B8]/10 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#4E6E8E]/8 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-4xl font-medium leading-tight text-white sm:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {philosophy.headline}
            </h2>
            <div className="mt-8 space-y-5">
              {philosophy.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-white/60 lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quotes as clipped cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {philosophy.quotes.map((quote, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease }}
              className="nw-card-sm overflow-hidden border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
              <p className="text-sm font-medium italic text-[#1A2332] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                &ldquo;{quote}&rdquo;
              </p>
              <p className="mt-3 text-xs text-[#8A9BB0]">— Kathryn Choquer</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-8 pb-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Connect with Kathryn
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15, ease }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="https://linkedin.com/in/kathrynchoquer" target="_blank" rel="noopener noreferrer"
            className="nw-card-sm group inline-flex items-center gap-2 bg-[#1A2332] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2A3B4E]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="mailto:kathryn@numberswest.com"
            className="nw-card-sm inline-flex items-center gap-2 border-2 border-gray-200 bg-white px-7 py-4 text-sm font-semibold text-[#1A2332] transition-all duration-300 hover:border-[#5088B8] hover:text-[#5088B8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <Mail className="h-4 w-4" /> Email
          </a>
          <Link to="/numbers-west/contact"
            className="nw-card-sm group inline-flex items-center gap-2 bg-[#5088B8] px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4078A8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Book a Call <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
