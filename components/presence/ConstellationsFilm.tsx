"use client";

export default function ConstellationsFilm({ size = 80 }: { size?: number }) {
  return (
    <div
      className="constellations-film-badge"
      style={{ width: size, height: size, minWidth: size }}
      role="img"
      aria-label="Six Process Constellations live telemetry animation"
    >
      <svg
        className="constellations-film-svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FACC15" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Deep Navy / Dark Base Disc */}
        <circle cx="50" cy="50" r="48" fill="#0B1624" stroke="rgba(250, 204, 21, 0.3)" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="42" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="2,2" />

        {/* 6 Radial Connectivity Spokes */}
        <g stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" strokeDasharray="2,2">
          <line x1="50" y1="50" x2="50" y2="16" />
          <line x1="50" y1="50" x2="79.4" y2="33" />
          <line x1="50" y1="50" x2="79.4" y2="67" />
          <line x1="50" y1="50" x2="50" y2="84" />
          <line x1="50" y1="50" x2="20.6" y2="67" />
          <line x1="50" y1="50" x2="20.6" y2="33" />
        </g>

        {/* Traveling Golden Pulse Packets (Continuous Radial Flow from Data Core Outward) */}
        <g className="spoke-packets">
          {/* Spoke 0 (P2P · 12 o'clock: 50,50 -> 50,16) */}
          <circle cx="50" cy="50" r="2.4" fill="#FFFBEB">
            <animate attributeName="cx" values="50; 50" dur="2.4s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="cy" values="50; 16" dur="2.4s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.4s" repeatCount="indefinite" begin="0s" />
          </circle>

          {/* Spoke 1 (O2C · 2 o'clock: 50,50 -> 79.4,33) */}
          <circle cx="50" cy="50" r="2.4" fill="#FACC15">
            <animate attributeName="cx" values="50; 79.4" dur="2.4s" repeatCount="indefinite" begin="0.4s" />
            <animate attributeName="cy" values="50; 33" dur="2.4s" repeatCount="indefinite" begin="0.4s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.4s" repeatCount="indefinite" begin="0.4s" />
          </circle>

          {/* Spoke 2 (P2M · 4 o'clock: 50,50 -> 79.4,67) */}
          <circle cx="50" cy="50" r="2.4" fill="#FACC15">
            <animate attributeName="cx" values="50; 79.4" dur="2.4s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="cy" values="50; 67" dur="2.4s" repeatCount="indefinite" begin="0.8s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.4s" repeatCount="indefinite" begin="0.8s" />
          </circle>

          {/* Spoke 3 (S2S · 6 o'clock: 50,50 -> 50,84) */}
          <circle cx="50" cy="50" r="2.4" fill="#FFFBEB">
            <animate attributeName="cx" values="50; 50" dur="2.4s" repeatCount="indefinite" begin="1.2s" />
            <animate attributeName="cy" values="50; 84" dur="2.4s" repeatCount="indefinite" begin="1.2s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.4s" repeatCount="indefinite" begin="1.2s" />
          </circle>

          {/* Spoke 4 (D2R · 8 o'clock: 50,50 -> 20.6,67) */}
          <circle cx="50" cy="50" r="2.4" fill="#FACC15">
            <animate attributeName="cx" values="50; 20.6" dur="2.4s" repeatCount="indefinite" begin="1.6s" />
            <animate attributeName="cy" values="50; 67" dur="2.4s" repeatCount="indefinite" begin="1.6s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.4s" repeatCount="indefinite" begin="1.6s" />
          </circle>

          {/* Spoke 5 (MDM · 10 o'clock: 50,50 -> 20.6,33) */}
          <circle cx="50" cy="50" r="2.4" fill="#FACC15">
            <animate attributeName="cx" values="50; 20.6" dur="2.4s" repeatCount="indefinite" begin="2.0s" />
            <animate attributeName="cy" values="50; 33" dur="2.4s" repeatCount="indefinite" begin="2.0s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.4s" repeatCount="indefinite" begin="2.0s" />
          </circle>
        </g>

        {/* 6 Outer Process Constellation Nodes */}
        {/* P2P · 12 o'clock */}
        <g className="c-node c-node-0">
          <circle cx="50" cy="16" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="50" cy="16" r="2.5" fill="#FBF9F4" />
        </g>

        {/* O2C · 2 o'clock */}
        <g className="c-node c-node-1">
          <circle cx="79.4" cy="33" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="79.4" cy="33" r="2.5" fill="#FBF9F4" />
        </g>

        {/* P2M · 4 o'clock */}
        <g className="c-node c-node-2">
          <circle cx="79.4" cy="67" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="79.4" cy="67" r="2.5" fill="#FBF9F4" />
        </g>

        {/* S2S · 6 o'clock */}
        <g className="c-node c-node-3">
          <circle cx="50" cy="84" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="50" cy="84" r="2.5" fill="#FBF9F4" />
        </g>

        {/* D2R · 8 o'clock */}
        <g className="c-node c-node-4">
          <circle cx="20.6" cy="67" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="20.6" cy="67" r="2.5" fill="#FBF9F4" />
        </g>

        {/* MDM · 10 o'clock */}
        <g className="c-node c-node-5">
          <circle cx="20.6" cy="33" r="6" fill="#142840" stroke="#FACC15" strokeWidth="1.2" />
          <circle cx="20.6" cy="33" r="2.5" fill="#FBF9F4" />
        </g>

        {/* Central Sovereign Data Core */}
        <circle cx="50" cy="50" r="14" fill="url(#coreGlow)">
          <animate attributeName="r" values="12; 15; 12" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4; 0.9; 0.4" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" r="9.5" fill="#FACC15" stroke="#142840" strokeWidth="1.8" />
        <rect x="47.5" y="47.5" width="5" height="5" fill="#142840" />
      </svg>
    </div>
  );
}
