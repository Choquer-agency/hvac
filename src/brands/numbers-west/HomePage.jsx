import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./theme.css";
import config from "./config";
import { useBrandMeta } from "../../shared/hooks/useBrandMeta";

// Layout
import SiteBackground from "./components/SiteBackground";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Home page sections (Nexus UI)
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import CoursesSection from "./components/CoursesSection";
import AboutSection from "./components/AboutSection";
import StaggerTestimonials from "./components/StaggerTestimonials";
import ContactSection from "./components/ContactSection";
import Newsletter from "./components/Newsletter";

// Sub-pages
import CoursePageTemplate from "./components/CoursePageTemplate";
import ConsultingPage from "./components/ConsultingPage";
import AboutPage from "./components/AboutPage";
import ContentPage from "./components/ContentPage";
import ContactPage from "./components/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <CoursesSection />
      <AboutSection />
      <StaggerTestimonials />
      <ContactSection />
      <Newsletter />
    </>
  );
}

export default function HomePage() {
  useBrandMeta("numbers-west", config.companyName);
  const location = useLocation();
  const path = location.pathname.replace(/^\/numbers-west\/?/, "");

  let pageContent;
  if (path === "" || path === "/") {
    pageContent = <Home />;
  } else if (path.startsWith("courses/")) {
    const slug = path.replace("courses/", "").replace(/\/$/, "");
    pageContent = <CoursePageTemplate slug={slug} />;
  } else if (path === "consulting") {
    pageContent = <ConsultingPage />;
  } else if (path === "about") {
    pageContent = <AboutPage />;
  } else if (path === "content") {
    pageContent = <ContentPage />;
  } else if (path === "contact") {
    pageContent = <ContactPage />;
  } else {
    pageContent = (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A2332] mb-2">Page not found</h1>
          <p className="text-[#8A9BB0]">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div data-brand="numbers-west" className="relative min-h-screen overflow-hidden bg-[#F4F7FA]">
      <ScrollToTop />
      <SiteBackground />
      <Nav />
      <main className="relative z-10">
        {pageContent}
      </main>
      <Footer />
    </div>
  );
}
