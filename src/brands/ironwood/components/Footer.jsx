import config from "../config";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
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
    <footer className="bg-[#3B4841] text-[#FDF8F0]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Column */}
          <div>
            <img
              src={config.logo}
              alt={config.companyName}
              className="h-10 w-auto mb-3 brightness-0 invert"
            />
            <p
              className="mb-6 text-sm leading-relaxed text-[#FDF8F0]/50"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Crafting homes since {config.foundedYear}.
            </p>
            <p
              className="text-sm leading-relaxed text-[#FDF8F0]/40"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              {config.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="mb-6 text-xs font-light uppercase tracking-[0.2em] text-[#FDF8F0]/40"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm font-light text-[#FDF8F0]/60 transition-colors duration-500 hover:text-[#ED6442]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-6 text-xs font-light uppercase tracking-[0.2em] text-[#FDF8F0]/40"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Contact
            </h4>
            <ul
              className="space-y-4 text-sm font-light text-[#FDF8F0]/60"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <li>
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="transition-colors duration-500 hover:text-[#ED6442]"
                >
                  {config.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="transition-colors duration-500 hover:text-[#ED6442]"
                >
                  {config.email}
                </a>
              </li>
              <li className="text-[#FDF8F0]/40">
                {config.address.street}
                <br />
                {config.address.city}, {config.address.state}{" "}
                {config.address.zip}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-20 border-t border-[#FDF8F0]/10 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p
            className="text-xs text-[#FDF8F0]/25"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} {config.companyFullName}. All
            rights reserved.
          </p>
          <p
            className="text-xs italic text-[#FDF8F0]/20"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Where vision meets craft.
          </p>
        </div>
      </div>
    </footer>
  );
}
