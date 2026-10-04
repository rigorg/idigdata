import type { FieldKeyItem } from "@/lib/field/keys";

type Props = {
  label: string;
  items: readonly FieldKeyItem[];
  className?: string;
};

export default function FieldKey({ label, items, className = "" }: Props) {
  return (
    <div className={`field-measure ${className}`}>
      <p className="mb-3 font-brand text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
        {label}
      </p>
      <dl className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.code} className="flex items-baseline gap-3">
            <dt className="w-14 shrink-0 font-brand text-[12px] font-bold uppercase tracking-[0.12em] text-navy">
              {item.code}
            </dt>
            <dd className="text-[15px] leading-snug text-ink">{item.name}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
