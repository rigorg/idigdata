"use client";

import React, { useState, useEffect } from "react";

type Props = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  triggerText?: string;
  children?: React.ReactNode;
};

export default function DiagramModal({
  src,
  alt,
  title,
  subtitle,
  triggerText = "Open the diagram",
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {children && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
          className="cursor-pointer group"
          aria-label={`Expand ${title}`}
        >
          {children}
        </div>
      )}

      <p className="mt-3 text-left">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-link inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium hover:underline cursor-pointer bg-transparent border-0 p-0 text-[#142840]"
        >
          <span>{triggerText}</span>
          <span aria-hidden="true" className="text-xs">&rarr;</span>
        </button>
      </p>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] flex flex-col bg-[#0b1726]/90 backdrop-blur-md p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* TOP BAR WITH PROMINENT BACK BUTTON */}
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 py-3 px-4 sm:px-6 bg-[#142840] border border-white/20 rounded-t-xl text-white shadow-2xl shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-white font-semibold text-xs sm:text-sm shadow transition-all duration-150 group"
              autoFocus
            >
              <span className="text-sm sm:text-base group-hover:-translate-x-0.5 transition-transform">&larr;</span>
              <span>Back to Experience</span>
            </button>

            <div className="text-center hidden sm:block">
              <h2 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                {title}
              </h2>
              {subtitle && <p className="text-xs text-white/70 mt-0.5">{subtitle}</p>}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-white underline decoration-white/30 hidden md:inline-block"
              >
                Raw SVG ↗
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-medium transition-colors"
                aria-label="Close diagram"
              >
                Close &times;
              </button>
            </div>
          </div>

          {/* SVG DISPLAY PANEL */}
          <div className="w-full max-w-6xl mx-auto flex-1 bg-white rounded-b-xl shadow-2xl p-4 sm:p-8 overflow-auto flex items-center justify-center border-x border-b border-white/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[75vh] w-auto h-auto object-contain mx-auto select-none"
            />
          </div>
        </div>
      )}
    </>
  );
}
