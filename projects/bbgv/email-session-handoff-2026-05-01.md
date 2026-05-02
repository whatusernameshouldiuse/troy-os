# BBGV Email Marketing — Session Handoff (2026-05-01)

> **Read this first in the next session.** Captures what was decided, what was built, what's blocked, and what to do Monday.
>
> Council verdict overrides the original 5-phase plan. Roadmap docs in this repo will be updated to reflect the corrected sequence.

---

## TL;DR

We started with "audit Klaviyo, build flows, re-engage 150K." We ended with a hard pivot:

1. **Klaviyo is healthy** (67% open / 4.8% click on engaged 16K). Don't break it.
2. **The 150K isn't suppressed in Klaviyo** — it's 103K Laravel app users who were never imported. Including **11,438 paid subscribers, only 1 of which is in Klaviyo.**
3. **Council unanimously rejected the original 6-week / 5-phase plan.** Risk asymmetry is bad: incremental upside, channel-ending downside. 5/5 blind reviewers independently flagged the legal/consent-provenance layer as the actual gating constraint.
4. **New plan: 14-day single-track sprint.** Consent audit → Phase 0 hygiene → Welcome flow → 1 wave of 407 high-intent profiles → measure → decide.

---

## Critical findings (locked from this session)

### About the Klaviyo state
- Account `SMvTcV` (Blue Book Publications), US/Eastern.
- 67% open / 4.8% click / 7.5% CTOR (below 12-15% benchmark) / 0.41% unsub on engaged audience.
- 0 attributed conversions across 30 days — **BigCommerce → Klaviyo Placed Order tracking is broken.**
- 2 of 14 planned flows live. Welcome flow stuck in DRAFT since 2024.
- Abandoned Cart flow (live since Apr 29) — **75 sends, 0% click rate.** Trigger working, copy/links broken. Only catches POST-Apr-29 abandons; the 1,106 in CSV are historical pre-flow.
- April 29 incident proves what happens with cold contamination: 1,294 FFL Dealers added to Signal → 70%→53% open, tripled bounces.

### About the leads.csv reveal
- 103,141 BBGV Laravel app profiles. **Only 58 synced to Klaviyo.**
- 11,438 paid subscribers (gun_values_monthly, bluebook_premium_monthly, bluebook_pro_monthly, yearly variants). **Only 1 synced.**
- 8,966 explicit Newsletter opt-ins. None in Klaviyo.
- 1,106 abandoned checkouts. 178 SubmitOffer. 229 ChatWithSeller. 1,343 self-ID FFL dealers.
- 41K self-ID "single-gun-value" / 27K "enthusiast" / 1,343 "ffl-dealer" / 3,260 "other" — **the gun they care about is potentially in `questionnaire_answers` JSON.**
- Only 400 of 103K have verified emails.
- Recency: 14,453 created in last 4 months; 36K in H1 2025; 15K from 2024 or earlier.

### Two parallel BBGV ecosystems
- **BigCommerce → Klaviyo Paid list** — 9,829 profiles, working but Placed Order events not firing back
- **Laravel app → Klaviyo** — broken; 58 of 103K synced
- These are different products / entry points. The 11,438 Laravel paid + 9,829 BigCommerce paid likely overlap somewhat but aren't the same list.

---

## Council verdict (the corrected plan)

**Original plan REJECTED.** Council ran 5 advisors + 5 blind peer reviewers + chairman synthesis. Verdict in `/tmp/council-report.html`, transcript in `/tmp/council-transcript.md`.

**The Contrarian (rated strongest 5/5):** The "warm cohort" assumption is the same category error that caused the 180K cold blast. Klaviyo filters score on engagement recency, not historical transactions. Without a per-wave kill-switch and recent-engagement evidence, Phase 1 risks re-tanking deliverability.

**The Expansionist (biggest blind spot 5/5):** FFL B2B sponsorship + Gun Buyer Intent Score + price-alert welcome are real adjacencies but presuppose sender reputation that's currently at risk. Tag the field; don't pull the send schedule forward.

**Peer review unanimously surfaced (no advisor saw):** Legal/consent provenance is the gating constraint, not deliverability. CAN-SPAM, state privacy laws (CA/CO/CT firearms sensitivity), Klaviyo's documented firearms-vertical deplatform history, Meta/Google gun-retargeting shadow-bans, ~22%/year email decay (11,438 paid → ~3,400 reachable mathematically).

### Corrected 14-day sprint

| Day | Action | Owner | Blocker |
|---|---|---|---|
| **Mon May 4** | Pull consent records (timestamp + source-of-capture) for the 22K "warm" cohort from Laravel | BBGV dev / Troy | None — single SQL query |
| Tue May 5 | Freeze Klaviyo baseline CSV (export profiles + suppressions) | Claude via MCP | None |
| Tue May 5 | Update `BBGV-FLOWS-ROADMAP.md` and `email-roadmap.md` to reflect council verdict | Claude | None |
| Wed May 6 | Decide: NeverBounce ($200) or Klaviyo built-in hygiene for the 22K | Troy | Budget |
| Wed May 6 | Audit Abandoned Cart flow links/copy (NOT the trigger — that works) | Claude via MCP | None |
| Thu May 7 | Welcome Series (5 emails) — copy from existing drafts → Klaviyo flow build | Claude + Troy | Welcome flow review |
| Fri May 8 | Write "we're back" email body for Wave 1 — 3 subject-line A/B variants | Claude + Troy | None |
| Fri May 8 | Instrument per-wave kill-switch (Klaviyo report polling: bounce >2% or complaint >0.1% halts) | Claude | None |
| **Mon May 11** | **Wave 1: send to 407 high-intent profiles only.** SubmitOffer (178) + ChatWithSeller (229) — these are the warmest most-recent cohort | Troy approves, Claude executes | All above |
| Mon-Wed May 11-13 | Monitor 24h → 48h → 72h. Halt if kill-switch trips. | Claude (auto via daily audit) | — |
| Thu May 14 | **Decision gate:** if Wave 1 metrics hold (>30% open, <2% bounce, <0.1% complaint, >5% click), proceed to Wave 2 of the most-recent 2,000 paid customers. Otherwise stop and re-audit. | Troy | Wave 1 results |

**Phases 2 (80K re-permission) and 3 (paid acquisition $4,400) are BLOCKED pending evidence from Wave 1.** They are not on the calendar. They become conditional on Phase 1 producing measurable revenue lift.

**Phase 4 (fix Laravel→Klaviyo sync) is not in this 14-day sprint — but it's the only phase that compounds. Troy needs to decide whether to relax the "email-only" constraint for this single item.**

---

## Stop-the-bleed actions (do today regardless)

1. ✅ **Stop including FFL Dealers (`UTcynX`) in any Signal send** — Apr 29 dropped opens from 70% → 53%
2. ✅ **Cap Live Auctions cadence at 1×/week** until list >500. The 88-person list saw 1.6%+ unsub per send across 4 sends/week — list dies in a month at this rate. Apr 29 Wed send only reached 13 of 88 = phantom segment, audit the audience filter.
3. ✅ **Audit Abandoned Cart flow copy/links** — 0% click across 75 sends since Apr 29 launch. Trigger works (75 catches in 1-2 days = healthy); copy/links broken.

---

## Open questions for Troy (need answers before Monday)

1. **Consent provenance:** Is the timestamp + source-of-capture for each Laravel signup retrievable? If yes, this is a SQL query. If no, the entire plan collapses to "fix sync first."
2. **Email-only constraint relaxation:** Are you willing to spend ~1 day of dev time fixing the Laravel→Klaviyo sync so that future signups don't keep orphaning? Without this fix, every 2026 signup is invisible.
3. **BigCommerce → Klaviyo Placed Order:** Same question. Without it, you can't measure revenue per email. Council's First Principles advisor argued this is the only thing that matters.
4. **Hire 1 VA** to babysit waves so the operator constraint isn't also single point of failure (peer reviewer suggestion)?
5. **Legal review on the 80K re-permission consent trail** before Phase 2 even appears on a calendar (multiple peer reviewers flagged)?

---

## What got built this session

### Local files
- `~/clawd/scripts/bbgv-daily-email-audit.py` — daily KPI report, 8 AM ET via launchd. **Live.**
- `~/Library/LaunchAgents/com.bbgv.daily-email-audit.plist` — installed.
- `~/Work/BBGV/docs/BBGV-EMAIL-ROADMAP.md` — source of truth (auto-updated weekly by Coach)
- `~/Work/BBGV/docs/BBGV-FLOWS-ROADMAP.md` — all 14 flows + BBGV handoff requirements
- `~/Work/BBGV/docs/BBGV-150K-REENGAGEMENT-ROADMAP.md` — original 4-channel plan (NEEDS UPDATE per council verdict)
- `~/Work/BBGV/docs/BBGV-EMAIL-SESSION-HANDOFF-2026-05-01.md` — this doc

### troy-os (synced via git)
- `projects/bbgv/email-roadmap.md` — Coach updates this weekly
- `projects/bbgv/flows-roadmap.md`
- `projects/bbgv/150k-reengagement-roadmap.md`
- (will add) `projects/bbgv/email-session-handoff-2026-05-01.md`

### Council output
- `/tmp/council-report.html` — 60-second scannable verdict
- `/tmp/council-transcript.md` — full advisor + reviewer outputs

### Remote routines (running on Anthropic infra)
- **`trig_01D89HT4b1Pn9x2DXSv4MNFN` — BBGV Email Marketing Coach** — every Monday 9 AM ET. First run already executed today. Next run May 4. Updates `email-roadmap.md` weekly.
- **`trig_01GDiKCUbedDqJN4iragN79B` — BBGV Email 30-Day Review** — fires once May 31 9 AM ET. Writes `email-30d-review-2026-05.md`.

---

## What's blocked / deferred

| Item | Why blocked | Unblock condition |
|---|---|---|
| Phase 2: 80K re-permission send | Council verdict + legal/consent uncertain | Wave 1 results + legal review |
| Phase 3: $4,400 Meta/Google/postcards | Phase 3 dropped from this sprint per Executor advisor | Wave 1 measurable revenue + landing page built |
| Welcome flow live | Need draft review + Klaviyo UI build | Day 4 of new sprint |
| Slack delivery for Coach + 30d Review | No Slack MCP connector attached to account | Troy adds connector at https://claude.ai/customize/connectors |
| 150K re-engagement plan execution | Original plan depends on assumptions council rejected | Update plan after Wave 1 results |

---

## Memory updates Troy should make

If you want this picked up across sessions, update `~/.claude/projects/-Users-troyvanmaanen/memory/`:

- **Update `bbgv-email-system.md`** — the "Why" section needs the 103K Laravel reveal + 11,438 paid orphan finding. Current send pool count is 3,138 (was 2,715 in old memory).
- **New memory `bbgv-laravel-orphan.md`** — the structural finding that the Laravel app has 103K users with broken Klaviyo sync. Including 11,438 paid. This is the single biggest email-marketing fact about BBGV.
- **New memory `bbgv-council-verdict-may01.md`** — the corrected sprint, kill-switch thresholds, and the 5/5 reviewer consensus on consent-provenance as gating constraint.

---

## How to pick up next session

1. Read this doc.
2. `cd /tmp/troy-os && git pull` to get the latest Coach updates to `projects/bbgv/email-roadmap.md`.
3. Check answers to the 5 open questions above.
4. If consent provenance exists → execute Day Tue–Fri of the 14-day sprint.
5. If consent provenance is missing → pivot to "fix Laravel→Klaviyo sync first" before any send.
6. Either way, daily audit + Coach + 30-day review all keep running on autopilot.

---

*Generated 2026-05-01. Updates this doc as decisions land.*
