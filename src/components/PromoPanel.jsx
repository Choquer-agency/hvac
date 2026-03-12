import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const STRIPE_LINK = "https://buy.stripe.com/eVq14o1Lk776832ea64c804";
const BOOKING_LINK = "https://cal.com/brycechoquer/website-subscription-onboarding";

const benefits = [
  "No setup fees",
  "Month to month, cancel anytime",
  "Hosting included",
  "Ready to go live today",
  "Up to 2 hours of changes included",
];

export default function PromoPanel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState("minimized");

  useEffect(() => {
    if (searchParams.get("payment") === "success") {
      localStorage.removeItem("promo-minimized");
      setStatus("success");
      searchParams.delete("payment");
      setSearchParams(searchParams, { replace: true });
      return;
    }

    if (localStorage.getItem("promo-minimized")) return;

    const timer = setTimeout(() => setStatus("open"), 800);
    return () => clearTimeout(timer);
  }, []);

  const minimize = () => {
    setStatus("minimized");
    localStorage.setItem("promo-minimized", "1");
  };

  const isOpen = status === "open" || status === "success";

  return (
    <div className="fixed top-0 right-0 h-full z-[60] pointer-events-none">
      {/* Minimized tab */}
      <button
        onClick={() => setStatus("open")}
        className={`pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 text-white px-3.5 py-6 rounded-l-lg shadow-lg cursor-pointer transition-all duration-300 ${
          isOpen ? "opacity-0 pointer-events-none translate-x-full" : "opacity-100 translate-x-0"
        }`}
        style={{ background: "#FF9500" }}
        aria-label="Open special offer"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white" />
        </span>
        <span className="[writing-mode:vertical-rl] rotate-180 text-base font-bold tracking-wide whitespace-nowrap">
          $295/mo
        </span>
      </button>

      {/* Panel */}
      <aside
        role="complementary"
        aria-label="Special offer"
        className={`pointer-events-auto absolute top-1/2 -translate-y-1/2 right-0 w-[calc(100vw-48px)] max-w-[340px] shadow-[-8px_0_30px_rgba(0,0,0,0.15)] rounded-l-2xl transition-transform duration-500 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "#FFEFE4" }}
      >
        <div className="p-6 flex flex-col">
          {/* Close button */}
          <button
            onClick={minimize}
            className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors cursor-pointer"
            aria-label="Close offer panel"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {status === "success" ? (
            /* ── Success State ── */
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(255,149,0,0.2)" }}>
                <svg className="w-8 h-8" style={{ color: "#FF9500" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black">You're All Set!</h2>
              <p className="text-black/60 text-sm leading-relaxed">
                Your subscription is confirmed at <span className="font-semibold" style={{ color: "#FF9500" }}>$295/mo</span>.
                Let's get your website live.
              </p>
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-200 text-center text-sm"
                style={{ background: "#FF9500" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#E08600")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#FF9500")}
              >
                Book Your Onboarding Call
              </a>
              <p className="text-black/40 text-xs leading-relaxed">
                We'll walk through your site, discuss any changes you'd like, and get everything live. Come prepared with any images, bios, or content you want updated.
              </p>
            </div>
          ) : (
            /* ── Sales State ── */
            <div className="flex-1 flex flex-col gap-5 pt-4">
              {/* Logo */}
              <img
                src="/images/Choquer Agency Logo Dark.svg"
                alt="Choquer Agency"
                className="h-5 w-auto self-start"
              />

              {/* Headline */}
              <h2 className="text-xl font-bold text-black leading-tight">
                Your Website Is<br />Ready to Go Live
              </h2>

              {/* Price block */}
              <div className="flex items-baseline gap-3">
                <span className="text-black/30 text-lg line-through">$495/mo</span>
                <span className="text-3xl font-bold" style={{ color: "#FF9500" }}>$295<span className="text-lg font-medium">/mo</span></span>
              </div>

              {/* Benefits */}
              <ul className="flex flex-col gap-2.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-black/70 text-sm">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#FF9500" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Urgency */}
              <div className="rounded-xl p-4 border" style={{ background: "rgba(255,149,0,0.1)", borderColor: "rgba(255,149,0,0.2)" }}>
                <p className="text-sm font-semibold flex items-center gap-2" style={{ color: "#CC7700" }}>
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Lock in by March 20th
                </p>
                <p className="text-black/50 text-xs mt-1.5 leading-relaxed">
                  Price increases to $495/mo after this date.
                </p>
              </div>

              {/* CTA */}
              <a
                href={STRIPE_LINK}
                className="w-full text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-200 text-center text-sm hover:shadow-lg"
                style={{ background: "#FF9500" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#E08600")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#FF9500")}
              >
                Lock In Your Subscription
              </a>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
