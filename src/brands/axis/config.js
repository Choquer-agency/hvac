const axisConfig = {
  // ── Company ──
  companyName: "Axis Building Group",
  companyFullName: "Axis Building Group LLC",
  phone: "(312) 555-0190",
  phoneRaw: "3125550190",
  email: "info@axisbuildinggroup.com",
  address: {
    street: "401 N Michigan Ave, Suite 1200",
    city: "Chicago",
    state: "IL",
    zip: "60611",
  },
  tagline: "Built to Perform.",
  foundedYear: 1999,
  licenseNumber: "GC-2024-08712",
  brandSlug: "axis",

  // ── Brand / Theme ──
  colors: {
    primary: "#F2CF37",
    primaryDark: "#D4B52E",
    primaryLight: "#F5DA5C",
    secondary: "#F7F7F7",
    dark: "#010101",
    light: "#F7F7F7",
    bg: "#010101",
  },
  fonts: {
    heading: "Space Grotesk",
    body: "DM Sans",
  },
  logo: "/images/axis/logo.svg",

  // ── Hero ──
  hero: {
    eyebrow: "Commercial General Contractor — Chicago, IL",
    headline: "We Build What Others Won't",
    highlightWord: "Build",
    body: "Axis Building Group delivers large-scale commercial construction, tenant improvements, and design-build projects across the greater Chicago area. On time. On budget. No excuses.",
    primaryCTA: { label: "Get a Quote", href: "/contact" },
    secondaryCTA: { label: "View Our Work", href: "#projects" },
    backgroundImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85",
  },

  // ── Stats ──
  stats: [
    { number: 500, suffix: "+", label: "Projects Completed" },
    { number: 25, suffix: "+", label: "Years Experience" },
    { number: 2, suffix: "M+", label: "Sq Ft Built" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
  ],

  // ── Services ──
  servicesSection: {
    eyebrow: "What We Do",
    headline: "Full-Spectrum Commercial Construction",
  },
  services: [
    {
      slug: "commercial-construction",
      name: "Commercial Construction",
      shortDescription:
        "Ground-up builds for office, retail, industrial, and mixed-use projects — delivered on schedule and within budget.",
      icon: "building",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    },
    {
      slug: "tenant-improvements",
      name: "Tenant Improvements",
      shortDescription:
        "Custom build-outs that transform raw or existing spaces into high-performance work environments.",
      icon: "layout",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      slug: "pre-construction",
      name: "Pre-Construction",
      shortDescription:
        "Budgeting, value engineering, and scheduling before the first shovel hits dirt — eliminating costly surprises.",
      icon: "clipboard",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    },
    {
      slug: "design-build",
      name: "Design-Build",
      shortDescription:
        "Single-source accountability from concept through occupancy. One team, one contract, zero finger-pointing.",
      icon: "compass",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    },
    {
      slug: "project-management",
      name: "Project Management",
      shortDescription:
        "Hands-on oversight of scope, cost, quality, and timeline so you can focus on running your business.",
      icon: "bar-chart",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    },
    {
      slug: "renovation",
      name: "Renovation & Retrofit",
      shortDescription:
        "Breathing new life into aging structures with modern systems, finishes, and code-compliant upgrades.",
      icon: "refresh",
      image:
        "https://images.unsplash.com/photo-1590644365607-1c5a2a979abd?w=800&q=80",
    },
  ],

  // ── Why Axis (Differentiators) ──
  whyAxis: {
    eyebrow: "Why Axis",
    headline: "Why Industry Leaders Choose Axis",
    body: "We don't just build structures — we build trust. Every project is backed by disciplined processes, transparent communication, and a relentless commitment to quality.",
    backgroundImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    items: [
      {
        icon: "shield",
        title: "Single-Source Accountability",
        description:
          "One team, one contract, one point of contact. No finger-pointing, no runaround — just clear ownership from groundbreaking to ribbon-cutting.",
      },
      {
        icon: "clock",
        title: "On-Time Guarantee",
        description:
          "We've delivered 98% of projects on or ahead of schedule. Our milestone-driven approach means your timeline is sacred, not aspirational.",
      },
      {
        icon: "dollar",
        title: "Transparent Pricing",
        description:
          "Open-book budgeting with detailed cost breakdowns. You see every line item — no hidden markups, no surprise change orders.",
      },
      {
        icon: "award",
        title: "25+ Years of Excellence",
        description:
          "Since 1999, we've completed 500+ commercial projects across Chicago. Our track record speaks louder than any pitch deck.",
      },
    ],
  },

  // ── Process ──
  processSection: {
    eyebrow: "How We Work",
    headline: "A Proven Process. Zero Guesswork.",
  },
  process: [
    {
      step: 1,
      title: "Discovery & Pre-Construction",
      description:
        "We sit down with your team, walk the site, define scope, and build a detailed budget and timeline before committing a single dollar to construction.",
      image:
        "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&q=80",
    },
    {
      step: 2,
      title: "Planning & Permitting",
      description:
        "Our team coordinates design documents, engineering reviews, and municipal permits — keeping the project moving while we handle the red tape.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      step: 3,
      title: "Construction Execution",
      description:
        "Skilled crews, rigorous safety protocols, and daily progress reporting. We build fast without cutting corners and keep you informed at every milestone.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    },
    {
      step: 4,
      title: "Closeout & Handover",
      description:
        "Punch list, final inspections, warranty documentation, and a clean handover. You get the keys to a building that's ready to perform from day one.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
  ],

  // ── Parallax Divider ──
  parallaxDivider: {
    image:
      "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1400&q=85",
    stats: [
      { number: 25, suffix: "+", label: "Years" },
      { number: 500, suffix: "+", label: "Projects" },
    ],
    tagline: "Zero Compromises.",
  },

  // ── Partner Logos ──
  partnerLogos: [
    { name: "Turner & Associates" },
    { name: "AECOM" },
    { name: "Gensler" },
    { name: "Pepper Construction" },
    { name: "Clayco" },
    { name: "Walsh Group" },
    { name: "Power Construction" },
    { name: "Lendlease" },
  ],

  // ── Reviews ──
  reviews: {
    platform: "Google",
    rating: 4.9,
    count: 127,
    url: "#",
    featured: [
      {
        name: "Michael Torres",
        title: "VP of Operations, Lakeshore Properties",
        rating: 5,
        text: "Axis delivered our 40,000 sq ft office build-out two weeks ahead of schedule. Their project management is world-class — we always knew exactly where we stood on budget and timeline.",
      },
      {
        name: "Sarah Chen",
        title: "Director of Facilities, Midwest Health Partners",
        rating: 5,
        text: "We've used Axis for three consecutive tenant improvement projects. They understand healthcare construction, navigate code requirements flawlessly, and their crews are professional and clean.",
      },
      {
        name: "David Kowalski",
        title: "Owner, Kowalski Restaurant Group",
        rating: 5,
        text: "Building a restaurant is chaos — Axis made it feel controlled. From permits to final punch list, they handled everything and we opened on time. Can't ask for more than that.",
      },
    ],
  },

  // ── Projects (for showcase section) ──
  projects: [
    {
      name: "Lakeshore Office Tower",
      type: "Commercial Office",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      name: "Midwest Distribution Center",
      type: "Industrial",
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    },
    {
      name: "River North Mixed-Use",
      type: "Mixed-Use Development",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      name: "Gold Coast Renovation",
      type: "Renovation",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
  ],

  // ── Final CTA ──
  finalCTA: {
    headline: "Ready to Build?",
    body: "Whether it's a ground-up build, a tenant improvement, or a full renovation — Axis Building Group has the team, the track record, and the process to deliver. Let's talk.",
    primaryCTA: { label: "Request a Proposal", href: "/contact" },
    secondaryCTA: {
      label: "Call (312) 555-0190",
      href: "tel:3125550190",
    },
  },

  // ── Footer ──
  footer: {
    description:
      "Chicago's trusted commercial general contractor since 1999. Licensed, bonded, and insured.",
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
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export default axisConfig;
