# Rentagun Marketing Playbook

**Last Updated:** 2026-02-05
**Status:** Active - Operations plugin v1.3.0, Gun Finder quiz built
**Purpose:** Actionable marketing templates, sequences, and strategies for growing Rentagun

---

## Table of Contents
1. [Content Calendar Template](#content-calendar-template)
2. [Email Sequences](#email-sequences)
3. [Social Media Strategy](#social-media-strategy)
4. [Campaign Templates](#campaign-templates)
5. [Metrics & KPIs](#metrics--kpis)

---

## Brand Voice Reference

**DO:**
- Straight-shooter, honest, no BS
- "Try before you buy"
- "Stop researching, start shooting"
- "Rent it Saturday, decide Sunday"
- Focus on solving real problems (wrong purchase, buyer's remorse)

**DON'T:**
- "Netflix of guns" (overused, meaningless)
- Political statements (stay neutral)
- Over-promise (keep it real)
- Technical jargon without context

---

## Content Calendar Template

### Monthly Themes

| Month | Theme | Focus |
|-------|-------|-------|
| **January** | New Year, New Guns | Resolution content, first-time buyers |
| **February** | Valentine's Day Experiences | Couples shooting, gift experiences |
| **March** | Spring Range Season | Warm weather shooting prep |
| **April** | Tax Refund Season | "What to do with your refund" |
| **May** | Memorial Day / Summer Prep | Patriotic content, summer shooting |
| **June** | Father's Day Experiences | Gift subscriptions, dad-focused |
| **July** | 4th of July / Summer Peak | Bucket list guns, experience content |
| **August** | Back to School (Budget) | Budget-conscious rental vs buy |
| **September** | Fall Hunting Prep | Hunter ICP focus, specialty rifles |
| **October** | Halloween / Zombie Guns | Fun content, pop culture guns |
| **November** | Thanksgiving / Black Friday | Gift subscriptions, holiday promos |
| **December** | Holiday Experiences | Experience gifts, year-end content |

### Weekly Content Structure

**Monday:** Educational/Problem-Solving
- "How to choose between X and Y"
- "What to know before buying your first..."
- Consideration content for The Considerer ICP

**Tuesday:** Inventory Spotlight
- Feature 1-2 guns from catalog
- Why someone would rent this
- Real use cases

**Wednesday:** Customer Story / UGC
- Rental experience stories
- Before/after decision content
- "I rented X, here's what I learned"

**Thursday:** Quick Tips / Hacks
- Range tips
- Maintenance basics
- Shooting improvement content

**Friday:** Weekend Inspiration
- "Rent it Saturday, decide Sunday"
- Weekend shooting plans
- Experience-focused content

**Saturday:** Behind-the-Scenes
- Inventory prep
- How the rental process works
- Trust-building transparency

**Sunday:** Community / Engagement
- Polls: "Which would you rent first?"
- Questions: "What's on your bucket list?"
- UGC reshares

---

## Email Sequences

### 1. Welcome Sequence (New Subscriber)

**Goal:** Introduce brand, build trust, drive first rental

#### Email 1: Welcome (Immediate)
**Subject:** Welcome to Rentagun - Try Before You Buy

```
Hey [First Name],

Welcome to Rentagun.

You just joined the first national try-before-you-buy firearm rental service. No more buying blind. No more buyer's remorse.

Here's how it works:
1. Pick a gun from our catalog (~216 options)
2. We ship it to your FFL
3. You shoot it for 7 days
4. Decide: buy it or send it back

Your rental fee applies to purchase if you fall in love.

NEXT STEP: Take our 2-minute quiz to find your perfect first rental.
[CTA: Take the Quiz]

Questions? Hit reply. I read every email.

Troy
Founder, Rentagun

P.S. Not sure where to start? Most new members rent [Popular Gun] first.
```

**Klaviyo Setup:**
- Trigger: Subscribed to list
- Wait: 0 minutes
- Metric: Welcome Email Sent

---

#### Email 2: Social Proof (Day 2)
**Subject:** "I was going to buy the Glock 19, but..."

```
[First Name],

Real story from last week:

"I was 100% set on buying a Glock 19. Everyone recommended it. Then I rented it through Rentagun.

Turns out, my hands are too small. The grip didn't feel right. I ended up renting a P365XL next and THAT was perfect.

Saved me from a $600 mistake."
- Mike T., Birmingham

That's exactly why Rentagun exists.

Ready to find YOUR perfect gun?
[CTA: Browse Rentals]

Troy
```

**Klaviyo Setup:**
- Wait: 2 days
- Condition: Has not placed order
- Metric: Social Proof Sent

---

#### Email 3: Quiz Reminder (Day 4)
**Subject:** Still researching? Stop. Start shooting.

```
[First Name],

Quick question: How many hours have you spent researching guns online?

Reddit threads. YouTube reviews. Forum debates.

Here's the truth: You won't know until you shoot it.

That's why we built the quiz. 2 minutes. 10 questions. We'll match you with 3 guns to try first.

[CTA: Take the Quiz]

Once you know what you're looking for, picking your first rental takes 5 minutes.

Rent it Saturday. Decide Sunday.

Troy

P.S. Our most popular starting rentals:
- Glock 19 (the everyone recommends it)
- Sig P365XL (the fits everyone)
- Desert Eagle .50 AE (the bucket list)
```

**Klaviyo Setup:**
- Wait: 4 days from Email 2
- Condition: Has not completed quiz AND has not placed order
- Metric: Quiz Reminder Sent

---

#### Email 4: Objection Handler (Day 7)
**Subject:** "What if I don't like it?"

```
[First Name],

Most common question I get: "What if I rent a gun and don't like it?"

Perfect. That's the point.

Better to find out in 7 days of shooting than after dropping $800 at the gun store.

You're not committing to anything. You're gathering real-world data.

Here's what happens:
- Don't like it? Send it back. Try something else next time.
- Love it? Keep it. Your rental fee applies to purchase.
- Unsure? Send it back. Think about it. No pressure.

The only wrong decision is buying blind.

[CTA: Start Your First Rental]

Troy

P.S. Average member tries 2-3 guns before buying. That's normal. That's smart.
```

**Klaviyo Setup:**
- Wait: 7 days from Email 3
- Condition: Has not placed order
- Metric: Objection Handler Sent

---

#### Email 5: Limited Inventory Push (Day 10)
**Subject:** [Gun Name] back in stock (won't last)

```
[First Name],

Heads up: [Popular Gun] just came back from a rental.

Available for the next 7 days (probably less - it books fast).

If you've been waiting to try this one, now's your shot.

[CTA: Reserve [Gun Name]]

Troy

P.S. Our most-rented guns book out 2-3 weeks in advance. If you see something available, grab it.
```

**Klaviyo Setup:**
- Wait: 10 days from Email 4
- Condition: Has not placed order
- Use dynamic product block for currently available popular guns
- Metric: Inventory Urgency Sent

---

### 2. Abandoned Cart Sequence

**Goal:** Recover lost checkouts with objection handling

#### Email 1: Cart Reminder (1 Hour)
**Subject:** You left [Gun Name] in your cart

```
[First Name],

You were about to rent the [Gun Name].

Something came up? No problem. Your cart is saved.

[CTA: Complete Your Rental]

Questions before you book? Hit reply.

Troy
```

**Klaviyo Setup:**
- Trigger: Started Checkout (not completed)
- Wait: 1 hour
- Metric: Abandoned Cart - 1 Hour

---

#### Email 2: Objection Handler (24 Hours)
**Subject:** Still thinking about the [Gun Name]?

```
[First Name],

I saw you were looking at the [Gun Name] yesterday.

What's holding you back?

Common concerns I hear:
- "What if it's not available when I want it?" → You pick your dates after checkout
- "What if I don't like it?" → Perfect. That's exactly what the rental is for
- "What if I damage it?" → Normal wear is expected. You're covered.

Need help deciding? Reply to this email. I read every one.

[CTA: Reserve Your Rental]

Troy

P.S. That [Gun Name] has been in 3 other carts in the past 24 hours. Just saying.
```

**Klaviyo Setup:**
- Wait: 24 hours from Email 1
- Condition: Cart still abandoned
- Metric: Abandoned Cart - 24 Hour

---

#### Email 3: Social Proof (48 Hours)
**Subject:** What others said about the [Gun Name]

```
[First Name],

You're not the only one considering the [Gun Name].

Here's what recent renters said:

"[Testimonial about this specific gun if available, otherwise general testimonial]"

Still on the fence? That's what the rental is for.

7 days of range time will tell you everything you need to know.

[CTA: Complete Your Rental]

Troy
```

**Klaviyo Setup:**
- Wait: 48 hours from Email 2
- Condition: Cart still abandoned
- Metric: Abandoned Cart - 48 Hour

---

### 3. Post-Rental Sequence

**Goal:** Convert rental to purchase or next rental

#### Email 1: How Was It? (2 Days After Return)
**Subject:** So... what did you think of the [Gun Name]?

```
[First Name],

Your [Gun Name] rental is complete.

Quick question: What did you think?

[CTA: Leave a Review]

If you loved it, I can send you a purchase link (your rental fee applies).

If you didn't, no worries. Want to try something else? Reply and tell me what you're looking for.

Troy

P.S. Most members try 2-3 guns before making a decision. You're right on track.
```

**Klaviyo Setup:**
- Trigger: Return Received (custom event)
- Wait: 2 days
- Metric: Post-Rental Feedback Request

---

#### Email 2: Purchase Offer (Day 5)
**Subject:** Ready to make the [Gun Name] yours?

```
[First Name],

You spent 7 days with the [Gun Name].

If you're ready to buy it, I can set that up today.

Your $[Rental Fee] rental fee will apply to the purchase price.

[CTA: Purchase Your Rental]

Not quite ready? Take your time. This offer is good for 30 days.

Troy

P.S. If the [Gun Name] wasn't the one, what are you looking for next? Hit reply - let's find your perfect match.
```

**Klaviyo Setup:**
- Wait: 5 days from Email 1
- Condition: Has not purchased rental gun
- Metric: Purchase Offer Sent

---

#### Email 3: Next Rental Suggestion (Day 10)
**Subject:** Based on the [Gun Name], you might like these...

```
[First Name],

Since you rented the [Gun Name], here are three guns other members tried next:

1. [Similar Gun Option 1] - [Why it's similar/different]
2. [Similar Gun Option 2] - [Why it's similar/different]
3. [Similar Gun Option 3] - [Why it's similar/different]

[CTA: Browse Similar Rentals]

Still figuring out what you want? Perfect. That's what we're here for.

Troy

P.S. Your next rental is ready whenever you are. No rush.
```

**Klaviyo Setup:**
- Wait: 10 days from Email 2
- Condition: Has not placed new order
- Use dynamic recommendations based on rental history
- Metric: Next Rental Suggestion

---

### 4. Win-Back Sequence (Inactive Subscribers)

**Goal:** Re-engage subscribers who haven't rented in 60+ days

#### Email 1: We Miss You (Day 60)
**Subject:** [First Name], you still shooting?

```
[First Name],

It's been a minute since your last rental.

Life gets busy. Ranges get crowded. Plans change.

But if you've been thinking about trying another gun, we've added [X new guns] to the catalog since you were here last.

[CTA: See What's New]

Troy

P.S. If you're not interested anymore, no hard feelings. You can unsubscribe below.
```

**Klaviyo Setup:**
- Trigger: No order in 60 days
- Condition: Previously placed at least 1 order
- Metric: Win-Back - 60 Days

---

#### Email 2: New Inventory Alert (Day 70)
**Subject:** You asked for it: [New Gun] now available

```
[First Name],

Remember when everyone was asking for the [New Popular Gun]?

We got one.

You're getting first access before we announce it publicly.

[CTA: Reserve [New Gun]]

Available for next 7 days only.

Troy

P.S. If this isn't your style, reply and tell me what you're looking for. I'm always hunting for new inventory.
```

**Klaviyo Setup:**
- Wait: 10 days from Email 1
- Condition: Still no order
- Feature newest/most popular inventory
- Metric: Win-Back - New Inventory

---

#### Email 3: Discount Offer (Day 80)
**Subject:** Come back? Here's $20 off your next rental.

```
[First Name],

Last shot (pun intended):

If you come back and rent something in the next 7 days, I'll knock $20 off.

Use code: COMEBACK20

[CTA: Browse Rentals]

If you're done with Rentagun, I get it. No hard feelings. You can unsubscribe below.

But if you've just been busy, this is your reminder: stop researching. Start shooting.

Troy
```

**Klaviyo Setup:**
- Wait: 10 days from Email 2
- Condition: Still no order
- Create discount code: COMEBACK20 (Valid 7 days)
- Metric: Win-Back - Discount Offer

---

## Social Media Strategy

### Platform Priorities

#### 1. Instagram (Primary - 50% of effort)
**Why:** Visual platform, lifestyle content, experience-focused
**Target:** Experience Seekers, New Gun Owners

**Content Mix:**
- 40% Educational (How-to, comparisons, tips)
- 30% Inventory Showcase (Gun features, specs, use cases)
- 20% UGC/Customer Stories (Reshares, testimonials)
- 10% Behind-the-Scenes (Process, team, inventory prep)

**Posting Frequency:**
- Feed: 5x/week (Mon, Tue, Wed, Fri, Sun)
- Stories: Daily (2-3 per day)
- Reels: 3x/week (prioritize high-engagement format)

**Content Types:**
- Reels: Gun comparisons, "try vs buy" content, range day footage
- Carousel: Educational posts (step-by-step guides, comparison charts)
- Stories: Daily engagement (polls, Q&A, behind-the-scenes)

---

#### 2. YouTube (Secondary - 25% of effort)
**Why:** Long-form education, SEO value, evergreen content
**Target:** The Considerer (deep research phase)

**Content Pillars:**
1. **Rental Experience Videos** (POV of the rental process)
2. **Gun Comparison Series** ("Glock 19 vs Sig P365: Which Should You Try First?")
3. **Customer Stories** (Interview-style rentals-to-purchase stories)
4. **Educational Content** ("How to Choose Your First Handgun")

**Posting Frequency:** 1-2x/week

**Video Structure:**
- 0:00-0:15 Hook (The problem)
- 0:15-0:45 Why it matters
- 0:45-[end] Solution/Education
- [end] CTA (Try it yourself)

---

#### 3. Facebook (Secondary - 15% of effort)
**Why:** Older demographic, community groups, event promotion
**Target:** Hunters, Considerers (older demographic)

**Content Mix:**
- Cross-post from Instagram (top performers)
- Hunting season content (Fall focus)
- Event announcements (SHOT Show, range days)
- Educational long-form posts

**Posting Frequency:** 3x/week

**Facebook Groups Strategy:**
- Join 10-15 relevant groups (firearm enthusiasts, local shooting clubs)
- Participate authentically (answer questions, share expertise)
- Mention Rentagun only when directly relevant
- NO spam posting

---

#### 4. Twitter/X (Tertiary - 10% of effort)
**Why:** Real-time engagement, industry news, quick hits
**Target:** Industry insiders, enthusiasts

**Content Mix:**
- Quick tips (single-tweet value)
- Inventory alerts ("Desert Eagle back in stock")
- Retweet industry news with commentary
- Engagement with influencers/brands

**Posting Frequency:** 3-5x/week

---

### Engagement Tactics

#### Daily Engagement Routine (15 minutes/day)

**Morning (10 min):**
1. Respond to all comments from yesterday (Instagram, Facebook)
2. Check DMs and reply
3. Like/comment on 10 posts from followers
4. Like/comment on 5 posts from target influencers

**Evening (5 min):**
1. Respond to new comments from today
2. Check DMs
3. Reshare 1-2 UGC stories (if available)

#### Weekly Engagement Goals
- 50+ comments on other accounts
- 100% response rate on comments/DMs within 24 hours
- 3-5 UGC reshares

---

### Content Templates

#### Template 1: Inventory Spotlight (Instagram Carousel)

**Slide 1:** Gun photo + "Should you rent the [Gun Name]?"

**Slide 2:** Specs
- Caliber: [X]
- Capacity: [X]
- Weight: [X]
- MSRP: $[X]

**Slide 3:** Best For
- [Use Case 1]
- [Use Case 2]
- [Use Case 3]

**Slide 4:** "Try it first"
"Why buy blind? Rent the [Gun Name] for 7 days. Your rental fee applies to purchase if you love it."
[CTA: Link in bio]

**Caption Template:**
```
The [Gun Name]. [One-sentence hook about why it's interesting].

Most people buy this blind based on YouTube reviews. Bad idea.

Here's who should RENT it first:
- [Target User 1]
- [Target User 2]
- [Target User 3]

Available now. Link in bio.

#TryBeforeYouBuy #[GunBrand] #[GunModel] #Firearms #2A #[OtherRelevantHashtags]
```

---

#### Template 2: Customer Story (Instagram Reel)

**Script Structure:**
1. Hook (0-3 sec): "I almost made a $900 mistake"
2. Problem (3-8 sec): "I was going to buy [Gun X] without shooting it first"
3. Solution (8-15 sec): "Then I rented it through Rentagun. Turns out [issue with gun]"
4. Outcome (15-20 sec): "I ended up trying [Gun Y] next and that was perfect"
5. CTA (20-25 sec): "Stop buying blind. Try before you buy. Link in bio."

**Visual:**
- B-roll: Range footage, gun close-ups, rental unboxing
- Text overlays: Key quotes
- Music: Upbeat, modern (check Instagram trending audio)

**Caption:**
```
[Customer Name] saved [$X] by renting first.

How many guns have you bought blind?

Try before you buy. It's common sense.

Link in bio to start your first rental.

[Tag customer if permission granted]

#CustomerStory #TryBeforeYouBuy #GunRental #SmartBuying
```

---

#### Template 3: Educational Carousel (Instagram)

**Topic:** "5 Signs You Should Rent Before Buying"

**Slide 1 (Cover):**
"5 Signs You Should Rent Before Buying"
[Eye-catching graphic]

**Slides 2-6:**
Each slide = 1 sign
- Large number (1, 2, 3, 4, 5)
- Sign headline
- 1-2 sentences explanation
- Relevant icon/image

**Slide 7 (CTA):**
"Stop buying blind. Start renting smart."
[Logo + website]

**Caption Template:**
```
How do you know if you should rent first?

Here are 5 signs:

1. [Sign 1 - expanded]
2. [Sign 2 - expanded]
3. [Sign 3 - expanded]
4. [Sign 4 - expanded]
5. [Sign 5 - expanded]

Sound like you? Try before you buy.

Link in bio to browse rentals.

Questions? Drop them below.

#GunBuying #FirearmEducation #TryBeforeYouBuy #ResponsibleGunOwner
```

---

#### Template 4: Behind-the-Scenes (Instagram Story Series)

**Story 1:** "A day in the life at Rentagun"
**Story 2:** Gun arriving back from rental (package unboxing)
**Story 3:** Inspection process (checking for damage, cleaning)
**Story 4:** Inventory shelf (organized, professional)
**Story 5:** Shipping out next rental (packaging, FedEx label)
**Story 6:** Poll: "Which gun should we add to inventory next?"
**Story 7:** CTA: "Want to try one? Link in bio"

**Text Overlays:**
- Keep it casual, conversational
- Use story stickers (polls, questions, countdowns)
- Tag locations when relevant

---

### Hashtag Strategy

#### Primary Hashtags (Always Use - 5-10 per post)
- #TryBeforeYouBuy (branded)
- #Rentagun (branded)
- #GunRental (category)
- #Firearms (broad)
- #2A (community)
- #GunOwner (community)
- #Handgun or #Rifle (specific to content)
- #[GunBrand] (specific to gun featured)

#### Secondary Hashtags (Rotate - 5-10 per post)
- #FirstTimeGunOwner
- #ShootingRange
- #ConcealedCarry
- #RangeDay
- #GunLife
- #ArmedAndEducated
- #NewGunDay (but "new to you")
- #DefensiveFirearms

#### Niche Hashtags (When Relevant)
- #GlockPerfection (when featuring Glocks)
- #SigSauer (when featuring Sig)
- #1911Fan (for 1911 content)
- #WheelgunWednesday (revolver content on Wednesdays)
- #AR15 (when featuring ARs)
- #HuntingSeason (for hunting rifle content)
- #BucketListGun (for experience-focused content)

**Total per post:** 15-20 hashtags (Instagram allows 30, but 15-20 is optimal)

---

## Campaign Templates

### Campaign 1: New Inventory Announcement

**Goal:** Drive rentals of newly added guns
**Duration:** 7-14 days
**Channels:** Email, Instagram, Facebook, Twitter

#### Email Template
**Subject:** Just in: [Gun Name] now available to rent

```
[First Name],

New arrival alert:

[Gun Name] just hit our inventory.

This one's been requested 47 times in the past 3 months (yes, I track that).

Here's why people want it:
- [Reason 1]
- [Reason 2]
- [Reason 3]

Available starting [Date].

[CTA: Reserve Your Rental]

Fair warning: Our most-requested guns book out 2-3 weeks in advance. If you've been waiting for this one, grab it now.

Troy

P.S. What gun should we add next? Reply and tell me.
```

#### Instagram Announcement

**Post 1 (Feed - Launch Day):**
Image: Professional photo of new gun
Caption:
```
NEW ARRIVAL: [Gun Name]

You asked for it. We got it.

Now available to rent.

Why try this one?
[Reason 1]
[Reason 2]
[Reason 3]

Stop researching. Start shooting.

Link in bio to reserve.

#[GunBrand] #[GunModel] #NewGun #TryBeforeYouBuy
```

**Post 2 (Reel - Day 3):**
Video: Unboxing, inspection, loading into inventory
Text overlay: "You asked for [Gun Name]. We delivered."
Caption:
```
47 people asked us to add the [Gun Name].

Here it is.

Who's renting it first?

Link in bio.
```

**Post 3 (Story Series - Days 1-7):**
- Story 1: New gun announcement
- Story 2: Poll - "Have you shot this before?"
- Story 3: Specs/features
- Story 4: "Who should rent this?" (target users)
- Story 5: Availability countdown
- Story 6: "First rental booked!" (social proof)
- Story 7: Link sticker to rental page

#### Facebook Post
```
NEW INVENTORY ALERT: [Gun Name]

We've had 47 requests for this gun in the past 3 months.

It's finally here. Available to rent starting [Date].

[Why it's popular / who it's for]

Want to try it before you buy?

[Link to rental page]

#[relevant hashtags]
```

#### Twitter Posts (Thread)

**Tweet 1:**
```
NEW: [Gun Name] just hit our inventory

You asked (47 times). We delivered.

Available to rent: [Date]

[Link]
```

**Tweet 2:**
```
Why rent the [Gun Name] first?

[Reason 1]
[Reason 2]
[Reason 3]

Try before you buy. Common sense.
```

**Tweet 3:**
```
Most-requested guns book out 2-3 weeks in advance.

If you've been waiting for the [Gun Name], grab it now.

[Link]
```

---

### Campaign 2: Seasonal Promotion (Example: "Summer Bucket List")

**Goal:** Drive rentals during summer (May-August)
**Theme:** Experience-focused, bucket list guns
**Duration:** 12 weeks
**Channels:** Email series, Instagram campaign, YouTube video series

#### Campaign Overview
Promote "bucket list" guns - Desert Eagle, Tommy Gun, etc. - as summer experiences

#### Email Series (4 emails over 12 weeks)

**Email 1 (Week 1): Campaign Launch**
Subject: Your summer bucket list (guns edition)

```
[First Name],

Summer question: What's on your shooting bucket list?

Desert Eagle .50 AE?
Thompson submachine gun (.22 LR, legal version)?
Vintage Colt Python?

Here's the thing: Most people never shoot these. They stay on the "someday" list forever.

Not this summer.

We've got 10+ bucket list guns available to rent right now.

[CTA: See the Bucket List Collection]

Pick one. Rent it. Check it off.

Troy

P.S. Most popular bucket list rental last year: Desert Eagle .50 AE. Available now.
```

**Email 2 (Week 4): Customer Story**
Subject: "I finally shot a Desert Eagle"

```
[First Name],

Email I got last week:

"I've wanted to shoot a Desert Eagle since I was 12 (saw it in a movie). I'm 34 now. Finally rented one through Rentagun.

It was ridiculous. Hand cannon. Loud as hell. Stupid amounts of fun.

Would I buy one? Hell no. But I'm glad I shot it. Checked off the bucket list."
- James R., Atlanta

That's the point of the bucket list collection.

Some guns you NEED to shoot. Once.

What's on your list?

[CTA: Browse Bucket List Guns]

Troy
```

**Email 3 (Week 8): Urgency**
Subject: Summer's halfway over

```
[First Name],

Quick math:

Summer is 12 weeks long.
We're at week 8.

If there's a gun you wanted to try this summer, time's running out.

Bucket list guns still available:
- [Gun 1]
- [Gun 2]
- [Gun 3]
- [+ 7 more]

[CTA: Reserve Before Summer Ends]

Stop planning. Start shooting.

Troy
```

**Email 4 (Week 12): Last Call**
Subject: Last chance: Summer bucket list

```
[First Name],

Last week of summer.

If you didn't get to that bucket list gun, you've got one more shot.

Available this week:
- [Gun 1]
- [Gun 2]
- [Gun 3]

[CTA: Book Your Last Summer Rental]

See you at the range.

Troy

P.S. Already checked everything off your list? Reply and tell me what we should add for next summer.
```

#### Instagram Campaign

**Week 1-2: Launch**
- Feed Post: Bucket list graphic with 10 featured guns
- Reel: "10 guns you need to shoot before you die"
- Stories: Daily gun features with polls

**Week 3-8: Customer Stories**
- Reels: Customer reaction videos (if available)
- Stories: UGC reshares with bucket list theme
- Feed: Carousel posts for each bucket list gun

**Week 9-12: Urgency**
- Stories: Countdown stickers
- Posts: "Summer's almost over" messaging
- Reels: Quick-hit reminders

#### YouTube Video Series
**Video 1:** "10 Bucket List Guns You Can Actually Rent"
**Video 2:** "I Shot a Desert Eagle for the First Time" (Troy's POV)
**Video 3:** "Which Bucket List Gun Should You Try First?"

---

### Campaign 3: Partnership/Collaboration Template

**Goal:** Cross-promote with complementary brands/influencers
**Potential Partners:** Ranges, training companies, gear brands, firearms influencers

#### Partnership Outreach Email Template

```
Subject: Partnership idea: [Your Brand] x Rentagun

Hey [Name],

I'm Troy, founder of Rentagun (first national try-before-you-buy firearm rental service).

I've been following [Your Brand] for a while. [Specific compliment about their content/product/service].

Partnership idea:

[Specific proposal based on partner type - see examples below]

What this looks like:
- [Benefit 1 for partner]
- [Benefit 2 for partner]
- [Benefit 3 for partner]

We bring:
- [What Rentagun offers - audience, product, credibility]

Interested? Let's set up a quick call.

Troy
[Contact info]
```

#### Partnership Types

**Type 1: Range Partnership**
- Offer: Free rental to range members (Rentagun covers cost)
- Range benefit: Member perk, increased foot traffic
- Rentagun benefit: New customer acquisition, brand awareness

**Type 2: Training Company Partnership**
- Offer: Students can rent guns for training courses
- Training company benefit: Students don't need to own guns to take course
- Rentagun benefit: Access to highly-qualified leads (people investing in training)

**Type 3: Gear Brand Partnership**
- Offer: Co-branded content (holster brand + gun rental)
- Gear brand benefit: Content, audience access
- Rentagun benefit: Credibility association, cross-promotion

**Type 4: Influencer Partnership**
- Offer: Free rental, content creation, affiliate commission
- Influencer benefit: Free guns to review, commission on referrals
- Rentagun benefit: Authentic reviews, audience access

---

### Campaign 4: User-Generated Content Campaign

**Goal:** Collect customer stories, range day photos, testimonials
**Theme:** "Rent It Saturday, Decide Sunday"
**Duration:** Ongoing
**Channels:** Instagram, email, website

#### Campaign Mechanics

**Step 1: Request UGC (In Post-Rental Email)**
Add to post-rental sequence:

```
One more thing:

If you took any photos or videos of your rental at the range, we'd love to see them.

Send them over and we might feature you on our Instagram (with your permission, obviously).

Or tag us @rentagun in your posts.

Thanks for trusting us with your rental.

Troy
```

**Step 2: UGC Submission Form**
Create simple form on website:
- Upload photo/video
- Gun rented
- Your experience (1-2 sentences)
- Instagram handle (for credit)
- Permission to use (checkbox)

**Step 3: Reshare Strategy**
- Instagram Stories: Reshare 3-5 per week
- Instagram Feed: Compile into monthly UGC roundup post
- Email: Include best stories in emails
- Website: Gallery page of customer photos

#### UGC Incentive (Optional)
"Share your rental experience and get tagged = entered to win free rental month"
- Run monthly
- Winner announced first of each month
- Simple entry: Post photo, tag @rentagun, use #RentagunExperience

---

## Metrics & KPIs

### Email Marketing Metrics

| Metric | Current | Good | Great | Track In |
|--------|---------|------|-------|----------|
| **Open Rate** | - | 25%+ | 35%+ | Klaviyo |
| **Click Rate** | - | 3%+ | 5%+ | Klaviyo |
| **Conversion Rate** (Email → Order) | - | 2%+ | 4%+ | Klaviyo |
| **List Growth** (Net new/week) | - | 50+ | 100+ | Klaviyo |
| **Unsubscribe Rate** | - | <0.5% | <0.3% | Klaviyo |

**Red Flags:**
- Open rate <15% = Subject line problem or list quality issue
- Click rate <1% = Content not compelling or unclear CTA
- Unsubscribe >1% = Wrong audience or too frequent

---

### Social Media Metrics

#### Instagram
| Metric | Current | Good | Great | Track In |
|--------|---------|------|-------|----------|
| **Follower Growth** (Net/week) | - | 50+ | 100+ | Instagram Insights |
| **Engagement Rate** | - | 3%+ | 5%+ | Instagram Insights |
| **Reach** (Accounts reached/post) | - | 2x followers | 5x followers | Instagram Insights |
| **Reel Views** | - | 5K+ | 10K+ | Instagram Insights |
| **Story Completion Rate** | - | 60%+ | 80%+ | Instagram Insights |
| **Profile Visits** (from posts) | - | 100+/week | 300+/week | Instagram Insights |
| **Link Clicks** (from bio) | - | 50+/week | 100+/week | Linktree or Bitly |

**What "Good" Looks Like:**
- Post getting 3% engagement = 30 likes per 1,000 followers
- Reel getting 5K views in first 24 hours = Algorithm boost
- Story with 70% completion rate = Content is engaging

**Red Flags:**
- Engagement rate <1% = Content not resonating or wrong audience
- Reach <1x followers = Algorithm suppression (shadowban or low quality)
- Story completion <40% = Content is boring or too long

---

#### YouTube
| Metric | Current | Good | Great | Track In |
|--------|---------|------|-------|----------|
| **Subscribers** (Total) | - | 1K+ | 5K+ | YouTube Studio |
| **Views/Video** (First 7 days) | - | 500+ | 2K+ | YouTube Studio |
| **Watch Time %** | - | 40%+ | 60%+ | YouTube Studio |
| **CTR** (Thumbnail) | - | 4%+ | 8%+ | YouTube Studio |
| **Subscriber Conversion** | - | 2%+ | 5%+ | YouTube Studio |

**What "Good" Looks Like:**
- 40% watch time on 10-min video = viewers watching 4 minutes
- 5% CTR = 5 clicks per 100 impressions (thumbnail is working)
- 3% subscriber conversion = 3 new subs per 100 views

**Red Flags:**
- Watch time <25% = Hook failing or content too long
- CTR <2% = Thumbnail or title not compelling
- Subscribers dropping = Content not meeting expectations

---

#### Facebook
| Metric | Current | Good | Great | Track In |
|--------|---------|------|-------|----------|
| **Page Likes** (Net/week) | - | 25+ | 50+ | Facebook Insights |
| **Post Reach** | - | 500+ | 2K+ | Facebook Insights |
| **Engagement Rate** | - | 2%+ | 4%+ | Facebook Insights |
| **Link Clicks** | - | 20+/post | 50+/post | Facebook Insights |

---

#### Twitter
| Metric | Current | Good | Great | Track In |
|--------|---------|------|-------|----------|
| **Followers** (Net/week) | - | 10+ | 25+ | Twitter Analytics |
| **Impressions/Tweet** | - | 500+ | 2K+ | Twitter Analytics |
| **Engagement Rate** | - | 1%+ | 3%+ | Twitter Analytics |
| **Link Clicks/Tweet** | - | 5+ | 15+ | Twitter Analytics |

---

### Website/Traffic Metrics

| Metric | Current | Good | Great | Track In |
|--------|---------|------|-------|----------|
| **Total Sessions** (Monthly) | - | 5K+ | 15K+ | Google Analytics |
| **New Users %** | - | 60%+ | 75%+ | Google Analytics |
| **Bounce Rate** | - | <60% | <40% | Google Analytics |
| **Avg Session Duration** | - | 2min+ | 4min+ | Google Analytics |
| **Quiz Completion Rate** | - | 40%+ | 60%+ | RevenueHunt |
| **Product Page Views** | - | 2K+/mo | 5K+/mo | Google Analytics |

---

### Conversion Metrics (The Money Metrics)

| Metric | Current | Good | Great | Track In |
|--------|---------|------|-------|----------|
| **Visitor → Subscriber** | - | 5%+ | 10%+ | Google Analytics + Klaviyo |
| **Subscriber → First Rental** | - | 10%+ | 20%+ | Klaviyo |
| **Quiz Complete → Rental** | - | 15%+ | 30%+ | RevenueHunt + WooCommerce |
| **Cart Abandonment Rate** | - | <70% | <50% | WooCommerce |
| **Rental → Purchase Conversion** | - | 20%+ | 40%+ | WooCommerce |
| **Customer Lifetime Rentals** | - | 2.5+ | 4+ | WooCommerce |
| **Churn Rate** (Monthly) | - | <10% | <5% | WooCommerce Subscriptions |

**What "Good" Looks Like:**
- 10% subscriber → rental = 10 rentals per 100 email subscribers
- 25% rental → purchase = 1 in 4 renters buy their gun
- 3 lifetime rentals = Customer tries 3 guns before buying
- 7% churn = 93% of subscribers stay active month-over-month

**Red Flags:**
- Cart abandonment >80% = Checkout friction or pricing shock
- Rental → purchase <10% = Wrong target audience or poor rental experience
- Churn >15% = Product/service not meeting expectations

---

### Revenue Metrics

| Metric | Current | 12mo Target | 24mo Target | Track In |
|--------|---------|-------------|-------------|----------|
| **MRR** (Monthly Recurring Revenue) | - | $10K+ | $50K+ | WooCommerce + Manual |
| **Active Subscriptions** | - | 100+ | 500+ | WooCommerce Subscriptions |
| **Avg Revenue Per User** (Monthly) | - | $150+ | $200+ | WooCommerce |
| **Subscription Tier Mix** (Basic:Pro) | - | 70:30 | 60:40 | WooCommerce |
| **One-Time Purchases** (Guns sold) | - | $15K/mo | $75K/mo | WooCommerce |

---

### Weekly Dashboard Template

Copy this into a spreadsheet or notion page. Update every Monday.

```
RENTAGUN WEEKLY METRICS - Week of [Date]

EMAIL
- List size: [X] (Change: +[X])
- Emails sent: [X]
- Open rate: [X]%
- Click rate: [X]%
- Email → Orders: [X]

SOCIAL
Instagram:
- Followers: [X] (Change: +[X])
- Posts: [X]
- Avg engagement rate: [X]%
- Reel views: [X]
- Profile visits: [X]
- Link clicks: [X]

YouTube:
- Subscribers: [X] (Change: +[X])
- Videos published: [X]
- Total views: [X]
- Avg watch time: [X]%

TRAFFIC
- Total sessions: [X]
- New users: [X]
- Bounce rate: [X]%
- Quiz completions: [X]

CONVERSIONS
- New subscribers: [X]
- Rentals booked: [X]
- Purchases made: [X]
- Cart abandonment: [X]%

REVENUE
- MRR: $[X]
- Active subscriptions: [X]
- One-time purchases: $[X]
- Total revenue: $[X]

NOTES
- What worked: [X]
- What didn't: [X]
- Next week focus: [X]
```

---

### Monthly Review Questions

**Every month, answer these:**

1. **What was the #1 source of new rentals this month?**
   (Email? Instagram? Word of mouth? Paid ads?)

2. **What content got the most engagement?**
   (Which posts, emails, videos performed best?)

3. **What's our biggest bottleneck?**
   (Traffic? Conversion? Retention?)

4. **What should we do more of?**
   (What's working that we should double down on?)

5. **What should we stop doing?**
   (What's not worth the time/effort?)

6. **What's the #1 priority for next month?**
   (Based on data, what moves the needle most?)

---

## Quick Win Checklist

**If you're overwhelmed, start here. Do these first.**

### Week 1: Foundation
- [ ] Set up welcome email sequence (5 emails)
- [ ] Create Instagram bio + link tree
- [ ] Schedule first week of Instagram posts (5 posts)
- [ ] Set up Google Analytics tracking

### Week 2: Content
- [ ] Create 3 inventory spotlight carousel posts
- [ ] Write 3 blog posts for SEO (product comparisons)
- [ ] Film 1 YouTube video (rental process walkthrough)
- [ ] Set up abandoned cart email sequence (3 emails)

### Week 3: Engagement
- [ ] Daily Instagram engagement (15 min/day)
- [ ] Respond to all comments/DMs within 24 hours
- [ ] Reach out to 5 potential influencer partners
- [ ] Create UGC request email template

### Week 4: Optimization
- [ ] Review first month of email metrics
- [ ] Review first month of social metrics
- [ ] Identify top-performing content
- [ ] Plan next month based on data

---

## Tools Stack

| Tool | Purpose | Cost |
|------|---------|------|
| **Klaviyo** | Email marketing | $20-100+/mo (based on list size) |
| **Later** or **Buffer** | Social media scheduling | $15-30/mo |
| **Canva** | Graphic design | $13/mo (Pro) |
| **CapCut** | Video editing (Reels) | Free |
| **Google Analytics** | Website tracking | Free |
| **Bitly** or **Linktree** | Link tracking | Free-$10/mo |
| **RevenueHunt** | Quiz | [Current tool] |

---

## Gun Finder Quiz Plugin (NEW - 2026-02-05)

**Status:** Built, needs lifestyle photos + deployment
**Shortcode:** `[rentagun_gun_finder]`
**Files:** `/Users/troyvanmaanen/Library/Mobile Documents/iCloud~md~obsidian/Documents/Work/rentagun-gun-finder/`

Interactive 5-step firearm recommendation quiz inspired by Old Town Kayak Finder:
1. **Purpose** - What do you want the gun for?
2. **Type** - Dynamic options based on purpose selection
3. **Vibe** - Multi-select personality (max 2)
4. **Experience** - Skill level (includes safety filter for beginners)
5. **Results** - Ranked recommendations with whyText

**Features:**
- 50 firearms in JSON data with tags and purpose-specific descriptions
- Scoring algorithm with purpose weighting
- Safety filter: no dangerous guns for beginners
- Ranked badges: Best Match / Great Pick / Solid Choice
- Segmented progress bar
- Premium CSS design (~720 lines)

**Deployment TODO:**
1. Generate/source 16 lifestyle photos for card backgrounds (currently emoji placeholders)
2. Test full quiz flow with real images
3. Deploy to WordPress staging
4. Integrate with welcome email sequence (replace RevenueHunt quiz references)

**Marketing Integration:**
- Welcome Email 1 CTA → "Take the Quiz" should point to Gun Finder page
- Quiz Reminder Email → Same Gun Finder page
- Results can feed into Klaviyo profile properties for segmentation
- Consider tracking quiz completions as Klaviyo events for flow triggers

---

## Operations Plugin Status (2026-02-05)

**Version:** v1.3.0 (12 bugs fixed from v1.2.0)
**File:** `/Users/troyvanmaanen/rentagun-operations/rentagun-operations.php`
**Deployment ZIP:** `/Users/troyvanmaanen/rentagun-operations-v1.3.0.zip`

**All 5 Klaviyo Flows LIVE:**
| Flow | Reply-To |
|------|----------|
| Order Placed | support@rentagun.com |
| Order Shipped | support@rentagun.com |
| Delivered to FFL | support@rentagun.com |
| Return Due Soon | support@rentagun.com |
| Return Received | support@rentagun.com |

**Key fixes in v1.3:**
- Race condition prevention (transient locks for auto-send)
- Empty customer name fallback
- HPOS compatibility
- Complete FFL validation
- Dummy phone number filtering

---

## Final Notes

**This playbook is a living document.**

As you execute campaigns and collect data, update this playbook with:
- What worked (and why)
- What didn't work (and why)
- New templates based on winners
- Updated metrics benchmarks

**Don't try to do everything at once.**

Pick one channel. Master it. Then add the next.

Suggested order:
1. Email (highest ROI, you own the list)
2. Instagram (visual platform, best for Rentagun's audience)
3. YouTube (evergreen content, SEO value)
4. Facebook/Twitter (tertiary)

**The Rule: Content should sell without selling.**

Every post, email, video should provide value FIRST. The rental is the logical next step, not a pushy CTA.

Educate. Entertain. Build trust. The rentals will follow.

---

**Questions about this playbook?**
File location: `/tmp/troy-os/projects/rentagun/MARKETING-PLAYBOOK.md`
Update as needed. Execute consistently. Track everything.

**Now go make Rentagun famous.**
