# Deploy Custody Record: idigdata-site

This document records the exact physical custody, Vercel linkage, environment configuration, and publication commands for the `idigdata-site` production web application. This record establishes operational custody for future asset separation migrations; **no files or checkouts are being moved at this time**.

## 1. Authorized Checkout Path

* **Canonical Linked Checkout:** `C:\rig001\assets\flowcraft\instances\digops\idigdata-site`
* **Repository Remote:** `https://github.com/rigorg/idigdata.git`
* **Active Working Branch:** `working` (default publication branch)

> **CRITICAL CUSTODY CONSTRAINT:**  
> Vercel CLI production deployments succeed **ONLY** from this exact linked checkout directory. Attempting to deploy from other clones or git worktrees (including improvised lanes or worktrees under `C:\rig001-lanes\` or `C:\idigdata-lanes\`) returns `Not authorized` or `Blocked` from Vercel, even when using the identical user account, scope, and project link.

## 2. Vercel Project Linkage

The deployment linkage is persisted in `.vercel/project.json` inside this directory:

* **Project Name:** `idigdata`
* **Project ID:** `prj_Gxe8rjCfP6Euo7w3emq20DN2yXSY`
* **Organization / Team ID:** `team_AP0UAeziJKGYRiXagGW7F3RP`
* **Account Scope:** `loop-smith`
* **Framework:** Next.js
* **Node Version:** `24.x`

## 3. Environment Configuration & Secrets Custody

* **Local Environment File:** `.env.local` lives exclusively inside `C:\rig001\assets\flowcraft\instances\digops\idigdata-site`.
* **Zero Secrets in Version Control:** `.env.local` is gitignored and must never be committed, copied to public lanes, or read into agent transcripts.
* **Production Variables:** Managed directly in the Vercel Project Settings dashboard under the `loop-smith` team scope.

## 4. Authorized Production Release Workflow

Production publishing is an Operator act executed by Capo:

1. **Build & Verify Locally:**
   ```powershell
   npm run typecheck
   npm test
   ```

2. **Trigger Production Deployment (from the linked checkout only):**
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

## 5. Migration Notes for Future Asset Separation

When Capo authorizes the migration of FlowCraft to `C:\flowcraft\`:
1. The `.vercel/project.json` and `.env.local` must be transferred deliberately with Operator authorization.
2. Vercel team authorization and directory trust must be re-verified against the new target path before retiring this checkout.
