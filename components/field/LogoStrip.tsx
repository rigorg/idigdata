import type { FieldMark, FieldMarkGroup } from "@/lib/field/marks";

type Props = {
  marks?: FieldMark[];
  groups?: FieldMarkGroup[];
  label?: string;
  /** Field marks render grayscale. Owned builder lockups are already black-and-white. */
  mono?: boolean;
};

function Chip({
  mark,
  mono,
  fill = false,
}: {
  mark: FieldMark;
  mono: boolean;
  fill?: boolean;
}) {
  const box = fill
    ? "flex h-14 w-full items-center justify-center gap-2 border border-navy/15 bg-paper px-3"
    : "inline-flex h-14 items-center gap-2 border border-navy/15 bg-paper px-3";

  if (!mark.src) {
    return (
      <span
        className={`${box} text-center font-brand text-[11.5px] font-semibold uppercase tracking-[0.14em] text-navy`}
      >
        {mark.name}
      </span>
    );
  }

  return (
    <span className={box}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static brand lockups */}
      <img
        src={mark.src}
        alt={mark.includesWord ? mark.name : ""}
        className={`w-auto object-contain object-center ${
          mark.fit === "mark"
            ? "h-8 max-w-[6.5rem]"
            : mark.fit === "wide"
              ? "h-10 max-w-[13rem]"
              : mark.fit === "long"
                ? "h-6 max-w-[5.75rem]"
                : "h-7 max-w-[10.5rem]"
        } ${
          mono
            ? mark.ink === "heavy"
              ? "grayscale contrast-125"
              : "grayscale contrast-150"
            : ""
        }`}
      />
      {mark.includesWord ? null : (
        <span className="font-brand text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
          {mark.name}
        </span>
      )}
    </span>
  );
}

function Row({
  marks,
  mono,
  columns = 4,
}: {
  marks: FieldMark[];
  mono: boolean;
  columns?: 2 | 3 | 4;
}) {
  const grid =
    columns === 3
      ? "grid grid-cols-2 gap-2 sm:grid-cols-3"
      : columns === 2
        ? "grid grid-cols-2 gap-2"
        : "grid grid-cols-2 gap-2 sm:grid-cols-4";

  return (
    <ul className={grid}>
      {marks.map((mark) => (
        <li key={mark.name}>
          <Chip mark={mark} mono={mono} fill />
        </li>
      ))}
    </ul>
  );
}

export default function LogoStrip({
  marks,
  groups,
  label = "Hands-on command",
  mono = false,
}: Props) {
  const grouped = groups && groups.length > 0;
  if (!grouped && (!marks || marks.length === 0)) return null;

  return (
    <div className="field-measure">
      <p className="mb-3 font-brand text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
        {label}
      </p>
      {grouped ? (
        <div className="space-y-5">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 font-brand text-[10px] font-semibold uppercase tracking-[0.18em] text-navy/45">
                {group.label}
              </p>
              <Row marks={group.marks} mono={mono} columns={group.columns} />
            </div>
          ))}
        </div>
      ) : (
        <Row marks={marks!} mono={mono} />
      )}
    </div>
  );
}
