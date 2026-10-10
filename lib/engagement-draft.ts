"use client";

import { useEffect, useRef, useState } from "react";
import { PUBLIC_CATALOG_ITEMS, RETIRED_OUTCOME_IDS } from "./catalog";
import { ContactSchema } from "./contact/schema";
import { resolveOutcomeId } from "./outcome-links";

export const ENGAGEMENT_DRAFT_KEY = "idigdata.engagement-draft.v2";
export const LEGACY_DRAFT_KEYS = [
  "the_block_selection", "the_block_handoff",
  "idigdata_engagement_draft", "idigdata.proposed-engagement.v1",
] as const;
export const ENGAGEMENT_CONTACT_URL = "/contact/?intent=scoping_review";

export type EngagementDraft = {
  version: 2;
  id: string;
  stage: "editing" | "handoff";
  outcomeIds: string[];
  retiredOutcomeIds?: string[];
  notes: string;
  contactMessage: string;
};
type StoragePort = Pick<Storage, "getItem" | "setItem" | "removeItem">;
export type DraftNotice = "none" | "invalid" | "unavailable" | "clear-failed";
const ids = new Set(PUBLIC_CATALOG_ITEMS.map((item) => item.id));
const record = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value);
const text = (value: unknown): value is string => typeof value === "string" && value.length <= 20000;
const strings = (value: unknown): value is string[] =>
  Array.isArray(value) && value.length <= 200 && value.every(text);

export function newEngagementDraft(): EngagementDraft {
  return { version: 2, id: crypto.randomUUID(), stage: "editing", outcomeIds: [], notes: "", contactMessage: "" };
}

export function parseEngagementDraft(raw: string, retiredIds: readonly string[] = RETIRED_OUTCOME_IDS): EngagementDraft | null {
  try {
    const value: unknown = JSON.parse(raw);
    if (!record(value) || value.version !== 2 || !text(value.id) || !value.id ||
      (value.stage !== "editing" && value.stage !== "handoff") ||
      !strings(value.outcomeIds) || !text(value.notes) || !text(value.contactMessage)) return null;
    if (value.retiredOutcomeIds !== undefined && !strings(value.retiredOutcomeIds)) return null;
    const retired = new Set(retiredIds);
    const oldIds = value.outcomeIds;
    const resolved = oldIds.map(id => resolveOutcomeId(id));
    if (resolved.some((id, index) => id === null && !retired.has(oldIds[index]))) return null;
    const retiredOutcomeIds = [...new Set([
      ...value.outcomeIds.filter((id, index) => resolved[index] === null && retired.has(id)),
      ...((value.retiredOutcomeIds as string[] | undefined) ?? []),
    ])];
    if (retiredOutcomeIds.some(id => !retired.has(id))) return null;
    return { version: 2, id: value.id, stage: value.stage,
      outcomeIds: [...new Set(resolved.filter((id): id is string => id !== null))],
      ...(retiredOutcomeIds.length ? { retiredOutcomeIds } : {}), notes: value.notes, contactMessage: value.contactMessage };
  } catch { return null; }
}

function migrateLegacy(raw: string): EngagementDraft | null {
  try {
    const value: unknown = JSON.parse(raw);
    if (!record(value)) return null;
    const hasIds = "outcomeIds" in value;
    const names = value.activeItemNames ?? value.itemNames;
    if (hasIds && !strings(value.outcomeIds)) return null;
    if (names !== undefined && !strings(names)) return null;
    if (value.activeToolNames !== undefined && !strings(value.activeToolNames)) return null;
    if (value.notes !== undefined && !text(value.notes)) return null;
    if (value.customNotes !== undefined && !text(value.customNotes)) return null;
    if (value.domainNotes !== undefined && (!record(value.domainNotes) || !Object.values(value.domainNotes).every(text))) return null;
    if (!hasIds && names === undefined && value.activeToolNames === undefined &&
      value.notes === undefined && value.customNotes === undefined && value.domainNotes === undefined) return null;
    const draft = newEngagementDraft();
    const oldIds = hasIds ? value.outcomeIds as string[] : [];
    const knownNames = new Map(PUBLIC_CATALOG_ITEMS.map((item) => [item.name, item.id]));
    const previousNames = (names as string[] | undefined) ?? [];
    draft.outcomeIds = [...new Set([...oldIds.flatMap(id => { const resolved = resolveOutcomeId(id); return resolved ? [resolved] : []; }),
      ...previousNames.flatMap((name) => knownNames.has(name) ? [knownNames.get(name)!] : [])])];
    const notes = [value.customNotes ?? value.notes ?? ""] as string[];
    const unmapped = hasIds ? oldIds.filter(id => !resolveOutcomeId(id)) : previousNames.filter((name) => !knownNames.has(name));
    if (unmapped.length) notes.push(`Earlier selections to review:\n${unmapped.join("\n")}`);
    if (value.activeToolNames) notes.push(`Earlier build notes:\n${(value.activeToolNames as string[]).join("\n")}`);
    if (record(value.domainNotes)) notes.push(...Object.entries(value.domainNotes).map(([key, note]) => `${key.replaceAll("_", " ")}: ${note}`));
    draft.notes = notes.filter(Boolean).join("\n\n");
    return text(draft.notes) ? draft : null;
  } catch { return null; }
}

export function selectedOutcomeNames(draft: EngagementDraft): string[] {
  return draft.outcomeIds.flatMap((id) => {
    const item = PUBLIC_CATALOG_ITEMS.find((entry) => entry.id === id);
    return item ? [item.name] : [];
  });
}

export function retiredOutcomeLabel(id: string): string {
  if (id === "wa_procure_to_pay") return "Procure-to-Pay";
  return id.replace(/^[a-z]{2}_/, "").split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export function engagementSummary(draft: EngagementDraft): string {
  if (!draft.outcomeIds.length && !draft.retiredOutcomeIds?.length && !draft.notes.trim()) return "";
  const lines = ["Selected priorities", ...selectedOutcomeNames(draft).map((name) => `- ${name}`)];
  if (draft.retiredOutcomeIds?.length) lines.push("Earlier selections requiring scope review (not substituted):", ...draft.retiredOutcomeIds.map(id => `${retiredOutcomeLabel(id)} (${id})`));
  if (draft.notes.trim()) lines.push("Situation and notes:", draft.notes);
  lines.push("Delivery timing: To agree");
  return lines.join("\n");
}

export function composeEngagementMessage(draft: EngagementDraft): { message: string; error: string | null } {
  const message = [draft.contactMessage, engagementSummary(draft)].filter((part) => part.trim()).join("\n\n");
  const valid = ContactSchema.shape.message.safeParse(message).success;
  return { message, error: valid ? null : "Your note and selected priorities exceed 4,000 characters. Shorten the note or Block notes before sending; nothing has been removed." };
}

// Owns editing -> handoff -> server-confirmed clearing. Hydration never writes.
export class EngagementDraftSession {
  draft: EngagementDraft | null = null;
  notice: DraftNotice = "none";
  private hydrated = false;
  private completed = false;
  constructor(private storage: () => StoragePort) {}

  hydrate(): EngagementDraft {
    if (this.hydrated) return this.draft!;
    this.hydrated = true;
    this.draft = newEngagementDraft();
    try {
      const store = this.storage();
      const raw = store.getItem(ENGAGEMENT_DRAFT_KEY);
      if (raw !== null) {
        if (raw === '{"version":2,"completed":true}') return this.draft;
        const parsed = parseEngagementDraft(raw);
        if (parsed) this.draft = parsed;
        else this.notice = "invalid";
        return this.draft;
      }
      let sawInvalid = false;
      const candidates: { draft: EngagementDraft; time: number }[] = [];
      for (const key of LEGACY_DRAFT_KEYS) {
        const legacy = store.getItem(key);
        if (legacy === null) continue;
        const draft = migrateLegacy(legacy);
        if (!draft) { sawInvalid = true; continue; }
        const value = JSON.parse(legacy);
        candidates.push({ draft, time: Date.parse(value.updatedAt ?? value.timestamp ?? "") || 0 });
      }
      candidates.sort((a, b) => b.time - a.time);
      if (candidates.length) this.draft = candidates[0].draft;
      else if (sawInvalid) this.notice = "invalid";
    } catch { this.notice = "unavailable"; }
    return this.draft;
  }

  update(patch: Partial<Pick<EngagementDraft, "outcomeIds" | "notes" | "contactMessage" | "stage">>): boolean {
    if (!this.hydrated || this.completed || !this.draft) return false;
    const next = parseEngagementDraft(JSON.stringify({ ...this.draft, ...patch }));
    if (!next) return false;
    this.draft = next;
    try {
      this.storage().setItem(ENGAGEMENT_DRAFT_KEY, JSON.stringify(next));
      this.notice = "none";
      return true;
    } catch { this.notice = "unavailable"; return false; }
  }

  handoff(): boolean { return this.update({ stage: "handoff" }); }

  complete(httpOk: boolean, response: unknown): boolean {
    if (!httpOk || !record(response) || response.ok !== true) return false;
    this.completed = true;
    this.draft = null;
    this.notice = "none";
    // Tombstone prevents surviving legacy keys from reviving a completed draft.
    try { this.storage().setItem(ENGAGEMENT_DRAFT_KEY, '{"version":2,"completed":true}'); }
    catch { this.notice = "clear-failed"; }
    for (const key of LEGACY_DRAFT_KEYS) {
      try { this.storage().removeItem(key); }
      catch { this.notice = "clear-failed"; }
    }
    // Clear local content even when browser storage cannot be changed.
    return true;
  }
}

function getBrowserStorage(): StoragePort {
  try {
    const testKey = "__idigdata_storage_test__";
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    try {
      const sessionRaw = window.sessionStorage.getItem(ENGAGEMENT_DRAFT_KEY);
      const localRaw = window.localStorage.getItem(ENGAGEMENT_DRAFT_KEY);
      if (sessionRaw && !localRaw) {
        window.localStorage.setItem(ENGAGEMENT_DRAFT_KEY, sessionRaw);
      }
    } catch {}
    return window.localStorage;
  } catch {
    return window.sessionStorage;
  }
}

export function useEngagementDraft() {
  const session = useRef<EngagementDraftSession | null>(null);
  const [draft, setDraft] = useState<EngagementDraft | null>(null);
  const [notice, setNotice] = useState<DraftNotice>("none");
  useEffect(() => {
    const current = new EngagementDraftSession(getBrowserStorage);
    session.current = current;
    setDraft(current.hydrate());
    setNotice(current.notice);
  }, []);
  const update = (patch: Parameters<EngagementDraftSession["update"]>[0]) => {
    const current = session.current;
    if (!current) return false;
    const saved = current.update(patch);
    setDraft(current.draft);
    setNotice(current.notice);
    return saved;
  };
  const complete = (httpOk: boolean, response: unknown) => {
    const current = session.current;
    if (!current) return false;
    const accepted = current.complete(httpOk, response);
    setDraft(current.draft);
    setNotice(current.notice);
    return accepted;
  };
  return { draft, notice, update, complete };
}
