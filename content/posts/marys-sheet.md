---
title: "Transforming Zeros and Ones: What Is Old Is New Again, Mary's Sheet & Don WMS"
date: 2026-10-18
slug: marys-sheet
description: "Why over 70% of ERP initiatives fail to meet their expectations—and why even in the era of agentics, solving enterprise transformation still comes down to people, data, systems, and workflows."
topic: "Field Dispatch 01 // Transforming Zeros and Ones"
---

# Transforming Zeros and Ones: What Is Old Is New Again, Mary's Sheet & Don WMS

Look back across the last twenty years of enterprise technology—from legacy AS/400s and client-server suites to modern cloud ERPs—and one sobering reality has never changed: [Gartner predicts](https://www.gartner.com/en/documents/5697891) that **more than 70% of recently implemented ERP initiatives will fail to fully meet their original business-case goals**.

You see the battle scars everywhere today, from executive boardrooms to viral war stories on TikTok and LinkedIn. Too many transformations begin the exact same way: in an air-conditioned conference room with a pristine vendor slide deck promising single-pane visibility and instant automation. Ten million, twenty million, fifty million dollars are committed.

And then the cutover date arrives and collides with the physical operating floor.

Why? Because enterprise transformations rarely fail inside the database engine. They fail **between the seams**—across siloed data, disparate departmental systems, decades-old bastardized item schemas, unwritten floor workarounds, and the human weight of stakeholder alignment and change management.

**What is old is new again.** Today, as companies rush to layer AI agents on top of their enterprise stack, it is the **exact same problem—only more complicated**. It still comes down to **people, data, systems, and workflows**.

---

## 1. Between the Seams: Why Agentics Makes the Fundamentals Even More Consequential

In the conversation around enterprise AI and software delivery, **8090** and frontline operators alike point to the chasm between **Stated Reality** and **Actual Reality**: much of a company's real operating logic lives in unwritten parameters, exception handling, and frontline habits that automated database scrapers never see.

> *"A job is more than the sum of its tasks. What's more intangible is the part between them: deciding which task matters, in what order, and when to stop; coordinating with people on other teams; and being the one accountable when it goes wrong."*
> — Chamath Palihapitiya, CEO of 8090 ([*"What AI spend does to headcount,"* Oct 2, 2026](https://research.socialcapital.com/p/ai-and-employment))

Putting autonomous AI agents on top of disconnected systems does not magically heal a fractured enterprise. When you accelerate broken data models and unmapped cross-department handoffs at machine speed, you only automate the friction.

Each department maintains its own partial view of the world: supply chain looks at forward forecasts, production looks at tank or machine kinetics, packaging looks at line speed, warehousing looks at dock staging, and finance looks at cleared invoices. Without a unified, company-owned Data Core connecting **people, data, systems, and workflows**, frontline veterans bridge the gap by hand.

---

## 2. Note from the Field 01-A — "Mary's Sheet": The Plant Floor vs. The Database

To see how the seam plays out on the physical floor, consider **Mary**—a composite portrait drawn from frontline schedulers and plant coordinators I worked alongside across multi-facility brewing and manufacturing cutovers.

Every morning at 6:30 AM, Mary arrives on the floor with a green metal clipboard holding three tightly folded 11x17 ledger spreadsheets. Those sheets capture the unwritten operating core of the facility:
- Which operators hold active pasteurizer or centrifuge certifications.
- Which crew members need light-duty or rotational assignments on a given shift.
- How overtime balances and shift rotations affect line coverage.
- Which packaging crew works best together on tight line changeovers.
- The coordination with the cellar team when a tank requires extended caustic wash cycles between specialty runs.

> **NOTE FROM THE FIELD 01-A // THE PLANT FLOOR VS. THE DATABASE: MARY'S SHEET**
> Walk almost any manufacturing or brewing floor after a multimillion-dollar ERP go-live and you will find "Mary's Sheet"—the folded 11x17 spreadsheet on a green metal clipboard keeping the operation running. Drawn from frontline supervisors I worked alongside across plant cutovers, the pattern was unmistakable: in the database, Packaging Line 2 showed green, idle, and ready for a rush batch; twenty feet away on the concrete floor, mechanics had the filling pump unbolted on the bench to replace a weeping seal before logging the ticket at the terminal.
>
> No AI agent scraping databases alone can catch an unlogged physical exception. Only floor visibility, connected operational workflows, and cross-department trust prevent a costly collision.
> — Robert Paddock · Note from the Field 01-A (`MARY'S SHEET`)

When we unified the scheduling and floor workflows around how the plant actually ran instead of forcing the floor to serve a rigid screen, the human side surfaced immediately: without that green metal clipboard, the quiet fear behind almost every transformation is *"Well, I guess I'm going to lose my job and have nothing to do."*

The answer that mattered most at cutover was simple: *"You're going to have more important things to do, Mary."*

When software absorbs the clerical machinery—the certification matching, the overtime constraints, the live feeds between tank status and packaging lines—it does not eliminate frontline leaders. It liberates them to walk the floor with presence, spot maintenance issues early, and mentor the next generation of supervisors—a lesson that directly governs how we design human-in-the-loop agentic workflows today.

---

## 3. Note from the Field 01-B — "Don WMS," Unifying a 40-Year Bastardized Item Catalog, and His Partner, "DON"

If *Mary's Sheet* shows what happens when scheduling workflows ignore the plant floor, **Don WMS** shows the other side of *Transforming Zeros and Ones*: stakeholder and change management inside one of the single hardest problems in any legacy manufacturer or distributor—**getting legacy items into a unified item catalog**.

Walk into almost any multi-decade manufacturing or distribution business and look at how items are identified:
- **Bastardized "Smart Schemas"**: Decades ago, someone tried to design a "smart schema"—encoding product family, size, finish, or warehouse zone right inside the item number. Over 30 to 40 years of new product lines, acquisitions, and workarounds, that schema got bastardized over time, yet people in the field are still attached to their old codes.
- **Third-Party Item Translations**: Vendors ship pallets without proper labels or use their own supplier part numbers, while customers, 3PLs, and distributors rely on external item translations to do business.
- **Internal Departments with Different Keys**: Inside the company, purchasing, manufacturing, warehousing, sales, and finance each use different keys across different legacy systems to identify the exact same physical item.

> **NOTE FROM THE FIELD 01-B // PERSONAL FIELD NOTE: "DON WMS," THE UNIFIED ITEM CATALOG & HIS PARTNER, "DON"**
> This was before agentics—we called him **Don WMS**. Don worked for a multi-location manufacturing and distribution company in New York, in tight city quarters cobbled together over 30–40 years where every inch of space was at a premium and constantly in movement. Taking the systems they had—bastardized item schemas, third-party item translations, internal departments with different system keys, and vendors that didn't get proper labels—he built a fragile system that worked because he knew where every item was, where every location was, and where every person was.
>
> Unifying an item data model is one of the hardest things in legacy manufacturing, and transformation was very difficult on Don and his crew because his purpose was knowing where everything was at. Making Don WMS part of that item-catalog journey was instrumental—both for Don and for the success of the project. And when we designed the floor workflows, Don still did what Don loved to do: be around the people, armed with knowledge. Now his knowledge came from—or was helped by—real-time data on an iPad. He still touched base, talked to all the people, and knew where everything was at, but double-checked with his new partner. So it was still Don WMS, but Don WMS had a partner, **DON**—and that formative lesson is why every agentic workflow block we build today starts with the operator's domain pride.
> — Robert Paddock · Note from the Field 01-B (`DON WMS + DON`)

---

## 4. What Is Old Is New: The Bedrock Rules of the Operational Seam

Whether you are replacing a 30-year-old AS/400 or deploying multi-harness AI agents across an enterprise, the rules of the operational seam do not change:

1. **Start With the People Who Hold the Floor Together**: Bring your Marys and your Dons directly into the data and workflow design. Their unwritten exception rules are the real specification of the business.
2. **Reconcile the Data Core Before Automating**: Unify bastardized item catalogs, vendor translations, and cross-department keys into a company-owned Data Core so every workflow—and every agent—speaks the same truth.
3. **Design Technology to Work as a Partner**: Good software removes clerical exhaustion and fragile single-point-of-failure heroics while empowering people to do what they love on the floor.

---

### Continue Reading the Series
→ Next: **[Field Dispatch 02: People and Agents at Work — Deploying Intelligence Optimally & Can Agentics Build an Enterprise ERP?](/agentic-ai/the-application-layer/)**
