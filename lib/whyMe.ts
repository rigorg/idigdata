/** Locked Why-me lines. Same four beats on home, interiors, and LinkedIn About. */

export const WHY_ME_BEATS = [
  {
    roman: "I",
    kicker: "The application layer",
    h2: "The application layer is still the job. Enterprises keep buying technology. It still fails on people, vendors, SI work, and data. Nobody owns the map above them. I have been doing this for 30 years: keep the business running while the stack moves.",
    body: "Vendors sell their slice. The SI owns the path. Diagnosers explain it. Still nobody owns that layer. I already have the path.",
  },
  {
    roman: "II",
    kicker: "The arrival of agentics",
    h2: "Enterprise-Agentics is still evolving fast, still sitting on that same old mess. Almost nobody has a reasonable path: what to automate, what a person still owns, and what to leave alone until the data and the people can hold it.",
    body: "Not a debut. The old ERP, vendor, SI, and people story did not leave. Agentics has been landing on it. I already work a path that fits this company: train, deploy, monitor, govern, adopt.",
  },
  {
    roman: "III",
    kicker: "Both layers",
    h2: "What you get is both layers, one owner. The application layer: keep the business running while the stack moves. Enterprise-Agentics is the new layer: owned, not rented. What you keep is a living asset. One job: people, data, and workflows.",
    body: "A capital asset the CFO can defend, not another expense line. Keep-running lives on the application layer. The agentic layer is how the new arrival actually runs. You don't rent another tool.",
  },
] as const;

export const WHY_ME_OWNER = {
  roman: "IV",
  kicker: "An owner",
  h2: "Your transformation gets an owner.",
  body: "I have done both layers, and I come inside to own delivery under the right mandate. The application layer is transformation I have already taken through production. The agentic layer is live work right now: Enterprise-Agentics, already running and still being built, at a pace that is not one person and a laptop. The insurance is earned judgment on the first layer, and that live practice on the second.",
} as const;

export const BOTH_LAYERS_H2 = WHY_ME_BEATS[2].h2;
