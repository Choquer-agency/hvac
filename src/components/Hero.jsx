import { useConfig } from "../hooks/useConfig";
import CTAButton from "./CTAButton";

export default function Hero() {
  const config = useConfig();
  const { hero } = config;

  return (
    <section className="px-2 sm:px-3 lg:px-4 pt-2 sm:pt-3">
      <div className="relative min-h-[580px] lg:min-h-[85vh] flex items-center rounded-2xl lg:rounded-3xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-surface-dark">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${hero.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/40" />
        </div>

        {/* Content — pushed left */}
        <div className="relative w-full px-6 sm:px-10 lg:px-16 py-20 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-brand-light font-semibold text-sm lg:text-base tracking-wide uppercase mb-4 animate-[fadeInUp_0.6s_ease-out]">
              {hero.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.25rem] font-bold text-white leading-[1.1] mb-6 max-w-none animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
              {hero.headline}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              {hero.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
              <CTAButton
                label={hero.primaryCTA.label}
                href={hero.primaryCTA.href}
                variant="primary"
                className="w-full sm:w-auto"
              />
              <CTAButton
                label={hero.secondaryCTA.label}
                href={hero.secondaryCTA.href}
                variant="secondary"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>

        {/* Google Reviews badge — bottom right */}
        <div className="hidden sm:block absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
            {/* Google G icon */}
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {config.reviews.count} Five-Star Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
