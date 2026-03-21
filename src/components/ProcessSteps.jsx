import { useConfig } from "../hooks/useConfig";

const stepIcons = [
  // Calendar — schedule inspection
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  // Clipboard — detailed estimate
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
  // Hammer — professional installation
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>,
  // Shield check — peace of mind
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

export default function ProcessSteps() {
  const config = useConfig();

  return (
    <section className="py-20 lg:py-28 relative">
      {/* Subtle brand tint — fades in and out to avoid hard edges */}
      <div className="absolute inset-x-0 -top-16 -bottom-16 bg-gradient-to-b from-transparent via-brand/[0.05] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-3">
            {config.processSection.eyebrow}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-surface-dark">
            {config.processSection.headline}
          </h2>
        </div>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {config.process.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line */}
              {i < config.process.length - 1 && (
                <div className="absolute top-10 left-[60%] w-[80%] h-0.5 bg-brand/20" />
              )}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative z-10 w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold absolute">{step.step}</span>
                </div>
                <div className="flex justify-center mb-3 text-brand/60">
                  {stepIcons[i]}
                </div>
                <h3 className="text-lg font-bold text-surface-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-6">
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
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex-1 mb-2">
                <div className="flex items-center gap-2 mb-1 text-brand/60">
                  {stepIcons[i]}
                </div>
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
