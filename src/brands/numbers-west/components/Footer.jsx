import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import config from "../config";

export default function Footer() {
  const { footer } = config;
  const year = new Date().getFullYear();

  const footerColumns = [
    { title: "Quick Links", links: [
      { label: "Home", href: "/numbers-west" },
      { label: "About", href: "/numbers-west/about" },
      { label: "Consulting", href: "/numbers-west/consulting" },
      { label: "Contact", href: "/numbers-west/contact" },
    ]},
    { title: "Courses", links: [
      { label: "Problem First", href: "/numbers-west/courses/problem-first" },
      { label: "AI-Augmented PO", href: "/numbers-west/courses/ai-augmented-po" },
      { label: "Problem to Prototype", href: "/numbers-west/courses/problem-to-prototype" },
    ]},
    { title: "Connect", links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/kathrynchoquer", external: true },
      { label: "Email", href: "mailto:kathryn@numberswest.com", external: true },
    ]},
  ];

  return (
    <footer className="relative z-10 px-4 pt-12 pb-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <Link to="/numbers-west" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center bg-[#384D68]"
                style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
                <span className="text-[10px] font-bold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>NW</span>
              </div>
              <span className="text-lg font-bold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Numbers West</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{footer.description}</p>
            <div className="mt-6 flex gap-3">
              <a href="https://linkedin.com/in/kathrynchoquer" target="_blank" rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center bg-[#1A2332]/5 text-[#8A9BB0] transition-all duration-200 hover:bg-[#5088B8] hover:text-white"
                style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}
                aria-label="LinkedIn">
                <span className="text-xs font-medium">L</span>
              </a>
            </div>
            <p className="mt-8 text-xs text-[#8A9BB0]/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>&copy; {year} {config.companyName}. All rights reserved.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-sm font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-[#8A9BB0] transition-colors duration-200 hover:text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{link.label}</a>
                      ) : (
                        <Link to={link.href} className="text-sm text-[#8A9BB0] transition-colors duration-200 hover:text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite scrolling marquee */}
        <div className="mt-8 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[0, 1].map((copy) => (
              <span key={copy}
                className="inline-block select-none text-4xl font-bold sm:text-5xl md:text-7xl lg:text-[10rem] mr-8 sm:mr-16"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: "linear-gradient(to bottom, rgba(26,35,50,0.12), rgba(26,35,50,0.03))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}>
                NUMBERS WEST
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
