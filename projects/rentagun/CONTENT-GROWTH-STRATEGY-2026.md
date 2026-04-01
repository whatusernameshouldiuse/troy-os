# Rentagun: Content + Growth Strategy 2026
> **Owner:** CMO  
> **Last Updated:** 2026-04-01  
> **Status:** Active  
> **Source doc:** `~/Work/Rentagun/docs/CONTENT-STRATEGY-LISTICLES-ADVERTORIALS.md`

---

## Situation Summary

Rentagun is the only national try-before-you-buy firearm rental service. The value prop is razor-sharp: stop buying blind. The business has built the infrastructure (FFL network, FedEx integration, WooCommerce Bookings, Klaviyo) — marketing is the remaining growth lever.

**Current state:**
- ~216 firearms in inventory
- CRO audit complete. Several friction points identified.
- Gun Finder quiz built (blocked on 4 open questions from Troy)
- Content strategy defined: 17 listicles + 12 advertorials ready to execute
- Sports South API blocked (inventory automation on hold)
- Klaviyo connected. Email sequences drafted but not fully activated.

**Growth equation:** Organic content (listicles + advertorials) builds intent-driven traffic → email captures + quiz route to subscription → email nurture converts trial → affiliate + creator amplification scales distribution.

---

## Strategic Framework: The Paralysis Flywheel

```
ORGANIC TRAFFIC (SEO/GEO)
        ↓
LISTICLE ("Best 9mm for CCW" — 10 guns)
  → Decision paralysis builds
  → Internal CTA: "Can't decide? Rent your top 3"
  → Link to matching advertorial
        ↓
ADVERTORIAL ("I Spent $1,400 on a Rifle I Shot Twice")
  → Emotional hook resolves the paralysis
  → CTA: Gun Finder Quiz → Subscription
        ↓
KLAVIYO EMAIL (Welcome sequence, nurture, re-engage)
        ↓
SUBSCRIPTION ($99 Basic / $199 Pro)
        ↓
RENTAL EXPERIENCE → Repurchase + UGC + Referral
```

Every piece of content should end at the same destination: rent first, decide confident.

---

## Phase 1: Content Engine Launch (Weeks 1–8)

### Publish Cadence
- **Tuesday:** Listicle (SEO/GEO-optimized, 2,400–2,800 words)
- **Thursday:** Advertorial (narrative, 1,200–1,800 words)
- **Monthly output:** 4 listicles + 4 advertorials = 8 SEO articles
- **First-month pairing** (already planned):

| Week | Tuesday Listicle | Thursday Advertorial |
|------|-----------------|---------------------|
| 1 | L1: Best 9mm for Concealed Carry | A1: I Spent $1,400 on a Rifle I Shot Twice |
| 2 | L2: 7 Best First Handguns | A7: You Wouldn't Buy a Car Without a Test Drive |
| 3 | L9: 10 Movie Guns You Can Rent | A4: I Rented a Thompson for a Week |
| 4 | L14: 5 Things Nobody Tells You | A8: The $99 Hack Smart Shooters Use |

### Production Workflow (Per Article)
1. `/kw-intel` — Validate keyword volume via Bing endpoint (Google returns 0 for gun keywords)
2. `/geo-listicle` or advertorial skill — Generate content
3. `/schema-markup` — Add Article + FAQPage JSON-LD
4. `/geo-citability` — Score for AI search citation likelihood
5. Internal linking — Cross-link listicle ↔ advertorial pairs
6. Email repurpose — Extract 3 key points for Klaviyo sequence injection

### Priority Content Queue (P0 first)

**Listicles (P0):**
| # | Title | Keyword | ICP |
|---|-------|---------|-----|
| L1 | Best 9mm Handguns for Concealed Carry in 2026 | best 9mm concealed carry | Considerer, New Owner |
| L2 | 7 Best First Handguns for New Shooters | best first handgun | New Owner |
| L15 | Why 1 in 3 Gun Owners Regret Their First Purchase | gun buyer's remorse | All |
| L17 | How Gun Rental Works: Everything You Need to Know | how to rent a gun | All |

**Advertorials (P0):**
| # | Title | Template | ICP |
|---|-------|---------|-----|
| A1 | I Spent $1,400 on a Rifle I Shot Twice | Regret Story | Considerer, New Owner |
| A4 | I Rented a $28,000 Thompson Submachine Gun for a Week | Experience Story | Experience Seeker |
| A7 | You Wouldn't Buy a Car Without a Test Drive. Why Do Gun Buyers? | Smart Shopper | All |

### SEO/GEO Target Keywords

**Primary cluster (buyer intent):**
- best 9mm concealed carry
- best first handgun
- gun buyer's remorse
- how to rent a gun
- try before you buy gun

**Secondary cluster (ICP-specific):**
- best hunting rifle for elk
- suppressed rifle rental
- bucket list guns
- best home defense shotgun
- glock 19 vs sig p365

**Technical requirements:**
- All firearms keywords: Bing DataForSEO endpoint only
- Article structure: H2/H3 hierarchy, FAQPage schema, internal links to quiz + subscription
- GEO citability score: target 70+ before publishing
- Image alt tags: gun model names + use case

---

## Phase 2: Email Engine (Weeks 3–12)

### Klaviyo Architecture

**Active flows needed:**

| Flow | Trigger | Purpose | Status |
|------|---------|---------|--------|
| Welcome Sequence | New subscriber | Brand intro → first rental | Drafted |
| Post-Rental Nurture | Rental completed | Cross-sell, upgrade, review | Drafted |
| Win-Back | 60 days inactive | Re-engagement | Drafted |
| Quiz Lead | Quiz completion | High-intent conversion | Blocked (quiz not live) |
| Content Email | Blog publish | Drive return visits | Not built |

**Welcome Sequence (5 emails — highest priority to activate):**
1. **Day 0:** "The $99 test drive" — value prop in 150 words + Gun Finder CTA
2. **Day 2:** "The gun buying mistake nobody talks about" — buyer's remorse story + A1 advertorial link
3. **Day 5:** "See what's in our vault" — top 5 inventory spotlight + "rent this week" CTA
4. **Day 8:** "How it actually works" — process walkthrough (FFL, shipping, return label) + objection kill
5. **Day 12:** First-rental incentive — if no conversion, offer or social proof push

**Email voice rules:**
- Friendly, direct. Like a knowledgeable friend, not a salesman.
- No emojis. No "Revolutionary." No "Netflix of guns."
- Always mention FFL compliance naturally (not defensively)
- Short subject lines: under 45 characters
- Reply-to: [Rentagun contact email]

### Email List Growth Targets

| Channel | Current | 90-day Target | Method |
|---------|---------|--------------|--------|
| Blog CTE (content upgrades) | Low | +300/month | Exit-intent popup + inline upgrade per article |
| Gun Finder Quiz | 0 (blocked) | +200/month | Email gate on quiz results |
| Social / paid | Low | +100/month | Facebook lead ads → quiz landing page |
| Affiliate / creator | 0 | +50/month | AvantLink + creator program |

---

## Phase 3: Conversion Optimization (Weeks 6–16)

### Gun Finder Quiz Unblock

The quiz is built. Four questions need Troy's answers before proceeding:
1. What broke with RevenueHunt? (technical / low completion / converted but didn't close?)
2. Where does "Get Basic Access" actually lead?
3. Quiz output: specific gun recommendations OR subscription tier recommendation?
4. Build platform: WordPress shortcode, Typeform embed, or Next.js on Vercel?

**Once unblocked:**
- Email gate on quiz results → adds to Klaviyo `quiz-completed` segment
- Quiz output links directly to matching listicle(s) — closes the paralysis flywheel
- Quiz becomes primary landing page for paid acquisition

### CRO Priorities (From March 2026 Audit)

Apply to homepage and subscription landing pages:
- Lead with pain ("You're about to spend $600 on a gun you've never shot")
- Single CTA per page section
- Pricing section: anchor to the mistake cost ($600-$2,500 wrong purchase), then show $99
- Social proof: rentals completed, guns in inventory, FFL network size
- FAQ section on every page: answer the "is this legal?" objection first

### Pricing Anchor Strategy

Current:
- Basic: $99/mo — 1 rental, 7 days, up to $1K MSRP
- Pro: $199/mo — 2 rentals, 7 days each, up to $3K MSRP

Framing for all content: **$99 = the cost of being wrong once.** A single bad gun purchase at $600 is 6x the Basic plan. That math is the headline.

---

## Phase 4: Acquisition Channels (Weeks 8–20)

### Affiliate / Creator Program (AvantLink)

AvantLink integration collateral already built (`~/Work/Rentagun/docs/avantlink-collateral.md`).

**Activation steps:**
1. Confirm AvantLink account live + S2S tracking pixel set up
2. Outreach to 10–20 gun YouTube reviewers with 50K–500K subscribers
3. Offer: custom promo code + 10% commission per activated subscription
4. Creator landing page already built (`creator-landing-page-copy.md`) — deploy it
5. Track: CPL by creator, subscription conversion rate, LTV vs. organic

**Creator outreach priority:**
- YouTube: gun review channels with "first gun" or "concealed carry" content
- Avoid: political channels (brand-neutral rule), airsoft/paintball crossover
- Target engagement rate > 3% (subscriber counts can be inflated)

### Paid Acquisition (Start After Quiz Live)

**Facebook/Instagram:**
- Audience: men 25–55, interests: shooting sports, hunting, gun ownership, self-defense
- Creative: advertorial-style video (regret story hook) → quiz landing page
- Budget: $300/month test — scale at <$25 CPL
- Retargeting: visitors who hit product pages but didn't subscribe

**Google Search:**
- Keywords: "how to rent a gun", "try before you buy gun", "gun rental subscription"
- Negative keywords: "rent a gun for home protection tonight" (wrong intent)
- Budget: $200/month test

**Do not start paid until:**
- Gun Finder quiz is live
- Welcome sequence fully activated
- Conversion rate from landing page measured (organic baseline)

### Social Media Execution

**Weekly structure (already defined in playbook):**
- Mon: Educational / problem-solving
- Tue: Inventory spotlight (pair with listicle publish)
- Wed: Customer story / UGC
- Thu: Quick tips (pair with advertorial publish)
- Fri: "Rent it Saturday, decide Sunday" — weekend inspiration
- Sat: Behind-the-scenes (trust building)
- Sun: Community / polls

**Content repurpose chain:**
Blog post → 3 social captions → 1 email paragraph → 1 short-form video script

---

## 90-Day Milestone Tracker

| Week | Milestone | Owner |
|------|-----------|-------|
| W1 | L1 + A1 published (first pairing live) | CMO |
| W2 | Klaviyo welcome sequence activated | CMO + CTO |
| W3 | L2 + A7 published | CMO |
| W4 | Week 1 SEO performance baseline captured | CMO |
| W5 | Troy answers 4 quiz questions (unblocks quiz) | Troy |
| W6 | L9 + A4 published | CMO |
| W7 | Gun Finder quiz live on site | CTO |
| W8 | Klaviyo quiz flow activated | CMO |
| W10 | AvantLink affiliate program launched + 5 creators outreached | CMO |
| W12 | 8 listicles + 8 advertorials published (full Month 1–2 cadence) | CMO |
| W14 | Paid acquisition tests begin (Facebook + Google) | CMO |
| W16 | CRO audit changes implemented on subscription page | CTO |
| W20 | 500+ email subscribers from content + quiz channels | CMO |

---

## Key Metrics

| Metric | Baseline | 90-day Target |
|--------|----------|--------------|
| Organic blog sessions/mo | Unknown | 2,000 |
| Email subscribers | Unknown | +500 net new |
| Email open rate | Unknown | 30%+ |
| Quiz completion rate | 0 (not live) | 40%+ |
| Monthly new subscriptions | Unknown | +25/mo from content |
| CPL (paid, after launch) | — | <$25 |

---

## Dependencies + Blockers

| Item | Owner | Status |
|------|-------|--------|
| Troy answers 4 quiz questions | Troy | Blocked — [TRO-6](/TRO/issues/TRO-6) |
| Listicle L1 outline approval | Troy | Blocked — [TRO-6](/TRO/issues/TRO-6) outline posted |
| AvantLink S2S pixel implementation | CTO | Not started |
| Creator landing page deploy | CTO | Built, needs deploy |
| Klaviyo welcome sequence review + activation | CMO + Troy | Draft exists |
| Sports South API access | EGunCo | Blocked (prior breach) |

---

## Voice Quick Reference

- **DO:** Rent / Try / Test / Compare / Confidence / Field-ready / Bore sighted
- **DON'T:** "Netflix of guns" / "Disrupt" / "Weapon" (use gun/firearm) / "Cheap"
- **Tone:** Straight-shooter, anti-buyer's-remorse, legally confident (not defensive)
- **Legal framing:** Mention FFL + background check naturally, not as a disclaimer
- **No emojis.** Use custom SVG icons for visual elements.
