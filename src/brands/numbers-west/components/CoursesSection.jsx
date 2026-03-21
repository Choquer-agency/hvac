import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];

const tagColors = [
  "bg-[#5088B8]/10 text-[#5088B8]",
  "bg-[#384D68]/10 text-[#384D68]",
  "bg-[#4E6E8E]/10 text-[#4E6E8E]",
];

export default function CoursesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="courses" ref={ref} className="px-4 pt-8 pb-16 sm:px-6 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {config.courses.map((course, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="nw-card group/card relative flex flex-col overflow-hidden border border-gray-100 bg-white transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
              {/* Whole card is a link to the course page */}
              <Link to={`/numbers-west/courses/${course.slug}`} className="absolute inset-0 z-10" aria-label={`View ${course.title} course`} />

              <div className="relative overflow-hidden">
                <img src={course.image} alt={course.title} className="h-56 w-full object-cover transition-transform duration-700 group-hover/card:scale-105" />
                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold backdrop-blur-sm ${tagColors[i] || tagColors[0]}`}
                  style={{ backgroundColor: "rgba(255,255,255,0.85)", borderRadius: "3px", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
                  {course.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{course.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{course.description}</p>

                <div className="mb-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-[#8A9BB0]">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Next cohort: <span className="font-medium text-[#1A2332]">{course.nextDate}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#8A9BB0]">
                    <Clock className="h-3.5 w-3.5" /><span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#8A9BB0]">
                    <Users className="h-3.5 w-3.5" /><span>{course.spots}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xs text-[#8A9BB0]">Starting at</p>
                    <p className="text-2xl font-bold text-[#1A2332]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{course.price}</p>
                  </div>
                  {/* Waitlist button — links to course page #waitlist, sits above the card link */}
                  <Link to={`/numbers-west/courses/${course.slug}#waitlist`}
                    onClick={(e) => e.stopPropagation()}
                    className="group/btn relative z-20 inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1A2332] transition-colors duration-300 hover:text-white">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 160 40" fill="none">
                      <polygon points="1,1 148,1 159,12 159,39 1,39"
                        className="stroke-[#1A2332] fill-transparent transition-all duration-300 group-hover/btn:fill-[#1A2332]"
                        strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Join the Waitlist <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
