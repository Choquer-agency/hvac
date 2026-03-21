// Client data for Roofing demo sites.
// Each key is the URL slug → yoursite.vercel.app/slug/
const clients = {
  "test-roofing": {
    companyName: "Summit Roofing",
    companyFullName: "Summit Roofing & Exteriors",
    phone: "(404) 555-1234",
    phoneRaw: "4045551234",
    email: "info@summitroofing.com",
    address: {
      street: "123 Main St",
      city: "Atlanta",
      state: "GA",
      zip: "30301",
    },
    colors: {
      primary: "#FF3300",
      primaryDark: "#CC2900",
      primaryLight: "#FF5C33",
      secondary: "#FE9901",
      dark: "#0F172A",
      light: "#F8F6F3",
      white: "#FFFFFF",
    },
    reviews: {
      platform: "Google",
      rating: 5.0,
      count: 142,
      url: "#",
      featured: [
        {
          author: "James T.",
          rating: 5,
          text: "Summit Roofing replaced our entire roof after a bad hail storm. They handled everything with our insurance company and the new roof looks amazing. Crew was professional and cleaned up every day.",
          date: "2 weeks ago",
        },
        {
          author: "Maria S.",
          rating: 5,
          text: "Had a leak that two other companies couldn't find. Summit found it on the first visit and had it fixed the same day. Fair price, honest people. Highly recommend!",
          date: "1 month ago",
        },
        {
          author: "Robert K.",
          rating: 5,
          text: "Got three quotes for a roof replacement and Summit was the most thorough by far. They showed me photos, explained every option, and never pressured me. Great experience from start to finish.",
          date: "3 weeks ago",
        },
        {
          author: "Linda W.",
          rating: 5,
          text: "We've used Summit for gutters and a roof inspection. Both times they were on time, professional, and reasonably priced. They're our go-to for anything exterior.",
          date: "2 months ago",
        },
        {
          author: "David M.",
          rating: 5,
          text: "After the storm came through, Summit was out the next morning to tarp our roof and prevent further damage. They walked us through the whole insurance process. Can't say enough good things.",
          date: "1 month ago",
        },
        {
          author: "Sarah P.",
          rating: 5,
          text: "Excellent work on our new siding and trim. The house looks brand new. The crew was respectful of our property and the price was exactly what they quoted.",
          date: "3 weeks ago",
        },
      ],
    },
    serviceAreas: [
      {
        slug: "atlanta",
        name: "Atlanta",
        state: "GA",
        metaTitle: "Roofing Services in Atlanta, GA",
        metaDescription: "Trusted roofing services in Atlanta, GA. Roof repair, replacement, storm damage. 142 five-star reviews. Call Summit Roofing!",
        headline: "Roofing Services in Atlanta, GA",
        body: "Atlanta homeowners trust Summit Roofing & Exteriors for reliable, high-quality roofing services. From Buckhead to East Atlanta, we provide fast response times and expert craftsmanship for all your roofing needs.",
      },
      {
        slug: "decatur",
        name: "Decatur",
        state: "GA",
        metaTitle: "Roofing Services in Decatur, GA",
        metaDescription: "Expert roofing services in Decatur, GA. Roof repair, replacement, inspections. Call Summit Roofing!",
        headline: "Roofing Services in Decatur, GA",
        body: "Decatur homeowners trust Summit Roofing & Exteriors for reliable, affordable roofing service. From downtown Decatur to Oakhurst and beyond, we deliver expert craftsmanship for every project.",
      },
      {
        slug: "marietta",
        name: "Marietta",
        state: "GA",
        metaTitle: "Roofing Services in Marietta, GA",
        metaDescription: "Professional roofing services in Marietta, GA. Roof repair, replacement, storm damage. Call Summit Roofing!",
        headline: "Roofing Services in Marietta, GA",
        body: "Serving Marietta and East Cobb, Summit Roofing & Exteriors delivers the same expert craftsmanship that has earned us 142 five-star reviews across the Atlanta metro area.",
      },
    ],
  },
};

export default clients;
