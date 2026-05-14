# Rentagun — Marketing Playbook

> **Last Updated:** 2026-05-13
> **Authority:** This file is the source of truth for acquisition + growth strategy. Auto-loaded context skill (`~/Work/Rentagun/rentagun-context.md`) carries deepest detail.

---

## The Constraint That Shapes Everything

**No Meta. No Google Ads. No firearm advertising on mainstream paid channels.**

Every channel must be:
1. **Organic** (SEO, content, social, forums, YouTube), OR
2. **Partnership-based** (OEMs, creators, dealers, BBGV co-brands), OR
3. **Firearms-friendly platform** (gun-specific networks, podcasts, niche newsletters).

The firearms ad restriction creates the moat — whoever builds the strongest organic + partnership channels first wins. This is Rentagun's defensible position.

---

## The Four Customers (ICPs)

### ICP 1: The Considerer *(biggest segment)*
- Analytical, research-driven, narrowed to 2-3 options, decision-frozen.
- **Pain:** Spent weeks on forums and YouTube, still can't decide.
- **Hook:** Listicles that compare options, then "rent to decide."
- **Language:** "Been going back and forth for months."

### ICP 2: The Experience Seeker
- Emotional, gift-motivated, wants a cool experience.
- **Pain:** Bucket list guns (Thompson, .50 BMG) too expensive to own.
- **Hook:** Experience advertorials, movie/culture listicles.
- **Language:** "Always wanted to shoot a [X]."

### ICP 3: The Hunter
- Needs specialty rifle for a specific trip, doesn't want year-round ownership.
- **Pain:** $1,500+ rifle for one season, unknown field performance.
- **Hook:** Seasonal hunter advertorials, precision rifle listicles.
- **Language:** "Need something for elk season but can't justify the cost."

### ICP 4: The New Gun Owner
- Just got carry permit, overwhelmed by options, fears expensive mistake.
- **Pain:** First gun is a $600+ commitment with zero real-world testing.
- **Hook:** Beginner listicles, regret-avoidance advertorials.
- **Language:** "I have no idea what to buy."

---

## OEM Partner Program (Strategic Pillar)

**Core thesis:** Rentagun is a try-before-you-buy funnel for firearm OEMs. Every OEM has the same problem — they want creators promoting their guns but don't want to gift inventory to every smaller creator. Rentagun solves it with a co-branded rental code program and gets paid customers + creator content in return. **Repeatable program, not a one-off deal.**

### Deal Template (replicable per OEM)

| Rentagun Provides | OEM Provides |
|-------------------|--------------|
| Buy inventory at wholesale | Social promotion + newsletter mentions |
| Dedicated `/[oem]` landing page | Logo + co-branding rights |
| OEM-only collection page (`/[oem]-arsenal`) | Inventory recommendations (which SKUs to stock) |
| Monthly ROI dashboard | Co-branded discount codes (e.g., 20% off) for creators they won't gift to |
| Redemption tracking (PostHog `partner_code`) | Pre-vetted creator list (optional) |
| Rent-to-buy story capture | Cross-promo on OEM site (link to /[oem]) |
| Ghostwritten OEM social content + b-roll | Joint media-day / range events (when budget allows) |

### Hard Rules

1. **Never agree to exclusivity.** "First, not only." Every OEM gets the same deal.
2. **Never publish co-branded marketing without written OEM sign-off.**
3. **Never over-promise volume.** Honest monthly reporting is what keeps OEM contacts selling us internally.
4. Discount codes: one-per-customer, geo-validated, expiration-bound, fraud rules from day one.

### Replicability Checklist (build once, reuse per OEM)

- [ ] `/[oem]` landing page template
- [ ] `/[oem]-arsenal` collection page template
- [ ] PostHog `partner_code` event + `partner=` property
- [ ] Auto-apply code on `?utm_source=[oem]&utm_campaign=creator`
- [ ] One-page MOU template
- [ ] Monthly ROI report template
- [ ] Creator-code distribution portal
- [ ] Co-branded social asset templates
- [ ] Rent-to-buy story capture loop (post-rental email)

### Anchor Partner: CZ-USA

- Verbal agreement reached (NRA follow-up call with John, VP of Sales + ~6 person CZ team incl. legal).
- "Ground floor" status — John explicitly asked Rentagun to remember CZ as the first when scaling.
- Biweekly recurring meetings; CZ will recommend SKUs to stock + promote on social.
- See full context: `~/Work/Rentagun/docs/partnerships/CZ-PARTNERSHIP.md`

### Target Pipeline (post-CZ)

Sig Sauer, Smith & Wesson, Beretta, Glock, Ruger, Springfield Armory, Walther, FN, IWI, Daniel Defense, Aero Precision, Staccato, Wilson Combat.

### Disambiguation from OA Defense

- **OA Defense partnership** = dual rent-or-buy CTA (renter can buy direct from OA Defense). Different commercial model.
- **OEM Partner Program** = rental-code-only (no direct OEM purchase link). Default pitch for new OEMs going forward.
- Both can coexist. OA Defense is a special case; OEM Program is the system.

---

## Content Strategy

### Three Content Types (each maps to ICPs)

1. **Listicles** — "Best [X] for [Y]" comparison pieces (Considerer + New Gun Owner)
2. **Experience advertorials** — "I rented a Thompson for my bachelor party" (Experience Seeker)
3. **Decision advertorials** — "I almost bought the wrong rifle for elk season" (Hunter + Considerer)

### The Decision Engine (designed, not built)

200+ SEO comparison pages — "NerdWallet for guns." Programmatic SEO play. Each page: spec comparison + rent CTA + "rent both to decide" angle.

### Rentagun Dispatch (biweekly newsletter)

Broadsheet editorial style. Voice-forward. Hermes production pipeline. Issue #02 complete. Not promotional — builds brand authority + audience for future channels.

---

## Acquisition Channels (Ranked by Compound Value)

| Channel | Type | Status | Compound Value |
|---------|------|--------|----------------|
| OEM Partner Program | Partnership | CZ live (verbal); pipeline of 13 | Highest — credibility + creator pipeline + audience reach |
| SEO / Decision Engine | Organic | Designed, not built | High — moat strengthens with every page |
| YouTube creator program | Partnership | Building | High — firearms-friendly, drives Considerer + Experience Seeker |
| Forums (XenForo + Discourse) | Organic | Active (cross-pollinated from GunStreamer stack) | Medium-High |
| Rentagun Dispatch | Owned audience | Issue #02 live | Medium — slow build, durable |
| Affiliate (AvantLink) | Partnership | Plugin built, dev deploy pending | Medium |
| Hickok45 / large creator buys | Partnership | LIVE April 1 (awareness only, no tracking) | Medium — brand lift, hard to measure |
| BBGV co-brand | Partnership | Cross-business | Medium — credibility halo |
| Range / event sponsorships | Partnership | Opportunistic | Low-Medium |
| Klaviyo flows + Dispatch | Retention | 5 transactional flows LIVE | Retention not acquisition |

---

## Channel Rules

1. **Every channel must have a tracking story** (PostHog event + UTM convention) before spend.
2. **Co-branded campaigns require written sign-off** from the partner.
3. **OEM channels default to the OEM Partner Program template** — don't reinvent per deal.
4. **Email capture wires must exist on every landing page** (Klaviyo JS + GA4 + PostHog snippets — currently a known gap on live rentagun.com).

---

## Common Objections (Marketing-Facing)

| Objection | Response |
|-----------|----------|
| "Is this legal?" | Yes — every rental ships FFL-to-FFL, background check at pickup (ATF Form 4473). Egunco FFL handles bound book. |
| "What if I damage it?" | Normal wear is covered. Misuse damage = repair fee. Optional protection plans coming. |
| "$99/mo seems like a lot." | One range rental is $25-40 for 15 min. Rentagun = 7-14 days of real ownership-grade experience. |
| "Why not just buy?" | Because [BANNED LANGUAGE — see BRAND-VOICE.md]. Use: "Rent first to see if it's right for you." |
| "Can I take it home?" | Yes — that's the entire point vs. range rentals. FFL transfer to your local dealer. |

---

## Session Log

- **2026-05-13** — Initial playbook scaffolded from `rentagun-context.md` v2026-05-13. OEM Partner Program codified as Strategic Pillar with CZ-USA as anchor partner.
