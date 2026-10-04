import type { ReactNode } from "react";

type Props = {
  id?: string;
  kicker?: string;
  title: string;
  tone?: "cream" | "pale";
  /** Optional lockup or figure between kicker and title. */
  lead?: ReactNode;
  children: ReactNode;
};

export default function FieldChamber({
  id,
  kicker,
  title,
  tone = "cream",
  lead,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t border-navy/15 py-14 md:py-20 ${
        tone === "pale" ? "bg-pale-navy" : "bg-cream"
      }`}
    >
      <div className="mx-auto max-w-content px-6">
        {kicker ? (
          <p className="field-measure mb-3 font-brand text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
            {kicker}
          </p>
        ) : null}
        {lead ? <div className="field-measure mb-6">{lead}</div> : null}
        <h2 className="field-measure font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
