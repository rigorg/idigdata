"use client";

export default function BeehiveFilm({ size = 80 }: { size?: number }) {
  return (
    <div
      className="beehive-film-badge"
      style={{ width: size, height: size, minWidth: size }}
      role="img"
      aria-label="The Beehive human operating engine live telemetry animation"
    >
      <svg
        className="beehive-film-svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hiveGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FACC15" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Deep Navy Disc Base */}
        <circle cx="50" cy="50" r="48" fill="#0B1624" stroke="rgba(250, 204, 21, 0.3)" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="42" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="2,2" />

        {/* Hexagonal Mesh Structure */}
        {/* Center Hex */}
        <polygon points="50,38 60.4,44 60.4,56 50,62 39.6,56 39.6,44" fill="#142840" stroke="#FACC15" strokeWidth="1.5" />
        
        {/* Top Hex */}
        <polygon points="50,14 60.4,20 60.4,32 50,38 39.6,32 39.6,20" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        {/* Top-Right Hex */}
        <polygon points="70.8,26 81.2,32 81.2,44 70.8,50 60.4,44 60.4,32" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        {/* Bottom-Right Hex */}
        <polygon points="70.8,50 81.2,56 81.2,68 70.8,74 60.4,68 60.4,56" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        {/* Bottom Hex */}
        <polygon points="50,62 60.4,68 60.4,80 50,86 39.6,80 39.6,68" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        {/* Bottom-Left Hex */}
        <polygon points="29.2,50 39.6,56 39.6,68 29.2,74 18.8,68 18.8,56" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        {/* Top-Left Hex */}
        <polygon points="29.2,26 39.6,32 39.6,44 29.2,50 18.8,44 18.8,32" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />

        {/* Pulsing Pod Packets Flowing Across Hive (People & Process in Sync) */}
        <circle className="h-pkt h-pkt-1" cx="50" cy="26" r="2" fill="#FACC15" />
        <circle className="h-pkt h-pkt-2" cx="70.8" cy="38" r="2" fill="#FFFBEB" />
        <circle className="h-pkt h-pkt-3" cx="70.8" cy="62" r="2" fill="#FACC15" />
        <circle className="h-pkt h-pkt-4" cx="50" cy="74" r="2" fill="#FFFBEB" />
        <circle className="h-pkt h-pkt-5" cx="29.2" cy="62" r="2" fill="#FACC15" />
        <circle className="h-pkt h-pkt-6" cx="29.2" cy="38" r="2" fill="#FFFBEB" />

        {/* Central MDM / Sovereign Human Core */}
        <circle cx="50" cy="50" r="12" fill="url(#hiveGlow)" className="h-core-glow" />
        <rect x="47" y="47" width="6" height="6" fill="#FACC15" rx="1" />
      </svg>
    </div>
  );
}
