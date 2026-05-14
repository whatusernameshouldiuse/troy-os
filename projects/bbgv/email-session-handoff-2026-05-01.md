# BBGV Email Marketing — Session Handoff (2026-05-01)

> **Read this first in the next session.** Captures what was decided, what was built, what's blocked, and what to do Monday.
>
> Council verdict overrides the original 5-phase plan. Roadmap docs in this repo will be updated to reflect the corrected sequence.

---

## TL;DR

We started with "audit Klaviyo, build flows, re-engage 150K." We ended with three corrections:

1. **Klaviyo is healthy** (67% open / 4.8% click on engaged 16K). Don't break it.
2. **The leads.csv "orphan" count was wrong by ~10x.** Sample-checking against Klaviyo shows: 100% of Newsletter (8,966), 100% of Cart (1,106), and 86% of paid (9,829 of 11,438) are already in Klaviyo. They were bulk-imported Sept 2024 + Feb 2026. The real orphan pool is **~310 paid customers who signed up post-Feb-18 (+ ~31/week ongoing)** — caused by broken Laravel→Klaviyo sync for NEW signups.
3. **Council rejected the original 6-week / 5-phase plan** (built on the wrong "22K cold import" framing). Most of those 22K aren't cold — they're already in Klaviyo. Real plan is much smaller: import the 310, audit which segments existing profiles sit in, send a one-time campaign to the Cart cohort, ship the Welcome flow, fix the sync.

**Council's core caution still applies:** kill-switch instrumentation on any send, consent-provenance check on the 310 import (and any re-activation of currently-suppressed profiles), Welcome flow on Day 1.

---

## Critical findings (locked from this session)

### About the Klaviyo state
- Account `SMvTcV` (Blue Book Publications), US/Eastern.
- 67% open / 4.8% click / 7.5% CTOR (below 12-15% benchmark) / 0.41% unsub on engaged audience.
- 0 attributed conversions across 30 days — **Authorize.net → Klaviyo Placed Order tracking is broken.**
- 2 of 14 planned flows live. Welcome flow stuck in DRAFT since 2024.
- Abandoned Cart flow (live since Apr 29) — **75 sends, 0% click rate.** Trigger working, copy/links broken. Only catches POST-Apr-29 abandons; the 1,106 in CSV are historical pre-flow.
- April 29 incident proves what happens with cold contamination: 1,294 FFL Dealers added to Signal → 70%→53% open, tripled bounces.

### About the leads.csv reveal (CORRECTED 2026-05-02)

**Initial misread:** The CSV's `klaviyo_id` field is empty for almost all rows. I read this as "not in Klaviyo." Wrong — Klaviyo identifies by email, not by Laravel's klaviyo_id field. Troy bulk-imported the paid list around Feb 3-18, 2026 and the Newsletter list around Sept 2024. The empty klaviyo_id is just a sync-direction issue (Klaviyo→Laravel write-back was never wired).

**Sample-check results (10 emails per cohort, 2026-05-02):**

| Cohort | CSV count | In Klaviyo (sample) | Coverage |
|---|---:|---:|---|
| Newsletter | 8,966 | 10/10 | 100% — bulk-imported Sept 2024 |
| Cart abandons | 1,106 | 10/10 | 100% — synced individually 2025+ |
| Paid pre-Feb-18 | 11,128 | 6/10 (combined sample) | ~86% — bulk-imported Feb 3-18 |
| Paid post-Feb-18 | 310 | **0/10** | **0% — these are the real orphans** |
| GetStarted (no plan) | 69,922 | 6/10 | ~60% — Feb 2026 wave caught some |

**The structural issue:** Laravel→Klaviyo sync is broken for NEW signups. After the Feb 18 bulk import, every new paid customer (~31/week) becomes an orphan. If unfixed, the orphan pool grows by ~1,600/year.

**Free-tier breakdown (still in CSV):**
- 11,438 total paid (gun_values_monthly, bluebook_premium_monthly, bluebook_pro_monthly + yearly variants)
- 8,966 explicit Newsletter opt-ins
- 1,106 abandoned checkouts
- 178 SubmitOffer / 229 ChatWithSeller / 1,343 self-ID FFL dealers
- Self-ID tags: 41K single-gun-value / 27K enthusiast / 3,260 other
- Recency: 14,453 created last 4 months; 36K H1 2025; 15K 2024 or earlier
- Verified emails: only 400 of 103K (verification step is broken or skipped)

### Two parallel BBGV ecosystems
- **Authorize.net → Klaviyo Paid list** — 9,829 profiles, working but Placed Order events not firing back
- **Laravel app → Klaviyo** — broken; 58 of 103K synced
- These are different products / entry points. The 11,438 Laravel paid + 9,829 Authorize.net paid likely overlap somewhat but aren't the same list.

---

## Council verdict (the corrected plan)

**Original plan REJECTED.** Council ran 5 advisors + 5 blind peer reviewers + chairman synthesis. Verdict in `/tmp/council-report.html`, transcript in `/tmp/council-transcript.md`.

**The Contrarian (rated strongest 5/5):** The "warm cohort" assumption is the same category error that caused the 180K cold blast. Klaviyo filters score on engagement recency, not historical transactions. Without a per-wave kill-switch and recent-engagement evidence, Phase 1 risks re-tanking deliverability.

**The Expansionist (biggest blind spot 5/5):** FFL B2B sponsorship + Gun Buyer Intent Score + price-alert welcome are real adjacencies but presuppose sender reputation that's currently at risk. Tag the field; don't pull the send schedule forward.

**Peer review unanimously surfaced (no advisor saw):** Legal/consent provenance is the gating constraint, not deliverability. CAN-SPAM, state privacy laws (CA/CO/CT firearms sensitivity), Klaviyo's documented firearms-vertical deplatform history, Meta/Google gun-retargeting shadow-bans, ~22%/year email decay (11,438 paid → ~3,400 reachable mathematically).

### Corrected 14-day sprint (REVISED with locked-in numbers)

| Day | Action | Owner | Blocker |
|---|---|---|---|
| **Mon May 4** | **Bulk-import the 310 post-Feb-18 paid orphans** to Paid Subscribers list (`YjVgTd`) — single CSV upload | Troy + Claude | None |
| Mon May 4 | Audit which Klaviyo segment the 8,966 Newsletter and 1,106 Cart cohorts currently sit in (engaged vs sunset vs suppressed) | Claude via MCP | None |
| Tue May 5 | Freeze Klaviyo baseline CSV (export profiles + suppressions) | Claude via MCP | None |
| Tue May 5 | Audit Abandoned Cart flow links/copy (trigger works; copy doesn't) | Claude via MCP | None |
| Wed May 6 | Welcome Series (5 emails) — copy from existing drafts → Klaviyo flow build | Claude + Troy | Welcome flow draft review |
| Thu May 7 | Write Cart recovery campaign body — one-time send to the 1,106 historical cart cohort | Claude + Troy | None |
| Fri May 8 | Instrument per-wave kill-switch (bounce >2% or complaint >0.1% halts) | Claude | None |
| **Mon May 11** | **Wave 1: Cart recovery campaign — 1,106 cart cohort.** They explicitly entered emails at checkout, fresh-ish 2025 signups, lowest deliverability risk. | Troy approves, Claude executes | All above |
| Mon-Wed May 11-13 | Monitor 24h → 48h → 72h. Halt if kill-switch trips. | Claude (auto via daily audit) | — |
| Thu May 14 | **Decision gate:** if Wave 1 metrics hold (>30% open, <2% bounce, <0.1% complaint, >2% click), proceed to Wave 2: Newsletter cohort campaign. Otherwise stop and re-audit. | Troy | Wave 1 results |

**Smaller scope, lower risk than the original plan because:**
- We're not "importing 22K cold" — almost everyone is already in Klaviyo
- Cart cohort (1,106) is the safest first wave: explicit checkout intent + recent signup
- The 310 paid-orphan import is plumbing, not a marketing send
- Phase 4 (fix sync) is still the only compounding work — the 310 orphan grows ~31/week without it

**Out of scope this sprint:** the 80K GetStarted (mostly low-value dropouts), the 60K cold cohort, the $4,400 paid acquisition program. All conditional on this sprint producing evidence.

---

## Stop-the-bleed actions (do today regardless)

1. ✅ **Stop including FFL Dealers (`UTcynX`) in any Signal send** — Apr 29 dropped opens from 70% → 53%
2. ✅ **Cap Live Auctions cadence at 1×/week** until list >500. The 88-person list saw 1.6%+ unsub per send across 4 sends/week — list dies in a month at this rate. Apr 29 Wed send only reached 13 of 88 = phantom segment, audit the audience filter.
3. ✅ **Audit Abandoned Cart flow copy/links** — 0% click across 75 sends since Apr 29 launch. Trigger works (75 catches in 1-2 days = healthy); copy/links broken.

---

## Open questions for Troy (need answers before Monday)

1. **Consent provenance:** Is the timestamp + source-of-capture for each Laravel signup retrievable? If yes, this is a SQL query. If no, the entire plan collapses to "fix sync first."
2. **Email-only constraint relaxation:** Are you willing to spend ~1 day of dev time fixing the Laravel→Klaviyo sync so that future signups don't keep orphaning? Without this fix, every 2026 signup is invisible.
3. **Authorize.net → Klaviyo Placed Order:** Same question. Without it, you can't measure revenue per email. Council's First Principles advisor argued this is the only thing that matters.
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
