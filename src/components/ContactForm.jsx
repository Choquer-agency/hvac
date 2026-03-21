import { useState } from "react";
import { useConfig } from "../hooks/useConfig";

export default function ContactForm() {
  const config = useConfig();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand/5 border border-brand/20 rounded-xl p-8 text-center">
        <svg className="w-16 h-16 text-brand mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-surface-dark mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We&apos;ve received your message and will get back to you within the hour.
          For immediate assistance, call us at{" "}
          <a href={`tel:${config.phoneRaw}`} className="text-brand font-semibold">
            {config.phone}
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
            placeholder="(404) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm bg-white"
        >
          <option value="">Select a service...</option>
          {config.services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm resize-none"
          placeholder="Tell us about your roofing needs or what service you're looking for..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-white font-semibold py-3.5 rounded-lg hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl text-lg"
      >
        Schedule Service
      </button>
      <p className="text-xs text-gray-500 text-center">
        Or call us directly at{" "}
        <a href={`tel:${config.phoneRaw}`} className="text-brand font-medium">
          {config.phone}
        </a>
      </p>
    </form>
  );
}
