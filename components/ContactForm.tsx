"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import {
  INTEREST_OPTIONS,
  type InterestType,
} from "@/lib/contact/schema";
import { getAnonSessionId, trackWebsiteEvent } from "@/components/analytics/websiteEvents";

type Status = "idle" | "submitting" | "success" | "recorded" | "error";

export type { InterestType };

type Props = {
  showInterestSelect?: boolean;
};

type EngagementDraft = {
  totalBlocks?: number;
  pacing?: string;
  activeItemNames: string[];
  activeToolNames: string[];
  domainNotes: [string, string][];
  fromIntent: boolean;
};

type FieldErrors = {
  name?: string;
  email?: string;
  role?: string;
};

function asStrings(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function asNotes(value: unknown): [string, string][] {
  if (!value || typeof value !== "object") return [];
  return Object.entries(value as Record<string, unknown>).flatMap(([key, note]) =>
    typeof note === "string" && note.trim() ? [[key.replaceAll("_", " "), note.trim()] as [string, string]] : [],
  );
}

function draftText(draft: EngagementDraft): string {
  const lines = ["Proposed engagement"];
  if (typeof draft.totalBlocks === "number" && Number.isFinite(draft.totalBlocks)) {
    lines.push(`Blocks: ${draft.totalBlocks}`);
  }
  if (draft.pacing) lines.push(`Pacing: ${draft.pacing}`);
  if (draft.activeItemNames.length) {
    lines.push("Outcomes:", ...draft.activeItemNames.map((name) => `- ${name}`));
  }
  if (draft.activeToolNames.length) {
    lines.push("Builds:", ...draft.activeToolNames.map((name) => `- ${name}`));
  }
  if (draft.domainNotes.length) {
    lines.push("Notes:", ...draft.domainNotes.map(([key, note]) => `- ${key}: ${note}`));
  }
  return lines.join("\n");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm({ showInterestSelect = false }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState<InterestType>("not_sure");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [leadId, setLeadId] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [draft, setDraft] = useState<EngagementDraft | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const intent = params.get("intent");
      const blocksParam = params.get("blocks");
      const raw = sessionStorage.getItem("idigdata_engagement_draft") || sessionStorage.getItem("idigdata.proposed-engagement.v1");
      const parsed = raw ? (JSON.parse(raw) as Record<string, unknown>) : null;
      const fromStore = parsed !== null && typeof parsed === "object";
      if (!fromStore && intent !== "scoping_review") return;
      const blocksFromUrl = blocksParam && /^\d+$/.test(blocksParam) ? Number(blocksParam) : undefined;
      const totalBlocks =
        fromStore && typeof parsed.totalBlocks === "number" ? parsed.totalBlocks : blocksFromUrl;
      setDraft({
        totalBlocks,
        pacing: fromStore && typeof parsed.pacing === "string" ? parsed.pacing : undefined,
        activeItemNames: fromStore ? asStrings(parsed.activeItemNames) : [],
        activeToolNames: fromStore ? asStrings(parsed.activeToolNames) : [],
        domainNotes: fromStore ? asNotes(parsed.domainNotes) : [],
        fromIntent: intent === "scoping_review",
      });
    } catch {
      setDraft(null);
    }
  }, []);

  function addDraftToNote() {
    if (!draft) return;
    const block = draftText(draft);
    if (block === "Proposed engagement") return;
    setMessage((prev) =>
      prev.includes(block) ? prev : prev.trim() ? `${prev.trim()}\n\n${block}` : block,
    );
  }

  const idBase = useId();
  const nameId = `${idBase}-name`;
  const emailId = `${idBase}-email`;
  const companyId = `${idBase}-company`;
  const roleId = `${idBase}-role`;
  const interestId = `${idBase}-interest`;
  const messageId = `${idBase}-message`;
  const messageHelpId = `${idBase}-message-help`;
  const hpId = `${idBase}-hp`;
  const formErrorId = `${idBase}-form-error`;

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!isEmail(email.trim())) next.email = "Enter a working email.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate();
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      const payload = {
        name,
        email,
        company,
        role,
        message,
        interestType: interest,
        anon_session_id: getAnonSessionId(),
        _hp: hp,
      };
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setLeadId(data.lead_id ?? null);
        trackWebsiteEvent({
          event_type: "contact_submit",
          payload: {
            interest_type: interest,
            lead_id: data.lead_id ?? null,
            company_present: Boolean(company.trim()),
            notification: data.notification ?? null,
          },
        });
        setStatus(data.notification === "sent" ? "success" : "recorded");
        sessionStorage.removeItem("idigdata_engagement_draft");
        sessionStorage.removeItem("idigdata.proposed-engagement.v1");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full bg-paper text-ink font-body text-[16px] px-3 py-3 border border-navy/15 focus:outline-none focus:border-navy focus:border-2 focus:px-[11px] focus:py-[11px] transition-colors";
  const labelClasses = "block font-vollkorn text-[14px] font-bold text-navy mb-1.5";

  if (status === "success" || status === "recorded") {
    return (
      <div className="space-y-3">
        <p className="font-display text-navy text-[22px] leading-snug">
          {status === "success"
            ? "Got it. This lands straight in my inbox - no bot, no queue. I read every one."
            : "Got it. The note is recorded. Email notify did not fire - write robert@idigdata.com if you need a same-day reply."}
        </p>
        {leadId && leadId !== "silenced" ? (
          <p className="font-body text-[13px] text-warm-gray">
            Reference: <span className="font-mono">{leadId}</span>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      action="/contact/"
      noValidate
      className="space-y-6"
    >
      <noscript>
        <p className="border-l-2 border-gold bg-gold/10 px-4 py-3 font-body text-[14px] text-ink">
          JavaScript is off. Email{" "}
          <a className="font-semibold text-navy" href="mailto:robert@idigdata.com">
            robert@idigdata.com
          </a>{" "}
          with the operating problem.
        </p>
      </noscript>
      {status === "error" ? (
        <div
          id={formErrorId}
          role="alert"
          className="border-l-2 border-aubergine bg-aubergine/5 px-4 py-3 font-body text-[14px] text-ink"
        >
          Something went wrong. Try the direct email above, or try again. Your
          note is still in the form.
        </div>
      ) : null}

      {/* Honeypot — visually hidden, off-tabflow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        <label htmlFor={hpId}>Leave this field empty</label>
        <input
          id={hpId}
          name="_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
      </div>

      {draft ? (
        <div className="mb-6 rounded-lg border border-[#142840]/12 bg-[#FBF9F4] p-4">
          <p className="font-vollkorn text-[16px] font-bold text-navy">
            Proposed engagement
          </p>
          <p className="mt-2 text-[14px] leading-[1.55] text-[#334155]">
            Brought across from The Block. The notes stay on this page until
            you add them. They are not in the address bar.
          </p>
          {typeof draft.totalBlocks === "number" ? (
            <p className="mt-3 text-[15px] leading-[1.5]">Blocks: {draft.totalBlocks}</p>
          ) : null}
          {draft.pacing ? (
            <p className="mt-1 text-[15px] leading-[1.5]">{draft.pacing}</p>
          ) : null}
          {draft.activeItemNames.length ? (
            <ul className="mt-3 list-disc pl-5 text-[15px] leading-[1.5]">
              {draft.activeItemNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          ) : null}
          {draft.activeToolNames.length ? (
            <ul className="mt-3 list-disc pl-5 text-[15px] leading-[1.5]">
              {draft.activeToolNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          ) : null}
          {draft.domainNotes.map(([key, note]) => (
            <p key={key} className="mt-2 text-[14px] leading-[1.5] text-[#334155]">
              {key}: {note}
            </p>
          ))}
          {!draft.activeItemNames.length && !draft.activeToolNames.length && !draft.domainNotes.length ? (
            <p className="mt-3 text-[14px] leading-[1.5] text-[#334155]">
              The detail did not come across. You can still write the situation below.
            </p>
          ) : (
            <button type="button" className="p-link mt-3" onClick={addDraftToNote}>
              Add this to the note
            </button>
          )}
        </div>
      ) : null}

      <div>
        <label htmlFor={nameId} className={labelClasses}>
          Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? `${nameId}-error` : undefined}
          onChange={(e) => {
            setName(e.target.value);
            if (fieldErrors.name) {
              setFieldErrors((prev) => ({ ...prev, name: undefined }));
            }
          }}
          className={inputClasses}
          disabled={status === "submitting"}
        />
        {fieldErrors.name ? (
          <p id={`${nameId}-error`} className="mt-1.5 font-body text-[13px] text-aubergine">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={emailId} className={labelClasses}>
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? `${emailId}-error` : undefined}
          onChange={(e) => {
            setEmail(e.target.value);
            if (fieldErrors.email) {
              setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
          className={inputClasses}
          disabled={status === "submitting"}
        />
        {fieldErrors.email ? (
          <p id={`${emailId}-error`} className="mt-1.5 font-body text-[13px] text-aubergine">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={roleId} className={labelClasses}>
          Role / title (optional)
        </label>
        <input
          id={roleId}
          name="role"
          type="text"
          autoComplete="organization-title"
          value={role}
          aria-invalid={fieldErrors.role ? true : undefined}
          aria-describedby={fieldErrors.role ? `${roleId}-error` : undefined}
          onChange={(e) => {
            setRole(e.target.value);
            if (fieldErrors.role) {
              setFieldErrors((prev) => ({ ...prev, role: undefined }));
            }
          }}
          className={inputClasses}
          disabled={status === "submitting"}
        />
        {fieldErrors.role ? (
          <p id={`${roleId}-error`} className="mt-1.5 font-body text-[13px] text-aubergine">
            {fieldErrors.role}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={companyId} className={labelClasses}>
          Company <span className="text-warm-gray text-[13px]">(optional)</span>
        </label>
        <input
          id={companyId}
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClasses}
          disabled={status === "submitting"}
        />
      </div>

      {showInterestSelect ? (
        <div>
          <label htmlFor={interestId} className={labelClasses}>
            What needs to be owned?
          </label>
          <select
            id={interestId}
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value as InterestType)}
            className={inputClasses}
            disabled={status === "submitting"}
          >
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div>
        <label htmlFor={messageId} className={labelClasses}>
          The operating problem{" "}
          <span className="text-warm-gray text-[13px]">(optional)</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby={messageHelpId}
          className={`${inputClasses} resize-y`}
          disabled={status === "submitting"}
        />
        <p
          id={messageHelpId}
          className="mt-1.5 font-body text-[13px] text-warm-gray"
        >
          The real operating problem in your own words. We take it from there.
        </p>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2.5 rounded-[2px] bg-navy px-7 py-3.5 font-vollkorn text-[15px] font-bold tracking-[0.04em] text-porcelain hover:bg-navy-deep focus:outline-2 focus:outline-offset-2 focus:outline-navy disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span
            aria-hidden="true"
            className="inline-block h-[7px] w-[7px] bg-gold"
          />
          {status === "submitting" ? "Sending…" : "Bring the problem"}
        </button>
      </div>
    </form>
  );
}
