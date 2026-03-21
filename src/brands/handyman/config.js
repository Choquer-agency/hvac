const handymanConfig = {
  // ── Company Info ──
  companyName: "Handyman",
  companyFullName: "Handyman",
  phone: "(512) 555-0143",
  phoneRaw: "5125550143",
  email: "jake@handymanjake.com",
  address: {
    street: "",
    city: "Austin",
    state: "TX",
    zip: "78701",
  },
  tagline: "Your neighbor who fixes everything.",
  foundedYear: 2011,

  // ── Brand / Theme ──
  brandSlug: "handyman",
  colors: {
    primary: "#16205B",
    primaryDark: "#0D1440",
    primaryLight: "#1E2D73",
    secondary: "#F15928",
    accent: "#0372FF",
    lavender: "#A3A9F5",
    dark: "#16205B",
    light: "#E1EAF9",
    bg: "#E1EAF9",
  },
  fonts: {
    heading: "Playfair Display",
    body: "Figtree",
  },
  logo: "/images/handyman/logo.svg",

  // ── Hero ──
  hero: {
    headline: "I fix things.\nYou relax.",
    body: "I'm Jake — Austin's go-to handyman for 15 years. Leaky faucet, busted door, wobbly shelf? Just text me. I'll take care of it so you don't have to.",
    primaryCTA: { label: "Text Me Now", href: "#contact" },
    secondaryCTA: { label: "See What I Do", href: "#services" },
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },

  // ── About Me ──
  aboutMe:
    "I've been fixing things around Austin homes for over 15 years now. Started out helping neighbors with odd jobs — a leaky pipe here, a squeaky door there — and word just kept spreading. I'm not a big company with a fancy office. I'm just one guy who genuinely loves making things work the way they should. I show up on time, I keep things clean, and I don't leave until you're happy. Whether it's hanging shelves or rewiring a light switch, I treat your home like it's my own. That's just how I was raised.",

  // ── Services (Bento Grid) ──
  servicesSection: {
    eyebrow: "What I Do",
    headline: "If it's broken, I'll fix it",
  },
  services: [
    {
      title: "Plumbing",
      description:
        "Leaky faucets, running toilets, clogged drains — I handle it all without the plumber's price tag.",
      icon: "🔧",
      size: "large",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    },
    {
      title: "Electrical",
      description:
        "Light switches, outlets, ceiling fans, fixture installs. Safe, clean, up to code.",
      icon: "⚡",
      size: "small",
    },
    {
      title: "Drywall",
      description:
        "Holes, cracks, water damage patches — I'll make your walls look brand new.",
      icon: "🏗️",
      size: "small",
    },
    {
      title: "Painting",
      description:
        "Interior and exterior. Clean lines, no mess, and I move the furniture for you.",
      icon: "🎨",
      size: "large",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    },
    {
      title: "Furniture Assembly",
      description:
        "IKEA nightmares? Bring it on. I'll have it built faster than you can find the Allen wrench.",
      icon: "🪑",
      size: "small",
    },
    {
      title: "Door & Window Repair",
      description:
        "Stuck doors, broken latches, drafty windows — I'll get everything opening and closing right.",
      icon: "🚪",
      size: "small",
    },
    {
      title: "Deck Repair",
      description:
        "Loose boards, wobbly railings, weather damage. I'll make your deck safe and solid again.",
      icon: "🪵",
      size: "small",
    },
    {
      title: "General Maintenance",
      description:
        "Caulking, weatherstripping, shelf hanging, TV mounting — all the little stuff that adds up.",
      icon: "🛠️",
      size: "small",
    },
  ],

  // ── Process Steps ──
  processSection: {
    eyebrow: "How It Works",
    headline: "Getting stuff fixed shouldn't be complicated",
  },
  process: [
    {
      step: 1,
      title: "Text Me",
      description:
        "Shoot me a text or fill out the form. A quick photo of the problem helps, but no pressure.",
    },
    {
      step: 2,
      title: "I'll Swing By",
      description:
        "I'll come take a look, usually same day or next morning. No charge just to see what's up.",
    },
    {
      step: 3,
      title: "We'll Figure It Out",
      description:
        "I'll tell you exactly what it needs, what it costs, and how long it'll take. No surprises.",
    },
    {
      step: 4,
      title: "Done and Done",
      description:
        "I get it done, clean up after myself, and make sure you're 100% happy before I leave.",
    },
  ],

  // ── Reviews ──
  reviews: {
    platform: "Google",
    rating: 5.0,
    count: 312,
    featured: [
      {
        author: "Sarah",
        text: "Jake fixed three things in my house in one visit — a leaky kitchen faucet, a sticky sliding door, and a ceiling fan that wouldn't turn on. All done in about two hours. This guy is a lifesaver.",
        rating: 5,
      },
      {
        author: "Marcus",
        text: "I called Jake on a Saturday morning because my toilet wouldn't stop running. He was at my place by noon. Super nice, super fast, and the price was way less than I expected.",
        rating: 5,
      },
      {
        author: "Lisa",
        text: "Been using Jake for everything around the house for the past three years. He's honest, he shows up when he says he will, and his work is always solid. Can't recommend him enough.",
        rating: 5,
      },
      {
        author: "Dave",
        text: "Had Jake assemble a ton of IKEA furniture for our new apartment. What would've taken me a whole weekend, he knocked out in half a day. Worth every penny.",
        rating: 5,
      },
    ],
  },

  // ── Final CTA ──
  finalCTA: {
    headline: "Something broken?\nLet's fix it.",
    body: "No job is too small. Text me a photo, tell me what's going on, and I'll take it from there. It's that easy.",
    primaryCTA: { label: "Text Jake Now", href: "#contact" },
  },

  // ── Footer ──
  footer: {
    description:
      "Austin's friendliest handyman since 2011. One guy, one truck, and 15 years of fixing things right.",
    socialLinks: {
      facebook: "#",
      google: "#",
    },
  },
};

export default handymanConfig;
