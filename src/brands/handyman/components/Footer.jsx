import config from "../config";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const servicesList = [
  "Plumbing",
  "Electrical",
  "Drywall",
  "Painting",
  "Furniture Assembly",
  "Door & Window Repair",
  "Deck Repair",
  "General Maintenance",
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
    <footer className="bg-[#16205B] text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={config.logo}
                alt={config.companyName}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p
              className="mb-6 text-sm leading-relaxed text-white/50"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              {config.footer.description}
            </p>
            <p
              className="text-base font-semibold text-[#F15928]"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Got a project? Just text me.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-5 text-sm font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-[#F15928]"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
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
              className="mb-5 text-sm font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {servicesList.map((s) => (
                <li key={s}>
                  <span
                    className="text-sm text-white/50"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-5 text-sm font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Get In Touch
            </h4>
            <ul
              className="space-y-3 text-sm text-white/50"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              <li>
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="transition-colors duration-300 hover:text-[#F15928]"
                >
                  {config.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="transition-colors duration-300 hover:text-[#F15928]"
                >
                  {config.email}
                </a>
              </li>
              <li>
                {config.address.city}, {config.address.state}{" "}
                {config.address.zip}
              </li>
              <li className="pt-2 text-white/30">
                Mon-Sat: 7am - 7pm
                <br />
                Sun: Emergency only
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} {config.companyName}. All rights
            reserved. Just a guy who fixes stuff.
          </p>
        </div>
      </div>
    </footer>
  );
}
