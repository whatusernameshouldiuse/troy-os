# BBGV Email Marketing — 30-Day Review: May 2026

**Period:** May 1–31, 2026
**Prepared:** 2026-05-31
**Account:** Blue Book Publications (`SMvTcV`) — confirmed via roadmap and campaign data
**Comparison:** April 2026 baselines from `email-roadmap.md`

---

## (a) Executive Summary

- **The recovery formula works. It just wasn't used.** The two clean Signal sends (Winchester Model 12, May 5; Colt Python, May 14) averaged 63.7% open rate against the 64.3% April baseline. The Colt Python alone hit 67.4% — the first campaign to beat the baseline since recovery began. Only 2 Signal sends shipped in 31 days versus the approved 12. The cadence gap cost an estimated 16,000+ opens and is now visibly contracting the 90-Day Engaged segment: −468 below the April baseline as March click events age out of the rolling window.

- **Zero roadmap tasks shipped.** All 11 pending tasks as of May 1 remain pending or blocked on May 31. The FFL GunStreamer CTA link is definitively broken: 2 sends, 1,086 openers, 0 clicks. The Abandoned Cart flow (Wn6Uau) received 0 recipients for the entire month — trigger dead, blocked by Task H. The Welcome Series has been in draft since 2024.

- **Hygiene improved; growth didn't.** Unsubscribe rate (0.26% vs 0.41%), bounce rate (0.14% vs 0.40%), and spam rate (0.02% vs 0.05%) all improved meaningfully on clean sends. Net list growth for May is −66 (0 organic subscriptions, 66 unsubscribes) — the Klaviyo "Subscribed to Email Marketing" metric (TmzDF6) returned zero events all month. Attributed conversions: $0 for the second consecutive 30-day period. Authorize.net tracking remains dead.

---

## (b) KPI Comparison Table — April vs May 2026

> **Methodology:** May figures use the 3 main broadcast sends: Winchester Model 12 (May 5, 3,166 rcpt), Colt Python (May 14, 3,417 rcpt), and Vans Auction 20260522 (May 22, 4,203 rcpt) — 10,786 combined recipients. The Vans Auction send mixed [SUNSET] 60-Day Inactive into the audience and is flagged where it distorts the average. Clean Signal-only (Winchester + Colt Python, 6,583 rcpt) is noted separately. FFL and Live Auction micro-sends are excluded here and analyzed in the Task Audit below.

| Metric | April baseline | May (3 main sends) | Δ (pp or units) | Δ % | Verdict |
|---|---:|---:|---:|---:|---|
| Open rate | 64.3% | 60.4% | −3.9pp | −6.1% | **Miss.** Vans Auction (55.5%, mixed [SUNSET] inactive) dragged the average down. Clean Signal sends averaged 63.7%; Colt Python hit 67.4% — first beat of the baseline since recovery began. The contamination pattern has now cost ~10–13pp three separate times. |
| Click rate | 4.8% | 4.59% | −0.21pp | −4.4% | **Marginal miss, within noise.** Clean Signal sends averaged 4.91%, above baseline. Volume is constrained by cadence: 3 main sends vs ~12 planned. |
| CTOR | 7.5% | 7.60% | +0.10pp | +1.3% | **Flat.** Five consecutive weeks at 7.5–8.0%. The 12–15% industry benchmark gap has not closed. CTAs are not driving action. Task J (CTA A/B test) has not started. |
| Unsub rate | 0.41% | 0.26% | −0.15pp | −36.6% | **Improved.** Direct result of clean audience discipline on Signal sends. FFL sends ran at 0.24–0.79% — keep FFL isolated from Signal permanently. |
| Bounce rate | 0.40% | 0.14% | −0.26pp | −65.0% | **Significantly improved.** Removing FFL Dealers from Signal audience cut bounce rate by two-thirds. FFL sends still running 0.63% (1.6× baseline) — the list degrades with every unreciprocated send. |
| Spam rate | 0.05% | 0.02% | −0.03pp | −60.0% | **Improved.** Van's FFL send hit 0.08% (at ceiling). Tucker's was clean. Monitor closely on any third FFL send. |
| Net list growth | −89 | −66 | +23 | +25.8% | **Still negative.** Zero organic subscriptions in May. Unsubscribe metric (Vs3yuP) recorded 66 exits; Subscribe metric (TmzDF6) recorded 0 entries. Less bad than April — not fixed. Forms remain broken (Task E). |
| Attributed conversions | 0 | 0 | 0 | — | **No change.** Placed Order metric (Xt9eLm) returned 0 across all 17 campaigns and all flows. Authorize.net → Klaviyo integration has been dead for 60+ consecutive days. Task H unstarted. |

### Clean Signal benchmark (2 sends, 6,583 rcpt — apples-to-apples with April)

| | Winchester Model 12 (May 5) | Colt Python (May 14) | Combined |
|---|---:|---:|---:|
| Recipients | 3,166 | 3,417 | 6,583 |
| Open rate | 59.6% | **67.4%** | **63.7%** |
| Click rate | 4.74% | 5.07% | **4.91%** |
| CTOR | 7.96% | 7.52% | **7.72%** |
| Unsub rate | 0.32% | 0.21% | **0.26%** |
| Bounce rate | 0.13% | 0.15% | **0.14%** |
| Audience | 60-Day + Paid + 90-Day | **30-Day + Paid** | — |

The tighter audience (30-Day + Paid) continued to outperform on open rate. The Winchester was sent to a slightly broader pool (60-Day + 90-Day); the Colt Python's formula is the lock.

---

## (c) Task Shipping Audit

### Tier 1 — Highest engagement lift

**A. Ship Welcome Series (5 emails)**
Status: **NOT SHIPPED.**
The Onboarding Welcome Series flow is absent from the live flows report for May. It has been in draft since 2024. No new subscriber received an onboarding sequence in May.
Impact: Every new Paid Subscriber (9,805 total) joined with zero automated engagement. Projected +400–700 opens/month once live — the highest single untouched ROI gap in the account.

---

**B. Restore Tue/Thu/Sat Signal cadence**
Status: **NOT SHIPPED.**
Sends: Winchester Model 12 (May 5), Colt Python (May 14). An 11-day gap from May 22 to May 31 closed the month with zero Signal activity. Approved cadence: ~12 sends/month. Actual: 2.

Impact: The 90-Day Engaged segment contracted from 4,598 (Apr baseline) to 4,130 (May 31) = −468. Profiles who clicked in late February/early March aged out of the 90-day window; 2 sends/month cannot replenish the outflow. At 2 sends/month, the engaged pool available for Signal expansion is shrinking.

---

**C. Fix Abandoned Cart Leads flow (0% click rate)**
Status: **NOT SHIPPED. Blocked by Task H.**
The Abandoned Cart flow (Wn6Uau) does not appear in the May flow report at all — 0 recipients for the full month. No cart/checkout events fired. The trigger is dead (Authorize.net integration), not the copy. A CTA fix has no value until Task H restores the event feed.

---

### Tier 2 — List growth

**D. Re-engagement gauntlet for 31,866 sunset profiles**
Status: **NOT SHIPPED.**
31,866 sunset profiles continue to sit in Klaviyo billing with no re-engagement campaign created or sent. No progress.

---

**E. Audit & rebuild signup forms**
Status: **NOT SHIPPED.**
`klaviyo_query_metric_aggregates` on "Subscribed to Email Marketing" (TmzDF6) returned **0 events** for May 1–31. Zero organic email subscribers acquired in 31 days. Forms are completely broken. Without organic inflow, net list growth stays negative regardless of send quality.

---

**F. Live Auctions: cut to Monday only**
Status: **NOT SHIPPED — actively worsened.**
12 sends to the Blue Book Live Auctions list (87→124 members) across May. Task F specified Monday only since Coach Review #2 (May 4). Open rate trajectory this month:

| Date | Send day | Rcpt | Open |
|---|---|---:|---:|
| May 6 | Wed | 67 | 62.7% |
| May 7 | Thu | 71 | 38.0% |
| May 8 | Fri | 72 | 55.6% |
| May 11 | Mon | 74 | 48.6% |
| May 13 | Wed | 76 | 50.7% |
| May 14 | Thu | 76 | 29.3% |
| May 15 | Fri | 76 | 40.0% |
| May 18 | Mon | 82 | 46.9% |
| May 20 | Wed | 86 | 42.4% |
| May 22 | Fri | 88 | 37.9% |
| May 29 | Thu | 93 | 31.9% |
| May 29 | Thu | 92 | 47.8% |

Month-end bounce (eGunco May 29): 2.15% — list degrading. Gross adds +37 are being offset by cadence fatigue. If Monday-only had been enforced, the ~5 Monday sends would have preserved open-rate quality.

---

**G. Delete or wire up Collector Newsletter list (V8T7c2)**
Status: **NOT SHIPPED.**
The Collector Newsletter list was included as a send audience in the Vans Auction 20260522 campaign (May 22) — it was neither cleaned up nor evaluated. No action taken.

---

### Tier 3 — Revenue + scale

**H. Verify Authorize.net → Klaviyo Placed Order tracking**
Status: **NOT SHIPPED.**
0 conversions across all 17 campaigns and all flows in May. Placed Order metric (Xt9eLm) has returned 0 for 60+ consecutive days. This is the root blocker for both conversion reporting and Task C (Abandoned Cart trigger dead). This is a 1-hour audit: log into Authorize.net, confirm Klaviyo webhook is active, fire a test transaction, verify the event appears in Klaviyo Metrics.

---

**I. Build 3-email FFL Dealers warming sequence**
Status: **BLOCKED — CTA link confirmed broken.**
Two FFL sends in May:

| Campaign | Date | Rcpt | Opens | Clicks | Unsub | Bounce | Spam |
|---|---|---:|---:|---:|---:|---:|---:|
| Van's Case Study | May 11 | 1,279 | 519 (40.8%) | **0 (0%)** | 0.79% | 0.63% | 0.08% |
| Tucker's Case Study | May 19 | 1,266 | 567 (45.1%) | **0 (0%)** | 0.24% | 0.63% | 0.00% |
| **Combined** | | **2,545** | **1,086 (42.7%)** | **0 (0%)** | **0.51%** | **0.63%** | **0.04%** |

1,086 people opened across two sends. Zero clicked. Two different case studies, two different subject lines, same broken fingerprint. The GunStreamer partner CTA link is broken. FFL list contracted 1,294 → 1,275 (−19) with zero attributed conversions. Do not send a third FFL email until the CTA link is audited and confirmed live.

---

**J. A/B test Signal CTA structure**
Status: **NOT SHIPPED.** No A/B test created or run. CTOR flat at ~7.5%.

**K. SMS pilot — Live Auction Alerts**
Status: **NOT SHIPPED.**

**L. Suppress non-responders after re-engagement gauntlet**
Status: **BLOCKED by Task D** (not started).

---

### Flow performance (May 1–31)

| Flow | ID | Rcpt | Open | Click | CTOR | Conversions |
|---|---|---:|---:|---:|---:|---:|
| Blue Book → GunStreamer Sequence | SNbTjz | 90 | 45.5% | 5.7% | 12.5% | 0 |
| Flow - Abandoned Cart Leads | Wn6Uau | **0** | — | — | — | 0 |

Blue Book → GunStreamer detail (3 messages, May 1–31):

| Message | Rcpt | Open | Click | CTOR |
|---|---:|---:|---:|---:|
| RT2PuN (email 1) | 35 | 52.9% | 5.9% | 11.1% |
| SS7pAC (email 2) | 24 | 39.1% | 4.3% | 11.1% |
| TVGu4n (email 3) | 31 | 41.9% | 6.5% | 15.4% |

CTOR at 12.5% aggregate is the best engagement ratio in the account — confirms automated sequences work when the audience is right. Open rate declined from April's 61.0% baseline but sample is tiny (90 emails). Abandoned Cart has now been dead for 6+ consecutive weeks.

---

## (d) Top 5 June Priorities

### 1. Ship Welcome Series — Task A
**Numbers:** Every new Paid Subscriber joins cold. The list has 9,805 paid subscribers with no onboarding sequence. Projected +400–700 opens/month once live. GunStreamer flow shows automated sequences hit 12.5% CTOR — the best ratio in the account. A Welcome Series to a newly subscribed, high-intent audience will outperform that.
**Action:** Pull draft from Klaviyo, complete the 5-email sequence, set trigger on list join, publish. Target: live by June 7.

### 2. Fix signup forms — Task E
**Numbers:** 0 organic subscriptions in May. 66 exits. Net −66. The 90-Day Engaged segment is at 4,130 — down 468 from April baseline. Without new subscribers, the engaged pool used for Signal sends contracts every month as profiles age out. Forms broken means list death spiral at current cadence.
**Action:** Audit every signup form on bluebookofgunvalues.com. Trace submission → Klaviyo event path. Fix or replace. Target: forms generating events by June 10.

### 3. Restore Signal cadence to 3×/week — Task B
**Numbers:** 2 Signal sends in 31 days vs 12 planned. At 2 sends/month, each Colt Python-level send (2,301 unique opens) injects ~170 unique click events. The 90-Day window needs ~200+ click events/week just to maintain flat size. The gap is costing ~3,500–5,000 unique engagement events per missed week.
**Action:** Send Thursday June 5 (first Signal of June) to [RECOVERY] 30-Day + Paid Subscribers. Lock Tue/Thu cadence for June. Do not include [SUNSET] 60-Day Inactive in any Signal send.

### 4. Fix Authorize.net → Klaviyo conversion tracking — Task H
**Numbers:** $0 attributed revenue for 60+ days. Abandoned Cart has 0 recipients for 6+ weeks. The conversion tracking gap means every open and click generates zero measurable downstream value in reporting. This is also the single blocker preventing Abandoned Cart from firing.
**Action:** 1-hour Authorize.net webhook audit. Fire a test transaction. Verify Placed Order event (Xt9eLm) appears in Klaviyo. If broken, engage Laravel developer to restore the event push.

### 5. Audit FFL CTA link before any third FFL send — Task I prerequisite
**Numbers:** 2 sends, 1,086 openers, 0 clicks. List contracted −19. The list is being spent with zero return. A third send with a broken CTA continues the destruction. If the link is live, the copy needs an explicit CTA ("See how Van's uses GunStreamer →"). If dead, fix the URL.
**Action:** Open both FFL campaigns in Klaviyo preview, click every CTA, confirm destination loads. Takes 10 minutes. Do this before scheduling send #3.

---

**Standing enforcement task (not top-5 but overdue):** Collapse Live Auctions to Monday-only effective immediately (Task F). 12 sends to 124 people in May; month-end open rate down to 31.9%. One more week of daily sends and the list will be fatigued below recovery thresholds.

---

## (e) Audience Snapshot — May 31, 2026

| Audience | Type | Apr Baseline | May 31 | Δ | Status |
|---|---|---:|---:|---:|---|
| [RECOVERY] 30-Day Engaged | Segment | 3,133 | 3,342 | **+209** | Growing; clean Signal sends are working |
| [RECOVERY] 60-Day Engaged | Segment | 3,633 | 3,665 | **+32** | Near flat; needs 2+ Signals/week to grow |
| [EXPANSION] 90-Day Engaged | Segment | 4,598 | 4,130 | **−468 ⚠** | Contracting; March click events aging out |
| [EXPANSION] 120-Day Engaged | Segment | 5,103 | 5,071 | **−32** | Marginal decline |
| Paid Subscribers | List | 9,829 | 9,805 | **−24** | Slow bleed; Task E unstarted |
| BBGV FFL Dealers | List | 1,294 | 1,275 | **−19** | 2 sends, 0 clicks; list degrading |
| Blue Book Live Auctions | List | 87 | 124 | **+37** | Strong gross adds; open rates collapsing |

**Net email subscriber change (May):** −66
- Subscribed to Email Marketing (TmzDF6): 0 events
- Unsubscribed from Email Marketing (Vs3yuP): 66 events
- Forms have been broken since at least April 1. Every month adds to the deficit.

---

*Next scheduled review: 2026-06-30 | Coach weekly reviews continue Mondays*
