"use client";

import { useRef } from "react";
import { useLoopPlay } from "@/components/motion/useLoopPlay";

export default function LastMoveFilm() {
  const ref = useRef<HTMLVideoElement>(null);
  useLoopPlay(ref);

  return (
    <video
      ref={ref}
      className="lastmove-film"
      width={512}
      height={512}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/media/lastmove-poster.png?c=2"
      aria-label="Agents advance one bounded workflow; a person authorizes the final move, and the completed outcome is recorded."
    >
      <source src="/media/lastmove-loop.mp4?c=2" type="video/mp4" />
    </video>
  );
}
