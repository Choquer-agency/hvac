import { useMemo } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  Outlet,
} from "react-router-dom";
import { ConfigProvider } from "./context/ConfigProvider";
import { resolveConfig } from "./config/resolve-config";
import BaseLayout from "./layouts/BaseLayout";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import ServiceAreaDetailPage from "./pages/ServiceAreaDetailPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function ClientShell() {
  const { clientSlug } = useParams();

  const { config, error } = useMemo(() => {
    try {
      return { config: resolveConfig(clientSlug), error: null };
    } catch (err) {
      console.error("Config resolution error for slug:", clientSlug, err);
      return { config: null, error: err.message };
    }
  }, [clientSlug]);

  if (error) {
    return (
      <div style={{ padding: 40, textAlign: "center", fontFamily: "sans-serif" }}>
        <p>Something went wrong loading this demo.</p>
        <p style={{ color: "red", fontSize: 12 }}>{error}</p>
      </div>
    );
  }

  if (!config) {
    return <LandingPage />;
  }

  return (
    <ConfigProvider config={config}>
      <Outlet />
    </ConfigProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/:clientSlug",
    element: <ClientShell />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "about", element: <AboutPage /> },
          { path: "services", element: <ServicesPage /> },
          { path: "services/:slug", element: <ServiceDetailPage /> },
          { path: "service-areas", element: <ServiceAreasPage /> },
          { path: "service-areas/:slug", element: <ServiceAreaDetailPage /> },
          { path: "reviews", element: <ReviewsPage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <LandingPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
