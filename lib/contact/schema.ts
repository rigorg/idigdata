import { z } from "zod";

/** Shared contact contract — client and /api/contact must stay aligned. */
export const InterestTypeSchema = z.enum([
  "core_transformation",
  "transformation_recovery",
  "applied_agentics",
  "not_sure",
]);

/**
 * Which website form sent the submission. Rides in the `source` column of
 * contact_submissions so each feed can be read apart. Unknown values are
 * rejected; an absent value falls back to `website-<interestType>`.
 */
export const ContactSourceSchema = z.enum([
  "website-contact",
  "website-reader",
  "website-block",
  "website-block-custom",
  "website-collective",
  "website-agentic",
]);

export const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  role: z.string().max(120).optional().default(""),
  company: z.string().max(200).optional().default(""),
  message: z.string().max(4000).optional().default(""),
  interestType: InterestTypeSchema.optional().default("not_sure"),
  source: ContactSourceSchema.optional(),
  anon_session_id: z.string().max(128).optional().nullable(),
  _hp: z.string().max(0).optional(),
});

export type ContactPayload = z.infer<typeof ContactSchema>;
export type InterestType = z.infer<typeof InterestTypeSchema>;
export type ContactSource = z.infer<typeof ContactSourceSchema>;

export const INTEREST_OPTIONS: { value: InterestType; label: string }[] = [
  { value: "core_transformation", label: "Core transformation" },
  { value: "transformation_recovery", label: "Transformation recovery" },
  {
    value: "applied_agentics",
    label: "Applied Agentics inside the same mandate",
  },
  {
    value: "not_sure",
    label: "Not sure yet - start with the operating problem",
  },
];

/** Strip CR/LF before using values in email headers. */
export function sanitizeHeaderField(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

const TEMPLATE_BOILERPLATE_LINES = [
  /^\[THE BLOCK/i,
  /^\[THE COLLECTIVE/i,
  /^\[READER NOTE/i,
  /^Mine:/i,
  /^Standard:/i,
  /^Topic:/i,
  /^Selected Priorities/i,
  /^No outcomes pre-selected/i,
  /^Client Note \/ Situation:/i,
  /^•\s/,
];

/** Extracts the human-entered portion of a contact message outside template wrappers. */
export function extractUserNote(message: string): string {
  return message
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !TEMPLATE_BOILERPLATE_LINES.some((rx) => rx.test(line)))
    .join("\n")
    .trim();
}

function hasRandomCaseToken(text: string): boolean {
  const tokens = text.trim().split(/\s+/);
  for (const raw of tokens) {
    const token = raw.replace(/[^A-Za-z]/g, "");
    if (token.length < 10) continue;
    let transitions = 0;
    for (let i = 1; i < token.length; i++) {
      const prevUpper = token[i - 1] >= "A" && token[i - 1] <= "Z";
      const currUpper = token[i] >= "A" && token[i] <= "Z";
      if (prevUpper !== currUpper) transitions++;
    }
    if (transitions >= 3) return true;
  }
  return false;
}

function hasConsonantSoupWord(text: string): boolean {
  const words = text.trim().split(/\s+/);
  for (const raw of words) {
    const word = raw.replace(/[^A-Za-z]/g, "").toLowerCase();
    if (word.length < 5) continue;
    if (/[bcdfghjklmnpqrstvwxz]{5,}/.test(word)) return true;
  }
  return false;
}

/**
 * Deterministic check for automated form-stuffing bots (dot-stuffed Gmail aliases,
 * random mixed-case gibberish tokens, consonant-soup names, or digits-only notes).
 */
export function isLikelyBotSpam(payload: Pick<ContactPayload, "name" | "email" | "company" | "role" | "message">): boolean {
  const emailLower = payload.email.trim().toLowerCase();
  const atIdx = emailLower.lastIndexOf("@");
  if (atIdx > 0) {
    const local = emailLower.slice(0, atIdx);
    const domain = emailLower.slice(atIdx + 1);
    if ((domain === "gmail.com" || domain === "googlemail.com") && (local.match(/\./g)?.length ?? 0) >= 3) {
      return true;
    }
  }

  const company = payload.company ?? "";
  const role = payload.role ?? "";
  const userNote = extractUserNote(payload.message ?? "");

  if (
    hasRandomCaseToken(payload.name) ||
    hasRandomCaseToken(company) ||
    hasRandomCaseToken(role) ||
    hasRandomCaseToken(userNote)
  ) {
    return true;
  }

  if (hasConsonantSoupWord(payload.name) || hasConsonantSoupWord(company)) {
    return true;
  }

  // Pure numeric string ("funky numbers") in the user note or single spaceless gibberish token
  if (/^\d{5,}$/.test(userNote)) {
    return true;
  }
  if (/^[A-Za-z]{14,}$/.test(userNote)) {
    return true;
  }

  return false;
}
