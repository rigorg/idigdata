type Props = { className?: string; plate?: boolean };

export default function LatticeMark({ className = "", plate = false }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 128 128"
      className={className}
      style={
        plate
          ? { display: "block", width: "100px", height: "100px" }
          : {
              display: "inline-block",
              width: "0.95em",
              height: "0.95em",
              marginLeft: "0.32em",
              verticalAlign: "-0.1em",
            }
      }
    >
      <rect x="8" y="8" width="32" height="32" fill="#142840" />
      <rect x="88" y="8" width="32" height="32" fill="#142840" />
      <rect x="8" y="88" width="32" height="32" fill="#142840" />
      <rect x="88" y="88" width="32" height="32" fill="#142840" />
      <rect x="49.5" y="9.5" width="29" height="29" fill="none" stroke="#142840" strokeWidth="3" />
      <rect x="9.5" y="49.5" width="29" height="29" fill="none" stroke="#142840" strokeWidth="3" />
      <rect x="89.5" y="49.5" width="29" height="29" fill="none" stroke="#142840" strokeWidth="3" />
      <rect x="49.5" y="89.5" width="29" height="29" fill="none" stroke="#142840" strokeWidth="3" />
      <rect x="48" y="48" width="32" height="32" fill="#FACC15" />
    </svg>
  );
}
