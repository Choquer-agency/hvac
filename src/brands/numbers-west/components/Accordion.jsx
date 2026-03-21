import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items, renderTitle, renderContent }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`rounded-xl border transition-all duration-200 ${isOpen ? "border-[#5088B8]/30 bg-white shadow-sm" : "border-[#B8D0E4]/20 bg-white/60 hover:bg-white"}`}>
            <button onClick={() => setOpenIndex(isOpen ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
              <div className="flex-1 pr-4">
                {renderTitle ? renderTitle(item, i) : (
                  <span className="text-sm font-semibold text-[#1A2332] md:text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title || item.q}</span>
                )}
              </div>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-5 w-5 text-[#8A9BB0] flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                  <div className="px-5 pb-4">
                    {renderContent ? renderContent(item, i) : (
                      <p className="text-sm leading-relaxed text-[#8A9BB0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.description || item.a}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
