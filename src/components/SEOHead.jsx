import { useEffect } from "react";
import { useConfig } from "../hooks/useConfig";

export default function SEOHead({ title, description }) {
  const config = useConfig();

  useEffect(() => {
    document.title = title
      ? `${title}${config.seo.titleSuffix}`
      : config.companyFullName;

    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = description || config.seo.defaultDescription;
    if (metaDesc) {
      metaDesc.setAttribute("content", desc);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = desc;
      document.head.appendChild(meta);
    }
  }, [title, description, config]);

  return null;
}
