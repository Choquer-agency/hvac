import { useConfig } from "../hooks/useConfig";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid({ showHeader = true }) {
  const config = useConfig();

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-3">
              {config.servicesSection.eyebrow}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-surface-dark">
              {config.servicesSection.headline}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {config.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
