import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../config";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#F5F0EB]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo / Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3"
        >
          <img
            src={config.logo}
            alt={config.companyName}
            className="h-10 lg:h-12 w-auto transition-all duration-700"
            style={{
              filter: scrolled
                ? "brightness(0.2)"
                : "brightness(0) invert(1)",
            }}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative text-sm font-light tracking-wide transition-colors duration-500"
              style={{
                fontFamily: "'Jost', sans-serif",
                color: scrolled
                  ? "rgba(74, 64, 56, 0.6)"
                  : "rgba(245, 240, 235, 0.7)",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = scrolled ? "#4A4038" : "#F5F0EB";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = scrolled
                  ? "rgba(74, 64, 56, 0.6)"
                  : "rgba(245, 240, 235, 0.7)";
              }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-current transition-all duration-500 group-hover:w-full" />
            </a>
          ))}

          {/* Inquire Link */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center gap-2 text-sm tracking-wide transition-colors duration-500"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              color: scrolled ? "#C4A882" : "#C4A882",
            }}
          >
            Inquire
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={
              mobileOpen
                ? { rotate: 45, y: 7, background: "#4A4038" }
                : {
                    rotate: 0,
                    y: 0,
                    background: scrolled ? "#4A4038" : "#F5F0EB",
                  }
            }
            transition={{ duration: 0.4 }}
            className="block h-[1px] w-6"
          />
          <motion.span
            animate={
              mobileOpen
                ? { opacity: 0 }
                : { opacity: 1 }
            }
            transition={{ duration: 0.3 }}
            className="block h-[1px] w-6"
            style={{
              background: scrolled ? "#4A4038" : "#F5F0EB",
            }}
          />
          <motion.span
            animate={
              mobileOpen
                ? { rotate: -45, y: -7, background: "#4A4038" }
                : {
                    rotate: 0,
                    y: 0,
                    background: scrolled ? "#4A4038" : "#F5F0EB",
                  }
            }
            transition={{ duration: 0.4 }}
            className="block h-[1px] w-6"
          />
        </button>
      </div>

      {/* Mobile Menu — elegant slide from right */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center bg-[#F5F0EB] px-12 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 + i * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mb-8 text-3xl text-[#4A4038] transition-colors duration-300 hover:text-[#C4A882]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2 + navLinks.length * 0.1,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mt-4 flex items-center gap-3 text-lg tracking-wide text-[#C4A882]"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              Inquire
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
