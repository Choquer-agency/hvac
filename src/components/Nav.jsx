import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useConfig } from "../hooks/useConfig";
import { useClientPath } from "../hooks/useClientPath";
import CTAButton from "./CTAButton";

export default function Nav() {
  const config = useConfig();
  const clientPath = useClientPath();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href) => {
    const fullPath = clientPath(href);
    if (href === "/") return location.pathname === fullPath;
    return location.pathname.startsWith(fullPath);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={clientPath("/")} className="flex items-center gap-2.5 shrink-0">
            <img src={config.logo} alt={config.companyName} className="h-8 lg:h-10 w-auto" />
            <span className="text-xl lg:text-2xl font-bold text-surface-dark">
              {config.companyName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {config.nav.links.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={clientPath(link.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-brand bg-brand/5"
                        : "text-gray-700 hover:text-brand hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                    <svg className="inline-block w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in">
                      {config.services.map((service) => (
                        <Link
                          key={service.slug}
                          to={clientPath(`/services/${service.slug}`)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand/5 hover:text-brand transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={clientPath(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-brand bg-brand/5"
                      : "text-gray-700 hover:text-brand hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${config.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-brand transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {config.phone}
            </a>
            <CTAButton label="Contact Us" href="/contact" variant="nav" />
          </div>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${config.phoneRaw}`}
              className="p-2 text-brand"
              aria-label="Call us"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {config.nav.links.map((link) => (
              <div key={link.label}>
                <Link
                  to={clientPath(link.href)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-brand bg-brand/5"
                      : "text-gray-700 hover:text-brand hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {config.services.map((service) => (
                      <Link
                        key={service.slug}
                        to={clientPath(`/services/${service.slug}`)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-brand rounded-lg hover:bg-gray-50"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <CTAButton label="Contact Us" href="/contact" variant="primary" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
