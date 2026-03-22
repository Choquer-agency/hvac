import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function VideoSection() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  const { videoSection } = config;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
  };

  return (
    <section ref={ref} className="px-6 pt-6 pb-8 lg:pt-8 lg:pb-12">
      <div className="mx-auto max-w-7xl" ref={containerRef}>
        <motion.div style={{ scale, y }} className="mx-auto w-full">
          <div
            className="group relative cursor-pointer overflow-hidden bg-[#E8E6E3]"
            style={{
              aspectRatio: "16/9",
              borderRadius: "12px",
              clipPath: "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
              alt="Course preview"
              className="h-full w-full object-cover"
            />
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
            />

            {/* Diagonal line on cut corner */}
            <div
              className="pointer-events-none absolute"
              style={{
                top: -1,
                right: -1,
                width: Math.sqrt(60 * 60 * 2),
                height: 2,
                backgroundColor: "#E5E7EB",
                transformOrigin: "top right",
                transform: "rotate(45deg) translateX(0)",
                right: 0,
                top: 59,
              }}
            />

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={false}
              animate={{ opacity: hovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {hovered && <div className="absolute inset-0 bg-black/15" />}
              <motion.div
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur-sm transition-colors duration-300 hover:bg-white"
                animate={{ scale: hovered ? 1.1 : 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Play className="h-8 w-8 text-[#1A1A2E] ml-1" fill="#1A1A2E" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <h2
            className="text-3xl font-medium leading-tight text-[#1A1A2E] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {videoSection.headline}
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6B7280] lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {videoSection.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
