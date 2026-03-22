import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Clock, Users, MapPin, DollarSign, CheckCircle2, ArrowRight } from "lucide-react";
import config from "../config";
import BCGrantCallout from "./BCGrantCallout";

const ease = [0.22, 1, 0.36, 1];
const SQRT = (n) => Math.sqrt(n * n * 2);

export default function CoursePageTemplate({ slug }) {
  const course = config.courses.find((c) => c.slug === slug);
  const location = useLocation();

  // Scroll to #waitlist if arriving from homepage card button
  useEffect(() => {
    if (location.hash === "#waitlist") {
      setTimeout(() => {
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location.hash]);

  if (!course) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A2332] mb-2">Course not found</h1>
          <p className="text-[#8A9BB0]">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <CourseHero course={course} />
      <CourseArgument course={course} />
      {course.agenda && <CourseAgenda course={course} />}
      <CourseCurriculum course={course} />
      <CourseAudience course={course} />
      <BCGrantCallout />
      <CourseFormat course={course} />
      <CourseFAQ course={course} />
      <WaitlistForm course={course} />
      <CourseCTA />
    </>
  );
}

/* ── Hero ── */
function CourseHero({ course }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const details = [
    { icon: Clock, label: course.duration },
    { icon: MapPin, label: course.format },
    { icon: DollarSign, label: course.priceRange },
    { icon: Users, label: course.audience },
  ];

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-28 pb-6 lg:pt-36 lg:pb-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease }}
          className="mb-10 flex flex-wrap items-center gap-5">
          <span className="flex items-center gap-2 text-sm text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <CheckCircle2 className="h-4 w-4 text-[#1A2332]" strokeWidth={2.5} />Course {course.number}
          </span>
          <span className="flex items-center gap-2 text-sm text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <CheckCircle2 className="h-4 w-4 text-[#1A2332]" strokeWidth={2.5} />{course.audience}
          </span>
          <span className="flex items-center gap-2 text-sm text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <CheckCircle2 className="h-4 w-4 text-[#1A2332]" strokeWidth={2.5} />{course.duration}
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
          className="max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {course.title}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {course.subtitle} — {course.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4, ease }} className="mt-10">
          <a href="#waitlist"
            className="group relative inline-flex items-center gap-3 px-7 py-4 text-base font-medium text-[#1A2332] transition-colors duration-300 hover:text-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 50" fill="none">
              <polygon points="1,1 182,1 199,18 199,49 1,49"
                className="stroke-[#1A2332] fill-transparent transition-all duration-300 group-hover:fill-[#1A2332]"
                strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="relative z-10 inline-flex items-center gap-3">
              <ArrowRight className="h-5 w-5 transition-colors duration-300 group-hover:text-white" />
              <span className="transition-colors duration-300 group-hover:text-white">Join the Waitlist</span>
            </span>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.55, ease }}
          className="mt-10 flex flex-wrap items-center gap-6">
          {details.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-[#8A9BB0]">
              <Icon className="h-4 w-4" /><span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Argument (dark card) ── */
function CourseArgument({ course }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="nw-dark-card relative overflow-hidden px-6 py-10 sm:px-16 sm:py-14"
          style={{ backgroundColor: "#1A2332" }}>
          <div className="pointer-events-none absolute" style={{ top: 79, right: -1, width: SQRT(80), height: 2, backgroundColor: "rgba(80,136,184,0.3)", transformOrigin: "top right", transform: "rotate(45deg)" }} />
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#5088B8]/10 blur-[120px]" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {course.argument.headline}
            </h2>
            <div className="mt-8 space-y-5">
              {course.argument.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-white/60 lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Agenda Chart ── */
function CourseAgenda({ course }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Course Schedule
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {course.agenda.map((block, bi) => (
            <motion.div
              key={bi}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: bi * 0.12, ease }}
              className="nw-card overflow-hidden border border-gray-100 bg-white transition-all duration-500"
            >
              {/* Day header */}
              <div className="px-6 py-5" style={{ backgroundColor: "#1A2332" }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">{block.day}</span>
                </div>
                <h3 className="mt-1 text-xl font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {block.title}
                </h3>
              </div>

              {/* Modules timeline */}
              <div className="p-6">
                <div className="space-y-0">
                  {block.modules.map((mod, mi) => (
                    <div key={mi} className="relative flex gap-4">
                      {/* Timeline line */}
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5088B8]/10 text-xs font-bold text-[#5088B8]">
                          {mod.number}
                        </div>
                        {mi < block.modules.length - 1 && (
                          <div className="w-px flex-1 bg-[#B8D0E4]/30 my-1" />
                        )}
                      </div>

                      {/* Content */}
                      <div className={`flex-1 ${mi < block.modules.length - 1 ? "pb-5" : "pb-0"}`}>
                        <p className="text-xs text-[#8A9BB0] font-medium">{mod.time}</p>
                        <p className="mt-0.5 text-sm font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {mod.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Curriculum Deep Dive ── */
function CourseCurriculum({ course }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            What You'll Learn
          </h2>
          <p className="mt-4 text-base text-[#8A9BB0] lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Every module includes hands-on exercises using your real business challenges — not hypothetical case studies.
          </p>
        </motion.div>

        <div className="space-y-6">
          {course.curriculum.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="nw-card overflow-hidden border border-gray-100 bg-white transition-all duration-500 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Module info */}
                <div className="px-6 py-5 md:w-64 md:flex-shrink-0 flex flex-col justify-center" style={{ backgroundColor: "#1A2332" }}>
                  <span className="text-xs font-semibold text-white/40 tracking-wider uppercase">Module {i + 1}</span>
                  <h3 className="mt-1 text-lg font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>{mod.title}</h3>
                  <span className="mt-2 text-xs text-white/30">{mod.duration}</span>
                </div>

                {/* Right: Description + exercise */}
                <div className="flex-1 p-6">
                  <p className="text-sm leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{mod.description}</p>
                  {mod.exercise && (
                    <div className="mt-4 flex items-start gap-3 rounded-lg bg-[#F4F7FA] px-4 py-3 border border-gray-100">
                      <CheckCircle2 className="h-4 w-4 text-[#5088B8] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-[#1A2332]">Hands-On Exercise</p>
                        <p className="mt-0.5 text-xs text-[#4E6E8E]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{mod.exercise}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Audience ── */
function CourseAudience({ course }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Who This Is For
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {course.whoItsFor.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="nw-card-sm group flex items-start gap-4 overflow-hidden border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#5088B8]/10">
                <CheckCircle2 className="h-5 w-5 text-[#5088B8]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</h4>
                <p className="mt-1 text-xs text-[#8A9BB0]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Format & Pricing ── */
function CourseFormat({ course }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Format & Pricing
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Details card */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease }}
            className="nw-card overflow-hidden border border-gray-100 bg-white lg:col-span-2">
            <div className="p-8">
              <h3 className="mb-6 text-xl font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Course Details</h3>
              <div className="space-y-5">
                {[
                  { label: "Duration", value: course.duration },
                  { label: "Format", value: course.format },
                  { label: "Class Size", value: course.cohortSize },
                  { label: "Price", value: course.priceRange },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-[#8A9BB0]">{item.label}</span>
                    <span className="text-sm font-semibold text-[#1A2332]">{item.value}</span>
                  </div>
                ))}
              </div>
              {course.priceNote && <p className="mt-5 text-xs font-medium text-[#5088B8]">{course.priceNote}</p>}
            </div>
          </motion.div>

          {/* What's included */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2, ease }}
            className="nw-card overflow-hidden border border-gray-100 bg-white lg:col-span-3">
            <div className="relative">
              <div className="pointer-events-none absolute z-10" style={{ top: 49, right: -1, width: SQRT(50), height: 2, backgroundColor: "#E5E7EB", transformOrigin: "top right", transform: "rotate(45deg)" }} />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="mb-6 text-xl font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>What You Get</h3>
              <ul className="space-y-4">
                {course.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#5088B8] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function CourseFAQ({ course }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {course.faq.map((item, i) => (
            <FAQItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, index, inView }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className={`nw-card-sm overflow-hidden border bg-white transition-all duration-300 ${open ? "border-[#5088B8]/30 shadow-lg shadow-black/5" : "border-gray-100 hover:shadow-md"}`}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-6 py-5 text-left">
        <span className="text-sm font-semibold text-[#1A2332] pr-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.q}</span>
        <span className={`text-lg text-[#8A9BB0] transition-transform duration-200 flex-shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-4 sm:px-6 pb-5">
          <p className="text-sm leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.a}</p>
        </div>
      )}
    </motion.div>
  );
}

/* ── Waitlist Form ── */
function WaitlistForm({ course }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [focused, setFocused] = useState(null);

  return (
    <section id="waitlist" ref={ref} className="px-4 sm:px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-[#1A2332] sm:text-4xl lg:text-5xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Join the Waitlist
          </h2>
          <p className="mt-4 text-base text-[#8A9BB0] lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Be the first to know when the next {course.title} cohort opens. No commitment — just a heads up.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease }}
          className="nw-card mx-auto max-w-2xl overflow-hidden border border-gray-100 bg-white">
          <div className="p-8 sm:p-10">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                {[{ name: "firstName", label: "First name", placeholder: "Jane" }, { name: "lastName", label: "Last name", placeholder: "Smith" }].map((field) => (
                  <div key={field.name}>
                    <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">{field.label}</label>
                    <input type="text" placeholder={field.placeholder} onFocus={() => setFocused(field.name)} onBlur={() => setFocused(null)}
                      className={`w-full border bg-[#F4F7FA] px-4 py-3 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 ${focused === field.name ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
                      style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "3px" }} />
                  </div>
                ))}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">Email</label>
                <input type="email" placeholder="jane@company.com" onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                  className={`w-full border bg-[#F4F7FA] px-4 py-3 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 ${focused === "email" ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
                  style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "3px" }} />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">Company</label>
                <input type="text" placeholder="Your organization" onFocus={() => setFocused("company")} onBlur={() => setFocused(null)}
                  className={`w-full border bg-[#F4F7FA] px-4 py-3 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 ${focused === "company" ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
                  style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "3px" }} />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#1A2332]">Message (optional)</label>
                <textarea rows={3} placeholder="Anything we should know about your team or goals..."
                  onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                  className={`w-full resize-none border bg-[#F4F7FA] px-4 py-3 text-sm text-[#1A2332] outline-none transition-all duration-200 placeholder:text-[#8A9BB0]/40 ${focused === "message" ? "border-[#5088B8] ring-2 ring-[#5088B8]/10" : "border-gray-200 hover:border-gray-300"}`}
                  style={{ fontFamily: "'DM Sans', sans-serif", borderRadius: "3px" }} />
              </div>

              <button type="submit"
                className="nw-card-sm group inline-flex w-full items-center justify-center gap-2 bg-[#1A2332] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2A3B4E]"
                style={{ minHeight: "52px" }}>
                Join the Waitlist <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Bottom CTA ── */
function CourseCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 pt-8 pb-16">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
        className="nw-dark-card relative mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:px-16 sm:py-14"
        style={{ backgroundColor: "#1A2332" }}>
        <div className="pointer-events-none absolute" style={{ top: 79, right: -1, width: SQRT(80), height: 2, backgroundColor: "rgba(80,136,184,0.3)", transformOrigin: "top right", transform: "rotate(45deg)" }} />
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#5088B8]/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Ready to invest in your team?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 lg:text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Secure your spot or reach out with questions. We're here to help you build the right thing.
          </p>
          <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/numbers-west/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#1A2332] transition-all duration-200 hover:bg-gray-100" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Join the Waitlist <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
