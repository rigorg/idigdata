import React from 'react';

type LogoProps = {
  className?: string;
  variant?: 'white' | 'gold' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
};

export function TheBlockLogo({
  className = '',
  variant = 'white',
  size = 'md',
  showWordmark = true,
}: LogoProps) {
  // Height options:
  // sm: 24px, md: 32px (exact 1:1 ratio), lg: 44px
  const heights = {
    sm: 24,
    md: 32,
    lg: 44,
  };
  const h = heights[size];
  // Aspect ratio is 144 / 32 (4.5) with wordmark, or 36 / 32 (1.125) for monogram only
  const w = showWordmark ? Math.round(h * (144 / 32)) : Math.round(h * (36 / 32));

  const strokeColor =
    variant === 'gold' ? '#B48A05' : variant === 'monochrome' ? 'currentColor' : '#FFFFFF';
  const textColor =
    variant === 'gold' ? '#F3EFE6' : variant === 'monochrome' ? 'currentColor' : '#FFFFFF';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        width={w}
        height={h}
        viewBox={showWordmark ? "0 0 144 32" : "0 0 36 32"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        aria-label="The Block Logo"
      >
        {/* Monogram T|B with overarching T roof: Optically Calibrated Block-Within-A-Block (Flush Base) */}
        <g id="tb-monogram" stroke={strokeColor} strokeLinecap="square">
          {/* Big T: Roof Bar (x: 4.0 to 32.0, y: 4.5) */}
          <line x1="4.0" y1="4.5" x2="32.0" y2="4.5" strokeWidth="2.0" />

          {/* Big T: Central Dividing Stem (ends flush with letters at y=23.5) */}
          <line x1="18" y1="4.5" x2="18" y2="23.5" strokeWidth="2.0" />

          {/* Left Small T: centered in left quadrant (x: 4.0 to 14.0, stem at 9.0, y: 8.5 to 23.5) */}
          <line x1="4.0" y1="8.5" x2="14.0" y2="8.5" strokeWidth="1.6" />
          <line x1="9.0" y1="8.5" x2="9.0" y2="23.5" strokeWidth="1.6" />

          {/* Right Small B: spine at x=22.5 with 4.5px optical air to stem (y: 8.5 to 23.5) */}
          <line x1="22.5" y1="8.5" x2="22.5" y2="23.5" strokeWidth="1.6" />
          <path
            d="M22.5 8.5H28C30.2 8.5 31.5 9.8 31.5 12C31.5 14.2 30.2 15.5 28 15.5H22.5"
            strokeWidth="1.6"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M22.5 15.5H28.5C30.8 15.5 32 16.8 32 19.5C32 22.2 30.8 23.5 28.5 23.5H22.5"
            strokeWidth="1.6"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Wordmark: THE BLOCK */}
        {showWordmark && (
          <text
            x="44"
            y="21"
            fill={textColor}
            fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif"
            fontSize="14"
            fontWeight="600"
            letterSpacing="0.08em"
          >
            THE BLOCK
          </text>
        )}
      </svg>
    </div>
  );
}

export default TheBlockLogo;
