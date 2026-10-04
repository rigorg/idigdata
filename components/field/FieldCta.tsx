import Link from "next/link";

type Props = {
  secondaryHref: string;
  secondaryLabel: string;
};

export default function FieldCta({ secondaryHref, secondaryLabel }: Props) {
  return (
    <div className="field-measure mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
      <Link
        href="/contact/"
        className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-gold px-7 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-[#FFD84D]"
      >
        Start a conversation
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
      <Link
        href={secondaryHref}
        className="font-brand text-[12px] font-bold uppercase tracking-[0.14em] text-navy hover:text-navy/70"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
