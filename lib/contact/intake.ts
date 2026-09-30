import type { ContactPayload } from "./schema";
import { decodeAttributionCookie, mergeAttributionSearch } from "../traffic/attribution";

export const CONTACT_DOOR_SESSION_COOKIE = "idig_door_sid";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const BODY_SESSION = /^(?:[0-9a-f]{32}|[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i;
type ContactAttribution = { doorSessionId?: string; attributionCookie?: string };

function contactSourceUrl(referer: string | null, cookie?: string): string | null {
  if (!referer || referer.length > 8192) return null;
  try {
    const url = new URL(referer);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) return null;
    const live = new URLSearchParams(url.search);
    const attribution = cookie && cookie.length <= 8192 ? decodeAttributionCookie(cookie) : null;
    const merged = new URLSearchParams(mergeAttributionSearch(url.search, attribution) ?? "");
    url.search = "";
    url.hash = "";
    if (url.href.length > 2048) return null;
    for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
      // Explicit Contact URL values win; keep no unrelated query or fragment.
      const value = live.has(key) ? live.get(key) : merged.get(key);
      if (!value || value.length > 512 || /[\r\n\u0000-\u001f]/.test(value)) continue;
      url.searchParams.set(key, value);
      if (url.href.length > 2048) url.searchParams.delete(key);
    }
    return url.href;
  } catch { return null; }
}

export type ContactIntakeRow = {
  name: string;
  email: string;
  role: string;
  company: string | null;
  message: string;
  source: string;
  source_url: string | null;
  user_agent: string | null;
  anon_session_id: string | null;
};
export type CrmInsertResult =
  | { ok: true; id: string | null }
  | { ok: false; error: "not_configured" | "insert_failed" };
export type ContactIntakeResult =
  | { ok: false; error: "crm_failed" }
  | { ok: true; lead_id: string | null; notification: "sent" | "not_configured" | "failed" };

// Only columns present in the verified contact_submissions contract.
// Database defaults own id and created_at; notification status is not a column.
export function contactIntakeRow(data: ContactPayload, headers: Pick<Headers, "get">, attribution: ContactAttribution = {}): ContactIntakeRow {
  return {
    name: data.name,
    email: data.email,
    role: data.role.trim() || "(not supplied)",
    company: data.company.trim() || null,
    message: data.message.trim() || "(no message supplied)",
    source: `website-${data.interestType}`,
    source_url: contactSourceUrl(headers.get("referer"), attribution.attributionCookie),
    user_agent: headers.get("user-agent"),
    anon_session_id: attribution.doorSessionId && UUID.test(attribution.doorSessionId)
      ? attribution.doorSessionId
      : data.anon_session_id && BODY_SESSION.test(data.anon_session_id) ? data.anon_session_id : null,
  };
}

export async function recordContactIntake(
  row: ContactIntakeRow,
  insert: (row: ContactIntakeRow) => Promise<CrmInsertResult>,
  notify: (() => Promise<boolean>) | null,
): Promise<ContactIntakeResult> {
  let crm: CrmInsertResult;
  try { crm = await insert(row); }
  catch { return { ok: false, error: "crm_failed" }; }
  if (!crm.ok) return { ok: false, error: "crm_failed" };
  if (!notify) return { ok: true, lead_id: crm.id, notification: "not_configured" };
  try {
    const sent = await notify();
    return { ok: true, lead_id: crm.id, notification: sent ? "sent" : "failed" };
  } catch {
    // The record is accepted even if notification fails. Do not invite a duplicate insert.
    return { ok: true, lead_id: crm.id, notification: "failed" };
  }
}
