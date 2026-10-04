"use client";

import { useRef } from "react";
import { useLoopPlay } from "@/components/motion/useLoopPlay";

export default function LatticeLoop() {
  const ref = useRef<HTMLVideoElement>(null);
  useLoopPlay(ref);

  return (
    <video
      ref={ref}
      className="lattice-loop"
      width={512}
      height={512}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/media/agentics-poster.png?c=4"
      aria-label="Lattice pulse. Gold holds the center. Navy corners dock."
    >
      <source src="/media/agentics-loop.mp4?c=4" type="video/mp4" />
    </video>
  );
}
