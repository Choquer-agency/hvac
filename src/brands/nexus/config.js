const nexusConfig = {
  // ── Company Info ──
  companyName: "Nexus AI",
  companyFullName: "Nexus AI — Fractional CMO & AI Marketing Courses",
  phone: "(415) 555-0247",
  phoneRaw: "4155550247",
  email: "hello@nexusai.co",
  address: {
    street: "",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
  },
  tagline: "The future of marketing is AI-powered. Learn it now.",
  foundedYear: 2022,

  // ── Brand / Theme ──
  brandSlug: "nexus",
  colors: {
    primary: "#7C3AED",
    primaryLight: "#A78BFA",
    secondary: "#F4845F",
    accentYellow: "#FFD166",
    accentGreen: "#06D6A0",
    accentPeach: "#FFE0D0",
    dark: "#1A1A2E",
    light: "#FAFAF8",
    card: "#FFFFFF",
    muted: "#6B7280",
    bg: "#FAFAF8",
  },
  fonts: {
    heading: "Space Grotesk",
    body: "Inter",
  },
  logo: "/images/nexus/logo.svg",

  // ── Nav ──
  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Courses", href: "#courses" },
      { label: "Pricing", href: "#pricing" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Get Started", href: "#contact" },
  },

  // ── Hero ──
  hero: {
    featurePills: [
      "Fractional CMO",
      "AI Marketing Strategist",
      "Course Creator",
    ],
    headline:
      "The AI-powered marketing engine to fuel your business growth",
    body: "Unlock expert-level marketing strategy and AI automation —",
    bodyBold: "without the six-figure CMO salary.",
    primaryCTA: { label: "Schedule a chat with me", href: "#contact" },
    socialProof: {
      count: "15,000+",
      text: "marketers already learning with Nexus AI",
    },
  },

  // ── Video Section ──
  videoSection: {
    headline: "See How AI Is Transforming Modern Marketing",
    body: "Watch how our students are using AI-powered frameworks to 3x their output, cut costs by 60%, and build marketing systems that scale — all in under 90 days.",
  },

  // ── Courses ──
  courses: [
    {
      title: "AI Marketing Foundations",
      description:
        "Build your AI marketing stack from scratch. Master prompt engineering, content automation, and analytics across 6 hands-on modules.",
      tag: "Beginner Friendly",
      price: "$497",
      nextDate: "April 14, 2026",
      duration: "6 weeks · Self-paced",
      spots: "24 spots remaining",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      title: "AI-Powered Paid Media",
      description:
        "Build and optimize ad campaigns across Meta, Google, and TikTok using AI for creative generation, copy testing, and bid strategy.",
      tag: "Advanced",
      price: "$897",
      nextDate: "May 5, 2026",
      duration: "8 weeks · Live cohort",
      spots: "16 spots remaining",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      title: "CMO Accelerator",
      description:
        "The complete system: strategy, execution, automation, and team leadership. Everything you need to operate as a modern fractional or full-time CMO.",
      tag: "All-In-One",
      price: "$1,997",
      nextDate: "April 28, 2026",
      duration: "12 weeks · Live + 1-on-1",
      spots: "8 spots remaining",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    },
  ],

  // ── Features Bento ──
  featuresSection: {
    headline: "Feel the best experience with our features",
    subtext:
      "Empower individuals and businesses to reach their marketing aspirations.",
    items: [
      {
        title: "Customize your learning path, make it look unique",
        description:
          "Create a custom curriculum that reflects your unique goals and personality. Choose from a range of modules, templates, and AI tools to customize the look of your journey.",
        size: "large",
        color: "#FAFAF8",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      },
      {
        title: "Personalized your Marketing Insights and Goals",
        description:
          "Track your learning platform overview for course or expense easily. Easily monitor and manage your growth.",
        size: "large",
        color: "#1A1A2E",
        dark: true,
      },
      {
        title: "Learn from Anywhere around the World",
        description:
          "Access courses on any device. Our platform syncs your progress seamlessly across desktop, tablet, and mobile.",
        size: "wide",
        color: "#FFE0D0",
      },
      {
        title: "Master 30+ AI Marketing Tools",
        description: "",
        size: "small",
        color: "#FFD166",
      },
      {
        title: "Subscriptions you control in one place",
        description: "",
        size: "small",
        color: "#FFFFFF",
      },
      {
        title: "Check our other course features",
        description: "",
        size: "small",
        color: "#FAFAF8",
      },
    ],
  },

  // ── About Section ──
  aboutSection: {
    headline: "Get To Know More About Nexus AI",
    body: "We prioritize you at the heart of our AI marketing education experience, offering comprehensive learning solutions to fulfill all your professional requirements.",
    stats: [
      { value: "243K", label: "Total Users From All Over The Globe" },
      { value: "489M", label: "Total Revenue In 2024 in The First Quarter" },
      { value: "270%", label: "Total Investment Growth in 2024" },
    ],
    achievements: [
      { label: "Achievements", sublabel: "Best AI Marketing Course Platform" },
      { label: "Finance", sublabel: "Most Popular Learning App" },
    ],
  },

  // ── Pricing ──
  pricing: {
    headline: "Priced to help you grow and thrive",
    subtext:
      "Start for free and enhance as you need them or explore our plans to get everything you need at once.",
    included: [
      "Free online resources",
      "Active forum community",
      "All course templates included",
      "End-to-end applied payments",
    ],
    plans: [
      {
        name: "Free",
        description:
          "Get started, explore our free modules at no cost. Includes community access.",
        price: "0.00",
        period: "/month",
        cta: "Get Started",
        featured: false,
      },
      {
        name: "Plus",
        description:
          "Our advanced modules designed specifically to help marketing professionals level up.",
        price: "29+",
        period: "/month",
        cta: "Get Started",
        featured: true,
      },
      {
        name: "Premium",
        description:
          "Build a complete AI marketing system with custom 1-on-1 CMO coaching and priority support.",
        price: "Custom",
        period: "",
        cta: "Contact Us",
        featured: false,
      },
    ],
  },

  // ── Testimonials ──
  testimonials: [
    {
      name: "Samriddhi Singh",
      text: "Overall, this system has been a life-changer for me. It has revolutionized the way I approach my marketing, providing me with the tools, insights, and security I need to unlock my professional freedom.",
      avatar: null,
    },
  ],

  // ── Contact / CTA ──
  contactSection: {
    headline: "Start mastering AI with Nexus\nConnect with Us",
  },

  // ── Newsletter ──
  newsletter: {
    headline: "Keep up with the latest",
    subtext:
      "Join our newsletter to stay up-to date on features and techniques.",
  },

  // ── Footer ──
  footer: {
    description:
      "AI-powered marketing education for modern marketers, founders, and agencies.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Courses", href: "#courses" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Careers", href: "#" },
          { label: "Blog", href: "#" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "#" },
          { label: "Contact", href: "#contact" },
          { label: "Privacy", href: "#" },
        ],
      },
    ],
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      youtube: "#",
      instagram: "#",
    },
  },
};

export default nexusConfig;
