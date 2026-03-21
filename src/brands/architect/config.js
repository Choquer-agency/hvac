const architectConfig = {
  // ── Company Info ──
  companyName: "Architectect",
  companyFullName: "Architectect Design + Build",
  phone: "(312) 555-0187",
  phoneRaw: "3125550187",
  email: "hello@architectect.com",
  address: {
    street: "401 N Michigan Ave, Suite 1200",
    city: "Chicago",
    state: "IL",
    zip: "60611",
  },
  tagline: "Modern builds. Smarter methods.",
  foundedYear: 2016,

  // ── Brand / Theme ──
  brandSlug: "architect",
  colors: {
    primary: "#3D3E3D",
    primaryDark: "#2D2E2D",
    primaryLight: "#5D5E5D",
    secondary: "#F89525",
    accent: "#FBB81B",
    dark: "#1a1a1a",
    light: "#FAF7F2",
    bg: "#FAF7F2",
  },
  fonts: {
    heading: "Rethink Sans",
    body: "Inter",
  },
  logo: "/images/architect/logo.svg",

  // ── Hero ──
  hero: {
    eyebrow: "Architecture + Construction, Reimagined",
    headline: "We design buildings that move people forward",
    body: "From concept to completion, Architectect delivers modern architecture and precision construction for clients who refuse to settle for ordinary.",
    primaryCTA: { label: "Start Your Project", href: "#contact" },
    secondaryCTA: { label: "View Our Work", href: "#featured" },
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
  },

  // ── Stats ──
  stats: [
    { value: 10, suffix: "+", label: "Years of Practice" },
    { value: 200, suffix: "+", label: "Projects Completed" },
    { value: 42, suffix: "", label: "Industry Awards" },
    { value: 98, suffix: "%", label: "Client Retention" },
  ],

  // ── About Statement ──
  aboutStatement:
    "We believe great buildings start with a question, not a blueprint. Every project at Architectect begins with deep listening — understanding how people move through space, how light shapes mood, and how materials age with grace. Our integrated design-build approach eliminates the friction between vision and execution, delivering structures that are as intelligent as they are beautiful. This is architecture engineered for the way we live now.",

  // ── Featured Project ──
  featuredProject: {
    eyebrow: "Featured Project",
    title: "The Lakeview Residence",
    description:
      "A 4,200 sq ft modern home perched above Lake Michigan. Floor-to-ceiling glass, cantilevered concrete, and a rooftop garden that dissolves the boundary between architecture and landscape.",
    stats: [
      { label: "Square Feet", value: "4,200" },
      { label: "Timeline", value: "14 Months" },
      { label: "Certification", value: "LEED Gold" },
    ],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
  },

  // ── Services ──
  servicesSection: {
    eyebrow: "What We Build",
    headline: "Design-led construction for modern living",
  },
  services: [
    {
      title: "Custom Residences",
      description:
        "Ground-up homes designed around your lifestyle, built with premium materials and meticulous attention to detail.",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      title: "Commercial Architecture",
      description:
        "Office spaces, retail environments, and mixed-use developments that elevate brands and attract talent.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      title: "Renovation + Adaptive Reuse",
      description:
        "Breathing new life into existing structures with thoughtful redesigns that honor character while adding modern performance.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      title: "Interior Architecture",
      description:
        "Spatial planning and interior buildouts that transform how people experience the spaces where they work and live.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    },
    {
      title: "Pre-Construction Planning",
      description:
        "Feasibility studies, site analysis, and cost modeling that de-risk your project before a single shovel hits the ground.",
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    },
    {
      title: "Sustainable Design",
      description:
        "Net-zero strategies, passive house principles, and material science that reduce environmental impact without compromising design.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
  ],

  // ── Parallax Image Band ──
  parallaxImage:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80",

  // ── Process Steps ──
  processSection: {
    eyebrow: "How We Work",
    headline: "From vision to structure, in four clear phases",
  },
  process: [
    {
      step: 1,
      title: "Discover",
      description:
        "We listen to your goals, study the site, and define the project scope — aligning vision, budget, and timeline from day one.",
    },
    {
      step: 2,
      title: "Design",
      description:
        "Our architects translate your brief into 3D renderings and construction documents, iterating until every detail is right.",
    },
    {
      step: 3,
      title: "Build",
      description:
        "Our in-house construction team executes with precision — real-time project tracking, transparent budgets, zero surprises.",
    },
    {
      step: 4,
      title: "Deliver",
      description:
        "Final walkthrough, punch-list completion, and warranty handoff. Your building, perfected and ready to occupy.",
    },
  ],

  // ── Reviews ──
  reviews: {
    platform: "Google",
    rating: 5.0,
    count: 127,
    featured: [
      {
        author: "Sarah M.",
        text: "Architectect turned our outdated 1970s ranch into a modern masterpiece. Their design-build process was seamless — one team from start to finish. We never felt lost or out of the loop.",
        rating: 5,
      },
      {
        author: "James K.",
        text: "We hired them for our office buildout downtown. They delivered on time, under budget, and the space is stunning. Our team loves coming to work now. That says everything.",
        rating: 5,
      },
      {
        author: "Elena R.",
        text: "From the first meeting, it was clear these people understand architecture at a different level. They asked questions no other firm thought to ask. The result is a home that feels like it was designed just for us — because it was.",
        rating: 5,
      },
    ],
  },

  // ── Marquee Words ──
  marqueeWords: [
    "Design",
    "Build",
    "Transform",
    "Innovate",
    "Create",
    "Elevate",
    "Refine",
    "Deliver",
  ],

  // ── Final CTA ──
  finalCTA: {
    eyebrow: "Ready to Build?",
    headline: "Let's create something extraordinary",
    body: "Whether you're planning a custom home, a commercial space, or a renovation, our team is ready to bring your vision to life with precision and purpose.",
    primaryCTA: { label: "Start Your Project", href: "#contact" },
  },

  // ── Footer ──
  footer: {
    description:
      "Modern architecture and precision construction in Chicago. Design-build done differently since 2016.",
    socialLinks: {
      instagram: "#",
      linkedin: "#",
    },
  },
};

export default architectConfig;
