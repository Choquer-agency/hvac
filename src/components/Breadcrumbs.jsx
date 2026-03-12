import { Link } from "react-router-dom";
import { useClientPath } from "../hooks/useClientPath";

export default function Breadcrumbs({ items }) {
  const clientPath = useClientPath();

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <Link to={clientPath("/")} className="hover:text-brand transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-gray-300">/</span>
            {i === items.length - 1 ? (
              <span className="text-gray-700 font-medium">{item.label}</span>
            ) : (
              <Link to={clientPath(item.href)} className="hover:text-brand transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
