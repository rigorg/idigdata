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

Production publishing is an Operator act executed by Capo:

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
