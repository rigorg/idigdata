"use client";

/** Parked 2026-08-12 — Capo: uglier duplicate of Systemverse. Do not wire back onto Transformations without GO. */

import { useId, useState } from "react";

type EstateNode = {
  id: string;
  label: string;
  vendor: string;
  href: string;
  angle: number;
};

const NODES: EstateNode[] = [
  { id: "erp", label: "ERP", vendor: "Dynamics 365 · Business Central", href: "#estate", angle: -90 },
  { id: "items", label: "Items", vendor: "1WorldSync", href: "#items", angle: -60 },
  { id: "guest", label: "Guest", vendor: "Toast", href: "#estate", angle: -30 },
  { id: "commerce", label: "Commerce", vendor: "Shopify", href: "#estate", angle: 0 },
  { id: "wms", label: "Warehouse", vendor: "Infios / Korber · HighJump", href: "#estate", angle: 30 },
  { id: "plant", label: "Plant", vendor: "Ignition", href: "#estate", angle: 60 },
  { id: "eam", label: "Maintain", vendor: "Brightly", href: "#estate", angle: 90 },
  { id: "market", label: "Market", vendor: "Nielsen · VIP", href: "#estate", angle: 120 },
  { id: "itsm", label: "Service", vendor: "ServiceNow", href: "#estate", angle: 150 },
  { id: "hr", label: "HR", vendor: "UKG", href: "#estate", angle: 180 },
  { id: "crm", label: "CRM", vendor: "Salesforce", href: "#estate", angle: 210 },
  { id: "ipaas", label: "Integration", vendor: "Boomi", href: "#estate", angle: 240 },
];

const CX = 400;
const CY = 340;
const ORBIT = 210;
const NODE_R = 36;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + Math.cos(rad) * radius,
    y: CY + Math.sin(rad) * radius,
  };
}

export default function EstateMap() {
  const [activeId, setActiveId] = useState<string>("erp");
  const titleId = useId();
  const descId = useId();
  const active = NODES.find((n) => n.id === activeId) ?? NODES[0];

  function select(node: EstateNode) {
    setActiveId(node.id);
    const target = document.getElementById(node.href.slice(1));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <figure className="mt-10">
      <p className="mb-4 font-brand text-[11.5px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
        Command map · data core
      </p>
      <div className="overflow-x-auto overscroll-x-contain">
        <svg
          viewBox="0 0 800 680"
          className="mx-auto h-auto w-full min-w-[min(100%,520px)] max-w-[760px]"
          role="img"
          aria-labelledby={titleId}
          aria-describedby={descId}
        >
          <title id={titleId}>The operating estate - data core and the systems under command</title>
          <desc id={descId}>
            Every circle is a contract negotiated and a vendor run. Items opens
            the item-truth receipt; the rest stay on this command map.
          </desc>
          <rect width="800" height="680" fill="#FBF9F4" />
          <circle
            cx={CX}
            cy={CY}
            r={ORBIT}
            fill="none"
            stroke="#142840"
            strokeOpacity="0.18"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          {NODES.map((node) => {
            const p = polar(node.angle, ORBIT);
            return (
              <line
                key={`spoke-${node.id}`}
                x1={CX}
                y1={CY}
                x2={p.x}
                y2={p.y}
                stroke="#142840"
                strokeOpacity={node.id === activeId ? 0.55 : 0.18}
                strokeWidth={node.id === activeId ? 2 : 1}
              />
            );
          })}
          <circle cx={CX} cy={CY} r="58" fill="#FACC15" stroke="#142840" strokeWidth="2.5" />
          <text
            x={CX}
            y={CY - 6}
            textAnchor="middle"
            fill="#142840"
            style={{ fontFamily: "var(--font-brand), system-ui, sans-serif" }}
            fontSize="13"
            fontWeight="700"
            letterSpacing="1.5"
          >
            DATA
          </text>
          <text
            x={CX}
            y={CY + 14}
            textAnchor="middle"
            fill="#142840"
            style={{ fontFamily: "var(--font-brand), system-ui, sans-serif" }}
            fontSize="13"
            fontWeight="700"
            letterSpacing="1.5"
          >
            CORE
          </text>
          {NODES.map((node) => {
            const p = polar(node.angle, ORBIT);
            const selected = node.id === activeId;
            return (
              <a
                key={node.id}
                href={node.href}
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  select(node);
                }}
              >
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={NODE_R + 5}
                  fill="none"
                  stroke="#FACC15"
                  strokeWidth="2"
                  opacity={selected ? 1 : 0}
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={NODE_R}
                  fill="#FBF9F4"
                  stroke="#142840"
                  strokeWidth={selected ? 2.5 : 1.5}
                />
                <text
                  x={p.x}
                  y={p.y + 4}
                  textAnchor="middle"
                  fill="#142840"
                  style={{ fontFamily: "var(--font-brand), system-ui, sans-serif" }}
                  fontSize="10"
                  fontWeight="700"
                >
                  {node.label}
                </text>
              </a>
            );
          })}
        </svg>
      </div>
      <div className="mx-auto mt-4 grid max-w-[760px] gap-2 sm:grid-cols-3 md:grid-cols-4">
        {NODES.map((node) => {
          const selected = node.id === activeId;
          return (
            <button
              key={node.id}
              type="button"
              aria-pressed={selected}
              onClick={() => select(node)}
              className={`border px-3 py-2 text-left transition-colors ${
                selected
                  ? "border-gold bg-gold/20"
                  : "border-navy/15 bg-paper hover:border-navy/40"
              }`}
            >
              <span className="block font-brand text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                {node.label}
              </span>
              <span className="mt-0.5 block font-body text-[12px] leading-snug text-warm-gray">
                {node.vendor}
              </span>
            </button>
          );
        })}
      </div>
      <p className="mx-auto mt-5 max-w-[62ch] font-display text-[15px] italic leading-snug text-warm-gray md:text-[16px]">
        The operating estate picture. Not a slide. The command map, with shared
        data at the core. Selected: {active.label} · {active.vendor}. 150+
        people under one command.
      </p>
    </figure>
  );
}
