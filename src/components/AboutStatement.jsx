import { useRef } from "react";
import { useConfig } from "../hooks/useConfig";
import { motion, useScroll, useTransform } from "framer-motion";

function Word({ word, scrollYProgress, start, end }) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["#D1D5DB", "var(--color-dark)"]
  );

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}

export default function AboutStatement() {
  const config = useConfig();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.55"],
  });

  const text = `We protect the homes and families of ${config.address.city} — with expert roofing backed by ${config.reviews.count}+ five-star reviews and a commitment to doing every job right the first time`;
  const words = text.split(" ");

  return (
    <section ref={ref} className="py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-6">
          About {config.companyName}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.2] tracking-tight max-w-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                word={word}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </h2>
      </div>
    </section>
  );
}
