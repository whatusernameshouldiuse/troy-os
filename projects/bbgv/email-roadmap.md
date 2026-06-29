# BBGV Email Marketing — Roadmap & Status

> **Single source of truth.** Updated by the weekly coach agent (Mondays). Hand-edited by Troy when decisions change.
>
> Daily audit data lives at `~/clawd/logs/bbgv-daily-audit-latest.md` (regenerated 8 AM ET).

---

## Current state — 2026-06-29

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
| [RECOVERY] 30-Day Engaged | Segment | 3,925 | Primary Signal target — **+792 above April baseline, +568 wk/wk RECORD GAIN** |
| [RECOVERY] 60-Day Engaged | Segment | 4,280 | Signal expansion 1 — **+647 above April baseline, +551 wk/wk RECORD GAIN** |
| [EXPANSION] 90-Day Engaged | Segment | 4,459 | Signal expansion 2 — -139 below April baseline (+538 wk/wk RECOVERY) |
| [EXPANSION] 120-Day Engaged | Segment | 4,889 | -214 below baseline (+518 wk/wk RECOVERY from prior CRITICAL) |
| Paid Subscribers | List | 9,779 | Premium audience — -50 from baseline, -1 wk/wk |
| BBGV FFL Dealers | List | 1,267 | Cold, single opt-in (Apr 29 import) — -27 from baseline, flat wk/wk |
| Blue Book Live Auctions | List | 148 | Live auction alerts — +7 wk/wk; Task F unexecuted 10 weeks |
| [SUNSET] 60-Day Inactive | Segment | 18,188 | Excluded — re-engage candidates |
| [SUNSET] Never Engaged | Segment | 13,678 | Excluded — suppress candidates |

### Live flows (7 active as of Jun 26 — major infrastructure week)

| Flow | ID | Status | Trigger | Note |
|---|---|---|---|---|
| BBGV Welcome Series [control] | `TJNqBG` | **LIVE** (new Jun 26) | Added to List | 4.73% unsub — CRITICAL, audit trigger |
| BBGV Sunset Reactivation | `SNUVDV` | **LIVE** (new Jun 25) | Added to List | Task D in progress |
| BBGV Re-Engagement 60d [control] | `SNG6HE` | **LIVE** (new Jun 26) | Added to List | 23.08% CTOR — strongest in account |
| BBGV Win-Back [control] | `URAZiF` | **LIVE** (new Jun 26) | Metric | 63.64% open, 0 clicks, 11 rcpt |
| BBGV Post-Purchase [control] | `XGcdaK` | **LIVE** (new Jun 26) | Added to List | 0 recipients — trigger unconfirmed |
| Abandoned Valuation — Rebuild | `V8qDgP` | **LIVE** (built Jun 10) | Metric | 0 recipients — trigger metric still dead |
| BBGV Blue Book to GunStreamer [control] | `VU7PLd` | **LIVE** (new Jun 26) | Added to List | 8 rcpt, 25% open, 12.5% click |
| Welcome Series — The Signal | `SeBVbw` | **DRAFT** (was sending) | Added to List | 1,310 rcpt last 7d; 0.08% spam — CRITICAL |
| Blue Book → GunStreamer Sequence | `SNbTjz` | **DRAFT** (reversed from Live) | Added to List | 10 rcpt, 0% click; removed from live list |
| Flow - Abandoned Cart Leads | `Wn6Uau` | **DRAFT** | Metric | 3rd consecutive week — 0 recipients |
| Onboarding Welcome Series | — | **DRAFT (since 2024)** | Unconfigured | Superseded by TJNqBG / SeBVbw |

---

## Roadmap — active tasks

### Tier 1: This week (highest engagement lift)

| # | Task | Status | Owner | Expected lift |
|---|---|---|---|---|
| A | Ship Welcome Series (5 emails) | **In Progress** — TJNqBG [BBGV Welcome Series control] Live Jun 26; SeBVbw [draft] firing 1,310 rcpt; 4.73% unsub on TJNqBG CRITICAL — audit trigger | Troy + Claude | +400–700 opens/mo |
| B | Restore Tue/Thu/Sat Signal cadence (4 drafts ready) | Pending | Troy | +14–18K opens/mo |
| C | Fix Abandoned Cart Leads flow (0% click rate) | In Progress — Wn6Uau confirmed DRAFT; absent from flow report 3rd consecutive week (Jun 15 + Jun 22 + Jun 29); V8qDgP [Abandoned Valuation Rebuild] is Live but also 0 rcpt — trigger metric still dead | Claude | Bring up to 3% click |

### Tier 2: Next 2 weeks (list growth)

| # | Task | Status | Owner |
|---|---|---|---|
| D | Re-engagement gauntlet for 31,866 sunset profiles (3 emails) | **In Progress** — SNUVDV [Sunset Reactivation] Live Jun 25 (688 rcpt, 36.83% open, 0.87% unsub ✓); SNG6HE [Re-Engagement 60d control] Live Jun 26 (95 rcpt, 23.08% CTOR) | Troy + Claude |
| E | Audit & rebuild signup forms on bluebookofgunvalues.com | Pending | Troy + Claude |
| F | Live Auctions: cut cadence to 1×/week until list > 500; vary subject lines | Pending | Troy |
| G | Delete or wire up dead Collector Newsletter list (`V8T7c2`, 0 subs) | Pending | Troy |

### Tier 3: Within 30 days (revenue + scale)

| # | Task | Status | Owner |
|---|---|---|---|
| H | Verify Authorize.net → Klaviyo Placed Order tracking | Pending | Troy |
| I | Build 3-email FFL Dealers warming sequence (B2B voice) | **Blocked — fix FFL CTA link first** | Troy + Claude |
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

### Week of 2026-06-29 — Coach Review #10

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

Single campaign: "The Signal — Winchester Model 70 Carbine (pre-64) — 2026-06-23" (`01KVTKF49ZQ2XH1CWN3QBR3PVE`, 3,706 rcpt, Jun 23). Audience: all four engaged segments + Collector Newsletter — **Paid Subscribers (9,779) not included.** Proven [RECOVERY] 30-Day + Paid Subscribers formula violated for the third time in four sends.

| Metric | Baseline | This Week | Δ vs Baseline | Note |
|---|---:|---:|---|---|
| Open rate | 64.3% | 59.83% | **-4.47pp** | Paid Subscribers excluded; 90-Day/120-Day dilution |
| Click rate | 4.8% | 3.51% | **-1.29pp** | |
| CTOR | 7.5% | 5.87% | **-1.63pp — WORST ON RECORD** | All-time low in 10-week history |
| Unsub rate | 0.41% | 0.22% | **-0.19pp ✓** | |
| Bounce rate | 0.4% | 0.19% | **-0.21pp ✓** | |
| Spam rate | 0.05% | 0.03% | **✓ clean** | |
| Conversions | 0 | 0 | — | — |

**Flows (last 7 days) — largest infrastructure buildout week on record:**

7 flows confirmed live as of Jun 26. Critical unsub and spam metrics on Welcome flows require immediate action.

| Flow | ID | Rcpt | Open | Click | CTOR | Unsub | Spam | Status |
|---|---|---:|---:|---:|---:|---:|---|---|
| Welcome Series — The Signal | `SeBVbw` | 1,310 | 38.12% | 4.46% | 11.69% | 2.23% | **0.08% ⚠** | DRAFT (firing) |
| BBGV Welcome Series [control] | `TJNqBG` | 279 | 28.36% | 1.82% | 6.41% | **4.73% CRITICAL** | 0% | **LIVE** |
| BBGV Sunset Reactivation | `SNUVDV` | 688 | 36.83% | 1.89% | 5.14% | 0.87% | 0% | **LIVE** |
| BBGV Re-Engagement 60d [control] | `SNG6HE` | 95 | 13.68% | 3.16% | **23.08%** | 0% | 0% | **LIVE** |
| BBGV Win-Back [control] | `URAZiF` | 11 | 63.64% | 0% | 0% | 0% | 0% | **LIVE** |
| Blue Book → GunStreamer | `SNbTjz` | 10 | 22.22% | 0% | 0% | 0% | 0% | **DRAFT** (was Live) |

`SNbTjz` (Blue Book → GunStreamer) confirmed DRAFT this week — status reversed vs all prior reviews. `Wn6Uau` (Abandoned Cart) absent from flow report for 3rd consecutive week. `V8qDgP` (Abandoned Valuation Rebuild) and `XGcdaK` (Post-Purchase [control]) are live but returned 0 recipients — triggers unconfirmed.

#### Audience Snapshot vs Last Week

| Audience | Jun 22 | Jun 29 | Δ | vs Apr Baseline |
|---|---:|---:|---:|---:|
| [RECOVERY] 30-Day Engaged | 3,357 | 3,925 | **+568 ✓ RECORD** | +792 |
| [RECOVERY] 60-Day Engaged | 3,729 | 4,280 | **+551 ✓ RECORD** | +647 |
| [EXPANSION] 90-Day Engaged | 3,921 | 4,459 | **+538 ✓ RECOVERY** | -139 |
| [EXPANSION] 120-Day Engaged | 4,371 | 4,889 | **+518 ✓ RECOVERY** | -214 |
| Paid Subscribers | 9,780 | 9,779 | -1 | -50 |
| BBGV FFL Dealers | 1,267 | 1,267 | flat | -27 |
| Blue Book Live Auctions | 141 | 148 | **+7 ✓** | +61 (record) |

All four engaged segments grew simultaneously for only the second time in 10 reviews (prior: Jun 1–8). 30-Day +568 and 60-Day +551 are the largest single-week gains on record. 90-Day and 120-Day reversed multi-week CRITICAL declines — 90-Day from -677 to -139 below baseline, 120-Day from -732 to -214. Primary driver: Welcome Series `SeBVbw` onboarded ~1,310 new subscribers with opens and clicks entering the 30-Day window; Signal campaign generated ~130 unique clicks; Reactivation flow generated ~13 clicks from inactive profiles. Live Auctions at 148 is a new list record.

#### Task Status Review

Live flows confirmed via API: **7 active** — `TJNqBG` (Welcome Series [control]), `SNUVDV` (Sunset Reactivation), `SNG6HE` (Re-Engagement 60d [control]), `URAZiF` (Win-Back [control]), `VU7PLd` (GunStreamer [control]), `V8qDgP` (Abandoned Valuation Rebuild), `XGcdaK` (Post-Purchase [control]). `SNbTjz` (Blue Book → GunStreamer) now DRAFT.

`TJNqBG` confirmed live Jun 26 — **Task A updated to In Progress; 4.73% unsub rate CRITICAL, requires trigger audit before scaling.** Signal sent once Jun 23 (Winchester Model 70 Carbine); Tue/Thu/Sat cadence unexecuted — **Task B remains Pending.** `Wn6Uau` absent from flow report 3rd week; `V8qDgP` live but 0 recipients — **Task C remains In Progress (trigger metric still dead).** `SNUVDV` live Jun 25, `SNG6HE` live Jun 26 — **Task D updated to In Progress.** No dedicated Live Auction send this week — **Task F remains Pending, 10th consecutive week.**

#### Tactical Optimizations

**1. BBGV Welcome Series [control] (`TJNqBG`) posted 4.73% aggregate unsub rate on 279 recipients — 11.5× baseline — in its first week live. Pause and audit trigger audience before deliverability damage compounds.**

RjmuuA (first message): 5.24% unsub on 214 rcpt ≈ 11 unsubscribes from brand-new contacts. Draft companion `SeBVbw` (TWqykB): 0.177% spam rate on 567 rcpt, above the 0.1% Google/Yahoo suppression-list threshold. Combined, the Welcome infrastructure reached 1,589 recipients this week while generating unsub and spam rates that erode domain reputation faster than the Signal rebuilds it. A correctly-scoped Welcome flow should post <0.5% unsub; 5.24% on first contact indicates the trigger is pulling the wrong audience — likely profiles who subscribed months or years ago and don't recognize the "welcome" context, or profiles double-sequenced with `SNUVDV` (Sunset Reactivation). Action: Klaviyo → `TJNqBG` → Edit Trigger → verify qualification criteria. If any overlap exists with the Sunset Reactivation audience, add a filter excluding profiles in `SNUVDV`'s list. Target: <0.5% unsub over next 7 days before restoring full volume.

**2. "Winchester Model 70 Carbine" (`01KVTKF49ZQ2XH1CWN3QBR3PVE`) posted 5.87% CTOR — worst on record in 10 weeks — because Paid Subscribers (9,779) were excluded in favor of all four overlapping engaged segments + Collector Newsletter.**

Three data points on the Paid Subscribers substitution cost: May 14 Colt Python ([RECOVERY] 30-Day + Paid Subscribers only): 65.6% open, 7.6% CTOR. Jun 9 Fox Sterlingworth (30-Day + 120-Day, no Paid Subscribers): 57.6% open, 6.49% CTOR. Jun 23 Winchester Model 70 (all four segments + Collector Newsletter, no Paid Subscribers): 59.83% open, 5.87% CTOR. Every deviation from Paid Subscribers costs 4–8pp open rate and 1–2pp CTOR. Jun 23 generated ~130 unique clicks (3.51% × 3,699 delivered). The same content on [RECOVERY] 30-Day (3,925) + Paid Subscribers (9,779) at 65% open / 9% CTOR = ~229 clicks — 76% more engagement, cleaner ISP signal, smaller audience. Next Signal formula locked: [RECOVERY] 30-Day (3,925) + Paid Subscribers (9,779). Exclude 60-Day, 90-Day, 120-Day, Collector Newsletter, FFL Dealers.

**3. Re-Engagement 60d [control] (`SNG6HE`) posted 23.08% CTOR on 95 recipients this week — 3.9× the Signal CTOR and above the 12–15% benchmark. Pull the CTA structure and apply it to the next Signal as a Task J variant.**

SNG6HE went to [SUNSET] 60-Day Inactive profiles — people who haven't engaged in 60+ days — and produced 23.08% CTOR vs the Signal's 5.87% on a warm, engaged audience. The re-engagement format creates explicit click intent that editorial format doesn't: it leads with what the recipient has missed and a specific, low-friction action to reclaim it. That structure translates directly to a warm audience CTA variant. Action: open `SNG6HE` in Klaviyo, copy the primary CTA structure (subject framing, CTA copy, button text, link), and use it as the B variant in the next Signal send (Task J A/B test, 50/50 split). If CTOR lifts from the current 5.87% toward even 12% on a 65%-open clean Signal send (30-Day + Paid Subscribers, ~3,500 delivered), that's an additional ~210 click events per send — enough to close the remaining 90-Day and 120-Day segment deficits within 2 weeks without increasing send frequency.

---

### Week of 2026-06-22 — Coach Review #9

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

Single send this week: "GunStreamer Value Watch - Python - 2026-06-19" (`01KVG9DCP88D8HC9TWMXG92VCS`, 3,966 rcpt, Jun 19). Audience: BBGV Free Users (Enthusiast + Single Valuation) + FFL Dealers + Collector Newsletter + Live Auctions + Paid Subscribers. **[RECOVERY] 30-Day and 60-Day segments excluded entirely.** Not a Signal newsletter — GunStreamer partner brand send. Lowest open rate in 8-week review history.

| Metric | Baseline | This Week | Δ vs Baseline | Note |
|---|---:|---:|---|---|
| Open rate | 64.3% | 49.95% | **-14.35pp — RECORD LOW** | Free/FFL audience; [RECOVERY] segments excluded |
| Click rate | 4.8% | 4.25% | **-0.55pp** | |
| CTOR | 7.5% | 8.51% | **+1.01pp ✓** | Above baseline; low-quality opener pool skews numerator |
| Unsub rate | 0.41% | 0.10% | **-0.31pp ✓** | |
| Bounce rate | 0.4% | 0.30% | **-0.10pp ✓** | |
| Spam rate | 0.05% | 0.025% | **✓ clean** | |
| Conversions | 0 | 0 | — | — |

Colt Python content (65.6% open on May 14 with [RECOVERY] 30-Day + Paid Subscribers only) was deployed to cold Free User lists. Jun 19 included zero [RECOVERY] profiles. The 15.6pp gap vs the Colt Python send is attributable entirely to audience composition — same subject theme, same sender domain, different engaged-profile mix.

**Flows (last 7 days):**

| Flow | Message | Rcpt | Open | Click | CTOR |
|---|---|---:|---:|---:|---:|
| Blue Book → GunStreamer (`SNbTjz`) | RT2PuN (email 1) | 8 | 62.5% | 0% | 0% |
| Blue Book → GunStreamer (`SNbTjz`) | TVGu4n (email 2) | 8 | 50.0% | 12.5% | **25.0% — first meaningful click in 3 weeks** |
| Blue Book → GunStreamer (`SNbTjz`) | SS7pAC (email 3) | 5 | 40.0% | 0% | **0% (5th consecutive week)** |

No Abandoned Cart (`Wn6Uau`) activity for 2nd consecutive week. Only `SNbTjz` returned by `get_flows?filter=equals(status,"live")`. Email 2 (TVGu4n) reversal to 25% CTOR is the sole bright spot. Email 1 (RT2PuN) posted highest open rate in the sequence (62.5%) with zero clicks — CTA or link failure. Email 3 (SS7pAC) 0% CTOR for fifth consecutive week.

#### Audience Snapshot vs Last Week

| Audience | Jun 15 | Jun 22 | Δ | vs Apr Baseline |
|---|---:|---:|---:|---:|
| [RECOVERY] 30-Day Engaged | 3,408 | 3,357 | **-51** | +224 |
| [RECOVERY] 60-Day Engaged | 3,743 | 3,729 | -14 | +96 |
| [EXPANSION] 90-Day Engaged | 3,968 | 3,921 | -47 | **-677 — CRITICAL** |
| [EXPANSION] 120-Day Engaged | 5,174 | 4,371 | **-803 ⚠ RECORD DROP** | **-732 — CRITICAL** |
| Paid Subscribers | 9,785 | 9,780 | -5 | -49 |
| BBGV FFL Dealers | 1,268 | 1,267 | -1 | -27 |
| Blue Book Live Auctions | 131 | 141 | **+10 ✓** | +54 |

120-Day crossed from +71 above April baseline to -732 below in one week — a complete structural reversal. The 120-day lookback window as of Jun 22 opens to Feb 22; Feb–Mar click events are expiring en masse with no sufficient replacement volume. Jun 19 generated ~168 unique clicks (4.25% × 3,954 delivered), covering only 21% of the 803-profile deficit. 90-Day now -677 below baseline vs -630 last week, 4th consecutive week of decline. Only Live Auctions grew (+10 to 141 — record weekly gain with no dedicated send).

#### Task Status Review

Live flows confirmed: **1 only — `SNbTjz` (Blue Book → GunStreamer Sequence)**. Abandoned Cart `Wn6Uau` absent from live flow list and flow report for 2nd consecutive week — **Task C remains In Progress (DRAFT).** No Welcome/Onboarding flow — **Task A remains Pending.** Jun 19 send was a broad-audience GunStreamer brand campaign excluding [RECOVERY] segments; Tue/Thu/Sat Signal cadence unexecuted — **Task B remains Pending.** No dedicated Live Auction sends this week — **Task F remains Pending, 9th consecutive week.**

#### Tactical Optimizations

**1. "GunStreamer Value Watch - Python" (`01KVG9DCP88D8HC9TWMXG92VCS`) posted 49.95% open — 14.35pp below baseline, lowest in 8-week history — because [RECOVERY] 30-Day (3,408) and 60-Day (3,743) were excluded. The same Colt Python content produced 65.6% on May 14 with the correct audience. Next Signal must go to [RECOVERY] 30-Day (3,357) + Paid Subscribers (9,780), no deviation.**

Jun 19 included BBGV Free Users (Enthusiast + Single Valuation) — non-paying, low-engagement contacts whose ISP-visible open behavior drags aggregate open rate below 50%. Audience-only comparison: May 14 Python formula ([RECOVERY] 30-Day + Paid Subscribers, 3,417 rcpt) → 65.6% open, 0.15% bounce. Jun 19 same theme, contaminated audience (3,966 rcpt) → 49.95% open, 0.30% bounce. The Decisions Log and 8 weeks of reviews document this rule consistently; it has been violated twice in the last 3 sends (Jun 9: 120-Day substituted for Paid Subscribers; Jun 19: Free Users + FFL substituted entirely). Both deviations produced below-baseline opens. Next send formula: [RECOVERY] 30-Day (3,357) + Paid Subscribers (9,780), suppress [SUNSET] 60-Day Inactive, suppress FFL Dealers, suppress Free User lists. Expected: ≥65% open rate, ~150–170 click events toward 120-Day recovery.

**2. [EXPANSION] 120-Day collapsed -803 in one week (5,174 → 4,371), crossing from +71 above to -732 below April baseline. At the Jun 19 click rate (4.25%), generating 803 replacement clicks requires ~18,900 delivered recipients per week — impossible at 1 send/week. Only the combination of Task B (cadence) and Task J (CTOR) makes 120-Day recovery mathematically viable.**

Click deficit math: 120-Day needs ~803 new click events/week just to hold flat. Clean send ceiling (30-Day 3,357 + Paid Subscribers 9,780, overlap-adjusted): ~3,500 deliverable per send. At current CTOR 8.51% and 65% open: ~194 clicks per send — 24% of weekly breakeven. At 12% CTOR benchmark: ~273 clicks — 34%. At 2 sends/week × 12% CTOR: ~546 clicks — 68%. At 3 sends/week (Task B) × 12% CTOR: ~819 clicks — 102%, breakeven achieved. No single variable closes this gap alone. Task J (CTA A/B test) raises the multiplier; Task B (Tue/Thu/Sat cadence) raises the repetitions. Both must execute in parallel. Every week of delay costs another ~600 profiles from the 120-Day pool at current send frequency.

**3. GunStreamer email 1 (RT2PuN) opened at 62.5% — highest in the 3-email sequence — and produced zero clicks for the 2nd consecutive week. Email 3 (SS7pAC) is 0% CTOR for 5th consecutive week. Both need a Klaviyo link-click audit before any copy changes. Email 2 (TVGu4n) at 25% CTOR this week proves the flow infrastructure is partially functional.**

Email 1 (RT2PuN): last week 25% open, 25% CTOR; this week 62.5% open, 0% click across 5 openers — the CTOR collapse with higher open volume suggests a link that worked last week is broken again (or a different CTA block is rendering). Email 3 (SS7pAC): 5 recipients, 2 openers, 0 clicks — 5 consecutive weeks, ~25 cumulative recipients, zero clicks. Diagnose RT2PuN and SS7pAC first: open each in Klaviyo flow editor → click every CTA → verify destination loads. Email 2 (TVGu4n) working at 25% CTOR this week confirms the trigger, delivery, and at least one CTA link are functional — the RT2PuN and SS7pAC failures are message-specific, not flow-wide. Fix both broken CTAs before the flow adds more recipients to the dead-click funnel.

---

### Week of 2026-06-15 — Coach Review #8

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

Main send: "The Signal — Value Watch — Fox Sterlingworth 16ga (2026-06-08)" (`01KTPGWQVB3WGM8S6WE6NZQQXC`, 3,727 rcpt, Jun 9). Audience: [RECOVERY] 30-Day Engaged + [EXPANSION] 120-Day Engaged — deviation from the proven Colt Python formula ([RECOVERY] 30-Day + Paid Subscribers only). Two Live Auction sends (Jun 12, Jun 13) to `WuuaYj`.

| Metric | Baseline | This Week (Signal) | Δ vs Baseline | Note |
|---|---:|---:|---|---|
| Open rate | 64.3% | 57.6% | **-6.7pp** | 120-Day dilution vs Paid Subscribers formula |
| Click rate | 4.8% | 3.74% | **-1.06pp** | |
| CTOR | 7.5% | 6.49% | **-1.01pp** | Worst Signal CTOR in 4 weeks |
| Unsub rate | 0.41% | 0.22% | **-0.19pp ✓** | Below baseline |
| Bounce rate | 0.4% | 0.27% | **-0.13pp ✓** | Below baseline |
| Spam rate | 0.05% | 0% | **✓ clean** | |
| Conversions | 0 | 0 | — | — |

**Live Auction sends — Jun 12–13 (2 sends):**

| Campaign | ID | Rcpt | Open | Click | CTOR | Unsub | Bounce | Spam |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| Van's Sporting Goods Live 6/12 | `01KTYQGBWAJDT6ATQ21S6AB9SX` | 100 | 46.47% | 3.03% | 6.52% | 0% | **1.00%** | 0% |
| Tucker's Live 6/13 | `01KV0JXX6121T1R7XYE3HJ5XXV` | 99 | 43.43% | 5.05% | **11.63%** | 0% | 0% | 0% |

Task F (Monday-only, 1×/week) unexecuted for 8th consecutive week. Jun 12 Van's bounce 1.0% = 2.5× baseline; Tucker's Jun 13 is the highest CTOR (11.63%) recorded on any Live Auction send.

**Flows (last 7 days):**

| Flow | Message | Rcpt | Open | Click | CTOR |
|---|---|---:|---:|---:|---:|
| Blue Book → GunStreamer (`SNbTjz`) | RT2PuN (email 1) | 4 | 25.0% | 25.0% | **100% (1 click / 1 open)** |
| Blue Book → GunStreamer (`SNbTjz`) | TVGu4n (email 2) | 5 | 60.0% | 0% | 0% |
| Blue Book → GunStreamer (`SNbTjz`) | SS7pAC (email 3) | 6 | 33.3% | 0% | **0% (4th week)** |
| Abandoned Cart (`Wn6Uau`) | YqeN4s (AV3) | 6 | 66.67% | 0% | 0% |

**Critical: Abandoned Cart `Wn6Uau` confirmed DRAFT by Klaviyo API (`get_flows?filter=equals(status,"live")` returned only `SNbTjz`).** The roadmap's "Live (NEW Apr 29)" notation was incorrect. AV1 (SawPV6) and AV2 (RKJyd3) absent from flow report this week; last week's AV1 100% CTOR reversal did not repeat. Only AV3 (YqeN4s) fired, 0% click across 6 sends. GunStreamer email 1 (RT2PuN) 100% CTOR is a small-sample artifact (1 click from 1 opener, 4 total rcpt). SS7pAC (email 3) 0% CTOR for fourth consecutive week.

#### Audience Snapshot vs Last Week

| Audience | Jun 8 | Jun 15 | Δ | vs Apr Baseline |
|---|---:|---:|---:|---:|
| [RECOVERY] 30-Day Engaged | 3,480 | 3,408 | **-72 ⚠** | +275 |
| [RECOVERY] 60-Day Engaged | 3,761 | 3,743 | -18 | +110 |
| [EXPANSION] 90-Day Engaged | 4,196 | 3,968 | **-228 ⚠** | **-630 — CRITICAL** |
| [EXPANSION] 120-Day Engaged | 5,172 | 5,174 | +2 | +71 |
| Paid Subscribers | 9,787 | 9,785 | -2 | -44 |
| BBGV FFL Dealers | 1,269 | 1,268 | -1 | -26 |
| Blue Book Live Auctions | 128 | 131 | +3 | +44 |

[EXPANSION] 90-Day at 3,968 is 630 below April baseline — largest cumulative deficit of any tracked segment. Jun 9 Signal generated ~139 click events (3,727 × 3.74%); 90-Day lost 228 profiles — net shortfall of 89 click events for the week. 120-Day flatlined despite being in the Signal audience, confirming 3,727 rcpt at current CTOR is insufficient to replenish even the broader 120-day click pool. 30-Day fell -72 for the first weekly decline since Jun 1.

#### Task Status Review

Live flows confirmed via Klaviyo API: **1 only — `SNbTjz` (Blue Book → GunStreamer Sequence)**. `Wn6Uau` (Abandoned Cart Leads) confirmed `status: "draft"` — roadmap live flows table corrected. No Welcome/Onboarding flow — **Task A remains Pending.** Signal sent once (Jun 9, Fox Sterlingworth); Tue/Thu/Sat cadence unexecuted — **Task B remains Pending.** Abandoned Cart confirmed DRAFT; AV1/AV2 absent from report; AV3 0% click — **Task C: updated to In Progress — flow in DRAFT; message-level status of AV1/AV2 unknown, requires Klaviyo flow editor audit.** Two Live Auction sends (Jun 12, Jun 13) — **Task F remains Pending, 8th consecutive week.**

#### Tactical Optimizations

**1. "The Signal — Fox Sterlingworth" (`01KTPGWQVB3WGM8S6WE6NZQQXC`) used [RECOVERY] 30-Day + [EXPANSION] 120-Day and posted 57.6% open — -6.7pp below baseline, -8pp below the Colt Python. Revert to [RECOVERY] 30-Day + Paid Subscribers for the next Signal.**

Audience this week: 30-Day (3,408) + 120-Day (5,174). Because 30-Day is a subset of 120-Day, the effective unique pool was the 120-Day segment minus suppressions = 3,727 delivered. The marginal profiles added by 120-Day vs Paid Subscribers are contacts who last clicked 31–120 days ago — warm-ish, but measurably colder than Paid Subscribers who have an active financial relationship with BBGV. The Colt Python ([RECOVERY] 30-Day + Paid Subscribers, May 14): 65.6% open on 3,417 rcpt. This week: 57.6% on 3,727 rcpt — 8pp lower with 310 more recipients. The dilution cost is documented: each time a colder pool is substituted for Paid Subscribers, open rate drops 6–8pp. Next Signal formula: [RECOVERY] 30-Day (3,408) + Paid Subscribers (9,785), suppress [SUNSET] 60-Day Inactive and FFL Dealers. Target: 65%+ open rate. Paid Subscribers is the proven expansion audience.

**2. [EXPANSION] 90-Day is declining at -228/week and is 630 below April baseline — a single weekly Signal at 3.74% click rate generates only ~139 clicks, 89 short of breakeven. Adding one Signal send this week (Tuesday Jun 17) would generate ~278 total clicks and begin reversing the outflow.**

The 90-Day window now opens ~Mar 17. Click events from mid-March are expiring daily with no replacement volume. To hold 90-Day at current 3,968, the account needs ≥228 new click events per week. Jun 9 Signal produced ~139 — a 39% shortfall. At 2 Signals/week (Tue + Thu): ~278 clicks, enough to stabilize. At 3 Signals/week (Tue/Thu/Sat per Task B): ~417 clicks, enough to rebuild the segment. Formula for Tuesday Jun 17: [RECOVERY] 30-Day (3,408) + Paid Subscribers (9,785), different gun model (not Fox Sterlingworth again), tight CTA. If 90-Day falls below 3,800 before Task B executes, the Tue/Thu/Sat expansion pool quality degrades structurally and future opens will drop further. This is the single highest-leverage action this week — no new infrastructure required, just a second send.

**3. Tucker's Live Jun 13 (`01KV0JXX6121T1R7XYE3HJ5XXV`) posted 11.63% CTOR — nearly 2× Van's Jun 12 (6.52% CTOR) sent to the same list within 21 hours. Tucker's is the only Live Auction send to approach the 12–15% CTOR benchmark. Audit the Tucker's CTA structure and apply it to next Monday's send.**

Both sends went to the same `WuuaYj` list (~99–100 rcpt), 21 hours apart. Van's (Jun 12, 3:30pm CT): 3.03% click, 6.52% CTOR, 1% bounce. Tucker's (Jun 13, 3:00pm CT): 5.05% click, 11.63% CTOR, 0% bounce. Same audience, different send — the delta is copy and CTA structure, not timing or list quality. Open rates were comparable (46.47% vs 43.43%), so inbox placement was equivalent. Tucker's generated 66% more click intent per opener despite having 1 fewer recipient. Action: open both campaign previews in Klaviyo, compare subject line, preview text, and primary CTA. Tucker's format (whatever produced 11.63% CTOR) is the new Live Auction template standard. Apply it to Monday Jun 16 as the first Task F–compliant send. This is also the CTOR lever for the broader audience problem: if Tucker's format translates to Signal sends, CTOR would approach benchmark and generate the click volume needed to halt 90-Day segment decay.

---

### Week of 2026-06-08 — Coach Review #7

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

Two major sends this week. (1) "GS — Mike's Guns 100+ LIVE — Signal (60-Day Engaged) — Jun 1" (`01KT1QVPJH1D0RC0ZG4TWJ0EDN`, 4,105 rcpt, Jun 1) — contaminated again: [SUNSET] 60-Day Inactive included despite 6 prior weeks of documentation. (2) "Van's Auction Value Alert — Whole List (2026-06-05)" (`01KTCVJCEXCTMKAB0GDP1KEXP5`, 3,984 rcpt, Jun 5) — broad audience: BBGV Free Users (Enthusiast + Single Valuation), FFL Dealers, Collector Newsletter, Live Auctions, Paid Subscribers. First week with two main sends since recovery began.

| Metric | Baseline | Jun 1 Signal | Jun 5 Auction Alert | Δ vs Baseline | Note |
|---|---:|---:|---:|---|---|
| Open rate | 64.3% | 61.82% | 62.03% | **-2.4pp avg** | [SUNSET] contamination Jun 1; broad list Jun 5 |
| Click rate | 4.8% | 4.96% | 6.37% | **+1.6pp avg ✓** | Jun 5 strongest click rate in all 7 reviews |
| CTOR | 7.5% | 8.02% | 10.28% | **+1.6pp avg ✓** | Closing gap vs 12–15% benchmark |
| Unsub rate | 0.41% | 0.34% | 0.33% | **-0.07pp ✓** | Both below baseline |
| Bounce rate | 0.4% | 0.27% | 0.38% | **-0.1pp ✓** | Both below baseline |
| Spam rate | 0.05% | 0.049% | 0.025% | **✓ clean** | Main sends only — see Live Auctions below |
| Conversions | 0 | 0 | 0 | — | — |

**Live Auction sends — Jun 1–5 (3 dedicated sends):**

| Campaign | ID | Rcpt | Open | Click | CTOR | Unsub | Bounce | Spam |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| GS Mike's Guns — Live Auctions — Jun 1 | `01KT1QD1DXR2FBX7FM0QZZ23SK` | 92 | 41.76% | 1.10% | 2.63% | 0% | **1.09%** | 0% |
| Sharp's Shooting Supply — Jun 2 | `01KT4TMSJJ0CCQW637G12B4HSQ` | 96 | 36.84% | 5.26% | 14.29% | 0% | **1.04%** | **1.053% ⚠ CRITICAL** |
| Live Auction Alert 3 Streams — Jun 4 | `01KT9SXANX8WM9P07XB970CZCT` | 93 | 35.17% | 2.20% | 6.25% | 0% | **2.15%** | 0% |

Sharp's Shooting Supply spam rate 1.053% = 21× account baseline (0.05%) and 10× the 0.1% deliverability threshold. Jun 4 bounce 2.15% = 5.4× baseline. Task F unexecuted for 7th consecutive week.

**Flows (last 7 days):**

| Flow | Message | Rcpt | Open | Click | CTOR |
|---|---|---:|---:|---:|---:|
| Blue Book → GunStreamer (`SNbTjz`) | RT2PuN (email 1) | 6 | 50.0% | 16.67% | 33.33% |
| Blue Book → GunStreamer (`SNbTjz`) | TVGu4n (email 2) | 2 | 50.0% | 0% | 0% |
| Blue Book → GunStreamer (`SNbTjz`) | SS7pAC (email 3) | 3 | 66.67% | 0% | **0% (3rd week)** |
| Abandoned Cart (`Wn6Uau`) | SawPV6 (AV1) | 4 | 50.0% | **50.0%** | **100% — REVERSAL** |
| Abandoned Cart (`Wn6Uau`) | RKJyd3 (AV2) | 4 | 50.0% | 0% | 0% |

Abandoned Cart trigger alive for first time in 5 weeks (4 rcpt each). AV1 (SawPV6) 100% CTOR — complete reversal from 0% across 75+ prior sends. AV2 (RKJyd3) still 0% click. GunStreamer email 3 (SS7pAC) 0% CTOR for third consecutive week.

#### Audience Snapshot vs Last Week

| Audience | Jun 1 | Jun 8 | Δ | vs Apr Baseline |
|---|---:|---:|---:|---:|
| [RECOVERY] 30-Day Engaged | 3,266 | 3,480 | **+214 ✓** | **+347 — highest on record** |
| [RECOVERY] 60-Day Engaged | 3,663 | 3,761 | **+98 ✓** | +98 |
| [EXPANSION] 90-Day Engaged | 4,124 | 4,196 | **+72 ✓** | +72 |
| [EXPANSION] 120-Day Engaged | 5,065 | 5,172 | **+107 ✓** | +107 |
| Paid Subscribers | 9,805 | 9,787 | **-18 ⚠** | -40 |
| BBGV FFL Dealers | 1,275 | 1,269 | -6 | -25 |
| Blue Book Live Auctions | 123 | 128 | +5 | +41 |

All four engaged segments grew simultaneously — only the second time in 7 reviews (prior: Colt Python week, May 18). Jun 1 Signal + Jun 5 Auction Alert together generated enough click events to replenish all four rolling windows. [RECOVERY] 30-Day at 3,480 is 347 above the April baseline — highest in the review record. Paid Subscribers -18 is the single worst weekly drop recorded; forms still broken (Task E unstarted).

#### Task Status Review

Live flows confirmed (2, unchanged): `SNbTjz` (Blue Book → GunStreamer Sequence) and `Wn6Uau` (Abandoned Cart Leads). No Welcome/Onboarding flow in live list — **Task A remains Pending.** Two sends in one week for the first time (Jun 1 + Jun 5) — progress — but neither matches clean Tue/Thu/Sat Signal formula — **Task B remains Pending.** Abandoned Cart trigger resumed; AV1 (SawPV6) reversed from 0% to 100% CTOR — **Task C updated to In Progress: AV1 fixed, AV2 still 0% click.** Three Live Auction sends this week (Jun 1, 2, 4) — **Task F remains Pending, 7th consecutive week.**

#### Tactical Optimizations

**1. Sharp's Shooting Supply (`01KT4TMSJJ0CCQW637G12B4HSQ`) posted 1.053% spam rate on Jun 2 — 10× threshold. Suppress all complainers in `WuuaYj` before the next send or accumulating complaint rate triggers ISP filtering for all future sends.**

One complaint per 95 recipients on a list of 128 is structurally unsustainable. Google and Yahoo begin suppression-list flagging at 0.1% cumulative complaint rate; a single send at 1.053% can push the sending domain into a filter-accumulation path that persists beyond the send that caused it. The Live Auctions list now has high bounce events in 2 of 3 sends this week (Jun 1: 1.09%, Jun 4: 2.15%) and a spam spike on Jun 2. Before any send to `WuuaYj`: Klaviyo → Lists & Segments → `WuuaYj` → filter profiles where "Marked email as spam" → suppress all hits. Then audit the Jun 2 Sharp's subject line and content for spam-trigger patterns (excessive caps, "FREE", image-to-text ratio, aggressive urgency). Task F (Monday-only, 1×/week) is now a deliverability mandate, not just a cadence preference — at the current 3 sends/week rate plus a 1.053% spam event, the list has weeks left before ISP-level filtering degrades reach to zero.

**2. Abandoned Cart AV1 (SawPV6) reversed from 0% to 100% CTOR after 5 weeks at 0% — audit what changed and apply the same fix to AV2 (RKJyd3) before this week's recipients age out.**

AV1 history: 75+ sends at 0% click (weeks 1–5), then 4 sends this week at 50% click / 100% CTOR. Something changed — a link fix, a trigger reconnection, or a CTA update — between last week and this week. AV2 (RKJyd3) has not received the same fix: 4 recipients this week, 50% open, 0% click. AV2 is the Day 2 follow-up to buyers who ignored AV1 — a high-intent cohort that now hits a broken CTA. Action: open AV2 in Klaviyo flow editor → click every CTA link → verify destination loads. If the AV1 fix was a URL correction, replicate it on AV2. AV2's 4 recipients this week are likely the same profiles AV1 fired on 24 hours prior — they opened AV1, didn't click, and AV2 is the recovery email. Fixing AV2 closes Task C entirely.

**3. "Van's Auction Value Alert — Whole List" (`01KTCVJCEXCTMKAB0GDP1KEXP5`) posted 6.37% click rate and 10.28% CTOR on Jun 5 — highest click and CTOR metrics in all 7 reviews. Test the auction-preview content format on the next clean Signal send.**

Jun 5 vs Jun 1 Signal, with audience contamination held roughly constant: open rate nearly identical (62.03% vs 61.82%), but click rate +1.41pp (6.37% vs 4.96%) and CTOR +2.26pp (10.28% vs 8.02%). The click uplift is attributable to content structure, not audience quality — both sends were contaminated. The Jun 5 "Auction Value Alert" format, with specific lot/model value data and a direct "see active bids" CTA, produced ~2× the click intent of the generic Signal editorial format. Test: apply the auction-preview format to the next clean Signal send ([RECOVERY] 30-Day, 3,480 + Paid Subscribers, 9,787, suppress [SUNSET] and FFL). Embed 1–2 specific gun models with current estimated values and an explicit "see current bids →" CTA before the editorial body. If CTOR hits 10%+ on a clean audience, the format is confirmed as the new Signal standard — and closes the gap toward the 12–15% benchmark.

---

### Week of 2026-06-01 — Coach Review #6

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

No Signal newsletter sent this week — 18 days elapsed since the last Signal (Colt Python, May 14). Only sends this week: two Live Auction alerts to `WuuaYj` (93 rcpt each), both on May 29 (Thursday). No Signal-comparable open-rate metric available.

| Metric | Baseline | This Week (auction alerts only) | Δ vs Baseline | Note |
|---|---:|---:|---|---|
| Open rate | 64.3% | n/a — no Signal sent | — | 18 days without Signal |
| Click rate | 4.8% | n/a | — | — |
| CTOR | 7.5% | n/a | — | — |
| Unsub rate | 0.41% | 0.55% avg | **+0.14pp ⚠** | eGunco send at 1.10% |
| Bounce rate | 0.4% | 1.62% avg | **+1.22pp ✗** | eGunco 2.15% = 5.4× baseline |
| Spam rate | 0.05% | 0% | ✓ clean | — |
| Conversions | 0 | 0 | — | — |

**Live Auction alerts — May 29 (2 sends, same list, same day):**

| Campaign | ID | Rcpt | Open | Click | CTOR | Unsub | Bounce | Spam |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| eGunco's Live 5/29 1pm CT | `01KST42CMC718PK2TK54JGCV7N` | 93 | 32.97% | 1.10% | 3.33% | **1.10%** | **2.15%** | 0% |
| Van's Sporting Goods LIVE NOW 5/29 | `01KSTRKTHWKBJ74E5ZTW06FV69` | 93 | 48.91% | 1.09% | 2.22% | 0% | **1.08%** | 0% |

Two sends to the same 93-person list on the same day. Task F (Monday-only, 1×/week) unexecuted for the 6th consecutive week.

**Flows (last 7 days):**

| Flow | Message | Rcpt | Open | Click | CTOR |
|---|---|---:|---:|---:|---:|
| Blue Book → GunStreamer (`SNbTjz`) | RT2PuN (email 1) | 6 | 50.0% | 16.67% | 33.33% |
| Blue Book → GunStreamer (`SNbTjz`) | TVGu4n (email 2) | 7 | 28.57% | 14.29% | 50.0% |
| Blue Book → GunStreamer (`SNbTjz`) | SS7pAC (email 3) | 7 | 14.29% | 0% | **0%** |
| Abandoned Cart Leads (`Wn6Uau`) | — | **0** | — | — | — |

GunStreamer flow aggregate CTOR recovered from 0% to 33.3% — but email 3 (SS7pAC) is the sole structural failure: 0% CTOR for the second consecutive week. Abandoned Cart: 4th straight week of zero recipients.

#### Audience Snapshot vs Last Week

| Audience | May 25 | Jun 1 | Δ | vs Apr Baseline |
|---|---:|---:|---:|---:|
| [RECOVERY] 30-Day Engaged | 3,421 | 3,266 | **-155 ⚠** | **-155 — BELOW BASELINE** |
| [RECOVERY] 60-Day Engaged | 3,688 | 3,663 | -25 | -25 |
| [EXPANSION] 90-Day Engaged | 4,140 | 4,124 | -16 | -16 |
| [EXPANSION] 120-Day Engaged | 5,333 | 5,065 | **-268 ⚠ RECORD DROP** | -268 |
| Paid Subscribers | 9,806 | 9,805 | -1 | -1 |
| BBGV FFL Dealers | 1,275 | 1,275 | flat | flat |
| Blue Book Live Auctions | 117 | 123 | **+6** | +6 |

[RECOVERY] 30-Day fell below April baseline for the first time since May 18 — the Signal-absence pattern is now unambiguous: -150/week without a send. [EXPANSION] 120-Day's -268 is the largest single-week contraction recorded; March click events (~Feb 1 window open) are expiring with no fresh click volume to replace them.

#### Task Status Review

Live flows confirmed (2, unchanged): `SNbTjz` (Blue Book → GunStreamer Sequence) and `Wn6Uau` (Flow - Abandoned Cart Leads). Welcome/Onboarding flow still absent from live flow list — **Task A remains Pending.** No Signal sent this week (18 days without one); Tue/Thu/Sat cadence unexecuted — **Task B remains Pending.** Abandoned Cart `Wn6Uau` zero recipients for 4th consecutive week — **Task C remains Pending.** Two Live Auction sends on same day to same list, Monday-only rule unexecuted for 6th consecutive week — **Task F remains Pending.**

#### Tactical Optimizations

**1. eGunco's Live (`01KST42CMC718PK2TK54JGCV7N`) posted 2.15% bounce (5.4× baseline) on the first of two same-day sends to 93 profiles — the Live Auctions list has a data-quality problem, not just cadence fatigue. Run a bounce suppression sweep before the next send.**

eGunco (1pm CT, May 29): 2.15% bounce, 1.10% unsub on 93 rcpt = ~2 hard bounces, 1 unsub in a single send. Van's (later same day, 93 rcpt): 1.08% bounce, 0% unsub. Combined: ~3 hard bounces and 1 unsub from one event day. The list grew +6 gross (117 → 123) but is losing clean address data on every double-send day. At 2% bounce per send × 2 sends/event, Klaviyo's automatic suppression path triggers at cumulative bounce thresholds that are within reach for a 123-person list. Action: before the next send, go to `WuuaYj` → filter profiles by "Bounced email" → suppress all bounced addresses. Then execute Task F immediately: Monday-only, one send per week. No same-day doubles for any auction, regardless of sponsor count — the list cannot absorb two sends without measurable hygiene cost.

**2. [RECOVERY] 30-Day fell below April baseline (-155 wk/wk, now 3,266 vs 3,421 baseline) while 120-Day posted its sharpest weekly drop on record (-268). Two Signal-less weeks have erased the recovery built by the Colt Python on May 14. Send Thursday June 4.**

Signal-week vs no-Signal-week pattern across 6 weeks: Signal send weeks (May 5, May 14) — 30-Day grew +5 to +177. No-Signal weeks (May 11, May 25, Jun 1) — 30-Day contracted -84 to -155. The Colt Python on May 14 pushed 30-Day from 3,244 back to 3,421 (+177) in a single send. Two weeks of silence have driven it from 3,421 to 3,266 (-155). The 120-Day -268 is a separate alarm: the 120-day window opened ~Feb 1, and March click events are aging past it. If 120-Day falls below 5,000, the Tue/Thu/Sat expansion pool degrades significantly. Formula for Jun 4: [RECOVERY] 30-Day (3,266) + Paid Subscribers (9,805), suppress [SUNSET] 60-Day Inactive, suppress FFL Dealers — identical to the Colt Python formula that produced 65.6%.

**3. GunStreamer flow email 3 (SS7pAC) has posted 0% CTOR for two consecutive weeks (7 rcpt this week, 21 rcpt last week, zero clicks across both). Emails 1 and 2 are working; the sequence is losing every conversion at the close email.**

Flow breakdown this week: Email 1 (RT2PuN): 50% open, 33.33% CTOR — strong. Email 2 (TVGu4n): 28.57% open, 50% CTOR — stronger. Email 3 (SS7pAC): 14.29% open, **0% CTOR** — dead stop. The open rate halves at each step, which is normal sequence decay; the CTOR going 33% → 50% → 0% is not normal — it's a structural failure at the close. Email 3 is receiving profiles who already opened two prior emails, which is a highly-engaged cohort, and producing zero action. Diagnostic: open SS7pAC in Klaviyo Flow Editor → click every CTA link, verify destination loads (broken URL is the same failure mode as Abandoned Cart and FFL). If links are live, check send delay after email 2 — if it's 7+ days, the GunStreamer context has gone cold. A reframe from "Sign up" positioning to a concrete use case ("Here's how Van's used GunStreamer to move 12 consignments last month") with a soft CTA ("See the case study") will re-engage the cohort email 2 already warmed.

---

### Week of 2026-05-25 — Coach Review #5

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

No Signal newsletter this week. Main send: "Vans Auction 20260522" (`01KS8ADETV5MW0N4JXRRMYRB4H`, 4,203 rcpt, May 22) — a GunStreamer auction promotion sent to a broad audience including **[SUNSET] 60-Day Inactive**. Open rate regressed from last week's 65.6% breakthrough back to 52.8%.

| Metric | Baseline | This Week | Δ vs Baseline | Δ vs Wk Prior |
|---|---:|---:|---|---|
| Open rate | 64.3% | 52.8% | **-11.5pp ✗ REGRESSION** | -12.8pp |
| Click rate | 4.8% | 4.1% | -0.7pp | -0.9pp |
| CTOR | 7.5% | 7.7% | +0.2pp | +0.1pp |
| Unsub rate | 0.41% | 0.24% | **-0.17pp ✓** | +0.03pp |
| Bounce rate | 0.4% | 0.14% | **-0.26pp ✓** | -0.01pp |
| Spam rate | 0.05% | 0.024% | **✓ clean** | clean |
| Conversions | 0 | 0 | — | — |

Hygiene metrics (unsub, bounce, spam) remain below baseline. Open rate collapse is fully attributable to audience contamination — [SUNSET] 60-Day Inactive mixed into the main send for the third time in five weeks.

**GunStreamer FFL Outreach — Tucker's Case Study (`01KS2XKH1Q63V00BS6R4YZ4CP0`, May 19, 1,266 rcpt to FFL Dealers):**

| Metric | Value | Status |
|---|---:|---|
| Open rate | 44.2% | Acceptable for cold list |
| Click rate | 0.0% | **556 openers, 0 clicks — broken CTA (2nd consecutive FFL send)** |
| Unsub rate | 0.24% | Improved vs Van's 0.71% |
| Bounce rate | 0.63% | 1.58× baseline — FFL list degrading |
| Spam rate | 0.0% | Clean (down from Van's 0.08%) |

**Live Auctions (3 sends, list now 117):**

| Campaign | ID | Rcpt | Open | Click | Unsub | Bounce |
|---|---|---:|---:|---:|---:|---:|
| Mon May 18 | `01KQT19GEN69HGWJ0CYF8GSS6W` | 82 | 46.9% | 1.2% | 0% | 1.22% |
| Wed May 20 | `01KS3RDF18KKGFMZNCP4F6YB4W` | 86 | 42.4% | 0% | 0% | 1.16% |
| Thu May 22 | `01KS8NDJGP6YKWKQ4K03N78RHQ` | 88 | 33.3% | 2.3% | 0% | 1.14% |

Three sends despite Task F (Monday only). Open-rate trend within this single week: 46.9% → 42.4% → 33.3% — cadence fatigue compressing across days, not just weeks.

**Flows (last 7 days):**

| Flow | ID | Rcpt | Open | Click | CTOR |
|---|---|---:|---:|---:|---:|
| Blue Book → GunStreamer | `SNbTjz` | 21 | 47.6% | 0% | 0% |
| Abandoned Cart Leads | `Wn6Uau` | **0** | — | — | — |

GunStreamer flow CTOR dropped from 20% last week to 0% (21 rcpt — small sample, but worth monitoring). Abandoned Cart `Wn6Uau` zero recipients for third consecutive week.

#### Audience Snapshot vs Last Week

| Audience | May 18 | May 25 | Δ | vs Apr Baseline |
|---|---:|---:|---:|---:|
| [RECOVERY] 30-Day Engaged | 3,244 | 3,421 | **+177** | +288 |
| [RECOVERY] 60-Day Engaged | 3,562 | 3,688 | **+126** | +55 |
| [EXPANSION] 90-Day Engaged | 4,815 | 4,140 | **-675 ⚠** | -458 |
| [EXPANSION] 120-Day Engaged | 5,336 | 5,333 | -3 | +230 |
| Paid Subscribers | 9,814 | 9,806 | -8 | -23 |
| BBGV FFL Dealers | 1,282 | 1,275 | -7 | -19 |
| Blue Book Live Auctions | 109 | 117 | **+8** | +30 |

[EXPANSION] 90-Day lost 675 profiles — largest single-week drop since recovery began, now 458 below April baseline. March engagement events are aging out of the 90-day window; the Vans Auction send's contaminated-audience opens failed to replenish it. FFL list is -19 from April baseline with zero conversion events — net negative since import. Paid Subscribers -23 from baseline; slow bleed continues (Task E unstarted).

#### Task Status Review

Live flows confirmed (2, unchanged): `SNbTjz` (Blue Book → GunStreamer Sequence) and `Wn6Uau` (Flow - Abandoned Cart Leads). No Welcome/Onboarding flow — **Task A remains Pending.** No Signal sent this week; last Signal was May 14 (11 days ago, longest gap since recovery began) — **Task B remains Pending.** Abandoned Cart `Wn6Uau` zero recipients for third consecutive week — **Task C remains Pending.** Live Auctions 3 sends (Mon/Wed/Thu) — **Task F remains Pending; 5 weeks without execution.** Tucker's Case Study confirmed second consecutive FFL send with 0% click rate — **Task I updated to Blocked pending FFL CTA link audit.**

#### Tactical Optimizations

**1. "Vans Auction 20260522" (`01KS8ADETV5MW0N4JXRRMYRB4H`) mixed in [SUNSET] 60-Day Inactive and erased the Week 4 recovery breakthrough — this contamination pattern has now cost ~12pp of open rate three separate times.**

Colt Python (May 14), [RECOVERY] 30-Day + Paid only: 65.6% open, 3,417 rcpt. Vans Auction (May 22), six audiences including [SUNSET] 60-Day Inactive: 52.8% open, 4,203 rcpt. Delta: -12.8pp. Prior comparisons — Apr 29 S&W Model 10-6 with FFL mixed in: -10.6pp. May 5 Winchester Model 12 with FFL excluded: +2.3pp. The pattern is documented and unambiguous: any cold or inactive segment in a main send costs ~10–13pp of open rate. The [SUNSET] 60-Day Inactive segment (18,188 profiles, none engaged by definition) creates ISP-visible batch-level open drag regardless of content quality. Rule enforcement: [SUNSET] 60-Day Inactive is excluded from ALL sends — Signal, auction, FFL, or otherwise — until Task D (re-engagement gauntlet) ships as an isolated track with dedicated suppression logic. Every send to 4,000+ recipients uses the recovery formula: [RECOVERY] 30-Day + Paid Subscribers.

**2. Tucker's Case Study (`01KS2XKH1Q63V00BS6R4YZ4CP0`) is the second consecutive FFL campaign with 0% click rate — 1,066 cumulative opens across two sends, zero clicks. The GunStreamer CTA is definitively broken on all FFL outreach.**

Van's Case Study (May 11, `01KRC2519BM61E11X9RHFTKWCJ`): 510 openers, 0 clicks, spam at ceiling 0.08%. Tucker's Case Study (May 19, `01KS2XKH1Q63V00BS6R4YZ4CP0`): 556 openers, 0 clicks, bounce 0.63%. Two different case studies, two different subjects, 1,066 total openers, zero clicks. This is not copy — it is a broken URL. FFL list is now 1,275, down -19 from the 1,294 April baseline with zero attributed conversions; each send without a working CTA decays the list further. Action before any third FFL send: open both campaign previews in Klaviyo, click every CTA, verify destination URLs load. The GunStreamer partner link is almost certainly dead or redirecting to a 404. Task I (FFL warming sequence) has zero conversion value until the foundational link is confirmed live.

**3. [EXPANSION] 90-Day Engaged dropped -675 this week (4,815 → 4,140) — largest single-week contraction since recovery began. Two weeks without a Signal is draining the click-engagement pool. Send Thursday May 28.**

The 90-Day segment definition requires both opens AND clicks in the last 90 days (two AND-linked conditions in Klaviyo). The window now opens ~Feb 24. Profiles who clicked in late February/early March have aged out if they haven't clicked since — and with CTOR at 7.7% vs the 12–15% benchmark, most openers never clicked at all. The Vans Auction generated only ~172 unique click events (4.1% × 4,203) against a 675-profile deficit. Had CTOR been at benchmark (12%), the same send would have produced ~504 click events — enough to nearly offset the outflow. This is the segment-size cost of the CTOR problem (Task J). Immediate action: send Signal on Thursday May 28 to [RECOVERY] 30-Day Engaged (3,421) + Paid Subscribers (9,806), suppress [SUNSET] and FFL. Include one explicit, low-friction CTA to generate click events that keep profiles in the 90-Day window. If 90-Day falls below 4,000, future Signal audience pool quality degrades and Tue/Thu/Sat expansion becomes harder to justify.

---

### Week of 2026-05-18 — Coach Review #4

**Account confirmed:** Blue Book Publications `SMvTcV` ✓

#### KPIs vs Baseline (Apr 2026, last 30 days)

Main send: "The Signal — Colt Python (Current MFG) at 6 Years + 46th Edition — 2026-05-14" (`01KRM52M3JEM6WX11ZF2HZ7Z2V`, 3,417 rcpt, May 14). Audience: [RECOVERY] 30-Day Engaged + Paid Subscribers. **First Signal to break above the April baseline since recovery began.**

| Metric | Baseline | This Week | Δ vs Baseline | Δ vs Wk Prior |
|---|---:|---:|---|---|
| Open rate | 64.3% | 65.6% | **+1.3pp ✓ FIRST ABOVE BASELINE** | +8.0pp |
| Click rate | 4.8% | 5.0% | **+0.2pp ✓** | +0.3pp |
| CTOR | 7.5% | 7.6% | +0.1pp | -0.6pp |
| Unsub rate | 0.41% | 0.21% | **-0.20pp ✓** | -0.08pp |
| Bounce rate | 0.4% | 0.15% | **-0.25pp ✓** | flat |
| Spam rate | 0.05% | 0% | clean | stable |
| Conversions | 0 | 0 | — | — |

Open rate above the April baseline for the first time. All hygiene metrics below baseline simultaneously for the first time. Recovery formula is working.

**GunStreamer FFL Outreach — Van's Case Study (`01KRC2519BM61E11X9RHFTKWCJ`, May 11, 1,279 rcpt to FFL Dealers):**

| Metric | Value | Status |
|---|---:|---|
| Open rate | 40.1% | Acceptable for cold single-opt-in |
| Click rate | 0.0% | **510 openers, 0 clicks — broken CTA** |
| Unsub rate | 0.71% | 1.73× baseline |
| Bounce rate | 0.63% | 1.57× baseline |
| Spam rate | 0.08% | **At ceiling — threshold is <0.1%** |

**Live Auctions (4 sends, list now 109):**

| Campaign | ID | Rcpt | Open | Click | Unsub | Bounce |
|---|---|---:|---:|---:|---:|---:|
| Mon May 11 | `01KRC2WBAP5R9DEZ06X5X32PC5` | 74 | 48.65% | 6.76% | **1.35%** | 0% |
| Wed May 13 | `01KRHQFNX8RK3M00S5PFDZFEY2` | 76 | 50.67% | 2.67% | 0% | 1.32% |
| Thu May 14 | `01KRKSM5FJZKE0TGJ228A532Y0` | 76 | 28.00% | 4.00% | **1.33%** | 1.32% |
| Fri May 15 | `01KRPTSK3050Z6GHJ2V5TK3GNW` | 76 | 40.00% | 2.67% | 0% | 1.32% |

Monday unsub broke from the historic 0% to 1.35% — cadence fatigue is now measurable on the previously-safe send day. Thursday open 28.00% = lowest in three weeks of Thursday data (prior: 36.62%, 43.55%). List grew +9 to 109 on gross adds; net churn persists.

**Flows (last 7 days):**

| Flow | ID | Rcpt | Open | Click | CTOR |
|---|---|---:|---:|---:|---:|
| Blue Book → GunStreamer | `SNbTjz` | 18 | 31.3% | 6.3% | 20.0% |
| Abandoned Cart Leads | `Wn6Uau` | **0** | — | — | — |

Abandoned Cart second consecutive week of 0 recipients. Trigger confirmed dead.

#### Audience Snapshot vs Last Week

| Audience | May 11 | May 18 | Δ | vs Apr Baseline |
|---|---:|---:|---:|---:|
| [RECOVERY] 30-Day Engaged | 3,049 | 3,244 | **+195** | +111 |
| [RECOVERY] 60-Day Engaged | 3,418 | 3,562 | **+144** | -71 |
| [EXPANSION] 90-Day Engaged | 4,605 | 4,815 | **+210** | +217 |
| [EXPANSION] 120-Day Engaged | 5,133 | 5,336 | **+203** | +233 |
| Paid Subscribers | 9,821 | 9,814 | -7 | -15 |
| BBGV FFL Dealers | 1,293 | 1,282 | **-11** | -12 |
| Blue Book Live Auctions | 100 | 109 | **+9** | +22 |

All four engaged segments grew — largest across-the-board gain since recovery began. The Colt Python's 65.56% open injected enough engagement events to replenish every rolling window simultaneously. [RECOVERY] 30-Day reversed last week's -112 contraction to +195; [RECOVERY] 60-Day still -71 below April baseline — needs two Signal sends/week to close that gap. FFL Dealers -11 attributable to Van's Case Study unsubs.

#### Task Status Review

Live flows confirmed (2, unchanged): `SNbTjz` (Blue Book → GunStreamer Sequence) and `Wn6Uau` (Flow - Abandoned Cart Leads). No Welcome/Onboarding flow in live list — **Task A remains Pending.** Signal sent Thursday May 14 only; no Tue or Sat — **Task B remains Pending** (partial improvement: Thu send executed, 3×/week not yet achieved). Abandoned Cart `Wn6Uau` zero recipients for second consecutive week; trigger confirmed dead — **Task C remains Pending; Task H explicitly blocks it.** Four Live Auction sends (Mon/Wed/Thu/Fri) with Monday unsub now elevated — **Task F remains Pending, urgency increasing.**

#### Tactical Optimizations

**1. Colt Python 65.56% open = recovery threshold cleared with [RECOVERY] 30-Day + Paid Subscribers only. Lock this formula — no expansion until two consecutive Signals above 65% with bounce below 0.2%.**

Signal progression across recovery sends:
- S&W Model 10-6 (`01KQD274`, Apr 29): [EXPANSION] 90-Day + FFL → 55.25% open, 1.28% bounce
- Winchester Model 12 (`01KQWRZ82QDW3NY332SBWK84NQ`, May 5): [RECOVERY] 60-Day + Paid + 90-Day → 57.56% open, 0.13% bounce
- Colt Python (`01KRM52M3JEM6WX11ZF2HZ7Z2V`, May 14): [RECOVERY] 30-Day + Paid Subscribers → 65.56% open, 0.15% bounce

Each tightening toward the 30-Day core gained 4–8pp open rate. The [RECOVERY] 60-Day segment (3,562) and [EXPANSION] 90-Day (4,815) both have warmer profiles than last month — they will be additive eventually — but adding them now dilutes the ISP quality signal at a critical moment. For the next Signal (Thursday May 21), use identical formula: [RECOVERY] 30-Day Engaged + Paid Subscribers, suppress [SUNSET] 60-Day Inactive, suppress FFL. If that send also clears 65% with bounce <0.2%, expand to include [RECOVERY] 60-Day on the following send.

**2. GunStreamer FFL Van's Case Study (`01KRC2519BM61E11X9RHFTKWCJ`): 0 clicks / 510 openers / spam at ceiling — audit the CTA before any follow-up FFL send.**

510 people opened the case study and zero clicked. Same broken-link fingerprint as Abandoned Cart (`Wn6Uau`): good open rate, zero clicks across a large sample. Spam at 0.08% means ~1 complaint per 1,271 delivered; the hard threshold is 0.1% (1 per 1,000). One more FFL send at this rate breaches it. The FFL list is also showing elevated bounce (0.63%) and unsub (0.71%) from a first send — it needs warming, not volume. Action before the next FFL send: open `01KRC2519BM61E11X9RHFTKWCJ` in Klaviyo, click every CTA, verify destination URLs load. If any link is dead, fix it. If links are live, the issue is copy — a case study needs an explicit CTA ("Read how Van's uses GunStreamer") rather than a passive reference. This is a 10-minute audit that determines whether Task I (FFL warming sequence) is even actionable.

**3. Live Auctions Monday unsub broke to 1.35% after four sends in five days — cadence fatigue is now hitting the best send day. Execute Task F immediately: Monday only, every week.**

The "Monday = 0% unsub" pattern held for three weeks. It broke this week after Mon/Wed/Thu/Fri sends to a 109-person list. When a small list gets four sends in five days, the warmest send slot absorbs the cumulative fatigue. Thursday May 14 at 28% open is the lowest Thursday open in three weeks of data (36.62%, 43.55%, now 28%) — a measurable declining trend. Monday gross adds (+9 to 109) are keeping the list growing, but net position is fragile. Collapse to Monday sends only per Task F. If an event happens on another day, the Monday alert still drives intent ("This Friday — join us live for…"). Do not send another Thu or Fri Live Auction send until the list exceeds 200.

---

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
