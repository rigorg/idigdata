"use client";

import { useRef } from "react";
import { useLoopPlay } from "@/components/motion/useLoopPlay";

export default function SystemverseFilm() {
  const ref = useRef<HTMLVideoElement>(null);
  useLoopPlay(ref);

  return (
    <video
      ref={ref}
      className="systemverse-film"
      width={512}
      height={512}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/media/systemverse-poster.png?c=1"
      aria-label="Gold leaves the data core and docks on the Systemverse circles."
    >
      <source src="/media/systemverse-loop.mp4?c=1" type="video/mp4" />
    </video>
  );
}
