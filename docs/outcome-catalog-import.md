# Public outcome catalog

Operations on :3300 owns outcome identity and approved public wording. To update the Block, run `npm run catalog:import -- <approved-export.json>` from this repository, then run tests, typecheck, and a production build. Importing is a local code change, not deployment.

The importer accepts the `outcome-catalog-2026-10-09` export contract, verifies the SHA-256 of `{ outcomes, aliases }`, requires 60 unique outcomes with ten in each established category, and refuses unexpected fields. Only public title, summary, and optional detail become website prose. Empty deliverables are intentional: private scope/completion fields are not public copy.

Generated `lib/catalog.ts` records the Operations public revision/hash. Historical website aliases are retained when their target remains public or has an exported successor. Direct links use `/block/?outcome=<stable-id>`; visiting a link opens and focuses its outcome but never selects it. Saved selections resolve aliases before restoring.

Verification performed before catalog admission: 70 automated tests; TypeScript; production build with webpack; browser checks for direct link, historical alias, unknown ID, and selection retained after reload. The default Turbopack build cannot follow the test lane's external node_modules junction; webpack built the same sources successfully. An existing invalid standalone `robots` export in `/hold` was removed; its identical `metadata.robots` remains.

The importer has not imported any editorial candidate as an approved catalog. The initial code commit intentionally retains the prior public content until Operations produces the admitted export.
