import type { CSSProperties } from "react";

const CX = 68;
const CY = 68;
const ORBIT = 46;
const DOCKS = 8;

const docks = Array.from({ length: DOCKS }, (_, i) => {
  const a = (i * Math.PI * 2) / DOCKS - Math.PI / 2;
  return {
    x: CX + ORBIT * Math.cos(a),
    y: CY + ORBIT * Math.sin(a),
    dx: ORBIT * Math.cos(a),
    dy: ORBIT * Math.sin(a),
    delay: `${i * 0.08}s`,
  };
});

export default function SystemverseLoop() {
  return (
    <svg
      className="systemverse-loop"
      viewBox="0 0 136 136"
      width={136}
      height={136}
      role="img"
      aria-label="Gold leaves the data core and docks on the application circles."
    >
      <circle
        cx={CX}
        cy={CY}
        r={ORBIT}
        fill="none"
        stroke="#1F2937"
        strokeOpacity="0.22"
        strokeWidth="1"
      />
      {docks.map((d) => (
        <line
          key={`spoke-${d.x}-${d.y}`}
          x1={CX}
          y1={CY}
          x2={d.x}
          y2={d.y}
          stroke="#1F2937"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
      ))}
      {docks.map((d) => (
        <g key={`dock-${d.x}-${d.y}`}>
          <circle
            cx={d.x}
            cy={d.y}
            r="9"
            fill="#FBF9F4"
            stroke="#142840"
            strokeWidth="1.5"
          />
          <circle
            className="sv-dock-fill"
            cx={d.x}
            cy={d.y}
            r="9"
            fill="#FACC15"
            style={{ animationDelay: d.delay }}
          />
        </g>
      ))}
      <circle
        cx={CX}
        cy={CY}
        r="16"
        fill="#FACC15"
        stroke="#142840"
        strokeWidth="1.6"
      />
      {docks.map((d) => (
        <circle
          key={`worker-${d.x}-${d.y}`}
          className="sv-worker"
          cx={CX}
          cy={CY}
          r="3.2"
          fill="#FACC15"
          stroke="#142840"
          strokeWidth="0.7"
          style={
            {
              "--dx": `${d.dx}px`,
              "--dy": `${d.dy}px`,
              animationDelay: d.delay,
            } as CSSProperties
          }
        />
      ))}
    </svg>
  );
}
