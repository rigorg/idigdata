"use client";

import { useEffect, useRef, useState } from "react";
import { AssemblySvg } from "./AssemblySvg";
import { BeatPanel, HeroCopy } from "./spineFilmChrome";
import {
  BEATS,
  MOBILE_BEATS,
  beatFor,
  progressForBeat,
} from "./spineFilmBeats";

/**
 * Sovereign Data Spine — pinned scroll film, six hard beats (shot list v3,
 * storyboard REV E, sealed frames at .agents/riffs/glass-film-frames-20260723-cc).
 * Doctrine (Operator ruling 2026-07-24): MDM is the sixth constellation; the
 * constellation center is the data-centric core (Common Data Model), per
 * public/diagrams/six-constellations.svg canon.
 * Beat frames are fixed compositions; layers toggle per [data-beat] — no crossfade mush.
 * Click the beat rail (or "See the operating map") to jump; scroll also drives state.
 * prefers-reduced-motion → static beat 06 end-state. Mobile → stacked frames 01/03/05/06.
 *
 * Split: spineFilmBeats · spineFilmTiles · AssemblySvg · spineFilmChrome.
 */

export default function SpineFilm() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [beat, setBeat] = useState(1);
  const [running, setRunning] = useState(false);
  const runTimer = useRef<number | null>(null);
  /* Start gated — must be true before first paint's scroll/restore can drive beats. */
  const suspend = useRef(true);
  const cancelRef = useRef<() => void>(() => {});

  const applyBeat = (n: number) => {
    if (rootRef.current) rootRef.current.dataset.beat = String(n);
    setBeat(n);
  };

  const headerH = () => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--site-header-h")
      .trim();
    const n = Number.parseFloat(raw);
    return Number.isFinite(n) ? n : 85;
  };

  /** Scroll distance while the film stays pinned (track minus sticky stage). */
  const pinSpan = () => {
    const track = trackRef.current;
    const root = rootRef.current;
    if (!track || !root) return 0;
    return Math.max(0, track.offsetHeight - root.offsetHeight);
  };

  const beatTop = (targetBeat: number): number | null => {
    const track = trackRef.current;
    if (!track) return null;
    const span = pinSpan();
    if (span <= 0) return null;
    return (
      track.getBoundingClientRect().top +
      window.scrollY +
      progressForBeat(targetBeat) * span
    );
  };

  /* Instant scroll sync, verified — retries until the page position actually
     agrees with the beat (invisible while the film is pinned), then settles. */
  const forceScroll = (targetBeat: number, onSettled?: () => void) => {
    let tries = 0;
    const attempt = () => {
      const target = beatTop(targetBeat);
      if (target === null || Math.abs(window.scrollY - target) < 6 || tries >= 100) {
        onSettled?.();
        return;
      }
      tries += 1;
      window.scrollTo(0, target);
      window.setTimeout(attempt, 80);
    };
    attempt();
  };

  /* resync=true (natural finish): pin scroll to the final beat before handing
     control back, so the next user scroll continues from the end frame.
     resync=false (user interrupt): release immediately — never fight the hand. */
  const stopRun = (resync: boolean = true) => {
    if (runTimer.current !== null) {
      window.clearInterval(runTimer.current);
      runTimer.current = null;
    }
    window.removeEventListener("wheel", cancelRef.current);
    window.removeEventListener("touchstart", cancelRef.current);
    setRunning(false);
    if (!resync) {
      suspend.current = false;
      return;
    }
    const b = Number(rootRef.current?.dataset.beat ?? "1");
    forceScroll(b, () => {
      suspend.current = false;
    });
  };

  /* Timed run: always starts from beat 1, ~3s per beat, holds on 6.
     Scroll driving is suspended for the duration; any user wheel/touch cancels. */
  const startFilmRun = () => {
    if (runTimer.current !== null) return;
    suspend.current = true;
    setRunning(true);
    forceScroll(1);
    applyBeat(1);
    const cancel = () => stopRun(false);
    cancelRef.current = cancel;
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    let b = 1;
    runTimer.current = window.setInterval(() => {
      b += 1;
      if (b > 6) {
        stopRun(true);
        return;
      }
      applyBeat(b);
    }, 3000);
  };

  /* Footer RUN — toggle: start timed sequence, or stop if already playing. */
  const runFilm = () => {
    if (runTimer.current !== null) {
      stopRun(false);
      return;
    }
    startFilmRun();
  };

  const scrollToBeat = (targetBeat: number) => {
    if (runTimer.current !== null) stopRun(false);
    /* Beat rail click is explicit intent — unlock scroll-driving and hard-set. */
    suspend.current = false;
    applyBeat(targetBeat);
    const top = beatTop(targetBeat);
    if (top === null) return;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setBeat(6);
      return;
    }
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    /* Pin load at beat 01. Browser scroll restoration + scroll-smooth was
       racing 1→6 on refresh; do not follow scroll until a real wheel/touch. */
    const prevRestoration = history.scrollRestoration;
    try {
      history.scrollRestoration = "manual";
    } catch {
      /* ignore */
    }
    window.scrollTo(0, 0);
    applyBeat(1);
    suspend.current = true;

    let raf = 0;
    const update = () => {
      raf = 0;
      if (suspend.current) return;
      const r = track.getBoundingClientRect();
      const span = pinSpan();
      if (span <= 0) return;
      /* Track sits under the sticky header; progress starts when r.top hits headerH. */
      const p = Math.min(1, Math.max(0, (headerH() - r.top) / span));
      const next = beatFor(p);
      root.dataset.beat = String(next);
      setBeat((prev) => (prev === next ? prev : next));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    let released = false;
    const teardownGate = () => {
      window.removeEventListener("wheel", releaseToUser);
      window.removeEventListener("touchstart", releaseToUser);
    };
    /* Wheel / touch only — pointerdown/keydown were releasing the gate on
       focus, extensions, and refresh chrome, which re-enabled the race. */
    const releaseToUser = () => {
      if (released) return;
      released = true;
      teardownGate();
      if (runTimer.current === null) {
        suspend.current = false;
        update();
      }
    };
    window.addEventListener("wheel", releaseToUser, { passive: true });
    window.addEventListener("touchstart", releaseToUser, { passive: true });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      teardownGate();
      if (raf) cancelAnimationFrame(raf);
      if (runTimer.current !== null) {
        window.clearInterval(runTimer.current);
        runTimer.current = null;
      }
      window.removeEventListener("wheel", cancelRef.current);
      window.removeEventListener("touchstart", cancelRef.current);
      try {
        history.scrollRestoration = prevRestoration;
      } catch {
        /* ignore */
      }
    };
  }, [reduced]);

  if (reduced) {
    return (
      <section
        id="operating-map"
        className="relative isolate overflow-hidden bg-navy text-porcelain"
      >
        <div className="page-well pb-16 pt-14">
          <HeroCopy />
          <div data-beat="6" className="film-fixed mx-auto mt-10 w-full max-w-[720px]">
            <AssemblySvg frame={6} />
          </div>
          <ol className="mt-10 grid w-full gap-x-16 gap-y-6 sm:grid-cols-2">
            {BEATS.map((b) => (
              <li
                key={b.n}
                className="text-[14.5px] leading-[1.5] text-porcelain/75"
              >
                <span className="font-body text-[13px] text-gold">
                  {b.n} · {b.chip}
                </span>
                <span className="mt-1 block font-semibold text-porcelain">
                  {b.label}
                </span>
                <span className="mt-1 block">{b.line}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Desktop pinned film — stage + bottom chrome (beats never clip) */}
      <div
        ref={trackRef}
        className="relative hidden bg-navy md:block"
        style={{ height: "480svh" }}
      >
        <div
          ref={rootRef}
          data-beat="1"
          data-film-active="true"
          className="film-root sticky top-[var(--site-header-h)] isolate flex h-[calc(100svh-var(--site-header-h))] flex-col overflow-hidden bg-navy text-porcelain"
        >
          <div className="page-well grid min-h-0 w-full flex-1 grid-cols-[minmax(320px,40%)_1fr] items-start gap-6 overflow-hidden pb-2 pt-5 lg:gap-10 lg:pt-6">
            <div className="film-story min-h-0 overflow-y-auto overscroll-contain pr-1">
              <HeroCopy onSeeMap={startFilmRun} />
              <BeatPanel beat={beat} />
            </div>
            <div className="film-stage h-full min-h-0 self-stretch">
              <div className="film-box">
                <AssemblySvg frame={beat} />
              </div>
            </div>
          </div>

          {/* Cinema chrome — controls only; story lives in BeatPanel */}
          <div
            className="film-chrome shrink-0 border-t border-porcelain/15 bg-navy"
            role="group"
            aria-label="Film beats"
          >
            <div className="page-well flex flex-wrap items-center gap-2 py-2.5">
              <button
                type="button"
                onClick={runFilm}
                aria-pressed={running}
                className={`film-run-btn rounded-[3px] px-3 py-1.5 font-body text-[13px] font-semibold transition-colors ${
                  running
                    ? "bg-gold text-navy"
                    : "border border-gold/60 text-gold hover:border-gold hover:bg-gold/10"
                }`}
              >
                {running ? "Stop" : "Run"}
              </button>
              {BEATS.map((b, i) => {
                const n = i + 1;
                const active = beat === n;
                return (
                  <button
                    key={b.n}
                    type="button"
                    onClick={() => scrollToBeat(n)}
                    aria-pressed={active}
                    aria-label={`${b.n} ${b.label}`}
                    title={b.label}
                    className={`rounded-[3px] px-2.5 py-1.5 font-body text-[13px] font-semibold transition-colors ${
                      active
                        ? "bg-gold text-navy"
                        : "border border-porcelain/25 text-porcelain/70 hover:border-gold hover:text-gold"
                    }`}
                  >
                    <span className="text-[10px] opacity-80">{b.n}</span>{" "}
                    {b.chip}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacked — frames 01 / 03 / 05 / 06; caption leads each frame */}
      <section
        data-film-active="true"
        id="operating-map"
        className="relative isolate overflow-hidden bg-navy text-porcelain md:hidden"
      >
        <div className="page-well pb-20 pt-8">
          <HeroCopy />
          <div className="mt-12 flex flex-col gap-14 border-t border-porcelain/15 pt-10">
            {MOBILE_BEATS.map((b) => (
              <figure
                key={b.beat}
                id={b.beat === 6 ? "operating-map-m" : undefined}
                className="m-0 scroll-mt-24 last:pb-2"
              >
                <figcaption>
                  <p className="font-body text-[13px] text-gold">
                    {String(b.beat).padStart(2, "0")} / 06 · {b.label}
                  </p>
                  <p className="mt-1.5 text-[15px] leading-[1.55] text-porcelain/75">
                    {b.line}
                  </p>
                </figcaption>
                <div data-beat={b.beat} className="film-fixed mt-4">
                  <AssemblySvg frame={b.beat} />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
