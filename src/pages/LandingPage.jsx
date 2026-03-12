export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <img
          src="/images/Choquer Agency Logo Dark.svg"
          alt="Choquer Agency"
          className="h-12 mx-auto mb-8"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Your HVAC Website Demo
        </h1>
        <p className="text-gray-600 leading-relaxed">
          If you received a personalized demo link from Choquer Agency, please
          use that link to view your custom website preview.
        </p>
        <p className="text-gray-500 text-sm mt-6">
          Questions?{" "}
          <a
            href="https://choquer.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Contact Choquer Agency
          </a>
        </p>
      </div>
    </div>
  );
}
