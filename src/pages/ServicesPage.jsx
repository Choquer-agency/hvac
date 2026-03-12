import { useConfig } from "../hooks/useConfig";
import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import ServiceGrid from "../components/ServiceGrid";
import FinalCTA from "../components/FinalCTA";

export default function ServicesPage() {
  const config = useConfig();

  return (
    <>
      <SEOHead
        title={`HVAC Services in ${config.address.city}, ${config.address.state}`}
        description={`${config.companyFullName} offers AC repair, heating repair, installation, maintenance, and indoor air quality services in ${config.address.city}. Call today!`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} />
      </div>

      <PageHero
        eyebrow={config.servicesSection.eyebrow}
        headline={config.servicesSection.headline}
        body={`Whatever your heating and cooling needs, ${config.companyName} has you covered with expert service and upfront pricing.`}
      />

      <div className="relative overflow-x-clip">
        <div
          className="absolute top-[100px] -right-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />
        <ServiceGrid showHeader={false} />
      </div>

      <FinalCTA />
    </>
  );
}
