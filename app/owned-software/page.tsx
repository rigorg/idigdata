"use client";

import { useState } from "react";
import Link from "next/link";

interface DoorOutcome {
  id: string;
  name: string;
  tagline: string;
  situation: string;
  deliverables: string[];
}

const DOOR_OUTCOMES: DoorOutcome[] = [
  {
    id: "ow_transformation_management",
    name: "Enterprise transformation management",
    tagline: "Planning, milestones, cutover dependencies, and delivery evidence through go-live.",
    situation:
      "Your transformation plans, dependencies, and delivery updates are spread across teams and tools. You want agents to bring that information together, flag gaps, and prepare updates while people own commitments and go-live decisions.",
    deliverables: [
      "Agentic software that brings approved plans, milestones, and dependencies into a shared view.",
      "Traceable progress updates and readiness checks that flag missing evidence and decisions for review.",
      "Human approval points for plan changes and go-live, with operating guidance and trained owners.",
    ],
  },
  {
    id: "ow_governed_delivery",
    name: "Governed software delivery",
    tagline: "Traceable decisions, testing and delivery evidence, and human authorization.",
    situation:
      "You want agents to help build and change software, while keeping a clear record of the requirements, decisions, tests, and approvals behind each release.",
    deliverables: [
      "An agentic delivery workflow that connects agreed requirements, proposed changes, and test results.",
      "A reviewable record of what changed, what was tested, what remains unresolved, and who approved release.",
      "Defined permissions, human release approval, and documented recovery steps your trained team can use.",
    ],
  },
  {
    id: "ow_workflows_people_systems",
    name: "Workflows across people and systems",
    tagline: "Company-owned data, defined permissions, and human judgment at consequential steps.",
    situation:
      "Recurring work stalls as people gather information, move it between systems, and chase the next action. You want agents to carry agreed steps while people handle exceptions and consequential decisions.",
    deliverables: [
      "An agentic workflow that uses approved company information to carry out defined steps across your systems.",
      "Permissions, handoffs, and human approval points, with exceptions sent to a named person.",
      "A record of each run, with recovery instructions and training for the people who operate it.",
    ],
  },
];

export default function OwnedSoftwareDoorPage() {
  // Four shape-the-work prompt answers
  const [prompt1, setPrompt1] = useState("");
  const [prompt2, setPrompt2] = useState("");
  const [prompt3, setPrompt3] = useState("");
  const [prompt4, setPrompt4] = useState("");

  // Selected outcome IDs
  const [selectedOutcomeIds, setSelectedOutcomeIds] = useState<string[]>([]);

  // Contact inputs
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactRole, setContactRole] = useState("");

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleOutcome = (id: string) => {
    setSelectedOutcomeIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!contactName.trim() || !contactEmail.trim()) {
      setSubmitError("Please provide your name and email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const selectedOutcomes = DOOR_OUTCOMES.filter((o) =>
      selectedOutcomeIds.includes(o.id)
    );

    const selectedSummary =
      selectedOutcomes.length > 0
        ? selectedOutcomes.map((o) => `  - ${o.name}`).join("\n")
        : "  (None explicitly selected - open discussion)";

    const answersBlock = [
      "1. What work should the software help you get done?",
      prompt1.trim() || "(not answered)",
      "",
      "2. What systems and information does that work depend on?",
      prompt2.trim() || "(not answered)",
      "",
      "3. Which decisions must a person approve?",
      prompt3.trim() || "(not answered)",
      "",
      "4. What must your company own and be able to run at handover?",
      prompt4.trim() || "(not answered)",
    ].join("\n");

    const fullMessage = [
      "OWNED SOFTWARE DOOR INTAKE",
      "Door: true",
      "Selected Outcomes:",
      selectedSummary,
      "",
      "Shape the work - Configured Answers:",
      answersBlock,
    ].join("\n");

    const payload = {
      name: contactName.trim(),
      email: contactEmail.trim(),
      company: contactCompany.trim(),
      role: contactRole.trim() || "Owned Software Sponsor",
      message: fullMessage,
      interestType: "applied_agentics",
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(
          data?.error || "Unable to transmit your request. Please retry."
        );
      }
    } catch {
      setSubmitError("Network connection issue. Please retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#040810] text-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[150px] bg-purple-900/20" />
        <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[170px] bg-indigo-900/15" />
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#040810] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
        
        {/* Navigation & Provenance Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
            >
              <div className="w-8 h-8 rounded-md bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono font-bold text-sm shadow-sm">
                B
              </div>
              <span className="font-mono text-sm tracking-wider uppercase text-slate-300 group-hover:text-white">
                idigdata
              </span>
            </Link>
            <span className="text-white/20">/</span>
            <Link
              href="/block"
              className="text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors"
            >
              The Block
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono">
              The Door · Owned software
            </span>
          </div>

          <Link
            href="/block"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 text-xs text-slate-300 hover:text-white transition-all w-fit"
          >
            <span>← Return to The Block</span>
          </Link>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono uppercase tracking-wider w-fit">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>The Door</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Owned software
          </h1>

          <blockquote className="border-l-2 border-purple-400/60 pl-4 py-1 text-base sm:text-lg text-purple-200/90 font-medium italic">
            Co-create software around the way your business works, with controlled access, traceable actions, and clear human decisions.
          </blockquote>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
            Build agentic software that uses your company knowledge to carry out work within the permissions you set. Your people stay in charge of consequential decisions and gain the knowledge to run and improve what is built.
          </p>
        </section>

        {/* Section 1: Shape the work */}
        <section className="rounded-2xl border border-white/10 bg-[#0a1220]/90 p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col gap-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white">
              Shape the work
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Answer the four key questions to frame the scope, dependencies, permissions, and operating handover of your software asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prompt 1 */}
            <div className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <label htmlFor="prompt1" className="text-xs font-semibold text-white leading-snug">
                1. What work should the software help you get done?
              </label>
              <p className="text-[11px] text-slate-400 italic">
                Describe what starts the work, who is involved, and what a good result looks like.
              </p>
              <textarea
                id="prompt1"
                rows={3}
                value={prompt1}
                onChange={(e) => setPrompt1(e.target.value)}
                placeholder="What starts the work, people involved, desired outcome..."
                className="w-full mt-1 rounded-lg border border-white/10 bg-slate-950/60 p-2.5 text-xs text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors resize-y"
              />
            </div>

            {/* Prompt 2 */}
            <div className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <label htmlFor="prompt2" className="text-xs font-semibold text-white leading-snug">
                2. What systems and information does that work depend on?
              </label>
              <p className="text-[11px] text-slate-400 italic">
                Tell us where the information lives, what the software needs to read or change, and what must remain protected.
              </p>
              <textarea
                id="prompt2"
                rows={3}
                value={prompt2}
                onChange={(e) => setPrompt2(e.target.value)}
                placeholder="Systems, data sources, permissions, protected records..."
                className="w-full mt-1 rounded-lg border border-white/10 bg-slate-950/60 p-2.5 text-xs text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors resize-y"
              />
            </div>

            {/* Prompt 3 */}
            <div className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <label htmlFor="prompt3" className="text-xs font-semibold text-white leading-snug">
                3. Which decisions must a person approve?
              </label>
              <p className="text-[11px] text-slate-400 italic">
                Name the actions that need permission, who can give it, and when the software should stop and ask for help.
              </p>
              <textarea
                id="prompt3"
                rows={3}
                value={prompt3}
                onChange={(e) => setPrompt3(e.target.value)}
                placeholder="Approval gates, authorized approvers, exception triggers..."
                className="w-full mt-1 rounded-lg border border-white/10 bg-slate-950/60 p-2.5 text-xs text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors resize-y"
              />
            </div>

            {/* Prompt 4 */}
            <div className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <label htmlFor="prompt4" className="text-xs font-semibold text-white leading-snug">
                4. What must your company own and be able to run at handover?
              </label>
              <p className="text-[11px] text-slate-400 italic">
                Describe the code, data, documentation, rights, training, and operating knowledge your team needs to use, support, and improve the result.
              </p>
              <textarea
                id="prompt4"
                rows={3}
                value={prompt4}
                onChange={(e) => setPrompt4(e.target.value)}
                placeholder="Code ownership, documentation, operating knowledge, team handover..."
                className="w-full mt-1 rounded-lg border border-white/10 bg-slate-950/60 p-2.5 text-xs text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors resize-y"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Built for your company to operate */}
        <section className="rounded-2xl border border-white/10 bg-[#0a1220]/90 p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col gap-3">
          <h2 className="font-serif text-2xl font-semibold text-white">
            Built for your company to operate
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            The result is a professional-grade, company-owned agentic software asset, with a named person in charge. Its permissions govern what it can do; its activity is visible; and its decisions and actions can be traced. Security, testing, recovery, documentation, and training are part of delivery, so your team can operate and improve it. We agree what your company owns and receives at handover: custom code, business data, documentation, operating knowledge, training, and any intellectual property rights and registration the work calls for. Licensed services stay licensed. Shared intellectual property does not mean exclusive ownership. Ownership, access, support responsibilities, and any registration are settled in the conversation and recorded in the agreement.
          </p>
        </section>

        {/* Section 3: Where agentic software can help */}
        <section className="flex flex-col gap-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white">
              Where agentic software can help
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select any of the three focus areas below to include them in your conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOOR_OUTCOMES.map((outcome) => {
              const isSelected = selectedOutcomeIds.includes(outcome.id);
              return (
                <div
                  key={outcome.id}
                  onClick={() => toggleOutcome(outcome.id)}
                  className={`rounded-2xl border p-5 flex flex-col justify-between transition-all cursor-pointer select-none ${
                    isSelected
                      ? "border-purple-400/80 bg-purple-950/30 shadow-lg shadow-purple-500/10 scale-[1.01]"
                      : "border-white/10 bg-[#0a1220]/80 hover:border-white/25 hover:bg-[#0a1220]"
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-serif text-lg font-semibold text-white leading-snug">
                        {outcome.name}
                      </h3>
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? "border-purple-400 bg-purple-500 text-white font-bold text-xs"
                            : "border-white/20 bg-slate-900"
                        }`}
                      >
                        {isSelected && "✓"}
                      </div>
                    </div>

                    <blockquote className="border-l-2 border-purple-400/40 pl-3 text-xs text-purple-200/80 italic">
                      {outcome.tagline}
                    </blockquote>

                    <div className="pt-2">
                      <strong className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Your situation
                      </strong>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {outcome.situation}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <strong className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                        What you get
                      </strong>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {outcome.deliverables.map((deliv, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span
                      className={`text-xs font-mono font-medium ${
                        isSelected ? "text-purple-300" : "text-slate-400"
                      }`}
                    >
                      {isSelected ? "✓ Included in proposal" : "+ Click to include"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Start a conversation & Proposal Form */}
        <section className="rounded-2xl border border-white/10 bg-[#0a1220]/95 p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col gap-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white">
              Start a conversation
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Choosing an outcome starts a conversation about your needs; it does not commit you to an engagement or authorize any work.
            </p>
          </div>

          {submitSuccess ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 flex flex-col items-center text-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                ✓
              </span>
              <h3 className="text-xl font-serif font-semibold text-white">
                Conversation Request Received
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Thank you. Your configured answers and selected outcomes have been recorded. Our team will review them and reach out directly.
              </p>
              <Link
                href="/block"
                className="mt-3 text-xs font-mono text-purple-300 hover:text-white underline"
              >
                ← Return to The Block
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contactName" className="text-xs font-mono text-slate-300">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contactEmail" className="text-xs font-mono text-slate-300">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contactCompany" className="text-xs font-mono text-slate-300">
                    Company Name
                  </label>
                  <input
                    id="contactCompany"
                    type="text"
                    value={contactCompany}
                    onChange={(e) => setContactCompany(e.target.value)}
                    placeholder="Company, Inc."
                    className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contactRole" className="text-xs font-mono text-slate-300">
                    Your Role
                  </label>
                  <input
                    id="contactRole"
                    type="text"
                    value={contactRole}
                    onChange={(e) => setContactRole(e.target.value)}
                    placeholder="e.g. VP Operations / CTO"
                    className="rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {submitError && (
                <div className="p-3 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-mono">
                  {submitError}
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs text-slate-400">
                  {selectedOutcomeIds.length} of 3 outcomes selected
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-purple-500 hover:bg-purple-400 text-white font-semibold text-xs transition-all shadow-lg shadow-purple-500/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
                >
                  <span>{isSubmitting ? "Transmitting..." : "Discuss your needs"}</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          )}
        </section>

      </div>
    </main>
  );
}
