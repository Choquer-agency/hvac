import { useParams, Link } from "react-router-dom";
import { useConfig } from "../hooks/useConfig";
import { useClientPath } from "../hooks/useClientPath";
import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import CTAButton from "../components/CTAButton";
import ReviewCard from "../components/ReviewCard";
import FinalCTA from "../components/FinalCTA";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const config = useConfig();
  const clientPath = useClientPath();
  const service = config.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to={clientPath("/services")} className="text-brand hover:underline">
          View all services
        </Link>
      </div>
    );
  }

  const sections = service.sections || [];
  const featured = config.reviews.featured || [];

  return (
    <>
      <SEOHead title={service.metaTitle} description={service.metaDescription} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.name },
          ]}
        />
      </div>

      <PageHero
        eyebrow={service.name}
        headline={service.heroHeadline}
        body={service.shortDescription}
        backgroundImage={service.image}
      >
        <CTAButton label={`Schedule ${service.name}`} href="/contact" />
      </PageHero>

      {/* Alternating content sections */}
      <div className="relative overflow-x-clip">
        <div
          className="absolute top-[200px] -left-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />
        <div
          className="absolute top-[900px] -right-32 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full opacity-[0.10] blur-[100px] pointer-events-none"
          style={{ background: "var(--color-secondary)" }}
        />

        {sections.map((section, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <section key={i} className="py-16 lg:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    !imageLeft ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`rounded-2xl overflow-hidden ${!imageLeft ? "lg:[direction:ltr]" : ""}`}>
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="w-full h-[380px] lg:h-[530px] object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col gap-5 ${!imageLeft ? "lg:[direction:ltr]" : ""}`}>
                    {section.eyebrow && (
                      <p className="text-brand font-semibold text-sm tracking-wide uppercase">
                        {section.eyebrow}
                      </p>
                    )}
                    <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-surface-dark tracking-tight leading-[1.1]">
                      {section.heading}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {section.body}
                    </p>

                    {section.items && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {section.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <svg
                              className="w-4 h-4 text-brand shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <CTAButton label="Get a Free Estimate" href="/contact" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Testimonials section */}
        {featured.length > 0 && (
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-3">
                  Testimonials
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-surface-dark">
                  What Our {config.address.city} Customers Say
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.slice(0, 3).map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <FinalCTA />
    </>
  );
}
