import { useParams, Link } from "react-router-dom";
import { useConfig } from "../hooks/useConfig";
import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import CTAButton from "../components/CTAButton";
import ReviewCard from "../components/ReviewCard";
import FinalCTA from "../components/FinalCTA";

function ContentRenderer({ content }) {
  return content.map((block, i) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={i} className="text-gray-600 leading-relaxed text-lg mb-6">
            {block.text}
          </p>
        );
      case "heading":
        return (
          <h2 key={i} className="text-2xl font-bold text-surface-dark mt-10 mb-4">
            {block.text}
          </h2>
        );
      case "list":
        return (
          <ul key={i} className="mb-6 space-y-2">
            {block.items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-brand mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const config = useConfig();
  const service = config.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-brand hover:underline">
          View all services
        </Link>
      </div>
    );
  }

  const related = config.services.filter((s) =>
    service.relatedServices?.includes(s.slug)
  );

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

      {/* Content */}
      <div className="relative overflow-x-clip">
        <div
          className="absolute top-[200px] -left-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />
        <div
          className="absolute top-[700px] -right-32 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full opacity-[0.10] blur-[100px] pointer-events-none"
          style={{ background: "var(--color-secondary)" }}
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ContentRenderer content={service.content} />
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* CTA Card */}
                <div className="bg-surface-dark rounded-xl p-8 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Need {service.name}?</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Contact us today for fast, reliable service.
                  </p>
                  <a
                    href={`tel:${config.phoneRaw}`}
                    className="block w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-accent-dark transition-colors mb-3"
                  >
                    Call {config.phone}
                  </a>
                  <CTAButton
                    label="Schedule Online"
                    href="/contact"
                    variant="secondary"
                    className="w-full"
                  />
                </div>

                {/* Review */}
                {config.reviews.featured[0] && (
                  <ReviewCard review={config.reviews.featured[0]} />
                )}

                {/* Related Services */}
                {related.length > 0 && (
                  <div>
                    <h3 className="font-bold text-surface-dark mb-4">Related Services</h3>
                    <div className="space-y-3">
                      {related.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block p-4 bg-surface-light rounded-lg hover:bg-brand/5 transition-colors group"
                        >
                          <span className="font-semibold text-surface-dark group-hover:text-brand transition-colors">
                            {s.name}
                          </span>
                          <p className="text-sm text-gray-500 mt-1">
                            {s.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <FinalCTA />
    </>
  );
}
