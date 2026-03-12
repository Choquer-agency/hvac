import { BrowserRouter, Routes, Route, Navigate, useParams, Outlet } from "react-router-dom";
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
  const config = resolveConfig(clientSlug);

  if (!config) {
    return <LandingPage />;
  }

  return (
    <ConfigProvider config={config}>
      <Outlet />
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Client-scoped routes */}
        <Route path="/:clientSlug" element={<ClientShell />}>
          <Route element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetailPage />} />
            <Route path="service-areas" element={<ServiceAreasPage />} />
            <Route path="service-areas/:slug" element={<ServiceAreaDetailPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>

        {/* Catch-all fallback */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
