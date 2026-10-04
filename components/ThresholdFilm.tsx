"use client";

import { useRef } from "react";
import { useLoopPlay } from "@/components/motion/useLoopPlay";

export default function ThresholdFilm() {
  const ref = useRef<HTMLVideoElement>(null);
  useLoopPlay(ref);

  return (
    <video
      ref={ref}
      className="threshold-film"
      width={512}
      height={512}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/media/threshold-poster.png?c=1"
      aria-label="One real problem crosses the threshold and lands with an owner."
    >
      <source src="/media/threshold-loop.mp4?c=1" type="video/mp4" />
    </video>
  );
}
