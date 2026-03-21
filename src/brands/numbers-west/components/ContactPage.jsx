import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, Calendar, ArrowRight, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];
const SQRT = (n) => Math.sqrt(n * n * 2);

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { contact } = config;

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-6xl">
        {/* Hero heading */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-3xl font-medium leading-tight text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Ready to solve the right problems?
          </h1>
          <p className="mt-4 text-base text-[#8A9BB0] lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {contact.body}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: Contact cards */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
            className="space-y-4 lg:col-span-2">
            {[
              { icon: MessageSquare, title: "Chat with us", desc: "Have a question about courses or consulting? Start a conversation.", action: "Start a chat", color: "#5088B8", bg: "#E8F0F8" },
              { icon: Phone, title: "Book a call", desc: "Schedule a free 30-minute discovery session with Kathryn.", action: "Schedule now", color: "#4E6E8E", bg: "#E4ECF3" },
              { icon: Mail, title: "Email us", desc: "kathryn@numberswest.com — we reply within 24hrs.", action: "Send email", color: "#384D68", bg: "#DDE6EF" },
            ].map((card, i) => (
              <div key={i}
                className="group flex items-start gap-4 overflow-hidden border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5"
                className="nw-card-sm" style={{ borderRadius: "3px" }}>
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: card.bg }}>
                  <card.icon className="h-5 w-5" style={{ color: card.color }} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.title}</h4>
                  <p className="mt-1 text-xs text-[#8A9BB0]">{card.desc}</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-medium transition-colors" style={{ color: card.color }}>
                    {card.action}<ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2, ease }}
            className="overflow-hidden border border-gray-100 bg-white lg:col-span-3"
            className="nw-card">
            {/* Diagonal corner accent */}
            <div className="relative">
              <div className="pointer-events-none absolute z-10" style={{ top: 49, right: -1, width: SQRT(50), height: 2, backgroundColor: "#E5E7EB", transformOrigin: "top right", transform: "rotate(45deg)" }} />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="mb-6 text-xl font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Send us a message</h3>
              <ContactForm interestOptions={contact.interestOptions} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm({ interestOptions }) {
  const [focused, setFocused] = useState(null);

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        {[{ name: "firstName", label: "First name", placeholder: "Jane" }, { name: "lastName", label: "Last name", placeholder: "Smith" }].map((field) => (
          <div key={field.name}>
            <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">{field.label}</label>
            <input type="text" placeholder={field.placeholder} onFocus={() => setFocused(field.name)} onBlur={() => setFocused(null)}
              className={`w-full rounded-xl border bg-[#F4F7FA] px-4 py-3 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 ${focused === field.name ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }} />
          </div>
        ))}
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">Email</label>
        <input type="email" placeholder="jane@company.com" onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
          className={`w-full rounded-xl border bg-[#F4F7FA] px-4 py-3 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 ${focused === "email" ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }} />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">What are you looking for?</label>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((opt) => (
            <button key={opt} type="button"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-[#4E6E8E] transition-all duration-200 hover:border-[#5088B8] hover:text-[#5088B8] focus:border-[#5088B8] focus:bg-[#5088B8]/5 focus:text-[#5088B8]">
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">Message</label>
        <textarea rows={3} placeholder="Tell us about your organization and what you're trying to solve..." onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
          className={`w-full resize-none rounded-xl border bg-[#F4F7FA] px-4 py-3 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 ${focused === "message" ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }} />
      </div>

      <button type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 bg-[#1A2332] py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2A3B4E]"
        className="nw-card-sm">
        Send Message <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
