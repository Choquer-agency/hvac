import { useConfig } from "../hooks/useConfig";
import GoogleRatingBadge from "./GoogleRatingBadge";
import ReviewCard from "./ReviewCard";

export default function TrustSection() {
  const config = useConfig();

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-3">
            Don&apos;t Just Take Our Word For It
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-surface-dark mb-8">
            See What Your{" "}
            <span className="text-brand">{config.address.city}</span>{" "}
            Neighbors Are Saying
          </h2>
          <div className="flex justify-center">
            <GoogleRatingBadge />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {config.reviews.featured.slice(0, 3).map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
