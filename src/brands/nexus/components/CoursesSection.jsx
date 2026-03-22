import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import config from "../config";

const ease = [0.22, 1, 0.36, 1];

const tagColors = [
  "bg-[#F4845F]/10 text-[#F4845F]",
  "bg-[#7C3AED]/10 text-[#7C3AED]",
  "bg-[#06D6A0]/20 text-[#059669]",
];

export default function CoursesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="courses" ref={ref} className="px-6 pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {config.courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="group flex flex-col overflow-hidden border border-gray-100 bg-white transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                borderRadius: "12px",
              }}
            >
              {/* Full-bleed image with same clip */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${tagColors[i] || tagColors[0]}`}
                  style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
                >
                  {course.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="mb-2 text-xl font-semibold text-[#1A1A2E]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {course.title}
                </h3>
                <p
                  className="mb-6 flex-1 text-sm leading-relaxed text-[#6B7280]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {course.description}
                </p>

                <div className="mb-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>
                      Next cohort:{" "}
                      <span className="font-medium text-[#1A1A2E]">{course.nextDate}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Users className="h-3.5 w-3.5" />
                    <span>{course.spots}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xs text-[#6B7280]">Starting at</p>
                    <p
                      className="text-2xl font-bold text-[#1A1A2E]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {course.price}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="flex h-11 w-11 items-center justify-center border-2 border-[#1A1A2E] text-[#1A1A2E] transition-all duration-300 hover:bg-[#1A1A2E] hover:text-white"
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
