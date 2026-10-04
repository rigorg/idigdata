# LOCAL-ONLY — idigdata-site

This repo is the DigOps **website** on RIG001.

## Environments

| Place | Job |
|---|---|
| Disk + `npm run dev` | Craft. Capo-eyes `http://localhost:3100` |
| GitHub `rigorg/idigdata` | Git custody (old name `loop-smith/idigdata`). Push does **not** move the live site. |
| Vercel project `idigdata` (`loop-smith/idigdata`) | **Host**. Vercel Git is disconnected. |
| idigdata.com | Live. Moves only when Capo Ships a CLI prod deploy, then aliases. |

`working` is the live branch. `main` is behind. **GitHub push is not a publish.** Local commits are not.

**Publish path (Capo Ship only):** `npx vercel --prod --yes` from this repo, then alias `idigdata.com` + `www.idigdata.com` onto that deployment. Do not reconnect Vercel Git or change project/domain settings unless Capo names it.

## Fence (mechanical — not honor system)

Until Capo says **Ship**:

1. Origin **push URL is disabled** on this checkout (`no-push://idigdata-fenced-until-capo-ship`).
2. `.git/hooks/pre-push` refuses `git push` unless `IDIGDATA_SHIP=1`.
3. Agents: local commit OK. **Never restore the push URL. Never set `IDIGDATA_SHIP`. Never `git push`.**

Install / re-apply on this checkout:

```
powershell -File scripts/install-local-fence.ps1
```

Capo Ship (live site): `npx vercel --prod --yes`, then alias `idigdata.com` + `www.idigdata.com`. GitHub push is custody only - it does not publish.

Capo Ship (git custody, only if Capo names it): `scripts/capo-ship-unlock.ps1` then `IDIGDATA_SHIP=1 git push -u origin HEAD`.

Do not change Vercel project / domain / auto-deploy settings without Capo word.

Sibling posture: `operations/` is `no_push`; `brand-content/` push is Operator-enabled for keeper backup (still do not invent publish).
