import "./theme.css";
import SiteBackground from "./components/SiteBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import CoursesSection from "./components/CoursesSection";
import AboutSection from "./components/AboutSection";
import StaggerTestimonials from "./components/StaggerTestimonials";
import ContactSection from "./components/ContactSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import config from "./config";
import { useBrandMeta } from "../../shared/hooks/useBrandMeta";

export default function HomePage() {
  useBrandMeta("nexus", config.companyName);

  return (
    <div data-brand="nexus" className="relative min-h-screen overflow-hidden bg-[#FAFAF8]">
      <SiteBackground />
      <Nav />
      <Hero />
      <VideoSection />
      <CoursesSection />
      <AboutSection />
      <StaggerTestimonials />
      <ContactSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
