/**
 * Pitch graphic. Sol thesis 2026-08-23: two planes, one gold owner.
 * Not a second film. No Why / Why now labels.
 */
export default function TwoPlanes() {
  return (
    <figure className="two-planes mx-auto max-w-[36rem]">
      <svg
        viewBox="0 0 640 300"
        role="img"
        aria-label="Application layer below, Enterprise-Agentics above, one owner at the center."
      >
        <polygon
          className="two-planes-app"
          points="48,168 592,168 548,236 92,236"
          fill="#FBF9F4"
          stroke="#142840"
          strokeWidth="1.25"
        />
        <polygon
          className="two-planes-ag"
          points="92,64 548,64 592,132 48,132"
          fill="#142840"
          fillOpacity="0.88"
        />
        <line
          className="two-planes-line"
          x1="320"
          y1="150"
          x2="320"
          y2="168"
          stroke="#FACC15"
          strokeWidth="1.5"
        />
        <line
          className="two-planes-line"
          x1="320"
          y1="150"
          x2="320"
          y2="132"
          stroke="#FACC15"
          strokeWidth="1.5"
        />
        <circle
          className="two-planes-gold"
          cx="320"
          cy="150"
          r="9"
          fill="#FACC15"
        />
      </svg>
    </figure>
  );
}
