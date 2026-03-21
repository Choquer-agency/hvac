const config = {
  // ── Company Info ──
  companyName: "Numbers West",
  companyFullName: "Numbers West — Training & Strategy for the AI Era",
  brandSlug: "numbers-west",
  email: "kathryn@numberswest.com",
  linkedin: "https://linkedin.com/in/kathrynchoquer",
  tagline: "Training and consulting for product leaders, executives, and business teams navigating the AI era.",
  foundedYear: 2024,

  // ── Brand / Theme ──
  colors: {
    bgLight: "#B8D0E4",
    primary: "#4E6E8E",
    primaryDeep: "#384D68",
    accent: "#5088B8",
    textPrimary: "#1A2332",
    textLight: "#FFFFFF",
    textMuted: "#8A9BB0",
    surface: "#F4F7FA",
    surfaceCard: "#FFFFFF",
  },
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
  },
  logo: "/images/numbers-west/logo.svg",

  // ── Nav ──
  nav: {
    links: [
      { label: "Courses", href: "#courses" },
      { label: "About", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Get Started", href: "#contact" },
  },

  // ── Hero ──
  hero: {
    featurePills: [
      "Problem-First Training",
      "Strategic Consulting",
      "AI-Augmented Product",
    ],
    headline:
      "Helping organizations identify the right problems and build at the speed of AI",
    body: "Hands-on courses and strategic consulting for product leaders, executives, and business teams —",
    bodyBold: "so you stop building the wrong things.",
    primaryCTA: { label: "Explore our courses", href: "#courses" },
    socialProof: {
      count: "30+",
      text: "years of cross-industry product strategy experience",
    },
  },

  // ── Video Section ──
  videoSection: {
    headline: "Most Organizations Are Solving the Wrong Problems",
    body: "Teams jump to solutions before understanding the real problem. Executives prioritize by gut feel. Product is under-invested while engineering gets faster every day. Numbers West teaches the discipline of sitting with the problem first — with practical frameworks, AI-augmented research, and a relentless focus on building the right thing.",
  },

  // ── Courses ──
  courses: [
    {
      slug: "problem-first",
      number: "01",
      title: "Problem First",
      description:
        "A 2-day workshop that teaches senior leaders to identify the right problems, prioritize with data instead of emotion, and create a vision that aligns the entire organization.",
      subtitle: "Vision, Prioritization & Strategy for the AI Era",
      tag: "Leadership",
      price: "$1,500",
      nextDate: "June 2026",
      duration: "2 days · In-person or virtual",
      spots: "12–20 participants",
      audience: "VPs, CIOs, Executives",
      priceRange: "$1,500 – $1,800 / seat",
      priceNote: "Corporate packages available",
      format: "In-Person or Virtual",
      cohortSize: "12–20 participants",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      argument: {
        headline: "Why this course exists",
        paragraphs: [
          "Executives go off for three days, come up with ideas without market intelligence, and hand a priority list to teams who know it's wrong but build it anyway. AI makes this worse, not better — because it removes the natural speed bump that used to force teams to think before building.",
          "The organizations that thrive will be the ones who identify the right problems, prioritize ruthlessly, and create a vision that aligns the whole organization. That's not theory — it's the difference between companies that ship what matters and companies that stay busy going nowhere.",
          "Problem First teaches the discipline of sitting with the problem before solutioning. Not with frameworks you'll forget next week — with exercises on your actual business, coaching on your real challenges, and an accountability structure that lasts 90 days beyond the workshop.",
        ],
      },
      agenda: [
        { day: "Day 1", title: "What's Actually Broken?", modules: [
          { time: "9:00 – 10:30", title: "The Solutioning Trap", number: 1 },
          { time: "11:00 – 12:30", title: "Getting Real Feedback at Speed", number: 2 },
          { time: "1:30 – 3:00", title: "Prioritization That Isn't Emotional", number: 3 },
        ]},
        { day: "Day 2", title: "Vision to Value", modules: [
          { time: "9:00 – 10:30", title: "Creating Vision That Inspires", number: 4 },
          { time: "11:00 – 12:30", title: "From Vision to Build: AI as the Accelerant", number: 5 },
          { time: "1:30 – 2:30", title: "Restructuring Your Team for Speed", number: 6 },
          { time: "2:30 – 3:30", title: "Your 90-Day Roadmap", number: 7 },
        ]},
      ],
      curriculum: [
        { title: "The Solutioning Trap", duration: "90 min", description: "Open with real stories: the executive who went straight to building a prepaid card without understanding the customer segment, the team that added a meeting before a meeting instead of fixing the original one. Introduce the core framework: most organizations are solving the wrong problems with the wrong data at the wrong speed.", exercise: "Each participant identifies their last three 'solutions' and traces back — what was the problem? Who defined it? What data supported it? Was more than one option considered?" },
        { title: "Getting Real Feedback at Speed", duration: "90 min", description: "AI has radically accelerated product research. Competitive analysis with AI, persona development from actual customer databases — not generic ChatGPT personas, but real client data with names, titles, and industries to generate persona clusters and anti-personas. Empathy mapping and customer feedback synthesis from CRM and support data.", exercise: "Using AI tools live in the session, participants run competitive analysis and customer research on their actual business. They leave with real intelligence, not hypothetical homework." },
        { title: "Prioritization That Isn't Emotional", duration: "90 min", description: "The core lightbulb moment: one person making a priority list alone — without market intelligence, capacity awareness, or collaborative input — is a single point of failure. Who needs to be in the room, what data to bring, how to weight market fit against capacity against strategic alignment. The anchor insight: if the executive didn't show up to any other meeting but prioritization, that would be a great start.", exercise: "Teams run a prioritization session on their real initiatives using the framework. They experience the difference between emotional solutioning and structured prioritization." },
        { title: "Creating Vision That Inspires", duration: "90 min", description: "How to take identified problems and set priorities and turn them into a compelling 2–5 year vision. What could the world look like? How does your specific skill set contribute? Part of the problem in Canada is that organizations aren't taking time to create vision — they're solutioning what they think is right and not thinking about what could be.", exercise: "Each participant drafts a vision statement for their product or business unit. Peer review in small groups with live coaching." },
        { title: "From Vision to Build: AI as the Accelerant", duration: "90 min", description: "Now that participants have the right problem identified, the right priorities set, and a vision articulated — this module shows how AI collapses the timeline from vision to working product. Take one participant's real problem from Day 1 and demonstrate the journey from problem statement to prototype. AI doesn't replace the strategic work — it makes the output actionable at speeds previously impossible.", exercise: "Live demonstration: problem statement to working prototype using AI tools, built from a real participant challenge." },
        { title: "Restructuring Your Team for Speed", duration: "60 min", description: "How does a team's operating rhythm change when the build cycle compresses from weeks to days? Daily demos instead of biweekly. Compressed backlog refinement. Fast feedback loops that prevent costly fixes. What ceremonies stay, what compresses, and how to manage the agenda so meetings serve their purpose.", exercise: "Redesign your team's ceremony cadence for an AI-accelerated build cycle." },
        { title: "Your 90-Day Roadmap", duration: "60 min", description: "Each participant leaves with a specific plan: which problem they're tackling first, who needs to be in the room for prioritization, what data they need to gather, and what their first build looks like.", exercise: "Build your personal 90-day implementation plan. Accountability pairing with another participant for follow-up." },
      ],
      whoItsFor: [
        { title: "VPs and Directors", description: "who set product priorities and need better frameworks for decision-making." },
        { title: "CIOs managing Agile transformations", description: "who want to fix the product side — not just the development side." },
        { title: "CEOs of mid-market companies", description: "($10M–$100M) who want to align their organization around the right problems." },
        { title: "Product leaders", description: "who are tired of building features that don't move the needle." },
      ],
      included: [
        "2 days of live, facilitated training",
        "Hands-on exercises with real organizational challenges",
        "Problem First workbook and framework templates",
        "90-day implementation roadmap",
        "Accountability pairing with a fellow participant",
        "30-day post-course check-in",
      ],
      faq: [
        { q: "Do I need technical experience?", a: "No. This course is designed for the product and leadership side of the organization. Technical knowledge is not required — what matters is your willingness to think differently about prioritization and problem definition." },
        { q: "Is this just another Agile certification?", a: "No. This is not an Agile certification course. It's a practical workshop focused on the skills that Agile implementations consistently miss: problem identification, vision, and collaborative prioritization. No exams. No certificates. Just frameworks you can use on Monday morning." },
        { q: "Can I expense this through the BC ETG?", a: "Yes. The BC Employer Training Grant can reimburse up to 80% of tuition costs for eligible BC employers — up to $10,000 per employee. We can help you determine eligibility and assist with the application process." },
        { q: "What if I need to cancel?", a: "Full refund up to 14 days before the course date. 50% refund up to 7 days before. Within 7 days, we offer a transfer to the next available cohort at no additional cost." },
        { q: "Is there a corporate rate?", a: "Yes. For groups of 5 or more from the same organization, we offer discounted corporate packages. Contact us for pricing." },
        { q: "What makes this different from your consulting work?", a: "The course teaches the frameworks. Consulting applies them. Many clients start with the course and follow up with consulting to embed the practices into their organization long-term." },
      ],
    },
    {
      slug: "ai-augmented-po",
      number: "02",
      title: "AI-Augmented Product Owner",
      description:
        "A 4-week cohort that teaches product owners and managers to use AI tools for 10x faster research, persona development, prioritization, and prototyping.",
      subtitle: "Research, Prioritization & Building at Speed",
      tag: "Product",
      price: "$800",
      nextDate: "July 2026",
      duration: "4 weeks · Live virtual cohort",
      spots: "15–25 participants",
      audience: "Product Owners & Managers",
      priceRange: "$800 – $1,200 / seat",
      priceNote: "Cohorts of 15–25",
      format: "Live Virtual Cohort",
      cohortSize: "15–25 participants",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
      argument: {
        headline: "Why this course exists",
        paragraphs: [
          "Product management has become the bottleneck in AI-accelerated organizations. When engineering can ship in hours, the constraint moves to: What should we build? For whom? Based on what evidence? Product owners who can't answer those questions at speed choke the entire pipeline.",
          "One PO stretched across five teams guarantees failure. There's no way they can understand market fit, get under the consumer's skin, create a vision, build epics and features, and then prioritize with the executive. The product side is consistently under-invested relative to the dev side.",
          "This course teaches POs and PMs to use AI tools to do their job 10x faster — research, personas, prioritization, prototyping, feedback synthesis — while maintaining the discipline that ensures they're building the right things.",
        ],
      },
      agenda: [
        { day: "Week 1", title: "Your Job Just Changed", modules: [
          { time: "2 hrs live + async", title: "The Product Bottleneck & AI Workspace Setup", number: 1 },
        ]},
        { day: "Week 2", title: "Research & Discovery at Speed", modules: [
          { time: "2 hrs live + async", title: "Competitive Research, Personas & Empathy Mapping", number: 2 },
        ]},
        { day: "Week 3", title: "Prioritization Under Velocity", modules: [
          { time: "2 hrs live + async", title: "Collaborative Prioritization & Business Case Modeling", number: 3 },
        ]},
        { day: "Week 4", title: "Prototype to Production", modules: [
          { time: "2 hrs live + async", title: "AI Prototyping, Specs & Fast Feedback Loops", number: 4 },
        ]},
      ],
      curriculum: [
        { title: "Your Job Just Changed", duration: "Week 1", description: "The product management bottleneck explained. When dev cycles compress from sprints to days, what does the PO actually do all day? Everything they did before, but faster, with AI augmenting every step. Why one PO stretched across five teams guarantees failure. How to properly structure the product side.", exercise: "Set up an AI workspace for product work — connect competitive intelligence sources, load customer data, configure research agents." },
        { title: "Research & Discovery at Speed", duration: "Week 2", description: "Competitive research with AI. Persona development from real customer databases — load actual paying clients with first name, title, industry and ask for persona clusters and anti-personas. Empathy mapping, regulatory and compliance scanning, market trend analysis. CRM and support ticket synthesis through RAG.", exercise: "Run AI-augmented discovery on your actual product. Produce a competitive brief, persona set, and empathy map — in the session." },
        { title: "Prioritization Under Velocity", duration: "Week 3", description: "When you can build anything in a day, how do you decide what to build? Collaborative prioritization applied to high-velocity environments. Why leadership must be in the room. Using AI to model business cases, estimate market size, and pressure-test assumptions before committing to a build.", exercise: "Simulated prioritization session using the framework. Participants bring their real backlog." },
        { title: "Prototype to Production", duration: "Week 4", description: "Using AI to build working prototypes before involving engineering. When to prototype vs. write a spec. How to hand off AI-generated work to engineers without creating friction. Acceptance criteria that work when development is AI-assisted. Daily demo rhythms and fast feedback loops.", exercise: "Each participant builds a working prototype of a feature they identified in Week 3." },
      ],
      whoItsFor: [
        { title: "Product Owners", description: "who want to do 10x more research and validation in the same amount of time." },
        { title: "Product Managers", description: "who need to stay ahead of engineering teams that are now shipping faster than ever." },
        { title: "Business Analysts", description: "looking to evolve their role with AI-augmented skills." },
        { title: "Anyone in product", description: "who knows AI matters but doesn't know where to start." },
      ],
      included: [
        "4 weeks of live virtual sessions (2 hours per week)",
        "Hands-on exercises with real product challenges",
        "AI toolkit setup and configuration guide",
        "Templates for personas, competitive analysis, and prioritization",
        "Cohort community access for ongoing support",
        "90-day post-course resource library",
      ],
      faq: [
        { q: "Do I need technical experience?", a: "No. This course is designed for product people, not engineers. You'll learn to use AI tools through intuitive interfaces — no coding required." },
        { q: "Which AI tools will we use?", a: "We cover ChatGPT, Claude, Perplexity, and Grok for research. For prototyping, we'll explore no-code AI tools. You'll leave with a personalized toolkit." },
        { q: "Can I expense this through the BC ETG?", a: "Yes. The BC Employer Training Grant can reimburse up to 80% of tuition costs for eligible BC employers." },
        { q: "What if I miss a session?", a: "All sessions are recorded. You can catch up asynchronously and participate in the cohort community for support." },
        { q: "Is there a corporate rate?", a: "Yes. For groups of 5 or more, we offer discounted corporate packages. Contact us for details." },
      ],
    },
    {
      slug: "problem-to-prototype",
      number: "03",
      title: "From Problem to Prototype",
      description:
        "A 2-week intensive that teaches non-technical business teams to build real tools and prototypes with AI — starting with the right problem, not the shiny tool.",
      subtitle: "AI Building for Business Teams",
      tag: "Hands-On",
      price: "$500",
      nextDate: "August 2026",
      duration: "2 weeks · Live virtual intensive",
      spots: "15–20 participants",
      audience: "Business Teams & Analysts",
      priceRange: "$500 – $800 / seat",
      priceNote: "No technical experience required",
      format: "Live Virtual Intensive",
      cohortSize: "15–20 participants",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
      argument: {
        headline: "Why this course exists",
        paragraphs: [
          "Non-technical business people — product managers, marketers, operations leads, business analysts — can now build working tools, dashboards, and prototypes using AI. But building without discipline produces garbage.",
          "This course teaches business professionals to use AI building tools within a structured product thinking framework: identify the real problem first, then build a real solution, then validate it actually works. No vibe coding chaos — structured, intentional building.",
          "This is the most accessible entry point to the Numbers West ecosystem. People who take this course and realize they need better product thinking become candidates for the AI-Augmented PO course. Organizations that send multiple employees become candidates for Problem First corporate engagements.",
        ],
      },
      agenda: [
        { day: "Session 1", title: "What Should You Build?", modules: [
          { time: "2 hrs live", title: "Problem Identification & Peer Validation", number: 1 },
        ]},
        { day: "Session 2", title: "Your First Build", modules: [
          { time: "2 hrs live", title: "Hands-On AI Building Tools", number: 2 },
        ]},
        { day: "Session 3", title: "Does It Actually Work?", modules: [
          { time: "2 hrs live", title: "Testing, Feedback & Iteration", number: 3 },
        ]},
        { day: "Session 4", title: "Ship It or Spec It", modules: [
          { time: "2 hrs live", title: "Deploy, Handoff & Buy-In", number: 4 },
        ]},
      ],
      curriculum: [
        { title: "What Should You Build?", duration: "Session 1", description: "Before touching any tool, answer three questions: What problem are you solving? For whom? How do you know they have this problem? A framework for identifying high-value internal tools and prototypes that are actually worth building. Common trap: building a thing because you can, not because anyone needs it.", exercise: "Each participant identifies one real problem in their organization that a tool or prototype could solve. Peer validation in small groups." },
        { title: "Your First Build", duration: "Session 2", description: "Hands-on with 2–3 accessible AI building tools. Building a real internal tool during the session. Understanding enough about what's happening under the hood to make good decisions — not vibe coding chaos but structured, intentional building.", exercise: "Build a working internal tool or dashboard that addresses your identified problem." },
        { title: "Does It Actually Work?", duration: "Session 3", description: "Testing the build against the original problem. Getting feedback from real users. Iterating based on what you learn. When to keep building yourself vs. when to write a spec for engineering. How to present an AI-built prototype to a team without triggering defensiveness from developers.", exercise: "User test your prototype with a peer and iterate based on structured feedback." },
        { title: "Ship It or Spec It", duration: "Session 4", description: "How to take what you've built and either deploy it (internal tools) or hand it off to engineering (customer-facing products). Organizational dynamics: who needs to approve this, how to get buy-in, how this fits into existing workflows.", exercise: "Prepare a stakeholder presentation for your prototype with deployment or handoff plan." },
      ],
      whoItsFor: [
        { title: "Business analysts", description: "who want to build the tools they've been requesting from IT." },
        { title: "Marketing and operations teams", description: "who see opportunities for automation but don't know where to start." },
        { title: "Department leads", description: "who want to empower their teams with AI building skills." },
        { title: "Anyone non-technical", description: "who wants to go from idea to working prototype — the right way." },
      ],
      included: [
        "2 weeks of live virtual sessions (3 hours per session, 5 sessions)",
        "Hands-on building exercises with AI tools",
        "Problem First framework templates",
        "AI tool setup guides and resources",
        "Prototype review and feedback from instructor",
        "Certificate of completion",
      ],
      faq: [
        { q: "Do I need technical experience?", a: "Absolutely not. This course is specifically designed for non-technical business teams. If you can use a web browser and write an email, you can take this course." },
        { q: "What will I actually build?", a: "A working prototype that solves a real problem from your organization. Past projects include internal dashboards, automated reporting tools, customer feedback analyzers, and process automation workflows." },
        { q: "Can I expense this through the BC ETG?", a: "Yes. The BC Employer Training Grant can reimburse up to 80% of tuition costs for eligible BC employers." },
        { q: "What if I don't have a problem to solve?", a: "We'll help you find one. Part of the course is learning to identify the right problems — and your instructor will work with you to find a meaningful project." },
        { q: "Is there a corporate rate?", a: "Yes. For groups of 5 or more, we offer discounted corporate packages that include a custom problem-identification workshop." },
      ],
    },
  ],

  // ── About Section (home page) ──
  aboutSection: {
    headline: "Get To Know Numbers West",
    body: "30+ years of cross-industry experience in retail, telecom, non-profit, marketing, and software. We don't teach theory — we give you the tactical structure to change how your organization works.",
    stats: [
      { value: "30+", label: "Years of Cross-Industry Experience" },
      { value: "500+", label: "Leaders & Product Teams Trained" },
      { value: "80%", label: "BC Training Grant Reimbursement" },
    ],
    achievements: [
      { label: "Certified", sublabel: "SAFe Practice Consultant" },
      { label: "Advisor", sublabel: "Companies Across North America" },
    ],
  },

  // ── Contact / CTA ──
  contactSection: {
    headline: "Ready to solve the right problems?\nGet In Touch",
  },

  // ── Newsletter ──
  newsletter: {
    headline: "Stay ahead of the curve",
    subtext:
      "Join our list for insights on product strategy, AI-augmented product ownership, and building the right things.",
  },

  // ── BC Employer Training Grant ──
  bcGrant: {
    label: "FUNDING OPPORTUNITY",
    headline: "Your team's training could be up to 80% funded.",
    body: "The BC Employer Training Grant reimburses up to 80% of training costs — up to $10,000 per employee. A $1,500 course could cost your organization as little as $300 out of pocket.",
    stat: "80%",
    statCaption: "reimbursement for eligible BC employers",
    cta: { label: "Learn If You Qualify", href: "/numbers-west/contact" },
  },

  // ── CONSULTING PAGE ──
  consulting: {
    hero: {
      headline: "Fractional CMO & Strategic Consulting",
      subtext: "Tactical, hands-on strategy for organizations that need more than a course.",
    },
    services: [
      { icon: "Rocket", title: "Go-to-Market Strategy", description: "From market research to launch plan. We build go-to-market strategies grounded in real data, not assumptions." },
      { icon: "Target", title: "Product & Market Fit", description: "Validate your product-market fit with AI-augmented research, customer analysis, and competitive positioning." },
      { icon: "ListOrdered", title: "Organizational Prioritization", description: "Replace gut-feel prioritization with collaborative, data-driven frameworks that get leadership aligned." },
      { icon: "Users", title: "Team Structure & Alignment", description: "Build the product-side organizational structure that most Agile implementations miss entirely." },
      { icon: "Brain", title: "AI-Augmented Product Strategy", description: "Integrate AI tools into your product workflow — research, personas, competitive analysis, and prototyping." },
      { icon: "Presentation", title: "Executive Coaching & Communication", description: "Help leaders communicate vision, manage change, and build the culture of curiosity that drives innovation." },
    ],
    howItWorks: [
      { step: 1, title: "Discovery Call", description: "We identify your biggest constraint. Not your symptoms — your actual problem." },
      { step: 2, title: "Custom Engagement", description: "A tailored plan built around your team, your industry, and your timeline." },
      { step: 3, title: "Ongoing Support", description: "Fractional CMO support for as long as you need it. Tactical, embedded, accountable." },
    ],
    cta: { headline: "Ready for a strategic partner?", subtext: "Book a discovery call to identify your biggest constraint.", primaryCTA: { label: "Book a Discovery Call", href: "/numbers-west/contact" } },
  },

  // ── ABOUT PAGE ──
  about: {
    hero: { headline: "Kathryn Choquer", subtitle: "Founder, Numbers West" },
    bio: {
      paragraphs: [
        "Kathryn Choquer has spent 30+ years across retail, telecom, non-profit, marketing, and software — building an uncommon breadth of experience that allows her to connect with virtually any business context within minutes.",
        "She holds a BBA from Simon Fraser University and is a Certified SAFe Practice Consultant. She advises companies across North America on product strategy, organizational alignment, and AI-augmented product ownership.",
        "Her teaching style is tactical, not theoretical. Where other consultants hand you principles and philosophy, Kathryn gives you the practical structure to change how your organization actually works. She'll tell you exactly which meetings to hold, who needs to be in the room, and what to do when leadership doesn't show up.",
        "Her superpower is pattern recognition across industries. Whether you're in insurance, banking, software, or government, she can immediately see your market dynamics, competitive landscape, and regulatory environment — and tailor her approach to your specific situation.",
      ],
    },
    philosophy: {
      headline: "Problem First. Always.",
      paragraphs: [
        "Organizations fail when they solution before they understand the problem. Vision is the missing ingredient. Prioritization is the skill that separates great companies from busy ones.",
        "If every product manager, if every executive took a moment and thought about what the world could look like in two to five years — and how their specific skill set could contribute — we could be truly innovative.",
        "AI makes this more important, not less. If everybody can build features, the one who wins is the one with better prioritization. The competitive advantage isn't in the building anymore. It's in knowing what to build.",
      ],
      quotes: [
        "I gave him practical tips he could use that day. Not theory. Not a framework diagram. Tips.",
        "AI is a tool. They still need to figure out what the problem is.",
        "Zero PowerPoints in agile.",
        "If everybody can build features, the one who wins is the one with better prioritization.",
      ],
    },
    connect: { headline: "Connect with Kathryn", linkedin: "https://linkedin.com/in/kathrynchoquer", email: "kathryn@numberswest.com", cta: { label: "Book a Call", href: "/numbers-west/contact" } },
  },

  // ── CONTENT PAGE ──
  content: {
    headline: "Insights Coming Soon",
    body: "Articles, frameworks, and thinking on product strategy, AI-augmented product ownership, and building the right things. Follow on LinkedIn for daily insights.",
    linkedinCTA: { label: "Follow on LinkedIn", href: "https://linkedin.com/in/kathrynchoquer" },
  },

  // ── CONTACT PAGE ──
  contact: {
    headline: "Let's Talk",
    body: "Whether you're exploring courses, need strategic consulting, or just want to have a conversation about product strategy — reach out.",
    interestOptions: ["Problem First Course", "AI-Augmented PO Course", "Problem to Prototype Course", "Consulting", "Government Training", "Other"],
    directInfo: { email: "kathryn@numberswest.com", linkedin: "https://linkedin.com/in/kathrynchoquer", calendly: "Book a call directly" },
  },

  // ── Footer ──
  footer: {
    description: "Training and consulting for product leaders navigating the AI era.",
    columns: [
      { title: "Quick Links", links: [{ label: "Home", href: "#" }, { label: "About", href: "#about" }, { label: "Courses", href: "#courses" }, { label: "Contact", href: "#contact" }] },
      { title: "Courses", links: [{ label: "Problem First", href: "#courses" }, { label: "AI-Augmented PO", href: "#courses" }, { label: "Problem to Prototype", href: "#courses" }] },
      { title: "Connect", links: [{ label: "LinkedIn", href: "https://linkedin.com/in/kathrynchoquer" }, { label: "Email", href: "mailto:kathryn@numberswest.com" }] },
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/kathrynchoquer",
    },
  },
};

export default config;
