import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InfiniteSlider } from "../../../components/ui/infinite-slider";
import config from "../config";

export default function ClientLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const { partnerLogos } = config;

  return (
    <section ref={ref} className="bg-[#010101] py-16 md:py-20 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Trusted By Industry Leaders
        </motion.p>
      </div>

      <div className="relative">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#010101] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#010101] to-transparent z-10 pointer-events-none" />

        <InfiniteSlider gap={64} speed={40} speedOnHover={15}>
          {partnerLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-12 px-4 opacity-40 hover:opacity-80 transition-opacity duration-300"
            >
              <span
                className="text-gray-400 text-lg font-bold uppercase tracking-[0.15em] whitespace-nowrap select-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
