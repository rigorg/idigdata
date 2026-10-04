"use client";

import { useEffect, useRef } from "react";

export default function AgenticsLoop() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    const run = () => {
      const play = el.play();
      if (play) play.catch(() => {});
    };
    run();
    el.addEventListener("canplay", run);
    return () => el.removeEventListener("canplay", run);
  }, []);

  return (
    <video
      ref={ref}
      className="agentics-loop"
      width={136}
      height={141}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/media/agentics-poster.png?c=4"
      aria-label="Gold workers leave the lattice center and dock on the navy corners."
    >
      <source src="/media/agentics-loop.mp4?c=4" type="video/mp4" />
    </video>
  );
}
