export type SceneKind =
  | "whiteboard"
  | "warehouse"
  | "meeting"
  | "tasting"
  | "plant"
  | "workshop";

const SCENES: Record<
  SceneKind,
  { job: string; title: string }
> = {
  whiteboard: {
    job: "Tech workshop",
    title: "Command map on the wall - the estate in one frame",
  },
  warehouse: {
    job: "Warehouse floor",
    title: "Scan gun, dock door, inventory truth",
  },
  meeting: {
    job: "Working meeting",
    title: "Operators in the room - not a slide review",
  },
  tasting: {
    job: "Guest path",
    title: "Tasting room and merch on the same rails",
  },
  plant: {
    job: "Make and maintain",
    title: "Plant continuity while the estate modernizes",
  },
  workshop: {
    job: "Model-ops desk",
    title: "Agents on a governed production path",
  },
};

type Props = {
  kind: SceneKind;
  /** Optional licensed still. Caption stays the job of the scene - never "at Client X". */
  src?: string;
  plateId?: string;
};

export default function SceneSlot({ kind, src, plateId }: Props) {
  const scene = SCENES[kind];
  const grainId = `field-grain-${plateId ?? kind}`;

  return (
    <figure className="overflow-hidden border border-navy/10 bg-navy-deep">
      <div className="relative aspect-[16/9] w-full">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element -- optional licensed stills
          <img
            src={src}
            alt={scene.title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <ScenePlate kind={kind} title={scene.title} grainId={grainId} />
        )}
        <p className="absolute bottom-0 left-0 right-0 bg-navy-deep/80 px-4 py-2.5 font-brand text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          {scene.job}
        </p>
      </div>
      <figcaption className="bg-cream px-4 py-3 font-display text-[14px] italic leading-snug text-warm-gray md:text-[15px]">
        {scene.title}
      </figcaption>
    </figure>
  );
}

function ScenePlate({
  kind,
  title,
  grainId,
}: {
  kind: SceneKind;
  title: string;
  grainId: string;
}) {
  return (
    <svg
      viewBox="0 0 640 360"
      className="h-full w-full"
      role="img"
      aria-label={title}
    >
      <rect width="640" height="360" fill="#0C1A2C" />
      <rect width="640" height="360" fill={`url(#${grainId})`} opacity="0.35" />
      {kind === "whiteboard" ? <WhiteboardArt /> : null}
      {kind === "warehouse" ? <WarehouseArt /> : null}
      {kind === "meeting" ? <MeetingArt /> : null}
      {kind === "tasting" ? <TastingArt /> : null}
      {kind === "plant" ? <PlantArt /> : null}
      {kind === "workshop" ? <WorkshopArt /> : null}
      <defs>
        <pattern
          id={grainId}
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <rect width="80" height="80" fill="#0C1A2C" />
          <circle cx="12" cy="18" r="0.7" fill="#F7F5EE" opacity="0.18" />
          <circle cx="44" cy="52" r="0.6" fill="#FACC15" opacity="0.2" />
          <circle cx="68" cy="9" r="0.5" fill="#F7F5EE" opacity="0.12" />
        </pattern>
      </defs>
    </svg>
  );
}

function WhiteboardArt() {
  return (
    <g fill="none" stroke="#F7F5EE" strokeOpacity="0.55">
      <rect x="70" y="48" width="500" height="250" strokeWidth="3" />
      <line x1="70" y1="88" x2="570" y2="88" strokeWidth="1.5" />
      <circle cx="200" cy="190" r="46" stroke="#FACC15" strokeWidth="2.5" />
      <circle cx="320" cy="190" r="28" strokeWidth="1.5" />
      <circle cx="430" cy="190" r="28" strokeWidth="1.5" />
      <circle cx="520" cy="190" r="22" strokeWidth="1.5" />
      <line x1="246" y1="190" x2="292" y2="190" stroke="#FACC15" strokeWidth="1.5" />
      <line x1="348" y1="190" x2="402" y2="190" />
      <line x1="458" y1="190" x2="498" y2="190" />
    </g>
  );
}

function WarehouseArt() {
  return (
    <g fill="none" stroke="#F7F5EE" strokeOpacity="0.5" strokeWidth="1.75">
      <path d="M40 280 L40 140 L180 70 L320 140 L320 280" />
      <path d="M320 140 L560 90 L560 280" />
      <rect x="70" y="170" width="70" height="110" />
      <rect x="160" y="170" width="70" height="110" />
      <rect x="250" y="170" width="50" height="110" />
      <rect x="380" y="175" width="80" height="105" />
      <rect x="480" y="175" width="60" height="105" />
      <circle cx="430" cy="300" r="18" stroke="#FACC15" strokeWidth="2.5" />
      <line x1="430" y1="282" x2="470" y2="250" stroke="#FACC15" strokeWidth="2" />
    </g>
  );
}

function MeetingArt() {
  return (
    <g fill="none" stroke="#F7F5EE" strokeOpacity="0.55" strokeWidth="1.75">
      <ellipse cx="320" cy="210" rx="210" ry="70" />
      <rect x="120" y="110" width="70" height="44" />
      <rect x="230" y="96" width="70" height="44" />
      <rect x="340" y="96" width="70" height="44" />
      <rect x="450" y="110" width="70" height="44" />
      <circle cx="320" cy="210" r="10" fill="#FACC15" stroke="none" />
    </g>
  );
}

function TastingArt() {
  return (
    <g fill="none" stroke="#F7F5EE" strokeOpacity="0.55" strokeWidth="1.75">
      <path d="M80 280 L80 160 L560 160 L560 280" />
      <line x1="80" y1="200" x2="560" y2="200" />
      <path d="M180 160 L200 90 L230 90 L250 160" stroke="#FACC15" strokeWidth="2" />
      <path d="M300 160 L318 100 L348 100 L366 160" />
      <path d="M420 160 L438 108 L468 108 L486 160" />
      <rect x="90" y="210" width="90" height="50" />
      <rect x="200" y="210" width="90" height="50" />
    </g>
  );
}

function PlantArt() {
  return (
    <g fill="none" stroke="#F7F5EE" strokeOpacity="0.5" strokeWidth="1.75">
      <rect x="70" y="150" width="90" height="140" />
      <rect x="190" y="110" width="90" height="180" />
      <rect x="310" y="150" width="90" height="140" />
      <path d="M160 190 H190 M280 170 H310 M400 200 H470" stroke="#FACC15" />
      <circle cx="515" cy="200" r="36" />
      <circle cx="515" cy="200" r="18" stroke="#FACC15" strokeWidth="2" />
      <line x1="70" y1="290" x2="570" y2="290" />
    </g>
  );
}

function WorkshopArt() {
  return (
    <g fill="none" stroke="#F7F5EE" strokeOpacity="0.55" strokeWidth="1.75">
      <rect x="60" y="70" width="280" height="180" />
      <rect x="80" y="90" width="240" height="140" fill="#142840" stroke="#F7F5EE" />
      <circle cx="200" cy="160" r="28" stroke="#FACC15" strokeWidth="2.5" />
      <circle cx="170" cy="160" r="8" />
      <circle cx="230" cy="160" r="8" />
      <rect x="380" y="90" width="180" height="24" />
      <rect x="380" y="130" width="140" height="24" />
      <rect x="380" y="170" width="160" height="24" />
      <rect x="380" y="210" width="100" height="24" fill="#FACC15" stroke="none" />
    </g>
  );
}
