import { useState, useEffect, useRef, useCallback } from "react";
import { useConfig } from "../hooks/useConfig";

export default function ExitIntentPopup() {
  const config = useConfig();
  const { exitPopup } = config;
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const armed = useRef(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Don't run on touch devices
    if (!window.matchMedia("(hover: hover)").matches) return;
    // Already shown this session
    if (sessionStorage.getItem("exit-popup-shown")) return;

    // Arm after 5 seconds
    const armTimer = setTimeout(() => {
      armed.current = true;
    }, 5000);

    const handleMouseOut = (e) => {
      if (!armed.current) return;
      if (e.clientY <= 0) {
        setVisible(true);
        sessionStorage.setItem("exit-popup-shown", "1");
        armed.current = false;
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  // Escape key to close
  useEffect(() => {
    if (!visible) return;
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible, close]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setSubmitted(true);
    setTimeout(close, 3000);
  };

  // Click outside to close
  const handleBackdropClick = (e) => {
    if (cardRef.current && !cardRef.current.contains(e.target)) {
      close();
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={cardRef}
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-[fadeInUp_0.4s_ease-out]"
      >
        {/* Brand accent bar */}
        <div className="h-1.5 bg-brand" />

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-surface-dark mb-2">
                {exitPopup.successMessage}
              </h3>
              <p className="text-gray-500 text-sm">
                We'll reach out within the hour to get you scheduled.
              </p>
            </div>
          ) : (
            <>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                {exitPopup.promoLabel}
              </div>

              <h2 className="text-2xl font-bold text-surface-dark mb-3 leading-tight">
                {exitPopup.headline}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {exitPopup.body}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="source" value="exit-intent-popup" />
                <input type="hidden" name="promo" value={exitPopup.promoLabel} />
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white font-semibold py-3.5 rounded-lg hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl text-base"
                >
                  Claim My Free Tune-Up
                </button>
                <p className="text-xs text-gray-400 text-center">
                  No spam, ever. We'll just call to schedule your appointment.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
