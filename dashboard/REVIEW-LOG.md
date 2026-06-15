# Friday Review Log

> Weekly review notes. Claude runs the ritual Friday afternoon. One section per week.
>
> **Friday review checklist:**
> 1. Move Done column → ARCHIVE.md (with date)
> 2. For each Now item: shipped ✅ / still active 🟡 / killed ❌ / defer to Later ⏸️
> 3. For each Next item: pull into Now if Now has slots / keep / defer
> 4. Triage Inbox items: Now / Next / Later / Kill
> 5. Re-rank Later column by impact
> 6. Identify 1 thing to kill outright (forces ruthless prioritization)
> 7. Write 3-sentence summary: what shipped, what didn't, why
> 8. Set the 3 Now items for next week

---

## Week of 2026-05-12 — *(first week of system)*

**System launched 2026-05-13. First Friday review: 2026-05-15.**

**What shipped this week (so far):**
- Rentagun OEM Partner Program codified as strategic pillar (anchor partner CZ-USA verbal agreement)
- troy-os moved to durable location + Rentagun project scaffolded with corrected content
- Task tracking dashboard system stood up

**What's loaded into Now for the rest of this week (CZ Wednesday meeting prep):**
1. Draft OEM Partner Program sales sheet
2. List 5–8 CZ SKUs to recommend stocking
3. Confirm Cody attendance

**Carry-over to next week:** MOU template, `/cz` landing wireframe, PostHog tracking spec, BBGV paste workflow, GunStreamer Section 0.1.

---

## Week of 2026-06-15 — Friday review 2026-06-15

**What shipped:** The only verifiable build this week was the `local-seo-astro-starter` extraction + 9 platform ADRs (Dutch Dumpsters code pulled into a reusable buildable starter, 2026-06-14/15) — everything else in the activity log is automated cron (BBGV daily audits, reddit-agent, analytics Slack), not task progress. **What didn't:** The single Now item (BBGV Wn6Uau paste workflow) showed zero movement and is now marked (STALE); the #P0 Dutch Dumpsters live lead-loss bug, the Rentagun 527-dead-CTA bleed, and the GunStreamer FFL launch all sat untouched. **Why:** Attention went to infra/tooling (the Astro starter) instead of the open money-bleeders — too many P0s parked across Now/Next/Needs-Fix with no forcing function.

**Recommended Now-3 for next week:**
1. **[Dutch]** Fix the live lead-loss form bug (book.astro:68 + contact.astro:101 — 404 Formspree IDs, no res.ok check). Real money bleeding right now — top priority.
2. **[BBGV]** Close the STALE Wn6Uau paste workflow — it's the oldest open Now loop; finish it or kill it.
3. **[Rentagun]** Redirect the 527 dead-end membership CTAs to the rental funnel (stop the 60-day click bleed).

**Kill outright:** **[Rentagun] Paste V4 membership content into live /affiliates/** (#P2, Later). It directly contradicts the rental-first pivot (membership is being de-emphasized). Stop maintaining the membership funnel — every hour on it is wasted against the current strategy.

