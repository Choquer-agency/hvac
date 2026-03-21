import { motion } from "framer-motion";

export default function SiteBackground() {
  return (
    <>
      {/* Grid — 10% darker */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(80,136,184,0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(80,136,184,0.09) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)",
        }}
      />

      {/* Aurora — top right — brighter blue pop */}
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundPosition: ["50% 50%, 50% 50%", "350% 50%, 350% 50%"],
        }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        style={{
          position: "fixed",
          top: "-100px",
          left: 0,
          right: 0,
          height: "110vh",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.35,
          filter: "blur(70px)",
          backgroundImage: `
            repeating-linear-gradient(100deg, transparent 0%, transparent 7%, rgba(244,247,250,0.5) 10%, rgba(244,247,250,0.5) 12%, transparent 16%),
            repeating-linear-gradient(100deg, rgba(59,130,246,0.35) 10%, rgba(80,136,184,0.3) 15%, rgba(96,165,250,0.28) 20%, rgba(147,197,253,0.22) 25%, rgba(59,130,246,0.30) 30%)
          `,
          backgroundSize: "300% 200%",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 80% 12%, black 0%, transparent 60%)",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 80% 12%, black 0%, transparent 60%)",
        }}
      />

      {/* Aurora — center left — warm blue accent */}
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundPosition: ["50% 50%, 50% 50%", "350% 50%, 350% 50%"],
        }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        style={{
          position: "fixed",
          top: "30vh",
          left: 0,
          right: 0,
          height: "80vh",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.2,
          filter: "blur(80px)",
          backgroundImage: `
            repeating-linear-gradient(100deg, transparent 0%, transparent 7%, rgba(244,247,250,0.4) 10%, rgba(244,247,250,0.4) 12%, transparent 16%),
            repeating-linear-gradient(100deg, rgba(96,165,250,0.30) 10%, rgba(59,130,246,0.22) 15%, rgba(80,136,184,0.25) 20%, rgba(147,197,253,0.18) 25%, rgba(96,165,250,0.25) 30%)
          `,
          backgroundSize: "300% 200%",
          WebkitMaskImage:
            "radial-gradient(ellipse 45% 40% at 15% 55%, black 0%, transparent 55%)",
          maskImage:
            "radial-gradient(ellipse 45% 40% at 15% 55%, black 0%, transparent 55%)",
        }}
      />

      {/* Aurora — bottom — deeper blue */}
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundPosition: ["50% 50%, 50% 50%", "350% 50%, 350% 50%"],
        }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "70vh",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.22,
          filter: "blur(70px)",
          backgroundImage: `
            repeating-linear-gradient(100deg, transparent 0%, transparent 7%, rgba(244,247,250,0.3) 10%, rgba(244,247,250,0.3) 12%, transparent 16%),
            repeating-linear-gradient(100deg, rgba(56,77,104,0.30) 10%, rgba(59,130,246,0.22) 15%, rgba(80,136,184,0.25) 20%, rgba(56,77,104,0.18) 25%, rgba(59,130,246,0.22) 30%)
          `,
          backgroundSize: "300% 200%",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 45% at 65% 88%, black 0%, transparent 55%)",
          maskImage:
            "radial-gradient(ellipse 55% 45% at 65% 88%, black 0%, transparent 55%)",
        }}
      />
    </>
  );
}
