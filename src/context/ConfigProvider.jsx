import { createContext, useEffect } from "react";

export const ConfigContext = createContext(null);

export function ConfigProvider({ config, children }) {
  useEffect(() => {
    const root = document.documentElement;

    // Set brand identifier
    root.setAttribute("data-brand", config.brandSlug || "");

    // Set color CSS variables
    if (config.colors) {
      Object.entries(config.colors).forEach(([key, value]) => {
        root.style.setProperty(`--brand-${key}`, value);
      });
    }

    // Set font CSS variables
    if (config.fonts) {
      root.style.setProperty("--brand-font-heading", config.fonts.heading);
      root.style.setProperty("--brand-font-body", config.fonts.body);
    }
  }, [config]);

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
