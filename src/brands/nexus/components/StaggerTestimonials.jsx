import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "I went from spending 20 hours a week on content to 4. The AI workflows completely transformed how our team operates.",
    by: "Alex Rivera, Head of Growth at ScaleUp.io",
    imgSrc: "https://i.pravatar.cc/150?img=1",
  },
  {
    tempId: 1,
    testimonial:
      "The CMO Accelerator paid for itself in the first month. I landed two new clients just by showcasing the AI marketing systems I built.",
    by: "Priya Sharma, Founder at Bloom Digital Agency",
    imgSrc: "https://i.pravatar.cc/150?img=2",
  },
  {
    tempId: 2,
    testimonial:
      "The office hours alone are worth the price. Having a fractional CMO review your actual campaigns is invaluable.",
    by: "Marcus Chen, Marketing Director at FinTech Corp",
    imgSrc: "https://i.pravatar.cc/150?img=3",
  },
  {
    tempId: 3,
    testimonial:
      "Our ROAS improved 3.2x after implementing the AI ad creative workflow. This isn't theory — it's a proven playbook.",
    by: "Sarah Kim, E-commerce Brand Owner",
    imgSrc: "https://i.pravatar.cc/150?img=4",
  },
  {
    tempId: 4,
    testimonial:
      "If I could give 11 stars, I'd give 12. Best investment I've made in my marketing career.",
    by: "Andre, Head of Design at CreativeSolutions",
    imgSrc: "https://i.pravatar.cc/150?img=5",
  },
  {
    tempId: 5,
    testimonial:
      "SO SO SO HAPPY I FOUND THIS!!!! I'd bet it's saved me 100 hours so far on campaign creation alone.",
    by: "Jeremy, Product Manager at TimeWise",
    imgSrc: "https://i.pravatar.cc/150?img=6",
  },
  {
    tempId: 6,
    testimonial:
      "Took some convincing, but now that we're using these AI frameworks, we're never going back to manual workflows.",
    by: "Pam, Marketing Director at BrandBuilders",
    imgSrc: "https://i.pravatar.cc/150?img=7",
  },
  {
    tempId: 7,
    testimonial:
      "I would be lost without the in-depth analytics module. The ROI is EASILY 100X for our agency.",
    by: "Daniel, Data Scientist at AnalyticsPro",
    imgSrc: "https://i.pravatar.cc/150?img=8",
  },
  {
    tempId: 8,
    testimonial: "It's just the best AI marketing course out there. Period.",
    by: "Fernando, UX Designer at UserFirst",
    imgSrc: "https://i.pravatar.cc/150?img=9",
  },
  {
    tempId: 9,
    testimonial:
      "I enrolled 6 months ago and never looked back. My entire approach to marketing has evolved.",
    by: "Andy, DevOps Engineer at CloudMasters",
    imgSrc: "https://i.pravatar.cc/150?img=10",
  },
  {
    tempId: 10,
    testimonial:
      "I've been searching for an AI marketing education like this for YEARS. So glad I finally found one!",
    by: "Pete, Sales Director at RevenueRockets",
    imgSrc: "https://i.pravatar.cc/150?img=11",
  },
  {
    tempId: 11,
    testimonial:
      "It's so practical and intuitive, we got the entire marketing team up to speed in a single week.",
    by: "Marina, HR Manager at TalentForge",
    imgSrc: "https://i.pravatar.cc/150?img=12",
  },
  {
    tempId: 12,
    testimonial:
      "The community support is unparalleled. Everyone shares prompts, results, and real opportunities.",
    by: "Olivia, Customer Success Manager at ClientCare",
    imgSrc: "https://i.pravatar.cc/150?img=13",
  },
  {
    tempId: 13,
    testimonial:
      "The efficiency gains we've seen since implementing these AI workflows are off the charts!",
    by: "Raj, Operations Manager at StreamlineSolutions",
    imgSrc: "https://i.pravatar.cc/150?img=14",
  },
  {
    tempId: 14,
    testimonial:
      "Nexus AI has revolutionized how we handle our marketing workflow. It's a game-changer!",
    by: "Lila, Workflow Specialist at ProcessPro",
    imgSrc: "https://i.pravatar.cc/150?img=15",
  },
];

function TestimonialCard({ position, testimonial, handleMove, cardSize }) {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out ${
        isCenter
          ? "z-10 bg-[#1A1A2E] text-white border-[#1A1A2E]"
          : "z-0 bg-white text-[#1A1A2E] border-gray-200 hover:border-[#7C3AED]/40"
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px #E5E7EB"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
          backgroundColor: "#E5E7EB",
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{ boxShadow: "3px 3px 0px #FAFAF8" }}
      />
      <h3
        className={`text-base font-medium sm:text-xl ${
          isCenter ? "text-white" : "text-[#1A1A2E]"
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p
        className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
          isCenter ? "text-white/70" : "text-[#6B7280]"
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        - {testimonial.by}
      </p>
    </div>
  );
}

export default function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [list, setList] = useState(testimonials);

  const handleMove = (steps) => {
    const newList = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section id="testimonials" className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-medium text-[#1A1A2E] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What Our Students Say
          </h2>
        </div>
      </div>

      {/* Stagger testimonials */}
      <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
        {list.map((testimonial, index) => {
          const position =
            list.length % 2
              ? index - (list.length + 1) / 2
              : index - list.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}

        {/* Nav buttons */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-14 w-14 items-center justify-center border-2 border-gray-200 bg-white text-[#1A1A2E] transition-colors hover:bg-[#1A1A2E] hover:text-white hover:border-[#1A1A2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-14 w-14 items-center justify-center border-2 border-gray-200 bg-white text-[#1A1A2E] transition-colors hover:bg-[#1A1A2E] hover:text-white hover:border-[#1A1A2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
