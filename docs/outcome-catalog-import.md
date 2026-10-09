# Public outcome catalog

Operations on :3300 owns outcome identity and approved public wording. To update the Block, run `npm run catalog:import -- <approved-export.json>` from this repository, then run tests, typecheck, and a production build. Importing is a local code change, not deployment.

The importer accepts the `outcome-catalog-2026-10-09` export contract, verifies the SHA-256 of `{ outcomes, aliases }`, requires 60 unique outcomes with ten in each established category, and refuses unexpected fields. Only public title, summary, and optional detail become website prose. Empty deliverables are intentional: private scope/completion fields are not public copy.

Generated `lib/catalog.ts` records the Operations public revision/hash. Historical website aliases are retained when their target remains public or has an exported successor. Direct links use `/block/?outcome=<stable-id>`; visiting a link opens and focuses its outcome but never selects it. Saved selections resolve aliases before restoring.

Verification performed before catalog admission: 70 automated tests; TypeScript; production build with webpack; browser checks for direct link, historical alias, unknown ID, and selection retained after reload. The default Turbopack build cannot follow the test lane's external node_modules junction; webpack built the same sources successfully. An existing invalid standalone `robots` export in `/hold` was removed; its identical `metadata.robots` remains.

On October 9, 2026, the approved Operations export was imported after atomic admission batch `f384b873-f75c-4f63-99b5-2af8c12202fb`. It contains 60 public outcomes, ten per category, with public hash `1d813b300cda3467b4203e0c9159f91b10fc01c98fd998f033c67258084f887a`. The former board-visibility ID resolves to stakeholder alignment; the existing self-service-BI successor and older website aliases remain resolvable. This import changes the local site artifact; it does not deploy the site or change the active :3100 preview.
