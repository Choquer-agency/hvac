import { useConfig } from "../hooks/useConfig";
import CTAButton from "./CTAButton";

export default function FinalCTA() {
  const config = useConfig();
  const { finalCTA } = config;

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden">
        {/* Background image */}
        {finalCTA.backgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${finalCTA.backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-brand/85" />
          </>
        )}
        {!finalCTA.backgroundImage && (
          <div className="absolute inset-0 bg-brand" />
        )}

        <div className="relative py-16 lg:py-24 px-6 sm:px-10 lg:px-16 text-center">
          <p className="text-white/80 font-semibold text-sm tracking-wide uppercase mb-3">
            {finalCTA.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-6">
            {finalCTA.headline}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {finalCTA.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              label={finalCTA.primaryCTA.label}
              href={finalCTA.primaryCTA.href}
              variant="ctaWhite"
              className="w-full sm:w-auto"
            />
            <CTAButton
              label={finalCTA.secondaryCTA.label}
              href={finalCTA.secondaryCTA.href}
              variant="secondary"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
