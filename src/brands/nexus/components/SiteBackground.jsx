import { motion } from "framer-motion";

export default function SiteBackground() {
  return (
    <>
      {/* Grid — 50% darker, full page */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(124,58,237,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124,58,237,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 80%)",
        }}
      />

      {/* Aurora glow — TOP RIGHT — strong and visible */}
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundPosition: [
            "50% 50%, 50% 50%",
            "350% 50%, 350% 50%",
          ],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-100px",
          left: 0,
          right: 0,
          height: "120vh",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 1,
          filter: "blur(60px)",
          backgroundImage: `
            repeating-linear-gradient(100deg, transparent 0%, transparent 7%, rgba(250,250,248,0.6) 10%, rgba(250,250,248,0.6) 12%, transparent 16%),
            repeating-linear-gradient(100deg, rgba(124,58,237,0.35) 10%, rgba(167,139,250,0.25) 15%, rgba(244,132,95,0.20) 20%, rgba(6,214,160,0.15) 25%, rgba(124,58,237,0.30) 30%)
          `,
          backgroundSize: "300% 200%",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 80% 10%, black 0%, transparent 60%)",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 80% 10%, black 0%, transparent 60%)",
        }}
      />

      {/* Aurora glow — CENTER LEFT — warm peach/gold */}
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundPosition: [
            "50% 50%, 50% 50%",
            "350% 50%, 350% 50%",
          ],
        }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "40vh",
          left: 0,
          right: 0,
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.8,
          filter: "blur(70px)",
          backgroundImage: `
            repeating-linear-gradient(100deg, transparent 0%, transparent 7%, rgba(250,250,248,0.4) 10%, rgba(250,250,248,0.4) 12%, transparent 16%),
            repeating-linear-gradient(100deg, rgba(244,132,95,0.30) 10%, rgba(255,209,102,0.22) 15%, rgba(124,58,237,0.20) 20%, rgba(6,214,160,0.15) 25%, rgba(244,132,95,0.25) 30%)
          `,
          backgroundSize: "300% 200%",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 40% at 20% 50%, black 0%, transparent 55%)",
          maskImage:
            "radial-gradient(ellipse 50% 40% at 20% 50%, black 0%, transparent 55%)",
        }}
      />

      {/* Aurora glow — BOTTOM — purple/blue */}
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundPosition: [
            "50% 50%, 50% 50%",
            "350% 50%, 350% 50%",
          ],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80vh",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.6,
          filter: "blur(60px)",
          backgroundImage: `
            repeating-linear-gradient(100deg, transparent 0%, transparent 7%, rgba(250,250,248,0.3) 10%, rgba(250,250,248,0.3) 12%, transparent 16%),
            repeating-linear-gradient(100deg, rgba(124,58,237,0.25) 10%, rgba(59,130,246,0.18) 15%, rgba(167,139,250,0.22) 20%, rgba(124,58,237,0.18) 25%, rgba(59,130,246,0.20) 30%)
          `,
          backgroundSize: "300% 200%",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 60% 90%, black 0%, transparent 55%)",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 60% 90%, black 0%, transparent 55%)",
        }}
      />
    </>
  );
}
