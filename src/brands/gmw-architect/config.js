const gmwArchitectConfig = {
  // ── Company Info ──
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
  tagline: "Trusted Home Inspection Services",
  foundedYear: 2000,

  // ── Brand / Theme ──
  brandSlug: "gmw-architect",
  colors: {
    primary: "#1B2A4A",
    primaryDark: "#111D33",
    primaryLight: "#2D4A6F",
    secondary: "#D4A843",
    accent: "#E0BC5E",
    dark: "#0F1520",
    light: "#F5F2EC",
    bg: "#F5F2EC",
  },
  fonts: {
    heading: "Rethink Sans",
    body: "Inter",
  },
  logo: "/images/gmw/logo.webp",

  // ── Hero ──
  hero: {
    eyebrow: "Licensed Home Inspector — Greater Vancouver, BC",
    headline: "Your property deserves a second set of expert eyes",
    body: "With 25+ years of engineering experience, GMW Inspections delivers thorough property inspections, detailed digital reports, and the peace of mind you need to make confident real estate decisions.",
    primaryCTA: { label: "Book Your Inspection", href: "#contact" },
    secondaryCTA: { label: "Our Services", href: "#services" },
    image: "/images/gmw/family-home.jpg",
  },

  // ── Stats ──
  stats: [
    { value: 25, suffix: "+", label: "Years Experience" },
    { value: 2500, suffix: "+", label: "Inspections Completed" },
    { value: 45, suffix: "+", label: "5-Star Reviews" },
    { value: 23, suffix: "", label: "Cities Served" },
  ],

  // ── About Statement ──
  aboutStatement:
    "With 25 years in electrical engineering, Gerry Wieler brings precision most inspectors can't match. Every inspection examines building systems, structural integrity, and electrical safety with an engineer's eye — documented in comprehensive digital reports with detailed photography.",

  // ── Featured Project ──
  featuredProject: {
    eyebrow: "Specialized Service",
    title: "Electrical Field Review",
    description:
      "Leveraging 25 years of electrical engineering expertise, our Electrical Field Review service verifies installations against design specifications, checks code compliance, and documents deficiencies — from rough-in through final review of lighting, power, data, fire alarm, and emergency systems.",
    stats: [
      { label: "Experience", value: "25 Years" },
      { label: "Credentials", value: "LEED GA" },
      { label: "License", value: "#86380" },
    ],
    image: "/images/gmw/commercial-lighting.jpg",
  },

  // ── Services ──
  servicesSection: {
    eyebrow: "What We Inspect",
    headline: "Comprehensive inspection services for every property type",
  },
  services: [
    {
      title: "House Inspections",
      description:
        "Full 3-4 hour visual inspection of grounds, exterior, interior, roof, and all building systems. Walk-through discussion and detailed digital report included.",
      image: "/images/gmw/gerry-inspecting-exterior.jpg",
    },
    {
      title: "Townhouse Inspections",
      description:
        "Thorough 3-4 hour inspection tailored to townhouse construction — shared walls, strata considerations, and common-area interfaces all assessed.",
      image: "/images/gmw/townhouses-exterior.jpg",
    },
    {
      title: "Apartment & Condo Inspections",
      description:
        "Focused 2-3 hour inspection covering all unit systems, appliances, windows, plumbing, electrical, and ventilation with a detailed written report.",
      image: "/images/gmw/condo-4.jpg",
    },
    {
      title: "Commercial Inspections",
      description:
        "Comprehensive assessment of commercial properties including structural, mechanical, electrical, plumbing, and life safety systems.",
      image: "/images/gmw/commercial-construction.jpg",
    },
    {
      title: "Electrical Field Review",
      description:
        "Specialized reviews leveraging 25 years of electrical engineering experience — service, rough-in, lighting, power, data, fire alarm, and emergency systems.",
      image: "/images/gmw/commercial-lighting.jpg",
    },
    {
      title: "Pre-Listing Inspections",
      description:
        "Identify and address issues before listing your property. Fix problems proactively, price accurately, and give buyers confidence from day one.",
      image: "/images/gmw/gerry-thermal-imaging.jpg",
    },
  ],

  // ── Parallax Image Band ──
  parallaxImage: "/images/gmw/drone-roof.jpg",

  // ── Process Steps ──
  processSection: {
    eyebrow: "How It Works",
    headline: "From booking to report, in four simple steps",
  },
  process: [
    {
      step: 1,
      title: "Book",
      description:
        "Contact us by phone, text, or email with your property details. We'll schedule your inspection at a time that works for you — often within days.",
    },
    {
      step: 2,
      title: "Inspect",
      description:
        "Gerry conducts a thorough visual review of the property inside and out — grounds, exterior, interior, roof, and all building systems. Nothing gets overlooked.",
    },
    {
      step: 3,
      title: "Report",
      description:
        "You receive a comprehensive digital report with detailed photography, clear descriptions of any deficiencies, and practical advice on next steps.",
    },
    {
      step: 4,
      title: "Review",
      description:
        "We walk through the findings with you on-site, answering every question so you can make your real estate decision with complete confidence.",
    },
  ],

  // ── Reviews ──
  reviews: {
    platform: "Google",
    rating: 5.0,
    count: 45,
    featured: [
      {
        author: "Cathy Wu",
        text: "I would highly recommend this inspection service. Gerry did a very thorough and professional job at a very competitive price. He explained everything clearly and the report was incredibly detailed with photos of every issue.",
        rating: 5,
      },
      {
        author: "Teresa Gil Felts",
        text: "Very knowledgeable, dedicated and great communicator! Can't go wrong. Also, very flexible and makes time when needed. As a realtor, I've worked with many inspectors and Gerry is one of the best in the business.",
        rating: 5,
      },
      {
        author: "Marco Moser",
        text: "Great communication throughout the process. Able to accommodate timing flexibly. Simple and easy to understand report and payment. Gerry's engineering background really shows in the thoroughness of his work.",
        rating: 5,
      },
      {
        author: "Verified Client",
        text: "Gerry is a finicky inspector paying attention to all tiny details. The report is full with a lot of pictures, having a good clear structure and a short advice about fixing problems if any found.",
        rating: 5,
      },
    ],
  },

  // ── Marquee Words ──
  marqueeWords: [
    "Inspect",
    "Protect",
    "Report",
    "Certify",
    "Verify",
    "Trust",
    "Detail",
    "Deliver",
  ],

  // ── Final CTA ──
  finalCTA: {
    eyebrow: "Ready to Book?",
    headline: "Get the clarity you need before you buy or sell",
    body: "Whether you're purchasing your first home, selling a property, or need a specialized electrical review — GMW Inspections delivers the thorough, professional service you deserve.",
    primaryCTA: { label: "Book Your Inspection", href: "#contact" },
  },

  // ── Footer ──
  footer: {
    description:
      "Licensed home inspector serving Greater Vancouver, Fraser Valley, and the Sea-to-Sky Corridor. Consumer Protection BC #86380.",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
    },
  },
};

export default gmwArchitectConfig;
