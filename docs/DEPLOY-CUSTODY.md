# Deploy Custody Record: idigdata-site

This document records the exact physical custody, Vercel linkage, environment configuration, and publication commands for the `idigdata-site` production web application. Custody was transferred to the sovereign FlowCraft estate on 2026-10-04 under Capo authorization.

## 1. Authorized Checkout Path

* **Canonical Linked Checkout:** `C:\flowcraft\instances\digops\idigdata-site`
* **Retired / Legacy Checkout:** `C:\rig001\assets\flowcraft\instances\digops\idigdata-site` (retiring; do not deploy from this path again)
* **Repository Remote:** `https://github.com/rigorg/idigdata.git`
* **Active Working Branch:** `working` (default publication branch)

> **CRITICAL CUSTODY CONSTRAINT:**  
> Vercel CLI production deployments succeed **ONLY** from the canonical linked checkout directory (`C:\flowcraft\instances\digops\idigdata-site`). Attempting to deploy from other clones or git worktrees returns `Not authorized` or `Blocked` from Vercel.

## 2. Vercel Project Linkage & Proven Custody

The deployment linkage is persisted in `.vercel/project.json` inside `C:\flowcraft\instances\digops\idigdata-site`:

* **Project Name:** `idigdata`
* **Project ID:** `prj_Gxe8rjCfP6Euo7w3emq20DN2yXSY`
* **Organization / Team ID:** `team_AP0UAeziJKGYRiXagGW7F3RP`
* **Account Scope:** `loop-smith`
* **Framework:** Next.js
* **Node Version:** `24.x`
* **Custody Proof (2026-10-04):** Successfully deployed deployment `nhr8jkta8` of identical content directly from `C:\flowcraft\instances\digops\idigdata-site`, aliased to production, and read back.

## 3. Operational Lessons

1. **Retry Once on `Not authorized`:** On new clones or terminal sessions, Vercel CLI may initially report `Not authorized` on first token check. Retrying the command once authenticates successfully against the linked scope.
2. **Custody Transfer Protocol:** Custody moves cleanly by performing `vercel link --yes --scope loop-smith` followed by an immediate deployment of identical content before retiring the previous checkout.

## 4. Environment Configuration & Secrets Custody

* **Local Environment File:** `.env.local` lives exclusively inside `C:\flowcraft\instances\digops\idigdata-site`.
* **Zero Secrets in Version Control:** `.env.local` is gitignored and must never be committed, copied to public lanes, or read into agent transcripts.
* **Production Variables:** Managed directly in the Vercel Project Settings dashboard under the `loop-smith` team scope.

## 5. Authorized Production Release Workflow

Production publishing is executed by the cc chief (superintendent) on Capo's word, from the canonical linked checkout; Capo's word per release is the authorization, the run is agentic (Capo, 2026-10-06). The steps are unchanged:

1. **Build & Verify Locally:**
   ```powershell
   npm run typecheck
   npm test
   ```

2. **Trigger Production Deployment (from canonical linked checkout only):**
   ```powershell
   npx vercel --prod --yes --scope loop-smith
   ```

3. **Alias Production Domains to the Resulting Deployment URL:**
   ```powershell
   npx vercel alias <deployment-url> idigdata.com --scope loop-smith
   npx vercel alias <deployment-url> www.idigdata.com --scope loop-smith
   ```

4. **Live Read-Back:**  
   Verify HTTP 200 and expected copy live at `https://idigdata.com/` and `https://www.idigdata.com/`.

5. **Record and Ping:**
   cc reads the live pages back into the brand-content record (`triad/TRIAD.md`), then runs `npm run indexnow` from this checkout so Bing and the IndexNow engines learn the sitemap URLs (expect `202 Accepted`). Google Search Console and Bing Webmaster remain Capo's console checks.

### Release log

| Date | Deployment | Working tip | Run by |
|---|---|---|---|
| 2026-10-04 | nhr8jkta8 (custody proof) | fc3e895 | Capo |
| 2026-10-06 | idigdata-1jya8zijr-loop-smith.vercel.app | 5ec9462 | cc, on Capo's word (Capo's own run hit the first-token `Not authorized`; cc's run succeeded first try) |
| 2026-10-06 (2) | idigdata-j4z91qp9u-loop-smith.vercel.app | 0d1756a | cc, on Capo's word ("go"): Open Graph cards per page |

| 2026-10-07 | idigdata-8x9779wxr-loop-smith.vercel.app | c2987c1 | CX on Capo's explicit release-specific reassignment: narrow Sierra disclosure correction; both domains aliased and read back HTTP 200; nine routes match local 3100; typecheck and 65 tests pass; IndexNow 200 OK. Standing custody policy unchanged. |
| 2026-10-12 | idigdata-ixn108omy-loop-smith.vercel.app | 7245e39 | AG, on Capo's word ("go"): credibility & tone pass; The Block delivery scope framing, Delivery Seam dynamic, trilogy 01->02->03 alignment, Collective maturity calibration & HTTP 202 handling, FAQ mandate expansion, Home & Experience grounded statements; both domains aliased and read back HTTP 200; 76 tests pass; IndexNow 200 OK. |
| 2026-10-12 (2) | idigdata-qdpl9gssf-loop-smith.vercel.app | c16046b | AG, on Capo's word: dialed 3D block geometry rotation; requestAnimationFrame decoupled dragging, GPU layer promotion with will-change: transform, face transition isolation, and wheel scroll debouncing; both domains aliased and read back HTTP 200. |
| 2026-10-12 (3) | idigdata-jr1f6w1cx-loop-smith.vercel.app | 54f1662 | AG, on Capo's word: Legal cookie consent banner & zero pre-consent tracking; active client pageview beacon directly feeding DigOps Supabase and Operations (:3300/website) metrics; opt-out edge suppression; both domains aliased and read back HTTP 200; 79 tests pass; IndexNow 200 OK. |
| 2026-10-12 (4) | idigdata-7qrp0uykv-loop-smith.vercel.app | 150e032 | AG, on Capo's word: Remove rigid 2-to-4-week delivery standard from The Block storefront, intake fullMessage payload, SEO Service schema, and LLM descriptors; align with outcome-configured scoping proposals; both domains aliased and read back HTTP 200; 79 tests pass; IndexNow 200 OK. |

| 2026-10-12 (5) | idigdata-f1mm1xn81-loop-smith.vercel.app | 4c5348a | AG, on Capo's word ("GO"): Overhaul Three Main Events & paired Field Dispatches on /agentic-ai/ (The Operational Seam, Human-Agent Synthesis, The Machine That Builds the Machines; Mary's Sheet, Sovereign Substrate, Delivery Seam); both domains aliased and read back HTTP 200; 79 tests pass; IndexNow 200 OK. |
| 2026-10-12 (6) | idigdata-h4hh4jngv-loop-smith.vercel.app | 942e9d9 | AG, on Capo's word ("go, then push all to vercel"): People-Systems-Workflows rosette hero emblem on /agentic-ai/; SHOP FLOOR metric; topic select synchronization fix; tone & quote attribution updates; Collective hero streamlined with voluntary sharing rule; duplicate footer removed; mobile form padding & 320px header padding tuned; both domains aliased and read back HTTP 200; 79 tests pass; IndexNow 200 OK. |
| 2026-10-13 | idigdata-9yjb1cqne-loop-smith.vercel.app | 215f235 | AG, on Capo's word ('Launch it all the way through: update 3100, Vercel, and git'): Realigned outcome matrix v5 (6 domains, 60 outcomes); non-truncated Block 3D cube faces & selector cards; Robert's voice leading Agentics theme cards; titan quotes as Frontier Corroboration (Chamath / 8090, Benioff / 8090 Investor, Factory 'building the machine that builds the machine'); Operator-Led Agentic Dev Shop framing across Collective and Agentics; 5-layer verification stack; both domains aliased and read back HTTP 200; 79 tests pass; IndexNow 200 OK. |
| 2026-10-13 (2) | idigdata-j0ml0sgcz-loop-smith.vercel.app | 17c9519 | AG, on Capo's word ('get everything up to speed now between local 3100, Vercel, and git'): Elevate entity to Operator-Led Agentic Development Company across The Collective, Agentic AI, Home, and Experience; strengthen Experience Pillar 04 with Sovereign Runtimes & Applied Agentics depth; both domains aliased and read back HTTP 200; 79 tests pass; IndexNow 200 OK. |
| 2026-10-16 | idigdata-7awfwl6zb-loop-smith.vercel.app | 27696f6 | AG, on Capo's word ('push that to Vercel... so Vercel, 3100, and Git are all in fraternity'): Outcome Loop (Intent, Define, Deliver, Outcome) site-wide alignment, CX second-review refinements (Home above-the-fold CTAs & availability, class-based dark variant, Field Brief UTC date fix & mobile diagram stacks, Gartner citation link, plain-language Collective opening), and original tilted M4 watermark locked across Home, Experience, and Contact; both domains aliased and read back HTTP 200; 79 tests pass; IndexNow 200 OK. |
| 2026-10-18 | idigdata-diujvceeh-loop-smith.vercel.app | 75f79b8 | AG, on Capo's word ('let's get 3100 pushed to Vercel. So 3100, Vercel, and Git are all in parity'): Learn-through-work & Collective Living paper plates, first-person practitioner essays across Agentic AI and The Collective (Mary's Sheet, Don WMS + DON, Big-SI ERP bar conversation, Down the Rabbit Hole, Finding the Disco / House of Mirrors), and full triad consensus alignment across Home, Experience, The Block, Agentic AI, and The Collective; both domains aliased and read back HTTP 200; 79 tests pass; IndexNow 200 OK. |
| 2026-10-18 (2) | idigdata-q9aji2052-loop-smith.vercel.app | c7629a6 | AG, on Capo's word (Astra review surgical alignment): Experience healthcare wording tightened ('healthcare facility infrastructure and operational systems delivery') and Sierra applied agentics architecture clarified; Chamath quote linked directly to 'What AI spend does to headcount' (Oct 2, 2026); unverified Benioff quote replaced with Robert's own architectural thesis; Collective hero plain-language peer exchange & maturity distinction moved up and B.O.S.S. unified at 9 Workflow Blocks & 6 Process Constellations (P2P, O2C, P2M, S2S, D2R, MDM); both domains aliased and read back HTTP 200; 79 tests pass. |
| 2026-10-18 (3) | idigdata-kzr6367qp-loop-smith.vercel.app | a7016c1 | AG, on Capo's word ('go' — cold-session Astra website review surgical alignment): Standardize S2S ('Systems to Support') and D2R ('Data to Reporting') across Experience, Home SVG, field keys, and six-constellations diagram; remove '7-Cell' Beehive straggler on Collective; drop 97.1% (134 of 138) subset parenthetical on Agentic AI and Dispatch 03 to match Pitch Deck and Resume; replace rhetorical '80% of their week' with 'hours every week' in Dispatch 02; both domains aliased and read back HTTP 200; 79 tests pass. |
| 2026-10-19 | idigdata-fvcc8mncx-loop-smith.vercel.app | 756fd65 | AG, on Capo's word ('Go for it... Make sure that Verbaas is on the same as local 3100. Make sure that our git is all in parity as well'): Align $10M ERP delivered for $8M ($2M saved) number story across Experience, llms.txt, and llms-full.txt; add full-page Plate I (/agentic-ai/plate/) and Plate II (/collective/plate/) routes with return breadcrumbs and unclipped viewBox; keep Factory ('machine that builds the machine') quote intact; both domains aliased and read back HTTP 200; 79 tests pass; IndexNow 200 OK. |
| 2026-10-21 | idigdata-1wbdrspo6-loop-smith.vercel.app | 85de25a | AG, on Capo's word ('ship'): De-AI ghostwriter overhaul across /agentic-ai/ and /collective/ (51 authored em-dashes reduced to 0 via CC Fable 5.1 + CX Astra), 8090 × IFS workflow/invariant & continuity tie-ins, $142,500 Multi-Entity Management (MEM) intercompany elimination & unrealized inventory profit math, SOX 404 / PCAOB AS 2201 traceability, Lusser's Law (0.95^10 = 59.8%), Segregation of Duties ('the person who cuts the check does not reconcile the bank'), Don WMS colored Post-it floor zones, Disco burndowns, unbranded appointment pages (brand names exclusive to /collective/), unconditional 404 on internal preview routes, and updated facts.txt / llms.txt / llms-full.txt; both domains aliased and read back HTTP 200; 83 tests pass. |

