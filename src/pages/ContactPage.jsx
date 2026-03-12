import { useConfig } from "../hooks/useConfig";
import SEOHead from "../components/SEOHead";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  const config = useConfig();

  return (
    <>
      <SEOHead
        title={config.contact.metaTitle}
        description={config.contact.metaDescription}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <PageHero
        eyebrow="Contact Us"
        headline={config.contact.headline}
        body={config.contact.body}
        backgroundImage={config.contact.image}
      />

      <div className="relative overflow-x-clip">
        <div
          className="absolute top-[100px] -right-40 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <ContactForm />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-surface-dark mb-3">Call Us</h3>
                  <a
                    href={`tel:${config.phoneRaw}`}
                    className="text-2xl font-bold text-brand hover:text-brand-dark transition-colors"
                  >
                    {config.phone}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    {config.hours.emergency}
                  </p>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-surface-dark mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday – Friday</span>
                      <span className="font-medium">{config.hours.weekday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">{config.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">{config.hours.sunday}</span>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-surface-dark mb-3">Our Location</h3>
                  <p className="text-gray-600 text-sm">
                    {config.address.street}<br />
                    {config.address.city}, {config.address.state} {config.address.zip}
                  </p>
                </div>

                {/* Service Areas */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-surface-dark mb-3">Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {config.serviceAreas.map((area) => (
                      <span
                        key={area.slug}
                        className="px-3 py-1 bg-surface-light rounded-full text-sm text-gray-600"
                      >
                        {area.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
