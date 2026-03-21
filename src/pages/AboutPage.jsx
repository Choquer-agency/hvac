import { useConfig } from "../hooks/useConfig";
import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import CTAButton from "../components/CTAButton";
import ReviewCard from "../components/ReviewCard";
import FinalCTA from "../components/FinalCTA";

export default function AboutPage() {
  const config = useConfig();
  const { about } = config;
  const featured = config.reviews.featured || [];

  return (
    <>
      <SEOHead title={about.metaTitle} description={about.metaDescription} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      <PageHero
        eyebrow={`About ${config.companyName}`}
        headline={about.headline}
        backgroundImage={about.heroImage}
      >
        <CTAButton label="Get a Free Estimate" href="/contact" />
      </PageHero>

      <div className="relative overflow-x-clip">
        <div
          className="absolute top-[200px] -left-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />
        <div
          className="absolute top-[800px] -right-32 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full opacity-[0.10] blur-[100px] pointer-events-none"
          style={{ background: "var(--color-secondary)" }}
        />

        {/* Alternating content sections */}
        {about.sections.map((section, i) => {
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

        {/* Values */}
        <section className="py-16 lg:py-24 relative">
          <div className="absolute inset-x-0 -top-16 -bottom-16 bg-gradient-to-b from-transparent via-brand/[0.05] to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-3">
                Our Values
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-surface-dark">
                What We Stand For
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {about.values.map((value, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-surface-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
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
