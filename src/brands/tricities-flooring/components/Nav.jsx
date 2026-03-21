import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../config";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img
            src={config.logo}
            alt={config.companyName}
            className="h-10 md:h-12 w-auto"
            data-no-shimmer
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {config.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-semibold uppercase tracking-widest text-gray-500 hover:text-[#1a1a1a] transition-colors group"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00B4D8] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-6 py-2.5 bg-[#00B4D8] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#0096B7] transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Free Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[#00B4D8]"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-[#00B4D8]"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block w-6 h-0.5 bg-[#00B4D8]"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-[#E2E8F0]"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {config.nav.links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold uppercase tracking-widest text-gray-500 hover:text-[#00B4D8] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-block text-center px-6 py-3 bg-[#00B4D8] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#0096B7] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Get Your Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
