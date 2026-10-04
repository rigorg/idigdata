const TRANSFORMATIONS_JUMP = [
  { href: "#estate", label: "Estate" },
  { href: "#receipts", label: "Receipts" },
  { href: "#walk", label: "Walk" },
  { href: "#items", label: "Items" },
  { href: "#ownership", label: "Ownership" },
] as const;

type JumpItem = { href: string; label: string };

type Props = {
  items?: readonly JumpItem[];
};

export default function FieldJump({ items = TRANSFORMATIONS_JUMP }: Props) {
  return (
    <nav aria-label="Field chambers" className="field-measure mt-10 border-t border-navy/15 pt-6">
      <p className="mb-4 font-brand text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
        The Field
      </p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="font-brand text-[12px] font-semibold uppercase tracking-[0.14em] text-navy/70 hover:text-navy"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
