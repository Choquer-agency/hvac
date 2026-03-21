import { useConfig } from "../hooks/useConfig";
import CTAButton from "./CTAButton";

const trustItems = [
  { icon: "shield", label: "Licensed & Insured" },
  { icon: "check", label: "Free Estimates" },
  { icon: "warranty", label: "Warranty Protected" },
  { icon: "star", label: "5-Star Rated" },
];

const trustIcons = {
  shield: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  warranty: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  star: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
};

export default function Hero() {
  const config = useConfig();
  const { hero } = config;

  return (
    <section className="px-2 sm:px-3 lg:px-4 pt-2 sm:pt-3">
      <div className="relative min-h-[580px] lg:min-h-[85vh] flex items-end rounded-2xl lg:rounded-3xl overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={hero.backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Dark radial vignette — black edges, transparent center */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Content — bottom-left aligned */}
        <div className="relative w-full px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-brand-light font-semibold text-sm lg:text-base tracking-wide uppercase mb-4 animate-[fadeInUp_0.6s_ease-out]">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-5 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
              {hero.headline}
            </h1>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-8 max-w-lg animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
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

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-brand-light">{trustIcons[item.icon]}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Reviews badge — bottom right (desktop only) */}
        <div className="hidden sm:block absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
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
