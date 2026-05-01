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
