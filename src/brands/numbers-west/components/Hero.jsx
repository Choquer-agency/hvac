import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];

// SVG-bordered angled button — uniform 2px stroke on all edges including diagonal
function AngledButton({ href, children }) {
  const cut = 18;
  return (
    <a href={href} className="group relative inline-flex items-center gap-3 px-7 py-4 text-base font-medium text-[#1A2332] transition-colors duration-300 hover:text-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* SVG border + hover fill */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 50" fill="none">
        <polygon
          points={`1,1 ${200 - cut},1 ${200 - 1},${cut} ${200 - 1},49 1,49`}
          className="stroke-[#1A2332] fill-transparent transition-all duration-300 group-hover:fill-[#1A2332]"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="relative z-10 inline-flex items-center gap-3">
        {children}
      </span>
    </a>
  );
}

export default function Hero() {
  const { hero } = config;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="px-4 pt-24 pb-6 sm:px-6 sm:pt-28 lg:pt-36 lg:pb-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}
          className="mb-10 flex flex-wrap items-center gap-5">
          {hero.featurePills.map((pill, i) => (
            <span key={i} className="flex items-center gap-2 text-sm text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <CheckCircle2 className="h-4 w-4 text-[#1A2332]" strokeWidth={2.5} />{pill}
            </span>
          ))}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
          className="max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-[#1A2332]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {hero.headline}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {hero.body}{" "}<span className="font-semibold text-[#1A2332]">{hero.bodyBold}</span>
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4, ease }} className="mt-10">
          <AngledButton href={hero.primaryCTA.href}>
            <ArrowRight className="h-5 w-5 transition-colors duration-300 group-hover:text-white" />
            <span className="transition-colors duration-300 group-hover:text-white">{hero.primaryCTA.label}</span>
          </AngledButton>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.55, ease }}
          className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-2.5">
            {["bg-[#384D68]", "bg-[#5088B8]", "bg-[#4E6E8E]", "bg-[#B8D0E4]", "bg-[#8A9BB0]"].map((bg, i) => (
              <div key={i} className={`flex h-9 w-9 items-center justify-center border-[2.5px] border-[#F4F7FA] ${bg} text-[10px] font-bold text-white`}
                style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)" }}>
                {["KC", "VP", "PO", "CIO", "PM"][i]}
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{hero.socialProof.count}</p>
            <p className="text-xs text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{hero.socialProof.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
