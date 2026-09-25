"use client";

import Link from "next/link";
import { BEATS } from "./spineFilmBeats";

export function BeatPanel({ beat }: { beat: number }) {
  const b = BEATS[Math.max(0, Math.min(BEATS.length, beat) - 1)] ?? BEATS[0];
  return (
    <div
      className="beat-panel mt-7 border-t border-porcelain/20 pt-5"
      aria-live="polite"
    >
      <p className="font-body text-[13px] text-gold">
        {b.n} of 6 · {b.chip}
      </p>
      <h2 className="mt-2 font-vollkorn text-[clamp(22px,2.2vw,28px)] font-bold leading-[1.15] text-porcelain">
        {b.label}
      </h2>
      <p className="mt-2.5 max-w-[42ch] text-[16px] leading-[1.55] text-porcelain">
        {b.line}
      </p>
    </div>
  );
}

export function HeroCopy({
  onSeeMap,
}: {
  onSeeMap?: () => void;
}) {
  return (
    <>
      <p className="font-body text-[14.5px] text-gold">
        <span className="md:hidden">
          Transformational CIO · $100M-$1B operators
        </span>
        <span className="hidden md:inline">
          Transformational CIO · $100M-$1B operators · systems you own
        </span>
      </p>
      <h1 className="mt-3 max-w-[16ch] font-vollkorn text-[clamp(30px,3.6vw,52px)] font-bold leading-[1.12] text-porcelain">
        Your transformation gets an owner.
      </h1>
      <p className="hero-dek mt-3 max-w-[48ch] text-[17px] leading-[1.55] text-porcelain">
        I have done both layers, and I come inside to own delivery. You keep
        what we build while the business runs.
      </p>
      <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
        <Link href="/contact/" className="cta-gold">
          Start a conversation
        </Link>
        {onSeeMap ? (
          <button type="button" onClick={onSeeMap} className="cta-ghost">
            See the operating map
          </button>
        ) : (
          <a href="#operating-map" className="cta-ghost">
            See the operating map
          </a>
        )}
      </div>
    </>
  );
}
