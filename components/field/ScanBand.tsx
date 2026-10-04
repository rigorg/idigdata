type Props = {
  rows: readonly (readonly string[])[];
  className?: string;
};

export default function ScanBand({ rows, className = "" }: Props) {
  return (
    <div
      className={`field-measure grid grid-cols-1 gap-2 font-brand text-[10px] font-semibold uppercase tracking-[0.08em] text-navy/70 sm:text-[12px] sm:tracking-[0.16em] ${className}`}
    >
      {rows.map((row) => (
        <p
          key={row.join("·")}
          className="flex flex-nowrap items-center gap-x-2 overflow-x-auto overscroll-x-contain sm:gap-x-5"
        >
          {row.map((label) => (
            <span key={label} className="whitespace-nowrap">
              {label}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}
