import { Link } from "react-router-dom";
import { useClientPath } from "../hooks/useClientPath";
import SEOHead from "../components/SEOHead";

export default function NotFoundPage() {
  const clientPath = useClientPath();

  return (
    <>
      <SEOHead title="Page Not Found" />
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
        <h2 className="text-2xl font-bold text-surface-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to={clientPath("/")}
          className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors"
        >
          Go Home
        </Link>
      </div>
    </>
  );
}
