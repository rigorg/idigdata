type Variant = "home" | "application" | "agentic" | "contact" | "faq";

const captions: Record<Variant, string | null> = {
  home: "Two operating planes · One accountable gold owner",
  application: "The estate settles. One owner holds the center.",
  agentic: "One path. A person on the last move.",
  contact: "Both planes meet at the threshold.",
  faq: null,
};

export default function TwoPlanes({ variant }: { variant: Variant }) {
  const compact = variant === "faq" || variant === "contact";
  const thinUpper = variant === "application";
  const lastMove = variant === "agentic";
  const cy = compact ? 70 : 110;

  return (
    <figure className={`two-planes two-planes--${variant}`}>
      <svg
        className="two-planes-svg"
        viewBox={compact ? "0 0 640 140" : "0 0 640 220"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={captions[variant] ?? "Two operating planes. One gold owner."}
      >
        <line
          x1="40"
          y1={cy}
          x2="600"
          y2={cy}
          stroke="rgba(20,40,64,0.08)"
          strokeWidth="1"
        />
        <line
          x1="320"
          y1={compact ? "16" : "20"}
          x2="320"
          y2={compact ? "124" : "200"}
          stroke="rgba(20,40,64,0.08)"
          strokeWidth="1"
        />

        <g className="plane-app">
          <polygon
            points={
              compact
                ? "48,118 400,118 560,82 208,82"
                : "56,188 400,188 584,132 240,132"
            }
            fill="#FBF9F4"
            stroke="#142840"
            strokeWidth="1.75"
          />
          <line
            x1="180"
            y1={compact ? "100" : "160"}
            x2="500"
            y2={compact ? "100" : "160"}
            stroke="rgba(20,40,64,0.22)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          {!compact ? (
            <line
              x1="140"
              y1="174"
              x2="460"
              y2="174"
              stroke="rgba(20,40,64,0.18)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          ) : null}
          <rect
            x="306"
            y={compact ? "92" : "152"}
            width="28"
            height={compact ? "14" : "16"}
            fill="rgba(20,40,64,0.08)"
            stroke="#142840"
            strokeWidth="1"
          />
        </g>

        <g className="plane-agentic">
          <polygon
            points={
              thinUpper
                ? "80,78 420,78 560,58 220,58"
                : compact
                  ? "48,58 400,58 560,22 208,22"
                  : "56,88 400,88 584,32 240,32"
            }
            fill="rgba(20,40,64,0.08)"
            stroke="#142840"
            strokeWidth={thinUpper ? "1.25" : "1.75"}
          />
          {!thinUpper ? (
            <line
              x1="180"
              y1={compact ? "40" : "60"}
              x2="500"
              y2={compact ? "40" : "60"}
              stroke="rgba(250,204,21,0.4)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          ) : null}
        </g>

        <g className="plane-vector">
          {lastMove ? (
            <>
              <line
                x1="200"
                y1="50"
                x2="320"
                y2="110"
                stroke="#FACC15"
                strokeWidth="2.25"
                className="plane-stroke"
              />
              <line
                x1="320"
                y1="110"
                x2="320"
                y2="160"
                stroke="rgba(20,40,64,0.45)"
                strokeWidth="1.5"
                className="plane-stroke"
              />
            </>
          ) : (
            <>
              <line
                x1="320"
                y1={compact ? "40" : "60"}
                x2="320"
                y2={compact ? "100" : "160"}
                stroke="#FACC15"
                strokeWidth="2.25"
                className="plane-stroke"
              />
              <line
                x1="250"
                y1={compact ? "48" : "70"}
                x2="320"
                y2={cy}
                stroke="rgba(250,204,21,0.65)"
                strokeWidth="1.2"
                className="plane-stroke"
              />
              <line
                x1="390"
                y1={compact ? "36" : "48"}
                x2="320"
                y2={cy}
                stroke="rgba(250,204,21,0.65)"
                strokeWidth="1.2"
                className="plane-stroke"
              />
              {!compact ? (
                <>
                  <line
                    x1="250"
                    y1="158"
                    x2="320"
                    y2="110"
                    stroke="rgba(250,204,21,0.55)"
                    strokeWidth="1.2"
                    className="plane-stroke"
                  />
                  <line
                    x1="390"
                    y1="142"
                    x2="320"
                    y2="110"
                    stroke="rgba(250,204,21,0.55)"
                    strokeWidth="1.2"
                    className="plane-stroke"
                  />
                </>
              ) : null}
            </>
          )}
        </g>

        <g className="gold-owner-coin">
          <circle cx="320" cy={cy} r="16" fill="rgba(250,204,21,0.22)" />
          <circle
            cx="320"
            cy={cy}
            r="11"
            fill="#FACC15"
            stroke="#142840"
            strokeWidth="2"
          />
          <circle cx="320" cy={cy} r="3.5" fill="#142840" />
        </g>
      </svg>
      {captions[variant] ? (
        <figcaption className="two-planes-caption">{captions[variant]}</figcaption>
      ) : null}
    </figure>
  );
}
