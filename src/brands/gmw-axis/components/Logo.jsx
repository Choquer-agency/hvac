export default function Logo({ className = "h-10 md:h-12 w-auto" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="38"
        fontFamily="'Space Grotesk', 'Helvetica Neue', sans-serif"
        fontSize="36"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-1"
      >
        GMW
      </text>
      <text
        x="108"
        y="38"
        fontFamily="'Space Grotesk', 'Helvetica Neue', sans-serif"
        fontSize="36"
        fontWeight="300"
        fill="currentColor"
        letterSpacing="-1"
      >
        Inspections
      </text>
    </svg>
  );
}
