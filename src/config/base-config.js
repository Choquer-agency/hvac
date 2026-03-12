const baseConfig = {
  // ── Company (overridden per client) ──
  companyName: "{{companyName}}",
  companyFullName: "{{companyFullName}}",
  phone: "{{phone}}",
  phoneRaw: "{{phoneRaw}}",
  email: "{{email}}",
  address: {
    street: "{{street}}",
    city: "{{city}}",
    state: "{{state}}",
    zip: "{{zip}}",
  },
  tagline: "{{city}}'s Cooling & Heating Experts",
  foundedYear: 2010,
  licenseNumber: "CN-12345",

  // ── Brand / Theme (overridden per client) ──
  colors: {
    primary: "#1A73E9",
    primaryDark: "#1561C4",
    primaryLight: "#4A91EE",
    secondary: "#2BC48B",
    dark: "#0E1B2B",
    light: "#E6EAED",
    white: "#FFFFFF",
  },
  logo: "/images/House Logo.svg",

  // ── SEO defaults ──
  seo: {
    titleSuffix: " | {{companyFullName}} | {{city}}, {{state}}",
    defaultDescription:
      "{{companyFullName}} provides expert AC repair, heating, and HVAC services in {{city}}, {{state}}. {{reviewCount}} five-star reviews. Call today!",
  },

  // ── Social Proof (overridden per client) ──
  reviews: {
    platform: "Google",
    rating: 5.0,
    count: 0,
    url: "#",
    featured: [],
  },

  // ── Hero ──
  hero: {
    eyebrow: "{{city}}'s Most Trusted HVAC Professionals",
    headline: "Your Home Should Be Comfortable Year-Round",
    body: "From emergency repairs to full system installations, {{companyName}} keeps your family cool in summer and warm in winter — guaranteed.",
    primaryCTA: { label: "Schedule Service", href: "/contact" },
    secondaryCTA: { label: "Call Now: {{phone}}", href: "tel:{{phoneRaw}}" },
    backgroundImage: "/images/hero-bg.webp",
  },

  // ── Problems Section ──
  problemsSection: {
    eyebrow: "Why {{city}} Homeowners Trust Us",
    headline: "We Solve the Problems That Keep You Up at Night",
  },
  problems: [
    {
      icon: "thermometer",
      headline: "Your System Broke Down at the Worst Time",
      body: "It's the hottest day of the year and your AC just quit. You need someone who picks up the phone and shows up fast — not tomorrow, now. We offer same-day emergency service because your comfort can't wait.",
    },
    {
      icon: "dollar",
      headline: "You're Tired of Surprise Repair Bills",
      body: "Nothing's worse than a tech who finds \"one more thing\" every visit. We provide upfront, transparent pricing before any work begins. No hidden fees. No surprises. Just honest service.",
    },
    {
      icon: "shield",
      headline: "You Don't Know Who to Trust",
      body: "Every HVAC company says they're the best. But how many have {{reviewCount}} five-star reviews from real {{city}} homeowners? Our reputation is built on results, not promises.",
    },
    {
      icon: "temperature",
      headline: "Some Rooms Are Too Hot, Others Too Cold",
      body: "Uneven temperatures mean your system isn't working right. We diagnose airflow issues and get every room in your home to the comfort level you deserve.",
    },
    {
      icon: "bolt",
      headline: "Your Energy Bills Keep Climbing",
      body: "An inefficient HVAC system is like a hole in your wallet. We tune, repair, or replace your system so it runs at peak efficiency — saving you money month after month.",
    },
    {
      icon: "wrench",
      headline: "Your System Is On Its Last Legs",
      body: "If your unit is 15+ years old and constantly needing repairs, it's costing you more than a new one would. We'll give you a straight answer on whether to repair or replace — no pressure, just facts.",
    },
  ],

  // ── Process Steps ──
  processSection: {
    eyebrow: "Simple & Stress-Free",
    headline: "Getting Comfortable Is Easy",
  },
  process: [
    {
      step: 1,
      title: "Get In Touch",
      description: "Give us a call or fill out our contact form. We'll respond within the hour.",
    },
    {
      step: 2,
      title: "We Diagnose the Problem",
      description: "Our certified technicians come to your home, assess your system, and give you a clear, upfront quote.",
    },
    {
      step: 3,
      title: "We Fix It Right",
      description: "We complete the work on time, clean up after ourselves, and make sure you're 100% satisfied.",
    },
    {
      step: 4,
      title: "Enjoy Total Home Comfort",
      description: "No more sleepless nights, no more sweating through summer, no more freezing in winter. Just a home that feels exactly the way it should.",
    },
  ],

  // ── Services Section ──
  servicesSection: {
    eyebrow: "What We Do",
    headline: "HVAC Services {{city}} Can Count On",
  },
  services: [
    {
      slug: "ac-repair",
      name: "AC Repair",
      shortDescription: "Fast, reliable air conditioning repair to get you cool again.",
      icon: "ac-repair",
      image: "/images/AdobeStock_368501966.webp",
      metaTitle: "AC Repair in {{city}}, {{state}}",
      metaDescription: "Expert AC repair in {{city}}. Same-day service, all brands. Call {{companyFullName}} today!",
      heroHeadline: "{{city}} AC Repair You Can Trust",
      content: [
        { type: "paragraph", text: "When your air conditioner breaks down in the middle of a {{city}} summer, you need a team that responds fast and fixes it right the first time. {{companyFullName}} provides expert AC repair for all makes and models — with same-day service available." },
        { type: "heading", text: "Signs You Need AC Repair" },
        { type: "list", items: ["Warm air blowing from vents", "Strange noises or unusual smells", "Skyrocketing energy bills", "System frequently cycling on and off", "Uneven cooling throughout your home", "Excess humidity indoors"] },
        { type: "heading", text: "Why Choose {{companyName}} for AC Repair?" },
        { type: "paragraph", text: "Our NATE-certified technicians diagnose the problem accurately and explain your options clearly — no jargon, no pressure. We provide upfront pricing before any work begins, so you'll never be surprised by the bill." },
        { type: "paragraph", text: "We service all major brands including Carrier, Trane, Lennox, Goodman, Rheem, and more. Whether it's a simple capacitor replacement or a complex compressor issue, we have the expertise and parts to get your system running again." },
      ],
      relatedServices: ["ac-installation", "maintenance"],
    },
    {
      slug: "ac-installation",
      name: "AC Installation",
      shortDescription: "Expert installation of energy-efficient cooling systems.",
      icon: "ac-install",
      image: "/images/AdobeStock_65737788.webp",
      metaTitle: "AC Installation in {{city}}, {{state}}",
      metaDescription: "Professional AC installation in {{city}}. Free estimates, top brands, expert sizing. Call {{companyName}}!",
      heroHeadline: "New AC Installation Done Right",
      content: [
        { type: "paragraph", text: "A properly sized and installed air conditioning system is the foundation of home comfort. {{companyFullName}} provides expert AC installation with a focus on energy efficiency, proper sizing, and long-term reliability." },
        { type: "heading", text: "Our Installation Process" },
        { type: "list", items: ["In-home consultation and Manual J load calculation", "Equipment recommendation based on your home's specific needs", "Professional installation by NATE-certified technicians", "System testing and calibration", "Walkthrough of your new system's features and maintenance"] },
        { type: "heading", text: "Brands We Install" },
        { type: "paragraph", text: "We're authorized dealers for Carrier, Trane, Lennox, and Goodman. We'll help you choose the right system for your home and budget — whether it's a standard central AC, a heat pump, or a ductless mini-split." },
      ],
      relatedServices: ["ac-repair", "maintenance"],
    },
    {
      slug: "heating-repair",
      name: "Heating Repair",
      shortDescription: "Keep your home warm with fast furnace and heat pump repair.",
      icon: "heating-repair",
      image: "/images/AdobeStock_484537509.webp",
      metaTitle: "Heating Repair in {{city}}, {{state}}",
      metaDescription: "Fast heating repair in {{city}}. Furnaces, heat pumps, all brands. Call {{companyFullName}}!",
      heroHeadline: "Fast Heating Repair in {{city}}",
      content: [
        { type: "paragraph", text: "When your heater stops working on a cold Georgia night, you need reliable help fast. {{companyFullName}} provides expert heating repair for furnaces, heat pumps, and all heating systems — with same-day emergency service available." },
        { type: "heading", text: "Common Heating Problems We Fix" },
        { type: "list", items: ["Furnace not producing heat", "Heat pump blowing cold air", "Pilot light won't stay lit", "Strange noises from the furnace", "Thermostat issues", "Short cycling"] },
        { type: "paragraph", text: "Our technicians arrive with fully stocked trucks so most repairs are completed in a single visit. We'll explain the problem, give you an upfront price, and get your heat running again." },
      ],
      relatedServices: ["heating-installation", "maintenance"],
    },
    {
      slug: "heating-installation",
      name: "Heating Installation",
      shortDescription: "Professional installation of furnaces, heat pumps, and more.",
      icon: "heating-install",
      image: "/images/huum-AQor66gwkyY-unsplash.webp",
      metaTitle: "Heating Installation in {{city}}, {{state}}",
      metaDescription: "Professional furnace and heat pump installation in {{city}}. Free estimates. Call {{companyName}}!",
      heroHeadline: "Expert Heating Installation in {{city}}",
      content: [
        { type: "paragraph", text: "Whether you're replacing an aging furnace or installing a new heat pump, {{companyFullName}} ensures your new heating system is properly sized, efficiently installed, and built to last." },
        { type: "heading", text: "Heating Systems We Install" },
        { type: "list", items: ["Gas and electric furnaces", "Heat pumps (air source and dual fuel)", "Ductless mini-split systems", "Package units"] },
        { type: "paragraph", text: "Every installation includes a comprehensive load calculation to ensure your new system is the right size for your home. An oversized or undersized system wastes energy and shortens equipment life — we get it right." },
      ],
      relatedServices: ["heating-repair", "maintenance"],
    },
    {
      slug: "maintenance",
      name: "Maintenance & Tune-Ups",
      shortDescription: "Preventive maintenance to extend the life of your system.",
      icon: "maintenance",
      image: "/images/AdobeStock_291470938.webp",
      metaTitle: "HVAC Maintenance & Tune-Ups in {{city}}, {{state}}",
      metaDescription: "Keep your HVAC running efficiently with maintenance from {{companyName}}. Prevent breakdowns and save money.",
      heroHeadline: "HVAC Maintenance That Prevents Problems",
      content: [
        { type: "paragraph", text: "Regular HVAC maintenance is the single best thing you can do to prevent breakdowns, extend the life of your system, and keep your energy bills low. {{companyFullName}} offers comprehensive tune-up services for all makes and models." },
        { type: "heading", text: "What's Included in a Tune-Up" },
        { type: "list", items: ["Complete system inspection", "Filter replacement", "Coil cleaning", "Refrigerant level check", "Electrical connection tightening", "Thermostat calibration", "Safety control testing", "Performance report with recommendations"] },
        { type: "paragraph", text: "We recommend scheduling maintenance twice a year — once in spring for your AC and once in fall for your heating system. Ask about our annual maintenance plan for priority scheduling and discounted rates." },
      ],
      relatedServices: ["ac-repair", "heating-repair"],
    },
    {
      slug: "indoor-air-quality",
      name: "Indoor Air Quality",
      shortDescription: "Breathe easier with air filtration, duct cleaning, and purifiers.",
      icon: "air-quality",
      image: "/images/AdobeStock_372324816.webp",
      metaTitle: "Indoor Air Quality Services in {{city}}, {{state}}",
      metaDescription: "Improve your home's air quality with filtration, purifiers, and duct cleaning from {{companyName}} in {{city}}.",
      heroHeadline: "Breathe Easier at Home",
      content: [
        { type: "paragraph", text: "The air inside your home can be up to five times more polluted than outdoor air. {{companyFullName}} offers indoor air quality solutions that remove allergens, pollutants, and contaminants — so your family breathes cleaner, healthier air." },
        { type: "heading", text: "Our Indoor Air Quality Solutions" },
        { type: "list", items: ["HEPA and high-efficiency air filtration", "UV germicidal lights", "Whole-home air purifiers", "Duct cleaning and sanitizing", "Humidity control systems", "Ventilation improvements"] },
        { type: "paragraph", text: "If anyone in your home suffers from allergies, asthma, or respiratory issues, improving your indoor air quality can make a significant difference. We'll assess your home and recommend the right solution for your needs and budget." },
      ],
      relatedServices: ["maintenance", "ac-repair"],
    },
  ],

  // ── Service Areas (overridden per client) ──
  serviceAreas: [],

  // ── About Page ──
  about: {
    metaTitle: "About {{companyFullName}} | {{city}} HVAC",
    metaDescription: "Learn about {{companyFullName}} — {{city}}'s trusted HVAC company since 2010. Meet our team and discover why {{reviewCount}} homeowners gave us 5 stars.",
    image: "/images/AdobeStock_621457880.webp",
    headline: "Your Neighbors in Comfort",
    story: "{{companyFullName}} was founded in 2010 with a simple mission: provide honest, reliable HVAC service to {{city}} homeowners at a fair price. What started as a one-truck operation has grown into one of {{city}}'s most trusted heating and cooling companies — not through flashy marketing, but through thousands of jobs done right.\n\nOur founder started {{companyName}} after years of working for large HVAC companies that prioritized upselling over customer care. He believed there was a better way to run an HVAC business — one built on transparency, fair pricing, and genuine care for the homeowner.\n\nToday, every technician on our team shares that philosophy. We treat your home like our own, explain problems in plain English, and never recommend work you don't need. That's why {{reviewCount}} {{city}} homeowners have given us five-star reviews — and why so many of our customers become customers for life.",
    values: [
      {
        title: "Honesty First",
        description: "We tell you what's wrong and what it costs — before we start. No hidden fees, no surprise charges, no recommending work you don't need.",
      },
      {
        title: "Same-Day Speed",
        description: "When your system goes down, comfort can't wait. We offer same-day and emergency service because we know how urgent HVAC problems can be.",
      },
      {
        title: "Done Right Guarantee",
        description: "Every job comes with our satisfaction guarantee. If you're not happy, we come back and make it right — free of charge.",
      },
    ],
  },

  // ── Contact / Form ──
  contact: {
    metaTitle: "Contact {{companyFullName}} | Schedule Service",
    metaDescription: "Schedule HVAC service in {{city}}. Call {{companyName}} or fill out our contact form for fast, reliable heating and cooling service.",
    image: "/images/getty-images-maxo-ZjOn2E-unsplash.webp",
    headline: "Schedule Your Service Today",
    body: "Whether it's an emergency repair or a routine tune-up, we're here to help. Fill out the form below and we'll get back to you within the hour — or call us directly for immediate assistance.",
  },

  // ── Final CTA ──
  finalCTA: {
    backgroundImage: "/images/getty-images-pbfibyECpy8-unsplash.webp",
    eyebrow: "Ready to Get Started?",
    headline: "Your Comfort Is One Call Away",
    body: "Whether it's an emergency repair or a brand-new installation, we're here for you. Contact us today and experience the {{companyName}} difference.",
    primaryCTA: { label: "Schedule Service", href: "/contact" },
    secondaryCTA: { label: "Or call us now: {{phone}}", href: "tel:{{phoneRaw}}" },
  },

  // ── Footer ──
  footer: {
    description: "{{city}}'s trusted HVAC experts since 2010. Licensed, insured, and 5-star rated.",
    socialLinks: {
      facebook: "#",
      google: "#",
    },
  },

  // ── Navigation ──
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      {
        label: "Services",
        href: "/services",
        dropdown: true,
      },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // ── Exit-Intent Popup ──
  exitPopup: {
    headline: "Wait! Here's a Free AC Tune-Up",
    body: "Book any service call and get a complimentary AC tune-up — a $89 value. Just leave your info and we'll reach out within the hour.",
    promoLabel: "Free AC Tune-Up ($89 value)",
    successMessage: "We'll call you soon!",
  },

  // ── Business Hours ──
  hours: {
    weekday: "7:00 AM – 7:00 PM",
    saturday: "8:00 AM – 5:00 PM",
    sunday: "Emergency Service Only",
    emergency: "24/7 Emergency Service Available",
  },
};

export default baseConfig;
