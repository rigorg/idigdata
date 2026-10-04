import Link from "next/link";
import { WHY_ME_BEATS, WHY_ME_OWNER } from "@/lib/whyMe";

type Layer = "application" | "agentic";

const enterGold: Record<Layer, string> = {
  application: "The application layer",
  agentic: "The arrival of agentics",
};

type Props = {
  layer: Layer;
  eyebrow: string;
  h1: string;
  dek: string;
  children?: React.ReactNode;
  siblingHref: string;
  siblingLabel: string;
};

export default function FolioLayer({
  layer,
  eyebrow,
  h1,
  dek,
  children,
  siblingHref,
  siblingLabel,
}: Props) {
  const goldKicker = enterGold[layer];

  return (
    <div className="bg-cream text-ink">
      <section className="page-well border-b border-navy/10 pb-14 pt-12 md:pb-16 md:pt-16">
        <p className="font-display text-[13px] text-stone">{eyebrow}</p>
        <h1 className="mt-8 max-w-[16ch] font-vollkorn text-[clamp(40px,6vw,72px)] font-bold leading-[1.04] tracking-[-0.02em] text-navy">
          {h1}
        </h1>
        <p className="mt-7 max-w-[46ch] font-display text-[22px] italic leading-[1.45] text-ink">
          {dek}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2.5 rounded-[2px] bg-navy px-7 py-3.5 font-display text-[15px] font-bold text-porcelain hover:bg-navy-deep"
          >
            <span aria-hidden="true" className="inline-block h-[7px] w-[7px] bg-gold" />
            Start a conversation
          </Link>
          <a
            href="#treatise"
            className="font-display text-[15px] font-semibold text-navy underline decoration-navy/40 underline-offset-4 hover:decoration-navy"
          >
            See the operating map
          </a>
        </div>
      </section>

      <section id="treatise" className="page-well py-16 md:py-20">
        <div className="flex flex-col gap-16 md:gap-20">
          {WHY_ME_BEATS.map((beat) => {
            const gold = beat.kicker === goldKicker;
            return (
              <article
                key={beat.kicker}
                className={`grid gap-6 border-b border-navy/10 pb-16 last:border-b-0 last:pb-0 md:grid-cols-[200px_1fr] md:gap-12 ${
                  gold ? "border-l-[3px] border-l-gold pl-5 md:pl-8" : ""
                }`}
              >
                <div className="border-navy/10 md:border-r md:pr-8">
                  <p className="font-vollkorn text-[13px] font-bold tracking-[0.12em] text-[#B48A05]">
                    {beat.roman}
                  </p>
                  <h3 className="mt-2 font-vollkorn text-[18px] font-bold leading-snug text-navy">
                    {beat.kicker}
                  </h3>
                </div>
                <div>
                  <h2 className="font-vollkorn text-[clamp(20px,2.4vw,26px)] font-bold leading-[1.35] text-navy">
                    {beat.h2}
                  </h2>
                  <p className="mt-5 text-[17px] leading-[1.65] text-ink">
                    {beat.body}
                  </p>
                </div>
              </article>
            );
          })}

          <article className="grid gap-6 border-l-[3px] border-gold pl-5 md:grid-cols-[200px_1fr] md:gap-12 md:pl-8">
            <div className="border-navy/10 md:border-r md:pr-8">
              <p className="font-vollkorn text-[13px] font-bold tracking-[0.12em] text-[#B48A05]">
                {WHY_ME_OWNER.roman}
              </p>
              <h3 className="mt-2 font-vollkorn text-[18px] font-bold leading-snug text-navy">
                {WHY_ME_OWNER.kicker}
              </h3>
            </div>
            <div>
              <h2 className="font-vollkorn text-[clamp(22px,2.6vw,28px)] font-bold leading-[1.25] text-navy">
                {WHY_ME_OWNER.h2}
              </h2>
              <p className="mt-5 text-[17px] leading-[1.65] text-ink">
                {WHY_ME_OWNER.body}
              </p>
              {children}
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-[#F3ECE0]">
        <div className="page-well py-16 text-center md:py-20">
          <h2 className="font-vollkorn text-[clamp(28px,4vw,42px)] font-bold leading-[1.15] text-navy">
            If the work needs an owner, start there.
          </h2>
          <p className="mx-auto mt-5 max-w-[42rem] text-[18px] leading-[1.6] text-ink">
            I hold command. A crew lands it. The ownership standard does not
            change.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2.5 rounded-[2px] bg-navy px-7 py-3.5 font-display text-[15px] font-bold text-porcelain hover:bg-navy-deep"
            >
              <span aria-hidden="true" className="inline-block h-[7px] w-[7px] bg-gold" />
              Start a conversation
            </Link>
            <Link
              href={siblingHref}
              className="font-display text-[15px] font-semibold text-navy underline decoration-navy/40 underline-offset-4 hover:decoration-navy"
            >
              {siblingLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
