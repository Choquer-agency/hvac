import { Link } from "react-router-dom";
import { useConfig } from "../hooks/useConfig";
import { useClientPath } from "../hooks/useClientPath";

export default function Footer() {
  const config = useConfig();
  const clientPath = useClientPath();
  const year = new Date().getFullYear();

  return (
    <footer className="text-gray-300" style={{ backgroundColor: "#202020" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Company Info */}
          <div>
            <Link to={clientPath("/")} className="flex items-center gap-2.5">
              <img src={config.logo} alt={config.companyName} className="h-8 w-auto brightness-0 invert" />
              <span className="text-xl font-bold text-white">{config.companyName}</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              {config.footer.description}
            </p>
            <a
              href={`tel:${config.phoneRaw}`}
              className="mt-4 inline-flex items-center gap-2 text-brand-light font-semibold hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {config.phone}
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {config.nav.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={clientPath(link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {config.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={clientPath(`/services/${service.slug}`)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2.5">
              {config.serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={clientPath(`/service-areas/${area.slug}`)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-white font-semibold mb-2">Hours</h3>
              <p className="text-sm text-gray-400">Mon-Fri: {config.hours.weekday}</p>
              <p className="text-sm text-gray-400">Sat: {config.hours.saturday}</p>
              <p className="text-sm text-gray-400">Sun: {config.hours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {year} {config.companyFullName}. All rights reserved.
          </p>
          <a
            href="https://choquer.agency/?utm_source=roofing_client&utm_medium=website_footer&utm_campaign=roofing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Built with love by
            <img
              src="/images/Choquer Agency Logo.svg"
              alt="Choquer Agency"
              className="h-4 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
