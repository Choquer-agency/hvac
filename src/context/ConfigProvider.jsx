import { createContext, useEffect } from "react";
import config from "../config/client-config";

export const ConfigContext = createContext(null);

export function ConfigProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(config.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, []);

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
