# BBGV All-Flows Roadmap & BBGV Handoff Requirements

> **Source of truth for every flow in the BBGV email system.**
> Status, build order, copy spec, BBGV-side requirements, and dependency graph in one place.
>
> Synthesizes the 90-day flow plan with the May 1 audit. Updated by the weekly Coach routine.

---

## Current state — 2026-05-01

**Live flows: 2 of 14.** Cadence behind schedule. Welcome flow stuck in draft since 2024.

| # | Flow | Status | Last touched | Notes |
|---|------|--------|--------------|-------|
| 1 | Welcome Series | **DRAFT (since 2024)** | 2024-08-13 | Highest-ROI gap. Templates exist, never wired. |
| 2 | 60-Day Re-Engagement | Not started | — | 18,188 profiles waiting. Templates drafted. |
| 3 | Post-Purchase Value Reinforcement | Not started | — | 9,829 paid subs unprotected from churn. |
| 4 | Post-Cancel Win-Back | Not started | — | Needs Cancelled Order event from Authorize.net. |
| 5 | Dunning Recovery | Not started | — | Needs Payment Failed event from Authorize.net. |
| 6 | Never Engaged Winback | Not started | — | 13,678 profiles. Ultra-careful, last-chance. |
| 7 | Book Sales / Lead Nurture | Not started | — | Needs "Signal Super-Engaged" segment. |
| 8 | Referral Ask | Not started | — | Needs "Hyper-Engaged" segment + referral link. |
| 9 | First Lookup Nudge | Not started | — | Needs Lookup event from BBGV app. |
| 10 | Switch to Annual | Not started | — | Needs subscription_term = monthly filter. |
| 11 | Cancellation Survey | Not started | — | Needs Cancel Survey form on bluebookofgunvalues.com. |
| 12 | Collector to FFL Upsell | Not started | — | Needs customer_type = collector filter. |
| 13 | Review Ask | Not started | — | Needs review platform decision (Trustpilot? G2?). |
| 14 | Milestone / Anniversary | Not started | — | Needs subscription_start_date property. |
| Live #1 | Blue Book → GunStreamer Sequence | **Live** | 2026-03-13 | 61% open / 12% click. Solid. |
| Live #2 | Abandoned Cart Leads | **Live (broken)** | 2026-04-30 | 36% open / **0% click** — see audit task C. |

---

## Build order — concrete dates

### Week of May 4 (Tier 1: ship the 4 core flows)

| Day | Flow | Build | Owner |
|---|---|---|---|
| Mon May 4 | Welcome Series (5 emails) | Templates → Klaviyo, build flow in UI | Troy + Claude |
| Tue May 5 | Fix Abandoned Cart Leads (audit links/CTAs) | Edit messages | Claude |
| Wed May 6 | 60-Day Re-Engagement Flow (3 emails) | Templates exist, wire in UI | Troy + Claude |
| Thu May 7 | Re-Engagement Wave 1 campaign (2,000 profiles) | Deploy as one-off campaign before flow | Troy |
| Fri May 8 | Post-Purchase Value Reinforcement (5 + monthly) | Templates → Klaviyo, build flow | Troy + Claude |
| Sat May 9 | First Lookup Nudge if Lookup event is live | Conditional on BBGV-side event | Troy |

### Week of May 11 (Tier 2: revenue protection)

| Day | Flow | Build | Owner |
|---|---|---|---|
| Mon May 11 | Post-Cancel Win-Back (4 emails + quarterly) | Conditional on Cancelled Order event | Troy + Claude |
| Tue May 12 | Dunning Recovery (4 emails) | Conditional on Payment Failed event | Troy + Claude |
| Wed May 13 | Cancellation Survey form + flow | Site form needed | Troy |
| Thu May 14 | Re-Engagement Wave 2 (3,000 profiles) | Campaign | Troy |
| Fri May 15 | Switch to Annual flow | Property filter setup | Troy + Claude |

### Week of May 18 (Tier 3: growth)

| Day | Flow | Build | Owner |
|---|---|---|---|
| Mon May 18 | Book Sales / Lead Nurture (3 emails) | New segment + flow | Troy + Claude |
| Tue May 19 | Re-Engagement Wave 3 (5,000 profiles) | Campaign | Troy |
| Wed May 20 | Collector to FFL Upsell flow | Property + flow | Troy |
| Thu May 21 | Review Ask flow | Review platform decision needed | Troy |
| Fri May 22 | Milestone / Anniversary | Date-based trigger | Troy + Claude |

### Week of May 25 (sweep + cold pool)

| Day | Flow | Build | Owner |
|---|---|---|---|
| Mon May 25 | Re-Engagement Wave 4 (remainder) | Campaign | Troy |
| Tue May 26 | Never Engaged Winback test (500 profiles) | Strict kill criteria | Troy |
| Wed May 27 | Referral Ask flow | New segment | Troy + Claude |
| Thu May 28 | Begin 150K cold-pool re-engagement (see separate doc) | Off-Klaviyo channels | Troy |
| Fri May 29 | Audit week before 30-day review fires May 31 | — | Coach routine |

---

## Per-flow specs

### Flow 1 — Welcome Series (5 emails)

| Field | Value |
|---|---|
| Trigger | Added to any signup list (V8T7c2, SjQSvK, Vd4kyG, VhFAU6, SWRV8n) |
| Audience | New subscribers from any source |
| Cadence | Day 0, Day 3, Day 7, Day 14, Day 30 |
| Expected open rate | 55–70% (highest in the system) |
| Expected click rate | 15–25% |
| Expected revenue lift | Foundational — every other flow downstream relies on this |
| Status | Templates 1–5 spec'd in `~/Work/BBGV/docs/BBGV-FLOW-BUILD-HANDOFF.md` |

**Email arc:**
1. **Day 0 — "You're in. Here's what The Signal is."** Sets expectation. One example gun + value. CTA: read latest Signal.
2. **Day 3 — "The feature most subscribers miss."** Price-trend lookups. CTA: try the lookup tool.
3. **Day 7 — "Why our numbers differ from GunBroker."** Authority story. CTA: subscribe (if not paid).
4. **Day 14 — "How [collector / FFL] subscribers use Blue Book."** Social proof, segmented if customer_type known.
5. **Day 30 — "Objection + convert."** Last welcome touch. Strong subscription offer.

**BBGV requirements:** Connect Klaviyo signup forms to bluebookofgunvalues.com signup paths (search gate, exit intent, product page, footer). Search Gate is the highest-volume opportunity.

---

### Flow 2 — 60-Day Re-Engagement (3 emails)

| Field | Value |
|---|---|
| Trigger | Profile enters segment RvPcex ([SUNSET] 60-Day Inactive) |
| Audience | 18,188 profiles as of 2026-05-01 |
| Cadence | Day 1, Day 6, Day 13 (with engagement splits) |
| Expected open rate | 8–15% (cold audience) |
| Expected click rate | 1–3% |
| Expected reactivation | 5–10% of triggered = ~1,000–1,800 profiles |
| Status | Templates drafted in `~/Work/BBGV/docs/BBGV-RECOVERY-EMAIL-TEMPLATES.md` |

**Strategy:** Don't blast 18K at once. Wave through campaigns (2K → 3K → 5K → remainder) while flow runs in parallel for new entries. Kill criteria: bounce >2%, spam >0.1%, opens <5%.

**Email arc:**
1. **Day 1 — Value-First Wake-Up.** "What your guns are worth this month" + 3 free values + reply prompt.
2. **Day 6 — What You Missed.** Market movers since they last opened. Forward prompt.
3. **Day 13 — Sunset Cleanup.** Single-button CTA: "Keep sending me The Signal." Non-clickers → suppression.

**BBGV requirements:** None new. Templates exist.

---

### Flow 3 — Post-Purchase Value Reinforcement (5 + monthly recurring)

| Field | Value |
|---|---|
| Trigger | Added to Paid Subscribers list (YjVgTd) |
| Audience | 9,829 paid subs |
| Cadence | Day 0, Day 3, Day 7, Day 14, Day 30, then monthly |
| Expected impact | Reduces "not worth it" churn by 20–40% (prevents the post-purchase regret window) |
| Status | Copy in `~/Work/BBGV/docs/BBGV-CHURN-PREVENTION-SYSTEM.md` |

**Email arc:**
1. **Day 0 — Quick win.** "Here's what to do first." Walks through their first lookup.
2. **Day 3 — Hidden feature.** "The feature most subscribers miss." Price trends.
3. **Day 7 — Authority.** "Why our numbers differ from GunBroker." Trust building.
4. **Day 14 — Segmented value.** Collector vs FFL specific use case.
5. **Day 30+ — Monthly recap.** "Your month in Blue Book" — lookups used, market shifts.

**BBGV requirements:**
- `customer_type` profile property (collector vs FFL) so Day 14 can segment. Either set at signup or via order metadata from Authorize.net.
- Lookup count per profile (to feed monthly recap). Requires app → Klaviyo event for each lookup. Currently missing.

---

### Flow 4 — Post-Cancel Win-Back (4 emails + quarterly)

| Field | Value |
|---|---|
| Trigger | Cancelled Order event (Authorize.net → Klaviyo) |
| Audience | All cancellations |
| Cadence | Day 1, Day 7, Day 21, Day 45, then quarterly |
| Expected reactivation | 3–5% |
| Status | Copy in churn prevention doc |

**Email arc:**
1. **Day 1 — Graceful exit.** "Your subscription has been cancelled." Open door + reply prompt.
2. **Day 7 — Value reminder.** "A gun you looked up changed value." Market shift since cancel.
3. **Day 21 — Objection-specific.** Address most common cancel reason. 50% off first month.
4. **Day 45 — Last touch.** "Your account data expires in 45 days."

**BBGV requirements:**
- **Cancelled Order event must fire from Authorize.net → Klaviyo.** This is the same broken integration that's killing campaign conversion attribution. Verify event flow before building.
- Last-cancelled lookup data (which gun did they look up before cancel?) for Day 7 personalization.

---

### Flow 5 — Dunning Recovery (4 emails)

| Field | Value |
|---|---|
| Trigger | Payment Failed event |
| Audience | All failed payments |
| Cadence | Day 0, Day 3, Day 7, Day 10 |
| Expected recovery | 50%+ of failed payments (industry benchmark) |
| Status | Copy in churn prevention doc |

**BBGV requirements:**
- **Payment Failed event from Authorize.net → Klaviyo.** Verify in Authorize.net → Klaviyo integration settings.
- Update payment method link (deep link to Authorize.net billing portal).

---

### Flow 6 — Never Engaged Winback (5 waves, NOT a flow but campaign sequence)

| Field | Value |
|---|---|
| Trigger | Manual (campaign waves, ultra-small batches) |
| Audience | Vyrvbk [SUNSET] Never Engaged — 13,678 profiles |
| Cadence | Test 500 → W1 1,000 → W2 2,000 → W3 3,000 → W4 remainder |
| Expected | 1–3% reactivation; rest suppressed permanently |
| Status | Wave plan in 90-day flow plan |

**BBGV requirements:** Acceptance that 80%+ of these profiles will be permanently suppressed after the campaign. This is hygiene, not growth. Kill criteria: bounce >3% halts immediately.

---

### Flow 7 — Book Sales / Lead Nurture (3 emails)

| Field | Value |
|---|---|
| Trigger | Profile in [FLOW] Signal Super-Engaged segment (5+ Signal opens, NOT on Paid list) |
| Audience | Engaged non-payers — estimated 500–1,200 profiles |
| Cadence | Day 0, Day 7, Day 14 |
| Expected conversion | 1–3% to paid subscription |
| Expected revenue | $500–2,000/month |
| Status | Needs writing |

**BBGV requirements:**
- Create [FLOW] Signal Super-Engaged segment.
- Ensure Paid Subscribers list (YjVgTd) is current — if a profile pays, they must be added to YjVgTd within 24h, otherwise they'll keep getting Book Sales emails.

---

### Flow 8 — Referral Ask (1 email)

| Field | Value |
|---|---|
| Trigger | Profile opens 10+ Signal emails in 60 days |
| Audience | Hyper-engaged — small but high-value |
| Cadence | Single send |
| Expected | 5–15 new signups per send |
| Status | Needs writing |

**BBGV requirements:**
- Unique referral link per profile (e.g., `bluebookofgunvalues.com/r/{profile_id}`). Built either via Klaviyo dynamic content or a separate referral system.
- Mechanism to credit referrer if referee subscribes (manual report or full referral system like Rewardful).

---

### Flow 9 — First Lookup Nudge (2 emails)

| Field | Value |
|---|---|
| Trigger | Joined paid list AND no Lookup event in 7 days |
| Audience | Paid subs who haven't activated |
| Cadence | Day 7, Day 14 |
| Expected | 30–50% activation lift |
| Status | Concept |

**BBGV requirements:**
- **Lookup event must fire from app → Klaviyo every time a paid sub looks up a gun.** This is foundational for Flows 9, 12, 14 and the monthly recap (Flow 3 Day 30+).

---

### Flow 10 — Switch to Annual (3 emails)

| Field | Value |
|---|---|
| Trigger | Profile on Paid list with `subscription_term = monthly` for 90+ days, opened 5+ emails, hasn't seen Switch to Annual in 90 days |
| Cadence | Day 0, Day 7, Day 14 |
| Expected | 10–20% conversion to annual = MRR locked + churn drop |
| Status | Concept |

**BBGV requirements:**
- `subscription_term` profile property (monthly / annual) synced from Authorize.net.
- Annual upgrade link with discount code applied.

---

### Flow 11 — Cancellation Survey (1 email)

| Field | Value |
|---|---|
| Trigger | Cancelled Order event (forks from Flow 4) |
| Cadence | Day 0 (immediately after cancel) |
| Expected response rate | 15–30% |
| Status | Concept |

**BBGV requirements:**
- Survey form on bluebookofgunvalues.com (Typeform / Klaviyo form / Tally).
- Survey responses feed back to a Klaviyo profile property `cancel_reason` for personalization in Flow 4.

---

### Flow 12 — Collector to FFL Upsell (2 emails)

| Field | Value |
|---|---|
| Trigger | `customer_type = collector` AND lookup count > 50 in 90 days (signals high-volume use) |
| Cadence | Day 0, Day 14 |
| Expected | 2–5% upgrade to FFL plan (higher-tier) |
| Status | Concept |

**BBGV requirements:**
- `customer_type` and lookup count properties (same Lookup event dependency as Flows 3, 9).
- FFL plan upgrade flow on the website (likely needs to be built/improved).

---

### Flow 13 — Review Ask (1 email)

| Field | Value |
|---|---|
| Trigger | 60+ days on Paid list AND opened 8+ emails AND no review submitted |
| Cadence | Single send |
| Expected | 2–5% review submission rate |
| Status | Concept |

**BBGV requirements:**
- **Pick a review platform.** Options: G2 (B2B credibility), Trustpilot (consumer trust), embedded site reviews (full control). Decision drives the link.
- Review platform integration to detect when a review is submitted (so it doesn't re-fire).

---

### Flow 14 — Milestone / Anniversary (3 emails per year)

| Field | Value |
|---|---|
| Trigger | Date-based: subscription anniversary, 6-month milestone, 90-day milestone |
| Cadence | Each milestone fires once per year |
| Expected | Soft retention play — celebrates the relationship |
| Status | Concept |

**BBGV requirements:**
- `subscription_start_date` profile property (synced from Authorize.net).
- Klaviyo "Date triggered" flow type works natively for this.

---

## What BBGV needs to provide (handoff checklist)

This is the master list of dependencies. Each item below blocks one or more flows.

### Critical — blocks Tier 1/2 flows

| # | Item | Why | Owner | Status |
|---|---|---|---|---|
| 1 | **Verify Authorize.net → Klaviyo integration is firing all events** | Placed Order, Cancelled Order, Refunded Order, Payment Failed all need to flow into Klaviyo. Currently 0 conversions attributed in 30 days = something is broken. | BBGV dev / Troy | Broken |
| 2 | **`customer_type` profile property** | Required for segmentation in Flows 3, 12, and any collector/FFL specific copy. Set at signup or via Authorize.net metadata. | BBGV dev | Missing |
| 3 | **`subscription_term` profile property** | Required for Flow 10 (Switch to Annual). | BBGV dev | Missing |
| 4 | **`subscription_start_date` profile property** | Required for Flow 14 (Anniversary). | BBGV dev | Missing |
| 5 | **`Lookup` event from app to Klaviyo** | Required for Flows 3 (monthly recap), 9 (First Lookup Nudge), 12 (Upsell), and any usage-based personalization. **Highest leverage missing event.** | BBGV dev | Missing |

### Important — blocks Tier 3 flows + optimization

| # | Item | Why | Owner | Status |
|---|---|---|---|---|
| 6 | **Site signup forms wired to Klaviyo lists** | Footer signup → Welcome list, Search Gate → high-intent list, Exit Intent → exit-intent list, Product Page → product-page list. Currently lists exist, forms aren't all connected. | BBGV dev / Troy | Partial |
| 7 | **Re-opt-in landing page** | Required for the 150K re-engagement plan (separate doc). Single-purpose page asking "Want Blue Book updates again?" with prominent signup form. | BBGV dev / Claude | Not built |
| 8 | **Cancellation reason survey** | Form on cancel-confirmation page or in cancel email. Feeds `cancel_reason` profile property. Required for Flow 11. | BBGV dev | Not built |
| 9 | **Review platform decision** | Pick G2, Trustpilot, or embedded reviews. Drives Flow 13. | Troy | Pending |
| 10 | **Referral link mechanism** | Either Klaviyo dynamic content with profile_id, or a referral system like Rewardful. Drives Flow 8. | Troy | Pending |
| 11 | **FFL plan upgrade flow on site** | Drives Flow 12 conversions. | BBGV dev | Pending |

### Nice-to-have — improves performance

| # | Item | Why | Owner |
|---|---|---|---|
| 12 | UTM tagging convention on all email links | Track downstream behavior in Authorize.net / GA4. Already documented; needs enforcement. | Claude |
| 13 | Image CDN consolidation | Currently mixed CDN paths. CLAUDE.md warns: never guess CDN paths. | Troy |
| 14 | A/B testing framework for subject lines | Klaviyo supports native A/B; just need a discipline of running 1 test/week. | Troy |
| 15 | SMS list growth strategy | TCPA-compliant opt-in flow. Untapped channel. | Troy |
| 16 | Postal address capture in signup forms | Unlocks direct-mail revival channel for 150K plan. | BBGV dev |

---

## How to track progress

- **Daily:** `~/clawd/logs/bbgv-daily-audit-latest.md` (auto-generated 8 AM ET).
- **Weekly:** Coach routine updates `projects/bbgv/email-roadmap.md` Mondays at 9 AM ET. `cd /tmp/troy-os && git pull`.
- **Monthly:** 30-day review fires May 31, writes a new doc with measured impact.
- **This doc:** edit by hand when a flow ships or a BBGV requirement is delivered. Coach will pick up changes.

---

*Last updated: 2026-05-01 (initial). Companion docs: `BBGV-EMAIL-SYSTEM.md`, `BBGV-90-DAY-FLOW-PLAN.md`, `BBGV-150K-REENGAGEMENT-ROADMAP.md`.*
