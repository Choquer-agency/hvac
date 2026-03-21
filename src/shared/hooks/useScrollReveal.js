import { useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function useScrollReveal({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
}
