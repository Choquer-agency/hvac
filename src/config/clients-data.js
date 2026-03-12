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

  // ═══════════════════════════════════════════════
  // BATCH 2 — Cheyenne, DC, Kansas, Baton Rouge
  // ═══════════════════════════════════════════════

  // ── 26. Reliable Heating & AC Repair Cheyenne ──
  "reliable-heating-cheyenne": {
    companyName: "Reliable Heating & AC",
    companyFullName: "Reliable Heating & AC Repair Cheyenne",
    phone: "(307) 481-5122",
    phoneRaw: "3074815122",
    email: "info@reliableheatingcheyenne.com",
    address: {
      street: "2314 Pioneer Ave",
      city: "Cheyenne",
      state: "WY",
      zip: "82001",
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
      count: 5,
      url: "https://www.google.com/maps/search/?api=1&query=Reliable%20Heating%20%26%20AC%20Repair%20Cheyenne&query_place_id=ChIJFbaMfbk6b4cRS6zVzqomm0g",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Reliable Heating lives up to their name. Quick response and quality HVAC work in Cheyenne.",
          date: "2021-03-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "cheyenne",
        name: "Cheyenne",
        state: "WY",
        metaTitle: "HVAC Services in Cheyenne, WY",
        metaDescription: "Reliable heating and AC repair in Cheyenne, WY. Call Reliable Heating & AC Repair today!",
        headline: "HVAC Services in Cheyenne, WY",
        body: "Reliable Heating & AC Repair Cheyenne provides dependable HVAC services to homeowners throughout Cheyenne. From furnace repair to AC installation, we keep your home comfortable year-round.",
      },
    ],
  },

  // ── 27. Cheyenne HVAC Service ──
  "cheyenne-hvac-service": {
    companyName: "Cheyenne HVAC",
    companyFullName: "Cheyenne HVAC Service",
    phone: "(307) 288-7476",
    phoneRaw: "3072887476",
    email: "info@cheyennehvac.com",
    address: {
      street: "1402 Hugur Ave",
      city: "Cheyenne",
      state: "WY",
      zip: "82001",
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
      count: 7,
      url: "https://www.google.com/maps/search/?api=1&query=Cheyenne%20HVAC%20Service&query_place_id=ChIJeQ340NE6b4cRwOGA0tqdYVY",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Perfect 5-star service. Efficient, clean work, and the thermostat installation was flawless.",
          date: "2022-08-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Cheyenne HVAC Service is the best in town. Professional, efficient, and always on time.",
          date: "2022-06-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "cheyenne",
        name: "Cheyenne",
        state: "WY",
        metaTitle: "HVAC Services in Cheyenne, WY",
        metaDescription: "Perfect 5-star HVAC services in Cheyenne, WY. 7 five-star reviews. Call Cheyenne HVAC Service!",
        headline: "HVAC Services in Cheyenne, WY",
        body: "Cheyenne HVAC Service has earned a perfect 5-star rating from every customer. Known for efficiency, cleanliness, and expert thermostat work, we're Cheyenne's trusted choice for heating and cooling.",
      },
    ],
  },

  // ── 28. Cheyenne Heating & Air Conditioning ──
  "cheyenne-heating-air": {
    companyName: "Cheyenne Heating & Air",
    companyFullName: "Cheyenne Heating & Air Conditioning",
    phone: "(307) 481-5120",
    phoneRaw: "3074815120",
    email: "info@cheyenneheatingair.com",
    address: {
      street: "114 E 16th St",
      city: "Cheyenne",
      state: "WY",
      zip: "82001",
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
      count: 4,
      url: "https://www.google.com/maps/search/?api=1&query=Cheyenne%20Heating%20%26%20Air%20Conditioning&query_place_id=ChIJuQwBTJ07b4cRvXAzN3ly37M",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Excellent heating and AC repair service. Professional team and fair pricing in Cheyenne.",
          date: "2024-04-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "cheyenne",
        name: "Cheyenne",
        state: "WY",
        metaTitle: "HVAC Services in Cheyenne, WY",
        metaDescription: "Heating and air conditioning repair in Cheyenne, WY. 4.8-star rating. Call Cheyenne Heating & Air!",
        headline: "HVAC Services in Cheyenne, WY",
        body: "Cheyenne Heating & Air Conditioning provides expert HVAC repair services to homeowners throughout Cheyenne. With a strong 4.8-star rating, we deliver the quality and reliability your home deserves.",
      },
    ],
  },

  // ── 29. CD Services ──
  "cd-services": {
    companyName: "CD Services",
    companyFullName: "CD Services HVAC & Appliance Repair",
    phone: "(307) 635-6728",
    phoneRaw: "3076356728",
    email: "info@cdservicescheyenne.com",
    address: {
      street: "2017 E 13th St",
      city: "Cheyenne",
      state: "WY",
      zip: "82001",
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
      url: "https://www.google.com/maps/search/?api=1&query=CD%20Services&query_place_id=ChIJc0nKiCE7b4cRk0Ys8jKxTWk",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Mike and Leila are amazing. They saved us hundreds compared to what other companies quoted. Perfect 5-star service!",
          date: "2025-12-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "CD Services handles furnace work and appliance repair. Honest pricing and they actually fix the problem.",
          date: "2025-10-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "cheyenne",
        name: "Cheyenne",
        state: "WY",
        metaTitle: "Furnace Repair & Appliance Service in Cheyenne, WY",
        metaDescription: "Perfect 5-star furnace repair and appliance service in Cheyenne, WY. Call CD Services!",
        headline: "Furnace Repair & Appliance Service in Cheyenne, WY",
        body: "CD Services provides expert furnace repair and appliance service in Cheyenne. With a perfect 5-star rating and a reputation for saving customers money, Mike and Leila deliver honest, quality work every time.",
      },
    ],
  },

  // ── 30. GD RV Tech ──
  "gd-rv-tech": {
    companyName: "GD RV Tech",
    companyFullName: "GD RV Tech",
    phone: "(307) 421-7568",
    phoneRaw: "3074217568",
    email: "info@gdrvtech.com",
    address: {
      street: "",
      city: "Cheyenne",
      state: "WY",
      zip: "82009",
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
      url: "https://www.google.com/maps/search/?api=1&query=GD%20RV%20Tech&query_place_id=ChIJpcCaVb87b4cR2ANg3l1lzzU",
      featured: [],
    },
    serviceAreas: [
      {
        slug: "cheyenne",
        name: "Cheyenne",
        state: "WY",
        metaTitle: "RV AC Repair & HVAC Services in Cheyenne, WY",
        metaDescription: "Mobile RV AC repair and HVAC services in Cheyenne, WY. Call GD RV Tech!",
        headline: "RV AC Repair & HVAC Services in Cheyenne, WY",
        body: "GD RV Tech provides mobile RV AC repair and HVAC services throughout the Cheyenne area. We come to you — convenient, professional service wherever you are.",
      },
    ],
  },

  // ── 31. Heating and Air Conditioning DC ──
  "heating-air-dc": {
    companyName: "Heating & Air DC",
    companyFullName: "Heating and Air Conditioning DC",
    phone: "(202) 448-9955",
    phoneRaw: "2024489955",
    email: "info@heatingairdc.com",
    address: {
      street: "6669 32nd Pl NW",
      city: "Washington",
      state: "DC",
      zip: "20015",
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
      url: "https://www.google.com/maps/search/?api=1&query=Heating%20and%20air%20conditioning%20dc&query_place_id=ChIJy3hqEsPJt4kR5Km5jdteE4o",
      featured: [],
    },
    serviceAreas: [
      {
        slug: "washington",
        name: "Washington",
        state: "DC",
        metaTitle: "HVAC Services in Washington, DC",
        metaDescription: "Heating and air conditioning services in NW Washington, DC. Call Heating & Air DC!",
        headline: "HVAC Services in Washington, DC",
        body: "Heating and Air Conditioning DC provides expert HVAC services to homeowners in Northwest Washington, DC and the Barnaby Woods neighborhood. We're your local heating and cooling professionals.",
      },
    ],
  },

  // ── 32. Washington Heating & Cooling ──
  "washington-heating-cooling": {
    companyName: "Washington Heating & Cooling",
    companyFullName: "Washington Heating & Cooling",
    phone: "(771) 249-1192",
    phoneRaw: "7712491192",
    email: "info@washingtonheatingcooling.com",
    address: {
      street: "1019 H St NE",
      city: "Washington",
      state: "DC",
      zip: "20002",
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
      count: 10,
      url: "https://www.google.com/maps/search/?api=1&query=Washington%20Heating%20%26%20Cooling&query_place_id=ChIJm7jny6EEyIkR50_t5AvLDxM",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "James is the best! Quick response, fair pricing, and he got our heating fixed the same day. Highly recommend!",
          date: "2026-02-15",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Washington Heating & Cooling is the real deal. Perfect 5-star service and always professional.",
          date: "2026-01-20",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Fast, reliable, and honest. James knows HVAC inside and out. Will use again for sure.",
          date: "2025-12-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "washington",
        name: "Washington",
        state: "DC",
        metaTitle: "HVAC Services in Washington, DC",
        metaDescription: "Perfect 5-star heating and cooling in Washington, DC. 10 reviews. Call Washington Heating & Cooling!",
        headline: "HVAC Services in Washington, DC",
        body: "Washington Heating & Cooling provides expert HVAC services to homeowners throughout Washington, DC. With a perfect 5-star rating and 10 glowing reviews, we deliver quick response times, fair pricing, and quality work you can trust.",
      },
    ],
  },

  // ── 33. Mitchell Heating DC ──
  "mitchell-heating-dc": {
    companyName: "Mitchell Heating",
    companyFullName: "Mitchell Heating DC",
    logo: "/images/mitchell-heating-logo.jpg",
    phone: "(202) 621-2247",
    phoneRaw: "2026212247",
    email: "info@mitchellheatingdc.com",
    address: {
      street: "",
      city: "Washington",
      state: "DC",
      zip: "",
    },
    colors: {
      primary: "#FF0004",
      secondary: "#0065E1",
      light: "#FFFFFF",
      dark: "#021F41",
    },
    reviews: {
      platform: "Google",
      rating: 4.6,
      count: 13,
      url: "https://www.google.com/maps/search/?api=1&query=Mitchell%20Heating%20DC&query_place_id=ChIJywqiEA65t4kROgiK94c7eqk",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Nathan from Mitchell Heating did excellent work. Professional, knowledgeable, and fair pricing.",
          date: "2023-09-15",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Mitchell Heating has been reliable for years. They know heating systems inside and out.",
          date: "2023-06-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "washington",
        name: "Washington",
        state: "DC",
        metaTitle: "Heating Services in Washington, DC",
        metaDescription: "Trusted heating services in Washington, DC. 4.6-star rating with 13 reviews. Call Mitchell Heating!",
        headline: "Heating Services in Washington, DC",
        body: "Mitchell Heating DC provides expert heating services to homeowners throughout Washington, DC. With a 4.6-star rating and 13 reviews, our experienced technicians deliver the reliable warmth your home needs.",
      },
    ],
  },

  // ── 34. Airway Climatrol Refrigeration ──
  "airway-climatrol": {
    companyName: "Airway Climatrol",
    companyFullName: "Airway Climatrol Refrigeration",
    phone: "(202) 723-4427",
    phoneRaw: "2027234427",
    email: "info@airwayclimatrol.com",
    address: {
      street: "505 Kennedy St NW B",
      city: "Washington",
      state: "DC",
      zip: "20011",
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
      url: "https://www.google.com/maps/search/?api=1&query=Airway%20Climatrol%20Refrigeration&query_place_id=ChIJtQlql3rIt4kREiRXC6lFcHQ",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Airway Climatrol is a long-established business. Reliable plumbing and HVAC service in DC.",
          date: "2019-04-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "washington",
        name: "Washington",
        state: "DC",
        metaTitle: "HVAC & Plumbing Services in Washington, DC",
        metaDescription: "Long-established HVAC and plumbing services in Washington, DC. Call Airway Climatrol Refrigeration!",
        headline: "HVAC & Plumbing Services in Washington, DC",
        body: "Airway Climatrol Refrigeration is a long-established HVAC and plumbing company serving Washington, DC homeowners. With decades of experience, we deliver the reliable service your home deserves.",
      },
    ],
  },

  // ── 35. SO HVAC Squad LLC ──
  "so-hvac-squad": {
    companyName: "SO HVAC Squad",
    companyFullName: "SO HVAC Squad LLC",
    phone: "(202) 000-0000",
    phoneRaw: "2020000000",
    email: "info@sohvacsquad.com",
    address: {
      street: "",
      city: "Washington",
      state: "DC",
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
      url: "https://www.google.com/maps/search/?api=1&query=SO%20HVAC%20Squad%20LLC&query_place_id=ChIJEfyCfdRxW4gR3_8xdtMapD0",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "SO HVAC Squad provided excellent service. Professional and reliable HVAC work.",
          date: "2026-02-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "washington",
        name: "Washington",
        state: "DC",
        metaTitle: "HVAC Services in Washington, DC",
        metaDescription: "Professional HVAC services in Washington, DC. Call SO HVAC Squad LLC!",
        headline: "HVAC Services in Washington, DC",
        body: "SO HVAC Squad LLC provides professional heating and cooling services to homeowners throughout Washington, DC. We deliver quality HVAC work you can count on.",
      },
    ],
  },

  // ── 36. B & M Heat Air & Electrical ──
  "bm-heat-air": {
    companyName: "B & M Heat Air",
    companyFullName: "B & M Heat Air & Electrical",
    phone: "(620) 782-9635",
    phoneRaw: "6207829635",
    email: "info@bmheatair.com",
    address: {
      street: "503 S Clark St",
      city: "Udall",
      state: "KS",
      zip: "67146",
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
      url: "https://www.google.com/maps/search/?api=1&query=B%20%26%20M%20Heat%20Air%20%26%20Electrical&query_place_id=ChIJRx60TvWKuocRb50l9U4kNZA",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "B & M provides quick response and reasonable prices. Great local HVAC and electrical service.",
          date: "2018-05-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "udall",
        name: "Udall",
        state: "KS",
        metaTitle: "HVAC & Electrical Services in Udall, KS",
        metaDescription: "HVAC, heating, and electrical services in Udall, KS. Perfect 5-star rating. Call B & M Heat Air!",
        headline: "HVAC & Electrical Services in Udall, KS",
        body: "B & M Heat Air & Electrical provides HVAC and electrical services to homeowners in Udall and the surrounding South Wichita area. Quick response, reasonable prices, and quality work every time.",
      },
    ],
  },

  // ── 37. Chew Plumbing & Heating Inc ──
  "chew-plumbing-heating": {
    companyName: "Chew Plumbing & Heating",
    companyFullName: "Chew Plumbing & Heating Inc",
    phone: "(620) 326-7635",
    phoneRaw: "6203267635",
    email: "info@chewplumbing.com",
    address: {
      street: "306 N Washington Ave",
      city: "Wellington",
      state: "KS",
      zip: "67152",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 4.3,
      count: 42,
      url: "https://www.google.com/maps/search/?api=1&query=Chew%20Plumbing%20%26%20Heating%20Inc&query_place_id=ChIJq5YBOqaXuocRY7mY4xagmXc",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Chew Plumbing & Heating is an established business in Wellington. Reliable service for years.",
          date: "2025-05-15",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Great plumbing and heating work. They're busy because they're good. Highly recommend!",
          date: "2025-03-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "wellington",
        name: "Wellington",
        state: "KS",
        metaTitle: "Plumbing & Heating Services in Wellington, KS",
        metaDescription: "Established plumbing and heating services in Wellington, KS. 42 reviews. Call Chew Plumbing & Heating!",
        headline: "Plumbing & Heating Services in Wellington, KS",
        body: "Chew Plumbing & Heating Inc is Wellington's established plumbing and heating company. With 42 reviews and years of service, we deliver the reliable work that has made us a trusted name in the community.",
      },
    ],
  },

  // ── 38. Harris Heating & Air ──
  "harris-heating-air": {
    companyName: "Harris Heating & Air",
    companyFullName: "Harris Heating & Air",
    phone: "(316) 312-8736",
    phoneRaw: "3163128736",
    email: "info@harrisheatingair.com",
    address: {
      street: "",
      city: "Wichita",
      state: "KS",
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
      count: 13,
      url: "https://www.google.com/maps/search/?api=1&query=Harris%20Heating%20%26%20Air&query_place_id=ChIJ41zN3y_nuocRJ6-xRijut6c",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Austin and Leroy are top-notch technicians. Harris Heating & Air delivers perfect service every time!",
          date: "2025-08-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Veteran-friendly and works with home warranty companies. Perfect 5-star service. Highly recommend!",
          date: "2025-07-25",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Harris Heating & Air is the best in the Wichita area. Professional, reliable, and fair pricing.",
          date: "2025-07-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "wichita",
        name: "Wichita",
        state: "KS",
        metaTitle: "HVAC Services in Wichita, KS",
        metaDescription: "Perfect 5-star HVAC services in Wichita, KS. 13 reviews. Veteran-friendly. Call Harris Heating & Air!",
        headline: "HVAC Services in Wichita, KS",
        body: "Harris Heating & Air provides perfect 5-star HVAC services to Wichita homeowners. Veteran-friendly and experienced with home warranty companies, our technicians Austin and Leroy deliver quality work every time.",
      },
    ],
  },

  // ── 39. Glantz Plumbing Heating & AC ──
  "glantz-plumbing": {
    companyName: "Glantz Plumbing",
    companyFullName: "Glantz Plumbing Heating & AC",
    phone: "(620) 221-7375",
    phoneRaw: "6202217375",
    email: "info@glantzplumbing.com",
    address: {
      street: "105 W 11th Ave",
      city: "Winfield",
      state: "KS",
      zip: "67156",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 3.5,
      count: 56,
      url: "https://www.google.com/maps/search/?api=1&query=Glantz%20Plumbing%20Heating%20%26%20A%20C&query_place_id=ChIJ9b7ix2d7uocRDanlrkVRMK4",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Jeff and Shannon run a solid operation. Glantz handles plumbing, heating, and AC — available 24/7.",
          date: "2026-01-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "High-volume company for a reason. They know their stuff and get the job done right.",
          date: "2025-11-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "winfield",
        name: "Winfield",
        state: "KS",
        metaTitle: "Plumbing, Heating & AC in Winfield, KS",
        metaDescription: "24/7 plumbing, heating, and AC services in Winfield, KS. 56 reviews. Call Glantz Plumbing!",
        headline: "Plumbing, Heating & AC in Winfield, KS",
        body: "Glantz Plumbing Heating & AC provides 24/7 plumbing, heating, and air conditioning services to Winfield homeowners. With 56 reviews, Jeff and Shannon's team is one of the most established service providers in the area.",
      },
    ],
  },

  // ── 40. MJB Heating & Cooling ──
  "mjb-heating-cooling": {
    companyName: "MJB Heating & Cooling",
    companyFullName: "MJB Heating & Cooling",
    phone: "(316) 000-0000",
    phoneRaw: "3160000000",
    email: "info@mjbheating.com",
    address: {
      street: "6420 Southeast Blvd",
      city: "Derby",
      state: "KS",
      zip: "67037",
    },
    colors: {
      primary: "#1A73E9",
      secondary: "#2BC48B",
      light: "#F0F4F8",
      dark: "#0E1B2B",
    },
    reviews: {
      platform: "Google",
      rating: 4.6,
      count: 5,
      url: "https://www.google.com/maps/search/?api=1&query=MJB%20Heating%20%26%20Cooling&query_place_id=ChIJfZ6IcvHvuocRWZMzqz3fX6w",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Dale and his crew are great. Realtor-recommended and they always deliver quality HVAC work.",
          date: "2024-03-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "MJB Heating & Cooling is the best in Derby. Professional, reliable, and fair pricing.",
          date: "2024-01-20",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "derby",
        name: "Derby",
        state: "KS",
        metaTitle: "HVAC Services in Derby, KS",
        metaDescription: "Realtor-recommended HVAC services in Derby, KS. Call MJB Heating & Cooling!",
        headline: "HVAC Services in Derby, KS",
        body: "MJB Heating & Cooling provides expert HVAC services to homeowners in Derby and the South Wichita suburbs. Realtor-recommended and led by Dale's experienced crew, we deliver quality heating and cooling work.",
      },
    ],
  },

  // ── 41. Baton Rouge Heating & Air Conditioning ──
  "baton-rouge-heating-air": {
    companyName: "Baton Rouge Heating & Air",
    companyFullName: "Baton Rouge Heating & Air Conditioning",
    phone: "(323) 894-7157",
    phoneRaw: "3238947157",
    email: "info@batonrougeheatingair.com",
    address: {
      street: "933 Government St",
      city: "Baton Rouge",
      state: "LA",
      zip: "70802",
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
      count: 30,
      url: "https://www.google.com/maps/search/?api=1&query=Baton%20Rouge%20Heating%20%26%20Air%20Conditioning&query_place_id=ChIJEeJ8UEXKJoYRiBI-bNArbig",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Dale is the best. Baton Rouge Heating & Air provides perfect service — 30 five-star reviews speak for themselves!",
          date: "2021-08-15",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "They also handle generator maintenance. One-stop shop for home comfort and power. Highly recommend!",
          date: "2021-06-20",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Small business, big quality. Every visit has been a 5-star experience. Wouldn't go anywhere else.",
          date: "2021-04-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "baton-rouge",
        name: "Baton Rouge",
        state: "LA",
        metaTitle: "HVAC Services in Baton Rouge, LA",
        metaDescription: "Perfect 5-star HVAC and generator services in Baton Rouge, LA. 30 reviews. Call Baton Rouge Heating & Air!",
        headline: "HVAC Services in Baton Rouge, LA",
        body: "Baton Rouge Heating & Air Conditioning provides perfect 5-star HVAC and generator maintenance services on Government Street. With 30 five-star reviews, Dale's team delivers the quality and reliability that Baton Rouge homeowners trust.",
      },
    ],
  },

  // ── 42. Top Notch Cooling ──
  "top-notch-cooling": {
    companyName: "Top Notch Cooling",
    companyFullName: "Top Notch Cooling",
    phone: "(225) 367-0555",
    phoneRaw: "2253670555",
    email: "info@topnotchcooling.com",
    address: {
      street: "",
      city: "Baton Rouge",
      state: "LA",
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
      count: 3,
      url: "https://www.google.com/maps/search/?api=1&query=Top%20Notch%20Cooling&query_place_id=ChIJP5QzM81PL44RkbY35YMNy_0",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "Top Notch Cooling lives up to its name. Perfect service and quality HVAC work in Baton Rouge.",
          date: "2021-09-15",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "baton-rouge",
        name: "Baton Rouge",
        state: "LA",
        metaTitle: "HVAC Services in Baton Rouge, LA",
        metaDescription: "Perfect 5-star cooling and HVAC services in Baton Rouge, LA. Call Top Notch Cooling!",
        headline: "HVAC Services in Baton Rouge, LA",
        body: "Top Notch Cooling provides expert HVAC services to Baton Rouge homeowners. With a perfect 5-star rating, we deliver the quality cooling and heating service your home deserves.",
      },
    ],
  },

  // ── 43. Option1 Home Services LLC ──
  "option1-home-services": {
    companyName: "Option1 Home Services",
    companyFullName: "Option1 Home Services LLC",
    phone: "(225) 456-9353",
    phoneRaw: "2254569353",
    email: "info@option1homeservices.com",
    address: {
      street: "",
      city: "Baton Rouge",
      state: "LA",
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
      count: 0,
      url: "https://www.google.com/maps/search/?api=1&query=Option1HomeServicesLLC&query_place_id=ChIJrc0j_mDu3YgRi-Bs3VeWKR8",
      featured: [],
    },
    serviceAreas: [
      {
        slug: "baton-rouge",
        name: "Baton Rouge",
        state: "LA",
        metaTitle: "HVAC Services in Baton Rouge, LA",
        metaDescription: "Professional HVAC services in Baton Rouge, LA. Call Option1 Home Services LLC!",
        headline: "HVAC Services in Baton Rouge, LA",
        body: "Option1 Home Services LLC provides professional HVAC services to Baton Rouge homeowners. We're committed to delivering quality heating and cooling work at competitive prices.",
      },
    ],
  },

  // ── 44. Service Now Air Conditioning and Heating ──
  "service-now-ac": {
    companyName: "Service Now AC & Heating",
    companyFullName: "Service Now Air Conditioning and Heating",
    phone: "(225) 000-0000",
    phoneRaw: "2250000000",
    email: "info@servicenowac.com",
    address: {
      street: "",
      city: "Baton Rouge",
      state: "LA",
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
      rating: 1.7,
      count: 11,
      url: "https://www.google.com/maps/search/?api=1&query=Service%20Now%20Air%20Conditioning%20and%20Heating&query_place_id=ChIJHe9h5UOlJoYRu49KGscf0Vo",
      featured: [],
    },
    serviceAreas: [
      {
        slug: "baton-rouge",
        name: "Baton Rouge",
        state: "LA",
        metaTitle: "HVAC Services in Baton Rouge, LA",
        metaDescription: "Air conditioning and heating services in Baton Rouge, LA. Call Service Now!",
        headline: "HVAC Services in Baton Rouge, LA",
        body: "Service Now Air Conditioning and Heating provides HVAC services to Baton Rouge homeowners. We handle air conditioning repair, heating installation, and more.",
      },
    ],
  },

  // ── 45. DC Air Duct Cleaning & Dryer Vent Cleaning ──
  "dc-air-duct-cleaning": {
    companyName: "DC Air Duct Cleaning",
    companyFullName: "DC Air Duct Cleaning & Dryer Vent Cleaning",
    phone: "(202) 936-3515",
    phoneRaw: "2029363515",
    email: "info@dcairductcleaning.com",
    address: {
      street: "4530 40th St NW",
      city: "Washington",
      state: "DC",
      zip: "20016",
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
      count: 32,
      url: "https://www.google.com/maps/search/?api=1&query=DC%20Air%20Duct%20Cleaning%20%26%20Dryer%20vent%20Cleaning&query_place_id=ChIJQ34B9nhaGIcRlgHR06aaUyg",
      featured: [
        {
          author: "Verified Customer",
          rating: 5,
          text: "DC Air Duct Cleaning does excellent work. Thorough duct cleaning and AC filter service. Very active and responsive!",
          date: "2026-03-10",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Professional service from start to finish. Our air quality improved immediately after the duct cleaning.",
          date: "2026-02-25",
        },
        {
          author: "Verified Customer",
          rating: 5,
          text: "Best duct cleaning service in DC. Fair prices, thorough work, and great communication throughout.",
          date: "2026-02-10",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "washington",
        name: "Washington",
        state: "DC",
        metaTitle: "Air Duct Cleaning & HVAC Services in Washington, DC",
        metaDescription: "4.8-star air duct cleaning and dryer vent cleaning in Washington, DC. 32 reviews. Call DC Air Duct Cleaning!",
        headline: "Air Duct Cleaning & HVAC Services in Washington, DC",
        body: "DC Air Duct Cleaning & Dryer Vent Cleaning provides expert duct cleaning, dryer vent cleaning, and HVAC filter services to Washington, DC homeowners. With a 4.8-star rating and 32 reviews, we're one of DC's most active and trusted service providers.",
      },
    ],
  },
};

export default clients;
