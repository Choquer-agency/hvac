import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const courseLinks = [
  { label: "Problem First", href: "/numbers-west/courses/problem-first", desc: "Vision & Strategy for Leaders" },
  { label: "AI-Augmented PO", href: "/numbers-west/courses/ai-augmented-po", desc: "Research & Prioritization at Speed" },
  { label: "Problem to Prototype", href: "/numbers-west/courses/problem-to-prototype", desc: "AI Building for Business Teams" },
];

const navLinks = [
  { label: "Consulting", href: "/numbers-west/consulting" },
  { label: "About", href: "/numbers-west/about" },
  { label: "Content", href: "/numbers-west/content" },
  { label: "Contact", href: "/numbers-west/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setCoursesOpen(false);
    setMobileCoursesOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setCoursesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href) => {
    if (href === "/numbers-west") return location.pathname === "/numbers-west" || location.pathname === "/numbers-west/";
    return location.pathname.startsWith(href);
  };

  const coursesActive = location.pathname.includes("/numbers-west/courses");

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/numbers-west" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center bg-[#384D68]"
              style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
              <span className="text-[10px] font-bold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>NW</span>
            </div>
            <span className="text-lg font-bold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Numbers West</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 rounded-full bg-gray-100/80 px-2 py-1.5 md:flex">
            {/* Courses dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setCoursesOpen(!coursesOpen)}
                className={`inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm transition-all duration-200 ${
                  coursesActive
                    ? "bg-white text-[#1A2332] shadow-sm font-medium"
                    : "text-[#4E6E8E] hover:bg-white hover:text-[#1A2332] hover:shadow-sm"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Courses
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${coursesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {coursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-2 w-72 overflow-hidden border border-gray-100 bg-white shadow-xl shadow-black/8"
                    style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}
                  >
                    <div className="p-2">
                      {courseLinks.map((course) => (
                        <Link
                          key={course.href}
                          to={course.href}
                          className={`block px-4 py-3 transition-all duration-150 hover:bg-[#F4F7FA] ${
                            isActive(course.href) ? "bg-[#F4F7FA]" : ""
                          }`}
                          style={{ borderRadius: "3px" }}
                        >
                          <p className="text-sm font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {course.label}
                          </p>
                          <p className="mt-0.5 text-xs text-[#8A9BB0]">{course.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href}
                className={`rounded-full px-4 py-1.5 text-sm transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-white text-[#1A2332] shadow-sm font-medium"
                    : "text-[#4E6E8E] hover:bg-white hover:text-[#1A2332] hover:shadow-sm"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/numbers-west/contact"
              className="bg-[#5088B8] px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#4078A8] hover:shadow-lg hover:shadow-[#5088B8]/20"
              style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}>
              Get Started
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="relative z-50 md:hidden" aria-label="Toggle menu">
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="h-6 w-6 text-[#1A2332]" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="h-6 w-6 text-[#1A2332]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 bg-white/98 backdrop-blur-xl md:hidden">

            {/* Courses accordion */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }} className="flex flex-col items-center">
              <button
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className={`inline-flex items-center gap-2 text-2xl font-semibold ${coursesActive ? "text-[#5088B8]" : "text-[#1A2332]"}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Courses
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileCoursesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 flex flex-col items-center gap-3">
                      {courseLinks.map((course) => (
                        <Link key={course.href} to={course.href}
                          className={`text-base ${isActive(course.href) ? "text-[#5088B8] font-medium" : "text-[#8A9BB0]"}`}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {course.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {navLinks.map((link, i) => (
              <motion.div key={link.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (i + 1) * 0.08 }}>
                <Link to={link.href} className={`text-2xl font-semibold ${isActive(link.href) ? "text-[#5088B8]" : "text-[#1A2332]"}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>{link.label}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Link to="/numbers-west/contact"
                className="mt-4 inline-block bg-[#5088B8] px-8 py-3 text-lg font-medium text-white"
                style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}>
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
