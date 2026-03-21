import config from "../config";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2A4A] border-t border-[#243656]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4 text-white">
              <Logo className="h-10 w-auto" />
            </a>
            <p
              className="text-gray-500 text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {config.footer.description}
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A843] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {config.services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/services/${service.slug}`}
                    className="text-gray-400 text-sm hover:text-[#D4A843] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A843] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {config.nav.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#D4A843] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A843] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact
            </h4>
            <ul
              className="space-y-3 text-gray-400 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <li>
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="hover:text-[#D4A843] transition-colors"
                >
                  {config.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-[#D4A843] transition-colors"
                >
                  {config.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {config.address.street}
                <br />
                {config.address.city}, {config.address.state}{" "}
                {config.address.zip}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#243656]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-gray-600 text-xs uppercase tracking-wider"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            &copy; {currentYear} {config.companyName}. All rights reserved.
          </p>
          <p
            className="text-gray-600 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            License #{config.licenseNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
