"use client";

import { useState, useEffect } from "react";

export default function BannerLabPage() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    setTimestamp(Date.now().toString());
  }, []);

  return (
    <main className="presence py-12 md:py-16">
      <div className="page-well max-w-5xl mx-auto space-y-12">
        <header className="border-b border-navy/15 pb-8">
          <p className="p-eyebrow">Digital Operations · Brand & Authority Surface</p>
          <h1 className="p-h1 mt-2">LinkedIn Executive Banner · Locked Master</h1>
          <p className="p-prose mt-4 max-w-2xl text-lg">
            Exact match to your screenshot: authentic brand navy background (<code>#142840</code>), circular disc constellation graphic with 6 glowing gold nodes & M4 core, zero text collision, and full avatar clearance.
          </p>
        </header>

        {/* LOCKED PRODUCTION MASTER BANNER */}
        <section className="p-section rounded-lg border-2 border-gold bg-white p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-navy/10 pb-4">
            <div>
              <span className="font-vollkorn text-xs font-bold uppercase tracking-widest text-gold-ink">
                Production Master · 1584 × 396 PNG
              </span>
              <h2 className="font-vollkorn text-2xl font-extrabold text-navy mt-1">
                Authentic Brand Navy (#142840) + Circular Disc Process Constellation
              </h2>
              <p className="font-vollkorn text-sm italic text-stone mt-0.5">
                "Your transformation gets an owner. The business keeps running."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`/brand/linkedin-banner-final.svg?v=${timestamp}`}
                download="idigdata-linkedin-banner-1584x396.svg"
                className="inline-flex items-center gap-1.5 rounded-[3px] border border-navy/20 px-3.5 py-2 text-xs font-bold text-navy hover:bg-cream"
              >
                Download SVG
              </a>
              <a
                href={`/brand/idigdata-linkedin-banner-1584x396.png?v=${timestamp}`}
                download="idigdata-linkedin-banner-1584x396.png"
                className="inline-flex items-center gap-2 rounded-[3px] bg-navy px-5 py-2.5 text-xs font-bold text-porcelain hover:bg-navy-deep shadow-md transition-all hover:scale-[1.02]"
              >
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                Download 1584×396 PNG
              </a>
            </div>
          </div>

          {/* Raw Full 1584x396 Canvas with Cache Buster */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold uppercase tracking-wider text-warm-gray">
                Official Production Canvas (1584 × 396 PNG):
              </p>
              <span className="text-xs font-mono text-stone bg-cream px-2 py-0.5 rounded border border-navy/10">
                1584 × 396 px · Lossless PNG · Active Master
              </span>
            </div>
            <div className="overflow-hidden rounded-md border border-navy/20 shadow-sm">
              <img
                key={timestamp}
                src={`/brand/idigdata-linkedin-banner-1584x396.png?v=${timestamp}`}
                alt="Locked Master Banner PNG"
                className="block w-full h-auto"
              />
            </div>
          </div>

          {/* Realistic In-Situ Profile Preview */}
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-warm-gray mb-2">
              Live LinkedIn Profile Preview (with avatar overlay):
            </p>
            <div className="relative overflow-hidden rounded-md border border-navy/20 bg-cream shadow-md">
              <div className="relative aspect-[1584/396] w-full">
                <img
                  key={`preview-${timestamp}`}
                  src={`/brand/idigdata-linkedin-banner-1584x396.png?v=${timestamp}`}
                  alt="Locked Master Banner"
                  className="block h-full w-full object-cover"
                />
              </div>

              <div className="relative bg-white px-6 pb-6 pt-3">
                {/* Simulated Headshot */}
                <div className="absolute -top-14 left-6 h-28 w-28 md:h-36 md:w-36 rounded-full border-4 border-white bg-[#0B1624] shadow-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-vollkorn text-2xl font-bold text-porcelain">RP</span>
                    <p className="text-[10px] text-gold uppercase tracking-widest">Headshot</p>
                  </div>
                </div>

                <div className="ml-36 md:ml-44 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-vollkorn text-xl font-bold text-navy">
                      Robert Paddock
                    </h3>
                    <p className="text-xs text-stone font-medium">
                      Transformational CIO/CTO | Customer-Side Transformation Operator | ERP + Applied Agentics
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-navy/70 uppercase tracking-wider">
                    idigdata.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-cream/60 p-4 rounded border border-navy/10">
            <div>
              <p className="font-bold uppercase tracking-wider text-navy">Exact Screenshot Architecture:</p>
              <ul className="mt-1.5 space-y-1 text-warm-gray list-disc list-inside">
                <li><strong>Background:</strong> Authentic <code>#142840</code> website brand navy</li>
                <li><strong>Constellation:</strong> Dark circular disc base + 6 glowing gold nodes + M4 core</li>
                <li><strong>Clearance:</strong> &gt;300px clean gap between headline and disc</li>
              </ul>
            </div>
            <div>
              <p className="font-bold uppercase tracking-wider text-navy">Typography & Delivery:</p>
              <ul className="mt-1.5 space-y-1 text-warm-gray list-disc list-inside">
                <li><strong>Format:</strong> Lossless 1584 × 396 PNG rendered with Georgia fonts</li>
                <li><strong>Headshot Zone:</strong> 100% unobstructed on desktop and mobile</li>
                <li><strong>Direct Link:</strong> Instant 1-click download button</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
