# BBGV Marketing Playbook

> **Last Updated:** 2026-02-06
> **Status:** Active playbook for team execution
> **Owner:** Troy VanMaanen

---

## Executive Summary

BBGV is the 45-year firearms valuation authority transitioning from paid-only to freemium. Our 180K email list is our primary asset. This playbook focuses on converting free users to paid subscribers while building authority through educational content.

**Core Strategy:** Expert Friend + Trusted Authority + Market Insider

**Primary Channel:** Weekly newsletter (800 → 1,500 opt-ins/week)

**Revenue Priorities:**
1. Niche books (high margin, low volume)
2. InstaCash offers (direct gun purchases)
3. SaaS subscriptions (Free → $10 → $30)
4. Consignment through GunStreamer

---

## 1. Newsletter Strategy (Primary Channel)

### Weekly Newsletter Structure

**Format:** "The Blue Book Brief" - Every Thursday, 9am EST

**Template Structure:**

```
Subject: [Hook] + [Specific Value]

---

THE BLUE BOOK BRIEF
Week of [Date]

---

THIS WEEK'S MARKET MOVE
[150 words - One interesting price trend or market shift]
Example: "Pre-64 Winchester Model 70s jumped 18% this quarter. Here's why collectors are paying attention..."

---

INTERESTING FIND OF THE WEEK
[Image + 100 words]
[Unusual gun from our database, with story]
Example: "This 1943 M1 Garand has provenance to Patton's Third Army. Estimated value: $8,500-$12,000. Here's how we authenticated it..."

---

INHERITOR TIP
[200 words - Practical advice for people who inherited guns]
Example: "How to safely clean grandpa's guns before getting them appraised (and what NOT to do)"

---

FFL SPOTLIGHT
[150 words - Dealer success story or wholesale pricing insight]
Example: "How one Texas dealer used our wholesale pricing to increase margins by 22%"

---

QUICK HITS
• [Market stat]
• [Auction result]
• [New book announcement]
• [Industry news]

---

[CTA: Upgrade to Power User / Check your gun's value / Download free guide]

---

FOOTER:
You're receiving this because you're part of the Blue Book community.
Unsubscribe | Update preferences | Forward to a friend
```

### Subject Line Formulas

**Pattern 1: Curiosity + Specificity**
- "This WWII pistol just sold for 3x book value. Here's why."
- "Why are Colt Pythons suddenly worth $4,000?"
- "The 1911 variant nobody talks about (but should)"

**Pattern 2: Urgency + Value**
- "Market shift: Pre-ban rifles up 23% this quarter"
- "New valuations added: Check if your gun's in this batch"
- "72 hours left: Free authentication guide"

**Pattern 3: Question + Promise**
- "Inherited guns? Here's your 3-step plan."
- "Selling a collection? Avoid these 5 costly mistakes."
- "Which guns hold value best? Data from 180K valuations."

**Pattern 4: Insider Info**
- "What we're seeing at auctions right now"
- "FFL secret: The pricing spreadsheet pros use"
- "Behind the scenes: How we authenticate rare firearms"

### Content Types (Rotating Weekly)

**Week 1:** Market Intelligence
- Price trends, auction results, what's hot

**Week 2:** Education
- How to value, authenticate, care for firearms

**Week 3:** Stories
- Interesting finds, provenance stories, collector profiles

**Week 4:** Practical Advice
- Inheritor tips, selling strategies, insurance guidance

### Engagement Tactics

**1. Reply-to-real-person:** Newsletter from real email (not noreply@)
- Encourage responses: "Hit reply and tell us what you want to know."

**2. Polls/Questions:**
- "What content do you want more of? Reply with A, B, or C."
- Weekly quick poll drives engagement + data

**3. Member Spotlights:**
- Feature subscriber questions/collections
- "Reader asked: 'How do I value a Vietnam-era M16?' Here's our answer..."

**4. Progressive Disclosure:**
- Free users see partial data
- "Upgrade to see full price history and regional variations"

**5. Urgency Without Spam:**
- Limited book runs: "Only 200 printed, 47 left"
- Seasonal hooks: "Get valuations done before tax season"

### Metrics to Track

| Metric | Current | Target (3mo) | Target (12mo) |
|--------|---------|--------------|---------------|
| Open Rate | TBD | 28%+ | 32%+ |
| Click Rate | TBD | 4%+ | 6%+ |
| New Opt-ins/Week | 800 | 1,200 | 1,500 |
| Unsubscribe Rate | TBD | <0.5% | <0.3% |
| Newsletter → Upgrade | TBD | 2% | 4% |

---

## 1b. Current Blog & Automation Status (Updated 2026-02-06)

### Blog Inventory: 6 Articles (not 5)
| # | Article | SEO Status | CMS Status |
|---|---------|------------|------------|
| 1 | Winchester 1897 Trench Gun | SEO-optimized (32 NeuronWriter entities) | HTML export ready |
| 2 | Colt 1911 | Draft complete | Needs HTML export |
| 3 | M1 Garand | Draft complete | Needs HTML export |
| 4 | Luger P08 | Draft complete | Needs HTML export |
| 5 | AK-47 | Draft complete | Needs HTML export |
| 6 | Springfield 1903 | Draft complete | Needs HTML export |

**Compiled file:** `Projects/BBGV/BBGV-ALL-BLOGS-COMPILED.md`

### n8n Social Distribution Workflows
| Workflow | ID | Status |
|----------|----|--------|
| BBGV Social Media Distributor | `1Q3oqgHrsYo9syVO` | Created, needs credentials |
| BBGV Social Analytics Feedback Loop | `au8gfYbtAzvI8mi8` | Created, needs credentials |

**Next:** Configure Anthropic API key + social platform credentials in n8n.

### Klaviyo Email Warm-Up Status
| List | ID | Profiles | Status |
|------|----|----------|--------|
| Cold Warm-Up Batch 001 | (original) | 500 | Imported |
| Cold Warm-Up Batch 002 | `S3k2tf` | 2,000 | Imported 2026-02-06 |
| Verified but unused | — | ~189K | Sitting in Reoon |

**Pipeline Gap:** Daily Reoon verification runs but nothing pushes results to Klaviyo. 11 pending tasks with undownloaded results. Fix: add Klaviyo import step to daily pipeline.

**Next emails needed:** Beta Dashboard Update + Blog Teaser for Batch 002.

---

## 2. Blog Content Strategy

### Content Pillars (4 Core Topics)

**Pillar 1: Valuation Guides**
- How to value specific gun types
- Authentication guides
- Market reports by era/manufacturer

**Pillar 2: Inheritor Resources**
- Complete journey from "I inherited guns" to "I know what to do"
- Legal requirements by state
- Safety and storage

**Pillar 3: Collector Education**
- Investment-grade firearms
- Condition grading explained
- Provenance documentation

**Pillar 4: Market Intelligence**
- Quarterly market reports
- Auction analysis
- Trend forecasts

### Inheritor Journey Content Map

**Stage 1: Discovery** ("I just inherited guns")
- Blog: "The Complete Guide to Inheriting Firearms: First 7 Steps"
- Blog: "Is Grandpa's Gun Worth Anything? How to Tell."
- Blog: "Legal Requirements for Inheriting Guns (State-by-State)"
- Lead Magnet: "Inheritor's Checklist PDF"

**Stage 2: Assessment** ("What are they worth?")
- Blog: "How Gun Valuation Works (And Why Google Gets It Wrong)"
- Blog: "DIY vs. Professional Appraisal: When to Pay for Expert Opinion"
- Blog: "Reading Serial Numbers: What They Tell You"
- Lead Magnet: "Serial Number Decoder Guide"

**Stage 3: Decision** ("Should I keep, sell, or consign?")
- Blog: "3 Options for Inherited Guns: Keep, Sell, or Consign"
- Blog: "How to Sell Inherited Guns Legally (And Get Fair Value)"
- Blog: "When to Hold: Guns That Appreciate vs. Depreciate"
- CTA: InstaCash Offer / Consignment Quote

**Stage 4: Action** ("I'm ready to sell")
- Landing Page: InstaCash Offer Calculator
- Case Studies: "How Sarah Got $8,400 for Her Dad's Collection"
- Trust Signals: BBB rating, testimonials, process transparency

### Valuation Guide Templates

**Template A: Manufacturer Deep-Dive**
```markdown
# [Manufacturer] Valuation Guide: Complete Price History

## Overview
[Brief company history, 150 words]

## Model Breakdown
[Table: Model | Years | Avg Value | Key Variants]

## Authentication Red Flags
[Bullet list: Common fakes, reproductions]

## Market Trends
[Chart: Price movement over 5 years]

## What Affects Value
- Condition
- Original parts
- Documentation
- Rarity factors

## Get Your [Manufacturer] Valued
[CTA: Free basic valuation or upgrade for detailed report]
```

**Template B: Era/War Deep-Dive**
```markdown
# [Era] Firearms: Complete Collector's Guide

## Historical Context
[Why these guns matter, 200 words]

## Top 10 Most Valuable [Era] Firearms
[Ranked list with images, current values]

## Authentication Guide
[How to spot originals vs. reproductions]

## Market Outlook
[Investment potential, trends]

## Further Reading
[Link to niche book if available]
```

**Template C: Gun Type Guide**
```markdown
# How to Value [Gun Type]: The Definitive Guide

## Factors That Determine Value
1. Manufacturer reputation
2. Condition grading
3. Original vs. modified
4. Rarity
5. Provenance

## Price Ranges by Condition
[Table showing excellent/good/fair values]

## Common Questions
[FAQ format, 10-15 Q&As]

## Get an Accurate Valuation
[CTA: Enter your gun details]
```

### Publishing Cadence

**Minimum:** 1 blog post/week (every Tuesday)

**Ideal:** 2 posts/week (Tuesday + Friday)

**Format:**
- Tuesdays: Educational/evergreen content
- Fridays: Timely/market intelligence content

### SEO Considerations

**Primary Keywords:**
- "gun valuation"
- "inherited guns"
- "firearm appraisal"
- "[manufacturer] price guide"
- "how much is my [gun] worth"

**Content Requirements:**
- 1,200+ words for pillar content
- 600-800 words for supporting posts
- Internal linking to free valuation tool
- Schema markup for how-to guides
- Image optimization (ALT tags with gun model names)

**Link Building:**
- Guest posts on firearm blogs
- Data partnerships (share market reports)
- Press releases for quarterly reports
- Podcast appearances (inheritor journey stories)

---

## 3. Email Sequences (Klaviyo)

### Sequence 1: Free → Paid Conversion (7 emails, 14 days)

**Email 1: Welcome + Quick Win (Day 0 - immediate)**
```
Subject: Here's your first gun valuation

Hi [Name],

Welcome to Blue Book. Let's get you a valuation right now.

[CTA: Enter your gun details]

You've got access to basic valuations for any gun in our 180K+ database. Here's what you can do right now:

• Look up any firearm by make/model
• See average market value
• Compare similar models

Want more? Power Users get:
✓ Full price history charts
✓ Regional pricing variations
✓ Condition grading guides
✓ Authentication tips
✓ Wholesale dealer pricing

[CTA: Upgrade to Power User - $10/month]

Over the next two weeks, I'll show you how to get the most from your membership.

Tom
Blue Book of Gun Values
```

**Email 2: Education (Day 2)**
```
Subject: Why gun valuations vary so much

[Name],

You looked up [Gun Name if tracked] - smart move.

But you probably noticed: the value range is pretty wide. Here's why gun valuations aren't like Kelley Blue Book for cars...

[200 words explaining condition, originality, documentation]

This is exactly why we built the Power User tier. Instead of guessing where your gun falls in the range, you get:

• Condition grading photos (see examples of Excellent vs. Good)
• Regional pricing (your gun's worth more in Texas than California)
• Recent auction results (what guns ACTUALLY sold for)

[CTA: See what Power User unlocks]

Next email: I'll show you the #1 mistake people make when valuing inherited guns.

Tom
```

**Email 3: Social Proof (Day 4)**
```
Subject: How Mark got $3,200 more than he expected

[Name],

Mark inherited 6 guns from his grandfather. He thought they were worth maybe $2,000 total.

Turns out, one was a pre-64 Winchester Model 70 in excellent condition.

Blue Book valuation: $5,200

He used our InstaCash offer and got $4,900 in his account within 48 hours.

[Read Mark's full story]

Here's the thing: Most people under-value inherited guns because they don't know what to look for.

Our Power User tier includes:
✓ Authentication guides
✓ Serial number decoders
✓ Variant identification (the details that add thousands)

[CTA: Upgrade now and find out what you really have]

Tom
```

**Email 4: Overcome Objections (Day 7)**
```
Subject: "Can't I just Google it?"

[Name],

You can Google gun values. You'll find:

• Outdated forum posts
• Gun shop asking prices (not actual sales)
• Auction listings (without sold data)
• Wikipedia (generic info)

What you WON'T find:
❌ 45 years of actual transaction data
❌ Regional price variations
❌ Authentication expertise
❌ Condition-adjusted valuations

That's where Blue Book comes in. We've tracked 180K+ firearms across decades. We know what guns actually sell for, not what people hope they'll get.

[CTA: See the difference - upgrade to Power User]

Tom
```

**Email 5: Urgency + Benefit (Day 10)**
```
Subject: Your guns aren't getting more valuable sitting there

[Name],

Straight talk: Most guns depreciate if they're not cared for properly.

But some are appreciating assets. The question is: which ones do you have?

Power Users get access to our Investment Grade report - which manufacturers and models are trending up (and which are flat).

Right now we're seeing:
• Pre-ban rifles: +15-20% annually
• Colt Pythons: +25% in 2 years
• WWII bring-backs: +12% annually

[CTA: Unlock investment insights]

Tom
```

**Email 6: Testimonial + Last Chance (Day 12)**
```
Subject: "I was shocked at what my dad's collection was worth"

[Name],

Sarah inherited 12 guns from her father. She wanted to honor his memory by getting fair value.

"I was shocked. What I thought was worth $6,000 turned out to be closer to $18,000. Blue Book's detailed reports gave me confidence to negotiate."

- Sarah M., Dallas

[Watch Sarah's video testimonial]

This is your last reminder about upgrading to Power User. After this, I won't bug you about it again.

[CTA: Upgrade now - $10/month]

Tom
```

**Email 7: Transition to Newsletter (Day 14)**
```
Subject: You're in good hands

[Name],

You've got the tools. You know how to use them.

From now on, you'll get our weekly newsletter (every Thursday) with:
• Market trends
• Interesting finds
• Inheritor tips
• FFL insights

And whenever you're ready to upgrade, you know where to find us.

One more thing: If you ever want to sell, our InstaCash offers are the fastest way to turn guns into cash. Just hit reply and I'll explain how it works.

Tom

P.S. Upgraded members can reply directly to me for valuation questions. Worth considering.
```

---

### Sequence 2: Inheritor Nurture (10 emails, 21 days)

**Triggers:**
- Signs up with "inherited" in form
- Clicks inheritor content
- Tags: inheritor, seller-intent

**Goal:** Education → Confidence → InstaCash Offer

**Email 1: Welcome (Day 0)**
```
Subject: You're not alone in this

[Name],

Inheriting firearms can feel overwhelming. Legal questions, safety concerns, what they're worth, what to do with them.

I've walked hundreds of people through this process. Here's what you need to know:

Step 1: Safety first (are they loaded?)
Step 2: Legal check (can you legally possess them in your state?)
Step 3: Inventory (what do you actually have?)
Step 4: Valuation (what are they worth?)
Step 5: Decision (keep, sell, or consign?)

Over the next 3 weeks, I'll guide you through each step.

[Download: The Inheritor's Checklist PDF]

Tom
```

**Email 2: Safety (Day 2)**
```
Subject: First things first: Safety

[Name],

Before you do anything else, make sure the guns are unloaded and stored safely.

[Link to safety guide with photos]

Key rules:
1. Always assume a gun is loaded
2. Point in safe direction
3. Keep finger off trigger
4. Store ammo separately

Once you've confirmed they're safe, we can move to the legal stuff.

[Download: Safe Handling Guide PDF]

Tom
```

**Email 3: Legal (Day 4)**
```
Subject: Can you legally keep these guns?

[Name],

State laws vary on inheriting firearms. Here's what you need to know:

[Link to state-by-state guide]

Most states: No problem
Restrictive states (CA, NY, NJ, etc.): May require registration or transfer through FFL

If you're in a restrictive state, I recommend talking to a local FFL. We have a directory:

[Link to FFL locator]

Next email: How to inventory what you have.

Tom
```

**Email 4: Inventory (Day 6)**
```
Subject: What did you actually inherit?

[Name],

Time to make a list. For each gun, write down:

• Make (manufacturer)
• Model
• Serial number
• Caliber
• Condition (be honest)

Take photos:
- Left side
- Right side
- Serial number (close-up)
- Any markings or engravings

This inventory is critical for insurance, valuation, and eventual sale.

[Use our free inventory template]

Tom
```

**Email 5: Valuation Basics (Day 9)**
```
Subject: Now let's find out what you have

[Name],

With your inventory done, it's time to get valuations.

[CTA: Enter your guns into Blue Book]

You'll get basic values for free. But here's what affects the final number:

1. Condition (excellent vs. fair = 50% difference)
2. Original parts (modified = less valuable)
3. Documentation (box, papers, provenance)
4. Market trends (some guns are hot right now)

[Link to valuation guide]

Tom
```

**Email 6: Grading (Day 11)**
```
Subject: How to grade condition honestly

[Name],

The #1 mistake inheritors make: Over-estimating condition.

"My dad took great care of it" usually means "Good" condition, not "Excellent."

[Link to photo grading guide]

Compare your guns to these examples. Be honest - buyers will be.

Power User tip: Our detailed grading guides show exactly what "Excellent" vs "Very Good" looks like for each manufacturer.

[CTA: Upgrade for detailed grading guides]

Tom
```

**Email 7: Market Trends (Day 14)**
```
Subject: What's hot right now

[Name],

Some guns from your inventory might be worth way more than you think.

Right now we're seeing strong prices for:
• Pre-64 Winchester Model 70s
• Colt Pythons (any era)
• WWII bring-backs with documentation
• Pre-ban AR-15s

[Check if you have any of these]

Even if you don't, market timing matters. Some guns are better sold now, others you might want to hold.

Tom
```

**Email 8: Keep, Sell, Consign? (Day 16)**
```
Subject: What should you do with these guns?

[Name],

You've got three options:

OPTION 1: Keep them
Best if: Sentimental value, shooter guns, or investment-grade

OPTION 2: Sell quickly
Best if: Need cash now, no sentimental attachment
→ InstaCash offers get you paid in 48 hours

OPTION 3: Consign for maximum value
Best if: High-end collection, willing to wait 30-90 days
→ We sell through GunStreamer, take 10% commission

[Take the decision quiz]

Tom
```

**Email 9: InstaCash Offer (Day 18)**
```
Subject: Fastest way to turn guns into cash

[Name],

If you're leaning toward selling, here's how InstaCash works:

1. Submit your inventory (photos + details)
2. We send you an offer within 24 hours
3. Accept offer → We send prepaid FedEx label
4. Guns arrive → We inspect & confirm offer
5. Money in your account within 48 hours

No auction fees. No hassle. No lowball buyers.

[Get your InstaCash offer]

Recent offers:
• 6-gun collection (TX): $8,400
• WWII bring-backs (FL): $12,200
• Single Colt Python (AZ): $4,900

Tom
```

**Email 10: Final Check-In (Day 21)**
```
Subject: How can I help?

[Name],

You've been on this journey for 3 weeks now. You know:
✓ How to handle guns safely
✓ Legal requirements
✓ How to inventory and value
✓ Your options (keep, sell, consign)

What's your next step?

Reply to this email and let me know:
• Where are you stuck?
• What questions do you have?
• How can I help?

I read every reply.

Tom

P.S. If you're ready to sell, here's that InstaCash offer link again: [link]
```

---

### Sequence 3: FFL Onboarding (6 emails, 10 days)

**Triggers:**
- Selects FFL subscription
- Completes FFL verification

**Goal:** Activation → Daily Use → Retention

**Email 1: Welcome + Setup (Day 0)**
```
Subject: Welcome to Blue Book FFL

[Name],

Your FFL subscription is active. Let's get you set up.

First 3 things to do:
1. [Download the FFL pricing spreadsheet template]
2. [Integrate with your POS system] (if applicable)
3. [Set up your wholesale alert preferences]

Your FFL tier includes:
✓ Wholesale dealer pricing
✓ Regional market data
✓ Inventory valuation tools
✓ Quarterly market reports
✓ Direct access to our valuation team

[CTA: Complete setup checklist]

Tom
```

**Email 2: Wholesale Pricing (Day 2)**
```
Subject: How to use wholesale pricing

[Name],

Here's how dealers use Blue Book to increase margins:

SCENARIO 1: Trade-Ins
Customer wants to trade a used Glock 19. Blue Book shows:
• Retail: $450-550
• Wholesale: $300-375
→ You offer $350 trade-in, resell at $500 = $150 margin

SCENARIO 2: Buying Collections
Seller has 10 guns. Blue Book wholesale data shows total value: $8,000-10,000.
→ You offer $7,500, resell individually = $2,500+ profit

[Watch: 5-minute pricing tutorial]

Tom
```

**Email 3: Inventory Valuation (Day 4)**
```
Subject: Track your inventory value in real-time

[Name],

Market prices change. Your inventory value should update automatically.

[CTA: Upload your inventory CSV]

We'll track value fluctuations and alert you when:
• Specific models spike in value (time to sell)
• Market downturns (adjust pricing to move inventory)
• Regional opportunities (ship to higher-price markets)

[Link to inventory tool demo]

Tom
```

**Email 4: Market Reports (Day 6)**
```
Subject: Your Q1 2026 market report is ready

[Name],

Your quarterly FFL market report includes:

• Regional price trends (what's hot in your area)
• Manufacturer performance (who's gaining market share)
• Buying opportunities (undervalued models)
• Inventory recommendations (what to stock)

[Download your report]

Use this to plan your purchasing for the next 90 days.

Tom
```

**Email 5: Case Study (Day 8)**
```
Subject: How John's shop increased margins 22%

[Name],

John's Gun Shop (Texas) was buying collections based on gut feel. Sometimes profitable, sometimes not.

After implementing Blue Book FFL data:

• Trade-in margins: 12% → 18%
• Collection purchases: 15% → 28%
• Inventory turns: 90 days → 65 days

His secret: Wholesale pricing data + market trend alerts.

[Read the full case study]

You have the same tools. Are you using them?

Tom
```

**Email 6: Support + Resources (Day 10)**
```
Subject: Your FFL resources hub

[Name],

Quick reference for everything in your FFL subscription:

📊 TOOLS:
• [Wholesale pricing database]
• [Inventory valuation tracker]
• [Market reports archive]
• [POS integration guides]

📚 GUIDES:
• [Collection buying playbook]
• [Trade-in pricing scripts]
• [Regional market analysis]

💬 SUPPORT:
• [Email our FFL team]
• [Schedule 1-on-1 training]
• [Join FFL community forum]

Bookmark this email. Everything you need is here.

Tom

P.S. Your quarterly market report drops the first week of each quarter. Watch your inbox.
```

---

### Sequence 4: InstaCash Offer Sequence (5 emails, 7 days)

**Triggers:**
- Clicks InstaCash CTA
- Visits InstaCash landing page
- Fills out partial form

**Goal:** Submit inventory → Accept offer → Complete sale

**Email 1: Start Your Offer (Day 0)**
```
Subject: Get your InstaCash offer in 24 hours

[Name],

You're interested in selling. Let's make it fast and fair.

How InstaCash works:
1. Tell us what you have (5 minutes)
2. We send offer within 24 hours
3. Accept → We send prepaid shipping
4. Money in your account in 48 hours

No fees. No auctions. No tire-kickers.

[CTA: Start your offer now]

What we need:
• Make, model, serial number
• Photos (left, right, serial #)
• Honest condition assessment

Tom
```

**Email 2: Trust Signals (Day 2)**
```
Subject: Why we can pay more than gun shops

[Name],

Here's why our offers are often higher than local gun shops:

1. We sell nationwide (bigger buyer pool)
2. We sell through GunStreamer (direct to collector, no middleman)
3. We have 45 years of market data (we know what things actually sell for)

Recent InstaCash offers:
• Colt Python (AZ): $4,900
• WWII bring-back collection (FL): $12,200
• Pre-64 Winchester 70 (TX): $5,200

[Read testimonials from sellers]

Ready to get your offer? [Start here]

Tom
```

**Email 3: Abandoned Form Follow-Up (Day 3 - if applicable)**
```
Subject: Finish your InstaCash offer?

[Name],

I noticed you started an offer but didn't finish. What's holding you up?

Common concerns:

"I don't know the exact model."
→ Send photos, we'll identify it.

"I don't have all the details."
→ We only need make, model, photos. We'll research the rest.

"What if the offer is too low?"
→ No obligation. If you don't like it, no hard feelings.

[Pick up where you left off]

Or hit reply and tell me what you need.

Tom
```

**Email 4: Urgency (Day 5)**
```
Subject: Market timing matters

[Name],

Gun values fluctuate. What's worth $500 today might be $450 in 3 months.

Right now we're seeing strong demand for:
• Lever-action rifles
• Revolvers (especially Colt, S&W)
• Bolt-action hunting rifles

If you have any of these, now's the time to sell.

[Get your offer before market shifts]

Tom
```

**Email 5: Final Nudge (Day 7)**
```
Subject: Last reminder about your InstaCash offer

[Name],

This is my last email about InstaCash. After this, I won't bug you.

If you're still thinking about selling:
• Market is strong right now
• Process takes 5 minutes to start
• Offer in your inbox in 24 hours
• Zero obligation

[Get your offer]

If not, no worries. You'll still get our weekly newsletter with market intel and tips.

Tom
```

---

## 4. Social Media Strategy

### Platform Priorities

**Platform 1: Twitter/X (PRIMARY)**
- Best for: Market news, real-time updates, influencer engagement
- Audience: Collectors, dealers, firearms industry
- Posting frequency: 2-3x daily

**Platform 2: YouTube (SECONDARY)**
- Best for: Educational content, authentication guides, market analysis
- Audience: Inheritors, collectors, newbies
- Posting frequency: 1x weekly

**Platform 3: LinkedIn (TERTIARY)**
- Best for: B2B (FFLs), industry thought leadership
- Audience: Dealers, appraisers, insurance professionals
- Posting frequency: 2x weekly

**Platform 4: Instagram (EXPERIMENTAL)**
- Best for: Visual storytelling, interesting finds, behind-the-scenes
- Audience: Younger collectors, experience seekers
- Posting frequency: 3x weekly

**NOT PRIORITIZED:**
- Facebook (aging demographic, low engagement)
- TikTok (not aligned with brand authority)

---

### Twitter/X Content Strategy

**Content Pillars:**

**1. Market Intelligence (40%)**
- "Pre-64 Winchester Model 70s are up 18% this quarter. Here's what's driving demand..." [thread]
- "This 1911 just sold at auction for $8,400. Expected: $4,500. Here's why it went high..." [image]
- "Gun market snapshot: What's hot, what's cooling, what to watch." [weekly thread]

**2. Interesting Finds (30%)**
- "This 1943 M1 Garand has provenance to Patton's Third Army. Estimated value: $8,500-12,000." [image + story]
- "Customer asked us to value 'grandpa's old rifle.' Turns out it's a $15,000 pre-war Winchester." [thread]
- "The rarest gun in our database: Only 12 known to exist. Current value: $75,000+." [image]

**3. Education (20%)**
- "How to spot a fake Colt Python. 🧵 Thread:" [10-tweet thread with photos]
- "5 guns that appreciate vs. 5 that don't. Data from 45 years of tracking:" [list]
- "What your gun's serial number tells you (and what it doesn't):" [thread]

**4. Engagement/Community (10%)**
- "What's the most undervalued gun on the market right now? (Wrong answers only)"
- "Reply with your favorite inherited gun story. We'll value the most interesting one for free."
- "Auction tonight. We're watching lot #47 (1911A1). Estimate: $3,200. Where do you think it ends up?"

**Posting Schedule:**

**Morning (8-9am EST):**
- Market intelligence or news

**Midday (12-1pm EST):**
- Educational content or thread

**Evening (6-7pm EST):**
- Interesting find or engagement post

**Format Best Practices:**

**For Threads:**
```
1/ This Winchester Model 70 from 1952 just crossed our desk.

Owner thinks it's worth "maybe $800."

It's actually worth $4,200.

Here's how we knew in 30 seconds: 🧵
```

**For Quick Hits:**
```
Market update: Colt Pythons are officially in bubble territory.

2022: $2,000
2024: $3,500
2026: $4,500+

Sellers: Now's your window.
Buyers: Wait for correction.

[Chart image]
```

**For Engagement:**
```
Your grandpa's gun collection: 6 firearms.

He thinks it's worth $3,000.

You think it's worth $1,500.

I think it's worth $12,000.

How do I know?

Reply and I'll explain. 👇
```

---

### YouTube Content Strategy

**Goal:** Become the #1 educational resource for gun valuation.

**Show Format:** "Blue Book Breakdown" (Weekly, 10-15 min episodes)

**Episode Template:**

```
INTRO (30 sec):
"I'm [Host] from Blue Book of Gun Values. Today we're breaking down [topic]."

HOOK (30 sec):
"This gun sold for 3x what the owner expected. Here's what he missed..."

MAIN CONTENT (8-10 min):
[Education with visuals, examples, data]

CALL TO ACTION (1 min):
"Want to value your guns? Start with our free tool: bluebookofgunvalues.com"

OUTRO (30 sec):
"Next week: [Next topic]. Subscribe so you don't miss it."
```

**Episode Ideas (First 12 Weeks):**

Week 1: "How Gun Valuation Actually Works"
Week 2: "Top 5 Mistakes Inheritors Make"
Week 3: "Spotting Fake Colt Pythons"
Week 4: "What's Your Inherited Gun Worth? (Live Valuations)"
Week 5: "The Investment-Grade Firearms You've Never Heard Of"
Week 6: "WWII Bring-Backs: How to Authenticate & Value"
Week 7: "Pre-64 vs. Post-64 Winchester: Why It Matters"
Week 8: "How to Grade Condition Like a Pro"
Week 9: "Serial Number Secrets: What Those Numbers Mean"
Week 10: "The Gun Market in 2026: What's Hot, What's Not"
Week 11: "Should You Sell Now or Hold? (Market Timing Guide)"
Week 12: "Viewers' Guns Valued (Submit Yours for Next Month)"

**Thumbnail Best Practices:**
- Close-up of featured gun
- Bold text: "Worth $4,200" or "Fake or Real?"
- Host face (builds recognition)
- Bright, high-contrast colors

**SEO Optimization:**
- Title keywords: "how to value", "[gun model] worth", "authentic vs fake"
- Description: First 2 sentences hook + keywords + timestamps
- Tags: gun valuation, firearm appraisal, [specific models]

**Success Metrics:**

| Metric | 3-Month Goal | 12-Month Goal |
|--------|--------------|---------------|
| Subscribers | 500 | 5,000 |
| Avg View Duration | 6 min | 8 min |
| Click-Through Rate | 4% | 6% |
| Website Traffic from YT | 200/mo | 2,000/mo |

---

### LinkedIn Strategy

**Goal:** Establish thought leadership with FFLs, appraisers, insurance pros.

**Content Types:**

**1. Data-Driven Posts (50%)**
```
Gun market analysis Q1 2026:

• Pre-ban rifles: +18% YoY
• Colt revolvers: +22% YoY
• Bolt-action hunting: -3% YoY

What we're seeing: Flight to scarcity. Collectors are chasing guns that can't be manufactured anymore.

Dealers: Stock pre-ban and collectible revolvers.
Appraisers: Update your comps quarterly.

[Link to full report]
```

**2. Industry Insights (30%)**
```
After 45 years in gun valuation, here's what I've learned:

The guns that hold value have 3 things in common:

1. Manufacturing scarcity (can't make them anymore)
2. Historical significance (war connection, famous user)
3. Original condition (unmodified)

Everything else is negotiable.

[Link to guide]
```

**3. Case Studies (20%)**
```
A Texas FFL increased margins by 22% using wholesale pricing data.

Here's the playbook:

• Trade-ins: Check wholesale comps before offer
• Collections: Data-driven buying (no gut feel)
• Inventory: Track value fluctuations in real-time

Result: Higher buy margins + faster turns = more profit.

[Read full case study]
```

**Posting Frequency:** 2x weekly (Tuesday, Thursday)

---

### Instagram Strategy (Experimental)

**Goal:** Humanize the brand, showcase interesting finds, attract younger collectors.

**Content Mix:**

**Feed Posts (3x weekly):**
- Beautiful gun photography (vintage, rare, unusual)
- Behind-the-scenes (authentication process, team at work)
- Educational carousels (10 slides: "How to Spot Fake Gun X")

**Stories (Daily):**
- "Gun of the Day" polls (real or fake?)
- Q&A sessions (Ask our expert)
- Market updates (quick stats)

**Reels (1x weekly):**
- 15-30 sec education snippets
- "This gun is worth HOW MUCH?" reveals
- Time-lapse authentication process

**Bio:**
```
Blue Book of Gun Values
45+ years of firearms valuation data
180K+ guns | Trusted by collectors & dealers
👇 Free valuations
```

**Success Metrics (6-month goals):**
- 1,000 followers
- 3% engagement rate
- 100 website visits/month from IG

---

## 5. Lead Generation

### Free Tool Strategy

**Primary Tool: Basic Valuation Lookup**
- Already exists
- Gate with email (free forever)
- Upgrade path to Power User (full history, grading guides)

**Tool 2: Inheritor's Calculator**
```
"Inherited a gun collection? Find out what it's worth."

INPUT:
- Number of guns
- Condition (dropdown: Excellent/Good/Fair)
- General categories (Rifle/Handgun/Shotgun)

OUTPUT:
"Your collection is estimated at $X,XXX - $X,XXX"

CTA: "Get exact valuations for each gun (free account required)"
```

**Tool 3: Investment Score**
```
"Will your gun appreciate or depreciate?"

INPUT:
- Make, Model, Year

OUTPUT:
"Investment Score: 7/10"
"Firearms like this have appreciated 12% annually over the last 10 years."

CTA: "See full market analysis (Power User feature)"
```

**Tool 4: Authentication Checker**
```
"Is your [Gun Model] authentic?"

INPUT:
- Serial number
- Photos

OUTPUT:
"Based on serial number range and markings, this appears authentic."
[Red flags checklist]

CTA: "Get professional authentication (submit for review)"
```

**Tool 5: Selling Timeline Calculator**
```
"When should you sell your gun?"

INPUT:
- Make, Model
- Current condition

OUTPUT:
"Market trend: UP 18% in last 12 months"
"Recommendation: SELL NOW (prices are peaking)"
or
"Recommendation: HOLD (model is appreciating)"

CTA: "Get an InstaCash offer today"
```

---

### Content Upgrades (Lead Magnets)

**For Blog Posts:**

| Blog Topic | Content Upgrade |
|------------|-----------------|
| Inheritor guide | "Inheritor's Checklist PDF" |
| Valuation basics | "Serial Number Decoder Guide" |
| Authentication | "Red Flags Checklist by Manufacturer" |
| Selling options | "Keep, Sell, Consign Decision Quiz" |
| Market trends | "Q1 2026 Market Report (Full Data)" |
| Investment guns | "Top 10 Investment-Grade Firearms" |
| Condition grading | "Photo Grading Guide (100+ Examples)" |

**For Email Sequences:**

| Sequence | Lead Magnet |
|----------|-------------|
| Free → Paid | "30 Days of Valuation Tips" |
| Inheritor | "Complete Inheritor's Handbook (50-page PDF)" |
| FFL | "Collection Buying Playbook" |
| InstaCash | "Selling Guns: Complete Guide to Options" |

**For Social Media:**

| Platform | Lead Magnet |
|----------|-------------|
| Twitter | "Market Intelligence Brief (Monthly PDF)" |
| YouTube | "Authentication Checklist (Video + PDF)" |
| LinkedIn | "FFL Market Report (Quarterly)" |
| Instagram | "Beautiful Guns: 2026 Calendar" |

---

### Landing Page Strategy

**Page 1: Inheritor Journey (Primary Funnel)**

**URL:** bluebookofgunvalues.com/inherited-guns

**Headline:** "Inherited Guns? Here's Your Complete Guide."

**Subhead:** "From 'What do I have?' to 'What's it worth?' to 'What should I do?' - we'll walk you through every step."

**Sections:**
1. The 5-Step Process (Overview)
2. Free Valuation Tool (Email gate)
3. Common Questions (FAQ)
4. Next Steps (CTA: Download Checklist)

**CTA Hierarchy:**
- Primary: "Value Your Guns Free"
- Secondary: "Download Inheritor's Checklist"
- Tertiary: "Get InstaCash Offer"

---

**Page 2: InstaCash Offer Landing Page**

**URL:** bluebookofgunvalues.com/sell-guns-fast

**Headline:** "Turn Guns Into Cash in 48 Hours"

**Subhead:** "No auctions. No fees. No hassle. Fair offers backed by 45 years of market data."

**Sections:**
1. How It Works (4 steps with icons)
2. Recent Offers (Social proof: "John got $8,400 for his collection")
3. What We Buy (All types, but especially...)
4. Why We Pay More (Data + nationwide reach)
5. Trust Signals (BBB rating, testimonials)
6. CTA: "Get Your Offer"

**Form Fields:**
- Name, Email, Phone
- Number of guns
- Brief description
- Photos (upload)

---

**Page 3: FFL Landing Page**

**URL:** bluebookofgunvalues.com/for-dealers

**Headline:** "The Wholesale Pricing Data Serious Dealers Use"

**Subhead:** "Stop guessing. Start using 45 years of transaction data to increase your margins."

**Sections:**
1. FFL Tools Overview
2. Case Study: "How John's Shop Increased Margins 22%"
3. Pricing Comparison (Basic vs. FFL tier)
4. ROI Calculator ("Your shop does $X in trade-ins/year. Our data would save you $Y.")
5. CTA: "Start FFL Trial"

**Pricing Table:**

| Feature | Basic (Free) | Power User ($10) | FFL ($30) |
|---------|--------------|------------------|-----------|
| Basic valuations | ✓ | ✓ | ✓ |
| Price history | - | ✓ | ✓ |
| Regional pricing | - | ✓ | ✓ |
| Wholesale data | - | - | ✓ |
| Inventory tools | - | - | ✓ |
| Market reports | - | - | ✓ |

---

**Page 4: Niche Book Landing Pages**

**Template URL:** bluebookofgunvalues.com/books/[manufacturer-or-era]

**Example:** bluebookofgunvalues.com/books/colt-revolvers

**Headline:** "The Definitive Guide to [Manufacturer/Era] Firearms"

**Subhead:** "300+ pages of valuations, authentication tips, and market analysis. Limited to 500 copies."

**Sections:**
1. What's Inside (Table of contents preview)
2. Sample Pages (3-4 spreads)
3. Who It's For (Collectors, dealers, appraisers)
4. Limited Availability ("Only 173 copies left")
5. Testimonials
6. CTA: "Order Your Copy - $79"

**Scarcity Tactics:**
- Real-time counter: "47 copies remaining"
- Social proof: "128 collectors have ordered"
- Urgency: "Next printing not scheduled"

---

## 6. Metrics to Track

### Newsletter Metrics

| Metric | How to Track | Current | Target (3mo) | Target (12mo) |
|--------|--------------|---------|--------------|---------------|
| **List Size** | Klaviyo dashboard | 180K | 185K | 200K |
| **Weekly Opt-ins** | Klaviyo analytics | 800 | 1,200 | 1,500 |
| **Open Rate** | Klaviyo per-campaign | TBD | 28%+ | 32%+ |
| **Click Rate** | Klaviyo per-campaign | TBD | 4%+ | 6%+ |
| **Unsubscribe Rate** | Klaviyo analytics | TBD | <0.5% | <0.3% |
| **Newsletter → Upgrade** | Klaviyo conversion tracking | TBD | 2% | 4% |
| **Most Clicked Links** | Klaviyo heatmap | - | Track top 3 | Track top 3 |

**Action Items:**
- A/B test subject lines (track in spreadsheet)
- Monitor unsubscribe feedback ("Why are you leaving?")
- Segment high-engagement users (open every email = potential Power User)

---

### Blog Metrics

| Metric | How to Track | Current | Target (3mo) | Target (12mo) |
|--------|--------------|---------|--------------|---------------|
| **Organic Traffic** | Google Analytics | TBD | 5K/mo | 20K/mo |
| **Blog → Free Signup** | GA conversion tracking | TBD | 3% | 5% |
| **Avg Time on Page** | GA | TBD | 3 min | 4 min |
| **Bounce Rate** | GA | TBD | <60% | <50% |
| **Top Traffic Posts** | GA | - | Track top 10 | Track top 10 |
| **Ranking Keywords** | Ahrefs/SEMrush | TBD | 50 keywords top 10 | 200 keywords top 10 |

**Action Items:**
- Monthly SEO audit (which posts rank, which don't)
- Update top posts quarterly (keep current)
- Internal linking audit (connect related posts)

---

### Email Sequence Metrics

| Sequence | Metric | Target |
|----------|--------|--------|
| **Free → Paid** | Conversion Rate | 3-5% |
| | Open Rate | 40%+ |
| | Unsubscribe Rate | <2% |
| **Inheritor** | InstaCash Form Completion | 8-12% |
| | Open Rate | 50%+ |
| | Engagement (replies) | 5%+ |
| **FFL Onboarding** | Tool Activation | 70%+ |
| | 30-day Retention | 85%+ |
| | Open Rate | 60%+ |
| **InstaCash** | Offer Submission | 15-20% |
| | Offer Acceptance | 40-50% |
| | Open Rate | 45%+ |

**How to Track:**
- Klaviyo flow analytics (per-email performance)
- Revenue attribution (which sequence drives most upgrades)

**Action Items:**
- A/B test email #3 and #6 in Free → Paid (highest drop-off points)
- Survey non-converters ("What stopped you from upgrading?")

---

### Social Media Metrics

**Twitter/X**

| Metric | Current | Target (3mo) | Target (12mo) |
|--------|---------|--------------|---------------|
| Followers | TBD | 1,000 | 5,000 |
| Engagement Rate | TBD | 2%+ | 3%+ |
| Profile Visits | TBD | 500/week | 2,000/week |
| Link Clicks | TBD | 50/week | 300/week |

**YouTube**

| Metric | Current | Target (3mo) | Target (12mo) |
|--------|---------|--------------|---------------|
| Subscribers | TBD | 500 | 5,000 |
| Avg View Duration | TBD | 6 min | 8 min |
| CTR (thumbnail) | TBD | 4%+ | 6%+ |
| Website Traffic | TBD | 200/mo | 2,000/mo |

**LinkedIn**

| Metric | Current | Target (3mo) | Target (12mo) |
|--------|---------|--------------|---------------|
| Followers | TBD | 500 | 2,000 |
| Post Engagement | TBD | 3%+ | 5%+ |
| Profile Views | TBD | 100/week | 500/week |
| FFL Signups from LI | TBD | 5/mo | 20/mo |

**Action Items:**
- Track which content types perform best (market intel vs. education vs. engagement)
- Monthly audit: What worked, what flopped?
- Invest more in top-performing platforms

---

### Lead Generation Metrics

| Tool/Magnet | Metric | Target |
|-------------|--------|--------|
| **Basic Valuation Tool** | Signups/week | 300+ |
| | Activation (actually use tool) | 70%+ |
| | Tool → Upgrade | 3%+ |
| **Inheritor's Calculator** | Uses/week | 100+ |
| | Calculator → Form | 15%+ |
| **Content Upgrades** | Download rate | 8-12% |
| | Downloader → Open email 1 | 60%+ |
| **Landing Pages** | Conversion Rate | 5-10% |
| | Traffic sources | Track top 3 |

**Action Items:**
- A/B test tool CTAs ("Get Your Valuation" vs "See What It's Worth")
- Heatmap landing pages (where do users drop off?)
- Survey non-converters (exit-intent popup)

---

### Revenue Attribution

**Track in Spreadsheet:**

| Revenue Source | Jan | Feb | Mar | Q1 Total |
|----------------|-----|-----|-----|----------|
| Newsletter → Upgrade | - | - | - | - |
| Blog → Upgrade | - | - | - | - |
| Email Sequence → Upgrade | - | - | - | - |
| Social → Upgrade | - | - | - | - |
| InstaCash Offers | - | - | - | - |
| Niche Book Sales | - | - | - | - |
| **TOTAL** | - | - | - | - |

**How to Track:**
- UTM parameters on all links
- Klaviyo revenue attribution (built-in)
- GA goal tracking (upgrade = goal completion)

**Action Items:**
- Monthly revenue review: Which channel is ROI-positive?
- Double down on winners, kill losers

---

### What "Good" Looks Like (Weekly Scorecard)

**Green Light (On Track):**
- ✅ Newsletter sent on time
- ✅ 1+ blog post published
- ✅ Email sequences running (no broken links/errors)
- ✅ Social posts published (on schedule)
- ✅ New opt-ins > 800/week
- ✅ Newsletter open rate > 28%
- ✅ At least 1 InstaCash offer submitted

**Yellow Light (Needs Attention):**
- ⚠️ Newsletter delayed
- ⚠️ No blog post this week
- ⚠️ New opt-ins < 800/week
- ⚠️ Open rate < 25%
- ⚠️ Unsubscribe spike (>0.5%)

**Red Light (Emergency):**
- 🚨 Newsletter skipped 2+ weeks
- 🚨 Email sequences broken (not sending)
- 🚨 Website down / tools not working
- 🚨 New opt-ins < 500/week
- 🚨 Unsubscribe rate > 1%
- 🚨 Major negative feedback/complaints

---

## 7. Brand Voice & Messaging

### Voice Attributes

**Expert Friend:**
- Knowledgeable but not condescending
- Approachable but not casual
- "Let me show you" not "You should know"

**Trusted Authority:**
- 45 years of data (emphasize longevity)
- Facts over opinions
- "Here's what we're seeing" not "We think"

**Educator:**
- Teaching, not selling
- Context before pitch
- "Here's why this matters" before "Buy now"

**Market Insider:**
- Real-time intel
- Behind-the-scenes access
- "What we're tracking" not "Industry reports say"

---

### Do's and Don'ts

**DO:**
- ✅ Use data to back claims ("up 18% this quarter")
- ✅ Tell stories (inherited gun turns out to be worth $15K)
- ✅ Be specific ("Colt Python" not "revolver")
- ✅ Educate first, sell second
- ✅ Use plain language (avoid jargon)
- ✅ Acknowledge uncertainty ("estimated at $4,000-5,000")

**DON'T:**
- ❌ Hype or exaggerate ("AMAZING DEAL!")
- ❌ Create false urgency ("Buy now or miss out forever!")
- ❌ Use gun culture clichés ("From my cold dead hands")
- ❌ Make political statements
- ❌ Assume expertise ("As you know...")
- ❌ Be vague ("valuable gun" instead of specific model)

---

### Messaging Framework

**For Inheritors:**
- **Pain:** "I don't know what I have or what it's worth."
- **Solution:** "We'll walk you through every step, from safety to sale."
- **Proof:** "We've helped 10,000+ inheritors get fair value."

**For Collectors:**
- **Pain:** "I need accurate valuations for insurance/resale."
- **Solution:** "45 years of transaction data, updated quarterly."
- **Proof:** "180K+ firearms tracked, trusted by serious collectors."

**For FFLs:**
- **Pain:** "I'm guessing on trade-in values and losing margin."
- **Solution:** "Wholesale pricing data to confidently buy and sell."
- **Proof:** "1,400+ dealers use our data daily."

**For Appraisers/Insurance:**
- **Pain:** "I need defensible valuations for legal/insurance purposes."
- **Solution:** "Industry-standard valuations backed by decades of data."
- **Proof:** "Accepted by insurance companies and courts nationwide."

---

### Sample Messaging (Copy-Paste Ready)

**Homepage Hero:**
```
Headline: Know What Your Guns Are Worth
Subhead: 45 years of firearms valuation data. 180,000+ guns tracked. Trusted by collectors, dealers, and inheritors nationwide.
CTA: Get Your Free Valuation
```

**Inheritor Landing Page:**
```
Headline: Inherited Guns? You're Not Alone.
Subhead: From "What do I have?" to "What's it worth?" to "What should I do?" - we'll guide you through every step.
CTA: Start Here (Free Guide)
```

**FFL Landing Page:**
```
Headline: Stop Guessing. Start Using Data.
Subhead: Wholesale pricing for 180,000+ firearms. Increase your margins on every trade-in and collection purchase.
CTA: Try Free for 14 Days
```

**InstaCash Offer Page:**
```
Headline: Turn Guns Into Cash in 48 Hours
Subhead: Fair offers backed by 45 years of market data. No auctions, no fees, no hassle.
CTA: Get Your Offer Now
```

**Email Sign-Off (Consistent across all emails):**
```
Tom [Last Name]
Blue Book of Gun Values
45 years of firearms valuation data
bluebookofgunvalues.com

P.S. [Relevant PS based on email context]
```

---

## 8. Content Production System

### Roles & Responsibilities

**Content Lead (Troy or Designee):**
- Approve content calendar
- Final review on major pieces (pillar posts, niche books)
- Strategic direction (what topics to cover)

**Writer/Researcher:**
- Draft blog posts (following templates)
- Research market data for newsletter
- Write email sequence copy

**Designer:**
- Newsletter design (template + weekly)
- Social media graphics (interesting finds, data viz)
- Lead magnet PDFs (checklists, guides)

**Social Media Manager:**
- Daily posting (Twitter, Instagram)
- Community engagement (replies, DMs)
- Content repurposing (blog → social snippets)

**Email Marketing Specialist:**
- Klaviyo sequence setup
- A/B testing
- Performance analysis

---

### Weekly Production Schedule

**Monday:**
- Content meeting (30 min): Review last week, plan this week
- Assign blog topics, newsletter sections
- Draft social posts for Tuesday-Thursday

**Tuesday:**
- Publish blog post #1
- Social media posting
- Monitor engagement

**Wednesday:**
- Newsletter production (draft + design)
- YouTube video recording (if weekly)
- Social media posting

**Thursday:**
- Newsletter send (9am EST)
- Monitor open rates, fix issues
- Social media posting

**Friday:**
- Publish blog post #2 (if doing 2/week)
- YouTube video editing/publishing
- Social media posting
- Weekly metrics review (30 min)

---

### Content Calendar Template

**Spreadsheet Columns:**
- Date
- Content Type (Blog, Newsletter, Social, Email)
- Topic/Headline
- Target ICP (Inheritor, Collector, FFL, Appraiser)
- Status (Idea, Outlined, Drafted, Reviewed, Published)
- Owner
- CTAs (what are we asking readers to do?)
- Performance (traffic, conversions, engagement)

**Monthly View:**
- Week 1: Market Intelligence focus
- Week 2: Inheritor content focus
- Week 3: Collector education focus
- Week 4: FFL/dealer focus

---

### Templates & SOPs

**Create a "Templates" folder with:**

1. `blog-post-template.md` (structure for each pillar type)
2. `newsletter-template.html` (Klaviyo template)
3. `email-sequence-template.md` (structure for each sequence type)
4. `social-post-templates.md` (formats for each platform)
5. `lead-magnet-template.indd` (InDesign file for PDFs)
6. `youtube-description-template.txt` (SEO-optimized)
7. `landing-page-template.html` (reusable structure)

**Create an "SOPs" folder with:**

1. `how-to-write-newsletter.md`
2. `how-to-publish-blog-post.md`
3. `how-to-setup-email-sequence-klaviyo.md`
4. `how-to-post-social-media.md`
5. `how-to-track-metrics.md`

---

## 9. Quick-Start Action Plan (First 30 Days)

### Week 1: Foundation

**Day 1-2:**
- ✅ Set up Klaviyo email sequences (templates above)
- ✅ Create content calendar (next 8 weeks)
- ✅ Audit existing email list (clean invalid emails)

**Day 3-4:**
- ✅ Write first newsletter (publish Thursday)
- ✅ Set up Twitter/X account (if not exists)
- ✅ Create social media posting schedule

**Day 5:**
- ✅ Publish first blog post (Inheritor journey topic)
- ✅ Set up Google Analytics goals (track conversions)
- ✅ Create metrics tracking spreadsheet

---

### Week 2: Launch Sequences

**Day 6-7:**
- ✅ Launch Free → Paid sequence in Klaviyo
- ✅ Launch Inheritor sequence in Klaviyo
- ✅ Test all sequences (send to team first)

**Day 8-9:**
- ✅ Publish newsletter #2
- ✅ Write 3 Twitter threads (schedule for week 3)
- ✅ Create first lead magnet PDF (Inheritor's Checklist)

**Day 10:**
- ✅ Publish blog post #2
- ✅ Set up YouTube channel (if not exists)
- ✅ Record first YouTube video (script "How Gun Valuation Works")

---

### Week 3: Optimize

**Day 11-12:**
- ✅ Review week 1-2 metrics (what worked?)
- ✅ A/B test newsletter subject lines
- ✅ Publish newsletter #3

**Day 13-14:**
- ✅ Launch InstaCash email sequence
- ✅ Publish blog post #3
- ✅ Edit and publish YouTube video #1

**Day 15:**
- ✅ Create first landing page (Inheritor Journey)
- ✅ Set up UTM tracking on all links
- ✅ Weekly metrics review

---

### Week 4: Scale

**Day 16-17:**
- ✅ Publish newsletter #4
- ✅ Launch FFL onboarding sequence
- ✅ Create second lead magnet (Serial Number Decoder)

**Day 18-19:**
- ✅ Publish blog post #4
- ✅ Record YouTube video #2
- ✅ Repurpose blog content into 10 social posts

**Day 20:**
- ✅ Create InstaCash landing page
- ✅ Launch LinkedIn posting schedule
- ✅ 30-day metrics review (what's working, what's not?)

---

## 10. Appendix: Resources

### Tools Needed

**Email Marketing:**
- Klaviyo (already in use)

**Blog/Website:**
- WordPress or Laravel admin (existing)
- Google Analytics
- Google Search Console

**Social Media:**
- Buffer or Hootsuite (scheduling)
- Canva (graphics)

**Design:**
- Canva (lead magnets, social graphics)
- InDesign (niche books)

**Analytics:**
- Google Analytics
- Klaviyo analytics
- Spreadsheet for weekly tracking

**Video:**
- Camera/mic setup (YouTube)
- Editing software (DaVinci Resolve or Premiere)

---

### Competitors to Monitor

**Valuation:**
- GunBroker (auction comp data)
- Rock Island Auction (high-end market)
- GunsAmerica (price guide)

**Content:**
- The Firearm Blog (industry news)
- All Outdoors (collector content)
- American Rifleman (NRA publication)

**What to Track:**
- Their content topics (what's working for them?)
- Their CTAs (how do they monetize?)
- Their email cadence (subscribe to their lists)

---

### Further Reading

**Email Marketing:**
- "Email Marketing Rules" by Chad White
- "Made to Stick" by Chip & Dan Heath (storytelling)

**Content Strategy:**
- "Everybody Writes" by Ann Handley
- "Building a StoryBrand" by Donald Miller

**Conversion Optimization:**
- "Influence" by Robert Cialdini
- "Hooked" by Nir Eyal

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2026-01-28 | Initial playbook creation | Claude (Sonnet 4.5) |

---

**END OF PLAYBOOK**

This playbook is a living document. Update quarterly based on performance data and market changes.

For questions or revisions, contact: Troy VanMaanen (vanmaanenoa@gmail.com)
