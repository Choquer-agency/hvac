import { useConfig } from "../hooks/useConfig";

export default function ProcessSteps() {
  const config = useConfig();

  return (
    <section className="py-16 lg:py-24 relative">
      {/* Subtle brand tint — fades in and out to avoid hard edges */}
      <div className="absolute inset-x-0 -top-16 -bottom-16 bg-gradient-to-b from-transparent via-brand/[0.05] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-3">
            {config.processSection.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-surface-dark">
            {config.processSection.headline}
          </h2>
        </div>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {config.process.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line */}
              {i < config.process.length - 1 && (
                <div className="absolute top-8 left-[60%] w-[80%] h-0.5 bg-brand/20" />
              )}
              <div className="relative z-10 w-16 h-16 rounded-full bg-brand text-white text-2xl font-bold flex items-center justify-center mx-auto mb-5 shadow-lg">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-surface-dark mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {config.process.map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand text-white text-lg font-bold flex items-center justify-center shrink-0 shadow-lg">
                  {step.step}
                </div>
                {i < config.process.length - 1 && (
                  <div className="w-0.5 flex-1 bg-brand/20 mt-3" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-bold text-surface-dark mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
