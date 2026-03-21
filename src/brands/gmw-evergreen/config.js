const gmwEvergreenConfig = {
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
  tagline: "Inspect. Report. Protect.",
  foundedYear: 2000,

  // ── Brand / Theme ──
  brandSlug: "gmw-evergreen",
  colors: {
    primary: "#1B2A4A",
    primaryDark: "#111D33",
    primaryLight: "#2D4A6F",
    secondary: "#D4A843",
    accent: "#B8912E",
    logoGreen: "#D4A843",
    dark: "#1B2A4A",
    light: "#F5F2EC",
    bg: "#FFFFFF",
  },
  fonts: {
    heading: "Outfit",
    body: "Inter",
  },
  logo: "/images/gmw-evergreen/logo.svg",

  // ── Hero ──
  hero: {
    eyebrow: "Licensed Home Inspector — Greater Vancouver, BC",
    headline: "Professional inspections, clear reports, confident decisions",
    body: "GMW Inspections combines 25+ years of engineering precision with thorough property inspections. House, townhouse, condo, or commercial — get the detailed report you need to make smart real estate decisions.",
    primaryCTA: { label: "Book Your Inspection", href: "#contact" },
    secondaryCTA: { label: "How It Works", href: "#process" },
    image: "/images/gmw/family-home.jpg",
  },

  // ── About / Mission Statement ──
  aboutStatement:
    "With 25 years of electrical engineering experience and a deep commitment to detail, Gerry Wieler founded GMW Inspections to give homebuyers, sellers, and real estate professionals the clarity they deserve. Every inspection is thorough, every report is detailed, and every client leaves with confidence.",

  // ── Models → Inspection Packages ──
  modelsSection: {
    eyebrow: "Our Services",
    headline: "Inspection packages for every property type",
  },
  models: [
    {
      name: "House Inspection",
      slug: "house",
      sqft: "Any Size",
      bedrooms: "All",
      bathrooms: "All",
      startingPrice: "Contact Us",
      tagline: "The complete home assessment.",
      description:
        "Our most comprehensive service. A full 3-4 hour visual inspection covering grounds, exterior, interior, roof, and all building systems. You'll receive a detailed digital report with photography and a personal walkthrough of findings.",
      image: "/images/gmw/gerry-inspecting-exterior.jpg",
      features: [
        "3-4 hour inspection",
        "Digital photo report",
        "On-site walkthrough",
        "All systems covered",
      ],
    },
    {
      name: "Townhouse Inspection",
      slug: "townhouse",
      sqft: "Any Size",
      bedrooms: "All",
      bathrooms: "All",
      startingPrice: "Contact Us",
      tagline: "Tailored for shared-wall living.",
      description:
        "A thorough 3-4 hour inspection designed for townhouse construction. We assess shared walls, strata-related elements, and common-area interfaces in addition to all standard building systems.",
      image: "/images/gmw/townhouses-exterior.jpg",
      features: [
        "3-4 hour inspection",
        "Strata considerations",
        "Shared wall assessment",
        "Digital report included",
      ],
    },
    {
      name: "Condo Inspection",
      slug: "condo",
      sqft: "Any Size",
      bedrooms: "All",
      bathrooms: "All",
      startingPrice: "Contact Us",
      tagline: "Every unit, every detail.",
      description:
        "A focused 2-3 hour inspection covering all unit systems — appliances, windows, plumbing, electrical, ventilation, and more. Perfect for buyers and investors looking at apartment and condominium properties.",
      image: "/images/gmw/condo-4.jpg",
      features: [
        "2-3 hour inspection",
        "Appliance testing",
        "Ventilation check",
        "Clear written report",
      ],
    },
  ],

  // ── Package Add-Ons → Additional Services ──
  packages: [
    {
      name: "Electrical Field Review",
      price: "Custom Quote",
      icon: "zap",
      description: "Engineering-level electrical assessment.",
      features: [
        "Service & rough-in review",
        "Lighting & power verification",
        "Fire alarm system check",
        "Code compliance documentation",
      ],
    },
    {
      name: "Commercial Inspection",
      price: "Custom Quote",
      icon: "building",
      description: "Full commercial property assessment.",
      features: [
        "Structural evaluation",
        "Mechanical systems review",
        "Life safety assessment",
        "Detailed deficiency report",
      ],
    },
    {
      name: "Pre-Listing Report",
      price: "Custom Quote",
      icon: "file-text",
      description: "Sell with confidence.",
      features: [
        "Pre-sale deficiency report",
        "Repair priority guidance",
        "Buyer confidence boost",
        "Faster closing timeline",
      ],
    },
    {
      name: "Pre-Purchase Inspection",
      price: "Custom Quote",
      icon: "shield",
      description: "Buy with certainty.",
      features: [
        "Full property assessment",
        "Investment risk analysis",
        "Negotiation leverage",
        "Digital photo documentation",
      ],
    },
  ],

  // ── Process Steps ──
  processSection: {
    eyebrow: "How It Works",
    headline: "From booking to report, in four easy steps",
  },
  process: [
    {
      step: 1,
      title: "Book",
      description:
        "Call, text, or submit our online form. Tell us the property type, address, and preferred date — we'll confirm within hours.",
    },
    {
      step: 2,
      title: "Inspect",
      description:
        "Gerry conducts a meticulous on-site inspection of all grounds, exterior, interior, roof, and building systems. Thorough and unhurried.",
    },
    {
      step: 3,
      title: "Report",
      description:
        "You receive a detailed digital report with professional photography, clear deficiency descriptions, and practical recommendations.",
    },
    {
      step: 4,
      title: "Review",
      description:
        "We walk through every finding with you on-site, answer all your questions, and ensure you have complete clarity on the property's condition.",
    },
  ],

  // ── Stats ──
  stats: [
    { value: 2500, suffix: "+", label: "Inspections Completed" },
    { value: 23, suffix: "", label: "Cities Served" },
    { value: 25, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ],

  // ── Marquee ──
  marqueeWords: [
    "Licensed",
    "Certified",
    "LEED Green",
    "BBB Accredited",
    "Spectora Certified",
    "25+ Years",
    "Detailed Reports",
    "Greater Vancouver",
  ],

  // ── Gallery ──
  galleryImages: [
    {
      src: "/images/gmw/gerry-inspecting-exterior.jpg",
      alt: "Gerry inspecting home exterior",
    },
    {
      src: "/images/gmw/drone-roof.jpg",
      alt: "Aerial drone roof inspection",
    },
    {
      src: "/images/gmw/townhouses-exterior.jpg",
      alt: "Townhouse row inspection",
    },
    {
      src: "/images/gmw/luxury-kitchen.jpg",
      alt: "Kitchen inspection",
    },
    {
      src: "/images/gmw/commercial-lighting.jpg",
      alt: "Commercial lighting review",
    },
    {
      src: "/images/gmw/gerry-inspecting-hvac.jpg",
      alt: "HVAC system inspection",
    },
    {
      src: "/images/gmw/gerry-thermal-imaging.jpg",
      alt: "Thermal imaging inspection",
    },
    {
      src: "/images/gmw/gerry-inspecting-attic.jpg",
      alt: "Attic inspection",
    },
  ],

  // ── Parallax ──
  parallaxImage: "/images/gmw/gerry-inspecting-plumbing.jpg",

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
        text: "Very knowledgeable, dedicated and great communicator! Can't go wrong. Also, very flexible and makes time when needed. As a realtor, I've worked with many inspectors and Gerry is one of the best.",
        rating: 5,
      },
      {
        author: "Marco Moser",
        text: "Great communication throughout the process. Able to accommodate timing flexibly. Simple and easy to understand report and payment. Gerry's engineering background really shows in the thoroughness of his work.",
        rating: 5,
      },
    ],
  },

  // ── Trust Badges ──
  trustBadges: [
    "CPBC Licensed #86380",
    "ASTTBC Certified",
    "BBB Accredited",
  ],

  // ── Final CTA ──
  finalCTA: {
    eyebrow: "Ready to book?",
    headline: "Get your inspection scheduled today",
    body: "Call, text, or fill out our form — we'll get you booked quickly and deliver a thorough, professional inspection you can trust.",
    primaryCTA: { label: "Book Your Inspection", href: "#contact" },
  },

  // ── Footer ──
  footer: {
    description:
      "Licensed home inspector serving Greater Vancouver, Fraser Valley, and Sea-to-Sky. Trusted since 2000.",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
    },
  },
};

export default gmwEvergreenConfig;
