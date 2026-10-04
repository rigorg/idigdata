"use client";

import {
  BarsTile,
  DbTile,
  GridTile,
  ScrapTile,
  VendorTile,
} from "./spineFilmTiles";


/**
 * Single film box for every beat — 01 Mess is the lock.
 * Per-beat crops (People/Control/Adopt) were zooming 03–05 and shifting
 * stage weight; layers toggle inside this fixed frame instead.
 */
export const FILM_VIEWBOX = "36 18 660 612";
/** viewBox width / height — keep CSS film-box in lockstep */
export const FILM_ASPECT = 660 / 612;

export function AssemblySvg({ frame = 0 }: { frame?: number }) {
  /* `frame` kept for call-site clarity; visibility is CSS [data-beat] on ancestors. */
  void frame;
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      viewBox={FILM_VIEWBOX}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <defs>
        <radialGradient id="sf-seat-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sf-core-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sf-seat6-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sf-core6-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ===== Beat 01 — Fragile Chaos ===== */}
      <g className="sf-chaos">
        <g stroke="rgba(247,245,238,0.22)" strokeWidth="1.2">
          <path d="M112 92 C 300 180, 480 260, 622 402" />
          <path d="M612 82 C 460 220, 300 300, 158 372" />
          <path d="M282 72 C 360 260, 420 380, 448 548" />
          <path d="M122 512 C 300 420, 520 320, 662 222" />
          <path d="M92 242 C 260 300, 420 260, 548 282" />
          <path d="M462 102 C 380 240, 340 320, 328 382" />
          <path d="M232 202 C 340 300, 430 360, 496 412" />
          <path d="M268 542 C 360 440, 420 300, 462 152" />
          <path d="M392 222 C 300 380, 200 460, 124 522" />
          <path d="M392 222 C 480 160, 560 110, 618 88" />
          <path d="M622 542 C 480 480, 320 300, 232 222" />
          <path d="M162 372 C 300 360, 460 300, 546 288" />
        </g>
        <g stroke="rgba(247,245,238,0.30)" strokeWidth="1.2" strokeDasharray="4 6">
          <path d="M112 112 C 200 170, 260 220, 306 278" />
          <path d="M652 222 C 560 260, 500 300, 462 338" />
          <path d="M262 552 C 300 500, 330 470, 352 442" />
        </g>
        {/* fracture hairlines: porcelain jag + gold shard (not alert-red) */}
        <g strokeLinecap="round">
          <g stroke="rgba(247,245,238,0.55)" strokeWidth="1.5">
            <path d="M296 262 l14 8 -6 12 16 9 -7 13" />
            <path d="M448 328 l-13 9 7 11 -15 10 6 12" />
            <path d="M236 452 l15 6 -5 12 14 8" />
          </g>
          <g stroke="#FACC15" strokeWidth="2" opacity="0.85">
            <path d="M304 274 l10 6" />
            <path d="M441 349 l-9 6" />
            <path d="M245 464 l9 5" />
          </g>
        </g>
        <GridTile t="translate(80 70) rotate(-8)" />
        <GridTile t="translate(196 176) rotate(-12)" />
        <GridTile t="translate(560 44) rotate(9)" />
        <GridTile t="translate(438 378) rotate(-10)" />
        <GridTile t="translate(392 522) rotate(8)" />
        <BarsTile t="translate(408 62) rotate(-6)" />
        <BarsTile t="translate(496 240) rotate(-9)" />
        <BarsTile t="translate(64 486) rotate(10)" />
        <DbTile t="translate(612 186) rotate(-5)" />
        <DbTile t="translate(596 366) rotate(7)" />
        <VendorTile t="translate(226 34) rotate(5)" />
        <VendorTile t="translate(318 178) rotate(8)" />
        <VendorTile t="translate(262 342) rotate(12)" />
        <VendorTile t="translate(206 500) rotate(-6)" />
        <VendorTile t="translate(586 500) rotate(-11)" />
        <ScrapTile t="translate(52 210) rotate(6)" />
        <ScrapTile t="translate(96 336) rotate(-7)" />
        <ScrapTile t="translate(352 428) rotate(-4)" />
      </g>

      {/* ===== Beat 02 — surviving remnants, pushed to the edges ===== */}
      <g className="sf-remnants" opacity="0.32">
        <GridTile t="translate(58 72) rotate(-8)" />
        <VendorTile t="translate(598 64) rotate(9)" />
        <DbTile t="translate(618 316) rotate(-5)" />
        <BarsTile t="translate(56 540) rotate(10)" />
        <GridTile t="translate(600 548) rotate(-6)" />
        <g stroke="rgba(247,245,238,0.22)" strokeWidth="1.2" strokeDasharray="4 6">
          <path d="M120 100 C 160 140, 180 170, 196 200" />
          <path d="M628 350 C 600 400, 580 440, 566 480" />
        </g>
      </g>

      {/* ===== Beat 02: ingest buses — geometry only; BeatPanel owns the words ===== */}
      <g className="sf-schema2">
        <g stroke="rgba(247,245,238,0.22)" strokeWidth="1" strokeDasharray="3 5">
          <path d="M100 280 H346" />
          <path d="M100 340 H346" />
          <path d="M100 400 H346" />
          <path d="M620 280 H374" />
          <path d="M620 340 H374" />
          <path d="M620 400 H374" />
        </g>
        {/* Source endpoints — unmarked nodes, not acronym badges */}
        <g fill="#16304D" stroke="rgba(247,245,238,0.45)" strokeWidth="1.2">
          <circle cx="92" cy="280" r="5" />
          <circle cx="92" cy="340" r="5" />
          <circle cx="92" cy="400" r="5" />
          <circle cx="628" cy="280" r="5" />
          <circle cx="628" cy="340" r="5" />
          <circle cx="628" cy="400" r="5" />
        </g>
      </g>

      {/* ===== Dual-rail spine (beats 02—05) ===== */}
      <g className="sf-spine">
        <path d="M346 150 v320 M374 150 v320" stroke="rgba(247,245,238,0.9)" strokeWidth="3" />
        <path d="M346 150 h28" stroke="rgba(247,245,238,0.9)" strokeWidth="3" />
        <g stroke="rgba(247,245,238,0.35)" strokeWidth="1.5">
          <path d="M346 178 h28 M346 218 h28 M346 258 h28" />
        </g>
      </g>

      {/* ===== Data building blocks — the core assembling between the rails (beats 02—05) ===== */}
      <g className="sf-blocks">
        {[296, 330, 364, 398, 432].map((y) => (
          <g key={y}>
            <rect
              x="349"
              y={y}
              width="22"
              height="28"
              rx="2.5"
              fill="#FACC15"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1"
            />
            <path
              d={`M353.5 ${y + 10} h13 M353.5 ${y + 18} h13`}
              stroke="#142840"
              strokeWidth="1.6"
              opacity="0.55"
            />
          </g>
        ))}
      </g>

      {/* Beat 02 only — CDM destination pop (not an inbound chip) */}
      <g className="sf-core2">
        <circle cx="360" cy="364" r="78" fill="url(#sf-core-g)" opacity="0.9" />
        <text
          x="360"
          y="278"
          textAnchor="middle"
          fill="#FACC15"
          fontSize="9"
          fontWeight="800"
          letterSpacing="0.16em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          CDM
        </text>
      </g>

      {/* inbound data chips — beat 02 frame only · operator keys → owned core */}
      <g className="sf-chips2">
        <g stroke="rgba(247,245,238,0.45)" strokeWidth="1.35">
          <path d="M108 280 H346" />
          <path d="M612 320 H374" />
          <path d="M108 360 H346" />
          <path d="M612 400 H374" />
          <path d="M108 440 H346" />
        </g>
        {/* Ingest stream arrowheads */}
        <g stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M336 276 l7 4 -7 4" />
          <path d="M384 316 l-7 4 7 4" />
          <path d="M336 356 l7 4 -7 4" />
          <path d="M384 396 l-7 4 7 4" />
          <path d="M336 436 l7 4 -7 4" />
        </g>
        {(
          [
            { x: 198, y: 272, label: "CUST#" },
            { x: 468, y: 312, label: "VEND#" },
            { x: 198, y: 352, label: "ITEM#" },
            { x: 468, y: 392, label: "ERP" },
            { x: 198, y: 432, label: "REF" },
          ] as const
        ).map((chip) => (
          <g key={chip.label}>
            <rect
              x={chip.x}
              y={chip.y}
              width="48"
              height="16"
              rx="3"
              fill="#FACC15"
              stroke="rgba(20,40,64,0.25)"
              strokeWidth="1"
            />
            <text
              x={chip.x + 24}
              y={chip.y + 11.5}
              textAnchor="middle"
              fill="#142840"
              fontSize="8"
              fontWeight="800"
              letterSpacing="0.06em"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {chip.label}
            </text>
          </g>
        ))}
      </g>

      {/* snap streaks, seating jig, light security — beat 02 frame only */}
      <g className="sf-seat2">
        <g stroke="rgba(247,245,238,0.28)" strokeWidth="2" strokeLinecap="round">
          <path d="M346 96 v26" />
          <path d="M374 82 v32" />
          <path d="M360 108 v20" />
        </g>
        <path d="M334 484 l12 -10 M386 484 l-12 -10" stroke="#FACC15" strokeWidth="2" />
        {/* Governed at seat — security motif (full security beat lives on 04) */}
        <g transform="translate(348 488)">
          <rect
            x="0"
            y="8"
            width="24"
            height="18"
            rx="3"
            fill="#142840"
            stroke="#FACC15"
            strokeWidth="1.6"
          />
          <path
            d="M5 8 V5 a7 7 0 0 1 14 0 V8"
            fill="none"
            stroke="#FACC15"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16" r="2.2" fill="#FACC15" />
        </g>
      </g>

      {/* gold seat foundation: the spine's structural dock */}
      <g className="sf-seat">
        <circle className="sf-seat-glow" cx="360" cy="474" r="52" fill="url(#sf-seat-g)" />
        <path d="M310 474 h100" stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round" />
        <g stroke="rgba(250,204,21,0.6)" strokeWidth="1.5">
          <path d="M320 480 h80 M330 486 h60" />
        </g>
      </g>

      {/* ===== Beehive — people docked to the core (beats 03—05) ===== */}
      <g className="sf-hive3">
        <g stroke="#FACC15" strokeWidth="1.5" strokeOpacity="0.8">
          <path d="M311.4 280 H 346" />
          <path d="M311.4 340 H 346" />
          <path d="M408.6 280 H 374" />
          <path d="M408.6 340 H 374" />
        </g>

        <g stroke="rgba(247,245,238,0.3)" strokeWidth="1.2" strokeDasharray="3 4">
          <path d="M260 250 C 240 300, 240 340, 260 380" fill="none" />
          <path d="M460 250 C 480 300, 480 340, 460 380" fill="none" />
        </g>

        <g fill="rgba(27,58,92,0.85)" stroke="rgba(247,245,238,0.7)" strokeWidth="1.5">
          <polygon points="328.7,260 346,270 346,290 328.7,300 311.4,290 311.4,270" />
          <polygon points="328.7,320 346,330 346,350 328.7,360 311.4,350 311.4,330" />
          <polygon points="311.4,230 328.7,240 328.7,260 311.4,270 294.1,260 294.1,240" />
          <polygon points="311.4,290 328.7,300 328.7,320 311.4,330 294.1,320 294.1,300" />
          <polygon points="311.4,350 328.7,360 328.7,380 311.4,390 294.1,380 294.1,360" />
          <polygon points="391.3,260 374,270 374,290 391.3,300 408.6,290 408.6,270" />
          <polygon points="391.3,320 374,330 374,350 391.3,360 408.6,350 408.6,330" />
          <polygon points="408.6,230 391.3,240 391.3,260 408.6,270 425.9,260 425.9,240" />
          <polygon points="408.6,290 391.3,300 391.3,320 408.6,330 425.9,320 425.9,300" />
          <polygon points="408.6,350 391.3,360 391.3,380 408.6,390 425.9,380 425.9,360" />
        </g>

        {/* System / group marks — readable after beat-03 aperture scale */}
        <g fill="rgba(247,245,238,0.95)" fontSize="11" fontWeight="800" letterSpacing="0.08em" style={{ fontFamily: "var(--font-brand)" }}>
          <text x="311.4" y="254" textAnchor="middle">ERP</text>
          <text x="311.4" y="314" textAnchor="middle">WMS</text>
          <text x="311.4" y="374" textAnchor="middle">CRM</text>
          <text x="408.6" y="254" textAnchor="middle">PLM</text>
          <text x="408.6" y="314" textAnchor="middle">MES</text>
          <text x="408.6" y="374" textAnchor="middle">MDM</text>
        </g>
      </g>

      {/* ===== Beat 04 — control rail over the spine (roadmap above, agile lanes beside) ===== */}
      <g className="sf-pm4">
        {/* Roadmap canopy — stage labels stay INSIDE the frame (below dots, above bottom stroke) */}
        <rect
          x="120"
          y="68"
          width="480"
          height="70"
          rx="8"
          fill="none"
          stroke="rgba(247,245,238,0.85)"
          strokeWidth="2"
        />
        <path d="M120 86 H600" stroke="rgba(250,204,21,0.55)" strokeWidth="1.4" />
        <text
          x="360"
          y="82"
          textAnchor="middle"
          fill="rgba(247,245,238,0.55)"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.18em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          ROADMAP
        </text>
        {(
          [
            { x: 180, label: "Kickoff" },
            { x: 300, label: "Build" },
            { x: 420, label: "UAT" },
            { x: 540, label: "Go-live" },
          ] as const
        ).map((m) => (
          <g key={m.label}>
            <circle cx={m.x} cy="104" r="5" fill="#FACC15" />
            <text
              x={m.x}
              y="124"
              textAnchor="middle"
              fill="rgba(247,245,238,0.9)"
              fontSize="8"
              fontWeight="700"
              letterSpacing="0.04em"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {m.label}
            </text>
          </g>
        ))}
        {/* Drop from roadmap frame bottom (y=138) into the control spine */}
        <path d="M346 138 v28 M374 138 v28" stroke="#FACC15" strokeWidth="2" />

        {/* Open lanes — sit below roadmap frame; room for flank labels outside */}
        <rect
          x="128"
          y="176"
          width="158"
          height="292"
          rx="12"
          fill="none"
          stroke="rgba(247,245,238,0.75)"
          strokeWidth="2"
        />
        <rect
          x="434"
          y="176"
          width="158"
          height="292"
          rx="12"
          fill="none"
          stroke="rgba(247,245,238,0.75)"
          strokeWidth="2"
        />
        <path
          d="M286 324 H346 M374 324 H434"
          stroke="rgba(247,245,238,0.55)"
          strokeWidth="1.8"
        />

        <text
          x="207"
          y="198"
          textAnchor="middle"
          fill="rgba(247,245,238,0.55)"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.12em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          AGILE / STORIES
        </text>
        <text
          x="513"
          y="198"
          textAnchor="middle"
          fill="rgba(247,245,238,0.55)"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.12em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          STAKEHOLDERS
        </text>

        {/* Story / task chips — gold pills, not cards */}
        {(
          [
            { y: 228, label: "Item master" },
            { y: 266, label: "Integrations" },
            { y: 304, label: "Close path" },
            { y: 342, label: "Cutover run" },
            { y: 380, label: "Training pack" },
          ] as const
        ).map((chip) => (
          <g key={chip.label}>
            <rect
              x="142"
              y={chip.y}
              width="128"
              height="22"
              rx="11"
              fill="#142840"
              stroke="rgba(247,245,238,0.55)"
              strokeWidth="1.3"
            />
            <circle cx="156" cy={chip.y + 11} r="3" fill="#FACC15" />
            <text
              x="168"
              y={chip.y + 15}
              fill="rgba(247,245,238,0.92)"
              fontSize="10"
              fontWeight="600"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {chip.label}
            </text>
          </g>
        ))}

        {(
          [
            { y: 238, label: "SLT / Board" },
            { y: 286, label: "Finance / Ops" },
            { y: 334, label: "IT / PMO" },
            { y: 382, label: "Deliverables" },
          ] as const
        ).map((node) => (
          <g key={node.label}>
            <circle
              cx="458"
              cy={node.y + 8}
              r="5"
              fill="#142840"
              stroke="#FACC15"
              strokeWidth="1.6"
            />
            <text
              x="474"
              y={node.y + 12}
              fill="rgba(247,245,238,0.9)"
              fontSize="11"
              fontWeight="600"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Flank altitude marks — inside widened viewBox, outside lane frames */}
        <g stroke="rgba(250,204,21,0.45)" strokeWidth="1.5" strokeDasharray="4 5">
          <path d="M108 214 V 448" />
          <path d="M612 214 V 448" />
        </g>
        <circle cx="108" cy="250" r="4" fill="#FACC15" />
        <circle cx="108" cy="400" r="4" fill="#FACC15" />
        <circle cx="612" cy="250" r="4" fill="#FACC15" />
        <circle cx="612" cy="400" r="4" fill="#FACC15" />
        <text
          x="108"
          y="204"
          textAnchor="middle"
          fill="rgba(247,245,238,0.65)"
          fontSize="7"
          fontWeight="700"
          letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          TASKERS
        </text>
        <text
          x="612"
          y="204"
          textAnchor="middle"
          fill="rgba(247,245,238,0.65)"
          fontSize="7"
          fontWeight="700"
          letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          EXECS
        </text>
      </g>

      {/* ===== Beat 05 — adoption locks down the spine (mechanical, not a checklist) ===== */}
      <g className="sf-adopt5">
        {/* Soft orbital — film language, not a panel */}
        <circle
          cx="360"
          cy="310"
          r="210"
          fill="none"
          stroke="rgba(247,245,238,0.12)"
          strokeDasharray="3 10"
        />

        {(
          [
            { y: 168, tag: "ORDER" },
            { y: 218, tag: "TEST" },
            { y: 268, tag: "TRAIN" },
            { y: 318, tag: "SOP" },
            { y: 368, tag: "UAT" },
            { y: 418, tag: "GO-LIVE" },
            { y: 468, tag: "IMPROVE" },
          ] as const
        ).map((lock, i) => (
          <g key={lock.tag}>
            {/* collar through the spine */}
            <rect
              x="328"
              y={lock.y - 11}
              width="64"
              height="22"
              rx="11"
              fill="#0C1A2C"
              stroke="#FACC15"
              strokeWidth="1.8"
            />
            <path
              d={`M336 ${lock.y} H384`}
              stroke="#FACC15"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* check pulse */}
            <circle
              cx="420"
              cy={lock.y}
              r="13"
              fill="#142840"
              stroke="#FACC15"
              strokeWidth="2"
            />
            <path
              d={`M414.5 ${lock.y} l4 4 8 -9`}
              fill="none"
              stroke="#F7F5EE"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="448"
              y={lock.y + 4}
              fill="#FACC15"
              fontSize="11"
              fontWeight="800"
              letterSpacing="0.14em"
              style={{ fontFamily: "var(--font-brand)" }}
            >
              {lock.tag}
            </text>
            {i < 6 && (
              <path
                d={`M360 ${lock.y + 14} V ${lock.y + 36}`}
                stroke="rgba(250,204,21,0.35)"
                strokeWidth="1.5"
              />
            )}
          </g>
        ))}

        {/* Continuous improvement loop at the seat */}
        <path
          d="M300 488 C 280 488, 280 448, 300 448"
          fill="none"
          stroke="#FACC15"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M296 443 l6 5 -6 5"
          fill="none"
          stroke="#FACC15"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="248"
          y="472"
          textAnchor="end"
          fill="rgba(247,245,238,0.5)"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.12em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          CI LOOP
        </text>
      </g>

      {/* ===== Beat 06 — The Living Asset (default end-state) ===== */}
      <g className="sf-asset">
        <circle cx="360" cy="310" r="240" stroke="rgba(247,245,238,0.1)" strokeDasharray="2 9" />
        <g stroke="rgba(247,245,238,0.3)" strokeWidth="1.5">
          <path d="M360 66 v8" />
          <path d="M596 310 h8" />
          <path d="M116 310 h8" />
        </g>
        <g stroke="rgba(247,245,238,0.35)" strokeWidth="1.5">
          <path d="M120 110 h22 M120 110 v22" />
          <path d="M600 110 h-22 M600 110 v22" />
          <path d="M120 528 h22 M120 528 v-22" />
          <path d="M600 528 h-22 M600 528 v-22" />
        </g>
        <text
          x="152"
          y="121"
          fill="rgba(247,245,238,0.45)"
          fontSize="10"
          letterSpacing="0.22em"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          OPERATING MAP
        </text>
        <text
          x="588"
          y="547"
          textAnchor="end"
          fill="rgba(247,245,238,0.35)"
          fontSize="10"
          fontStyle="italic"
          style={{ fontFamily: "var(--font-body)" }}
        >
          a living asset, owned
        </text>
        {/* spokes first; nodes and core overlay (six-constellations.svg canon) */}
        <g stroke="rgba(247,245,238,0.3)" strokeWidth="1.4">
          <path d="M360 310 L 360 110" />
          <path d="M360 310 L 533.2 210" />
          <path d="M360 310 L 533.2 410" />
          <path d="M360 310 L 360 510" />
          <path d="M360 310 L 186.8 410" />
          <path d="M360 310 L 186.8 210" />
        </g>
        {/* weight-band arcs, gap facing the core */}
        <g stroke="#FACC15" strokeWidth="3.5" strokeOpacity="0.55" fill="none">
          <path d="M 331.5 159.4 A 57 57 0 1 1 388.5 159.4" />
          <path d="M 476.2 210 A 57 57 0 1 1 504.7 259.4" />
          <path d="M 504.7 360.6 A 57 57 0 1 1 476.2 410" />
          <path d="M 388.5 460.6 A 57 57 0 1 1 331.5 460.6" />
          <path d="M 243.8 410 A 57 57 0 1 1 215.3 360.6" />
          <path d="M 215.3 259.4 A 57 57 0 1 1 243.8 210" />
        </g>
        {/* six constellations + canon decoders (six-constellations.svg) */}
        <g textAnchor="middle" style={{ fontFamily: "var(--font-brand)" }}>
          {(
            [
              { cx: 360, cy: 110, code: "P2P", sub: "Procure to Pay" },
              { cx: 533.2, cy: 210, code: "O2C", sub: "Order to Cash" },
              { cx: 533.2, cy: 410, code: "P2M", sub: "Plan to Manufacture" },
              { cx: 360, cy: 510, code: "S2S", sub: "Systems that Support" },
              { cx: 186.8, cy: 410, code: "D2R", sub: "Data to Report" },
              { cx: 186.8, cy: 210, code: "MDM", sub: "Master Data" },
            ] as const
          ).map((n) => (
            <g key={n.code}>
              <circle
                cx={n.cx}
                cy={n.cy}
                r="52"
                fill="#142840"
                stroke="rgba(247,245,238,0.8)"
                strokeWidth="2"
              />
              <text
                className="sf-constellation-label"
                x={n.cx}
                y={n.cy + 6}
                fill="rgba(247,245,238,0.95)"
                fontWeight="700"
                letterSpacing="0.14em"
              >
                {n.code}
              </text>
              <text
                className="sf-constellation-sub"
                x={n.cx}
                y={n.cy + 70}
                fill="rgba(247,245,238,0.62)"
                fontWeight="600"
              >
                {n.sub}
              </text>
            </g>
          ))}
        </g>
        {/* gold Data Core — the Common Data Model built out from beat 02 */}
        <circle cx="360" cy="310" r="76" fill="url(#sf-core6-g)" />
        <circle cx="360" cy="310" r="58" fill="#FACC15" />
        <g textAnchor="middle" style={{ fontFamily: "var(--font-brand)" }}>
          <text
            className="sf-core-label"
            x="360"
            y="306"
            fill="#142840"
            fontWeight="800"
            letterSpacing="0.12em"
          >
            DATA CORE
          </text>
          <text className="sf-core-sub" x="360" y="324" fill="rgba(20,40,64,0.85)">
            Common Data Model
          </text>
        </g>
        <path d="M330 312 h60" stroke="rgba(20,40,64,0.4)" strokeWidth="1" />
      </g>
    </svg>
  );
}
