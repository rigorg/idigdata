import type { FieldMark } from "@/lib/field/marks";
import LogoStrip from "@/components/field/LogoStrip";
import SceneSlot, { type SceneKind } from "@/components/field/SceneSlot";

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

type Props = {
  marks?: FieldMark[];
  markLabel?: string;
  scene?: SceneKind;
  sceneSrc?: string;
  quote?: string;
  mono?: boolean;
};

export default function ProofRail({
  marks,
  markLabel,
  scene,
  sceneSrc,
  quote,
  mono = false,
}: Props) {
  const hasMarks = Boolean(marks && marks.length > 0);
  const hasScene = Boolean(scene);
  const hasQuote = Boolean(quote);
  if (!hasMarks && !hasScene && !hasQuote) return null;

  return (
    <div className="mt-10 space-y-6">
      {hasMarks ? (
        <div className="field-measure">
          <LogoStrip marks={marks!} label={markLabel} mono={mono} />
        </div>
      ) : null}
      {scene ? (
        <SceneSlot
          kind={scene}
          src={sceneSrc}
          plateId={`${scene}-${slug(markLabel ?? marks?.[0]?.name ?? "scene")}`}
        />
      ) : null}
      {quote ? (
        <blockquote className="field-measure border-l-[3px] border-gold pl-4 font-vollkorn text-[18px] font-medium italic leading-snug text-navy md:text-[20px]">
          {quote}
        </blockquote>
      ) : null}
    </div>
  );
}
