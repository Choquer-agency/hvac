import { Link } from "react-router-dom";
import { useConfig } from "../hooks/useConfig";
import { useClientPath } from "../hooks/useClientPath";
import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import FinalCTA from "../components/FinalCTA";

export default function ServiceAreasPage() {
  const config = useConfig();
  const clientPath = useClientPath();

  return (
    <>
      <SEOHead
        title={`Service Areas — ${config.companyFullName}`}
        description={`${config.companyFullName} serves ${config.serviceAreas.map((a) => a.name).join(", ")} and surrounding areas. Call for HVAC service today!`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Service Areas" }]} />
      </div>

      <PageHero
        eyebrow="Where We Work"
        headline="Areas We Serve"
        body={`${config.companyName} proudly provides HVAC services across the greater ${config.address.city} metro area.`}
      />

      <div className="relative overflow-x-clip">
        <div
          className="absolute top-[100px] -left-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={clientPath(`/service-areas/${area.slug}`)}
                  className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand/20 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h2 className="text-xl font-bold text-surface-dark group-hover:text-brand transition-colors">
                      {area.name}, {area.state}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {area.body}
                  </p>
                  <span className="mt-4 text-brand font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Services
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <FinalCTA />
    </>
  );
}
