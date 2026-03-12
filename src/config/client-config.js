const config = {
  // ── Company ──
  companyName: "Cool It Now",
  companyFullName: "Cool It Now A/C and Heating",
  phone: "(404) 555-0199",
  phoneRaw: "4045550199",
  email: "info@coolitnowatl.com",
  address: {
    street: "123 Peachtree Industrial Blvd",
    city: "Atlanta",
    state: "GA",
    zip: "30301",
  },
  tagline: "Atlanta's Cooling & Heating Experts",
  foundedYear: 2010,
  licenseNumber: "CN-12345",

  // ── Brand / Theme ──
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
    titleSuffix: " | Cool It Now A/C and Heating | Atlanta, GA",
    defaultDescription:
      "Cool It Now A/C and Heating provides expert AC repair, heating, and HVAC services in Atlanta, GA. 176 five-star reviews. Call today!",
  },

  // ── Social Proof ──
  reviews: {
    platform: "Google",
    rating: 5.0,
    count: 176,
    url: "https://g.page/coolitnow/review",
    featured: [
      {
        author: "John D.",
        rating: 5,
        text: "Best HVAC company in Atlanta. They showed up within an hour of my call and had our AC running again before dinner. Can't recommend them enough!",
        date: "2025-11-15",
      },
      {
        author: "Sarah M.",
        rating: 5,
        text: "Professional, affordable, and honest. They could have sold us a new unit but instead fixed the problem for a fraction of the cost. Truly trustworthy.",
        date: "2025-10-22",
      },
      {
        author: "Robert K.",
        rating: 5,
        text: "We've used Cool It Now for 5 years now. Annual maintenance, a full system replacement, and two emergency repairs — they've been perfect every time.",
        date: "2025-09-18",
      },
      {
        author: "Lisa T.",
        rating: 5,
        text: "Called at 10pm on a Saturday when our heat went out. They had someone at our house by 11:30. That's the kind of service you can't find anywhere else.",
        date: "2025-08-05",
      },
      {
        author: "Marcus W.",
        rating: 5,
        text: "Fair pricing, no upselling, and they cleaned up after themselves. The tech even showed me how to change my filter properly. Great experience.",
        date: "2025-07-12",
      },
    ],
  },

  // ── Hero ──
  hero: {
    eyebrow: "Atlanta's Most Trusted HVAC Professionals",
    headline: "Your Home Should Be Comfortable Year-Round",
    body: "From emergency repairs to full system installations, Cool It Now keeps your family cool in summer and warm in winter — guaranteed.",
    primaryCTA: { label: "Schedule Service", href: "/contact" },
    secondaryCTA: { label: "Call Now: (404) 555-0199", href: "tel:4045550199" },
    backgroundImage: "/images/hero-bg.webp",
  },

  // ── Problems Section ──
  problemsSection: {
    eyebrow: "Why Atlanta Homeowners Trust Us",
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
      body: "Every HVAC company says they're the best. But how many have 176 five-star reviews from real Atlanta homeowners? Our reputation is built on results, not promises.",
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
    headline: "HVAC Services Atlanta Can Count On",
  },
  services: [
    {
      slug: "ac-repair",
      name: "AC Repair",
      shortDescription: "Fast, reliable air conditioning repair to get you cool again.",
      icon: "ac-repair",
      image: "/images/AdobeStock_368501966.webp",
      metaTitle: "AC Repair in Atlanta, GA",
      metaDescription: "Expert AC repair in Atlanta. Same-day service, all brands. Call Cool It Now A/C and Heating today!",
      heroHeadline: "Atlanta AC Repair You Can Trust",
      content: [
        { type: "paragraph", text: "When your air conditioner breaks down in the middle of an Atlanta summer, you need a team that responds fast and fixes it right the first time. Cool It Now A/C and Heating provides expert AC repair for all makes and models — with same-day service available." },
        { type: "heading", text: "Signs You Need AC Repair" },
        { type: "list", items: ["Warm air blowing from vents", "Strange noises or unusual smells", "Skyrocketing energy bills", "System frequently cycling on and off", "Uneven cooling throughout your home", "Excess humidity indoors"] },
        { type: "heading", text: "Why Choose Cool It Now for AC Repair?" },
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
      metaTitle: "AC Installation in Atlanta, GA",
      metaDescription: "Professional AC installation in Atlanta. Free estimates, top brands, expert sizing. Call Cool It Now!",
      heroHeadline: "New AC Installation Done Right",
      content: [
        { type: "paragraph", text: "A properly sized and installed air conditioning system is the foundation of home comfort. Cool It Now A/C and Heating provides expert AC installation with a focus on energy efficiency, proper sizing, and long-term reliability." },
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
      metaTitle: "Heating Repair in Atlanta, GA",
      metaDescription: "Fast heating repair in Atlanta. Furnaces, heat pumps, all brands. Call Cool It Now A/C and Heating!",
      heroHeadline: "Fast Heating Repair in Atlanta",
      content: [
        { type: "paragraph", text: "When your heater stops working on a cold Georgia night, you need reliable help fast. Cool It Now A/C and Heating provides expert heating repair for furnaces, heat pumps, and all heating systems — with same-day emergency service available." },
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
      metaTitle: "Heating Installation in Atlanta, GA",
      metaDescription: "Professional furnace and heat pump installation in Atlanta. Free estimates. Call Cool It Now!",
      heroHeadline: "Expert Heating Installation in Atlanta",
      content: [
        { type: "paragraph", text: "Whether you're replacing an aging furnace or installing a new heat pump, Cool It Now A/C and Heating ensures your new heating system is properly sized, efficiently installed, and built to last." },
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
      metaTitle: "HVAC Maintenance & Tune-Ups in Atlanta, GA",
      metaDescription: "Keep your HVAC running efficiently with maintenance from Cool It Now. Prevent breakdowns and save money.",
      heroHeadline: "HVAC Maintenance That Prevents Problems",
      content: [
        { type: "paragraph", text: "Regular HVAC maintenance is the single best thing you can do to prevent breakdowns, extend the life of your system, and keep your energy bills low. Cool It Now A/C and Heating offers comprehensive tune-up services for all makes and models." },
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
      metaTitle: "Indoor Air Quality Services in Atlanta, GA",
      metaDescription: "Improve your home's air quality with filtration, purifiers, and duct cleaning from Cool It Now in Atlanta.",
      heroHeadline: "Breathe Easier at Home",
      content: [
        { type: "paragraph", text: "The air inside your home can be up to five times more polluted than outdoor air. Cool It Now A/C and Heating offers indoor air quality solutions that remove allergens, pollutants, and contaminants — so your family breathes cleaner, healthier air." },
        { type: "heading", text: "Our Indoor Air Quality Solutions" },
        { type: "list", items: ["HEPA and high-efficiency air filtration", "UV germicidal lights", "Whole-home air purifiers", "Duct cleaning and sanitizing", "Humidity control systems", "Ventilation improvements"] },
        { type: "paragraph", text: "If anyone in your home suffers from allergies, asthma, or respiratory issues, improving your indoor air quality can make a significant difference. We'll assess your home and recommend the right solution for your needs and budget." },
      ],
      relatedServices: ["maintenance", "ac-repair"],
    },
  ],

  // ── Service Areas ──
  serviceAreas: [
    {
      slug: "atlanta",
      name: "Atlanta",
      state: "GA",
      metaTitle: "HVAC Services in Atlanta, GA",
      metaDescription: "Trusted HVAC services in Atlanta, GA. AC repair, heating installation, maintenance. 176 five-star reviews. Call Cool It Now!",
      headline: "HVAC Services in Atlanta, GA",
      body: "Cool It Now A/C and Heating proudly serves homeowners throughout Atlanta and the surrounding metro area. Whether you're in Buckhead, Midtown, East Atlanta, or West End, our certified technicians are just a phone call away. We offer same-day service, upfront pricing, and a 100% satisfaction guarantee on every job.",
    },
    {
      slug: "decatur",
      name: "Decatur",
      state: "GA",
      metaTitle: "HVAC Services in Decatur, GA",
      metaDescription: "Expert HVAC services in Decatur, GA. AC repair, heating, installation, and maintenance. Call Cool It Now!",
      headline: "HVAC Services in Decatur, GA",
      body: "Decatur homeowners trust Cool It Now A/C and Heating for reliable, affordable HVAC service. From downtown Decatur to Oakhurst and beyond, we provide fast response times and expert service for all your heating and cooling needs.",
    },
    {
      slug: "marietta",
      name: "Marietta",
      state: "GA",
      metaTitle: "HVAC Services in Marietta, GA",
      metaDescription: "Professional HVAC services in Marietta, GA. Same-day AC repair, heating installation. Call Cool It Now!",
      headline: "HVAC Services in Marietta, GA",
      body: "Serving Marietta and East Cobb, Cool It Now A/C and Heating delivers the same fast, honest HVAC service that has earned us 176 five-star reviews across the Atlanta metro. Whether you need emergency AC repair or a full system replacement, we're here to help.",
    },
    {
      slug: "roswell",
      name: "Roswell",
      state: "GA",
      metaTitle: "HVAC Services in Roswell, GA",
      metaDescription: "Trusted HVAC services in Roswell, GA. AC repair, heating, maintenance. Call Cool It Now A/C and Heating!",
      headline: "HVAC Services in Roswell, GA",
      body: "Roswell families count on Cool It Now A/C and Heating for dependable HVAC service year-round. We serve all of Roswell and the surrounding North Fulton area with same-day appointments, transparent pricing, and expert technicians.",
    },
    {
      slug: "sandy-springs",
      name: "Sandy Springs",
      state: "GA",
      metaTitle: "HVAC Services in Sandy Springs, GA",
      metaDescription: "HVAC repair, installation, and maintenance in Sandy Springs, GA. Call Cool It Now for same-day service!",
      headline: "HVAC Services in Sandy Springs, GA",
      body: "From Perimeter Center to the Chattahoochee River, Cool It Now A/C and Heating provides comprehensive HVAC services to Sandy Springs homeowners. Our team is licensed, insured, and committed to getting your home comfortable fast.",
    },
  ],

  // ── About Page ──
  about: {
    metaTitle: "About Cool It Now A/C and Heating | Atlanta HVAC",
    metaDescription: "Learn about Cool It Now A/C and Heating — Atlanta's trusted HVAC company since 2010. Meet our team and discover why 176 homeowners gave us 5 stars.",
    image: "/images/AdobeStock_621457880.webp",
    headline: "Your Neighbors in Comfort",
    story: "Cool It Now A/C and Heating was founded in 2010 with a simple mission: provide honest, reliable HVAC service to Atlanta homeowners at a fair price. What started as a one-truck operation has grown into one of Atlanta's most trusted heating and cooling companies — not through flashy marketing, but through thousands of jobs done right.\n\nOur founder started Cool It Now after years of working for large HVAC companies that prioritized upselling over customer care. He believed there was a better way to run an HVAC business — one built on transparency, fair pricing, and genuine care for the homeowner.\n\nToday, every technician on our team shares that philosophy. We treat your home like our own, explain problems in plain English, and never recommend work you don't need. That's why 176 Atlanta homeowners have given us five-star reviews — and why so many of our customers become customers for life.",
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
    metaTitle: "Contact Cool It Now A/C and Heating | Schedule Service",
    metaDescription: "Schedule HVAC service in Atlanta. Call Cool It Now or fill out our contact form for fast, reliable heating and cooling service.",
    image: "/images/getty-images-maxo-ZjOn2E-unsplash.webp",
    headline: "Schedule Your Service Today",
    body: "Whether it's an emergency repair or a routine tune-up, we're here to help. Fill out the form below and we'll get back to you within the hour — or call us directly for immediate assistance.",
    formAction: "https://formspree.io/f/PLACEHOLDER",
  },

  // ── Final CTA ──
  finalCTA: {
    backgroundImage: "/images/getty-images-pbfibyECpy8-unsplash.webp",
    eyebrow: "Ready to Get Started?",
    headline: "Your Comfort Is One Call Away",
    body: "Whether it's an emergency repair or a brand-new installation, we're here for you. Contact us today and experience the Cool It Now difference.",
    primaryCTA: { label: "Schedule Service", href: "/contact" },
    secondaryCTA: { label: "Or call us now: (404) 555-0199", href: "tel:4045550199" },
  },

  // ── Footer ──
  footer: {
    description: "Atlanta's trusted HVAC experts since 2010. Licensed, insured, and 5-star rated.",
    socialLinks: {
      facebook: "https://facebook.com/coolitnow",
      google: "https://g.page/coolitnow",
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

  // ── Business Hours ──
  hours: {
    weekday: "7:00 AM – 7:00 PM",
    saturday: "8:00 AM – 5:00 PM",
    sunday: "Emergency Service Only",
    emergency: "24/7 Emergency Service Available",
  },
};

export default config;
