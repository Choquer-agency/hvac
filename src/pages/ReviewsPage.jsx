import { useConfig } from "../hooks/useConfig";
import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import GoogleRatingBadge from "../components/GoogleRatingBadge";
import ReviewCard from "../components/ReviewCard";
import FinalCTA from "../components/FinalCTA";

export default function ReviewsPage() {
  const config = useConfig();

  return (
    <>
      <SEOHead
        title={`Reviews — ${config.companyFullName}`}
        description={`Read ${config.reviews.count} five-star reviews from real ${config.address.city} homeowners. See why they trust ${config.companyName} for all their HVAC needs.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Reviews" }]} />
      </div>

      <PageHero
        eyebrow="Customer Reviews"
        headline="What Our Customers Say"
      />

      <div className="relative overflow-x-clip">
        <div
          className="absolute top-[100px] -left-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />
        <div
          className="absolute top-[600px] -right-32 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full opacity-[0.10] blur-[100px] pointer-events-none"
          style={{ background: "var(--color-secondary)" }}
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <GoogleRatingBadge />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.reviews.featured.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>

            {config.reviews.url && (
              <div className="text-center mt-12">
                <a
                  href={config.reviews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand font-semibold hover:underline"
                >
                  See all {config.reviews.count} reviews on {config.reviews.platform}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </section>
      </div>

      <FinalCTA />
    </>
  );
}
