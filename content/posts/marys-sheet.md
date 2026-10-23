---
title: "Chapter One: How Businesses Actually Run: What’s Old Is New, What’s New Is Old"
date: 2026-10-20
slug: marys-sheet
description: "What’s Old Is New, What’s New Is Old: Bad Data, Shadow IT, and the Mighty Excel Spreadsheet: How Businesses Actually Run."
topic: "Chapter One // Current-State Reality"
---

# Chapter One: How Businesses Actually Run

*What’s Old Is New, What’s New Is Old: Bad Data, Shadow IT, and the Mighty Excel Spreadsheet.*

Every company I walk into is standing on fifty years of accumulated technology. **COBOL** systems from the 1970s still carry the ledger, inventory, and payroll, and they set the transaction patterns companies run on today. Those got buried under ’90s ERPs and bolted to 2010s SaaS platforms, with a twenty-year-old shadow system humming in a corner that nobody dares touch because only one person knows how to fix it. [Gartner forecasts](https://www.gartner.com/en/information-technology/topics/enterprise-resource-planning) that by 2027 **more than 70% of recently implemented ERP initiatives will fail to fully meet their original business-case goals**. I can tell you one reason without reading the report. The implementation goes live while the work between the screens is still sitting on a clipboard.

For twenty years my toolkit was a laptop, an internet connection, and one question: *show me how you actually do it today.* I go to three places first. The **CFO**, because the books have to hold up under GAAP, statutory controls, and an audit trail you can defend. The **Compliance Officer**, for the legal and regulatory obligations the business cannot trade away. Then I follow **Integrated Business Planning** all the way down to the floor, where recorded state meets operating reality. The two almost never agree.

---

## 1. Two Connected Views of the Business, Disparate Silos & Why Planning Turns Into Data Plumbing

Integrated Business Planning is the grown-up version of S&OP. It puts Finance and strategy in the same cadence as supply and operations. It exists because a business runs on two connected views of the same reality, and each view has its own clock and its own rules for what counts as true. Finance needs the books: accruals, postings, multi-entity consolidations, statutory controls, and a formal close that cannot be rushed or guessed. Operations needs the floor as it stands right now: volume, cases shipped, what is sitting in the bays, and whether Packaging Line 2 can actually run this morning. Both views have to reconcile to the same underlying events. In most companies, the only place they ever meet is a spreadsheet somebody rebuilds every month.

The consulting world calls that problem "disparate silos." On the floor it means a workflow never actually flows. It stutters. An order enters one system, inventory sits in a second, freight lives in a third, and the per-seat, renewal-locked, data-behind-the-vendor-wall economics of most SaaS leave the software rigid exactly where the company’s workflow needs to bend. [McKinsey’s global AI research](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) shows roughly 80% of workers report personal productivity gains from AI tools, while fewer than 40% of enterprises see measurable EBIT impact from scaling workflows in production. I read that gap as a data-and-workflow gap. Talent was never the problem. The equalizer has reached the individual. It has not reached the enterprise, because the enterprise has no reconciled core to point it at. And ask any CFO what it takes just to corral the subscription sprawl: active users versus paid seats, contract dates, and now **AI token usage** on top of it. That has become a battle of its own.

Connecting systems does not erase the hard trade-offs inside Integrated Business Planning. Competing commercial incentives, constrained line capacity, and tough allocation calls will always need human judgment. That part never bothered anyone I worked with. What breaks people is two weeks of nights and weekends on manual data plumbing just to find out where the disagreement actually is.

Sit in the customer seat across fifty implementations and fifteen full enterprise transformations, in the boardroom, in the war room, and on the loading dock at two in the morning, and you learn quickly that the data model is the easy part. Today, with **Binary Intelligence**, spinning up a clean schema is cheap. The table structure has never been what breaks a transformation. The workflow breaks it: the messy, interdependent logic of how an order, a line changeover, a quality hold, and a financial accrual actually move through a plant. You cannot white-sheet a manufacturing plant’s workflows on a blank screen. The market is starting to wake up to that. The engineering leaders at [8090 and IFS recently underscored](https://www.linkedin.com/posts/vaibhav-vaibs-kumar-21083915_ifs-x-8090-the-role-of-ai-in-critical-infrastructure-activity-7505328390015631361-zqcv) the same point in their own discussions on critical infrastructure: the real gravity of heavy software lives in workflows and business invariants, not in data models. Twenty years in the customer’s chair adds one more layer to that truth, and it is a layer you only see after go-live. **Half of the real workflow is not inside the legacy system of record either.** When the ERP screens froze, the living exceptions walked out the door, onto Mary’s 6:30 AM clipboard and into Don’s head.

> *"A job is more than the sum of its tasks. What's more intangible is the part between them: deciding which task matters, in what order, and when to stop; coordinating with people on other teams; and being the one accountable when it goes wrong."*
> · Chamath Palihapitiya, CEO, 8090 · Founder, Social Capital ([*"What AI spend does to headcount"*](https://research.socialcapital.com/p/ai-and-employment), Oct 2, 2026)

Those gaps are the seams. The work between the tasks is what people like Mary and Don carry every morning. Inside a legacy company, no one person can see the whole anymore. And yet I have more hope today than at any point in my career, because what is old is new, and what is new is old. With **Binary Intelligence** in the work, we do not have to put an exhausted team through a two-year root canal just to map where the business stands. We can sit beside the people doing the work, ask the same question I have always asked, and let Binary Intelligence organize the messy spreadsheets, compare the unwritten workflows against the system of record, and reconcile the data core. Then people get to spend their energy on the real operating decisions, which is what they wanted in the first place.

---

## 2. Note from the Field 01-A: Mary’s Sheet, Don WMS & Co-Architecting the Next Role

> **NOTE FROM THE FIELD 01-A // HEROICS ON THE PHYSICAL FLOOR: MARY'S SHEET & DON WMS**
> Walk almost any manufacturing or distribution floor after a big ERP go-live and you will meet the people whose daily routines keep the operation standing. On the plant floor I call her Mary. She is a composite of real people from plant cutovers I have led, and every one of them would recognize her. **Mary’s Sheet** is a folded 11x17 Excel spreadsheet on a green metal clipboard at 6:30 AM. It knows Packaging Line 2 has its filling pump unbolted on the workbench twenty feet away, even while the new ERP screen shows green and ready. Mary does not think of this as heroic. She thinks of it as Tuesday.
>
> In tight New York warehouse quarters cobbled together over 30 to 40 years with almost no room to spare, it was Don. The crew called him **Don WMS**, because he was the warehouse management system. Four decades of bastardized item schemas, missing vendor labels, and mismatched department keys lived in his head. To keep product moving through those cramped bays, he used colored Post-it notes to mark fluid zones that shifted by the hour depending on what was coming in, what was being produced, and what was shipping out. One colored sticky told his crew what that patch of floor meant right now and what had to happen to the product sitting on it. It was brilliant.
>
> Transformation is personal for people like Mary and Don, because holding that fragile puzzle together is their pride and their purpose. Across frontline cutovers, the quiet worry that surfaces is almost always the same: *"Well, I guess I'm going to lose my job and have nothing to do."* The only honest answer is to give their judgment real weight in shaping what comes next. Mary helped define the exception rules and decided which floor checks still mattered once the morning spreadsheet gymnastics were gone. Nobody handed her that role from upstairs. She shaped it. We made Don co-architect of the unified item catalog and gave him live floor visibility on an iPad. He kept doing what he loved, walking the bays and working with his crew. The difference was that Don WMS now had a digital partner named **DON**.
> · Robert Paddock · Note from the Field 01-A (`MARY'S SHEET & DON WMS`)

---

## 3. Note from the Field 01-B: When the Numbers Disagreed: What the Tuesday-Night Roll-Up Was Hiding

> **NOTE FROM THE FIELD 01-B // WHAT THE SPREADSHEETS CONCEALED: S&OP / IBP DISCOVERY**
> In one consumer-products operation I stepped into, the monthly planning meeting spent its first forty minutes arguing over whose spreadsheet was right. Sales showed a promotional commitment in cases. Production scheduled the line in machine hours. Finance valued inventory on standard cost assumptions from two quarters back. Each team pulled CSVs on different days and massaged them in private tabs, so the master PowerPoint hid a basic operating reality: a packaging changeover and a supplier lead-time slip meant they were about to short a key retail account while building stock they did not need.
>
> Nobody in that room was a bad planner. They had spent Tuesday night until 10:00 PM just trying to make the columns tie out, and that left no time to look at the constraint on the floor. Once we reconciled the underlying item units, open purchase orders, and actual line rates before the meeting, the forty-minute argument over whose numbers were right simply went away. The hard commercial decision was still hard, as it always is: which orders to re-sequence and which customer to call. But the team finally had the time and the shared facts to make that call on Wednesday morning, with the people who could act on it in the room.
> · Robert Paddock · Note from the Field 01-B (`S&OP / IBP DISCOVERY`)

---

*Once you sit beside the people doing the work and reconcile the data core so Finance and Operations see the same facts, what does daily work look like five minutes after go-live so they don't end up right back on a clipboard?*

---

### Continue Reading the Series
→ Next: **[Chapter Two: Working with Intelligence: Humans and Agents Running the Workflows That Run the Business](/agentic-ai/the-application-layer/)**
