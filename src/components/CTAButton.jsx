import { Link } from "react-router-dom";

export default function CTAButton({ label, href, variant = "primary", className = "" }) {
  const base = "inline-block font-semibold rounded-lg transition-all duration-200 text-center";
  const variants = {
    primary: "bg-accent text-white px-8 py-3 text-lg hover:bg-accent-dark shadow-lg hover:shadow-xl",
    secondary: "border-2 border-white text-white px-8 py-3 text-lg hover:bg-white hover:text-surface-dark",
    secondaryDark: "border-2 border-accent text-accent px-8 py-3 text-lg hover:bg-accent hover:text-white",
    small: "bg-accent text-white px-5 py-2 text-sm hover:bg-accent-dark",
    nav: "bg-accent text-white px-5 py-2.5 text-sm font-semibold hover:bg-accent-dark rounded-lg",
    ctaWhite: "bg-white text-brand px-8 py-3 text-lg hover:bg-gray-100 shadow-lg hover:shadow-xl font-bold",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href?.startsWith("tel:") || href?.startsWith("http") || href?.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {label}
    </Link>
  );
}
