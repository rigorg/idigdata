import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ContactSchema,
  sanitizeHeaderField,
} from "@/lib/contact/schema";
import { getDigOpsSupabaseForContact } from "@/lib/server/digopsSupabase";
import { guardJsonPost, parseBoundedJson } from "@/lib/server/requestSecurity";

import { CONTACT_DOOR_SESSION_COOKIE, contactIntakeRow, recordContactIntake, type ContactIntakeRow, type CrmInsertResult } from "@/lib/contact/intake";

import { ATTRIBUTION_COOKIE } from "@/lib/traffic/attribution";

export const runtime = "nodejs";

async function insertContactRow(row: ContactIntakeRow): Promise<CrmInsertResult> {
  const supabase = getDigOpsSupabaseForContact();
  if (!supabase) {
    console.warn("contact form: DigOps Supabase env not configured");
    return { ok: false, error: "not_configured" };
  }

  if (supabase.canReturnInsertedId) {
    const { data: inserted, error } = await supabase.client
      .from("contact_submissions")
      .insert(row)
      .select("id")
      .single();

    if (error || !inserted) {
      console.error(
        `contact form: contact_submissions insert failed: ${
          error?.message ?? "no row returned"
        }`,
      );
      return { ok: false, error: "insert_failed" };
    }

    return { ok: true, id: inserted.id as string };
  }

  const { error } = await supabase.client.from("contact_submissions").insert(row);
  if (error) {
    console.error(`contact form: contact_submissions insert failed: ${error.message}`);
    return { ok: false, error: "insert_failed" };
  }

  return { ok: true, id: null };
}

async function sendNotifyEmail(input: {
  apiKey: string;
  fromAddr: string;
  notifyTo: string;
  replyTo: string;
  subject: string;
  text: string;
}): Promise<boolean> {
  const resend = new Resend(input.apiKey);
  const { error } = await resend.emails.send({
    from: input.fromAddr,
    to: input.notifyTo,
    replyTo: input.replyTo,
    subject: input.subject,
    text: input.text,
  });
  if (error) {
    console.error("contact form email error:", error);
    return false;
  }
  return true;
}

export async function POST(req: NextRequest) {
  const guard = guardJsonPost(req, {
    maxBytes: 16 * 1024,
    rateLimits: [
      { name: "contact-1m", windowMs: 60 * 1000, max: 3 },
      { name: "contact-10m", windowMs: 10 * 60 * 1000, max: 6 },
      { name: "contact-hour", windowMs: 60 * 60 * 1000, max: 20 },
    ],
  });
  if (guard) return guard;

  const bodyResult = await parseBoundedJson(req, 16 * 1024);
  if (!bodyResult.ok) return bodyResult.response;
  const body = bodyResult.body;

  const honeypot = (body as { _hp?: string })?._hp;
  if (honeypot && honeypot.length > 0) {
    return NextResponse.json({ ok: true, lead_id: "silenced" });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation_failed" }, { status: 400 });
  }

  const { name, email, role, company, message, interestType } = parsed.data;
  const safeName = sanitizeHeaderField(name);
  const safeEmail = sanitizeHeaderField(email);

  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.EMAIL_NOTIFY_TO ?? "robert@idigdata.com";
  const fromAddr =
    process.env.EMAIL_NOTIFY_FROM ?? "idigdata website <noreply@idigdata.com>";

  const row = contactIntakeRow(parsed.data, req.headers, {
    doorSessionId: req.cookies.get(CONTACT_DOOR_SESSION_COOKIE)?.value,
    attributionCookie: req.cookies.get(ATTRIBUTION_COOKIE)?.value,
  });
  const isBlockQuote =
    message.includes("THE BLOCK") || message.includes("BLOCK SCOPE QUOTE") || message.includes("DELIVERY QUOTE") || message.includes("FLIGHT SCOPE QUOTE");
  const subject = isBlockQuote
    ? `[The Block Quote] ${safeName}${company ? ` (${sanitizeHeaderField(company)})` : ""} / ${safeEmail}`
    : `[idigdata] Reach out: ${safeName} / ${safeEmail}`;
  const lines = [
    `From: ${safeName} <${safeEmail}>`,
    role ? `Role: ${sanitizeHeaderField(role)}` : null,
    company ? `Company: ${sanitizeHeaderField(company)}` : null,
    `Interest: ${interestType}`,
    ``,
    `Message:`,
    message.trim().length > 0 ? message : "(no message supplied)",
    ``,
    `---`,
    `Source: ${row.source_url ?? "unknown"}`,
    `User-Agent: ${req.headers.get("user-agent") ?? "unknown"}`,
    `Session: ${row.anon_session_id ?? "none"}`,
    `Timestamp: ${new Date().toISOString()}`,
  ].filter((l): l is string => l !== null);

  if (!apiKey) console.error("contact form: RESEND_API_KEY not set");
  const result = await recordContactIntake(
    row,
    insertContactRow,
    apiKey ? async () => {
      const payload = {
        apiKey, fromAddr, notifyTo, replyTo: safeEmail, subject,
        text: lines.join("\n"),
      };
      try {
        let sent = await sendNotifyEmail(payload);
        if (!sent) sent = await sendNotifyEmail(payload);
        return sent;
      } catch (err) {
        console.error("contact form email error:", err);
        return false;
      }
    } : null,
  );
  if (!result.ok) {
    return NextResponse.json(result, { status: 500 });
  }
  // The deployed intake table has no notification-status column.
  // Report the real notification outcome without claiming it was persisted.
  console.info("contact form notification:", result.notification);
  return NextResponse.json(result, { status: result.notification === "sent" ? 200 : 202 });
}
