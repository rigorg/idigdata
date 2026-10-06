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
