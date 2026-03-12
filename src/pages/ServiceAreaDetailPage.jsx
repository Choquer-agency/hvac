import { useParams, Link } from "react-router-dom";
import { useConfig } from "../hooks/useConfig";
import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import ServiceGrid from "../components/ServiceGrid";
import FinalCTA from "../components/FinalCTA";

export default function ServiceAreaDetailPage() {
  const { slug } = useParams();
  const config = useConfig();
  const area = config.serviceAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Area Not Found</h1>
        <Link to="/service-areas" className="text-brand hover:underline">
          View all service areas
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={area.metaTitle} description={area.metaDescription} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Service Areas", href: "/service-areas" },
            { label: `${area.name}, ${area.state}` },
          ]}
        />
      </div>

      <PageHero
        headline={area.headline}
        body={area.body}
      />

      <div className="relative overflow-x-clip">
        <div
          className="absolute top-[100px] -right-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />
        <ServiceGrid />
      </div>

      <FinalCTA />
    </>
  );
}
