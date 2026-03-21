import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import config from "../config";

const smoothEase = [0.22, 1, 0.36, 1];

export default function Hero() {
  const words = config.hero.headline.split(" ");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F5F2EC]"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-32 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-0">
        {/* Text Column */}
        <div className="relative z-10 max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
            className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4A843]"
            style={{ fontFamily: "'Rethink Sans', sans-serif" }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.3 }}
              className="inline-block h-[2px] bg-[#D4A843]"
            />
            {config.hero.eyebrow}
          </motion.p>

          {/* Headline — staggered word animation */}
          <h1
            className="mb-8 text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#0F1520]"
            style={{ fontFamily: "'Rethink Sans', sans-serif" }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: smoothEase,
                  delay: 0.25 + i * 0.08,
                }}
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: smoothEase,
              delay: 0.25 + words.length * 0.08 + 0.1,
            }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-[#1B2A4A]/70"
          >
            {config.hero.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: smoothEase,
              delay: 0.25 + words.length * 0.08 + 0.25,
            }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={config.hero.primaryCTA.href}
              className="group relative overflow-hidden rounded-full bg-[#D4A843] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A843]/20 hover:-translate-y-0.5"
              style={{ fontFamily: "'Rethink Sans', sans-serif" }}
            >
              <span className="relative z-10">{config.hero.primaryCTA.label}</span>
              <span className="absolute inset-0 bg-[#B8912E] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </a>
            <a
              href={config.hero.secondaryCTA.href}
              className="group rounded-full border-2 border-[#1B2A4A]/20 px-8 py-3.5 text-sm font-semibold text-[#1B2A4A] transition-all duration-300 hover:border-[#1B2A4A]/50 hover:bg-[#1B2A4A]/5"
              style={{ fontFamily: "'Rethink Sans', sans-serif" }}
            >
              {config.hero.secondaryCTA.label}
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>

        {/* Image Column — with parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: smoothEase, delay: 0.4 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]">
            <motion.img
              src={config.hero.image}
              alt="Professional home inspection"
              className="h-full w-full object-cover"
              style={{ y: imageY, scale: imageScale }}
              loading="eager"
            />
          </div>
          {/* Decorative accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: smoothEase, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border-2 border-[#D4A843]/20"
          />
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase, delay: 1.2 }}
            className="absolute -left-4 bottom-12 hidden rounded-xl bg-white px-5 py-4 shadow-xl lg:block"
          >
            <p className="text-2xl font-bold text-[#0F1520]" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
              {config.stats[1].value}+
            </p>
            <p className="text-xs text-[#1B2A4A]/60">Projects Delivered</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-xs tracking-widest text-[#1B2A4A]/40">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-[#1B2A4A]/20"
        />
      </motion.div>
    </section>
  );
}
