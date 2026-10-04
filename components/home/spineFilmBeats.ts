export type Beat = {
  n: string;
  chip: string;
  label: string;
  line: string;
};

export const BEATS: Beat[] = [
  {
    n: "01",
    chip: "Gap",
    label: "Nobody owns it",
    line: "Parts get delivered. Platforms get licensed. Vendors manage their slice. The business still has no one accountable for the whole - people, workflows, data, systems, decisions, and adoption.",
  },
  {
    n: "02",
    chip: "Inside",
    label: "Inside the company",
    line: "I sit on the customer side - with the people who do the work - and take ownership of the operating result, not a vendor workstream.",
  },
  {
    n: "03",
    chip: "Whole",
    label: "The whole system",
    line: "ERP is usually the center of gravity, never the whole job. WMS, MES, CRM, EAM, data, APIs, integration, vendors, cutover, and stabilization have to work as one system the business can run.",
  },
  {
    n: "04",
    chip: "Control",
    label: "Above the vendors",
    line: "Program control the company owns - roadmap, delivery state, SI and vendor orchestration under one accountable seat. Trades stay trades.",
  },
  {
    n: "05",
    chip: "Run",
    label: "Keep running",
    line: "Transformation while the company still operates - adoption, training, continuous improvement - not go-live theater that hands the floor duct tape.",
  },
  {
    n: "06",
    chip: "Keep",
    label: "What you keep",
    line: "A living operating asset the business owns - and agents that run under boundaries, human validation, and named owners. Capability the company can run and extend.",
  },
];

export const MOBILE_BEATS: Array<{ beat: number; label: string; line: string }> = [
  {
    beat: 1,
    label: "Nobody owns it",
    line: "Parts get delivered. Platforms get licensed. Vendors manage their slice. The business still has no one accountable for the whole - people, workflows, data, systems, decisions, and adoption.",
  },
  {
    beat: 3,
    label: "Inside the company · The whole system",
    line: "Customer-side ownership of the operating result. ERP is the center of gravity, never the whole job - WMS, MES, CRM, EAM, data, APIs, integration, vendors, cutover, and stabilization as one system.",
  },
  {
    beat: 5,
    label: "Above the vendors · Keep running",
    line: "Program control the company owns - then transformation while the company still operates. Adoption, training, continuous improvement - not go-live theater.",
  },
  {
    beat: 6,
    label: "What you keep",
    line: "A living operating asset the business owns - agents under boundaries, human validation, and named owners. Capability the company can run and extend.",
  },
];

/** Even sixths - hard cuts, no muddy mid-fade zone. */
export function beatFor(p: number): number {
  if (p < 1 / 6) return 1;
  if (p < 2 / 6) return 2;
  if (p < 3 / 6) return 3;
  if (p < 4 / 6) return 4;
  if (p < 5 / 6) return 5;
  return 6;
}

/** Progress midpoint for a beat (1-6). */
export function progressForBeat(beat: number): number {
  return Math.min(0.99, (beat - 0.5) / 6);
}
