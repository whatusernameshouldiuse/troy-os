# BBGV: Content + Growth Strategy 2026
> **Owner:** CMO  
> **Last Updated:** 2026-04-01  
> **Status:** Active  
> **Priority:** Phase 1 (Deliverability Recovery) must complete before scaling

---

## Situation Summary

BBGV has a 180K email list, a 45-year authority asset, and strong ICPs (inheritors, collectors, FFLs). The immediate blocker is deliverability: the Paid Subscribers list (9,856 profiles, 72% unengaged) tanked sender reputation. Until that's resolved, all growth activities are capped — list growth means nothing if inbox placement is broken.

**Three-phase strategy:**
1. **Repair** (now → 60 days): Restore inbox placement. Suppress unengaged. Rebuild engagement rate.
2. **Build** (60–120 days): Content engine live. Lead magnet deployed. List growing again.
3. **Scale** (120+ days): Full acquisition machine. Paid ads. SEO compounding. GunStreamer integration.

---

## Phase 1: Deliverability Repair (Weeks 1–8)

### Email Rules (Non-Negotiable Until Recovery Complete)
- Send ONLY to Engaged-30 or Engaged-90 segments
- Do NOT send to Paid Subscribers list until fully suppressed
- **Suppress** the 7,159 unengaged profiles (requires Troy approval — pending)
- Send cadence: max 2x/week, Tue/Thu
- Subject line A/B test every send to find what reopens lapsed readers

### Weekly Send Rotation (Recovery Mode)
| Week | Segment | Type | Goal |
|------|---------|------|------|
| W1 | Engaged-30 | Market data email | Baseline open rate |
| W2 | Engaged-90 | Story + CTA | Click-through rate |
| W3 | Engaged-30 | Quiz/interactive | Engagement signal |
| W4 | Engaged-90 | Inheritor tip | Low-threat nurture |

### Warm-Up Sequence for Suppressed Re-engagement
Once suppressed profiles age 60+ days, build a 5-email reactivation sequence:
1. "Did we lose you?" — soft reintro, no ask
2. "Here's what you missed" — 3 best pieces of content
3. "Quick question" — 1 reply prompt (engagement signal)
4. "Your gun might be worth more than you think" — valuation hook
5. "Last chance to stay on the list" — clear opt-out or confirm

### Success Metrics — Phase 1
| Metric | Baseline | Target (Day 60) |
|--------|----------|-----------------|
| Open rate | ~18% (degraded) | 28%+ |
| Spam complaints | Unknown | <0.08% |
| Inbox placement (Gmail) | Unknown | 90%+ |
| Click-to-open rate | Unknown | 15%+ |

---

## Phase 2: Content Engine (Weeks 5–16)

### Primary Content Channels

| Channel | Format | Cadence | Owner |
|---------|--------|---------|-------|
| Email — The Signal | Newsletter: market intel + tip + CTA | Tue/Thu (recovery), Tue/Thu/Sat (full) | CMO |
| Blog | SEO long-form (1,500–3,000 words) | 2x/week | CMO |
| YouTube | Valuation walkthrough + inheritor guides | 1x/week | Troy (on camera) |
| Social (X/Facebook) | Snippet from blog + data point | Daily | n8n workflow (already built) |

### Newsletter — The Signal

**Permanent Structure:**
```
Subject: [Specific value prop — no clickbait]

THE SIGNAL
[Date] | Blue Book of Gun Values

---
THIS WEEK'S MARKET MOVE
[150 words — one price trend or shift, with data]

---
FIND OF THE WEEK
[Image + 100 words — unusual piece from database]

---
[INHERITOR / COLLECTOR / FFL tip — 200 words, rotating ICP focus]

---
QUICK HITS
• [3–4 bullets: stat, auction result, industry news]

---
[Single CTA: Upgrade / Check Value / Download Guide]
```

**Reply-to:** troy@bluebookinc.com (mandatory)

### Blog Content Plan — Q2 2026

**Pillar Content (6 pieces):**

| # | Title | Primary Keyword | ICP | Status |
|---|-------|----------------|-----|--------|
| 1 | Winchester 1897 Trench Gun Valuation Guide | winchester 1897 value | Collectors | Ready to publish |
| 2 | Colt 1911 Complete Price History | colt 1911 value | Collectors/Inheritors | Ready to publish |
| 3 | M1 Garand: What Is It Worth in 2026? | m1 garand value | Inheritors | Ready to publish |
| 4 | Luger P08 Valuation Guide | luger p08 value | Collectors | Ready to publish |
| 5 | AK-47 Values by Model and Year | ak-47 value | Collectors | Ready to publish |
| 6 | Springfield 1903 Price Guide | springfield 1903 value | Collectors | Ready to publish |

**Action Required:** Export all 6 from HTML to CMS. These are done — just need publishing.

**Supporting Content (Q2 pipeline):**
- "What to Do When You Inherit Guns" — inheritor journey entry point
- "How to Read a Gun's Serial Number" — inheritor tool
- "3 Options for Inherited Guns: Keep, Sell, or Consign" — decision content
- "DIY vs. Professional Appraisal" — trust content
- "Pre-64 Winchester Model 70: Why Collectors Are Paying Premium" — market insider
- "Gun Authentication: How We Catch Fakes" — authority content

**SEO Targets:**
- Primary: gun valuation, inherited guns, firearm appraisal
- Secondary: [manufacturer] price guide, how much is my [gun] worth
- All content must link internally to the free valuation tool

### Lead Magnet: "What's This Gun Worth Right Now?"

**Concept:** Free two-sided valuation tool — email gate → instant result → InstaCash offer overlay for sellers

**Architecture:**
1. Landing page at `value.bluebookofgunvalues.com` (or subdomain TBD with CTO)
2. User enters make/model/condition → submits email
3. Instantly sees valuation range + price history chart
4. If value >$500: InstaCash offer overlay ("We'll buy it for $X today")
5. Klaviyo tagged: `lead-magnet-valuation` — triggers nurture sequence

**Nurture Sequence (5-email):**
1. Day 0: Your valuation result (recap) + what affects value
2. Day 2: "Here's what your gun would sell for at auction" (market context)
3. Day 5: "3 options for your inherited firearms" (decision frame)
4. Day 8: InstaCash offer detail (soft sell)
5. Day 12: FFL upgrade pitch (if no action taken)

**Blockers:** Valuation API endpoint (CTO to confirm). Subdomain decision. Troy approval on tool concept.

---

## Phase 3: Acquisition Scale (Weeks 12+)

### Email List Growth Targets
| Channel | Current | 90-day Target | Method |
|---------|---------|--------------|--------|
| Organic (blog) | ~800/week | 1,200/week | Content upgrades on all pillar posts |
| Lead magnet | 0 | 300/week | Valuation tool (Phase 2) |
| Paid (Facebook/Google) | 0 | 200/week | Lead gen ads → valuation tool |
| GunStreamer crossover | 0 | 100/week | Email list swap/co-marketing |

### Paid Acquisition (Phase 3 Only — After Deliverability Fixed)
**Not starting until:**
- Open rate sustained above 28% for 4+ weeks
- Inbox placement confirmed (Gmail tools)
- Lead magnet live and converting

**Initial tests:**
- Facebook: Inheritor audience (age 45-70, estate planning interest)
- Google Display: "inherited guns" + "gun appraisal" keywords
- Budget: $500/month test, scale on CPA

### GunStreamer Cross-Promotion
- BBGV newsletter → GunStreamer live stream alert (embed link)
- GunStreamer consignment CTA in every inheritor-targeted email
- Shared lead magnet: "Should I sell or consign?" quiz that routes to both products

### FFL Dealer Growth
- LinkedIn campaign targeting FFL license holders
- Cold email sequence: 5-touch, focused on wholesale pricing value prop
- Trade publication outreach (Shooting Industry, SHOT Business)
- FFL case study series: 3 dealers showing margin improvement with BBGV data

---

## Content Voice Rules (BBGV-Specific)

- **Voice:** Expert Friend 30% + Trusted Authority 40% + Educator 20% + Market Insider 10%
- **Typography:** Inter font, #428bca blue, #111827 navy
- **No emojis.** Use custom SVG icons for visual elements.
- **Fact-check mandatory.** Every email must be verified in a separate conversation before send.
- **Data citations:** Always cite price history data from BBGV database. Never estimate gun values without data.
- **Banned phrases:** "Revolutionary," "Game-changing," "Disruption"

---

## 90-Day Milestones

| Week | Milestone |
|------|-----------|
| W1 | Unengaged profiles suppressed (pending Troy approval) |
| W2 | First clean send to Engaged-30 — baseline metrics captured |
| W4 | All 6 pillar blog posts published to CMS |
| W6 | The Signal at Tue/Thu cadence with stable open rate |
| W8 | Lead magnet landing page live (pending API + subdomain) |
| W10 | First 4-week stretch of 28%+ open rate |
| W12 | Paid acquisition tests begin |
| W16 | Full Tue/Thu/Sat cadence restored |

---

## Dependencies + Blockers

| Item | Owner | Status |
|------|-------|--------|
| Suppress 7,159 unengaged profiles | Troy (approval) | Pending |
| Valuation API endpoint | CTO | Unknown |
| Subdomain decision (value.bbgv.com) | Troy + CTO | Not started |
| n8n social credentials | CTO | Not started |
| HTML blog export to CMS | CTO / Troy | 6 posts ready |
