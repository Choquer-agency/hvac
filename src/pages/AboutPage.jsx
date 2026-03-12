import { useConfig } from "../hooks/useConfig";
import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import FinalCTA from "../components/FinalCTA";

export default function AboutPage() {
  const config = useConfig();
  const { about } = config;

  return (
    <>
      <SEOHead title={about.metaTitle} description={about.metaDescription} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} />
      </div>

      <PageHero
        eyebrow={`About ${config.companyName}`}
        headline={about.headline}
        backgroundImage={about.image}
      />

      <div className="relative overflow-x-clip">
        <div
          className="absolute top-[200px] -left-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />
        <div
          className="absolute top-[800px] -right-32 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full opacity-[0.10] blur-[100px] pointer-events-none"
          style={{ background: "var(--color-secondary)" }}
        />

        {/* Story + Team Photo */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {about.story.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              {about.image && (
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={about.image}
                    alt={`${config.companyName} team`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-20 relative">
          <div className="absolute inset-x-0 -top-16 -bottom-16 bg-gradient-to-b from-transparent via-brand/[0.05] to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-surface-dark mb-10 text-center">
              What We Stand For
            </h2>
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
      </div>

      <FinalCTA />
    </>
  );
}
