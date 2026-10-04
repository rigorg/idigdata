"use client";

export default function DirectSignalObject({ size = 220 }: { size?: number }) {
  return (
    <div
      className="direct-signal-console"
      style={{ width: size, height: size }}
      role="img"
      aria-label="The Kinetic Lattice Matrix: Direct Owner Core"
    >
      <svg
        className="direct-signal-svg"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Architectural Paper Plate */}
        <rect width="220" height="220" rx="110" fill="#F3ECE0" stroke="rgba(20, 40, 64, 0.18)" strokeWidth="1.5" />
        
        {/* Subtle Outer Calibration Ring */}
        <circle cx="110" cy="110" r="98" stroke="rgba(20, 40, 64, 0.08)" strokeWidth="1" />
        <circle cx="110" cy="110" r="80" stroke="rgba(20, 40, 64, 0.12)" strokeWidth="1" strokeDasharray="2,3" />

        {/* Golden Seam Channels (The Joints Where the Business Runs) */}
        <g className="lattice-seams">
          {/* Horizontal Seams */}
          <line x1="50" y1="88" x2="170" y2="88" stroke="#FACC15" strokeWidth="2" strokeDasharray="4,4" opacity="0.7" />
          <line x1="50" y1="132" x2="170" y2="132" stroke="#FACC15" strokeWidth="2" strokeDasharray="4,4" opacity="0.7" />
          
          {/* Vertical Seams */}
          <line x1="88" y1="50" x2="88" y2="170" stroke="#FACC15" strokeWidth="2" strokeDasharray="4,4" opacity="0.7" />
          <line x1="132" y1="50" x2="132" y2="170" stroke="#FACC15" strokeWidth="2" strokeDasharray="4,4" opacity="0.7" />

          {/* Diagonal Energy Vectors Converging on Center */}
          <line x1="66" y1="66" x2="110" y2="110" stroke="rgba(250, 204, 21, 0.5)" strokeWidth="1.2" />
          <line x1="154" y1="66" x2="110" y2="110" stroke="rgba(250, 204, 21, 0.5)" strokeWidth="1.2" />
          <line x1="66" y1="154" x2="110" y2="110" stroke="rgba(250, 204, 21, 0.5)" strokeWidth="1.2" />
          <line x1="154" y1="154" x2="110" y2="110" stroke="rgba(250, 204, 21, 0.5)" strokeWidth="1.2" />
        </g>

        {/* Traveling Golden Pulse Packets along Seams (Inward Stream) */}
        <g className="seam-pulses">
          {/* Top-Left to Center */}
          <circle cx="66" cy="66" r="3.5" fill="#FACC15" filter="url(#goldGlow)">
            <animate attributeName="cx" values="66; 110" dur="2.8s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="cy" values="66; 110" dur="2.8s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.8s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="r" values="2; 3.5; 3.5; 2" keyTimes="0; 0.2; 0.8; 1" dur="2.8s" repeatCount="indefinite" begin="0s" />
          </circle>

          {/* Top-Right to Center */}
          <circle cx="154" cy="66" r="3.5" fill="#FACC15" filter="url(#goldGlow)">
            <animate attributeName="cx" values="154; 110" dur="2.8s" repeatCount="indefinite" begin="0.7s" />
            <animate attributeName="cy" values="66; 110" dur="2.8s" repeatCount="indefinite" begin="0.7s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.8s" repeatCount="indefinite" begin="0.7s" />
            <animate attributeName="r" values="2; 3.5; 3.5; 2" keyTimes="0; 0.2; 0.8; 1" dur="2.8s" repeatCount="indefinite" begin="0.7s" />
          </circle>

          {/* Bottom-Left to Center */}
          <circle cx="66" cy="154" r="3.5" fill="#FACC15" filter="url(#goldGlow)">
            <animate attributeName="cx" values="66; 110" dur="2.8s" repeatCount="indefinite" begin="1.4s" />
            <animate attributeName="cy" values="154; 110" dur="2.8s" repeatCount="indefinite" begin="1.4s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.8s" repeatCount="indefinite" begin="1.4s" />
            <animate attributeName="r" values="2; 3.5; 3.5; 2" keyTimes="0; 0.2; 0.8; 1" dur="2.8s" repeatCount="indefinite" begin="1.4s" />
          </circle>

          {/* Bottom-Right to Center */}
          <circle cx="154" cy="154" r="3.5" fill="#FACC15" filter="url(#goldGlow)">
            <animate attributeName="cx" values="154; 110" dur="2.8s" repeatCount="indefinite" begin="2.1s" />
            <animate attributeName="cy" values="154; 110" dur="2.8s" repeatCount="indefinite" begin="2.1s" />
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="2.8s" repeatCount="indefinite" begin="2.1s" />
            <animate attributeName="r" values="2; 3.5; 3.5; 2" keyTimes="0; 0.2; 0.8; 1" dur="2.8s" repeatCount="indefinite" begin="2.1s" />
          </circle>
        </g>

        {/* 3x3 Lattice Blocks (The Authentic idigdata M4 Mark Geometry) */}
        {/* 4 Navy Corner Blocks (Filled Structure) */}
        <rect x="52" y="52" width="28" height="28" rx="2" fill="#142840" stroke="#0B1624" strokeWidth="1.5" />
        <rect x="140" y="52" width="28" height="28" rx="2" fill="#142840" stroke="#0B1624" strokeWidth="1.5" />
        <rect x="52" y="140" width="28" height="28" rx="2" fill="#142840" stroke="#0B1624" strokeWidth="1.5" />
        <rect x="140" y="140" width="28" height="28" rx="2" fill="#142840" stroke="#0B1624" strokeWidth="1.5" />

        {/* 4 Navy Middle Frames (Outlined Open Connectors) */}
        <rect x="96" y="54" width="28" height="24" rx="2" fill="#FBF9F4" stroke="#142840" strokeWidth="2" />
        <rect x="54" y="96" width="24" height="28" rx="2" fill="#FBF9F4" stroke="#142840" strokeWidth="2" />
        <rect x="142" y="96" width="24" height="28" rx="2" fill="#FBF9F4" stroke="#142840" strokeWidth="2" />
        <rect x="96" y="142" width="28" height="24" rx="2" fill="#FBF9F4" stroke="#142840" strokeWidth="2" />

        {/* Center Accountable Gold Sovereign Core */}
        <g className="kinetic-gold-core">
          {/* Subtle Expanding Gold Radiance */}
          <rect x="91" y="91" width="38" height="38" rx="4" fill="none" stroke="#FACC15" strokeWidth="2">
            <animate attributeName="opacity" values="0.8; 0; 0.8" dur="2.8s" repeatCount="indefinite" />
          </rect>
          
          {/* Solid Gold Owner Cube with Navy Precision Seat */}
          <rect x="94" y="94" width="32" height="32" rx="3" fill="#FACC15" stroke="#142840" strokeWidth="2.5" />
          <rect x="104" y="104" width="12" height="12" fill="#142840" />
        </g>
      </svg>
    </div>
  );
}
