/**
 * Field ProofRail marks - vendor command / hands-on, not endorsement theater.
 *
 * First-paint placement (Transformations):
 *   operators → hero once (grayscale identification; Capo permitted 2026-08-13)
 *   systems → ESTATE_APP_GROUPS under Systemverse (same)
 *   partners → ownership chamber only
 *   items → ITEM_FLAGSHIP (1WorldSync) only
 * Full arrays below stay inventory for licensed lockups / add-back chambers.
 *
 * System and model marks in public/brand/field/ are identification use
 * (grayscale). Capo permitted that use 2026-08-13. Not endorsement.
 */

export type FieldMark = {
  name: string;
  /** Optional owned lockup. Third-party marks stay typographic until a file is wired. */
  src?: string;
  /** True when the lockup already includes the word - do not repeat the name. */
  includesWord?: boolean;
  href?: string;
  /** Crest / square lockups need more chip height than a wide wordmark. Long = extra-wide wordmark, capped so it does not dominate. */
  fit?: "wide" | "mark" | "long";
  /** Thin lockups that wash out under grayscale. */
  ink?: "heavy";
};

const sys = (file: string) => `/brand/field/systems/${file}`;
const op = (file: string) => `/brand/field/operators/${file}`;
const par = (file: string) => `/brand/field/partners/${file}`;
const mod = (file: string) => `/brand/field/models/${file}`;

export const MARQUEE_CPG: FieldMark[] = [
  { name: "Duckhorn", src: op("duckhorn.webp"), includesWord: true },
  {
    name: "H.W. Greenham & Sons",
    src: op("greenham.svg"),
    includesWord: true,
    fit: "long",
  },
  {
    name: "Valley Fine Foods",
    src: op("valley-fine-foods.png"),
    includesWord: true,
  },
];

export const MARQUEE_AEC: FieldMark[] = [
  { name: "SOM", src: op("som.svg"), includesWord: true },
  { name: "HOK", src: op("hok.svg"), includesWord: true, fit: "mark" },
  { name: "Turner Construction", src: op("turner.svg"), includesWord: true },
  {
    name: "PCL Construction",
    src: op("pcl.svg"),
    includesWord: true,
    fit: "mark",
    ink: "heavy",
  },
];

const EVERYTABLE: FieldMark = {
  name: "Everytable",
  src: op("everytable.svg"),
  includesWord: true,
};
const FOLEY: FieldMark = {
  name: "Foley Family Wine & Spirits",
  src: op("foley-family-wines.png"),
  includesWord: true,
};
const MGM: FieldMark = {
  name: "MGM Resorts",
  src: op("mgm-resorts.svg"),
  includesWord: true,
};
const SHARKS: FieldMark = {
  name: "San Jose Sharks",
  src: op("san-jose-sharks-wordmark.png"),
  includesWord: true,
};
const WYNN: FieldMark = {
  name: "Wynn Resorts",
  src: op("wynn-resorts.svg"),
  includesWord: true,
  fit: "wide",
  ink: "heavy",
};
const HCA: FieldMark = {
  name: "HCA Healthcare",
  src: op("hca-healthcare.svg"),
  includesWord: true,
};

export const MARQUEE_HOSPITALITY: FieldMark[] = [MGM, WYNN, HCA, SHARKS];

/** Mixed types - CPG, AEC, food, wine, sports and entertainment, healthcare. */
export const MARQUEE_OPERATORS: FieldMark[] = [
  MARQUEE_AEC[0],
  EVERYTABLE,
  MARQUEE_AEC[2],
  FOLEY,
  SHARKS,
  MARQUEE_AEC[1],
  MARQUEE_CPG[0],
  MGM,
  MARQUEE_CPG[1],
  WYNN,
  MARQUEE_AEC[3],
];

/** Labeled board for the application-layer hang. Same two-tone lockups. */
export const MARQUEE_OPERATOR_GROUPS: FieldMarkGroup[] = [
  {
    label: "CPG, wine, and food",
    marks: [
      MARQUEE_CPG[0],
      FOLEY,
      MARQUEE_CPG[1],
      MARQUEE_CPG[2],
      EVERYTABLE,
    ],
    columns: 3,
  },
  {
    label: "Architecture and construction",
    marks: MARQUEE_AEC,
    columns: 4,
  },
  {
    label: "Sports, entertainment, and healthcare",
    marks: MARQUEE_HOSPITALITY,
    columns: 4,
  },
];

export const PARTNERS: FieldMark[] = [
  { name: "Accenture", src: par("accenture2.svg"), includesWord: true },
  { name: "RSM", src: par("rsm.png"), includesWord: true },
];

export type FieldMarkGroup = {
  label: string;
  marks: FieldMark[];
  /** Even grid. 4 = wrap and center leftovers. 3 = even threes. */
  columns?: 2 | 3 | 4;
};

const d365: FieldMark = { name: "Dynamics 365", src: sys("dynamics365.svg") };
const bc: FieldMark = { name: "Business Central", src: sys("dynamics365.svg") };
const azure: FieldMark = { name: "Azure", src: sys("microsoftazure.svg") };
const powerBi: FieldMark = { name: "Power BI", src: sys("powerbi.svg") };
const fabric: FieldMark = { name: "Microsoft Fabric", src: sys("fabric.svg") };
const teams: FieldMark = {
  name: "Teams",
  src: sys("microsoftteams.svg"),
};
const sharePoint: FieldMark = {
  name: "SharePoint",
  src: sys("microsoftsharepoint.svg"),
};
const activeDirectory: FieldMark = {
  name: "Active Directory",
  src: sys("activedirectory.png"),
  includesWord: true,
};
const slack: FieldMark = {
  name: "Slack",
  src: sys("slack.svg"),
  includesWord: true,
};
const zoom: FieldMark = {
  name: "Zoom",
  src: sys("zoom-wordmark.svg"),
  includesWord: true,
  fit: "long",
};
const databricks: FieldMark = { name: "Databricks", src: sys("databricks.svg") };
const fivetran: FieldMark = {
  name: "Fivetran",
  src: sys("fivetran.svg"),
  includesWord: true,
};
const boomi: FieldMark = { name: "Boomi", src: sys("boomi.svg") };
const oneStream: FieldMark = {
  name: "OneStream",
  src: sys("onestream.svg"),
};
const solver: FieldMark = {
  name: "Solver",
  src: sys("solver.svg"),
  includesWord: true,
};
const johnGalt: FieldMark = {
  name: "John Galt Solutions",
  src: sys("johngalt.svg"),
  includesWord: true,
};
const ukg: FieldMark = { name: "UKG", src: sys("ukg.svg"), includesWord: true };
const salesforce: FieldMark = {
  name: "Salesforce",
  src: sys("salesforce.svg"),
  includesWord: true,
};
const serviceNow: FieldMark = {
  name: "ServiceNow",
  src: sys("servicenow.svg"),
  includesWord: true,
};
const shopify: FieldMark = { name: "Shopify", src: sys("shopify.svg") };
const toast: FieldMark = {
  name: "Toast",
  src: sys("toast.svg"),
  includesWord: true,
};
const worldSync: FieldMark = {
  name: "1WorldSync",
  src: sys("1worldsync.svg"),
  includesWord: true,
};
const infios: FieldMark = {
  name: "Infios",
  src: sys("infios.svg"),
  includesWord: true,
};
const ignition: FieldMark = {
  name: "Ignition",
  src: sys("ignition.svg"),
  includesWord: true,
};
const brightly: FieldMark = {
  name: "Brightly",
  src: sys("brightly-logo.svg"),
  includesWord: true,
};
const nielsen: FieldMark = {
  name: "NielsenIQ",
  src: sys("niq.svg"),
  includesWord: true,
};
const vip: FieldMark = {
  name: "Vermont Information Processing",
  src: sys("vip.svg"),
  includesWord: true,
};
const aras: FieldMark = {
  name: "Aras",
  src: sys("aras.png"),
  includesWord: true,
};
const procore: FieldMark = {
  name: "Procore",
  src: sys("procore.svg"),
  includesWord: true,
};

/** Grouped board under Systemverse. Platform first, then how the estate actually runs. */
export const ESTATE_APP_GROUPS: FieldMarkGroup[] = [
  {
    label: "Microsoft",
    marks: [d365, bc, azure, powerBi, fabric, sharePoint, activeDirectory],
    columns: 4,
  },
  {
    label: "Data and finance",
    marks: [databricks, fivetran, boomi, oneStream, solver, johnGalt],
    columns: 3,
  },
  {
    label: "Work, guest, and collaboration",
    marks: [ukg, salesforce, serviceNow, shopify, toast, slack, teams, zoom],
    columns: 4,
  },
  {
    label: "Item, plant, and market",
    marks: [
      worldSync,
      infios,
      ignition,
      brightly,
      aras,
      procore,
      nielsen,
      { ...vip, fit: "mark" },
    ],
    columns: 4,
  },
];

export const ESTATE_APPS: FieldMark[] = ESTATE_APP_GROUPS.flatMap(
  (group) => group.marks,
);

export const ITEM_FLAGSHIP: FieldMark[] = [
  { name: "1WorldSync", src: sys("1worldsync.svg"), includesWord: true },
];

export const ITEM_APPS: FieldMark[] = [
  { name: "1WorldSync" },
  { name: "Dynamics 365" },
  { name: "Business Central" },
  { name: "Shopify" },
];

export const RETAIL_APPS: FieldMark[] = [
  { name: "Shopify" },
  { name: "Toast" },
];

export const MARKET_APPS: FieldMark[] = [
  { name: "NielsenIQ" },
  { name: "Vermont Information Processing" },
  { name: "Power BI" },
  { name: "Microsoft Fabric" },
  { name: "Databricks" },
];

export const LOGISTICS_APPS: FieldMark[] = [
  { name: "Infios" },
];

export const PLANT_APPS: FieldMark[] = [
  { name: "Ignition" },
  { name: "Brightly" },
  { name: "Aras" },
];

export const FRONTIER_MODELS: FieldMark[] = [
  { name: "Anthropic", src: mod("anthropic.svg") },
  { name: "OpenAI", src: mod("openai.svg") },
  { name: "Gemini", src: mod("gemini.svg") },
  { name: "xAI", src: mod("xai.svg") },
  { name: "Kimi", src: mod("kimi.svg") },
  { name: "Thinking Machines Lab" },
];

export const BUILDER_STACK: FieldMark[] = [
  {
    name: "BOSS",
    src: "/brand/systems/boss-banner-logo.png",
    includesWord: true,
  },
  {
    name: "The Rig",
    src: "/brand/systems/rig-banner-logo.png",
    includesWord: true,
  },
  {
    name: "FlowCraft",
    src: "/brand/systems/flowcraft-banner-logo.png",
    includesWord: true,
  },
];
