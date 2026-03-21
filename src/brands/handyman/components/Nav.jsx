import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../config";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#E1EAF9]/90 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "'Figtree', sans-serif" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3"
        >
          <img
            src={config.logo}
            alt={config.companyName}
            className="h-10 lg:h-12 w-auto"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full px-5 py-2 text-sm font-semibold text-[#16205B]/70 transition-colors duration-300 hover:bg-white/50 hover:text-[#16205B]"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="tel:5125550143"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="ml-3 rounded-full bg-[#F15928] px-7 py-2.5 text-sm font-bold text-white shadow-md shadow-[#F15928]/25 transition-all duration-300 hover:bg-[#d94d20] hover:shadow-lg hover:shadow-[#F15928]/30"
          >
            Call Jake
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={
              mobileOpen
                ? { rotate: 45, y: 6, background: "#0372FF" }
                : { rotate: 0, y: 0, background: "#16205B" }
            }
            className="block h-0.5 w-6 rounded-full bg-[#16205B]"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 rounded-full bg-[#16205B]"
          />
          <motion.span
            animate={
              mobileOpen
                ? { rotate: -45, y: -6, background: "#0372FF" }
                : { rotate: 0, y: 0, background: "#16205B" }
            }
            className="block h-0.5 w-6 rounded-full bg-[#16205B]"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-[#E1EAF9] md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="rounded-2xl px-8 py-3 text-2xl font-bold text-[#16205B] transition-colors hover:bg-white/50"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:5125550143"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: navLinks.length * 0.08,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="mt-4 rounded-full bg-[#F15928] px-12 py-4 text-lg font-bold text-white shadow-lg shadow-[#F15928]/25"
            >
              Call Jake
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
