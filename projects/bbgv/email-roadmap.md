# BBGV Email Marketing — Roadmap & Status

> **Single source of truth.** Updated by the weekly coach agent (Mondays). Hand-edited by Troy when decisions change.
>
> Daily audit data lives at `~/clawd/logs/bbgv-daily-audit-latest.md` (regenerated 8 AM ET).

---

## Current state — 2026-05-01

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
| Attributed conversions | 0 | n/a | BigCommerce tracking dead |

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
| H | Verify BigCommerce → Klaviyo Placed Order tracking | Pending | Troy |
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
| Conversions | 0 | 0 | — | BigCommerce tracking still dead (Task H) |

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
- **Conversion metric ID:** `Xt9eLm` (Placed Order, BigCommerce)

---

_This file is the contract between Troy and Claude. If something is missing or wrong, fix it here first._
