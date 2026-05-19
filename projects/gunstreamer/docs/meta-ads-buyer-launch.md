# GunStreamer Meta Ads — Buyer/Viewer Launch (Meta-Safe Lean)

> **Last Updated:** 2026-05-19
> **Goal:** Drive newsletter / livestream-notification signups from end buyers (NOT FFL dealers).
> **Scope:** Meta-safe lean campaign. Jen/Jeff (first-timer) led, with softened Hank (rural) and Kyle (deal-hunter) as expansion. Marcus, Dale, and Trent stay off Meta entirely — they run on Google Search, Reddit, and YouTube per `GUNSTREAMER-GOOGLE-ADS-PLAYBOOK.md` and `buyer-ad-angles.md`.
> **Companion docs:** `~/Work/GunStreamer/docs/GUNSTREAMER-GOOGLE-ADS-PLAYBOOK.md` (Google buyer-side), `~/Work/GunStreamer/docs/facebook-ads-launch-set.md` (Meta dealer-side).
> **Research provenance:** `~/Work/GunStreamer/research/buyer-personas.md`, `buyer-pain-points.md`, `buyer-voc.md`, `buyer-ad-angles.md` (May 19 sprint).

---

## Scope Note (Read First)

Buyer-side Meta is the **highest-risk paid channel** in the entire GunStreamer marketing stack. Of the 18 buyer ad angles in `buyer-ad-angles.md`, only 3-4 reliably survive Meta review. This playbook deliberately stays inside that narrow lane.

- **Conversion goal:** Newsletter / notification signup ("Get notified when shows go live"). NEVER purchase, NEVER bid, NEVER shop.
- **Frame:** Entertainment / livestream platform — analogous to running a Twitch or YouTube subscription ad. We do not advertise firearms. We advertise the show.
- **Expectation:** 30-50% first-pass ad rejection on Meta. Have 1-2 backup ad accounts warm before launch.

Personas explicitly **out of scope** for Meta:

| Persona | Why excluded from Meta |
|---|---|
| Marcus (Vintage Collector) | Collector context forces firearm-product visual cues — Meta rejects |
| Dale (Estate Buyer) | "Auction," "buyer's premium," "estate" + firearm context = high rejection risk |
| Trent (NFA) | Any NFA-adjacent framing is auto-rejected on Meta. Search/Reddit only. |

Personas **in scope** for Meta:

| Persona | Role in this campaign | Meta Compliance Risk |
|---|---|---|
| Jen/Jeff (First-Timer) | PRIMARY — most ads target this persona | LOW |
| Hank (Rural) | SECONDARY — softened "from your couch" angle | LOW-MEDIUM |
| Kyle (Deal-Hunter) | TERTIARY — only the Whatnot benchmark / "vetted hosts" angle, never fee-stack-by-name | MEDIUM |

---

## Meta Compliance — Hard Rules

### Verbatim policy clauses (cite when appealing)
- **Source:** Meta Transparency Center — https://transparency.meta.com/policies/ad-standards/restricted-goods-services/weapons-ammunitions-explosives/
- **Verbatim clause:** "Ads must not promote the sale or use of weapons, ammunition, or explosives."
- **Our position:** This ad promotes a livestream entertainment platform, not weapons. The advertised landing page collects email signups for show notifications only. There are no product listings, no pricing, no buy/shop/bid functionality, no firearms imagery above the fold.

### Hard rules for every ad
1. **Zero firearm imagery.** No guns, no parts, no holsters, no ammunition, no magazines, no scopes, no suppressor outlines, no targets, no gun-show booths, no shooting-range backdrops.
2. **No commerce language.** No "buy," "sell," "shop now," "order," "bid," "browse inventory," "shop the drop."
3. **No banned keywords in ad copy or LP above-the-fold:** gun, firearm, weapon, ammo, ammunition, AR, AK, 9mm, rifle, pistol, handgun, shotgun, silencer, suppressor, magazine, 2A, Second Amendment, NFA, Class III, SOT, NICS, 4473, stamp, can.
4. **Safe vocabulary only:** live, livestream, show, host, audience, watch, tune in, notify me, get notified, lot, consignment, estate, demo, real-time, chat, presenter, federally-licensed retailers, regulated industry, small business, retail.
5. **Conversion event:** Email/SMS signup. Never a purchase event.
6. **Age-gate:** Set to 21+ on every ad set (reduces friction; not legally required for newsletter).
7. **Audience targeting:** No firearm interest layers (Meta scrubbed them — using them flags the campaign). Use lifestyle, education, outdoor, small-business layers instead.

### Expect rejections
- 30-50% of submitted ads will reject on first review. Submit 3-5 variants per ad set.
- Have backup ad accounts ready (a second business entity helps).
- Request review on every rejection — ~30% are reinstated.
- When a campaign performs, do NOT make major edits to the winning ad. Edits trigger re-review and frequent rejection of previously-approved ads.

---

## Campaign Architecture (Lean, 3-Stage)

```
┌──────────────────────────────────────────────────────────────┐
│  CAMPAIGN 1 — COLD AWARENESS (Jen/Jeff-led)                  │
│  Objective: Leads (lowest-cost newsletter signup)            │
│  Audience: Broad U.S. + lifestyle/education interest layer   │
│            + 1% Lookalike of newsletter signups (Phase 2)    │
│  Daily budget: $20-30                                        │
└──────────────────────────────────────────────────────────────┘
                       ↓ (engaged → tagged by pixel)
┌──────────────────────────────────────────────────────────────┐
│  CAMPAIGN 2 — MID-FUNNEL RETARGETING                         │
│  Audience: Video 25%+ viewers OR LP visitors who didn't      │
│            convert. Exclude existing newsletter subscribers. │
│  Daily budget: $10-15                                        │
└──────────────────────────────────────────────────────────────┘
                       ↓ (signed up but unengaged)
┌──────────────────────────────────────────────────────────────┐
│  CAMPAIGN 3 — POST-SIGNUP NURTURE (Show-launch reminders)    │
│  Audience: Newsletter subscribers who didn't tune into the   │
│            last 2 live shows. Run on stream-launch day.      │
│  Daily budget: $5-10 (event-triggered, not always-on)        │
└──────────────────────────────────────────────────────────────┘
```

**Starting daily spend: $35-55/day. Total Month-1 budget: ~$1,200-1,800.**

---

## Audience Setup

### Custom Audience #1 — Website Visitors (build immediately)
- **Source:** Meta Pixel on `live.gunstreamer.com` + any landing-page domain in use.
- **Retention:** 180 days
- **Exclude:** Newsletter signup completions (separate event)

### Custom Audience #2 — Video Viewers (build after first video ad live)
- **Source:** 25%+ video view on any cold-campaign ad
- **Retention:** 180 days

### Custom Audience #3 — Newsletter Signups (exclusion + nurture)
- **Source:** Anyone who completed the notification signup
- **Use:** EXCLUDE from cold + mid-funnel. INCLUDE in Campaign 3 nurture sends.

### Custom Audience #4 — Lookalike (Phase 2, after 500+ signups)
- **Source:** 1% Lookalike of Custom Audience #3
- **Geo:** U.S. only

### Cold Audience Layering (Campaign 1)

**Primary ad set: Broad U.S. + Lifestyle layer (Jen/Jeff)**
- Geo: U.S.
- Age: 25-55
- Interest layer (one of, NOT firearm-related):
  - "Outdoor recreation"
  - "Hunting" (Meta has not scrubbed this — it's broader than firearms)
  - "Camping"
  - "Self-defense" (lifestyle, NOT firearms)
  - "First responders" (audience overlap)
  - "Adult education"
- Behavior layer: "Engaged shoppers," "Likely to engage with political content (conservative)" — proxy for the audience without naming firearms

**Secondary ad set: Rural Geo (Hank)**
- Geo: U.S. — exclude metro areas with 250K+ pop
- Age: 35-65
- Interest layer: "Hunting," "Fishing," "Outdoor recreation," "Country lifestyle"
- Layer ZIP-code targeting to skip dense urban areas

**Tertiary ad set: Live-commerce viewer (soft Kyle)**
- Geo: U.S.
- Age: 25-50
- Interest: "Online shopping," "Live shopping," "Whatnot" (if available), "Twitch," "YouTube Live"
- Layer with engagement behavior: "Engaged shoppers"

**Do NOT use:** "Firearms," "Guns and ammunition," "Shooting sports," "NRA," "Concealed carry," "Hunting weapons." Any of these get the ad set flagged or scrubbed.

---

## Ad Concepts — 4 Hooks

Each hook ships with **static + video** unless noted. All four pull from `research/buyer-ad-angles.md`.

---

### HOOK A — "Sit in the Back. Watch. Learn." (Jen/Jeff Primary, Angle 8/16)

**Why it works:** This is the safest angle on Meta. The frame is education / lurker-friendly, not commerce. Solves "intimidated to walk into a gun shop" anxiety with a passive-watch format. Meta reviewers read it as adult education, not weapons.

#### A1 — Static

**Image direction:**
- Stylized illustration of a small theater-style audience, soft lighting, one figure in soft focus in the back row
- Or: A phone on a coffee table screen showing a chat-bubble icon and a "LIVE" badge — a hand reaching for it but not holding a product
- Or: Text-only on a warm cream background: "Lurk first. Decide later." Below in smaller: "GunStreamer livestreams." Below: logo + URL
- NO firearm. NO holster. NO target. NO scope. NO range backdrop.

**Primary text (above image):**
> New to live shows? You don't have to do anything. Sit in the back row of the chat. Read the conversation. Listen to the host. There's no pressure to participate, no pressure to buy.
>
> When you're ready, ask a question in the chat. Until then, just watch and learn.
>
> Free notification signup for beginner-friendly shows — no spam, no commitment.

**Headline (under image):**
`Sit in the Back. Watch. Learn.`

**Description (small text):**
`Beginner-friendly livestream alerts. Free signup.`

**CTA button:** `Sign Up`

**Destination:** `live.gunstreamer.com?utm_source=fb&utm_campaign=cold_jenjeff&utm_content=a1`

#### A2 — Video (15-20 sec)

**Format:** Square (1:1) for feed, 9:16 for Stories/Reels.

**Script:**
```
[0-3s]   Stylized illustration: a small theater audience, one figure
         in soft focus in the back row. On-screen text: "New here?"
[3-7s]   VO: "Sit in the back. Lurk. Read the chat. No pressure."
[7-12s]  VO: "When you're ready, ask. Until then, just watch."
[12-17s] Cut to: phone screen with a "LIVE" badge and chat bubbles.
         VO: "Beginner-friendly livestream alerts. Free signup."
[17-20s] End card: GunStreamer logo, "Get Notified — Free" CTA.
```

**Voiceover notes:** Warm, calm female or non-aggressive male voice. Think NPR, not auctioneer.

**Captions:** REQUIRED. Open captions, top-aligned. Most Meta video is watched muted.

**Primary text + headline + description:** Same as A1.

---

### HOOK B — "The Whatnot Audience Watches 95 Minutes a Day. The Format Works." (Soft Kyle + Universal, Angle 13)

**Why it works:** Borrows the most-cited live commerce datapoint (Whatnot's 95-min average daily watch time, 66% tune-in-for-access, 46% tune-in-for-entertainment) to validate the format without category-specific risk. Reads to Meta as a live-shopping platform ad, not a firearms ad.

#### B1 — Static

**Image direction:**
- Animated-looking still: a phone screen showing a "LIVE" badge, chat bubbles flowing, host face icon (waist-up silhouette, neutral background, no firearm)
- Or: Text-only graphic: large "95 MIN" with subtext "is how long live commerce viewers watch — every day."
- Or: A stylized "watch time graph" climbing hockey-stick

**Primary text:**
> Live commerce did $6B last year. The Whatnot audience watches 95 minutes a day. 66% tune in for access to product they can't find anywhere else. 46% tune in to be entertained.
>
> The format works. In categories the big platforms ignore, the dealers running live shows are growing 200% YoY.
>
> Get notified when our next live show goes on. Free signup.

**Headline:** `The Live Commerce Format Works. Now in Your Category.`

**Description:** `Free livestream notifications. No spam.`

**CTA button:** `Sign Up`

**Destination:** `live.gunstreamer.com?utm_source=fb&utm_campaign=cold_universal&utm_content=b1`

#### B2 — Video (20-25 sec)

**Script:**
```
[0-3s]  Bold text on dark background: "$6 BILLION."
[3-6s]  Subtext fades in: "in live commerce last year."
[6-10s] Cut to chart visualization: "Sneakers. Cards. Comics. Toys."
[10-14s] VO: "Sellers in those categories are growing 200% year over year."
[14-18s] On-screen text: "Now in your category."
[18-22s] Cut to phone with "LIVE" badge + chat bubbles.
         VO: "Get notified when the next show goes on."
[22-25s] End card: GunStreamer logo, "Get Notified — Free" CTA.
```

**Captions:** REQUIRED, animated to match on-screen text.

---

### HOOK C — "National Inventory. From Your Couch." (Hank Secondary, Angle 6 softened)

**Why it works:** Hank's pain (90-min drive to find anything good) is universal in rural America. The framing is "from your couch" — pure entertainment / livestream framing. The word "inventory" tests OK on Meta in this lifestyle context.

**Note:** On Meta we use the softer copy. The harder verbatim ("Three Drives for One Gun") stays on Reddit and Search per the channel-fit matrix.

#### C1 — Static

**Image direction:**
- Radar pulse graphic expanding from a single rural dot to cover a U.S. map. Phone in foreground showing a "LIVE" badge.
- Or: Photo of a couch + coffee table + phone in a rural-looking living room (curtains, wood paneling, no firearms-related decor). Phone screen shows "LIVE" badge.
- NO firearm anywhere in the frame.

**Primary text:**
> Your nearest decent shop is 90 minutes away. The drive is half a day. The local wall has 12 items, the same 12 items it had last month.
>
> Live shows aggregate national lots in one weekday window — every weekday. From your couch. No drive. No waiting until Saturday.
>
> Free notification signup. No spam.

**Headline:** `National Lots. From Your Couch.`

**Description:** `Free livestream notifications. Watch from anywhere.`

**CTA button:** `Sign Up`

**Destination:** `live.gunstreamer.com?utm_source=fb&utm_campaign=cold_hank&utm_content=c1`

#### C2 — Video (15-20 sec)

**Script:**
```
[0-3s]   Windshield-view shot of an empty rural highway at sunset.
[3-6s]   VO: "Your nearest decent shop is 90 minutes away."
[6-10s]  Cut to: same person on a couch with a phone showing "LIVE" badge.
         VO: "Live shows bring national variety to your couch."
[10-14s] VO: "Every weekday. From anywhere."
[14-18s] On-screen text: "Free notifications. No spam."
[18-20s] End card: GunStreamer logo, "Get Notified" CTA.
```

**Captions:** REQUIRED.

---

### HOOK D — "Live Shows. Vetted Hosts. No Buyer's Premium." (Soft Dale/Kyle Universal, Angle 12)

**Why it works:** Names the universal auction frustration (buyer's premium stack) WITHOUT naming a competitor and WITHOUT firearm vocabulary. Reads like a generic live-auction platform ad. Meta's eye drifts past it.

**Note:** This angle replaces Kyle's verbatim fee-stack hook ("1% comp fee, 1% marketplace fee, 18% premium") which is too auction-platform-specific for Meta. The verbatim version runs on Reddit and Search.

#### D1 — Static ONLY (no video for this hook — text-driven)

**Image direction:**
- A simple text graphic. Left side: "Legacy platforms: hammer price +25%." Right side: "Live shows: hammer price."
- Or: A stylized receipt with a fee line crossed out
- Or: A clean platform-UI screenshot with the bid amount visible and a green checkmark next to it
- NO firearm. NO auction-paddle photo (the abstract paddle icon is OK).

**Primary text:**
> Legacy auction platforms stack 15-25% buyer's premium on top of every hammer price. Plus shipping, packing, insurance, transfer fees.
>
> Live shows from vetted hosts don't work that way. Hammer price is the price.
>
> Free notification signup for upcoming shows. No spam.

**Headline:** `Hammer Price Is the Price.`

**Description:** `Free livestream notifications. No surprise fees.`

**CTA button:** `Sign Up`

**Destination:** `live.gunstreamer.com?utm_source=fb&utm_campaign=cold_premium&utm_content=d1`

---

## Campaign Settings (Meta)

### Campaign 1 — Cold

- **Objective:** Leads (or Conversions optimizing for `newsletter_signup` event after 50+ conversions on Leads)
- **Bid strategy:** Lowest cost
- **Optimization event:** `newsletter_signup`
- **Daily budget:** $20-30 (CBO at campaign level, NOT ad-set-level budgets)
- **Audiences (one per ad set):**
  - Ad Set 1: Broad U.S. + Lifestyle (Jen/Jeff primary) — Hook A
  - Ad Set 2: Live-Commerce Interest (universal) — Hook B
  - Ad Set 3: Rural Geo (Hank) — Hook C
  - Ad Set 4: Broad U.S. + Auction-Adjacent Interest — Hook D
- **Placements:** Feed + Stories + Reels (Instagram AND Facebook). DISABLE right column and Audience Network — they perform poorly for non-product B2C and consume budget on garbage placements.
- **Frequency cap:** Auto (Meta default)

### Campaign 2 — Mid-Funnel Retargeting

- **Audience:** Custom Audience — Video Viewers 25%+ AND Website Visitors who did NOT complete newsletter signup
- **Daily budget:** $10-15
- **Ads:** Hook A2 (Jen/Jeff video) + Hook B2 (Whatnot video) — repurpose the cold creatives
- **Frequency cap:** 3 impressions per week

### Campaign 3 — Post-Signup Nurture

- **Audience:** Custom Audience — Newsletter signups who did NOT engage with the last 2 live show emails (build via Klaviyo segment export)
- **Daily budget:** $5-10, **only run on show-launch days**
- **Ad:** Simple "live now / starting in 30 min" reminder. Hook A2 styling with countdown text overlay.
- **Frequency cap:** 5 per week

---

## Conversion Tracking Setup

### Pixel events to fire on `live.gunstreamer.com`
| Event | Fires on | Use |
|---|---|---|
| `PageView` | Every page load | Audience building |
| `Lead` (standard event) | Form submission | Primary conversion + audience exclusion |
| `ViewContent` | Lands on show schedule | Secondary engagement signal |
| Custom: `newsletter_signup` | Submit success | Use as optimization event for Conversions campaigns |

### Setup steps
1. Install Meta Pixel base code site-wide on `live.gunstreamer.com`
2. Configure `Lead` event on the thank-you page via Events Manager
3. Mark `Lead` and `newsletter_signup` as priority conversion events (Aggregated Event Measurement)
4. Verify all events firing via Pixel Helper Chrome extension BEFORE launching ads
5. Domain verify `gunstreamer.com` in Business Manager (and the LP subdomain if different)

---

## Asset Production Checklist (Before Launch)

### Hard prerequisites
- [ ] Landing page `live.gunstreamer.com` live, mobile-responsive, <3s load, no firearm imagery, no commerce buttons
- [ ] Meta Pixel installed and firing all events (verified via Pixel Helper)
- [ ] Meta Business Manager in good standing
- [ ] Ad account with credit card payment method, billing threshold raised to $250+ to avoid daily card hits
- [ ] Domain verification complete for `gunstreamer.com` + LP subdomain
- [ ] Aggregated Event Measurement: 8 events configured, `Lead` ranked top priority
- [ ] Backup ad account warmed (under a different business entity if possible) — set up at least 7 days before launch
- [ ] Klaviyo (or your ESP) connected — every signup auto-confirmed within 60 seconds

### Creative production
- [ ] **Hook A static (A1)** — Theater audience illustration OR phone on coffee table — designer ~2h or AI-gen
- [ ] **Hook A video (A2)** — 15-20 sec, captioned — AI tools (Veo / Runway / HeyGen) or simple Premiere
- [ ] **Hook B static (B1)** — "95 MIN" text graphic OR chart — designer ~1h
- [ ] **Hook B video (B2)** — 20-25 sec, captioned — AI-gen + animated text overlays
- [ ] **Hook C static (C1)** — Radar pulse map OR rural couch photo — designer ~2h or stock photo + overlay
- [ ] **Hook C video (C2)** — 15-20 sec, captioned — stock highway footage + couch shot
- [ ] **Hook D static (D1)** — Text graphic comparing legacy vs. live pricing — designer ~1h
- [ ] All assets exported in 3 aspect ratios: 1:1 (1080×1080), 4:5 (1080×1350), 9:16 (1080×1920) for Reels/Stories
- [ ] Captions burned into all video files (Meta autoplay is muted)

### Copy review
- [ ] Every headline, primary text, description run through the AVOID-keyword list
- [ ] No "buy," "shop," "order," "bid" anywhere in copy or LP above-the-fold
- [ ] No specific firearm models, calibers, or category names
- [ ] All UTMs match the table in this doc

---

## Launch Sequence

### Week 1 — Soft Launch
- Launch **Campaign 1 with Ad Set 1 only** (Jen/Jeff Broad + Hook A1 + A2) at $15/day
- Submit ads, expect 1-2 day review
- **Daily check:** approval status, CPM, CTR, conversion rate. NO budget changes.
- If A1 or A2 reject, request review with verbatim policy citation script (below). Submit a 3rd creative variant in parallel.

### Week 2 — Expand
- Add **Ad Set 2** (Live-Commerce Interest + Hook B1 + B2) at $10/day
- Total spend: ~$25-30/day
- Once Campaign 1 has 50+ conversions, switch optimization to `newsletter_signup`
- **First retargeting audience build** — Video Viewers 25%+, LP visitors who didn't convert

### Week 3 — Add Geo + Premium Hooks
- Add **Ad Set 3** (Rural Geo + Hook C1 + C2) at $10/day
- Add **Ad Set 4** (Auction-Adjacent + Hook D1) at $10/day
- Total spend: ~$45-50/day
- **Launch Campaign 2 (Mid-Funnel Retargeting)** at $10/day
- Begin Lookalike build process — wait until newsletter list hits 500+ signups

### Week 4 — Scale Winners, Kill Losers
- Identify winning ad set (lowest CPA, highest CTR over 7-day window)
- Scale winner +25% budget. NEVER scale more than 25% in 24h — Meta's algo punishes hard budget jumps
- Pause any ad set at 2x target CPA after 7+ days
- **Launch Campaign 3 (Post-Signup Nurture)** — runs only on show-launch days

### Ongoing (Month 2+)
- **Weekly:** Refresh 1-2 ad creatives per ad set to prevent fatigue
- **Bi-weekly:** Re-pull `buyer-voc.md` from active forum threads — buyer language shifts; refresh headlines against new verbatim quotes
- **Monthly:** Audit AVOID-keyword list, retest with policy review
- **Monthly:** Test 1 new persona-adjacent hook (carefully — most buyer angles still belong on Reddit/Search, not Meta)

---

## Performance Targets (First 90 Days)

| Metric | Target | Note |
|---|---|---|
| Daily ad spend (steady-state) | $40-60 | After 4-week ramp |
| Total impressions (90 days) | 1.5-3M | Broad-targeting drives high impression volume |
| CTR | 1.5-3% | Below 1% = creative fatigue or audience mismatch |
| Landing page conversion rate | 8-15% | Newsletter signup is high-intent; below 6% = LP issue |
| Cost per newsletter signup | $3-6 | Jen/Jeff cheapest, Hook D most expensive |
| **Newsletter signups (90 days)** | **1,500-3,000** | At $4 avg CPA, $4K-$6K total spend |
| Approval rate (first-pass) | 50-70% | Plan for 30-50% rejection; appeal yields ~30% reinstatement |
| Show tune-in rate from newsletter | 8-15% | Tracked in ESP, not in Meta |

**Why these are different from the dealer-side Facebook doc:** Dealer CPA is $150-300 per application (high LTV per win). Buyer CPA is $3-6 per signup (low LTV per signup but compounding LTV via stream-tune-in → bid → eventual purchase). Volume game, not high-ticket game.

---

## Rejection Protocol

### When an ad rejects
1. Read the policy reason in Events Manager — usually "Restricted goods and services: Weapons, ammunition, or explosives"
2. **Request review immediately** (~30% reinstated): "This ad promotes a livestream entertainment platform, not weapons. The advertised page collects email signups for stream notifications only. There are no product listings, pricing, or purchase functionality. Meta Transparency Center policy prohibits ads that 'promote the sale or use of weapons, ammunition, or explosives' (https://transparency.meta.com/policies/ad-standards/restricted-goods-services/weapons-ammunitions-explosives/) — this ad does neither. We request a manual review by a policy specialist."
3. While appeal is pending: launch the next creative variant from the asset list
4. Document the rejection: ad ID, creative file, rejection reason, appeal outcome. Pattern-match across rejections to find the trigger.

### When the entire ad account flags
1. Stop submitting new ads immediately
2. Activate **backup ad account** (the one you warmed pre-launch)
3. Submit a high-volume reinstatement request through Meta Business Help
4. If reinstatement fails — accept the account is dead, pivot to backup permanently
5. Consider: switch to a separate business entity for the backup account in case Meta cross-references

### Pre-launch rejection-rate-reducing tactics
- Set the LP age-gate to 21+ (even though newsletter doesn't legally require it)
- Submit each new ad in a new ad set rather than editing an approved ad (edits trigger re-review and can flip an approved ad to rejected)
- Use Reels-first creative when possible — Meta favors Reels and approval-rates skew higher
- Avoid the word "firearms" entirely above the fold on the LP. Use "live shows," "dealer streams," "licensed retailers."

---

## Backup Plan

If Meta consistently rejects:

| Channel | When to switch | Setup difficulty |
|---|---|---|
| **TikTok Ads** | Already harder than Meta. Try only if Meta dies. | Medium |
| **Reddit Ads** | r/Firearms, r/GunDeals, r/Hunting allow buyer-side notification ads in some configurations | Easy |
| **Bing/Microsoft Audience Network** | Native ads — looser firearm policy than Meta | Easy |
| **Rumble Ads** | Firearm-friendly platform, growing audience | Medium |
| **Direct YouTube creator sponsorships** | Pay creators for a 60-sec plug — bypass Meta entirely | Varies |
| **Email newsletter sponsorships** | Bearing Arms, AmmoLand, The Truth About Guns | Easy |

The buyer side is more channel-resilient than the dealer side because the audience consumes media in many places. Don't get attached to Meta — treat it as one channel among many.

---

## What I Need From You to Launch

1. **Sign-off on Hook A messaging** (or edits) — this is the primary cold creative
2. **Designer + budget for visual assets** (4 statics + 3 videos) — ~$300-500 freelance OR AI tools (~$100 in credits)
3. **Backup ad account warmed and ready** — must exist 7+ days before launch
4. **Landing page audit** — confirm zero firearm imagery, age-gate set to 21+, Pixel firing
5. **Klaviyo (or ESP) flow built** — instant confirm email + first 3 onboarding emails before any ad goes live
6. **Conversion event verified** — `Lead` + `newsletter_signup` both firing via Pixel Helper
7. **First show on the calendar** — Campaign 3 needs a stream-launch day to fire reminders against

---

## Status

**Launch-ready spec.** Hand to media buyer + designer + dev. Build time: 5-7 days from go.

The original buyer research (`research/buyer-personas.md`, `buyer-pain-points.md`, `buyer-voc.md`, `buyer-ad-angles.md`) is the source of truth. Any new buyer-language pulls or angle tests should update those files first, then refresh this playbook against the deltas.
