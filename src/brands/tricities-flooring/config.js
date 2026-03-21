const tricitiesFlooringConfig = {
  // ── Company ──
  companyName: "TriCities Flooring",
  companyFullName: "TriCities Flooring Ltd.",
  phone: "(778) 897-3500",
  phoneRaw: "7788973500",
  email: "info@tricitiesflooring.ca",
  address: {
    street: "301 220 Brew St",
    city: "Port Moody",
    province: "BC",
    postal: "V3H 0E6",
  },
  tagline: "Your Dream Floors, Delivered.",
  foundedYear: 2021,
  brandSlug: "tricities-flooring",

  // ── Brand / Theme ──
  colors: {
    primary: "#00B4D8",
    primaryDark: "#0096B7",
    primaryLight: "#48CAE4",
    secondary: "#39FF14",
    dark: "#1a1a1a",
    light: "#FFFFFF",
    bg: "#FFFFFF",
    cardBg: "#F5F7FA",
    border: "#E2E8F0",
  },
  fonts: {
    heading: "Space Grotesk",
    body: "DM Sans",
  },
  logo: "/images/tricities-flooring/logo.png",

  // ── Hero ──
  hero: {
    eyebrow: "Tri-Cities' Trusted Flooring Experts — Coquitlam, Port Coquitlam & Port Moody",
    headline: "Your Dream Floors, Delivered",
    highlightWord: "Dream",
    body: "We're passionate about helping you create the space of your dreams with high-quality, dependable flooring solutions. Expert advice, stress-free service, and beautiful results — without ever lifting a finger.",
    primaryCTA: { label: "Get Your Free Quote", href: "#contact" },
    secondaryCTA: { label: "Explore Our Services", href: "#services" },
    backgroundImage: "/images/tricities-flooring/hardwood.jpg",
  },

  // ── Stats ──
  stats: [
    { number: 100, suffix: "%", label: "Satisfaction Guarantee" },
    { number: 2021, suffix: "", label: "Family-Owned Since" },
    { number: 5, suffix: "★", label: "Google Rating" },
    { number: 0, suffix: "", label: "BBB A+ Rated", isText: true },
  ],

  // ── Services ──
  servicesSection: {
    eyebrow: "Our Flooring Solutions",
    headline: "Beautiful Floors for Every Space",
  },
  services: [
    {
      slug: "hardwood-floors",
      name: "Hardwood Floors",
      shortDescription:
        "Timeless elegance and lasting durability. We source and install premium hardwood flooring that transforms any room into a warm, inviting space.",
      icon: "home",
      image: "/images/tricities-flooring/hardwood.jpg",
    },
    {
      slug: "carpet-tiles",
      name: "Carpet & Carpet Tiles",
      shortDescription:
        "Soft underfoot and endlessly versatile. From plush bedroom carpets to durable carpet tiles for high-traffic areas, we've got you covered.",
      icon: "layers",
      image: "/images/tricities-flooring/carpet.jpg",
    },
    {
      slug: "ceramic-porcelain-tile",
      name: "Ceramic & Porcelain Tile",
      shortDescription:
        "Waterproof, stylish, and built to last. Perfect for kitchens, bathrooms, and entryways — our tile installations are precise and beautiful.",
      icon: "grid",
      image: "/images/tricities-flooring/tile.jpg",
    },
    {
      slug: "luxury-vinyl",
      name: "Luxury Vinyl & Sheet Vinyl",
      shortDescription:
        "The look of hardwood or stone at a fraction of the cost. Waterproof, scratch-resistant, and ideal for busy households with kids and pets.",
      icon: "shield",
      image: "/images/tricities-flooring/vinyl.jpg",
    },
    {
      slug: "laminate-engineered",
      name: "Laminate & Engineered Hardwood",
      shortDescription:
        "Get the beauty of real wood with enhanced durability and easier maintenance. A smart choice for style-conscious homeowners on any budget.",
      icon: "sliders",
      image: "/images/tricities-flooring/laminate.jpg",
    },
    {
      slug: "hardwood-refinishing",
      name: "Hardwood Refinishing",
      shortDescription:
        "Bring your existing hardwood floors back to life. Our expert sanding and refinishing restores the natural beauty of your wood floors.",
      icon: "refresh",
      image: "/images/tricities-flooring/refinishing.jpg",
    },
  ],

  // ── Why TriCities (Differentiators) ──
  whySection: {
    eyebrow: "Why Choose Us",
    headline: "Why Homeowners Trust TriCities Flooring",
    body: "We don't just install floors — we create experiences. From our in-home consultations to our white-glove installation service, every detail is handled with care so you can enjoy the process as much as the result.",
    backgroundImage: "/images/tricities-flooring/why-choose.jpg",
    items: [
      {
        icon: "home",
        title: "In-Home Showroom Experience",
        description:
          "We bring the showroom to your living room. Browse samples in your own space, under your own lighting, so you can see exactly how your new floors will look.",
      },
      {
        icon: "award",
        title: "Expert Installation Team",
        description:
          "Our skilled installers are meticulous, professional, and respectful of your home. We deliver flawless results on every project, every time.",
      },
      {
        icon: "heart",
        title: "Family-Owned & Community-Driven",
        description:
          "As a local family business, we treat every customer like a neighbour. Personalized service, honest advice, and genuine care for your home.",
      },
      {
        icon: "shield",
        title: "BBB A+ Accredited",
        description:
          "Our A+ rating with the Better Business Bureau reflects our commitment to quality, transparency, and customer satisfaction since day one.",
      },
    ],
  },

  // ── Process ──
  processSection: {
    eyebrow: "How It Works",
    headline: "Beautiful Floors in 4 Simple Steps",
  },
  process: [
    {
      step: 1,
      title: "Free In-Home Consultation",
      description:
        "We come to you. Our flooring expert visits your home, assesses your space, understands your vision, and helps you explore options — all at no cost or obligation.",
      image: "/images/tricities-flooring/team-1.jpg",
    },
    {
      step: 2,
      title: "Selection & Samples",
      description:
        "Browse our curated collection of flooring samples right in your home. See how each option looks under your lighting, with your furniture, and in your rooms.",
      image: "/images/tricities-flooring/team-2.jpg",
    },
    {
      step: 3,
      title: "Professional Installation",
      description:
        "Our expert installers handle everything — from subfloor preparation to the final plank. We work efficiently, keep your home clean, and deliver impeccable results.",
      image: "/images/tricities-flooring/laminate.jpg",
    },
    {
      step: 4,
      title: "Final Walkthrough & Enjoyment",
      description:
        "We walk through the finished project with you to ensure every detail meets your expectations. Then it's time to enjoy your beautiful new floors.",
      image: "/images/tricities-flooring/hardwood.jpg",
    },
  ],

  // ── Service Areas ──
  serviceAreas: {
    eyebrow: "Areas We Serve",
    headline: "Proudly Serving the Tri-Cities & Beyond",
    mapImage: "/images/tricities-flooring/service-areas.png",
    areas: [
      { name: "Coquitlam", description: "Full flooring services for homes and small offices" },
      { name: "Port Coquitlam", description: "Expert installation and consultation" },
      { name: "Port Moody", description: "Our home base — fast, reliable local service" },
      { name: "Greater Vancouver", description: "Serving the Lower Mainland and surrounding areas" },
    ],
  },

  // ── Reviews ──
  reviews: {
    platform: "Google",
    rating: 5.0,
    count: 15,
    url: "https://www.google.com/maps/place/TriCities+Flooring",
    featured: [
      {
        name: "Erwin B.",
        title: "Homeowner, Coquitlam",
        rating: 5,
        text: "Great service and are very knowledgeable in all aspects of the industry! They made the whole process so easy and the results are stunning. Highly recommend TriCities Flooring.",
      },
      {
        name: "Anne D.",
        title: "Homeowner, Port Moody",
        rating: 5,
        text: "Had our wood flooring sanded back to its natural colour. Great job! The team was professional and the floors look absolutely beautiful. Like brand new again.",
      },
      {
        name: "Sally T.",
        title: "Homeowner, Port Coquitlam",
        rating: 5,
        text: "Lovely team. Respectful, professional, thoughtful and responsive. They truly care about delivering quality work and it shows in every detail. Would hire again in a heartbeat.",
      },
    ],
  },

  // ── Parallax Divider ──
  parallaxDivider: {
    image: "/images/tricities-flooring/carpet.jpg",
    stats: [
      { number: 100, suffix: "%", label: "Satisfaction" },
      { number: 5, suffix: "★", label: "Rating" },
    ],
    tagline: "We Bring the Showroom to You.",
  },

  // ── Final CTA ──
  finalCTA: {
    headline: "Ready for Beautiful New Floors?",
    body: "Whether it's hardwood, carpet, tile, or vinyl — TriCities Flooring has the expertise, the selection, and the personal touch to make your flooring dreams a reality. Let's get started.",
    primaryCTA: { label: "Book a Free Consultation", href: "#contact" },
    secondaryCTA: {
      label: "Call (778) 897-3500",
      href: "tel:7788973500",
    },
  },

  // ── Footer ──
  footer: {
    description:
      "Tri-Cities' trusted flooring experts. Family-owned, community-driven, and BBB A+ accredited since 2023.",
    socialLinks: {
      facebook: "#",
      instagram: "#",
    },
  },

  // ── Navigation ──
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Areas", href: "#areas" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
};

export default tricitiesFlooringConfig;
