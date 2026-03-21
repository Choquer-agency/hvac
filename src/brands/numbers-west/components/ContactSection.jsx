import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [focused, setFocused] = useState(null);

  return (
    <section id="contact" ref={ref} className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <h2 className="text-2xl font-medium leading-tight text-[#1A2332] sm:text-3xl lg:text-4xl xl:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Ready to solve the right problems?
          </h2>
          <p className="mt-3 text-sm text-[#8A9BB0] sm:mt-4 sm:text-base lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Book a discovery call or send us a message. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Contact cards */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
            className="space-y-3 sm:space-y-4 lg:col-span-2">
            {[
              { icon: MessageSquare, title: "Chat with us", desc: "Have a question about courses or consulting? Start a conversation.", action: "Start a chat", color: "#5088B8", bg: "#E8F0F8" },
              { icon: Phone, title: "Book a call", desc: "Schedule a free 30-minute discovery session with Kathryn.", action: "Schedule now", color: "#4E6E8E", bg: "#E4ECF3" },
              { icon: Mail, title: "Email us", desc: "kathryn@numberswest.com — we reply within 24hrs.", action: "Send email", color: "#384D68", bg: "#DDE6EF" },
            ].map((card, i) => (
              <div key={i}
                className="nw-card-sm group flex items-start gap-3 overflow-hidden border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 sm:gap-4 sm:p-6">
                <div className="nw-card-sm flex h-10 w-10 flex-shrink-0 items-center justify-center sm:h-11 sm:w-11" style={{ backgroundColor: card.bg }}>
                  <card.icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: card.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.title}</h4>
                  <p className="mt-1 text-xs text-[#8A9BB0]">{card.desc}</p>
                  <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-medium transition-colors sm:mt-3" style={{ color: card.color }}>
                    {card.action}<ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2, ease }}
            className="nw-card overflow-hidden border border-gray-100 bg-white lg:col-span-3">
            <div className="p-5 sm:p-8 lg:p-10">
              <h3 className="mb-5 text-lg font-semibold text-[#1A2332] sm:mb-6 sm:text-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>Send us a message</h3>
              <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  {[{ name: "firstName", label: "First name", placeholder: "Jane" }, { name: "lastName", label: "Last name", placeholder: "Smith" }].map((field) => (
                    <div key={field.name}>
                      <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">{field.label}</label>
                      <input type="text" placeholder={field.placeholder} onFocus={() => setFocused(field.name)} onBlur={() => setFocused(null)}
                        className={`w-full border bg-[#F4F7FA] px-3 py-2.5 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 sm:px-4 sm:py-3 ${focused === field.name ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
                        style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "3px" }} />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">Email</label>
                  <input type="email" placeholder="jane@company.com" onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    className={`w-full border bg-[#F4F7FA] px-3 py-2.5 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 sm:px-4 sm:py-3 ${focused === "email" ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "3px" }} />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">What are you looking for?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Problem First", "AI-Augmented PO", "Problem to Prototype", "Consulting", "Not sure yet"].map((opt) => (
                      <button key={opt} type="button"
                        className="nw-card-sm border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-[#4E6E8E] transition-all duration-200 hover:border-[#5088B8] hover:text-[#5088B8] focus:border-[#5088B8] focus:bg-[#5088B8]/5 focus:text-[#5088B8] sm:px-4 sm:py-2">
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">Message</label>
                  <textarea rows={3} placeholder="Tell us about your organization..."
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    className={`w-full resize-none border bg-[#F4F7FA] px-3 py-2.5 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 sm:px-4 sm:py-3 ${focused === "message" ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "3px" }} />
                </div>

                <button type="submit"
                  className="nw-card-sm group inline-flex w-full items-center justify-center gap-2 bg-[#1A2332] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2A3B4E]"
                  style={{ minHeight: "48px" }}>
                  Send Message <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
