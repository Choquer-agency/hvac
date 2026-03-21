import { useEffect } from "react";

export function useBrandMeta(brandSlug, companyName) {
  useEffect(() => {
    // Set favicon
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = `/images/${brandSlug}/favicon.svg`;
    }
    // Set page title
    document.title = companyName || "Contractor Showcase";

    return () => {
      document.title = "Contractor Showcase";
    };
  }, [brandSlug, companyName]);
}
