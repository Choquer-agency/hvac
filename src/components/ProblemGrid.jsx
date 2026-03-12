import { useConfig } from "../hooks/useConfig";
import CTAButton from "./CTAButton";

const problemIcons = [
  // thermometer — system broke down
  <svg key="0" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // dollar — surprise bills
  <svg key="1" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1" />
  </svg>,
  // shield — trust
  <svg key="2" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // temperature — uneven temps
  <svg key="3" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>,
  // bolt — energy bills
  <svg key="4" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // wrench — old system
  <svg key="5" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
];

export default function ProblemGrid() {
  const config = useConfig();

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-3">
            {config.problemsSection.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-surface-dark">
            {config.problemsSection.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
          {config.problems.map((problem, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 py-4 border-b border-gray-200/80 group hover:translate-x-1 transition-transform duration-200"
            >
              <span className="text-brand shrink-0">
                {problemIcons[i] || problemIcons[0]}
              </span>
              <h3 className="text-base font-semibold text-surface-dark group-hover:text-brand transition-colors">
                {problem.headline}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <h3 className="text-xl sm:text-2xl font-bold text-surface-dark mb-3">
            We have the solution — and{" "}
            <span className="text-brand">{config.reviews.count} five-star reviews</span>{" "}
            to prove it.
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            {config.companyName} fixes it fast, fixes it right, and treats you like a neighbor.
          </p>
          <CTAButton label="Schedule Service" href="/contact" />
        </div>
      </div>
    </section>
  );
}
