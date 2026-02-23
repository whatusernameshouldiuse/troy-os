# BBGV Lead Magnet Engine — Complete System Architecture
**"What's This Gun Worth Right Now?" Valuation Tool**
*Version 1.0 | Architecture: Cycle-Based Engine, Not Funnel*

---

## EXECUTIVE SUMMARY

One tool. Two audiences. One email gate. Infinite re-entry points.

The engine routes users by declared intent (buyer/seller) at the moment of email capture, then diverges into parallel nurture tracks that eventually converge — because every buyer is a future seller, and every seller who doesn't convert today is a buyer for the next thing. Nothing falls out. Everything cycles.

**Architecture Philosophy:**
- The valuation is the hook. The email is the asset. The intent signal is the router.
- Non-converters don't exit. They enter a lower-temperature loop and re-surface when the timing is right.
- ICO acceptances are testimonial machines. Every closed deal feeds acquisition.
- Cycle 1 is a data collection exercise disguised as a product.

---

# SECTION 1: FULL USER JOURNEY MAP

## 1.1 ENTRY POINTS (Top of Funnel)

Users arrive from any of these sources — all land on the same tool:

| Source | Intent Signal | Notes |
|--------|--------------|-------|
| Google organic ("Glock 19 value") | Mixed | SEO-optimized tool page |
| Google organic ("sell my gun") | Seller | Route directly to seller UX |
| BBGV.com internal traffic | Mixed | Existing database users |
| 180K email list reactivation | Mixed | Warm audience blast |
| Social/paid ads | Declared | Ad copy pre-qualifies intent |
| GunStreamer cross-promotion | Seller | High seller intent |
| Partner/affiliate links | Mixed | |

All traffic lands on: `bbgv.com/value` (canonical URL for the engine)

---

## 1.2 THE TOOL EXPERIENCE — STEP BY STEP

### STEP 1: THE HOOK (Pre-Gate)
**URL:** bbgv.com/value
**What they see:**
- Headline: *"What's This Gun Worth Right Now?"*
- Subhead: *"180,000+ firearms valued. Real market prices. Free."*
- Single search bar: Make / Model / Caliber (auto-complete from database)
- Social proof bar: "X valuations run today" (live counter)
- Two ghost CTAs below search: [I'm Buying] [I'm Selling] — clicking either pre-tags intent AND focuses the search

**Design note:** The search field is visible BEFORE the gate. User types their gun. This is the hook. They've invested. Now they want the answer.

**What happens technically:**
- User types gun model → autocomplete fires → they see their gun is in the database
- Message appears: *"Found it. Get your valuation — free."*
- THEN the gate appears

---

### STEP 2: THE EMAIL GATE (Low-Friction Capture)

**Gate trigger:** User selects their gun from autocomplete OR clicks search

**What they see:**
- Modal/inline form (not a new page — don't break momentum)
- Headline: *"Your valuation is ready."*
- Body: *"Enter your email to see [Gun Model] market value + condition breakdown."*
- Single field: Email address
- One radio: ○ I'm buying this  ● I'm selling this
- CTA button: [Show My Valuation]
- Trust line: *"No spam. No dealer calls. Just the number."*

**What gets captured:**
- Email address
- Intent signal: buyer or seller (radio button)
- Gun make/model/caliber (from search — stored as property)
- Timestamp
- Source/UTM parameters
- Session ID (for subsequent behavior tracking)

**Gate philosophy:** Value is shown AFTER email. But they've SEEN the gun is in the database (autocomplete confirm). This is not blind gating — they know the answer exists. The email is the key, not the lock.

---

### STEP 3: THE VALUATION RESULTS PAGE

**Immediately after email submit — they see the valuation.**

**All users see:**
- Gun make/model with image
- Condition grades: Poor / Fair / Good / Very Good / Excellent / New
- Market value range for each grade (min/max, current market)
- "Last updated" timestamp
- Trend indicator: ↑↑ / ↑ / → / ↓ (price trend vs 90 days ago)

**Buyer UI layer (if intent = buyer):**
- Banner: *"Is the price you're seeing fair?"*
- Condition selector: "The one I'm looking at is in [  ] condition"
- Shows: *"At [condition], $550 is [FAIR / HIGH / LOW] for this market."*
- CTA: [See Where to Buy at This Price] → links to GunStreamer listings
- Secondary CTA: [Get Alerts When Price Drops] → triggers price alert opt-in

**Seller UI layer (if intent = seller):**
- Banner: *"Want an offer — right now?"*
- ICO offer teaser: *"Based on this valuation, BBGV may be able to make you a cash offer today."*
- CTA (PRIMARY): [Get My InstaCash Offer] → ICO submission flow
- CTA (SECONDARY): [List It on GunStreamer Instead] → consignment path
- Small text: *"Takes 2 minutes. No obligation."*

**Both paths include:**
- "Save this valuation" (sends valuation to email — reinforces the email capture and delivers value in inbox)
- Social share: [Share This Valuation] (virality mechanism)
- "Run another valuation" (keeps them in the tool — each new valuation = more data + engagement)

---

### STEP 4A: BUYER PATH — POST VALUATION

**Buyer has seen the valuation. Now what?**

**Immediate (on-page):**
1. They use the condition tool to assess fairness
2. See GunStreamer listings link
3. Option: Set price alert (captures additional intent data)

**If they click [Set Price Alert]:**
- One more field: "Notify me when [Gun Model] drops below $____"
- This triggers: `buyer_price_alert_set` event in Klaviyo
- Enters: **BBGV-BUYER-ALERT** flow

**If they just close/bounce:**
- They're in: **BBGV-BUYER-NURTURE** flow (triggered by email capture + intent=buyer)
- They remain in the buyer segment

**Buyer's long game:** They buy the gun (from GunStreamer or elsewhere). Six months later, they want to sell it. The nurture sequence plants this seed repeatedly.

---

### STEP 4B: SELLER PATH — ICO SUBMISSION FLOW

**Seller has seen the valuation. Primary CTA is [Get My InstaCash Offer].**

**ICO Submission — 3-Step Micro-Form:**

*Step 1: Confirm the gun (pre-filled from valuation)*
- Make / Model / Caliber [pre-filled, editable]
- Condition (dropdown): Poor / Fair / Good / Very Good / Excellent
- Serial number (optional, shown as "helps us give a more accurate offer")

*Step 2: Photos (optional but incentivized)*
- "Add 1-3 photos for a more accurate offer"
- Mobile upload or skip
- Skip = offer with condition disclaimer

*Step 3: Contact + Confirm*
- Name [first, last]
- Phone (optional — shown as "for faster offer delivery")
- Zip code (required — affects offer due to state laws)
- [Submit for Offer]

**What happens after submit:**
- Klaviyo event: `ico_submission_completed`
- Enters: **BBGV-SELLER-ICO** flow
- User sees: *"Your offer request is in. Expect an email within [X hours/24 hours]."*
- Confirmation email fires immediately (see Klaviyo section)

---

### STEP 4C: SELLER PATH — CONSIGNMENT (FALLBACK)

**Triggered by:**
- Seller clicks [List It on GunStreamer Instead]
- Seller sees ICO offer and declines
- Seller doesn't complete ICO form

**Consignment onboarding:**
- Landing: GunStreamer listing flow
- Email capture if not already done (unlikely at this point)
- Klaviyo event: `consignment_interest_shown`
- Enters: **BBGV-CONSIGNMENT** flow

---

## 1.3 NON-CONVERTER LIFECYCLE — WHERE DO THEY GO?

**The doctrine: nobody falls out. Every non-converter enters a timed re-entry loop.**

### Buyer Non-Converter Timeline

| Day | Touch | Content | Goal |
|-----|-------|---------|------|
| 1 | Email: Valuation saved | "Here's the valuation you ran" (their specific gun, all condition grades, market trend) | Deliver value, reinforce email address |
| 3 | Email: Market context | "What's driving [gun model] prices right now?" — market education | Establish BBGV as authority |
| 7 | Email: Buyer's guide | "5 things to check before buying a used [make]" | Deepen trust, keep them thinking about the purchase |
| 14 | Email: Price update | "Prices for [gun model] moved since you checked" — re-engagement | Pull them back to tool, run another valuation |
| 30 | Email: GunStreamer listings | "3 [gun model]s for sale near you right now" (if GunStreamer has inventory) | Drive purchase action |
| 60 | Email: Soft lifecycle shift | "Own a [gun] already? Here's what it's worth today." — seed seller intent | Begin buyer→seller lifecycle transition |
| 90 | Email: Re-engagement or suppression | "Still looking for a [gun model]?" — with updated market price | Convert or suppress |
| 90+ | Segment: Long-term nurture | Monthly market update email (all guns valued) | Stay warm, low-frequency |

**If they run ANOTHER valuation at any point:** reset the clock, update the gun profile, re-enter active nurture.

---

### Seller Non-Converter Timeline (Didn't submit ICO)

| Day | Touch | Content | Goal |
|-----|-------|---------|------|
| 1 | Email: Valuation saved | Their gun's valuation + "ICO offer still available" CTA | Immediate re-engagement |
| 2 | Email: ICO explainer | "How InstaCash works — 3 steps, no dealer BS" | Remove objection (complexity/trust) |
| 5 | Email: Social proof | "John in TX sold his [similar gun] for $X — here's what he said" | Testimonial-driven nudge |
| 7 | Email: Market urgency | "[Gun model] prices are [up/down] this week — lock in your offer" | Real data-driven urgency |
| 14 | Email: Consignment alternative | "Not ready to sell outright? Here's GunStreamer consignment." | Capture the consignment path |
| 21 | Email: Second ICO CTA | "Your offer window is still open. Most sellers take 3 weeks to decide." | Normalize delay, re-engage |
| 30 | Email: Value reinforcement | "What your [gun] collection might be worth" — prompt multi-gun valuation | Expand engagement |
| 60 | SMS (if phone captured) or email | "Quick question: Still thinking about selling the [gun]?" | Personal-feeling re-engagement |
| 90 | Segment: Long-term seller nurture | Quarterly: "Market update for [gun model] — ICO still available" | Maintain optionality |

---

### Seller Who Viewed ICO But Didn't Accept (Declined Offer)

This is a HIGH-INTENT segment. Treat differently.

| Day | Touch | Content |
|-----|-------|---------|
| 1 | Email: Offer recap + "What would change your mind?" survey (1 question) | Learn the objection |
| 3 | Email based on survey response | Address specific objection (price? timing? trust?) |
| 7 | Email: Consignment pitch | "Keep more of the upside — list on GunStreamer" |
| 21 | Email: Updated offer | "Market moved. Your offer may have changed." (re-trigger ICO) |
| 45 | Email: FOMO/urgency | "We're pausing ICO for [gun category] next month — last chance" (only send if true) |
| 90 | Move to: long-term seller nurture | Monthly market update |

---

# SECTION 2: KLAVIYO ARCHITECTURE

## 2.1 PROPERTIES TO CAPTURE AT EMAIL GATE

These are the data points that make everything else possible. Capture them at the point of email submit.

**Profile Properties (stored on contact):**
```
bbgv_intent: "buyer" | "seller"
bbgv_last_gun_make: [string]
bbgv_last_gun_model: [string]
bbgv_last_gun_caliber: [string]
bbgv_last_valuation_date: [datetime]
bbgv_valuation_count: [integer]
bbgv_source_utm_medium: [string]
bbgv_source_utm_campaign: [string]
bbgv_zip_code: [string] (if captured in ICO flow)
bbgv_phone: [string] (if captured, for SMS)
bbgv_ico_submission_date: [datetime]
bbgv_ico_offer_amount: [float]
bbgv_ico_accepted: true | false | null
bbgv_consignment_interest: true | false
bbgv_price_alert_set: true | false
bbgv_price_alert_gun: [string]
bbgv_price_alert_threshold: [float]
```

**Events (tracked in Klaviyo via API):**
```
Valuation Completed — properties: gun_make, gun_model, intent, valuation_grade_shown
ICO Submission Completed — properties: gun_make, gun_model, condition, zip_code, has_photos
ICO Offer Viewed — properties: offer_amount, gun_model
ICO Offer Accepted — properties: offer_amount, gun_model, seller_name
ICO Offer Declined — properties: offer_amount, gun_model, decline_reason (if survey)
Consignment Interest Shown — properties: gun_model
Price Alert Set — properties: gun_model, threshold_price
Another Valuation Run — properties: gun_make, gun_model, intent (updates profile)
Testimonial Submitted — properties: rating, quote_approved, gun_model
```

---

## 2.2 SEGMENTS

### Core Intent Segments
| Segment Name | Definition |
|-------------|------------|
| `BBGV | Buyer Intent — Active` | bbgv_intent = buyer AND last valuation within 30 days |
| `BBGV | Buyer Intent — Cold` | bbgv_intent = buyer AND last valuation 30-90 days ago |
| `BBGV | Seller Intent — Active` | bbgv_intent = seller AND last valuation within 30 days |
| `BBGV | Seller Intent — Cold` | bbgv_intent = seller AND last valuation 30-90 days ago |
| `BBGV | Mixed Intent` | ran multiple valuations with different intent signals |

### Behavioral Segments
| Segment Name | Definition |
|-------------|------------|
| `BBGV | ICO Submitted` | Event: ICO Submission Completed (any time) |
| `BBGV | ICO Offer Viewed` | Event: ICO Offer Viewed (any time) |
| `BBGV | ICO Accepted` | bbgv_ico_accepted = true |
| `BBGV | ICO Declined` | bbgv_ico_accepted = false |
| `BBGV | ICO Pending` | ICO submitted, offer not yet accepted/declined |
| `BBGV | Consignment Interest` | bbgv_consignment_interest = true |
| `BBGV | Price Alert Set` | bbgv_price_alert_set = true |
| `BBGV | Multi-Valuation (2+)` | bbgv_valuation_count >= 2 (high engagement) |
| `BBGV | New — <7 Days` | bbgv_last_valuation_date within 7 days |

### Lifecycle Segments
| Segment Name | Definition |
|-------------|------------|
| `BBGV | Buyer→Seller Ready` | bbgv_intent = buyer AND bbgv_last_valuation_date > 60 days ago (seed seller intent) |
| `BBGV | Re-Engagement Target` | No email open in 60 days AND no valuation in 60 days |
| `BBGV | Champions` | ICO accepted AND testimonial submitted (use for social proof ads) |
| `BBGV | 180K Reactivation` | Pre-existing list, no bbgv_intent set (run reactivation campaign) |

---

## 2.3 FLOWS

### FLOW 1: BBGV-BUYER-WELCOME
**Trigger:** `Valuation Completed` event WHERE intent = buyer (first time)
**Goal:** Deliver value, establish authority, keep buyer in BBGV ecosystem

| Delay | Email | Subject Line | Content |
|-------|-------|-------------|---------|
| Immediate | Email 1: Valuation Delivered | "Your [Gun Model] valuation is here" | Their full valuation, all condition grades, market trend, condition assessment tool reminder |
| +2 days | Email 2: Buyer's Intelligence | "Before you hand over the cash for that [Gun Model]..." | What to look for physically, common fakes/issues, negotiation tips |
| +5 days | Email 3: BBGV Authority | "How we know what guns are worth (45 years of data)" | Authority piece. 180K valuations. The Blue Book legacy. Trust builder. |
| +7 days | Email 4: Price Alert CTA | "Set it and forget it: price alerts for [Gun Model]" | Drive price alert opt-in (additional data capture) |
| +14 days | Email 5: Price Update | "Update: [Gun Model] prices in the last 2 weeks" | Dynamic content showing price movement. Re-engage with fresh data. |
| +30 days | Email 6: GunStreamer Listings | "3 [Gun Model]s for sale right now" | Curated listings from GunStreamer inventory. Direct monetization. |
| +60 days | Email 7: Lifecycle Seed | "You bought the [Gun Model]. What's it worth now?" | Gentle seller intent seed. "Guns are assets. Here's yours." |
| +90 days | Email 8: Re-engagement | "Still hunting for a [Gun Model]?" | Updated market data. Survey: "Did you find what you were looking for?" [Yes, I bought it / Still looking / Changed my mind] |

**Branch at Email 8:**
- "Yes, I bought it" → Move to **BBGV-BUYER-TO-SELLER-LIFECYCLE** flow
- "Still looking" → Reset to Email 5 loop
- "Changed my mind" → Move to **BBGV-GENERAL-NURTURE**

---

### FLOW 2: BBGV-SELLER-ICO
**Trigger:** `ICO Submission Completed` event
**Goal:** Get offer viewed, accepted, or route to consignment

| Delay | Email | Subject Line | Content |
|-------|-------|-------------|---------|
| Immediate | Email 1: Submission Confirmed | "Got it — your [Gun Model] offer request is in" | Confirmation, what happens next, expected timeline, "add us to contacts" CTA |
| When offer generated (webhook trigger) | Email 2: Your Offer Is Ready | "Your InstaCash Offer: $[AMOUNT] for your [Gun Model]" | Offer amount, breakdown, how to accept, 72-hour window, consignment alternative |
| +24 hours (if no open) | Email 3: Offer Reminder | "Did you see your offer? $[AMOUNT] — expires soon" | Plain-text feel. Personal. Short. Just the offer and the button. |
| +48 hours (if no acceptance) | Email 4: Offer Expiry Warning | "24 hours left on your $[AMOUNT] offer" | Urgency. Also: "Not the number you expected? Let's talk." — adds reply-to for objection handling |
| If ACCEPTED → | Email 5: What's Next | "Offer accepted — here's how to send your [Gun Model]" | Shipping instructions, FFL info, payment timeline, excitement/warm tone |
| If DECLINED → | Branch to **BBGV-SELLER-DECLINED** | | |
| If expired (no action in 72hrs) → | Branch to **BBGV-SELLER-NURTURE** | | |

**BBGV-SELLER-DECLINED sub-branch (fires when ICO Offer Declined):**
| Delay | Email | Subject Line |
|-------|-------|-------------|
| Immediate | "Too low? Here's what affects your offer" | Explain valuation factors, invite resubmission with more photos |
| +1 day | Single-question survey | "What would make this work for you?" [Price was too low / Not ready to sell / Wanted to keep it / Other] |
| Survey response → | Personalized follow-up | Address specific objection |
| +7 days | Consignment pitch | "List it on GunStreamer — you set the price" |
| +21 days | "Market update — your offer may have changed" | Re-trigger ICO process |

---

### FLOW 3: BBGV-CONSIGNMENT
**Trigger:** `Consignment Interest Shown` event OR [List on GunStreamer] click
**Goal:** Convert to GunStreamer listing

| Delay | Email | Subject Line | Content |
|-------|-------|-------------|---------|
| Immediate | Email 1: How Consignment Works | "GunStreamer consignment — your gun, your price, our reach" | Process explainer, fees, timeline, what makes a great listing |
| +1 day | Email 2: Listing Best Practices | "Guns that sell in 7 days vs. 90 days — the difference" | Photo tips, description writing, price positioning |
| +3 days | Email 3: Success Story | "How [Name] sold a [similar gun] in 11 days on GunStreamer" | Testimonial-driven. Real outcome. |
| +7 days | Email 4: Get Listed CTA | "Ready to list your [Gun Model]? Takes 10 minutes." | Direct link to listing flow. Remove friction. |
| +14 days | Email 5: ICO Alternative | "Still haven't listed? Here's the instant-cash alternative" | Re-offer ICO. Some consignment intenders convert to ICO when reminded. |
| +30 days | Email 6: Check-In | "Did you sell the [Gun Model]? We'd love to know." | Survey. Gather data on lost conversions. |

---

### FLOW 4: BBGV-SELLER-NURTURE (Non-converter, never submitted ICO)
**Trigger:** `Valuation Completed` WHERE intent = seller AND no ICO submission within 7 days
**Goal:** Keep warm, surface ICO/consignment when timing is right

| Delay | Email | Subject Line | Content |
|-------|-------|-------------|---------|
| Day 7 | Email 1: The Market Update | "What's happening to [Gun Model] prices this week" | Data-driven. No hard sell. Authority play. |
| Day 14 | Email 2: How ICO Works | "No auction. No FFL hassle. Here's BBGV InstaCash." | Education + soft CTA |
| Day 21 | Email 3: Testimonial | "He had the same [gun] and got $[X] in 4 days" | Real story, specific numbers |
| Day 30 | Email 4: Urgency/FOMO | "We're buying [gun category] heavily right now — good time to sell" | Market-timing angle. Creates genuine urgency if true. |
| Day 45 | Email 5: Consignment mention | "Not ready to take a cash offer? You have options." | Introduce GunStreamer path |
| Day 60 | Email 6: Re-valuation invite | "Prices changed since you checked — run your [Gun Model] again" | Drive another valuation event, re-enter active segment |
| Day 90 | Email 7: Long-term check-in | "Still thinking about that [Gun Model]?" | Survey: "Are you still planning to sell?" [Yes / No / Already sold elsewhere] |

---

### FLOW 5: BBGV-BUYER-TO-SELLER-LIFECYCLE
**Trigger:** Profile property update (buyer confirmed purchase) OR 180+ days since buyer valuation
**Goal:** Convert buyer into seller when the time is right

| Delay | Email | Subject Line | Content |
|-------|-------|-------------|---------|
| Trigger | Email 1: Asset Frame | "Your [Gun Model] is an asset. Here's what it's worth today." | Run fresh valuation data. Reframe gun as liquid asset. |
| +7 days | Email 2: Seller Social Proof | "BBGV buyers who became sellers — and what they made" | Stories of people who bought, held, sold at profit |
| +14 days | Email 3: ICO Intro | "When you're ready, here's the fastest way to cash out" | Soft ICO introduction. No pressure. |
| +30 days | Email 4: GunStreamer intro | "Or if you want top dollar, here's GunStreamer" | Present both options. Let them choose. |
| +60 days | Merge into **BBGV-SELLER-NURTURE** | | |

---

### FLOW 6: BBGV-REACTIVATION-180K
**Trigger:** Manual send or segment trigger for pre-existing 180K list contacts with no bbgv_intent
**Goal:** Re-engage dormant list, capture intent signal, route into active flows

| Email | Subject Line | Content |
|-------|-------------|---------|
| Email 1 | "BBGV is now free — and it just got better" | Announce freemium. Tease the tool. Drive to valuation. |
| +3 days: Email 2 | "What's your [gun type] worth right now?" | Generic (no gun data yet). Drive to tool. Capture intent. |
| +7 days: Email 3 | "Still the most trusted name in gun values — here's why" | Authority piece. BBGV legacy. Trust rebuild for dormant contacts. |
| +14 days: Email 4 | "Last chance to see your free valuation" | Urgency/scarcity framing (the free tool is permanent, but this is the launch window) |
| Non-openers at Day 14 → | **BBGV-WIN-BACK** flow | Separate win-back with different subject lines |

---

### FLOW 7: BBGV-WIN-BACK
**Trigger:** No email open in 60 days AND no valuation event in 60 days
**Goal:** Re-engage or cleanly suppress to protect deliverability

| Email | Subject Line | Content |
|-------|-------------|---------|
| Email 1 | "We know. Inbox is noisy. This one's worth it." | Honest tone. One single CTA: run a valuation. |
| +7 days: Email 2 | "Quick question: still into firearms?" | Segmentation survey: [Yes, active shooter/collector] [I sold everything] [Just not interested right now] |
| +7 days: Email 3 | "This is our last message unless you want to stay" | Classic re-permission email. Saves list health. |
| No action → | Suppress from marketing sends | Protect deliverability. Don't kill the contact. |

---

### FLOW 8: BBGV-ICO-POST-CLOSE (Testimonial Engine)
**Trigger:** `ICO Offer Accepted` event + [X days after expected payment/shipment completion]
**Goal:** Generate testimonials automatically. Feed social proof engine.

| Delay | Email | Subject Line | Content |
|-------|-------|-------------|---------|
| Day 3 post-acceptance | Email 1: Payment Confirmation | "Payment sent for your [Gun Model]" | Practical. Confirm payment details. Warm, human tone. |
| Day 7 (after likely receipt) | Email 2: How'd It Go? | "How was your InstaCash experience?" | NPS-style 1-question survey (1-10 rating) with optional comment |
| Score 8-10 → | Email 3: Testimonial Request | "Mind if we share your experience?" | Request written quote + permission to use. Link to 1-minute form. |
| Score 5-7 → | Email 3: Improvement Survey | "Thanks for the honest feedback — what could we do better?" | Collect improvement data. No testimonial ask. |
| Score 1-4 → | Email 3: Recovery | "That's not okay — here's [Name] from our team" | Human escalation. Fix the problem. Protect reputation. |
| Testimonial submitted → | Auto-approve (if no red flags) OR Manual review queue | Push to tool landing page via webhook |

---

## 2.4 FLOW SUMMARY TABLE

| Flow Name | Trigger | Primary Goal | Length |
|-----------|---------|-------------|--------|
| BBGV-BUYER-WELCOME | Valuation + intent=buyer | Ecosystem lock-in | 8 emails / 90 days |
| BBGV-SELLER-ICO | ICO submission | Offer acceptance | 5 emails + branches |
| BBGV-CONSIGNMENT | Consignment interest | GunStreamer listing | 6 emails / 30 days |
| BBGV-SELLER-NURTURE | Seller valuation, no ICO | Warm + convert | 7 emails / 90 days |
| BBGV-SELLER-DECLINED | ICO declined | Save/recover | 5 emails + survey |
| BBGV-BUYER-TO-SELLER | Buyer lifecycle shift | Convert to seller | 4 emails / 60 days |
| BBGV-REACTIVATION-180K | 180K list, no intent | Capture intent signal | 4 emails / 14 days |
| BBGV-WIN-BACK | 60-day dormant | Re-engage or suppress | 3 emails / 21 days |
| BBGV-ICO-POST-CLOSE | ICO accepted | Testimonial generation | 3 emails / 10 days |

---

# SECTION 3: CONVERSION ARCHITECTURE

## 3.1 EMAIL GATE PLACEMENT: BEFORE OR AFTER VALUE?

**Decision: PARTIAL value before gate. Full value after.**

**What they see before email:**
- The gun is in the database (autocomplete confirmation)
- That a valuation EXISTS for their specific gun
- Social proof bar (X valuations run today)

**What they get after email:**
- Actual dollar ranges by condition
- Market trend data
- Buyer/seller specific tools (condition assessment, ICO offer)

**Why this works:**
- They've already invested (searched, found their gun)
- They know the answer exists — they just need the key
- Email = the key. Not a wall.
- Reduces "why should I give you my email" friction because they can see value is real

**What NOT to do:**
- Do NOT gate on a separate page — breaks momentum
- Do NOT ask for email with no signal of what they'll receive
- Do NOT show a price range blur (overdone, low trust)

---

## 3.2 MINIMUM FRICTION PATH TO ICO OFFER

**Goal: Seller who wants cash should get an offer request submitted in under 3 minutes.**

**Optimal ICO funnel:**

```
Valuation Results Page
    ↓
[Get My InstaCash Offer] (single click — already on results page)
    ↓
Step 1: Confirm Gun Details (pre-filled from valuation, 1 editable field: condition)
    ↓
Step 2: Add Photos (optional — "skip for now" always visible)
    ↓
Step 3: Name + Zip Code (2 fields only)
    ↓
[Submit] → Confirmation page → Email confirmation fires
```

**Friction reducers:**
- Pre-fill make/model from valuation (they already entered it)
- Condition dropdown (not free text)
- Photos are OPTIONAL — don't block submission
- Phone is optional — don't require it
- No account creation
- No FFL required at this stage (that's post-acceptance)
- Progress indicator: "Step 1 of 3" (reduces abandonment)

**Friction audit:** Count the required keystrokes from "I want an offer" to "offer submitted." Target: under 15 keystrokes for a returning user.

---

## 3.3 BUYER VS. SELLER ROUTING

**The single routing question:** "Are you buying or selling?" (radio button, in the email gate modal)

**This is not just UX — it's the data foundation of the entire system.**

| Signal | Klaviyo Property | Routing |
|--------|-----------------|---------|
| Buying | bbgv_intent = "buyer" | Buyer results UI → BBGV-BUYER-WELCOME flow |
| Selling | bbgv_intent = "seller" | Seller results UI → ICO CTA → BBGV-SELLER-ICO or BBGV-SELLER-NURTURE |

**Edge cases:**
- User changes intent on next visit → update bbgv_intent to new value, log both in event history
- User doesn't select → default to buyer (more common, lower commitment), can be updated by behavior

**On-page UI divergence:**
- Buyer: condition assessment tool, "is this price fair?", GunStreamer listings CTA
- Seller: ICO offer CTA (primary), consignment CTA (secondary), price trend for selling context

---

## 3.4 CONSIGNMENT FALLBACK PATH

**When ICO doesn't convert, consignment is the net:**

**Triggers for consignment path:**
1. Seller clicks [List on GunStreamer Instead] on valuation page
2. Seller submits ICO, views offer, clicks [No thanks, I'll sell it myself]
3. ICO offer expires without action → Day 7 email introduces consignment
4. Seller explicitly says "price too low" in feedback → consignment positioned as "you control the price"

**Consignment pitch differentiation from ICO:**
- ICO: Speed and certainty. Cash in hand fast. No hassle.
- Consignment: Control and upside. Set your price. Reach BBGV's buyer network.
- Framing: "ICO is for when you want it DONE. GunStreamer is for when you want MORE."

**Consignment conversion flow:**
- GunStreamer listing page (pre-filled with gun data from valuation)
- Photo upload (required for listing — more motivation to upload vs ICO)
- Price set by seller (BBGV provides "recommended list price" from valuation data)
- Listing published → confirmation → enters BBGV-CONSIGNMENT flow for support/close

---

## 3.5 BUYER → SELLER LIFECYCLE NURTURE

**The long game: every buyer is a future seller.**

**The insight:** The average gun owner holds a firearm for 18-36 months before considering sale. The buyer who used our tool today will want to sell in 2 years. If we're still in their inbox, we own that sale.

**Nurture mechanics:**
1. **At Day 60 of buyer flow:** First mention of "gun as asset" — normalized, not pushy
2. **At Day 180 (6 months):** "Updated valuation: your [Gun Model] is worth $X today"
3. **Annual:** "1 year ago you valued a [Gun Model]. Here's the current market."
4. **Triggered by price spike:** If gun category has a price spike event → "Your [Gun Model] just went up in value. Lock it in?"
5. **Triggered by life events:** "Black Friday" / "Tax season" campaigns framed as "make room for something new"

**The bridge email (Day 60):**
> Subject: "You bought the gun. Here's what it's worth now."
> Body: "BBGV tracks the value of firearms you've checked — including yours. The [Gun Model] you looked at [X months] ago is currently valued at [range]. If you ever want to sell, InstaCash can make you an offer in 24 hours. No rush — just wanted you to know the option exists."

This is not a pitch. It's a service. That's why it converts.

---

# SECTION 4: FEEDBACK LOOP DESIGN

## 4.1 ICO ACCEPTANCE → TESTIMONIAL PIPELINE (Automatic)

**The system:** Every ICO acceptance automatically enters BBGV-ICO-POST-CLOSE flow.

**Step 1: Trigger**
- Klaviyo webhook receives `ico_offer_accepted` event from internal CRM/platform
- Flow fires automatically — no human needed

**Step 2: Timing**
- Wait for payment/shipment completion (estimated via internal status, OR flat 7-day wait)
- Then send NPS survey email: 1-10 scale + optional comment

**Step 3: Routing by score**
- 8-10 → Testimonial request form (Typeform or simple embedded form)
  - Fields: First name, state, gun sold, quote (pre-filled with their comment), permission checkbox
  - Optional: Photo of check/payment (powerful social proof)
- 5-7 → Improvement survey → feed data to ops team
- 1-4 → Human escalation → resolve → optionally re-request testimonial if resolved

**Step 4: Testimonial ingestion**
- Approved testimonials → webhook → CMS on BBGV tool landing page
- Auto-publish to testimonial carousel on valuation tool page
- Flag for potential use in Klaviyo emails (BBGV-SELLER-NURTURE Email 3)
- Flag for potential use in paid ads (social proof ads — highest converting ad type)

**Step 5: The flywheel connection**
- Testimonials on tool page → increase conversion rate of email gate → more submissions → more ICO acceptances → more testimonials → repeat

**No human required in this loop.** The only touchpoints are: ops reviews the 1-4 scores, and marketing approves testimonials before publishing (should take <5 minutes per testimonial).

---

## 4.2 SOCIAL PROOF FEEDING BACK TO TOOL LANDING PAGE

**Dynamic social proof elements on tool page:**

| Element | Source | Update Frequency |
|---------|--------|-----------------|
| Testimonial carousel | Auto-submitted via ICO-POST-CLOSE flow | Real-time |
| "X valuations run today" counter | Database query | Real-time |
| "X guns sold via InstaCash this month" | ICO CRM data | Daily |
| "Average ICO payout this week: $X" | Aggregated ICO data | Weekly |
| Recent sale ticker: "[Name] in [State] sold [gun] for $[X]" | ICO closed deals | Real-time (with permission) |

**The recent sale ticker is the highest-converting element.** It combines specificity, recency, and social proof in one line. Get this built in Cycle 1.

---

## 4.3 CYCLE 2 VS. CYCLE 1 — WHAT IMPROVES

### Cycle 1 (Months 1-4): Build and Learn
**What you're doing:** Running the system, capturing data, observing where people drop off.
**What you don't know yet:** 
- Which email subjects convert best
- What ICO offer range causes acceptance vs. decline
- What objections sellers actually have
- Which buyer guns eventually become sellers
- What the buyer→seller conversion timeline actually is (assumption: 18-36 months)
- Whether the consignment path is real or a graveyard

**Cycle 1 outputs (data collected):**
- Email open rates by subject line
- Click-through rates on each email
- ICO submission rate (valuation → ICO submit)
- ICO acceptance rate (offer viewed → accepted)
- Survey data: why sellers declined
- Survey data: what buyers are looking for
- Segment size benchmarks
- Which gun categories have highest seller intent

### Cycle 2 (Months 4-8): Optimize with Data
**What changes:**

| Element | Cycle 1 | Cycle 2 |
|---------|---------|---------|
| Email subjects | Best-guess copy | A/B tested, winner-locked |
| ICO flow | 3-step form | Streamlined based on drop-off data |
| Seller nurture timing | Day 7, 14, 21... | Adjusted to actual behavior (maybe Day 3, 10, 25...) |
| Testimonials on page | 0-5 | 20-50 real stories |
| Recent sale ticker | Empty | Real data flowing |
| Offer pricing | Standard formula | Adjusted by gun category performance data |
| Ads (if running) | No testimonials available | Testimonial-based ads (typically 2-3x better CTR) |
| Consignment vs ICO split | Unknown | Optimize offer positioning based on actual preference data |
| Buyer→seller triggers | Time-based | Behavior-based (specific engagement signals) |

**Cycle 2 KPI target:** 30-50% improvement in ICO conversion rate vs. Cycle 1 baseline.

### Cycle 3 (Months 8-12): Momentum
- Referral mechanics introduced (ICO sellers refer friends)
- Testimonial ads running — CAC drops
- Content strategy built on actual buyer/seller language (from surveys)
- Predictive segments: "likely to sell in next 90 days" based on behavioral patterns
- Email content increasingly personalized (gun category, price tier, geography)

---

## 4.4 HOW THE SYSTEM GETS SMARTER WITH EACH CYCLE

**The feedback data map:**

```
ICO Accepted → Testimonial → Landing page social proof → Higher email gate conversion → More ICO submissions

Email surveys → Objection data → New email content addresses specific objections → Higher ICO acceptance rate

Buyer behavior data → Refined buyer→seller trigger timing → More seller conversions from buyer base

Valuation usage patterns → Identify high-intent gun categories → Focus ICO buying on categories that convert

Declined offer surveys → Pricing feedback → Adjust ICO formula for specific gun categories → Fewer declines
```

**The learning system (build this in Cycle 1):**
1. Weekly: Review email performance by flow. Flag underperformers.
2. Bi-weekly: Review ICO acceptance/decline rates. Survey response analysis.
3. Monthly: Segment performance review. Which segments are growing?
4. Monthly: Conversion rate review across all stages (see Section 5).
5. Quarterly: Full cycle retrospective. Feed learnings into Cycle 2 planning.

**Automation rule:** Set Klaviyo alerts for:
- Any email drops below 20% open rate → flag for review
- ICO acceptance rate drops below [baseline] → flag for offer review
- Win-back flow graduates more than X% to suppression → deliverability concern

---

# SECTION 5: METRICS & SUCCESS DEFINITION

## 5.1 THE CONVERSION FUNNEL — ALL STAGES

```
Tool Page Visitors
    ↓ [Email Gate Conversion Rate — target: 40-60%]
Email Captures
    ↓ [Seller Intent Rate — target: 35-45% of captures]
Seller Email Captures
    ↓ [ICO Submission Rate — target: 25-40% of seller captures within 30 days]
ICO Submissions
    ↓ [ICO Offer Acceptance Rate — target: 40-60% of submissions]
ICO Closed Deals
    ↓ [Testimonial Submission Rate — target: 30-50% of closed deals]
Testimonials Published
```

**And the buyer path:**
```
Buyer Email Captures
    ↓ [Price Alert Set Rate — target: 15-25%]
Active Buyer Engagements
    ↓ [GunStreamer Click Rate — target: 10-20%]
GunStreamer Traffic
    ↓ [Buyer → Seller Conversion Rate (long-term) — target: track at 6, 12, 18 months]
Future Seller Pipeline
```

---

## 5.2 KEY METRICS BY STAGE

### Stage 1: Tool Performance
| Metric | Cycle 1 Target | Definition |
|--------|---------------|------------|
| Tool page visits | Baseline capture | Track weekly |
| Email gate conversion rate | 40-60% | Emails captured / page visitors |
| Intent signal capture rate | 95%+ | Users who select buyer/seller / total captures |
| Buyer/seller split | Track (expect ~50/50 to 60/40 buyer lean) | |
| Valuation completions | = email captures (should be near 1:1) | |

### Stage 2: Email Engagement
| Metric | Cycle 1 Target | Definition |
|--------|---------------|------------|
| Welcome email open rate | 55-70% | (Benchmark: 45% for triggered welcome) |
| Buyer Welcome Flow CTR | 8-15% | Clicks per send in buyer sequence |
| Seller ICO Email 2 open rate | 60-75% | "Your offer is ready" — this is the critical email |
| Seller Nurture Email open rate | 25-35% | Ongoing nurture engagement |
| Unsubscribe rate | <0.5% per send | Above 1% = content/timing problem |

### Stage 3: ICO Conversion
| Metric | Cycle 1 Target | Definition |
|--------|---------------|------------|
| ICO submission rate | 25-40% of seller captures | Submitted within 30 days of valuation |
| ICO offer view rate | 85%+ of submissions | They submitted — make sure they see the offer |
| ICO acceptance rate | 40-60% of offer views | Primary revenue driver |
| ICO decline reason tracking | Capture on 100% of declines | Critical learning data |
| Time to offer acceptance | Track median | Is faster better? Probably yes. |
| Consignment path entry | Track % | Of non-ICO sellers, what % enter consignment? |

### Stage 4: Lifecycle
| Metric | Cycle 1 Target | Definition |
|--------|---------------|------------|
| Buyer re-valuation rate | 15-25% run 2nd valuation | High engagement signal |
| Buyer → seller conversion rate (90 days) | Track baseline | This will be low (expected) — it's a long-game metric |
| Testimonial submission rate | 30-50% of ICO closures | |
| Testimonial approval rate | 80%+ | Most testimonials from happy customers are usable |
| List health (active rate) | 30%+ engaged in 90 days | Opens or clicks in last 90 days |

---

## 5.3 LEADING INDICATORS FOR CYCLE 1 HEALTH

**Watch these in the FIRST 30 DAYS — they predict everything else:**

### Green Lights (Cycle Working)
- ✅ Email gate conversion >40% — the hook is working
- ✅ "Valuation Completed" events firing correctly in Klaviyo — tracking is healthy
- ✅ Seller ICO Email 2 ("Your offer is ready") open rate >55% — they want the offer
- ✅ At least 1 ICO acceptance in first 30 days — proof of concept
- ✅ Zero complaints about gun not being in database — database coverage is good
- ✅ Unsubscribe rate <0.5% across all flows — content is relevant

### Yellow Flags (Investigate)
- ⚠️ Email gate conversion <25% — landing page copy isn't connecting, or load speed issue
- ⚠️ Seller split <20% of captures — buyer skew is fine, but check if sellers are finding the tool
- ⚠️ ICO Email 2 open rate <40% — deliverability problem, check sender reputation
- ⚠️ ICO submission rate <15% — ICO form has too much friction, or offer isn't credible yet
- ⚠️ All survey responses say "price was too low" — ICO pricing formula needs recalibration

### Red Lights (Stop and Fix)
- 🔴 Email gate conversion <15% — fundamental UX problem
- 🔴 Spam complaint rate >0.1% — deliverability crisis, pause sends and investigate
- 🔴 0 ICO submissions in 14 days from seller captures — ICO CTA is broken or invisible
- 🔴 ICO acceptance rate <20% — offers are not competitive, buyers won't trust the tool

---

## 5.4 THE FLYWHEEL SIGNAL — WHEN IT'S SPINNING

**The flywheel is spinning when you see these three things simultaneously:**

1. **Organic testimonial requests outpace your capacity to publish them**
   - You have more testimonials coming in than you can review
   - This means ICO close volume is meaningful and the post-close flow is working

2. **Email open rates INCREASE over time instead of declining**
   - Normally lists decay. If open rates are flat or rising, the content machine is working
   - This means the nurture sequence is delivering real value and people are reading

3. **Re-valuation rate for buyer contacts starts exceeding 25%**
   - People are coming BACK to the tool without being prompted
   - This means the tool is habit-forming and BBGV is becoming the default reference

**The math behind the flywheel:**
- Testimonials → better tool page conversion (+5% CVR)
- +5% CVR → more email captures per month
- More captures → more ICO submissions → more revenue → fund more acquisition
- More acquisition → more testimonials → higher CVR → lower CAC
- Lower CAC → same budget buys more traffic → flywheel accelerates

**Conservative timeline:** Flywheel signals emerge in Cycle 3 (Month 8-12). First signals may appear as early as Month 4-5 if ICO volume is strong.

---

## 5.5 CYCLE 1 SUCCESS DEFINITION

**After 90 days, Cycle 1 is "healthy" if:**

| Metric | Threshold |
|--------|-----------|
| Total email captures | 2,000+ organic (from tool, not 180K reactivation blast) |
| ICO submissions | 200+ |
| ICO closures | 50+ |
| Published testimonials | 15+ |
| Seller intent email captures | 700+ |
| Buyer intent email captures | 1,300+ |
| Email flows all active and firing | 100% (no broken triggers) |
| Decline reason survey data | 50+ responses |
| 180K reactivation open rate | 20%+ (list is viable) |

**Cycle 1 is a data collection exercise.** Revenue is a bonus. The primary deliverable of Cycle 1 is:
1. All flows are live and converting
2. You know why sellers decline (objection data)
3. You have 15+ real testimonials
4. You know the actual email gate conversion rate (vs. assumption)
5. You've identified which gun categories have highest ICO intent

Feed all of that into Cycle 2. Then it gets fast.

---

# APPENDIX A: TECH STACK REQUIREMENTS

| Component | Tool | Notes |
|-----------|------|-------|
| Email marketing + flows | Klaviyo | Already in use |
| Event tracking (API) | Klaviyo API | Fire events on each key action |
| Valuation tool (front-end) | Custom or Webflow | Must support inline gate modal |
| ICO form | Custom or Typeform embedded | 3-step, pre-fill from valuation data |
| Testimonial form | Typeform | Simple, mobile-friendly |
| Testimonial CMS | Webflow CMS or custom | Webhook-triggered from Klaviyo |
| Real-time counters | Custom JS + backend query | "X valuations today" counter |
| Recent sales ticker | Custom JS + ICO CRM webhook | Requires ICO deal data |
| UTM tracking | Standard UTM params → Klaviyo | Capture source at gate |
| Phone (SMS) | Klaviyo SMS or Postscript | For high-intent seller follow-up |

---

# APPENDIX B: KLAVIYO IMPLEMENTATION CHECKLIST

**Week 1 — Foundation:**
- [ ] Create all 9 custom profile properties
- [ ] Set up API event tracking for 10 key events
- [ ] Create 14 segments
- [ ] Test event firing with staging tool

**Week 2 — Core Flows:**
- [ ] BBGV-BUYER-WELCOME (8 emails)
- [ ] BBGV-SELLER-ICO (5 emails + branches)
- [ ] BBGV-SELLER-NURTURE (7 emails)

**Week 3 — Secondary Flows:**
- [ ] BBGV-CONSIGNMENT (6 emails)
- [ ] BBGV-SELLER-DECLINED (5 emails)
- [ ] BBGV-ICO-POST-CLOSE (3 emails + survey integration)

**Week 4 — Lifecycle + Reactivation:**
- [ ] BBGV-BUYER-TO-SELLER (4 emails)
- [ ] BBGV-REACTIVATION-180K (4 emails)
- [ ] BBGV-WIN-BACK (3 emails)
- [ ] Connect testimonial webhook → landing page CMS
- [ ] Set up metric alerts in Klaviyo

**Pre-launch QA:**
- [ ] All flows have correct trigger logic
- [ ] All segments populate correctly with test data
- [ ] All email links tracked with UTMs
- [ ] Profile properties updating correctly from events
- [ ] Suppression logic for win-back is correct
- [ ] ICO post-close flow fires on correct webhook payload

---

*Document: BBGV Lead Magnet Engine Architecture v1.0*
*Ready for build.*
