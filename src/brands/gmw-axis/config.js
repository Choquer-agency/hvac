const gmwAxisConfig = {
  // ── Company ──
  companyName: "GMW Inspections",
  companyFullName: "GMW Home Inspections",
  phone: "(604) 763-4816",
  phoneRaw: "6047634816",
  email: "gerry@gmwinspections.com",
  address: {
    street: "1447 Lansdowne Drive",
    city: "Coquitlam",
    state: "BC",
    zip: "V3E2S4",
  },
  tagline: "Inspect with Confidence.",
  foundedYear: 2000,
  licenseNumber: "CPBC-86380",
  brandSlug: "gmw-axis",

  // ── Brand / Theme ──
  colors: {
    primary: "#D4A843",
    primaryDark: "#B8912E",
    primaryLight: "#E0BC5E",
    secondary: "#F7F7F7",
    dark: "#1B2A4A",
    light: "#F7F7F7",
    bg: "#1B2A4A",
  },
  fonts: {
    heading: "Space Grotesk",
    body: "DM Sans",
  },
  logo: "/images/gmw/logo.webp",

  // ── Hero ──
  hero: {
    eyebrow: "Licensed Home Inspector — Coquitlam, BC",
    headline: "We Inspect What Others Miss",
    highlightWord: "Inspect",
    body: "GMW Inspections delivers meticulous residential and commercial property inspections across Greater Vancouver. 25 years of engineering precision. Detailed digital reports. Complete peace of mind.",
    primaryCTA: { label: "Book Your Inspection", href: "/contact" },
    secondaryCTA: { label: "View Our Services", href: "#services" },
    backgroundImage: "/images/gmw/drone-roof.jpg",
  },

  // ── Stats ──
  stats: [
    { number: 2500, suffix: "+", label: "Inspections Completed" },
    { number: 25, suffix: "+", label: "Years Experience" },
    { number: 23, suffix: "", label: "Cities Served" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
  ],

  // ── Services ──
  servicesSection: {
    eyebrow: "What We Inspect",
    headline: "Complete Property Inspection Services",
  },
  services: [
    {
      slug: "house-inspections",
      name: "House Inspections",
      shortDescription:
        "Comprehensive 3-4 hour inspection of grounds, exterior, interior, roof, and all building systems — with detailed digital report and on-site walkthrough.",
      icon: "home",
      image: "/images/gmw/gerry-inspecting-exterior.jpg",
    },
    {
      slug: "townhouse-inspections",
      name: "Townhouse Inspections",
      shortDescription:
        "Thorough 3-4 hour inspection tailored to townhouse construction — shared walls, strata considerations, and common-area interfaces assessed.",
      icon: "building",
      image: "/images/gmw/townhouses-exterior.jpg",
    },
    {
      slug: "condo-inspections",
      name: "Apartment & Condo Inspections",
      shortDescription:
        "Focused 2-3 hour inspection covering all unit systems, appliances, windows, plumbing, electrical, and ventilation with written report.",
      icon: "layout",
      image: "/images/gmw/condo-4.jpg",
    },
    {
      slug: "commercial-inspections",
      name: "Commercial Inspections",
      shortDescription:
        "Full assessment of commercial properties — structural, mechanical, electrical, plumbing, and life safety systems thoroughly evaluated.",
      icon: "bar-chart",
      image: "/images/gmw/commercial-construction.jpg",
    },
    {
      slug: "electrical-field-review",
      name: "Electrical Field Review",
      shortDescription:
        "Specialized reviews leveraging 25 years of electrical engineering — service, rough-in, lighting, power, data, fire alarm, and emergency systems.",
      icon: "zap",
      image: "/images/gmw/commercial-lighting.jpg",
    },
    {
      slug: "pre-listing-inspections",
      name: "Pre-Listing Inspections",
      shortDescription:
        "Identify and address issues before listing. Fix problems proactively, price accurately, and give buyers confidence from day one.",
      icon: "clipboard",
      image: "/images/gmw/gerry-thermal-imaging.jpg",
    },
  ],

  // ── Why GMW (Differentiators) ──
  whyAxis: {
    eyebrow: "Why GMW",
    headline: "Why Homeowners & Realtors Trust GMW",
    body: "We don't just check boxes — we uncover what matters. Every inspection is backed by decades of engineering expertise, transparent communication, and a commitment to protecting your investment.",
    backgroundImage: "/images/gmw/gerry-inspecting-attic.jpg",
    items: [
      {
        icon: "shield",
        title: "Licensed & Certified",
        description:
          "Consumer Protection BC #86380, ASTTBC Inspector #PI0553, LEED Green Associate, BBB Accredited, and Spectora Certified. Credentials you can verify.",
      },
      {
        icon: "award",
        title: "25 Years Engineering Background",
        description:
          "Before home inspections, Gerry spent 25 years as a design consultant in electrical engineering — bringing a level of technical depth most inspectors can't match.",
      },
      {
        icon: "file-text",
        title: "Detailed Digital Reports",
        description:
          "Every inspection includes a comprehensive Spectora-powered report with professional photography, clear descriptions, and practical advice — delivered same-day.",
      },
      {
        icon: "clock",
        title: "Flexible Scheduling",
        description:
          "We accommodate your timeline. Flexible booking, prompt communication, and same-week availability across all 23 cities in our service area.",
      },
    ],
  },

  // ── Process ──
  processSection: {
    eyebrow: "How It Works",
    headline: "A Simple Process. Complete Clarity.",
  },
  process: [
    {
      step: 1,
      title: "Book Your Inspection",
      description:
        "Call, text, or fill out our online form with your property details. We'll confirm your appointment — often within the same week.",
      image: "/images/gmw/family-home.jpg",
    },
    {
      step: 2,
      title: "Thorough On-Site Review",
      description:
        "Gerry conducts a meticulous visual inspection of the entire property — grounds, exterior, interior, roof, and all building systems. Nothing is overlooked.",
      image: "/images/gmw/gerry-inspecting-gutters.jpg",
    },
    {
      step: 3,
      title: "Digital Report Delivered",
      description:
        "You receive a comprehensive report with detailed photography, deficiency descriptions, and practical recommendations — all in an easy-to-read digital format.",
      image: "/images/gmw/gerry-inspecting-foundation.jpg",
    },
    {
      step: 4,
      title: "Walk-Through & Discussion",
      description:
        "We walk the property with you, discussing every finding face-to-face so you can ask questions and fully understand the condition of your investment.",
      image: "/images/gmw/gerry-thermal-imaging.jpg",
    },
  ],

  // ── Parallax Divider ──
  parallaxDivider: {
    image: "/images/gmw/gerry-inspecting-hvac.jpg",
    stats: [
      { number: 25, suffix: "+", label: "Years" },
      { number: 2500, suffix: "+", label: "Inspections" },
    ],
    tagline: "Zero Surprises.",
  },

  // ── Partner Logos (Certifications) ──
  partnerLogos: [
    { name: "Consumer Protection BC" },
    { name: "ASTTBC" },
    { name: "LEED / USGBC" },
    { name: "BBB Accredited" },
    { name: "Spectora" },
  ],

  // ── Reviews ──
  reviews: {
    platform: "Google",
    rating: 5.0,
    count: 45,
    url: "#",
    featured: [
      {
        name: "Cathy Wu",
        title: "Homebuyer",
        rating: 5,
        text: "I would highly recommend this inspection service. Gerry did a very thorough and professional job at a very competitive price. He explained everything clearly and the report was incredibly detailed.",
      },
      {
        name: "Teresa Gil Felts",
        title: "Realtor, Georgia Pacific Realty",
        rating: 5,
        text: "Very knowledgeable, dedicated and great communicator! Can't go wrong. Also, very flexible and makes time when needed. One of the best inspectors I've worked with in my career.",
      },
      {
        name: "Marco Moser",
        title: "Real Estate Specialist",
        rating: 5,
        text: "Great communication throughout the process. Able to accommodate timing flexibly. Simple and easy to understand report and payment. Gerry's engineering background really shows.",
      },
    ],
  },

  // ── Projects (Inspection Showcase) ──
  projects: [
    {
      name: "Heritage Home — Coquitlam",
      type: "House Inspection",
      image: "/images/gmw/gerry-inspecting-exterior.jpg",
    },
    {
      name: "Commercial Office — Vancouver",
      type: "Commercial Inspection",
      image: "/images/gmw/commercial-lighting.jpg",
    },
    {
      name: "Waterfront Townhouse — White Rock",
      type: "Townhouse Inspection",
      image: "/images/gmw/townhouses-exterior.jpg",
    },
    {
      name: "High-Rise Condo — Burnaby",
      type: "Condo Inspection",
      image: "/images/gmw/condo-7.jpg",
    },
  ],

  // ── Final CTA ──
  finalCTA: {
    headline: "Ready to Book Your Inspection?",
    body: "Whether it's a house, townhouse, condo, or commercial property — GMW Inspections has the expertise and the track record to give you complete confidence. Let's get started.",
    primaryCTA: { label: "Book Your Inspection", href: "/contact" },
    secondaryCTA: {
      label: "Call (604) 763-4816",
      href: "tel:6047634816",
    },
  },

  // ── Footer ──
  footer: {
    description:
      "Greater Vancouver's trusted home inspector since 2000. Licensed, certified, and BBB accredited.",
    socialLinks: {
      linkedin: "#",
      instagram: "#",
    },
  },

  // ── Navigation ──
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "#services" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export default gmwAxisConfig;
