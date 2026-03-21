import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../config";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
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

  // Lock body scroll when mobile menu is open
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
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "'Rethink Sans', sans-serif" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
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
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative text-sm font-medium tracking-wide text-[#3D3E3D]/70 transition-colors duration-300 hover:text-[#3D3E3D]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#F89525] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="rounded-full bg-[#F89525] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e8871d] hover:shadow-lg hover:shadow-[#F89525]/20 hover:-translate-y-0.5"
          >
            Start Your Project
          </a>
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
                ? { rotate: 45, y: 6, background: "#3D3E3D" }
                : { rotate: 0, y: 0, background: "#3D3E3D" }
            }
            className="block h-0.5 w-6 rounded-full bg-[#3D3E3D]"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 rounded-full bg-[#3D3E3D]"
          />
          <motion.span
            animate={
              mobileOpen
                ? { rotate: -45, y: -6, background: "#3D3E3D" }
                : { rotate: 0, y: 0, background: "#3D3E3D" }
            }
            className="block h-0.5 w-6 rounded-full bg-[#3D3E3D]"
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#FAF7F2] md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-semibold text-[#3D3E3D] transition-colors hover:text-[#F89525]"
                style={{ fontFamily: "'Rethink Sans', sans-serif" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: navLinks.length * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 rounded-full bg-[#F89525] px-10 py-3.5 text-lg font-semibold text-white"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
