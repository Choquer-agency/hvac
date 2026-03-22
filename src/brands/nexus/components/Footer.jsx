import config from "../config";

export default function Footer() {
  const { footer } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pt-12 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* Left: Brand + description */}
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C3AED]">
                <span
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  N
                </span>
              </div>
              <span
                className="text-lg font-bold text-[#1A1A2E]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Nexus AI
              </span>
            </a>

            <p
              className="mt-4 text-sm leading-relaxed text-[#6B7280]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {footer.description}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {Object.entries(footer.socialLinks).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1A2E]/5 text-[#6B7280] transition-all duration-200 hover:bg-[#7C3AED] hover:text-white"
                  aria-label={name}
                >
                  <span className="text-xs font-medium capitalize">
                    {name[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>

            <p
              className="mt-8 text-xs text-[#6B7280]/50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              &copy; {year} {config.companyName}. All rights reserved.
            </p>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h3
                  className="mb-4 text-sm font-semibold text-[#1A1A2E]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#6B7280] transition-colors duration-200 hover:text-[#1A1A2E]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Large gradient brand name */}
        <div className="mt-8 flex w-full items-center justify-center overflow-hidden">
          <h1
            className="select-none text-center text-5xl font-bold md:text-7xl lg:text-[10rem]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "linear-gradient(to bottom, rgba(26,26,46,0.12), rgba(26,26,46,0.03))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1,
            }}
          >
            NEXUS AI
          </h1>
        </div>
      </div>
    </footer>
  );
}
