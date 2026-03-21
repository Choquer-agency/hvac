import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useParams,
} from "react-router-dom";
import { ConfigProvider } from "./context/ConfigProvider";
import FontLoader from "./shared/components/FontLoader";

// Lazy-load brand homepages
const brandModules = {
  architect: lazy(() => import("./brands/architect/HomePage")),
  axis: lazy(() => import("./brands/axis/HomePage")),
  evergreen: lazy(() => import("./brands/evergreen/HomePage")),
  handyman: lazy(() => import("./brands/handyman/HomePage")),
  ironwood: lazy(() => import("./brands/ironwood/HomePage")),
  "gmw-architect": lazy(() => import("./brands/gmw-architect/HomePage")),
  "gmw-axis": lazy(() => import("./brands/gmw-axis/HomePage")),
  "tricities-flooring": lazy(() => import("./brands/tricities-flooring/HomePage")),
  ment: lazy(() => import("./brands/ment/HomePage")),
  nexus: lazy(() => import("./brands/nexus/HomePage")),
  "numbers-west": lazy(() => import("./brands/numbers-west/HomePage")),
};

// Lazy-load brand configs
const brandConfigs = {
  architect: () => import("./brands/architect/config"),
  axis: () => import("./brands/axis/config"),
  evergreen: () => import("./brands/evergreen/config"),
  handyman: () => import("./brands/handyman/config"),
  ironwood: () => import("./brands/ironwood/config"),
  "gmw-architect": () => import("./brands/gmw-architect/config"),
  "gmw-axis": () => import("./brands/gmw-axis/config"),
  "tricities-flooring": () => import("./brands/tricities-flooring/config"),
  ment: () => import("./brands/ment/config"),
  nexus: () => import("./brands/nexus/config"),
  "numbers-west": () => import("./brands/numbers-west/config"),
};

const BrandSelector = lazy(() => import("./pages/BrandSelector"));

function BrandShell() {
  const { brandSlug } = useParams();
  const BrandPage = brandModules[brandSlug];

  if (!BrandPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Brand not found</h1>
          <p className="text-gray-500">
            Available brands: {Object.keys(brandModules).join(", ")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
        </div>
      }
    >
      <BrandPage />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={null}>
        <BrandSelector />
      </Suspense>
    ),
  },
  {
    path: "/:brandSlug",
    element: <BrandShell />,
  },
  {
    path: "/:brandSlug/*",
    element: <BrandShell />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
