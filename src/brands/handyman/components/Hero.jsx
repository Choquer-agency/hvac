import { motion } from "framer-motion";
import config from "../config";

const floatingBadges = [
  { label: "Plumbing", emoji: "🔧", top: "10%", right: "5%", delay: 0.4 },
  { label: "Electrical", emoji: "⚡", top: "25%", right: "-2%", delay: 0.55 },
  { label: "Painting", emoji: "🎨", bottom: "30%", right: "2%", delay: 0.7 },
  { label: "Drywall", emoji: "🏗️", bottom: "15%", right: "12%", delay: 0.85 },
  { label: "Doors", emoji: "🚪", top: "5%", left: "8%", delay: 0.6 },
  { label: "Decks", emoji: "🪵", bottom: "8%", left: "5%", delay: 0.75 },
];

const springTransition = {
  type: "spring",
  stiffness: 200,
  damping: 18,
};

export default function Hero() {
  const lines = config.hero.headline.split("\n");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#E1EAF9]"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-32 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12 lg:py-0">
        {/* Text Column */}
        <div className="relative z-10 max-w-xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-5 py-2 backdrop-blur-sm"
          >
            <span className="text-lg">👋</span>
            <span
              className="text-sm font-semibold text-[#16205B]/70"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Hey, I'm Jake — Austin's handyman
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {lines.map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.split(" ").map((word, i) => (
                  <motion.span
                    key={`${lineIdx}-${i}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      ...springTransition,
                      delay: 0.2 + (lineIdx * 3 + i) * 0.1,
                    }}
                    className="mr-[0.25em] inline-block text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight text-[#16205B]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.7 }}
            className="mb-8 max-w-md text-lg leading-relaxed text-[#16205B]/65"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            {config.hero.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href={config.hero.primaryCTA.href}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl bg-[#F15928] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#F15928]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#F15928]/30"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              {config.hero.primaryCTA.label}
            </motion.a>
            <motion.a
              href={config.hero.secondaryCTA.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl border-2 border-[#16205B]/20 bg-white/40 px-8 py-4 text-base font-bold text-[#16205B] backdrop-blur-sm transition-all duration-300 hover:border-[#16205B]/40 hover:bg-white/60"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              {config.hero.secondaryCTA.label}
            </motion.a>
          </motion.div>
        </div>

        {/* Image Column with Floating Badges */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-[3/4]">
              <img
                src={config.hero.image}
                alt="Handyman at work"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Floating Service Badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 15,
                delay: badge.delay,
              }}
              className="absolute z-20"
              style={{
                top: badge.top,
                right: badge.right,
                bottom: badge.bottom,
                left: badge.left,
              }}
            >
              <motion.div
                animate={{
                  y: [0, i % 2 === 0 ? -8 : -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + i * 0.5,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 shadow-lg backdrop-blur-md"
              >
                <span className="text-base">{badge.emoji}</span>
                <span
                  className="text-xs font-bold text-[#16205B]"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  {badge.label}
                </span>
              </motion.div>
            </motion.div>
          ))}

          {/* Decorative blob */}
          <div className="absolute -bottom-8 -right-8 -z-0 h-full w-full rounded-3xl bg-[#A3A9F5]/20" />
        </div>
      </div>
    </section>
  );
}
