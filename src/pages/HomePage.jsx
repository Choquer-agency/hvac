import SEOHead from "../components/SEOHead";
import Hero from "../components/Hero";
import ProblemGrid from "../components/ProblemGrid";
import TrustSection from "../components/TrustSection";
import ProcessSteps from "../components/ProcessSteps";
import ServiceGrid from "../components/ServiceGrid";
import FinalCTA from "../components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <SEOHead />
      <Hero />

      {/* Sections wrapper with decorative gradient blobs for color flow */}
      <div className="relative overflow-x-clip">
        {/* Blob 1 — between Problems and Trust sections */}
        <div
          className="absolute top-[600px] -left-40 w-[350px] h-[350px] lg:w-[700px] lg:h-[700px] rounded-full opacity-[0.18] blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />

        {/* Blob 2 — right side, bridging Trust and Process */}
        <div
          className="absolute top-[1400px] -right-32 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full opacity-[0.15] blur-[100px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />

        {/* Blob 3 — left side, around Process and Services */}
        <div
          className="absolute top-[2200px] -left-20 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] rounded-full opacity-[0.12] blur-[140px] pointer-events-none"
          style={{ background: "var(--color-secondary)" }}
        />

        {/* Blob 4 — subtle accent blob near Services */}
        <div
          className="absolute top-[2800px] right-0 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full opacity-[0.10] blur-[100px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />

        <ProblemGrid />
        <TrustSection />
        <ProcessSteps />
        <ServiceGrid />
      </div>

      <FinalCTA />
    </>
  );
}
