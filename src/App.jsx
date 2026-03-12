import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "./context/ConfigProvider";
import BaseLayout from "./layouts/BaseLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import ServiceAreaDetailPage from "./pages/ServiceAreaDetailPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}
