const ironwoodConfig = {
  // ── Company Info ──
  companyName: "Ironwood Builders",
  companyFullName: "Ironwood Builders — Luxury Custom Homes",
  phone: "(480) 555-0234",
  phoneRaw: "4805550234",
  email: "hello@ironwoodbuilders.com",
  address: {
    street: "7134 E Stetson Dr, Suite 300",
    city: "Scottsdale",
    state: "AZ",
    zip: "85251",
  },
  tagline: "Where vision meets craft.",
  foundedYear: 2008,

  // ── Brand / Theme ──
  brandSlug: "ironwood",
  colors: {
    primary: "#3B4841",
    primaryDark: "#2A3630",
    primaryLight: "#4D5E54",
    secondary: "#ED6442",
    accent: "#CFDA9E",
    cream: "#FDE9A2",
    dark: "#3B4841",
    light: "#FDF8F0",
    bg: "#FDF8F0",
  },
  fonts: {
    heading: "Cormorant Garamond",
    body: "Lato",
  },
  logo: "/images/ironwood/logo.svg",

  // ── Hero ──
  hero: {
    eyebrow: "Scottsdale's Premier Custom Home Builder",
    headline: "Homes crafted for the way you live",
    body: "For nearly two decades, Ironwood Builders has brought timeless design and uncompromising craftsmanship to the most discerning homeowners in the Sonoran Desert.",
    primaryCTA: { label: "Begin Your Story", href: "#contact" },
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
  },

  // ── Pull Quote ──
  pullQuote:
    "A home should be a quiet conversation between architecture and landscape — where every material, every line, every view is considered with the same care one brings to a life well-lived.",

  // ── About Statement ──
  aboutStatement:
    "Ironwood Builders was founded on a simple belief: that luxury is not about excess, but about intention. Every home we build begins with deep listening — understanding how our clients move through their days, what brings them peace, and how architecture can honor both the land and the life within it. Our process is collaborative, unhurried, and meticulous. From the first sketch to the final walkthrough, we are guided by a commitment to materials that age with grace, details that reward attention, and spaces that feel as inevitable as the desert sunrise.",

  // ── Portfolio ──
  portfolio: [
    {
      title: "The Saguaro Residence",
      category: "Desert Modern",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    },
    {
      title: "Canyon View Estate",
      category: "Contemporary Ranch",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      title: "The Ironwood Retreat",
      category: "Indoor-Outdoor Living",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    },
    {
      title: "Camelback Terrace",
      category: "Hillside Custom",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    },
  ],

  // ── Services ──
  servicesSection: {
    eyebrow: "What We Do",
    headline: "Craftsmanship across every discipline",
  },
  services: [
    {
      title: "Custom Home Building",
      description:
        "Ground-up luxury residences designed around your lifestyle, built with the finest materials and an unwavering attention to detail.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      title: "Kitchen & Bath Remodeling",
      description:
        "Transformative renovations that elevate the most personal spaces in your home — where function meets refined beauty.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    },
    {
      title: "Outdoor Living",
      description:
        "Seamless indoor-outdoor environments that embrace the desert landscape — courtyards, pools, outdoor kitchens, and gathering spaces.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    },
    {
      title: "Interior Design",
      description:
        "Curated interiors that reflect your aesthetic sensibility — from material palettes and custom millwork to furnishings and art placement.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    },
    {
      title: "Home Additions",
      description:
        "Thoughtful expansions that feel like they were always part of the original vision — guest suites, studios, and living extensions.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      title: "Historic Restoration",
      description:
        "Preserving the character of architecturally significant homes while integrating modern comfort, systems, and performance.",
      image:
        "https://images.unsplash.com/photo-1616137466211-f736a1eb2770?w=800&q=80",
    },
  ],

  // ── Process Steps ──
  processSection: {
    eyebrow: "Our Process",
    headline: "A journey, not a transaction",
  },
  process: [
    {
      step: 1,
      title: "Discovery & Vision",
      description:
        "We begin with conversation — learning how you live, what inspires you, and what your land has to teach us. This is where the story of your home starts to take shape.",
    },
    {
      step: 2,
      title: "Design Development",
      description:
        "Our architects and designers translate your vision into detailed plans, material palettes, and 3D renderings — iterating until every detail feels right.",
    },
    {
      step: 3,
      title: "Artful Execution",
      description:
        "Our master craftspeople bring the design to life with precision and care. Transparent timelines, curated materials, and hands-on project management at every stage.",
    },
    {
      step: 4,
      title: "The Reveal",
      description:
        "The moment your home is complete — every surface finished, every view framed, every detail considered. A home that was worth the wait.",
    },
  ],

  // ── Reviews ──
  reviews: {
    platform: "Google",
    rating: 5.0,
    count: 89,
    featured: [
      {
        author: "Katherine & David M.",
        text: "Ironwood didn't just build our home — they understood it before we could articulate what we wanted. Every meeting felt like a conversation with someone who genuinely cared about how we would live in the space. The result is a home that feels like it grew out of the landscape. We are moved by it every single day.",
        rating: 5,
      },
      {
        author: "Dr. James Harrington",
        text: "After twenty years of living in homes that never quite felt right, we found Ironwood. Their patience, their eye for proportion, and their insistence on materials that will look better in fifty years than they do today — it changed our understanding of what a home can be.",
        rating: 5,
      },
      {
        author: "Sophia Chen-Williams",
        text: "The level of craft is extraordinary. I watched them hand-select every stone for our fireplace surround, adjust window placements by inches to capture the perfect mountain view, and source reclaimed beams from a century-old barn. This is building as an art form.",
        rating: 5,
      },
    ],
  },

  // ── Materials ──
  materials: [
    "Natural Stone",
    "Reclaimed Wood",
    "Custom Millwork",
    "Artisan Tile",
    "Hand-Forged Iron",
  ],

  // ── Final CTA ──
  finalCTA: {
    eyebrow: "Begin",
    headline: "Your home is waiting to be imagined",
    body: "Every extraordinary home begins with a single conversation. We would be honored to listen to your vision and explore what we might create together.",
    primaryCTA: { label: "Schedule a Consultation", href: "#contact" },
  },

  // ── Footer ──
  footer: {
    description:
      "Luxury custom home building in Scottsdale, Arizona. Crafting homes since 2008.",
    socialLinks: {
      instagram: "#",
      pinterest: "#",
      houzz: "#",
    },
  },
};

export default ironwoodConfig;
