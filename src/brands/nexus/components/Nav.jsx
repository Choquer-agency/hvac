import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import config from "../config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C3AED]">
              <span className="text-sm font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>N</span>
            </div>
            <span
              className="text-lg font-bold text-[#1A1A2E]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nexus
            </span>
          </a>

          {/* Center Links */}
          <div className="hidden items-center gap-1 rounded-full bg-gray-100/80 px-2 py-1.5 md:flex">
            {config.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm text-[#4A4A5A] transition-all duration-200 hover:bg-white hover:text-[#1A1A2E] hover:shadow-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Login + CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-[#4A4A5A] transition-colors hover:text-[#1A1A2E]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Login
            </a>
            <a
              href={config.nav.cta.href}
              className="rounded-full bg-[#7C3AED] px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/20"
            >
              {config.nav.cta.label}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 md:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="h-6 w-6 text-[#1A1A2E]" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="h-6 w-6 text-[#1A1A2E]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white/98 backdrop-blur-xl md:hidden"
          >
            {config.nav.links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl font-semibold text-[#1A1A2E]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={config.nav.cta.href}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 rounded-full bg-[#7C3AED] px-8 py-3 text-lg font-medium text-white"
            >
              {config.nav.cta.label}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
