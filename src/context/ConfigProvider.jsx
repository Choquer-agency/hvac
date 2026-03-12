import { createContext, useEffect } from "react";

export const ConfigContext = createContext(null);

export function ConfigProvider({ config, children }) {
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(config.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [config]);

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
