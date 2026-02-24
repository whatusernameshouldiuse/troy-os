# BRAIN.md

Live operating state. This is the short-term command board.

Last Updated: 2026-02-24

## Active Projects

### OutdoorInfluencers.io
- **Status:** Phase 0+1 Foundation complete. Outreach + TikTok systems built and ready to fire.
- **Phase 0+1 deliverables done:** Marketing Psychology, Pricing Strategy, 125 Marketing Ideas, Launch Strategy, Free Tool Strategy, Website Copy, Content Strategy, Cold Outreach System (5 files), TikTok System (5 files)
- **Next:** Receive Snov.io creds + sending domain + OI Instagram account → launch outreach engine + start email warm-up
- **Gating:** Boss approval on OI.io concept needed before touching creators

### BBGV — Lead Magnet Engine
- **Status:** Architecture + copy + tech spec complete (3 sub-agent deliverables in Obsidian)
- **Lead magnet:** "What's This Gun Worth Right Now?" — free two-sided valuation tool, email gate, InstaCash offer for sellers
- **Next:** Await Klaviyo API key + list ID + valuation API endpoint confirmation + subdomain decision
- **Also active:** Email/lifecycle deliverability recovery — triage spam placement root cause in Klaviyo, send to engaged-only segment first

### BBGV — Subscription-Free Transition (ICO + Consignment)
- **Status:** In Progress
- **Next:** Implement website triggers + route users into ICO vs consignment paths → dev handoff

### Rentagun — CRO Audit + Quiz
- **Status:** Audit complete. Quiz build blocked on Troy's answers to 4 questions.
- **4 questions outstanding:**
  1. What broke with RevenueHunt? (Technical / low completion / completed but didn't convert?)
  2. Where does "Get Basic Access" actually lead?
  3. Quiz output: specific gun recommendations OR subscription tier recommendation?
  4. Build platform: WordPress shortcode, Typeform embed, or Next.js on Vercel?

### GunStreamer — NOW LIVE
- **Status:** ✅ Platform is live. Streams are happening. No longer pre-launch.
- **Homepage:** Blank app embed — redesign brief written at `Projects/GunStreamer/Homepage-Redesign-Brief-2026-02-24.md`. Live stream widget + dual audience (buyers/dealers) architecture designed.
- **Email:** ~120K contacts in Klaviyo across 14 lists. Zero emails sent to most. Massive untapped asset.
- **Next:** Develop social media strategy to showcase streams + build hype. 120K email wave. Homepage dev handoff.
- **VSL page:** Needs Troy on camera — /about page concept in redesign brief.
- **OI.io:** Re-add GunStreamer to Sprint Cohort 1 now that platform is live.

### ND Brick Pavers — New Commission Project
- **Status:** Intake. Waiting on assets from Troy.
- **Deal:** Troy earns commission per closed lead referred
- **Migration:** GoHighLevel → Vercel (Next.js + programmatic SEO)
- **Goal:** Lead gen machine — GA4, GSC, FB Pixel, FB ads, social content
- **Blockers:** Need GoHighLevel URL/export, GA4 ID, FB page URL, branding assets, business context for product-marketing-context.md
- **Coordination:** #openclaw-seo in Slack
- **Obsidian:** `Projects/NDBrickPavers/`

### GTM/CMO Audit System
- **Status:** In Progress
- **Next:** Fill first-pass scorecard and produce top-10 bottleneck task list

---

## Owner Decisions Needed (Blockers)

| Item | Project | Notes |
|------|---------|-------|
| Snov.io client_id + client_secret | OI.io | snov.io/integration/api |
| Cold outreach sending domain | OI.io | Separate from outdoorinfluencers.io |
| OI.io Instagram account | OI.io | For DM sequences |
| Boss approval on OI.io concept | OI.io | Gate before creator outreach |
| Klaviyo API key + list ID | BBGV | For lead magnet build |
| BBGV valuation API endpoint | BBGV | Exists in backend, or build lookup layer? |
| Subdomain for lead magnet tool | BBGV | e.g. value.bluebookofgunvalues.com |
| Rentagun quiz 4 questions | Rentagun | See above |
| OI.io pricing decisions | OI.io | J's recommendations pending Troy review |
| OI.io Email 4 proof data | OI.io | Must fix before outreach (FTC risk) |
| J's own accounts (X, GitHub, email) | Infra | Troy to set up |
| Telegram per-project groups | Infra | Troy to decide vs. WhatsApp |

---

## Immediate Actions

- Deploy `OutdoorInfluencers-LandingPage.html` to outdoorinfluencers.io (ready now)
- Start OI.io email warm-up immediately once sending domain is confirmed (14-day lead time)
- Klaviyo deliverability: pull campaign metrics + diagnose spam placement for BBGV
- Dev handoff: BBGV website trigger implementation for ICO/consignment routing

---

## Background Tasks / Infrastructure

- Vault/workspace normalization: ✅ complete
- Ops hardening + preflight checks: ✅ active (hourly)
- Skills registry centralized: ✅ `skills-hub/SKILLS-CANONICAL.md`
- Marketing OS: ✅ CLAUDE.md written for all 4 projects, 35 skills installed
- agent-browser CLI: ✅ operational (Chrome relay intentionally disabled)
- 3-layer memory system: ✅ in place (knowledge-graph / daily notes / tacit-knowledge)
- **openclaw update available:** v2026.2.22-2 — run `openclaw update` when convenient
- Obsidian output integrity: always filesystem-verify before reporting completion

## Notes on Active Sub-agents
- tiktok-brands-system: ✅ completed (files delivered to `Projects/TikTok-Experiment-System/`)
- tiktok-oi-system: ✅ completed (files delivered to `Projects/OutdoorInfluencers/TikTok-System/`)
- Legacy list (`bbgv-content-machine-v1`, `rentagun-acq-system-v1`, `ops-automation-bottomline`) may be stale — verify relevance next daytime ops pass
