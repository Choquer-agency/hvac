import config from "../config";

export default function Footer() {
  const { footer, trustBadges } = config;

  return (
    <footer id="contact" style={{ backgroundColor: "#1B2A4A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 — Brand */}
          <div>
            <div className="mb-4">
              <img
                src={config.logo}
                alt={config.companyName}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {footer.description}
            </p>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "Outfit, sans-serif", color: "#D4A843" }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              <li>{config.phone}</li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="hover:underline"
                  style={{ color: "#D4A843" }}
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

          {/* Column 3 — Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "Outfit, sans-serif", color: "#D4A843" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Models", href: "#models" },
                { label: "How It Works", href: "#process" },
                { label: "Packages", href: "#packages" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:underline"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div className="flex flex-wrap items-center gap-4">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "rgba(208,255,113,0.12)",
                  color: "#D4A843",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            &copy; {new Date().getFullYear()} {config.companyName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
