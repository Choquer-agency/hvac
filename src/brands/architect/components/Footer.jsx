import config from "../config";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Custom Residences",
  "Commercial Architecture",
  "Renovation",
  "Interior Architecture",
  "Pre-Construction",
  "Sustainable Design",
];

export default function Footer() {
  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#3D3E3D] text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={config.logo}
                alt={config.companyName}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              {config.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-5 text-sm font-semibold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Rethink Sans', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-[#F89525]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-5 text-sm font-semibold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Rethink Sans', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/50">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-5 text-sm font-semibold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Rethink Sans', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="transition-colors duration-300 hover:text-[#F89525]"
                >
                  {config.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="transition-colors duration-300 hover:text-[#F89525]"
                >
                  {config.email}
                </a>
              </li>
              <li>
                {config.address.street}
                <br />
                {config.address.city}, {config.address.state}{" "}
                {config.address.zip}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {config.companyFullName}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
