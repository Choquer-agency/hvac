const evergreenConfig = {
  // ── Company Info ──
  companyName: "Evergreen Homes",
  companyFullName: "Evergreen Modular Homes",
  phone: "(503) 555-0142",
  phoneRaw: "5035550142",
  email: "hello@evergreenhomes.com",
  address: {
    street: "820 NW Flanders St, Suite 300",
    city: "Portland",
    state: "OR",
    zip: "97209",
  },
  tagline: "Modern living, delivered.",
  foundedYear: 2014,

  // ── Brand / Theme ──
  brandSlug: "evergreen",
  colors: {
    primary: "#193133",
    primaryDark: "#0F2022",
    primaryLight: "#2A4A4D",
    secondary: "#D0FF71",
    accent: "#4CAF50",
    logoGreen: "#2D6A4F",
    dark: "#193133",
    light: "#F0F7F0",
    bg: "#FFFFFF",
  },
  fonts: {
    heading: "Outfit",
    body: "Inter",
  },
  logo: "/images/evergreen/logo.svg",

  // ── Hero ──
  hero: {
    eyebrow: "Factory-Built. Shipped Nationwide.",
    headline: "Modern homes, built smarter",
    body: "Precision-engineered modular homes from 200 to 1,000 sq ft. Built in our facility, shipped to your site, ready to live in weeks — not months.",
    primaryCTA: { label: "Explore Models", href: "#models" },
    secondaryCTA: { label: "How It Works", href: "#process" },
    image: "/images/evergreen/homestead-installed.webp",
  },

  // ── About / Mission Statement ──
  aboutStatement:
    "We build homes with factory precision, ship them to your door, and install them in days. Every Evergreen home is designed for efficiency, durability, and beauty — no shortcuts, no surprises.",

  // ── Models ──
  modelsSection: {
    eyebrow: "Our Models",
    headline: "Homes from 200 to 1,000 sqft",
  },
  models: [
    {
      name: "The Studio",
      slug: "studio",
      sqft: "200–400",
      bedrooms: "0–1",
      bathrooms: "1",
      startingPrice: "$45,000",
      tagline: "Compact living, zero compromise.",
      description:
        "Ideal for a backyard ADU, home office, or minimalist retreat. The Studio packs full functionality into a beautifully designed compact footprint with an open floor plan and abundant natural light.",
      image: "/images/evergreen/homestead-render.webp",
      features: [
        "Open floor plan",
        "Full kitchen",
        "Built-in storage",
        "Covered porch option",
      ],
    },
    {
      name: "The Cottage",
      slug: "cottage",
      sqft: "500–700",
      bedrooms: "1–2",
      bathrooms: "1",
      startingPrice: "$89,000",
      tagline: "Room to breathe.",
      description:
        "The sweet spot between compact and spacious. Separate living and sleeping areas, full-size appliances, and enough room for comfortable daily life — all in a modular package that ships ready to install.",
      image: "/images/evergreen/cottage-render.webp",
      features: [
        "Separate bedroom",
        "Full-size appliances",
        "Washer/dryer hookups",
        "Deck option",
      ],
    },
    {
      name: "The Homestead",
      slug: "homestead",
      sqft: "800–1,000",
      bedrooms: "2–3",
      bathrooms: "1–2",
      startingPrice: "$129,000",
      tagline: "A full home, rethought.",
      description:
        "Genuine multi-bedroom living in a modular footprint. The Homestead offers the space and comfort of a traditional home with the speed, precision, and value of factory construction.",
      image: "/images/evergreen/studio-render.webp",
      features: [
        "Multiple bedrooms",
        "Walk-in closet",
        "Full laundry room",
        "Two-car parking pad option",
      ],
    },
  ],

  // ── Package Add-Ons ──
  packages: [
    {
      name: "Solar Ready",
      price: "+$8,500",
      icon: "sun",
      description: "Go green from day one.",
      features: [
        "Pre-wired solar panel mounts",
        "Inverter-ready electrical",
        "Battery storage bay",
      ],
    },
    {
      name: "Smart Home",
      price: "+$4,200",
      icon: "cpu",
      description: "Connected living, built in.",
      features: [
        "Smart thermostat",
        "Keyless entry",
        "App-controlled lighting",
        "Voice assistant integration",
      ],
    },
    {
      name: "Premium Finishes",
      price: "+$12,000",
      icon: "sparkles",
      description: "Elevated materials throughout.",
      features: [
        "Quartz countertops",
        "Hardwood flooring",
        "Custom cabinetry",
        "Designer fixtures",
      ],
    },
    {
      name: "Off-Grid",
      price: "+$18,500",
      icon: "mountain",
      description: "Complete independence.",
      features: [
        "Full solar array",
        "Battery bank",
        "Water collection system",
        "Composting toilet option",
      ],
    },
  ],

  // ── Process Steps ──
  processSection: {
    eyebrow: "How It Works",
    headline: "From click to move-in, in weeks",
  },
  process: [
    {
      step: 1,
      title: "Configure",
      description:
        "Choose your model, select packages, and customize finishes online or with our design team.",
    },
    {
      step: 2,
      title: "Build",
      description:
        "Your home is precision-built in our climate-controlled facility — no weather delays, no wasted materials.",
    },
    {
      step: 3,
      title: "Ship",
      description:
        "Delivered on a flatbed to your prepared site anywhere in the continental US.",
    },
    {
      step: 4,
      title: "Install",
      description:
        "Our crew sets your home on its foundation. Utilities connected, you move in within days.",
    },
  ],

  // ── Stats ──
  stats: [
    { value: 320, suffix: "+", label: "Homes Delivered" },
    { value: 48, suffix: "", label: "States Served" },
    { value: 6, suffix: " wks", label: "Avg. Build Time" },
    { value: 97, suffix: "%", label: "Customer Satisfaction" },
  ],

  // ── Marquee ──
  marqueeWords: [
    "Eco-Materials",
    "Net-Zero Ready",
    "Factory Precision",
    "Steel Frame",
    "Sustainable Timber",
    "Climate-Controlled Build",
    "Zero Waste",
    "Solar Compatible",
  ],

  // ── Gallery ──
  galleryImages: [
    {
      src: "/images/evergreen/homestead-installed.webp",
      alt: "The Homestead — installed in the desert",
    },
    {
      src: "/images/evergreen/building-site.webp",
      alt: "Module delivery and crane installation on site",
    },
    {
      src: "/images/evergreen/cottage-installed.webp",
      alt: "The Cottage — nestled in the mountains",
    },
    {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      alt: "Modern open-plan living room",
    },
    {
      src: "/images/evergreen/building-factory.webp",
      alt: "Precision assembly in our factory facility",
    },
    {
      src: "/images/evergreen/studio-installed.webp",
      alt: "The Studio — installed in Los Angeles",
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      alt: "Compact modern kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      alt: "Sunlit bedroom with natural finishes",
    },
  ],

  // ── Parallax ──
  parallaxImage: "/images/evergreen/cottage-installed.webp",

  // ── Reviews ──
  reviews: {
    platform: "Google",
    rating: 4.9,
    count: 94,
    featured: [
      {
        author: "Rachel T.",
        text: "Our Evergreen Studio was delivered and installed in under three weeks. The quality is incredible — you'd never know it was built in a factory. We use it as a rental ADU and it was cash-flow positive in month two.",
        rating: 5,
      },
      {
        author: "David & Maria L.",
        text: "We were skeptical about modular, but the Homestead completely changed our minds. The finishes are beautiful, the build was fast, and we saved almost 40% compared to traditional construction. Evergreen made the whole process seamless.",
        rating: 5,
      },
      {
        author: "Kevin P.",
        text: "Ordered the Cottage with the off-grid package for our property in Montana. Shipped across the country and set up in four days. Living in it full-time now and couldn't be happier with the quality.",
        rating: 5,
      },
    ],
  },

  // ── Trust Badges ──
  trustBadges: [
    "Factory Direct",
    "Nationwide Shipping",
    "10-Year Warranty",
  ],

  // ── Final CTA ──
  finalCTA: {
    eyebrow: "Ready to build smarter?",
    headline: "Configure your Evergreen home today",
    body: "Choose a model, pick your packages, and get a quote — all in under five minutes.",
    primaryCTA: { label: "Start Configuring", href: "#contact" },
  },

  // ── Footer ──
  footer: {
    description:
      "Modular homes built in Portland, shipped nationwide. Modern living, delivered since 2014.",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
    },
  },
};

export default evergreenConfig;
