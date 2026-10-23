import { LEGACY_OUTCOME_ALIASES, PUBLIC_CATALOG_ITEMS } from "./catalog";

/** Resolve historical IDs without treating a visit as a selection. */
export function resolveOutcomeId(id: string, ids = new Set(PUBLIC_CATALOG_ITEMS.map(item => item.id)), aliases = LEGACY_OUTCOME_ALIASES): string | null {
  const visited = new Set<string>();
  let current = id;
  while (!ids.has(current)) {
    if (visited.has(current) || !Object.hasOwn(aliases, current)) return null;
    visited.add(current);
    current = aliases[current];
  }
  return current;
}

export function outcomeLinkTarget(search: string) {
  const requested = new URLSearchParams(search).get("outcome");
  if (requested === null) return { kind: "none" } as const;
  const id = resolveOutcomeId(requested);
  const item = PUBLIC_CATALOG_ITEMS.find(item => item.id === id);
  return item ? { kind: "found", item } as const : { kind: "unknown" } as const;
}
