export type TrafficClass =
  | "internal"
  | "agent"
  | "asset"
  | "dev"
  | "preview"
  | "campaign"
  | "external_referral"
  | "direct"
  | "probe"
  | "unknown";

export type SourceKind =
  | "rob_internal"
  | "agent"
  | "asset"
  | "dev"
  | "preview"
  | "campaign"
  | "external_referral"
  | "direct"
  | "probe"
  | "unknown";

export type AttributionConfidence = "exact" | "labeled_fallback" | "unknown";

export type WebsiteSignal = {
  traffic_class: TrafficClass;
  source_kind: SourceKind;
  source_channel: string | null;
  source_medium: string | null;
  source_campaign: string | null;
  attribution_confidence: AttributionConfidence;
  source_refs: Array<Record<string, string>>;
  is_internal: boolean;
  is_bot: boolean;
  is_asset: boolean;
  buyer_signal: boolean;
  suppress_pageview: boolean;
  suppress_reason: string | null;
};

type ClassifyInput = {
  path: string;
  search?: string | null;
  referrer?: string | null;
  userAgent?: string | null;
  hostname?: string | null;
  clientIp?: string | null;
  isInternalMarked?: boolean;
  isFleetMarked?: boolean;
  /** Comma-separated IPs/CIDR-ish exact IPs from DIGOPS_INTERNAL_IPS. */
  internalIps?: string[] | null;
  trackPreviewTraffic?: boolean;
  /**
   * When true (default), clear bots are not written.
   * Door-knock sets false so probes still land in DigOps for noise review.
   */
  suppressBotTraffic?: boolean;
};

const ASSET_PREFIXES = [
  "/_next/",
  "/favicon",
  "/icon",
  "/apple-icon",
  "/og-image",
  "/diagrams/",
  "/brand/",
];

const DIGOPS_SITE_PATHS = new Set([
  "/",
  "/agentics",
  "/agentics/",
  "/applied-agentics",
  "/applied-agentics/",
  "/approach",
  "/approach/",
  "/contact",
  "/contact/",
  "/engagement",
  "/engagement/",
  "/faq",
  "/faq/",
  "/privacy",
  "/privacy/",
  "/hold",
  "/hold/",
  "/systems",
  "/systems/",
  "/work",
  "/work/",
  "/method",
  "/method/",
  "/transformations",
  "/transformations/",
  "/experience",
  "/experience/",
  "/block",
  "/block/",
  "/application-layer",
  "/application-layer/",
  "/agentics",
  "/agentics/",
  "/agentic-layer",
  "/agentic-layer/",
  "/boss",
  "/boss/",
  "/rig",
  "/rig/",
  "/flowcraft",
  "/flowcraft/",
]);

const ASSET_EXTENSIONS = /\.(avif|css|gif|ico|jpg|jpeg|js|json|map|pdf|png|svg|txt|webmanifest|webp|xml)$/i;

/** Broader than the original list — scanners + common automation UAs. */
const BOT_USER_AGENT =
  /(bot|crawler|spider|crawl|slurp|curl\/|wget|python|node-fetch|axios\/|headless|playwright|puppeteer|vercel-screenshot|censys|domainscores|wp2shell|internet-measurement|cms-checker|powershell|facebookexternalhit|twitterbot|linkedinbot|slackbot|bingpreview|preview|x11; linux x86_64)/i;

const FINGERPRINT_IPHONE = /iPhone OS 13_2_3/i;

export function classifyWebsiteSignal(input: ClassifyInput): WebsiteSignal {
  const path = normalizePath(input.path);
  const params = parseSearch(input.search);
  const hostname = cleanHostname(input.hostname);
  const referrerHost = referrerHostname(input.referrer);
  const userAgent = input.userAgent ?? "";
  const clientIp = cleanIp(input.clientIp);
  const ipAllowlisted =
    Boolean(clientIp) &&
    Array.isArray(input.internalIps) &&
    input.internalIps.some((ip) => ip === clientIp);

  const isInternalMarked =
    input.isInternalMarked === true ||
    params.get("internal") === "1" ||
    ipAllowlisted;
  const isFleetMarked =
    input.isFleetMarked === true ||
    params.get("fleet") === "1" ||
    params.get("agent") === "1";

  const isAsset = isAssetPath(path);
  const isBot = isBotUserAgent(userAgent);
  const isProbePath = isProbePathName(path);
  const isDevHost = isLocalHost(hostname);
  const isPreviewHost = hostname.endsWith(".vercel.app");
  const utmSource = clean(params.get("utm_source"));
  const utmMedium = clean(params.get("utm_medium"));
  const utmCampaign = clean(params.get("utm_campaign"));
  const gclid = clean(params.get("gclid"));

  if (isAsset) {
    return suppressed("asset", "asset", "asset_path", {
      is_internal: isInternalMarked || isFleetMarked,
      is_bot: isBot,
      is_asset: true,
      source_refs: [{ type: "path_class", value: path }],
    });
  }

  // Operator + fleet: record (do not suppress) so DigOps Internal tab can show them,
  // while Real hits exclude is_internal.
  if (isInternalMarked || isFleetMarked) {
    const kind: SourceKind = isFleetMarked ? "agent" : "rob_internal";
    const traffic: TrafficClass = isFleetMarked ? "agent" : "internal";
    return tracked(traffic, kind, {
      is_internal: true,
      is_bot: isFleetMarked || isBot,
      buyer_signal: false,
      source_channel: isFleetMarked ? "fleet_marker" : "internal_marker",
      source_refs: [
        {
          type: isFleetMarked ? "fleet_marker" : "internal_marker",
          value: ipAllowlisted ? `ip:${clientIp}` : "true",
        },
      ],
    });
  }

  if (isDevHost) {
    return tracked("internal", "rob_internal", {
      is_internal: true,
      is_bot: isBot,
      buyer_signal: false,
      source_channel: "dev_host",
      source_refs: [{ type: "host_class", value: hostname || "local" }],
    });
  }

  if (isPreviewHost && !input.trackPreviewTraffic) {
    return suppressed("preview", "preview", "preview_host", {
      is_internal: false,
      is_bot: isBot,
      is_asset: false,
      source_refs: [{ type: "host_class", value: hostname }],
    });
  }

  if (isBot && input.suppressBotTraffic !== false) {
    return suppressed("agent", "agent", "bot_like_user_agent", {
      is_internal: false,
      is_bot: true,
      is_asset: false,
      source_refs: [{ type: "user_agent_class", value: "agent" }],
    });
  }

  if (isBot || isProbePath) {
    return tracked(isProbePath ? "probe" : "agent", isProbePath ? "probe" : "agent", {
      source_channel: isProbePath ? "non_site_path" : "bot_like_user_agent",
      source_refs: [
        {
          type: isProbePath ? "path_class" : "user_agent_class",
          value: isProbePath ? path : "agent",
        },
      ],
      is_bot: true,
      buyer_signal: false,
    });
  }

  if (utmSource || gclid) {
    return tracked("campaign", "campaign", {
      source_channel: utmSource ?? "gclid",
      source_medium: utmMedium ?? (gclid ? "cpc" : null),
      source_campaign: utmCampaign ?? gclid,
      source_refs: utmSource
        ? [{ type: "utm_source", value: utmSource }]
        : [{ type: "gclid", value: gclid ?? "1" }],
    });
  }

  if (referrerHost && referrerHost !== hostname.replace(/^www\./, "")) {
    return tracked("external_referral", "external_referral", {
      source_channel: referrerHost,
      source_refs: [{ type: "document_referrer", value: referrerHost }],
    });
  }

  if (!referrerHost) {
    return tracked("direct", "direct", { source_refs: [] });
  }

  return tracked("unknown", "unknown", {
    source_channel: referrerHost,
    attribution_confidence: "unknown",
    source_refs: [{ type: "document_referrer", value: referrerHost }],
    buyer_signal: false,
  });
}

export function isAssetPath(path: string): boolean {
  const normalized = normalizePath(path).toLowerCase();
  if (ASSET_PREFIXES.some((prefix) => normalized.startsWith(prefix))) {
    return true;
  }
  if (normalized === "/robots.txt" || normalized === "/sitemap.xml") {
    return true;
  }
  if (normalized === "/llms.txt" || normalized === "/manifest.webmanifest") {
    return true;
  }
  return ASSET_EXTENSIONS.test(normalized);
}

export function isDigOpsSitePath(path: string): boolean {
  return DIGOPS_SITE_PATHS.has(normalizePath(path));
}

/** Non-marketing paths that scanners hammer — never buyer_signal. */
export function isProbePathName(path: string): boolean {
  const normalized = normalizePath(path).toLowerCase();
  if (isDigOpsSitePath(normalized)) return false;
  if (normalized.endsWith(".php")) return true;
  if (normalized.startsWith("/wp-") || normalized.includes("/wp-admin")) return true;
  if (normalized.startsWith("/.env") || normalized.startsWith("/.git")) return true;
  if (normalized.includes("phpmyadmin") || normalized.includes("xmlrpc")) return true;
  // Anything outside the known DigOps route set is probe/noise for this site.
  return !isDigOpsSitePath(normalized);
}

export function isBotUserAgent(userAgent: string): boolean {
  const ua = userAgent.trim();
  if (!ua) return true;
  if (ua === "Mozilla/5.0") return true;
  if (BOT_USER_AGENT.test(ua)) return true;
  if (FINGERPRINT_IPHONE.test(ua)) return true;
  return false;
}

export function isLocalHost(hostname: string): boolean {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

export function normalizePath(path: string): string {
  if (!path.startsWith("/")) return "/";
  return path.slice(0, 2048);
}

export function parseInternalIpAllowlist(raw: string | null | undefined): string[] {
  if (!raw) return [];
  return raw
    .split(/[,\s]+/)
    .map((part) => cleanIp(part))
    .filter((part): part is string => Boolean(part));
}

function tracked(
  trafficClass: TrafficClass,
  sourceKind: SourceKind,
  overrides: Partial<WebsiteSignal>,
): WebsiteSignal {
  return {
    traffic_class: trafficClass,
    source_kind: sourceKind,
    source_channel: null,
    source_medium: null,
    source_campaign: null,
    attribution_confidence: "exact",
    source_refs: [],
    is_internal: false,
    is_bot: false,
    is_asset: false,
    buyer_signal: true,
    suppress_pageview: false,
    suppress_reason: null,
    ...overrides,
  };
}

function suppressed(
  trafficClass: TrafficClass,
  sourceKind: SourceKind,
  reason: string,
  overrides: Partial<WebsiteSignal>,
): WebsiteSignal {
  return {
    traffic_class: trafficClass,
    source_kind: sourceKind,
    source_channel: reason,
    source_medium: null,
    source_campaign: null,
    attribution_confidence: "exact",
    source_refs: [],
    is_internal: false,
    is_bot: false,
    is_asset: false,
    buyer_signal: false,
    suppress_pageview: true,
    suppress_reason: reason,
    ...overrides,
  };
}

function parseSearch(search: string | null | undefined): URLSearchParams {
  try {
    return new URLSearchParams(search?.startsWith("?") ? search.slice(1) : search ?? "");
  } catch {
    return new URLSearchParams();
  }
}

function referrerHostname(value: string | null | undefined): string {
  if (!value) return "";
  try {
    return cleanHostname(new URL(value).hostname);
  } catch {
    return "";
  }
}

function cleanHostname(value: string | null | undefined): string {
  return value?.trim().toLowerCase().replace(/^www\./, "") ?? "";
}

function clean(value: string | null): string | null {
  const cleaned = value?.trim();
  return cleaned ? cleaned.slice(0, 160) : null;
}

function cleanIp(value: string | null | undefined): string | null {
  const cleaned = value?.trim();
  if (!cleaned) return null;
  // Strip :port from IPv4 host:port forms.
  if (/^\d+\.\d+\.\d+\.\d+:\d+$/.test(cleaned)) {
    return cleaned.split(":")[0] ?? null;
  }
  return cleaned.slice(0, 128);
}
