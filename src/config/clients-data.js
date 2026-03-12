// ──────────────────────────────────────────────────
// Client data for HVAC demo sites.
// Each key is the URL slug → yoursite.vercel.app/slug/
//
// To customize colors later, update the 4 color values:
//   primary, secondary, light, dark
// ──────────────────────────────────────────────────

const clients = {
  // ── 1. Cool It Now A/C & Heating ──
  "cool-it-now": {
    companyName: "Cool It Now",
    companyFullName: "Cool It Now A/C & Heating",
    phone: "(706) 659-5795",
    phoneRaw: "7066595795",
    email: "info@coolitnow.com",
    address: {
      street: "",
      city: "Atlanta",
      state: "GA",
      zip: "",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 178,
      url: "https://www.google.com/maps/search/?api=1&query=Cool%20It%20Now%20A%2FC%20%26%20Heating&query_place_id=ChIJtT2JDenj9IgR3srsPL3Vqqc",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Best HVAC company in Atlanta. They showed up fast and had our AC running again the same day. Can't recommend them enough!",
          date: "2024-12-15",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Professional, affordable, and honest. Truly trustworthy service from start to finish.",
          date: "2024-11-22",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "We've used Cool It Now for years. Annual maintenance, emergency repairs — they've been perfect every time.",
          date: "2024-10-18",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC Services in Atlanta, GA",
        metaDescription: "Trusted HVAC services in Atlanta, GA. 178 five-star reviews. Call Cool It Now A/C & Heating today!",
        headline: "HVAC Services in Atlanta, GA",
        body: "Cool It Now A/C & Heating proudly serves homeowners throughout Atlanta and the surrounding metro area. Our certified technicians provide same-day service, upfront pricing, and a 100% satisfaction guarantee on every job.",
      },
    ],
  },

  // ── 2. Atlanta Heating & Air Conditioning ──
  "atlanta-heating-air": {
    companyName: "Atlanta Heating & Air",
    companyFullName: "Atlanta Heating & Air Conditioning",
    phone: "(229) 230-5598",
    phoneRaw: "2292305598",
    email: "info@atlantaheatingair.com",
    address: {
      street: "3501 Northside Pkwy NW",
      city: "Atlanta",
      state: "GA",
      zip: "30327",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 4.1,
      count: 18,
      url: "https://www.google.com/maps/search/?api=1&query=Atlanta%20Heating%20%26%20Air%20Conditioning&query_place_id=ChIJk7AUDEgQ9YgRRuUp2vxue0Y",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Adam and his team did an excellent job with our heating system. Professional, on time, and fair pricing.",
          date: "2026-01-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Great service from start to finish. They diagnosed the problem quickly and had it fixed the same day.",
          date: "2025-11-05",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC Services in Atlanta, GA",
        metaDescription: "Trusted HVAC services in Atlanta, GA. Call Atlanta Heating & Air Conditioning for same-day service!",
        headline: "HVAC Services in Atlanta, GA",
        body: "Atlanta Heating & Air Conditioning serves homeowners throughout Atlanta. Also known as Knox Heating and Air, we provide reliable heating and cooling services Monday through Saturday, 6AM to 11PM.",
      },
    ],
  },

  // ── 3. Champion HVAC Atlanta Experts ──
  "champion-hvac-atlanta": {
    companyName: "Champion HVAC",
    companyFullName: "Champion HVAC Atlanta Experts",
    logo: "/images/champion-hvac-logo.png",
    phone: "(678) 270-4418",
    phoneRaw: "6782704418",
    email: "info@championhvacatl.com",
    address: {
      street: "4020 Tell Rd SW",
      city: "Atlanta",
      state: "GA",
      zip: "30331",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 14,
      url: "https://www.google.com/maps/search/?api=1&query=Champion%20HVAC%20Atlanta%20Experts&query_place_id=ChIJ369BJcEd9YgR9mcEuDZPsfY",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Champion HVAC is the best in Atlanta. Available 24/7 and always delivers quality work. Highly recommended!",
          date: "2026-03-09",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Perfect service every time. They're professional, thorough, and their pricing is always fair.",
          date: "2026-02-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC Services in Atlanta, GA",
        metaDescription: "Expert HVAC services in Atlanta, GA. Perfect 5-star rating. Call Champion HVAC Atlanta Experts!",
        headline: "HVAC Services in Atlanta, GA",
        body: "Champion HVAC Atlanta Experts provides 24/7 HVAC service to homeowners throughout Southwest Atlanta and the surrounding metro area. With a perfect 5-star rating, we deliver the quality and reliability your home deserves.",
      },
    ],
  },

  // ── 4. AC Plus ──
  "ac-plus": {
    companyName: "AC Plus",
    companyFullName: "AC Plus HVAC Services",
    phone: "(404) 550-2058",
    phoneRaw: "4045502058",
    email: "info@acplusatl.com",
    address: {
      street: "",
      city: "Atlanta",
      state: "GA",
      zip: "",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 4.8,
      count: 20,
      url: "https://www.google.com/maps/search/?api=1&query=AC%20Plus&query_place_id=ChIJefsKPtrjYiwRSt1_O-FDhsc",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "AC Plus came out quickly and gave us an honest assessment. Great service at a fair price.",
          date: "2025-12-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Leonard knows his stuff. Professional, reliable, and doesn't try to upsell you on things you don't need.",
          date: "2025-11-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC Services in Atlanta, GA",
        metaDescription: "Expert HVAC services in Atlanta, GA. 4.8-star rating. Call AC Plus for online estimates!",
        headline: "HVAC Services in Atlanta, GA",
        body: "AC Plus provides expert HVAC services across the Atlanta metro area. With a 4.8-star rating and online estimates available, getting your home comfortable has never been easier.",
      },
    ],
  },

  // ── 5. Polar Tropic Home Services ──
  "polar-tropic": {
    companyName: "Polar Tropic",
    companyFullName: "Polar Tropic Home Services Inc.",
    phone: "(404) 434-5193",
    phoneRaw: "4044345193",
    email: "info@polartropic.com",
    address: {
      street: "",
      city: "Smyrna",
      state: "GA",
      zip: "",
    },
    colors: {
      primary: "#02CE13",
      secondary: "#0065E1",
      light: "#FFFFFF",
      dark: "#021F41",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 17,
      url: "https://www.google.com/maps/search/?api=1&query=Polar%20Tropic%20Home%20Services%20inc.&query_place_id=ChIJBarixKQZ9YgRfOIi5yba3Yk",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Angelo and the Polar Tropic team are the best. Perfect 5-star service every single time.",
          date: "2025-07-15",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Handles both residential and commercial HVAC with the same level of professionalism. Highly recommend!",
          date: "2025-06-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "smyrna",
        name: "Smyrna",
        state: "GA",
        metaTitle: "HVAC Services in Smyrna, GA",
        metaDescription: "Trusted HVAC services in Smyrna, GA. Perfect 5-star rating. Call Polar Tropic Home Services!",
        headline: "HVAC Services in Smyrna, GA",
        body: "Polar Tropic Home Services proudly serves homeowners and businesses throughout Smyrna, Mableton, and the surrounding metro area. With a perfect 5-star rating, we deliver reliable residential and commercial HVAC service you can count on.",
      },
      {
        slug: "mableton",
        name: "Mableton",
        state: "GA",
        metaTitle: "HVAC Services in Mableton, GA",
        metaDescription: "Expert HVAC services in Mableton, GA. Call Polar Tropic Home Services for same-day service!",
        headline: "HVAC Services in Mableton, GA",
        body: "Mableton homeowners trust Polar Tropic Home Services for reliable, professional HVAC service. From emergency repairs to full system installations, we're here to keep your home comfortable year-round.",
      },
    ],
  },

  // ── 6. Smyrna Heating & Air Conditioning ──
  "smyrna-heating-air": {
    companyName: "Smyrna Heating & Air",
    companyFullName: "Smyrna Heating & Air Conditioning",
    phone: "(678) 271-1429",
    phoneRaw: "6782711429",
    email: "info@smyrnaheatingair.com",
    address: {
      street: "2750 Atlanta Rd SE",
      city: "Smyrna",
      state: "GA",
      zip: "30080",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 4.8,
      count: 10,
      url: "https://www.google.com/maps/search/?api=1&query=Smyrna%20Heating%20%26%20Air%20Conditioning&query_place_id=ChIJSccjc9QW9YgR48r5JUVAz3w",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Smyrna Heating & Air did a fantastic job with our system. Punctual, professional, and fair pricing.",
          date: "2026-03-07",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Great experience from beginning to end. They explained everything and didn't try to upsell.",
          date: "2026-02-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "smyrna",
        name: "Smyrna",
        state: "GA",
        metaTitle: "HVAC Services in Smyrna, GA",
        metaDescription: "Trusted HVAC services in Smyrna, GA. Mon-Sat 7AM-7PM, Sun 9AM-5PM. Call Smyrna Heating & Air!",
        headline: "HVAC Services in Smyrna, GA",
        body: "Smyrna Heating & Air Conditioning is your local HVAC expert serving Smyrna and the surrounding communities. Open Monday through Saturday 7AM-7PM and Sunday 9AM-5PM, we're here when you need us.",
      },
    ],
  },

  // ── 7. Coleman's Heating & Air Conditioning ──
  "colemans-heating-air": {
    companyName: "Coleman's Heating & Air",
    companyFullName: "Coleman's Heating & Air Conditioning",
    phone: "(404) 349-1091",
    phoneRaw: "4043491091",
    email: "info@colemansheatingair.com",
    address: {
      street: "4639 Ivywood Dr SW",
      city: "Atlanta",
      state: "GA",
      zip: "30331",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 4.8,
      count: 9,
      url: "https://www.google.com/maps/search/?api=1&query=Coleman's%20Heating%20%26%20Air%20Conditioning&query_place_id=ChIJPR3OExke9YgR4SRIwcs5OPg",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Coleman's came out the same day and fixed our AC. Honest pricing and great work. Highly recommend!",
          date: "2024-12-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Available 24/7 and always delivers. The most honest HVAC company I've ever worked with.",
          date: "2024-11-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC Services in Atlanta, GA",
        metaDescription: "Honest HVAC services in Atlanta, GA. 24/7 availability. Call Coleman's Heating & Air Conditioning!",
        headline: "HVAC Services in Atlanta, GA",
        body: "Coleman's Heating & Air Conditioning provides honest, reliable HVAC service to Southwest Atlanta homeowners. Available 24/7, we're known for same-day service and transparent pricing that our customers love.",
      },
    ],
  },

  // ── 8. Marietta Heating and Air Conditioning ──
  "marietta-heating-air": {
    companyName: "Marietta Heating & Air",
    companyFullName: "Marietta Heating and Air Conditioning",
    phone: "(678) 218-4389",
    phoneRaw: "6782184389",
    email: "info@mariettaheatingair.com",
    address: {
      street: "785 Whitlock Ave SW",
      city: "Marietta",
      state: "GA",
      zip: "30064",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 4.1,
      count: 9,
      url: "https://www.google.com/maps/search/?api=1&query=Marietta%20Heating%20and%20Air%20Conditioning&query_place_id=ChIJQRKpJeoL9YgRZ-VebxMMcY0",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Doug and his family-owned team are great. They're in Whitlock Village and always take care of their customers.",
          date: "2026-03-07",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Honest, family-owned business. They don't try to sell you what you don't need. Fair prices and quality work.",
          date: "2025-12-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "marietta",
        name: "Marietta",
        state: "GA",
        metaTitle: "HVAC Services in Marietta, GA",
        metaDescription: "Family-owned HVAC services in Marietta, GA. Mon-Fri 8-8, Sat-Sun 9-5. Call Marietta Heating & Air!",
        headline: "HVAC Services in Marietta, GA",
        body: "Marietta Heating and Air Conditioning is a family-owned HVAC company located in Whitlock Village, Marietta. We serve homeowners throughout Marietta and East Cobb with reliable heating and cooling services Monday through Friday 8AM-8PM and weekends 9AM-5PM.",
      },
    ],
  },

  // ── 9. Pristine Guard Duct Services ──
  "pristine-guard": {
    companyName: "Pristine Guard",
    companyFullName: "Pristine Guard Duct Services",
    phone: "(470) 462-3498",
    phoneRaw: "4704623498",
    email: "info@pristineguard.com",
    address: {
      street: "241 Central Ave SW",
      city: "Atlanta",
      state: "GA",
      zip: "30303",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 5,
      url: "https://www.google.com/maps/search/?api=1&query=Pristine%20Guard%20Duct%20Services&query_place_id=ChIJVVXhCL0k9YgRaua1ZfXDlFQ",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Jake and Kevin did an amazing job with our duct cleaning. The difference in air quality was immediate!",
          date: "2026-03-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Professional service from a growing company. Perfect 5-star experience and fair pricing.",
          date: "2026-02-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "Duct Cleaning & HVAC Services in Atlanta, GA",
        metaDescription: "Expert duct cleaning and HVAC services in Downtown Atlanta, GA. Perfect 5-star rating. Call Pristine Guard!",
        headline: "Duct Cleaning & HVAC Services in Atlanta, GA",
        body: "Pristine Guard Duct Services provides expert duct cleaning and HVAC services in Downtown Atlanta. Open Monday through Saturday 7AM-8PM, we deliver a perfect 5-star experience to every customer.",
      },
    ],
  },

  // ── 10. Lamar's HVAC ──
  "lamars-hvac": {
    companyName: "Lamar's HVAC",
    companyFullName: "Lamar's HVAC Services",
    phone: "(404) 664-8150",
    phoneRaw: "4046648150",
    email: "info@lamarshvac.com",
    address: {
      street: "1870 Myrtle Dr SW",
      city: "Atlanta",
      state: "GA",
      zip: "30311",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 0,
      url: "https://www.google.com/maps/search/?api=1&query=Lamar's%20hvac&query_place_id=ChIJGU4HWGId9YgRgfFNYq-NXiw",
      featured: [],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC Services in Atlanta, GA",
        metaDescription: "24/7 HVAC services in Atlanta, GA. Call Lamar's HVAC for reliable heating and cooling service!",
        headline: "HVAC Services in Atlanta, GA",
        body: "Lamar's HVAC provides 24/7 heating and cooling services to homeowners in Southwest Atlanta and the surrounding communities. We're committed to delivering reliable, professional HVAC service when you need it most.",
      },
    ],
  },

  // ── 11. DD HVAC ──
  "dd-hvac": {
    companyName: "DD HVAC",
    companyFullName: "DD HVAC Services",
    phone: "(404) 468-8324",
    phoneRaw: "4044688324",
    email: "info@ddhvac.com",
    address: {
      street: "",
      city: "Atlanta",
      state: "GA",
      zip: "",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 1,
      url: "https://www.google.com/maps/search/?api=1&query=Ddhvac&query_place_id=ChIJZU6Ha6oLLo8Rcj2XqFShQac",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "DD HVAC provided excellent service. Professional, reliable, and great communication throughout.",
          date: "2025-08-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC Services in Atlanta, GA",
        metaDescription: "Expert HVAC services across the Atlanta metro area. Call DD HVAC today!",
        headline: "HVAC Services in Atlanta, GA",
        body: "DD HVAC serves homeowners across the greater Atlanta metro area including Douglasville, Marietta, Smyrna, Kennesaw, and Decatur. We deliver professional HVAC service you can count on.",
      },
      {
        slug: "marietta",
        name: "Marietta",
        state: "GA",
        metaTitle: "HVAC Services in Marietta, GA",
        metaDescription: "Trusted HVAC services in Marietta, GA. Call DD HVAC for reliable service!",
        headline: "HVAC Services in Marietta, GA",
        body: "DD HVAC provides expert heating and cooling services to Marietta homeowners. From routine maintenance to emergency repairs, we're here to keep your home comfortable.",
      },
      {
        slug: "smyrna",
        name: "Smyrna",
        state: "GA",
        metaTitle: "HVAC Services in Smyrna, GA",
        metaDescription: "Professional HVAC services in Smyrna, GA. Call DD HVAC today!",
        headline: "HVAC Services in Smyrna, GA",
        body: "Smyrna homeowners trust DD HVAC for reliable, professional heating and cooling service. We provide prompt, quality HVAC work at fair prices.",
      },
    ],
  },

  // ── 12. Evans HVAC ──
  "evans-hvac": {
    companyName: "Evans HVAC",
    companyFullName: "Evans HVAC Services",
    phone: "(470) 262-6705",
    phoneRaw: "4702626705",
    email: "info@evanshvac.com",
    address: {
      street: "",
      city: "Atlanta",
      state: "GA",
      zip: "",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 1,
      url: "https://www.google.com/maps/search/?api=1&query=Evans%20HVAC&query_place_id=ChIJkxP1OfAB9YgRIxtC9lXdZM8",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Evans HVAC did a great job. Professional service and fair pricing. Would use again.",
          date: "2022-06-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC Services in Atlanta, GA",
        metaDescription: "HVAC services and heating equipment supply in Atlanta, GA. Call Evans HVAC!",
        headline: "HVAC Services in Atlanta, GA",
        body: "Evans HVAC provides expert heating and cooling services along with quality heating equipment to Atlanta homeowners. We combine product knowledge with hands-on service expertise.",
      },
    ],
  },

  // ── 13. Champion Heating & Air ──
  "champion-heating-air": {
    companyName: "Champion Heating & Air",
    companyFullName: "Champion Heating & Air",
    phone: "(404) 724-5757",
    phoneRaw: "4047245757",
    email: "info@championheatingair.com",
    address: {
      street: "4450 Spring Creek Ln",
      city: "Sandy Springs",
      state: "GA",
      zip: "30350",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 3,
      url: "https://www.google.com/maps/search/?api=1&query=Champion%20Heating%20%26%20Air&query_place_id=ChIJqbFt0GQM9YgR30ZZ_3AyCvI",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Champion Heating & Air has been serving our area for over 13 years. Reliable, professional, and trustworthy.",
          date: "2024-06-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Great duct cleaning and AC service. Maverick was professional and thorough. Highly recommend!",
          date: "2024-05-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "sandy-springs",
        name: "Sandy Springs",
        state: "GA",
        metaTitle: "HVAC Services in Sandy Springs, GA",
        metaDescription: "13+ years serving Sandy Springs, GA. Duct cleaning and AC services. Call Champion Heating & Air!",
        headline: "HVAC Services in Sandy Springs, GA",
        body: "Champion Heating & Air has been serving Sandy Springs homeowners for over 13 years. From duct cleaning to full AC service, our experienced technicians deliver quality work you can trust.",
      },
    ],
  },

  // ── 14. Alejo's Heating & A/C Supply ──
  "alejos-heating-ac": {
    companyName: "Alejo's Heating & A/C",
    companyFullName: "Alejo's Heating & A/C Supply",
    phone: "(770) 675-7897",
    phoneRaw: "7706757897",
    email: "info@alejosheating.com",
    address: {
      street: "829 Pickens Industrial Dr NE Ste 13",
      city: "Marietta",
      state: "GA",
      zip: "30062",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 1,
      url: "https://www.google.com/maps/search/?api=1&query=Alejo's%20Heating%20%26%20A%2FC%20Supply%20Marietta&query_place_id=ChIJh6bT4EcV9YgRFmvHDVvj6CM",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Alejo's provides great HVAC supply and service. Small business with big quality. Highly recommend!",
          date: "2025-06-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "marietta",
        name: "Marietta",
        state: "GA",
        metaTitle: "HVAC Services & Supply in Marietta, GA",
        metaDescription: "HVAC supply and service in Marietta, GA. Mon-Fri 7-5, Sat 8-12. Call Alejo's Heating & A/C!",
        headline: "HVAC Services & Supply in Marietta, GA",
        body: "Alejo's Heating & A/C Supply provides both HVAC equipment and professional installation services in Marietta. Open Monday through Friday 7AM-5PM and Saturday 8AM-12PM, we're your one-stop shop for heating and cooling.",
      },
    ],
  },

  // ── 15. AMJ Heating & Air ──
  "amj-heating-air": {
    companyName: "AMJ Heating & Air",
    companyFullName: "AMJ Heating & Air",
    phone: "(770) 283-4232",
    phoneRaw: "7702834232",
    email: "info@amjheatingair.com",
    address: {
      street: "1462 Springleaf Cir SE",
      city: "Smyrna",
      state: "GA",
      zip: "30080",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 2,
      url: "https://www.google.com/maps/search/?api=1&query=amj%20heating%20%26%20air&query_place_id=ChIJnzr6oN0Q9YgRLdWd_-i_rSo",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "AMJ Heating & Air is a solid, established HVAC company. Reliable service and fair prices.",
          date: "2018-10-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "smyrna",
        name: "Smyrna",
        state: "GA",
        metaTitle: "HVAC Services in Smyrna, GA",
        metaDescription: "Established HVAC services in Smyrna, GA. Call AMJ Heating & Air for reliable service!",
        headline: "HVAC Services in Smyrna, GA",
        body: "AMJ Heating & Air is an established HVAC company serving Smyrna homeowners. Open Monday through Friday and Sunday 8AM-5PM, we provide dependable heating and cooling service you can count on.",
      },
    ],
  },

  // ── 16. Spartan HVAC Services ──
  "spartan-hvac": {
    companyName: "Spartan HVAC",
    companyFullName: "Spartan HVAC Services",
    phone: "(470) 852-9127",
    phoneRaw: "4708529127",
    email: "info@spartanhvac.com",
    address: {
      street: "5600 Roswell Rd",
      city: "Sandy Springs",
      state: "GA",
      zip: "30342",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 0,
      url: "https://www.google.com/maps/search/?api=1&query=Spartan%20HVAC%20Services&query_place_id=ChIJFYXpRAAP9YgR0Nc1Np4fA8w",
      featured: [],
    },
    serviceAreas: [
      {
        slug: "sandy-springs",
        name: "Sandy Springs",
        state: "GA",
        metaTitle: "HVAC Services in Sandy Springs, GA",
        metaDescription: "Professional HVAC services in Sandy Springs, GA. Call Spartan HVAC Services today!",
        headline: "HVAC Services in Sandy Springs, GA",
        body: "Spartan HVAC Services provides professional heating and cooling service to Sandy Springs homeowners. We're committed to delivering quality HVAC work at competitive prices.",
      },
    ],
  },

  // ── 17. Piedmont Plumbing ──
  "piedmont-plumbing": {
    companyName: "Piedmont Plumbing",
    companyFullName: "Piedmont Plumbing & HVAC",
    phone: "(678) 355-9181",
    phoneRaw: "6783559181",
    email: "info@piedmontplumbing.com",
    address: {
      street: "132 Austin Ave NE",
      city: "Marietta",
      state: "GA",
      zip: "30060",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 1,
      url: "https://www.google.com/maps/search/?api=1&query=Piedmont%20Plumbing&query_place_id=ChIJu-jE_w8U9YgRVbcxI9vJBb8",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Piedmont Plumbing handles both plumbing and HVAC. Great service and available 24/7.",
          date: "2023-08-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "marietta",
        name: "Marietta",
        state: "GA",
        metaTitle: "Plumbing & HVAC Services in Marietta, GA",
        metaDescription: "24/7 plumbing and HVAC services in Marietta, GA. Call Piedmont Plumbing!",
        headline: "Plumbing & HVAC Services in Marietta, GA",
        body: "Piedmont Plumbing provides 24/7 plumbing and HVAC services to Marietta homeowners. Whether it's a heating emergency or a plumbing issue, we're here around the clock to help.",
      },
    ],
  },

  // ── 18. Champs Mechanical ──
  "champs-mechanical": {
    companyName: "Champs Mechanical",
    companyFullName: "Champs Mechanical Services",
    logo: "/images/champs-mechanical-logo.png",
    phone: "(404) 000-0000",
    phoneRaw: "4040000000",
    email: "info@champsmechanical.com",
    address: {
      street: "",
      city: "Atlanta",
      state: "GA",
      zip: "",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 4.0,
      count: 4,
      url: "https://www.google.com/maps/search/?api=1&query=Champs%20Mechanical&query_place_id=ChIJU-iNxkQE9YgRgtb8pHO5ssA",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Champs Mechanical handles HVAC, plumbing, and electrical. One-stop shop for home services.",
          date: "2019-06-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC, Plumbing & Electrical in Atlanta, GA",
        metaDescription: "Full-service HVAC, plumbing, and electrical services in Atlanta, GA. Call Champs Mechanical!",
        headline: "HVAC, Plumbing & Electrical in Atlanta, GA",
        body: "Champs Mechanical provides comprehensive home services including HVAC, plumbing, and electrical work to Atlanta homeowners. One call handles it all.",
      },
    ],
  },

  // ── 19. Atlanta HVAC Now ──
  "atlanta-hvac-now": {
    companyName: "Atlanta HVAC Now",
    companyFullName: "Atlanta HVAC Now",
    phone: "(470) 338-5060",
    phoneRaw: "4703385060",
    email: "info@atlantahvacnow.com",
    address: {
      street: "1100 Peachtree Rd NE",
      city: "Atlanta",
      state: "GA",
      zip: "30309",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 1.0,
      count: 1,
      url: "https://www.google.com/maps/search/?api=1&query=Atlanta%20HVAC%20Now&query_place_id=ChIJAQDAbUME9YgRaiqp3w3mVPw",
      featured: [],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC Services in Midtown Atlanta, GA",
        metaDescription: "HVAC services in Midtown Atlanta, GA. Call Atlanta HVAC Now for heating and cooling service!",
        headline: "HVAC Services in Midtown Atlanta, GA",
        body: "Atlanta HVAC Now provides heating and cooling services to homeowners in Midtown Atlanta and the surrounding neighborhoods. We're here to keep your home comfortable year-round.",
      },
    ],
  },

  // ── 20. Reid Electrical AC Heating ──
  "reid-electrical": {
    companyName: "Reid Electrical AC Heating",
    companyFullName: "Reid Electrical AC Heating",
    phone: "(770) 969-9091",
    phoneRaw: "7709699091",
    email: "info@reidelectrical.com",
    address: {
      street: "2207 Nelms Dr SW",
      city: "Atlanta",
      state: "GA",
      zip: "30315",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 3.7,
      count: 3,
      url: "https://www.google.com/maps/search/?api=1&query=Reid%20Electrical%20AC%20Heating&query_place_id=ChIJmZyQm_QC9YgRqfFEuuOpRik",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Reid Electrical handles both HVAC and electrical work. Convenient to have one company for both.",
          date: "2021-05-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC & Electrical Services in Atlanta, GA",
        metaDescription: "HVAC and electrical services in Atlanta, GA. Call Reid Electrical AC Heating!",
        headline: "HVAC & Electrical Services in Atlanta, GA",
        body: "Reid Electrical AC Heating provides both HVAC and electrical services to Southwest Atlanta homeowners. One call for all your home comfort and electrical needs.",
      },
    ],
  },

  // ── 21. Pulliam HVAC / Plumbing ──
  "pulliam-hvac": {
    companyName: "Pulliam HVAC",
    companyFullName: "Pulliam HVAC / Plumbing",
    phone: "(770) 572-8638",
    phoneRaw: "7705728638",
    email: "info@pulliamhvac.com",
    address: {
      street: "2469 Lakewood Ave SW",
      city: "Atlanta",
      state: "GA",
      zip: "30315",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 2.4,
      count: 24,
      url: "https://www.google.com/maps/search/?api=1&query=PULLIAM%20HVAC%2F%20PLUMBING&query_place_id=ChIJ4aiOJPQC9YgRtGDch8J7F8A",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Pulliam HVAC did a great job on our system. Joey was professional and the pricing was fair.",
          date: "2025-02-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "HVAC & Plumbing Services in Atlanta, GA",
        metaDescription: "HVAC and plumbing services in Atlanta, GA. Call Pulliam HVAC / Plumbing today!",
        headline: "HVAC & Plumbing Services in Atlanta, GA",
        body: "Pulliam HVAC / Plumbing provides heating, cooling, and plumbing services to Atlanta homeowners. From emergency repairs to installations, we handle it all.",
      },
    ],
  },

  // ── 22. Crestline Harbor HVAC ──
  "crestline-harbor-hvac": {
    companyName: "Crestline Harbor HVAC",
    companyFullName: "Crestline Harbor HVAC",
    phone: "(770) 454-2240",
    phoneRaw: "7704542240",
    email: "info@crestlineharbor.com",
    address: {
      street: "6690 Sunny Brook Ln NE",
      city: "Sandy Springs",
      state: "GA",
      zip: "30328",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 0,
      url: "https://www.google.com/maps/search/?api=1&query=Crestline%20Harbor%20HVAC&query_place_id=ChIJh6gBHQAN9YgRtZkxLrGMeBs",
      featured: [],
    },
    serviceAreas: [
      {
        slug: "sandy-springs",
        name: "Sandy Springs",
        state: "GA",
        metaTitle: "HVAC Services in Sandy Springs, GA",
        metaDescription: "HVAC services in Sandy Springs, GA. Call Crestline Harbor HVAC!",
        headline: "HVAC Services in Sandy Springs, GA",
        body: "Crestline Harbor HVAC provides heating and cooling services to Sandy Springs homeowners. We're committed to keeping your home comfortable year-round.",
      },
    ],
  },

  // ── 23. GlacierCrest HVAC Systems ──
  "glaciercrest-hvac": {
    companyName: "GlacierCrest HVAC",
    companyFullName: "GlacierCrest HVAC Systems",
    phone: "(770) 454-2240",
    phoneRaw: "7704542240",
    email: "info@glaciercrest.com",
    address: {
      street: "6050 City Walk Ln",
      city: "Sandy Springs",
      state: "GA",
      zip: "30328",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 0,
      url: "https://www.google.com/maps/search/?api=1&query=GlacierCrest%20HVAC%20Systems&query_place_id=ChIJjxGtGwAP9YgRXmBiaqm6OCE",
      featured: [],
    },
    serviceAreas: [
      {
        slug: "sandy-springs",
        name: "Sandy Springs",
        state: "GA",
        metaTitle: "HVAC Services in Sandy Springs, GA",
        metaDescription: "HVAC systems and services in Sandy Springs, GA. Call GlacierCrest HVAC Systems!",
        headline: "HVAC Services in Sandy Springs, GA",
        body: "GlacierCrest HVAC Systems provides professional heating and cooling services to Sandy Springs homeowners. Quality HVAC work at fair prices.",
      },
    ],
  },

  // ── 24. Appliance Geeks Marietta ──
  "appliance-geeks-marietta": {
    companyName: "Appliance Geeks",
    companyFullName: "Appliance Geeks Marietta",
    phone: "(404) 602-0992",
    phoneRaw: "4046020992",
    email: "info@appliancegeeks.com",
    address: {
      street: "30 S Park Square NE",
      city: "Marietta",
      state: "GA",
      zip: "30060",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 3.3,
      count: 4,
      url: "https://www.google.com/maps/search/?api=1&query=Appliance%20Geeks%20Marietta&query_place_id=ChIJ7asF9iQU9YgRIcJAuru-d8U",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Appliance Geeks handles both appliance repair and HVAC. Convenient and professional service.",
          date: "2020-08-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "marietta",
        name: "Marietta",
        state: "GA",
        metaTitle: "HVAC & Appliance Repair in Marietta, GA",
        metaDescription: "HVAC and appliance repair in Marietta, GA. Open 24hrs Mon-Sat. Call Appliance Geeks!",
        headline: "HVAC & Appliance Repair in Marietta, GA",
        body: "Appliance Geeks Marietta provides HVAC and appliance repair services. Open 24 hours Monday through Saturday, we're here when you need us for any home comfort or appliance issue.",
      },
    ],
  },

  // ── 25. Fix Atlanta Commercial Refrigeration ──
  "fix-atlanta": {
    companyName: "Fix Atlanta",
    companyFullName: "Fix Atlanta Commercial Refrigeration",
    logo: "/images/fix-atlanta-logo.png",
    phone: "(404) 860-1185",
    phoneRaw: "4048601185",
    email: "info@fixatlanta.com",
    address: {
      street: "276 Hammond Dr Ste B",
      city: "Sandy Springs",
      state: "GA",
      zip: "30328",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 6,
      url: "https://www.google.com/maps/search/?api=1&query=Fix%20Atlanta%20Commercial%20Refrigeration%20Repair&query_place_id=ChIJv9iKNGx19YgR_Ljt6gwBtUc",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Alex and the Fix Atlanta team are the best in commercial refrigeration. Available 24/7 and always professional.",
          date: "2026-01-15",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Perfect 5-star service every time. They handle commercial refrigeration and HVAC with expertise.",
          date: "2025-12-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "sandy-springs",
        name: "Sandy Springs",
        state: "GA",
        metaTitle: "Commercial Refrigeration & HVAC in Sandy Springs, GA",
        metaDescription: "Commercial refrigeration and HVAC services in Sandy Springs, GA. 24/7. Call Fix Atlanta!",
        headline: "Commercial Refrigeration & HVAC in Sandy Springs, GA",
        body: "Fix Atlanta Commercial Refrigeration provides 24/7 commercial refrigeration and HVAC services to businesses in Sandy Springs and the greater Atlanta area. With a perfect 5-star rating, we deliver the reliability your business demands.",
      },
    ],
  },
};

export default clients;
