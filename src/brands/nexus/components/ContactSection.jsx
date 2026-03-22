import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [focused, setFocused] = useState(null);

  return (
    <section id="contact" ref={ref} className="px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Top: Big heading centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2
            className="text-3xl font-medium leading-tight text-[#1A1A2E] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready to transform your marketing?
          </h2>
          <p
            className="mt-4 text-base text-[#6B7280] lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book a free strategy call or send us a message. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="space-y-4 lg:col-span-2"
          >
            {[
              {
                icon: MessageSquare,
                title: "Chat with us",
                desc: "We're here to help. Start a conversation anytime.",
                action: "Start a chat",
                color: "#7C3AED",
                bg: "#F3EEFF",
              },
              {
                icon: Phone,
                title: "Book a call",
                desc: "Schedule a free 30-minute strategy session.",
                action: "Schedule now",
                color: "#F4845F",
                bg: "#FFF0EB",
              },
              {
                icon: Mail,
                title: "Email us",
                desc: "hello@nexusai.co — we reply within 24hrs.",
                action: "Send email",
                color: "#06D6A0",
                bg: "#E6FBF3",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 overflow-hidden border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: card.bg }}
                >
                  <card.icon className="h-5 w-5" style={{ color: card.color }} />
                </div>
                <div className="flex-1">
                  <h4
                    className="text-sm font-semibold text-[#1A1A2E]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {card.title}
                  </h4>
                  <p className="mt-1 text-xs text-[#6B7280]">{card.desc}</p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium transition-colors"
                    style={{ color: card.color }}
                  >
                    {card.action}
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="overflow-hidden border border-gray-100 bg-white lg:col-span-3"
            style={{
              clipPath: "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)",
              borderRadius: "16px",
            }}
          >
            {/* Diagonal corner accent line */}
            <div className="relative">
              <div
                className="pointer-events-none absolute z-10"
                style={{
                  top: 49,
                  right: -1,
                  width: Math.sqrt(50 * 50 * 2),
                  height: 2,
                  backgroundColor: "#E5E7EB",
                  transformOrigin: "top right",
                  transform: "rotate(45deg)",
                }}
              />
            </div>

            <div className="p-8 sm:p-10">
              <h3
                className="mb-6 text-xl font-semibold text-[#1A1A2E]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Send us a message
              </h3>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { name: "firstName", label: "First name", placeholder: "Jane" },
                    { name: "lastName", label: "Last name", placeholder: "Smith" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="mb-1.5 block text-xs font-medium text-[#1A1A2E]">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused(null)}
                        className={`w-full rounded-xl border bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A2E] outline-none transition-all duration-200 placeholder:text-[#6B7280]/40 ${
                          focused === field.name
                            ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/10"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#1A1A2E]">Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={`w-full rounded-xl border bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A2E] outline-none transition-all duration-200 placeholder:text-[#6B7280]/40 ${
                      focused === "email"
                        ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#1A1A2E]">
                    What are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["AI Foundations", "Paid Media Course", "CMO Accelerator", "1-on-1 Coaching", "Not sure yet"].map(
                      (opt) => (
                        <button
                          key={opt}
                          type="button"
                          className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-[#4A4A5A] transition-all duration-200 hover:border-[#7C3AED] hover:text-[#7C3AED] focus:border-[#7C3AED] focus:bg-[#7C3AED]/5 focus:text-[#7C3AED]"
                        >
                          {opt}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#1A1A2E]">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your marketing goals..."
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`w-full resize-none rounded-xl border bg-[#FAFAF8] px-4 py-3 text-sm text-[#1A1A2E] outline-none transition-all duration-200 placeholder:text-[#6B7280]/40 ${
                      focused === "message"
                        ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 bg-[#1A1A2E] py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2A2A4E]"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                    borderRadius: "12px",
                  }}
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
