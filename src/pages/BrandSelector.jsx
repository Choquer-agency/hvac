import { Link } from "react-router-dom";

const brands = [
  {
    slug: "architect",
    name: "Architectect",
    tagline: "Modern builds. Smarter methods.",
    colors: { bg: "#FAF7F2", primary: "#3D3E3D", accent: "#F89525" },
    type: "Architecture & Construction",
  },
  {
    slug: "axis",
    name: "Axis Building Group",
    tagline: "Built to perform.",
    colors: { bg: "#010101", primary: "#F2CF37", accent: "#F2CF37" },
    type: "Commercial Construction",
    dark: true,
  },
  {
    slug: "evergreen",
    name: "Evergreen Homes",
    tagline: "Homes designed for the future.",
    colors: { bg: "#EBFFF6", primary: "#193133", accent: "#D0FF71" },
    type: "Sustainable Home Builder",
  },
  {
    slug: "handyman",
    name: "Handyman",
    tagline: "Your neighbor who fixes everything.",
    colors: { bg: "#E1EAF9", primary: "#16205B", accent: "#F15928" },
    type: "Home Repair Services",
  },
  {
    slug: "ironwood",
    name: "Ironwood Builders",
    tagline: "Where vision meets craft.",
    colors: { bg: "#FDF8F0", primary: "#3B4841", accent: "#ED6442" },
    type: "Luxury Custom Homes",
  },
  {
    slug: "nexus",
    name: "Nexus AI",
    tagline: "AI-powered marketing education.",
    colors: { bg: "#0A0A0F", primary: "#7C3AED", accent: "#3B82F6" },
    type: "AI Marketing Courses",
    dark: true,
  },
  {
    slug: "numbers-west",
    name: "Numbers West",
    tagline: "Training & strategy for the AI era.",
    colors: { bg: "#F4F7FA", primary: "#384D68", accent: "#5088B8" },
    type: "Training & Consulting",
  },
];

export default function BrandSelector() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-4">
          Choquer Agency
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Contractor Website Collection
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Five distinct brands, five unique experiences. Each site is
          custom-designed to match the contractor's identity and audience.
        </p>
      </div>

      {/* Brand Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              to={`/${brand.slug}`}
              className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Color Preview */}
              <div
                className="h-48 relative flex items-center justify-center p-8"
                style={{ backgroundColor: brand.colors.bg }}
              >
                <img
                  src={`/images/${brand.slug}/logo.svg`}
                  alt={brand.name}
                  className="h-12 max-w-[180px] object-contain"
                />
                {/* Accent dot */}
                <div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full"
                  style={{ backgroundColor: brand.colors.accent }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <p
                  className="text-xs font-medium tracking-widest uppercase mb-2"
                  style={{ color: brand.colors.accent }}
                >
                  {brand.type}
                </p>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {brand.name}
                </h2>
                <p className="text-gray-500 text-sm">{brand.tagline}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
                  View site
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
