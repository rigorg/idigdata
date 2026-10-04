"use client";

import { useRef } from "react";
import { useLoopPlay } from "@/components/motion/useLoopPlay";

type Props = {
  src: string;
  poster: string;
  label: string;
  size?: number;
  round?: boolean;
};

export default function HaloFilm({
  src,
  poster,
  label,
  size = 180,
  round = true,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  useLoopPlay(ref);

  return (
    <div
      className={`halo-film ${round ? "halo-film--round" : "halo-film--square"}`}
      style={{ width: size, height: size }}
    >
      <video
        ref={ref}
        width={size}
        height={size}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
