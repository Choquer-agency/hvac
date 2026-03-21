import { useConfig } from "../hooks/useConfig";
import CTAButton from "./CTAButton";

export default function ProblemGrid() {
  const config = useConfig();
  const bullets = config.problems.slice(0, 4);

  return (
    <section className="w-full py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/Ceramic.webp"
              alt="Roofing professionals at work"
              className="w-full h-[400px] lg:h-[575px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-brand font-semibold text-sm tracking-wide uppercase">
              {config.problemsSection.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-surface-dark tracking-tight leading-[1.1]">
              {config.problemsSection.headline}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {config.companyName} has seen it all. Here are the most common
              issues homeowners face — and why they choose us to fix them.
            </p>

            {/* 4 Bullets */}
            <div className="flex flex-col gap-4 pt-2">
              {bullets.map((problem, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="font-semibold text-surface-dark">
                    {problem.headline}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <CTAButton label="Get a Free Estimate" href="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
