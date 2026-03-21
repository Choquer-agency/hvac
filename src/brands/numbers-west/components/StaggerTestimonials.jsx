import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  { tempId: 0, testimonial: "Kathryn walked into our organization and within 30 minutes understood our market dynamics better than people who'd been there for years. Her cross-industry pattern recognition is unreal.", by: "VP of Product, Mid-Market SaaS Company", imgSrc: "https://i.pravatar.cc/150?img=1" },
  { tempId: 1, testimonial: "We were solving the wrong problems for two years. Two days with Problem First completely reframed how our leadership team prioritizes. Worth every dollar.", by: "CIO, Financial Services Firm", imgSrc: "https://i.pravatar.cc/150?img=2" },
  { tempId: 2, testimonial: "The AI-Augmented PO course changed how I do market research. What used to take me two weeks now takes two hours — and the output is better.", by: "Senior Product Manager, Retail Tech", imgSrc: "https://i.pravatar.cc/150?img=3" },
  { tempId: 3, testimonial: "No theory, no fluff. Kathryn told us exactly which meetings to hold, who needed to be in the room, and what to do when leadership didn't show up. That's what we needed.", by: "Director of Operations, Healthcare", imgSrc: "https://i.pravatar.cc/150?img=4" },
  { tempId: 4, testimonial: "Our executives used to prioritize by gut feel. After Problem First, we have a framework that gets everyone aligned — and our product-market fit has never been stronger.", by: "CEO, $30M Manufacturing Company", imgSrc: "https://i.pravatar.cc/150?img=5" },
  { tempId: 5, testimonial: "I'm a non-technical marketer who built a working internal dashboard in the Problem to Prototype course. I didn't think that was possible. It absolutely is.", by: "Marketing Director, Non-Profit", imgSrc: "https://i.pravatar.cc/150?img=6" },
  { tempId: 6, testimonial: "Kathryn doesn't just teach Agile — she fixes the product side that every other Agile coach ignores. That's the gap nobody else is filling.", by: "Scrum Master, Enterprise Software", imgSrc: "https://i.pravatar.cc/150?img=7" },
  { tempId: 7, testimonial: "The BC training grant covered 80% of the cost. My entire leadership team went through Problem First for less than the price of one consultant day.", by: "HR Director, BC-Based Tech Firm", imgSrc: "https://i.pravatar.cc/150?img=8" },
  { tempId: 8, testimonial: "Zero PowerPoints. All exercises. Real problems from our actual organization. This is what training should look like.", by: "Product Owner, Telecom", imgSrc: "https://i.pravatar.cc/150?img=9" },
  { tempId: 9, testimonial: "I've been in product for 15 years and this was the first course that actually changed how I work. The vision exercise alone was worth the investment.", by: "Head of Product, EdTech Startup", imgSrc: "https://i.pravatar.cc/150?img=10" },
  { tempId: 10, testimonial: "We learned more about our competitive landscape in one afternoon with AI tools than we did in six months of manual research.", by: "Business Analyst, Insurance", imgSrc: "https://i.pravatar.cc/150?img=11" },
  { tempId: 11, testimonial: "Kathryn has a gift for making complex organizational problems feel solvable. She doesn't just identify the issue — she gives you the exact steps to fix it.", by: "COO, Professional Services Firm", imgSrc: "https://i.pravatar.cc/150?img=12" },
  { tempId: 12, testimonial: "The accountability pairing after the course kept us on track. Six months later, we're still using the frameworks daily.", by: "VP Engineering, B2B SaaS", imgSrc: "https://i.pravatar.cc/150?img=13" },
  { tempId: 13, testimonial: "AI is a tool. You still need to figure out what the problem is. That quote from Kathryn is now on our team wall.", by: "Product Lead, Government Agency", imgSrc: "https://i.pravatar.cc/150?img=14" },
  { tempId: 14, testimonial: "If your product team is the bottleneck and you don't know why — take this course. You'll know why by lunch on day one.", by: "CTO, Growth-Stage Startup", imgSrc: "https://i.pravatar.cc/150?img=15" },
];

function TestimonialCard({ position, testimonial, handleMove, cardSize }) {
  const isCenter = position === 0;

  return (
    <div onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out ${
        isCenter ? "z-10 bg-[#1A2332] text-white border-[#1A2332]" : "z-0 bg-white text-[#1A2332] border-gray-200 hover:border-[#5088B8]/40"
      }`}
      style={{
        width: cardSize, height: cardSize, borderRadius: "3px",
        clipPath: `polygon(0 0, calc(100% - ${cardSize === 290 ? 30 : 50}px) 0, 100% ${cardSize === 290 ? 30 : 50}px, 100% 100%, 0 100%)`,
        transform: `translate(-50%, -50%) translateX(${(cardSize / 1.5) * position}px) translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter ? "0px 8px 0px 4px #E5E7EB" : "0px 0px 0px 0px transparent",
      }}>
      <img src={testimonial.imgSrc} alt={testimonial.by.split(",")[0]}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)", boxShadow: "3px 3px 0px #F4F7FA" }} />
      <h3 className={`text-base font-medium sm:text-xl ${isCenter ? "text-white" : "text-[#1A2332]"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${isCenter ? "text-white/70" : "text-[#8A9BB0]"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
    if (steps > 0) { for (let i = steps; i > 0; i--) { const item = newList.shift(); if (!item) return; newList.push({ ...item, tempId: Math.random() }); } }
    else { for (let i = steps; i < 0; i++) { const item = newList.pop(); if (!item) return; newList.unshift({ ...item, tempId: Math.random() }); } }
    setList(newList);
  };

  useEffect(() => {
    const updateSize = () => setCardSize(window.matchMedia("(min-width: 640px)").matches ? 365 : 290);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section id="testimonials" className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>What Our Clients Say</h2>
        </div>
      </div>
      <div className="relative w-full overflow-hidden" style={{ height: cardSize === 290 ? 440 : 600 }}>
        {list.map((testimonial, index) => {
          const position = list.length % 2 ? index - (list.length + 1) / 2 : index - list.length / 2;
          return <TestimonialCard key={testimonial.tempId} testimonial={testimonial} handleMove={handleMove} position={position} cardSize={cardSize} />;
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <button onClick={() => handleMove(-1)} aria-label="Previous testimonial"
            className="flex h-14 w-14 items-center justify-center border-2 border-gray-200 bg-white text-[#1A2332] transition-colors hover:bg-[#1A2332] hover:text-white hover:border-[#1A2332] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5088B8]"
            style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={() => handleMove(1)} aria-label="Next testimonial"
            className="flex h-14 w-14 items-center justify-center border-2 border-gray-200 bg-white text-[#1A2332] transition-colors hover:bg-[#1A2332] hover:text-white hover:border-[#1A2332] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5088B8]"
            style={{ borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
