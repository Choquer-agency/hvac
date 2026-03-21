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
  tagline: "{{city}}'s Trusted Roofing Professionals",
  foundedYear: 2010,
  licenseNumber: "CN-12345",

  // ── Brand / Theme (overridden per client) ──
  colors: {
    primary: "#FF3300",
    primaryDark: "#CC2900",
    primaryLight: "#FF5C33",
    secondary: "#FE9901",
    dark: "#200300",
    light: "#F8F6F3",
    white: "#FFFFFF",
  },
  logo: "/images/House Logo.svg",

  // ── SEO defaults ──
  seo: {
    titleSuffix: " | {{companyFullName}} | {{city}}, {{state}}",
    defaultDescription:
      "{{companyFullName}} provides expert roof repair, replacement, and roofing services in {{city}}, {{state}}. {{reviewCount}} five-star reviews. Call today!",
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
    eyebrow: "{{city}}'s Most Trusted Roofing Professionals",
    headline: "Protect What Matters Most — Your Home",
    body: "From storm damage repairs to full roof replacements, {{companyName}} delivers expert craftsmanship backed by warranties you can count on.",
    primaryCTA: { label: "Get a Free Estimate", href: "/contact" },
    secondaryCTA: { label: "Call Now: {{phone}}", href: "tel:{{phoneRaw}}" },
    backgroundImage: "/images/Hero.webp",
  },

  // ── Problems Section ──
  problemsSection: {
    eyebrow: "Why {{city}} Homeowners Trust Us",
    headline: "We Solve the Problems That Keep You Up at Night",
  },
  problems: [
    {
      icon: "droplet",
      headline: "Your Roof Is Leaking and It's Getting Worse",
      body: "A small leak today becomes a major problem tomorrow — water damage, mold, ruined insulation. We respond fast, find the source, and fix it right so you can stop worrying every time it rains.",
    },
    {
      icon: "dollar",
      headline: "You're Afraid of Getting Overcharged",
      body: "Roofing is a big investment, and nobody wants to feel like they overpaid. We provide detailed, transparent estimates before any work begins. No hidden fees. No surprise charges. Just honest pricing.",
    },
    {
      icon: "shield",
      headline: "You Don't Know Who to Trust",
      body: "Every roofing company says they're the best. But how many have {{reviewCount}} five-star reviews from real {{city}} homeowners? Our reputation is built on results, not promises.",
    },
    {
      icon: "storm",
      headline: "Storm Damage Has You Worried",
      body: "Hail, wind, and severe storms can compromise your roof overnight. We provide emergency tarping, thorough damage assessments, and work directly with your insurance company to make the process painless.",
    },
    {
      icon: "clock",
      headline: "Your Roof Is Old and You're Not Sure What to Do",
      body: "Should you patch it or replace it? An aging roof that's constantly needing repairs may be costing you more than a new one. We'll give you a straight answer — repair or replace — no pressure, just facts.",
    },
    {
      icon: "ban",
      headline: "You've Had a Bad Experience with a Contractor",
      body: "Fly-by-night roofers who disappear after cashing the check. We've heard the stories. {{companyName}} is licensed, insured, and has been serving {{city}} since 2010. We're not going anywhere.",
    },
  ],

  // ── Process Steps ──
  processSection: {
    eyebrow: "Simple & Stress-Free",
    headline: "Getting a New Roof Is Easy",
  },
  process: [
    {
      step: 1,
      title: "Schedule Your Free Inspection",
      description: "Call us or fill out our form. We'll schedule a convenient time to inspect your roof — no cost, no obligation.",
    },
    {
      step: 2,
      title: "Get a Detailed Estimate",
      description: "Our inspector examines your roof, documents everything with photos, and provides a transparent, itemized quote.",
    },
    {
      step: 3,
      title: "Professional Installation",
      description: "Our certified crew completes the work on time, protects your property, and cleans up every day.",
    },
    {
      step: 4,
      title: "Enjoy Peace of Mind",
      description: "Your new roof is backed by manufacturer warranties and our workmanship guarantee. Rest easy knowing your home is protected.",
    },
  ],

  // ── Services Section ──
  servicesSection: {
    eyebrow: "What We Do",
    headline: "Roofing Services {{city}} Can Count On",
  },
  services: [
    {
      slug: "roof-repair",
      name: "Roof Repair",
      shortDescription: "Fast, reliable repairs to stop leaks and restore your roof's integrity.",
      icon: "roof-repair",
      image: "/images/Broken.webp",
      metaTitle: "Roof Repair in {{city}}, {{state}}",
      metaDescription: "Expert roof repair in {{city}}. Leaks, missing shingles, flashing — fixed fast. Call {{companyFullName}} today!",
      heroHeadline: "{{city}} Roof Repair You Can Trust",
      sections: [
        {
          eyebrow: "Fast Response",
          heading: "Stop the Leak Before It Becomes a Disaster",
          body: "{{city}} weather doesn't wait — and neither should your roof repair. {{companyFullName}} responds fast with expert diagnostics and permanent fixes. We trace the leak to its source, assess the full damage, and repair it properly so the problem doesn't come back.",
          image: "/images/AdobeStock_305797874.webp",
          items: ["Water stains on ceilings or walls", "Missing, cracked, or curling shingles", "Damaged or rusted flashing", "Sagging areas on the roofline", "Granules collecting in your gutters", "Daylight visible through roof boards"],
        },
        {
          eyebrow: "Why {{companyName}}",
          heading: "Honest Pricing, Expert Craftsmanship",
          body: "At {{companyFullName}}, we provide detailed, itemized estimates before any work begins — no hidden fees, no pressure. Our crews work with every material common to {{city}} homes: shingles, metal, tile, and flat roof systems. Every repair is backed by our workmanship warranty.",
          image: "/images/Ceramic.webp",
        },
      ],
      relatedServices: ["roof-replacement", "roof-inspection"],
    },
    {
      slug: "roof-replacement",
      name: "Roof Replacement",
      shortDescription: "Complete tear-off and re-roof with premium materials and expert installation.",
      icon: "roof-replacement",
      image: "/images/Ceramic.webp",
      metaTitle: "Roof Replacement in {{city}}, {{state}}",
      metaDescription: "Professional roof replacement in {{city}}. Free estimates, top materials, expert crews. Call {{companyName}}!",
      heroHeadline: "New Roof Installation Done Right",
      sections: [
        {
          eyebrow: "Full Replacement",
          heading: "When Repairs Aren't Enough, We Replace It Right",
          body: "If your roof is 20+ years old or costing more in repairs than it's worth, a full replacement is the smartest investment for your {{city}} home. {{companyFullName}} handles every step from tear-off to final inspection — installed to manufacturer specs and built for decades of {{city}} weather.",
          image: "/images/AdobeStock_433303708.webp",
          items: ["Free roof inspection and detailed assessment", "Material selection guidance for your home and budget", "Complete tear-off of old roofing materials", "Decking and underlayment inspection and repair", "Professional installation by certified crews", "Final walkthrough and warranty registration"],
        },
        {
          eyebrow: "Premium Materials",
          heading: "Materials Built for {{city}} Weather",
          body: "As certified installers for GAF, Owens Corning, and CertainTeed, we know which products perform best in {{city}}'s climate. Architectural shingles for value, metal for longevity, or premium options for curb appeal — every installation includes the manufacturer's warranty plus our workmanship guarantee.",
          image: "/images/AZ1.webp",
        },
      ],
      relatedServices: ["roof-repair", "roof-inspection"],
    },
    {
      slug: "storm-damage",
      name: "Storm Damage Repair",
      shortDescription: "Emergency tarping, damage assessment, and insurance claim assistance.",
      icon: "storm-damage",
      image: "/images/Broken.webp",
      metaTitle: "Storm Damage Roof Repair in {{city}}, {{state}}",
      metaDescription: "Storm damage to your roof? {{companyFullName}} provides emergency repair and insurance assistance in {{city}}. Call now!",
      heroHeadline: "Fast Storm Damage Repair in {{city}}",
      sections: [
        {
          eyebrow: "Emergency Response",
          heading: "Time Is Everything After a Storm",
          body: "When a major storm rolls through {{city}}, your roof is on the front line. Hail, high winds, and falling debris can compromise your roof in minutes — and every hour of delay risks further water damage to your home. {{companyFullName}} provides rapid emergency response: we tarp the damage fast, then follow up with a thorough inspection documenting every detail your insurance company needs.",
          image: "/images/ahmet-kurt-syRKWKOKwtE-unsplash.webp",
          items: ["Hail damage to shingles and flashing", "Wind-blown or missing shingles", "Fallen tree and debris damage", "Leaks from compromised seals", "Damaged gutters and downspouts", "Structural damage from severe storms"],
        },
        {
          eyebrow: "Insurance Assistance",
          heading: "We Handle the Insurance Headache for You",
          body: "Filing an insurance claim is stressful — paperwork, adjusters, competing estimates. {{companyFullName}} takes that burden off your shoulders with photo-documented damage reports that speak the language adjusters understand. We meet with your adjuster on-site, walk them through every finding, and make sure nothing gets missed. Our goal is full restoration at the price your policy covers.",
          image: "/images/Hero.webp",
        },
      ],
      relatedServices: ["roof-repair", "roof-replacement"],
    },
    {
      slug: "roof-inspection",
      name: "Roof Inspection",
      shortDescription: "Comprehensive inspections to catch problems before they get costly.",
      icon: "roof-inspection",
      image: "/images/getty-images-smOHmo17UMI-unsplash.webp",
      metaTitle: "Roof Inspection in {{city}}, {{state}}",

      metaDescription: "Free roof inspections in {{city}}. Catch problems early and save money. Call {{companyName}} to schedule!",
      heroHeadline: "Professional Roof Inspections in {{city}}",
      sections: [
        {
          eyebrow: "Preventive Care",
          heading: "Catch Problems Before They Cost You Thousands",
          body: "Most roof problems start small — a cracked shingle, loose flashing, a tiny gap in the sealant. Left unchecked, these become major repairs. {{companyFullName}} catches problems early with thorough inspections of every component, saving you money and extending your roof's life.",
          image: "/images/raze-solar-MyBBMM317A4-unsplash.webp",
          items: ["Shingle condition and wear patterns", "Flashing around chimneys, vents, and skylights", "Gutter and drainage systems", "Attic ventilation and insulation", "Signs of water intrusion or damage", "Overall structural integrity"],
        },
        {
          eyebrow: "Detailed Reports",
          heading: "Clear Answers, No Obligation",
          body: "You'll receive a detailed report with photos and our honest assessment — what needs attention now, what can wait, and upfront cost estimates. No pressure, no obligation. If your roof is in good shape, we'll tell you that too.",
          image: "/images/AZ1.webp",
        },
      ],
      relatedServices: ["roof-repair", "roof-replacement"],
    },
    {
      slug: "gutter-services",
      name: "Gutter Services",
      shortDescription: "Installation, repair, and cleaning to protect your home's foundation.",
      icon: "gutter-services",
      image: "/images/AdobeStock_423791228.webp",
      metaTitle: "Gutter Services in {{city}}, {{state}}",
      metaDescription: "Professional gutter installation, repair, and cleaning in {{city}}. Protect your home from water damage. Call {{companyName}}!",
      heroHeadline: "Gutter Services That Protect Your Home",
      sections: [
        {
          eyebrow: "Complete Gutter Solutions",
          heading: "Your Roof's First Line of Defense Against Water Damage",
          body: "Gutters channel thousands of gallons away from your foundation every year — when they fail, the damage adds up fast. {{companyFullName}} provides seamless installation, repair, cleaning, and leaf guard systems to keep your {{city}} home protected.",
          image: "/images/AZ.webp",
          items: ["Seamless gutter installation", "Gutter repair and re-hanging", "Gutter guard and leaf protection systems", "Downspout installation and extension", "Gutter cleaning and maintenance", "Fascia and soffit repair"],
        },
        {
          eyebrow: "Long-Term Protection",
          heading: "Stop Paying for Repeated Gutter Cleanings",
          body: "Tired of climbing a ladder twice a year? Our gutter guards keep debris out while letting water flow freely. Seamless gutters are custom-fabricated on-site to fit your home perfectly, eliminating the joints where leaks develop.",
          image: "/images/Hero.webp",
        },
      ],
      relatedServices: ["roof-repair", "roof-inspection"],
    },
    {
      slug: "siding-trim",
      name: "Siding & Trim",
      shortDescription: "Expert siding installation and trim work to complete your home's exterior.",
      icon: "siding-trim",
      image: "/images/AZ1.webp",
      metaTitle: "Siding & Trim Services in {{city}}, {{state}}",
      metaDescription: "Professional siding and trim installation in {{city}}. Vinyl, fiber cement, and more. Call {{companyName}}!",
      heroHeadline: "Siding & Trim That Lasts",
      sections: [
        {
          eyebrow: "Exterior Protection",
          heading: "Your Home's Siding Is Just as Important as the Roof Above It",
          body: "Damaged or aging siding lets moisture infiltrate your walls, leading to rot, mold, and higher utility bills. {{companyFullName}} provides expert siding installation, repair, and replacement for {{city}} homes with premium materials built to withstand the local climate.",
          image: "/images/AdobeStock_423791228.webp",
          items: ["Vinyl siding", "Fiber cement (James Hardie)", "Engineered wood siding", "Fascia and soffit installation", "Trim and accent work", "Siding repair and replacement"],
        },
        {
          eyebrow: "Quality Materials",
          heading: "The Right Material for Your Home and Budget",
          body: "Vinyl for value, fiber cement for durability, engineered wood for warmth — we'll help you choose what makes sense for your home and budget. Every installation includes meticulous attention to trim, corners, and transitions.",
          image: "/images/Ceramic.webp",
        },
      ],
      relatedServices: ["gutter-services", "roof-replacement"],
    },
  ],

  // ── Service Areas (overridden per client) ──
  serviceAreas: [],

  // ── About Page ──
  about: {
    metaTitle: "About {{companyFullName}} | {{city}} Roofing",
    metaDescription: "Learn about {{companyFullName}} — {{city}}'s trusted roofing company since 2010. Meet our team and discover why {{reviewCount}} homeowners gave us 5 stars.",
    heroImage: "/images/AZ.webp",
    headline: "Your Neighbors in Protection",
    sections: [
      {
        eyebrow: "Our Story",
        heading: "Built on Handshakes, Not Hard Sells",
        body: "{{companyFullName}} started in 2010 with one truck and a simple belief: {{city}} homeowners deserve honest roofing at a fair price. What began as a one-man operation has grown into one of the area's most trusted roofing companies — not through flashy marketing, but through thousands of roofs done right.",
        image: "/images/AdobeStock_433303708.webp",
      },
      {
        eyebrow: "Why {{companyName}}",
        heading: "What Sets Us Apart",
        body: "We treat your home like our own, explain problems in plain English, and never recommend work you don't need. That's why {{reviewCount}} {{city}} homeowners have given us five-star reviews.",
        image: "/images/ahmet-kurt-syRKWKOKwtE-unsplash.webp",
        items: ["Licensed, bonded & fully insured", "Transparent pricing — no hidden fees", "Certified installers for top manufacturers", "Warranties on every job we complete", "Same-day emergency response available", "Locally owned & operated since 2010"],
      },
    ],
    values: [
      {
        title: "Honesty First",
        description: "We tell you what's wrong and what it costs — before we start. No hidden fees, no surprise charges, no recommending work you don't need.",
      },
      {
        title: "On-Time, Every Time",
        description: "Your time matters. We show up when we say we will, keep you updated throughout the project, and finish on schedule.",
      },
      {
        title: "Done Right Guarantee",
        description: "Every job comes with our satisfaction guarantee. If you're not happy, we come back and make it right — free of charge.",
      },
    ],
  },

  // ── Contact / Form ──
  contact: {
    metaTitle: "Contact {{companyFullName}} | Get a Free Estimate",
    metaDescription: "Get a free roofing estimate in {{city}}. Call {{companyName}} or fill out our contact form for fast, reliable roofing service.",
    image: "/images/Hero.webp",
    headline: "Get Your Free Estimate Today",
    body: "Whether it's a roof repair or a full replacement, we're here to help. Fill out the form below and we'll get back to you within the hour — or call us directly for immediate assistance.",
  },

  // ── Final CTA ──
  finalCTA: {
    backgroundImage: "/images/AZ.webp",
    eyebrow: "Ready to Get Started?",
    headline: "Your New Roof Is One Call Away",
    body: "Whether it's storm damage, an aging roof, or a brand-new installation, we're here for you. Contact us today and experience the {{companyName}} difference.",
    primaryCTA: { label: "Get a Free Estimate", href: "/contact" },
    secondaryCTA: { label: "Or call us now: {{phone}}", href: "tel:{{phoneRaw}}" },
  },

  // ── Footer ──
  footer: {
    description: "{{city}}'s trusted roofing experts since 2010. Licensed, insured, and 5-star rated.",
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
    headline: "Wait! Get a Free Roof Inspection",
    body: "Book any roofing service and get a complimentary roof inspection — a $250 value. Just leave your info and we'll reach out within the hour.",
    promoLabel: "Free Roof Inspection ($250 value)",
    successMessage: "We'll call you soon!",
  },

  // ── Business Hours ──
  hours: {
    weekday: "7:00 AM – 6:00 PM",
    saturday: "8:00 AM – 4:00 PM",
    sunday: "Emergency Service Only",
    emergency: "24/7 Emergency Service Available",
  },
};

export default baseConfig;
