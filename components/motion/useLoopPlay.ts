"use client";

import { useEffect, type RefObject } from "react";

/** Keep the plate films playing. Do not honor reduced-motion here — these loops are the object. */
export function useLoopPlay(ref: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.muted = true;
    el.defaultMuted = true;
    el.loop = true;
    el.playsInline = true;

    const run = () => {
      el.muted = true;
      void el.play().catch(() => {});
    };

    run();
    el.addEventListener("loadeddata", run);
    el.addEventListener("canplay", run);
    const onVis = () => {
      if (!document.hidden) run();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      el.removeEventListener("loadeddata", run);
      el.removeEventListener("canplay", run);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [ref]);
}
