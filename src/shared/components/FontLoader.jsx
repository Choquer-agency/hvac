import { useEffect } from "react";

const fontUrls = {
  architect:
    "https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap",
  axis:
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap",
  evergreen:
    "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
  handyman:
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Figtree:wght@300;400;500;600&display=swap",
  ironwood:
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap",
  ment:
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap",
};

export default function FontLoader({ brand }) {
  useEffect(() => {
    const url = fontUrls[brand];
    if (!url) return;

    const existing = document.querySelector(`link[data-brand-font="${brand}"]`);
    if (existing) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.setAttribute("data-brand-font", brand);
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [brand]);

  return null;
}
