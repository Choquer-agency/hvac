import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Rocket, Target, ListOrdered, Users, Brain, Presentation, CheckCircle2, ArrowRight } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];
const iconMap = { Rocket, Target, ListOrdered, Users, Brain, Presentation };
const SQRT = (n) => Math.sqrt(n * n * 2);

export default function ConsultingPage() {
  const { consulting } = config;
  return (
    <>
      <ConsultingHero />
      <ServicesGrid services={consulting.services} />
      <HowItWorks steps={consulting.howItWorks} />
      <ConsultingCTA />
    </>
  );
}

function ConsultingHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { hero } = config.consulting;

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-28 pb-6 lg:pt-36 lg:pb-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}
          className="mb-10 flex flex-wrap items-center gap-5">
          {["Fractional CMO", "Strategic Consulting", "Hands-On Execution"].map((pill) => (
            <span key={pill} className="flex items-center gap-2 text-sm text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <CheckCircle2 className="h-4 w-4 text-[#1A2332]" strokeWidth={2.5} />{pill}
            </span>
          ))}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
          className="max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {hero.headline}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {hero.subtext}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4, ease }} className="mt-10">
          <Link to="/numbers-west/contact"
            className="group relative inline-flex items-center gap-3 px-7 py-4 text-base font-medium text-[#1A2332] transition-colors duration-300 hover:text-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 50" fill="none">
              <polygon points="1,1 182,1 199,18 199,49 1,49"
                className="stroke-[#1A2332] fill-transparent transition-all duration-300 group-hover:fill-[#1A2332]"
                strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="relative z-10 inline-flex items-center gap-3">
              <ArrowRight className="h-5 w-5 transition-colors duration-300 group-hover:text-white" />
              <span className="transition-colors duration-300 group-hover:text-white">Book a Discovery Call</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGrid({ services }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Rocket;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="nw-card-sm group flex flex-col overflow-hidden border border-gray-100 bg-white p-5 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#5088B8]/10">
                  <Icon className="h-5 w-5 text-[#5088B8]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{service.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ steps }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            How It Works
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className={`nw-card overflow-hidden border border-gray-100 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 sm:p-8 ${i === 1 ? "text-white border-[#1A2332]" : "bg-white"}`}
              style={i === 1 ? { backgroundColor: "#1A2332" } : undefined}
            >
              <span className={`text-5xl font-bold ${i === 1 ? "text-white/10" : "text-gray-100"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                0{step.step}
              </span>
              <h3 className={`mt-4 text-xl font-semibold ${i === 1 ? "text-white" : "text-[#1A2332]"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {step.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${i === 1 ? "text-white/60" : "text-[#8A9BB0]"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultingCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-8 pb-16">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
        className="nw-dark-card relative mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:px-16 sm:py-14"
        style={{ backgroundColor: "#1A2332" }}>
        <div className="pointer-events-none absolute" style={{ top: 79, right: -1, width: SQRT(80), height: 2, backgroundColor: "rgba(80,136,184,0.3)", transformOrigin: "top right", transform: "rotate(45deg)" }} />
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#5088B8]/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {config.consulting.cta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {config.consulting.cta.subtext}
          </p>
          <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/numbers-west/contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#1A2332] transition-all duration-200 hover:bg-gray-100" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Book a Discovery Call <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
