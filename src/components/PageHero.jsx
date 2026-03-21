import CTAButton from "./CTAButton";

export default function PageHero({ eyebrow, headline, body, backgroundImage, children }) {
  return (
    <section className="px-2 sm:px-3 lg:px-4 pt-2 sm:pt-3">
      <div className="relative min-h-[580px] lg:min-h-[85vh] flex items-end rounded-2xl lg:rounded-3xl overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {backgroundImage ? (
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-surface-dark" />
          )}
        </div>

        {/* Dark radial vignette — matching homepage hero */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Content — bottom-left aligned */}
        <div className="relative w-full px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-brand-light font-semibold text-sm lg:text-base tracking-wide uppercase mb-4 animate-[fadeInUp_0.6s_ease-out]">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-5 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
              {headline}
            </h1>
            {body && (
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-8 max-w-lg animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                {body}
              </p>
            )}
            {children && (
              <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
