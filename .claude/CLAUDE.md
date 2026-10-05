# DigOps idigdata-site (Claude)

Seat: cc. Asset: flowcraft, instance flowcraft-digops, surface idigdata.

Hydrate: this repo's AGENTS.md if present, then the FlowCraft org hydrate: rigorg/flowcraft AGENTS.md and docs/plans/flowcraft/BEARING.md; the FlowCraft Bearing governs; do not substitute the Rig Bearing; Capo alone authorizes execution; the published-word record is rigorg/digops-brand-content triad/TRIAD.md, edit it first; deploy custody is docs/DEPLOY-CUSTODY.md.

## What this repo is

Next.js marketing / positioning website for the **DigOps** FlowCraft instance (DIG LLC) at idigdata.com. Not a personal portfolio with DigOps footnotes.

## RIG001 homes

| Role | Path |
|---|---|
| **This codebase** | `C:\rig001\assets\flowcraft\instances\digops\idigdata-site` |
| **Brand / triad content** | `..\brand-content\` |
| **Operations / CRM** | `..\operations\` |
| **Org doctrine** | `rigorg/flowcraft` (`https://github.com/rigorg/flowcraft`) |

Retired Capo homes: `C:\rig\code\idigdata`, `k2s\idigdata\.`.

## Isolation

Pre-admission DigOps product repo. Do not edit RIG source, Rail, Glass, or doctrine. Git only from this root (`git -C` + `rev-parse --show-toplevel`). Never run Git from DigOps container paths - they resolve into the estate repo.

## Stack

Pinned versions + Supabase bridge: [STACK.md](../STACK.md). Design tokens live in `app/globals.css` `@theme`.

## Copy

Authoritative hunt edit surface: `..\brand-content\triad\`. Firm ledger: `..\brand-content\firm\`. Sync into code when shipping; do not let React become the only copy source.

## Data plane

- Intake + telemetry bridge → **DigOps** Supabase (`emwhsenwinqrgtyavpee`) via `DIGOPS_SUPABASE_*`.
- Website-own `NEXT_PUBLIC_SUPABASE_*` - reserved / light use (not the beacon sink).
- Open Vercel/Supabase hygiene: `..\INFRA-OPEN.md`.

## Ports

`npm run dev` → **3100**. On `EADDRINUSE`: `netstat -ano | findstr :3100` then `taskkill //F //PID <pid>`.

## Ship / settle / push

Remote push enabled (Vercel → **idigdata.com**).

- **ship / settle / no dirt / close out** on site work → commit **and** push in the same turn. No second confirmation.
- Do **not** push this repo on a brand-only or ops-only settle - Vercel ships production. Push here when the session's outcome includes the site.
- Real stops only: auth fail, divergent remote, secrets, merge conflict - name the block.

See [LOCAL-ONLY.md](../LOCAL-ONLY.md) (instance copy may lag; this seat rule wins for this repo).
