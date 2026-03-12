export default function PageHero({ eyebrow, headline, body, backgroundImage, children }) {
  return (
    <section className="px-2 sm:px-3 lg:px-4 pt-2 sm:pt-3">
      <div className="relative min-h-[340px] lg:min-h-[400px] flex items-center rounded-2xl lg:rounded-3xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-surface-dark">
          {backgroundImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/40" />
        </div>

        {/* Content */}
        <div className="relative w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="text-brand-light font-semibold text-sm lg:text-base tracking-wide uppercase mb-4 animate-[fadeInUp_0.6s_ease-out]">
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-4 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
              {headline}
            </h1>
            {body && (
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                {body}
              </p>
            )}
            {children && (
              <div className="mt-6 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
