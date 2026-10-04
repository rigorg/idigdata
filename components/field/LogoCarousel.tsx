import type { FieldMark } from "@/lib/field/marks";

type Props = {
  marks: FieldMark[];
  label?: string;
  dek?: string;
  mono?: boolean;
};

function Chip({ mark, mono }: { mark: FieldMark; mono: boolean }) {
  if (!mark.src) {
    return (
      <span className="inline-flex h-12 w-auto items-center justify-center border border-navy/15 bg-paper px-3 text-center font-brand text-[11.5px] font-semibold uppercase tracking-[0.14em] text-navy sm:justify-start sm:text-left">
        {mark.name}
      </span>
    );
  }

  return (
    <span className="inline-flex h-12 w-auto items-center justify-center gap-2 overflow-visible border border-navy/15 bg-paper px-3 sm:justify-start">
      {/* eslint-disable-next-line @next/next/no-img-element -- static brand lockups */}
      <img
        src={mark.src}
        alt={mark.includesWord ? mark.name : ""}
        className={`w-auto object-contain object-center sm:object-left ${
          mark.fit === "mark"
            ? "h-8 max-w-[5.75rem]"
            : mark.fit === "long"
              ? "h-7 max-w-[8.5rem]"
              : "h-8 max-w-[13rem]"
        } ${mono ? "grayscale contrast-150" : ""}`}
      />
      {mark.includesWord ? null : (
        <span className="font-brand text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
          {mark.name}
        </span>
      )}
    </span>
  );
}

export default function LogoCarousel({
  marks,
  label = "Operators alongside the work",
  dek,
  mono = true,
}: Props) {
  if (marks.length === 0) return null;

  return (
    <div className="field-measure mt-10">
      <p className="mb-2 font-brand text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
        {label}
      </p>
      {dek ? (
        <p className="mb-4 text-[16px] leading-[1.65] text-ink">{dek}</p>
      ) : null}

      <ul className="-mx-6 flex gap-2 overflow-x-auto overscroll-x-contain px-6 pb-2 sm:hidden">
        {marks.map((mark) => (
          <li key={mark.name} className="shrink-0">
            <Chip mark={mark} mono={mono} />
          </li>
        ))}
      </ul>

      <div className="hidden overflow-hidden border-y border-navy/10 py-3 sm:block">
        <div className="field-marquee flex w-max motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className={`flex shrink-0 gap-2 pr-2 motion-reduce:flex-wrap motion-reduce:pr-0 ${
                copy === 1 ? "motion-reduce:hidden" : ""
              }`}
              aria-hidden={copy === 1}
            >
              {marks.map((mark) => (
                <li key={`${mark.name}-${copy}`} className="shrink-0">
                  <Chip mark={mark} mono={mono} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
