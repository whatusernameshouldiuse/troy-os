# BBGV Email Marketing — Roadmap & Status

> **Single source of truth.** Updated by the weekly coach agent (Mondays). Hand-edited by Troy when decisions change.
>
> Daily audit data lives at `~/clawd/logs/bbgv-daily-audit-latest.md` (regenerated 8 AM ET).

---

## Current state — 2026-05-11

**Account:** Blue Book Publications (Klaviyo `SMvTcV`) | **Sender:** troy@email.bluebookofgunvalues.com | **Reply-to:** troy@bluebookinc.com

### KPI baselines (April 2026, last 30 days)

| Metric | Value | Benchmark | Verdict |
|---|---:|---:|---|
| Avg open rate (campaigns) | 64.3% | 25–35% | Excellent |
| Avg click rate | 4.8% | 2–3% | Strong |
| Avg CTOR | 7.5% | 12–15% | Below — CTAs not compelling action |
| Unsub rate | 0.41% | <0.5% | Healthy |
| Bounce rate | 0.4% | <2% | Healthy |
| Spam rate | 0.05% | <0.1% | Healthy |
| Net list growth | -89 organic | positive | Forms broken |
| Attributed conversions | 0 | n/a | Authorize.net tracking dead |

### Audience snapshot

| Audience | Type | Size | Use |
|---|---|---:|---|
| [RECOVERY] 30-Day Engaged | Segment | 3,133 | Primary Signal target |
| [RECOVERY] 60-Day Engaged | Segment | 3,633 | Signal expansion 1 |
| [EXPANSION] 90-Day Engaged | Segment | 4,598 | Signal expansion 2 |
| [EXPANSION] 120-Day Engaged | Segment | 5,103 | Backup pool |
| Paid Subscribers | List | 9,829 | Premium audience |
| BBGV FFL Dealers | List | 1,294 | Cold, single opt-in (Apr 29 import) |
| Blue Book Live Auctions | List | 87 | Live auction alerts (over-emailed) |
| [SUNSET] 60-Day Inactive | Segment | 18,188 | Excluded — re-engage candidates |
| [SUNSET] Never Engaged | Segment | 13,678 | Excluded — suppress candidates |

### Live flows (2 active, 1 stuck in draft)

| Flow | Status | Trigger | 30d Open | 30d Click |
|---|---|---|---:|---:|
| Blue Book → GunStreamer Sequence | Live | Added to List `WuuaYj` | 61.0% | 12.2% |
| Flow - Abandoned Cart Leads | Live (NEW Apr 29) | Metric | 36.0% | 0.0% |
| Onboarding Welcome Series | **DRAFT (since 2024)** | Unconfigured | — | — |

---

## Roadmap — active tasks

### Tier 1: This week (highest engagement lift)

| # | Task | Status | Owner | Expected lift |
|---|---|---|---|---|
| A | Ship Welcome Series (5 emails) | Pending | Troy + Claude | +400–700 opens/mo |
| B | Restore Tue/Thu/Sat Signal cadence (4 drafts ready) | Pending | Troy | +14–18K opens/mo |
| C | Fix Abandoned Cart Leads flow (0% click rate) | Pending | Claude | Bring up to 3% click |

### Tier 2: Next 2 weeks (list growth)

| # | Task | Status | Owner |
|---|---|---|---|
| D | Re-engagement gauntlet for 31,866 sunset profiles (3 emails) | Pending | Troy + Claude |
| E | Audit & rebuild signup forms on bluebookofgunvalues.com | Pending | Troy + Claude |
| F | Live Auctions: cut cadence to 1×/week until list > 500; vary subject lines | Pending | Troy |
| G | Delete or wire up dead Collector Newsletter list (`V8T7c2`, 0 subs) | Pending | Troy |

### Tier 3: Within 30 days (revenue + scale)

| # | Task | Status | Owner |
|---|---|---|---|
| H | Verify Authorize.net → Klaviyo Placed Order tracking | Pending | Troy |
| I | Build 3-email FFL Dealers warming sequence (B2B voice) | Pending | Troy + Claude |
| J | A/B test The Signal CTA structure (3 variants over 6 sends) | Pending | Troy |
| K | SMS pilot: Live Auction Alerts as SMS, 30 min before stream | Pending | Troy |
| L | Suppress non-responders after re-engagement gauntlet | Blocked by D | Troy |

---

## Critical findings (locked from 2026-05-01 audit)

1. **No welcome flow live.** Highest single ROI gap.
2. **List growth = -89 organic for April.** Forms aren't converting.
3. **Live Auctions list (87) is too small for 14 sends/month.**
4. **The Signal cadence at 5 sends/month vs planned 12.** Leaving ~16K opens on the table.
5. **Cold list mixed with engaged segment on Apr 29 dropped opens 70%→53%.** Don't repeat.
6. **31,866 sunset profiles** sitting in Klaviyo billing with zero engagement.
7. **CTOR 7% vs 12–15% benchmark.** Content engages, CTAs don't drive action.
8. **Conversion tracking dead.** $0 attributed across every campaign for 30 days.

---

## Completed

_Nothing shipped yet. Coach will move tasks here as they complete._

---

## Weekly Reviews

_Appended by coach agent every Monday. Newest first._

### Week of 2026-05-11 — Coach Review #3

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

Main send: "The Signal — Winchester Model 12 (20ga + polychoke) — May 5 2026" (`01KQWRZ82QDW3NY332SBWK84NQ`, 3,166 rcpt, May 5). FFL Dealers excluded — first clean Signal in recovery.

| Metric | Baseline | This Week | Δ vs Baseline | Δ vs Wk Prior |
|---|---:|---:|---|---|
| Open rate | 64.3% | 57.6% | -6.7pp | +0.1pp |
| Click rate | 4.8% | 4.7% | -0.1pp | +0.2pp |
| CTOR | 7.5% | 8.2% | +0.7pp | +0.4pp |
| Unsub rate | 0.41% | 0.29% | **-0.12pp ✓** | -0.28pp |
| Bounce rate | 0.4% | 0.13% | **-0.27pp ✓** | -0.82pp |
| Spam rate | 0.05% | 0% | improved | stable |
| Conversions | 0 | 0 | — | — |

Bounce and unsub both fell below the April baseline for the first time — direct result of excluding FFL cold list. Open rate still 9.4pp below the 67% recovery target.

**Live Auctions (3 sends this week, list now 100):**

| Campaign | ID | Rcpt | Open | Unsub | Bounce |
|---|---|---:|---:|---:|---:|
| Wed May 6 | `01KQZ5HDYVFWMWWKYW5J5DZZ0F` | 67 | 62.69% | 0% | 0% |
| Thu May 7 | `01KR1SC55S0CAHEFCAFPNQN153` | 71 | 36.62% | 0% | 0% |
| Fri May 8 | `01KR4PEZHAVY5BXPGQEPKDSTXA` | 72 | 55.56% | 0% | 0% |

Thursday open rate 36.62% — 26pp below Wednesday and 19pp below Friday. Zero unsubs across all three (improvement from 1.61% Thu unsub last week); list grew +7 to 100.

**Flows (last 7 days):**

| Flow | ID | Rcpt | Open | Click | CTOR |
|---|---|---:|---:|---:|---:|
| Blue Book → GunStreamer | `SNbTjz` | 19 | 52.6% | 10.5% | 20.0% |
| Abandoned Cart Leads | `Wn6Uau` | **0** | — | — | — |

Abandoned Cart had 75+ sends the prior week; zero this week. Trigger likely dead (see optimizations).

#### Audience Snapshot vs Last Week

| Audience | May 4 | May 11 | Δ | vs Apr Baseline |
|---|---:|---:|---:|---:|
| [RECOVERY] 30-Day Engaged | 3,161 | 3,049 | **-112** | -84 |
| [RECOVERY] 60-Day Engaged | 3,649 | 3,418 | **-231** | -215 |
| [EXPANSION] 90-Day Engaged | 4,600 | 4,605 | +5 | +7 |
| [EXPANSION] 120-Day Engaged | 5,117 | 5,133 | +16 | +30 |
| Paid Subscribers | 9,827 | 9,821 | -6 | -8 |
| BBGV FFL Dealers | 1,294 | 1,293 | -1 | -1 |
| Blue Book Live Auctions | 93 | 100 | **+7** | +13 |

30-Day and 60-Day both contracted — first week-over-week decline. One Signal at 57.6% open rate does not produce enough engagement volume to replenish rolling-window outflows at a 1×/week pace.

#### Task Status Review

Live flows confirmed (2, unchanged): `SNbTjz` (Blue Book → GunStreamer Sequence) and `Wn6Uau` (Flow - Abandoned Cart Leads). No Welcome/Onboarding flow in live list — **Task A remains Pending.** Signal sent Monday May 5 only; no Thu or Sat sends — **Task B remains Pending.** Abandoned Cart `Wn6Uau` shows 0 recipients this week (prior week had ongoing sends); trigger is likely dead — **Task C remains Pending, priority escalated: investigate trigger before fixing links.** Live Auctions ran 3× this week (Wed/Thu/Fri) — **Task F remains Pending.**

#### Tactical Optimizations

**1. [RECOVERY] 30-Day contracted -112 this week — 1 Signal/week cannot hold the rolling window. Send Tuesday and Thursday.**

Winchester Model 12 (`01KQWRZ82QDW3NY332SBWK84NQ`) injected 1,820 unique opens on May 5. Despite that, 30-Day shrank 3,161 → 3,049 (-112) and 60-Day shrank 3,649 → 3,418 (-231). Profiles are aging out of the rolling window faster than a single weekly send replenishes them. Tue/Thu/Sat cadence is already approved in the Decisions Log but hasn't been executed. Send Tuesday May 12 to [RECOVERY] 30-Day + [RECOVERY] 60-Day only (6,467 combined, warmest profiles, cleanest ISP signal). Send Thursday May 14 to the same or expand to include [EXPANSION] 90-Day if Tuesday bounce holds. Two sends this week should push 30-Day back above 3,100 by May 18.

**2. Winchester Model 12 bounce 0.126% is the first sub-baseline bounce in recovery — lock this exact audience formula as the Signal default.**

Back-to-back Signal comparison, one variable changed (FFL inclusion):
- S&W Model 10-6 (`01KQD274`, Apr 29): FFL included → 1.28% bounce (3.2× baseline), 55.25% open
- Winchester Model 12 (`01KQWRZ82QDW3NY332SBWK84NQ`, May 5): FFL excluded → 0.126% bounce (0.3× baseline), 57.56% open

Bounce dropped 90% and open rate rose +2.3pp from a single audience change. The working formula: [RECOVERY] 60-Day + Paid Subscribers + [EXPANSION] 90-Day, exclude [SUNSET] 60-Day Inactive, exclude FFL Dealers. Do not deviate from this for any Signal until Task I (FFL warming sequence) ships and FFL has its own clean sending track record.

**3. Abandoned Cart (`Wn6Uau`) dropped from 75+ sends to 0 this week — the trigger is dead. Task H is now blocking Task C.**

Prior review flagged 0% click rate and recommended a broken-link test. This week the flow received zero recipients — no cart/checkout events fired in 7 days. This is consistent with Task H (Authorize.net → Klaviyo Placed Order tracking dead): checkout metrics have likely also stopped firing. A broken-link fix on Task C has zero ROI if the trigger never fires. Action: Klaviyo → Analytics → Metrics → find the metric triggering `Wn6Uau` → check last event timestamp. If no events in 7+ days, Authorize.net end-to-end tracking is broken and Task H must be resolved before Task C. If events exist but the flow isn't sending, the trigger filter condition may have changed. Either way, this investigation takes 5 minutes and determines whether Task C is even actionable this week.

---

### Week of 2026-05-04 — Coach Review #2

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

Main sends: "The Signal — S&W Model 10-6" (`01KQD274`, 3,995 rcpt, Apr 29) and "2026 Price Guide Launch v5" (`01KQFX8F`, 3,296 rcpt, Apr 30). **No new sends May 1–4.** Weighted averages across 7,291 recipients.

| Metric | Baseline | This Week | Δ | Note |
|---|---:|---:|---|---|
| Open rate | 64.3% | 57.5% | **-6.8pp** | Still below 67% recovery target; up from 53.7% last week as late opens accumulate |
| Click rate | 4.8% | 4.51% | -0.29pp | Stable |
| CTOR | 7.5% | 7.85% | +0.35pp | Still far below 12–15% benchmark |
| Unsub rate | 0.41% | 0.57% | **+0.16pp** | FFL cold list inflating Signal (0.61%) |
| Bounce rate | 0.4% | 0.95% | **+0.55pp** | FFL driving Signal bounces (1.28%); Price Guide clean at 0.55% |
| Spam rate | 0.05% | 0.03% | -0.02pp | Healthy |
| Conversions | 0 | 0 | — | Authorize.net tracking still dead (Task H) |

**Price Guide vs Signal split:** Price Guide (`01KQFX8F`) sent to clean engaged-only audiences hit 60.22% open / 7.80% CTOR. Signal (`01KQD274`) mixed FFL Dealers + 90-Day Engaged, hit 55.25% open / 7.89% CTOR. The 4.97pp open-rate gap is entirely the FFL cold-list contamination. Price Guide is the closest to the recovery target this account has sent in the window.

**Live Auctions (4 sends this week, micro-list):**

| Campaign | ID | Rcpt | Open | Unsub | Bounce |
|---|---|---:|---:|---:|---:|
| Mon Apr 27 | `01KQ80R4W8CXMR9P8Z5Z582193` | 61 | 50.0% | 0% | 1.64% |
| Wed Apr 29 | `01KQD4WRB2VBTNRKZFTN439ZPM` | 13 | 8.33% | 0% | 7.69% |
| Thu Apr 30 | `01KQFQYE72GNN0YSKHYBHW4VVA` | 63 | 43.55% | **1.61%** | 1.59% |

Thu Apr 30 unsub rate 1.61% = 4× baseline. List grew to 93 (+5 vs 88 last week) because double-opt-in adds outpaced losses — but that margin is thin.

#### Audience Snapshot vs Last Week

| Audience | May 1 | May 4 | Δ | vs Apr Baseline |
|---|---:|---:|---:|---:|
| [RECOVERY] 30-Day Engaged | 3,138 | 3,161 | **+23** | +28 |
| [RECOVERY] 60-Day Engaged | 3,638 | 3,649 | +11 | +16 |
| [EXPANSION] 90-Day Engaged | 4,602 | 4,600 | -2 | +2 |
| [EXPANSION] 120-Day Engaged | 5,106 | 5,117 | +11 | +14 |
| Paid Subscribers | 9,829 | 9,827 | -2 | -2 |
| BBGV FFL Dealers | 1,294 | 1,294 | flat | flat |
| Blue Book Live Auctions | 88 | 93 | **+5** | +6 |

30-Day Engaged growth accelerating (+23 this week vs +5 last week) — the warm pool is building. Paid Subscribers net -2; needs form audit (Task E) to reverse.

#### Task Status Review

Live flows confirmed (2, unchanged from last week): `SNbTjz` (Blue Book → GunStreamer Sequence) and `Wn6Uau` (Flow - Abandoned Cart Leads). No Welcome/Onboarding flow in live flows list — **Task A remains Pending.** Zero sends May 1–4; Tue/Thu/Sat cadence has not resumed — **Task B remains Pending.** Abandoned Cart `Wn6Uau` click rate 0% across all 75 emails (AV1 `SawPV6`: 26 sends, AV2 `RKJyd3`: 29 sends, AV3 `YqeN4s`: 20 sends), now entering week 2 — **Task C remains Pending.** No other task status changes.

#### Tactical Optimizations

**1. Send a clean Signal this week (May 6 Tue or May 8 Thu) to [RECOVERY] segments only — the 4-day gap is a reputation risk.**

No sends since Apr 30 (4 days as of today). The 30-Day Engaged segment grew to 3,161 (+23 this week alone) — the warmest audience in the account is idle. The data is direct: Price Guide (`01KQFX8F`) sent to clean engaged segments only hit 60.22% open; Signal (`01KQD274`) mixed FFL cold list, hit 55.25%. The next Signal send should go to [RECOVERY] 30-Day (3,161) + [RECOVERY] 60-Day (3,649) only — exclude FFL, exclude 90-Day and 120-Day until bounce rate returns to baseline (0.4%). This audience is 6,810 warm profiles and would produce the cleanest open-rate signal to ISPs since the recovery began.

**2. Thu Apr 30 Live Auctions (`01KQFQYE72GNN0YSKHYBHW4VVA`) hit 1.61% unsub; Mon Apr 27 hit 0% — collapse to Monday-only cadence immediately.**

Comparable send sizes: Mon Apr 27 (61 rcpt, 0 unsubs), Thu Apr 30 (63 rcpt, 1.61% unsub). Monday sends to this same [LIVE AUCTIONS] segment produce zero unsub events; Thursday sends produce 1.61% = 4× baseline. At 1.61%/send × 4 sends/week, the 93-person list loses ~6 subscribers per week structurally. Monday sends have built-in immediacy (the auction is that day); Thursday sends don't. Task F already calls for 1×/week — execute it now using Monday as the slot. Do not send another Thursday Live Auction until the list exceeds 500.

**3. Abandoned Cart 0% click rate across 75 emails is entering week 2 — run the 2-minute broken-link test before touching copy.**

AV1 (`SawPV6`): 26 sends, 26.92% open rate, 0 clicks. AV2 (`RKJyd3`): 29 sends, 44.83% open, 0 clicks. AV3 (`YqeN4s`): 20 sends, 47.37% open, 0 clicks. Open rates are rising week-over-week (AV1 up from 23.1% to 26.9% as late opens accumulate), confirming people are reading the emails. Zero clicks across 75 opened emails rules out copy being the primary problem — a bad CTA still produces accidental clicks. The most probable cause is a broken redirect or dead Authorize.net destination link. Action: open each of the 3 flow messages in Klaviyo preview, click every CTA, verify the destination URL loads. If a link is dead, fix it — the flow becomes functional without any copy changes. This is Task C and is likely a 5-minute resolution.

---

### Week of 2026-05-01 — Coach Review #1

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

| Metric | Baseline | This Week (main sends) | Δ | Note |
|---|---:|---:|---|---|
| Open rate | 64.3% | 53.7% | **-10.6pp** | FFL cold list mixed into Signal |
| Click rate | 4.8% | 4.4% | -0.4pp | Marginal decline |
| CTOR | 7.5% | 8.2% | +0.7pp | Slight improvement; still vs 12–15% benchmark |
| Unsub rate | 0.41% | 0.54% | +0.13pp | Elevated; Live Auctions far worse (see below) |
| Bounce rate | 0.4% | 0.86% | **+0.46pp** | FFL cold list driving bounces on Signal |
| Spam rate | 0.05% | 0.03% | -0.02pp | Healthy |
| Conversions | 0 | 0 | — | Authorize.net tracking still dead (Task H) |

_Main sends (7,285 combined recipients): "The Signal — S&W Model 10-6" (01KQD274, 3,995 rcpt) + "2026 Price Guide Launch v5" (01KQFX8F, 3,290 rcpt). Weighted averages._

**Live Auctions cadence (separate, 88-person list):**
4 sends in 7 days. Unsub rates: Apr 24 = 1.724%, Apr 30 = 1.613% — 4× baseline. Apr 29 Wed send (01KQD4WR) went to only 13 recipients with 0% open / 7.69% bounce — audience is fragmenting.

**Audience snapshot vs Apr baseline:**

| Audience | Apr Baseline | Current | Δ |
|---|---:|---:|---|
| [RECOVERY] 30-Day Engaged | 3,133 | 3,138 | +5 |
| [RECOVERY] 60-Day Engaged | 3,633 | 3,638 | +5 |
| [EXPANSION] 90-Day Engaged | 4,598 | 4,602 | +4 |
| [EXPANSION] 120-Day Engaged | 5,103 | 5,106 | +3 |
| Paid Subscribers | 9,829 | 9,829 | flat |
| BBGV FFL Dealers | 1,294 | 1,294 | flat |
| Blue Book Live Auctions | 87 | 88 | +1 |

#### Task Status Review

No task transitioned to Live or Complete this week. Live flows confirmed: Blue Book → GunStreamer Sequence (`SNbTjz`) and Flow - Abandoned Cart Leads (`Wn6Uau`). Onboarding Welcome Series absent from live flows list — **Task A remains Pending.** Signal cadence: 1 send this week (Tue Apr 29 only), no Thu or Sat — **Task B remains Pending.** Abandoned Cart flow 0% click rate confirmed by this week's data (75 sends, 0 clicks) — **Task C remains Pending.**

#### Tactical Optimizations

**1. Stop mixing FFL Dealers into Signal sends immediately — deliverability is being damaged.**
"The Signal — S&W Model 10-6" (01KQD274) sent Apr 29 to 1,294 cold single-opt-in FFL Dealers + [EXPANSION] 90-Day Engaged. Result: 53.75% open (-10.6pp below 64.3% baseline, below the 67%+ recovery benchmark) and 1.28% bounce (3.2× the 0.4% baseline). The FFL list was imported same day as the send. Bounce blowback from cold contacts will affect sender reputation for subsequent Signal sends. Rule: FFL Dealers are excluded from all Signal campaigns until Task I (warming sequence) ships.

**2. Kill the Live Auctions 4×/week cadence today — the list has weeks left at this rate.**
88 subscribers received 4 campaigns in 7 days. Apr 24 unsub rate: 1.724%. Apr 30 unsub rate: 1.613%. The Apr 29 Wed send (01KQD4WR) reached only 13 recipients — the list is already splitting into phantom sub-audiences. At 1.6%+ unsub per send × 4 sends/week, the effective list will be below 50 within a month. Immediate action per Task F: cap at 1 send/week to the full `WuuaYj` list, and audit what created the 13-recipient sub-segment on Apr 29.

**3. AV1 (1-hour trigger) in Abandoned Cart is the weakest open in its own sequence — fix the subject before touching CTAs.**
Across 75 sends this week: AV1 "AV1 (1 hour - market intelligence showcase)" opened at 23.1%, AV2 Day 2 at 41.4%, AV3 Day 5 at 47.4%. A 1-hour post-abandon trigger should be the peak-intent moment; opening lower than Day 5 means the subject is failing, not the timing. Test subject: "Your gun valuation is still saved" or personalized "[First name] — you left your valuation behind." Separately, click rate is 0% across all three messages (75 sends, 0 clicks) — audit that all CTA links in `Wn6Uau` are live and resolving before rewriting copy (broken link is the likeliest explanation for 0/75 clicks).

---

### Week of 2026-05-01 — initial baseline
- Audit completed.
- Daily monitoring infrastructure deployed (`bbgv-daily-email-audit.py`, runs 8 AM ET via launchd).
- Roadmap drafted.
- Coach agent scheduled.
- 30-day follow-up agent scheduled for 2026-05-31.

---

## Decisions log

_Hand-edit when you make a strategic decision (cadence change, flow kill, audience consolidation). Coach reads this to avoid suggesting things you've already ruled out._

- **2026-05-01 — Recovery mode confirmed working.** Engaged audience hit 67%+ opens; expanding cadence to Tue/Thu/Sat is approved.

---

## Reference

- **Daily audit (auto):** `~/clawd/logs/bbgv-daily-audit-latest.md`
- **Audit script:** `~/clawd/scripts/bbgv-daily-email-audit.py`
- **Email system master:** `~/Work/BBGV/docs/BBGV-EMAIL-SYSTEM.md`
- **90-day flow plan:** `~/Work/BBGV/docs/BBGV-90-DAY-FLOW-PLAN.md`
- **Recovery templates:** `~/Work/BBGV/docs/BBGV-RECOVERY-EMAIL-TEMPLATES.md`
- **Klaviyo account ID:** `SMvTcV`
- **Conversion metric ID:** `Xt9eLm` (Placed Order, Authorize.net)

---

_This file is the contract between Troy and Claude. If something is missing or wrong, fix it here first._
