# GunStreamer Google Ads Playbook — Viewer / Buyer Side

> **Last Updated:** 2026-05-19 (full rewrite against buyer-side research)
> **Originally Drafted:** 2026-03-02
> **Status:** Research-driven. All sections rebuilt against the May 19 buyer research sprint (6 personas, 20 pain points, 68 VOC quotes, 18 compliant ad angles).
> **Goal:** Drive email/phone notification signups for upcoming livestreams (viewer/buyer acquisition).
> **Audience:** Six buyer personas — Marcus (Vintage Collector), Trent (NFA Buyer), Dale (Estate Buyer), Kyle (Deal-Hunter), Jen/Jeff (First-Timer), Hank (Rural). NOT FFL dealers.
> **Companion doc:** For FFL dealer acquisition, see `~/Work/GunStreamer/docs/facebook-ads-launch-set.md`.
> **Research sources:** `~/Work/GunStreamer/research/buyer-personas.md`, `buyer-pain-points.md`, `buyer-voc.md`, `buyer-ad-angles.md`.

---

## Scope Note (Read First)

This playbook covers **the buyer/viewer funnel only** — driving consumers to sign up for livestream notifications. The dealer-acquisition funnel runs on a separate playbook (Facebook ads launch doc).

**Conversion frame (non-negotiable):** We are not advertising firearms. We are advertising a livestream as entertainment, with the conversion being a newsletter / notification signup. Every angle, every keyword, every ad creative, every landing page stays in this lane. This is the only thing keeping the entire program compliant with Google, Meta, TikTok, and Reddit ad policies.

**The six buyer personas (full detail in `research/buyer-personas.md`):**

| Persona | One-Line | Top Pain | Best Channel |
|---|---|---|---|
| **Marcus** | Vintage / milsurp collector | Photos hide condition; seller ghosts | Google Search, YouTube (FW/RIA), Display |
| **Trent** | NFA stamp buyer | Dealer ghosts post-payment (not ATF) | Google Search, Reddit, YouTube |
| **Dale** | Estate / auction buyer | 17-25% buyer's premium + ship + transfer fee stack | Google Search (intent on competitor fees) |
| **Kyle** | Deal-hunter | Compliance fee + marketplace fee + ship + transfer stacking | Google Search, Reddit Ads |
| **Jen/Jeff** | First-time / entry-level | Pricing opacity, fear of upsell | YouTube education, Google Search |
| **Hank** | Rural / distance-constrained | 90-min drive for the wrong selection | Geo-targeted Search, YouTube hunting |

**Creative production order** (segment size × intent × LTV): Kyle → Hank → Marcus → Dale → Jen/Jeff → Trent.

---

## The Reality

Google officially bans firearms ads. In practice, Glock, Daniel Defense, Sig Sauer, Smith & Wesson, Savage Arms, and Brownells have collectively served 120M+ impressions through Google's ad systems (ProPublica investigation). The gap between policy and enforcement is your opportunity.

**GunStreamer's advantage:** You're not selling guns directly. You're a livestream platform. The conversion goal is "get notified when we go live" — a newsletter signup, not a firearms purchase. This is the cleanest possible positioning for Google Ads.

---

## Landing Page Requirements (CRITICAL — Build This First)

The landing page is the #1 factor in whether your ads get approved or rejected. Google's automated review crawls the page AND the domain.

### Must Have
- Headline: "Upcoming Livestreams" or "Never Miss a Live Show"
- Subtext: "Get email alerts when dealers go live"
- Email input field + submit button
- Optional: upcoming stream schedule / countdown
- Clean, professional design
- Fast load time (<3 seconds)
- Mobile responsive

### Must NOT Have
- Gun product listings or pricing
- "Buy" / "Shop" / "Order" / "Bid" / "Auction" buttons
- Firearms imagery with price tags
- Links to GunStreamer's main storefront or active auctions
- FFL dealer inventory listings
- Specific gun model names (AR-15, Glock 19, etc.)
- Ammunition or accessory product listings

### Domain Strategy (Choose One)

| Option | Risk Level | Recommendation |
|--------|-----------|----------------|
| `gunstreamer.com/live` | Higher | Google crawls the whole domain and may find commerce |
| `live.gunstreamer.com` | Medium | Subdomain separation helps but not guaranteed |
| `watchliveffl.com` or similar | Lowest | Clean domain, nothing for Google to flag |

**Recommendation:** Start with a subdomain (`live.gunstreamer.com`). If rejected, try a separate domain. Don't overcomplicate it on day one.

---

## Campaign Setup

### Account Settings
- **Google Ads account:** Create a fresh account if possible (no prior firearms-related rejections)
- **Billing:** Set up with a credit card (not prepaid)
- **Business category:** "Entertainment" or "Media & Entertainment" — NOT "Retail" or "Shopping"

### Campaign Configuration

| Setting | Value |
|---------|-------|
| Campaign type | **Search** (start here, expand later) |
| Campaign objective | **Leads** |
| Conversion action | Form submission (email collected) |
| Conversion category | **Sign-up** (NOT Purchase) |
| Bidding | Manual CPC to start, switch to Target CPA after 30+ conversions |
| Daily budget | **$25-50/day** (test phase) |
| Networks | Google Search only (uncheck Display and Search Partners initially) |
| Locations | United States |
| Language | English |

---

## Keywords — Intent-Validated by Persona

Keywords are now grouped by **buyer search intent**, not generic discovery themes. Each group maps to one persona's actual search behavior (pulled from `research/buyer-personas.md` + `buyer-pain-points.md`).

**Universal match-type rule:** Start every keyword in **phrase match** (`"keyword"`). Expand to broad only after 30+ conversions in a group. Buyer-side firearm-adjacent broad match attracts noisy, policy-flag-prone traffic fast.

---

### Group K1 — Kyle (Deal-Hunter) — Fee Stack Intent
Highest-intent, lowest-compliance-risk, primary CAC engine. Keywords are commerce-platform vocabulary (fees, compliance, transfer cost) — not firearm vocabulary.

```
"gunbroker compliance fee"
"gunbroker marketplace fee"
"gunbroker fees too high"
"ffl transfer fees by state"
"cheap ffl transfer near me"
"ffl transfer cost"
"gunbroker total cost"
"buyer's premium gunbroker"
"hidden fees gunbroker"
"compliance fee what is it"
```

### Group K2 — Dale (Estate Buyer) — Competitor Fee Search
He's searching the legacy platforms' names with negative qualifiers. These convert at the highest rate because intent is "I'm done with this platform."

```
"proxibid fees"
"proxibid buyer's premium"
"hibid buyer's premium"
"hibid fees too high"
"rock island auction shipping cost"
"rock island auction buyer's premium"
"liveauctioneers fees"
"estate gun auction near me"
"estate firearm auction online"
```

### Group K3 — Marcus (Collector) — Condition / Question Intent
He searches for verification and provenance. Pre-bid research.

```
"is this colt original"
"how to verify [year/maker] markings"
"k98 import marks meaning"
"how to spot refinish on collectible"
"ask seller question gunbroker no response"
"rock island auction condition standards"
"how to inspect used firearm online"
"gunbroker seller doesn't respond"
```

### Group K4 — Trent (NFA Buyer) — Dealer Frustration Intent
**Restricted channel.** Run Google Search only. NEVER use these on Display/YouTube/Meta — the keyword list itself includes terms that trip policy on creative-bearing channels.

```
"silencer central reviews"
"silencer shop vs silencer central"
"form 4 wait time 2026"
"nfa wait time atf 2026"
"my dealer won't return calls suppressor"
"suppressor dealer ghosted"
"sot dealer customer service"
"silencer central bbb complaints"
```

### Group K5 — Hank (Rural Buyer) — Distance / Inventory Intent
Geo-target rural ZIP codes with low local FFL density. Layer location bid adjustments.

```
"online gun show watch"
"watch live gun auction"
"national gun inventory online"
"online firearm auction watch"
"live gun show stream"
"watch firearm stream from home"
"virtual gun show"
"online gun auction live"
```

### Group K6 — Jen/Jeff (First-Timer) — Education Intent
Top of funnel. Long sessions, low immediate conversion, high LTV after retention.

```
"how to buy first gun"
"first gun buyer guide"
"how does ffl transfer work"
"what to know before buying first firearm"
"firearm buying guide beginner"
"best beginner concealed carry"
"first time gun buyer questions"
```

### Group K7 — Brand / Competitor Comparison (cross-persona)
Branded competitor queries from buyers who've been burned and are looking for alternatives. Highest conversion of any non-brand keyword.

```
"gunbroker alternative"
"gunbroker reviews"
"gunbroker scam"
"proxibid alternative"
"hibid alternative"
"alternative to gunbroker"
"live firearm auction alternative"
"safer than gunbroker"
```

---

### Negative Keywords (Add Day 1)

Block buyer-side wasted spend and policy-trip terms:

```
-free          (drains entertainment-seeker noise)
-jobs          (job-seekers searching dealer names)
-careers
-license       (wrong-funnel: people trying to GET an FFL)
-how to get ffl
-rocket ffl
-illegal
-3d print
-ghost gun
-homemade
-modification
-convert
-full auto
-bump stock
-child
-kids
-school
-shooting (the news-event sense — use "shooting sports" / "shooting range" positively)
-stocks         (financial)
-investing
-stocks down
```

### Tiering by Compliance Risk

Old March doc used a tier system based on "how aggressive is the keyword." The May research shows **persona/channel risk** is the better axis. Below is the new risk matrix:

| Group | Channel-Safe On | NEVER Use On |
|---|---|---|
| K1 (Kyle fee stack) | Search, YouTube, Reddit | Meta/TikTok feed (low risk but no upside) |
| K2 (Dale competitor fees) | Search, Reddit | Display, Meta, TikTok |
| K3 (Marcus condition) | Search, YouTube | Meta, TikTok |
| K4 (Trent NFA) | **Search only** | YouTube, Display, Meta, TikTok, Reddit |
| K5 (Hank distance) | Search, YouTube | Meta, TikTok |
| K6 (Jen/Jeff education) | Search, YouTube, **Meta**, TikTok | — (the safest persona for paid social) |
| K7 (brand/competitor) | Search, Reddit | Display, Meta, TikTok |

---

## Ad Copy — Research-Driven by Persona

Headlines and descriptions below are sourced from `research/buyer-voc.md` (verbatim buyer language) and `research/buyer-ad-angles.md` (18 compliant angles). Use the persona-matched RSA below — do NOT mix headlines across personas in a single ad group.

**Universal RSA structure:** Per persona ad group, build 2-3 RSAs with 12-15 headlines + 4 descriptions. Pin the persona's strongest hook to Position 1. Pin the persona's CTA to a description slot.

---

### RSA Set — Kyle (K1 ad group, fee-stack intent)

**Headlines (30 char):**
```
The Hammer Price Is Half
1% Comp Fee. 1% Mkt Fee.
The Fee Stack You Know
No Buyer's Premium. Live.
Real Prices. Real Hosts.
New Drops. Every Weekday.
Skip the Hidden Fees. Live.
See the All-In Price First
Live Shows. Real Pricing.
The Fee Stack Ends Here
Watch Live. Save the Fees.
Get Notified. Free.
```

**Descriptions (90 char):**
```
1% comp fee, 1% marketplace fee, 18% buyer's premium. Sound familiar? Live shows fix it.
Won a lot for $1,300. Invoice arrived $1,766. There's a better way. Get notified free.
Hammer price, all-in. No surprise compliance fee at checkout. Get notified when shows run.
New live drops every weekday from federally-licensed dealers. Sign up for show alerts.
```

**Pin to H1:** "1% Comp Fee. 1% Mkt Fee." — most-specific verbatim hit.

---

### RSA Set — Dale (K2 ad group, competitor-fee search)

**Headlines:**
```
Estate Quality. Live.
No 25% Buyer's Premium
The Hammer Is Half the Story
$1,300 Hammer. $1,766 Invoice.
Estate Lots. Live. Direct.
Live Auctions. Real Hosts.
Skip the 25% Surcharge
National Estate Lots, Live
Get Notified When Lots Run
The Premium Math, Solved
```

**Descriptions:**
```
17-25% buyer's premium plus packing, shipping, insurance, transfer. The "deal" was never a deal.
Estate-quality lots. Live. Vetted hosts. Without the legacy 25% surcharge. Get notified.
Won a lot for $1,300. Invoice arrived $1,766. There's a cleaner way to watch live auctions.
Notification signup for upcoming estate-style live shows. Free. No spam.
```

**Pin to H1:** "$1,300 Hammer. $1,766 Invoice." — verbatim Rock Island buyer complaint.

---

### RSA Set — Marcus (K3 ad group, collector condition/Q&A intent)

**Headlines:**
```
See the Detail. Live.
Ask the Question. Live.
The Host Rotates It For You
Photos Lie. Live Doesn't.
About Half Go Unanswered
Real Detail. Real Time.
See the Markings. Live.
Watch the Bore. Live.
Vintage Lots Run Live
Get Notified. Free.
```

**Descriptions:**
```
Static photos hide condition. Live shows let you ask the host to rotate and light the piece.
Half of seller questions go unanswered before auction close. Live shows answer in chat.
Watch the host show the bore, the markings, the bluing — on stream, before the chat closes.
Get notified when collectible lots run live. Free, no spam.
```

**Pin to H1:** "Photos Lie. Live Doesn't." — speaks the collector's deepest pain.

---

### RSA Set — Trent (K4 ad group, NFA dealer frustration)

**SEARCH-ONLY. Do NOT reuse these creatives on YouTube/Display/Meta.**

**Headlines:**
```
ATF Says 4 Days
Your Dealer Says 4 Months
The Bottleneck Isn't ATF
Dealer Accountability, Live
Real Dealers. Live. On Camera.
Active Dealers Every Week
Watch the Demo. Live.
Get Notified. Free.
Live Demos Before You Order
Verified Hosts. Live.
```

**Descriptions:**
```
ATF processing collapsed to 4 days. Your dealer didn't. If they go dark for 4 weeks, that's the problem.
Watch federally-licensed dealers active, on stream, every week. Get notified when shows run.
A/B compare live audio demos on stream. Not a tin-shed YouTube review. Free notification signup.
Get notified when shows go live. Free, no spam.
```

**Pin to H1:** "Your Dealer Says 4 Months" — newly discovered pain (May 19 research).

**Compliance note:** Trent's RSA never uses "suppressor," "silencer," "NFA," "stamp," "Form 4," "Class III," or "SOT" — even in landing-page copy reachable via these ads. The keyword group K4 targets the search intent, the RSA stays in the safe-list lane.

---

### RSA Set — Hank (K5 ad group, rural distance intent)

**Headlines:**
```
National Inventory. Live.
From Your Couch.
Stop Driving 90 Minutes
National Lots. Live. Watch.
Same 12 SKUs Got You Tired?
Watch Live. From Anywhere.
The Local Wall Ends Here
National Variety. From Home.
Tune In Live. Anywhere.
Get Notified. Free.
```

**Descriptions:**
```
Your nearest decent shop is 90 minutes away. Live shows aggregate national lots from your couch.
Stop driving 90 minutes for the wrong selection. Watch national live shows. Get notified free.
Live shows aggregate inventory across dozens of federally-licensed dealers — every weekday.
Get notified when shows go live. Free, no spam.
```

**Pin to H1:** "National Inventory. Live." — direct empathy hit on lived rural experience.

---

### RSA Set — Jen/Jeff (K6 ad group, first-timer education)

**Safest persona for paid social.** Same creatives can also run on Meta and TikTok with minor visual swaps.

**Headlines:**
```
Sit in the Back. Watch. Learn.
No Pressure. Watch Live.
Lurker-Friendly by Design
Ask in Chat When Ready
Beginner-Friendly Shows
Watch the Experts Live
New to Live Shows? Lurk First.
Get Beginner Show Alerts
Learn First. Decide Later.
Watch. Learn. Subscribe Free.
```

**Descriptions:**
```
New to live shows? Lurk first. Read the chat. No pressure to buy, no pressure to participate.
Watch federally-licensed dealers host live shows. Education first. Get notified when shows run.
Sit in the audience. Read the chat. Ask when you're ready. Get beginner-friendly show alerts.
Free notification signup. No spam. Beginner-safe.
```

**Pin to H1:** "Sit in the Back. Watch. Learn."

---

### Universal Description (fallback, all personas)

```
Get notified when federally-licensed dealers run live shows. Free email alerts. No spam.
```

### Words to NEVER Use in Ad Copy

| Banned | Use Instead |
|--------|------------|
| Buy / Purchase / Order | Watch / Join / See |
| Shop / Store / Sale | Show / Stream / Demo |
| Discount / Deal / Cheap | Free (referring to signup) |
| Ammo / Ammunition | (don't mention) |
| AR-15 / Glock / specific models | "inventory" / "firearms" |
| Weapon | Firearm |
| Kill / Shoot / Combat | (don't mention) |
| Auction / Bid | Show / Demo / Livestream |

### Hardened Safe / Banned Keyword Lists (May 2026 refresh)

The list below supersedes any earlier inline lists. Sourced from `research/compliant-ad-angles.md` and the verbatim Meta / Google / TikTok policy clauses cited in that doc. While written for B2B dealer ads, the safe/banned word discipline applies equally to consumer/viewer ads — anything that trips a policy reviewer kills the campaign regardless of audience.

**OK to use in ad copy (universal safe list):**
- FFL, dealer, inventory, business, software, platform, live commerce, audience, buyer, lot, consignment, estate, auction, regulated industry, compliance, small business, retail, e-commerce, show, stream, demo, livestream, notification, alert, signup

**AVOID in ad copy and landing-page above-the-fold:**
- gun, firearm, weapon, ammo, ammunition, AR, AK, 9mm, rifle, pistol, handgun, shotgun, silencer, suppressor, magazine, 2A, Second Amendment, NFA, Class III, SOT, NICS, 4473

**Note on the viewer angle specifically:** Even though "livestream notification signup" is a cleaner conversion goal than dealer acquisition, every keyword on the AVOID list still triggers Google's Dangerous Products and Services policy. The viewer LP and ad copy must stay in the safe-list lane the same way the dealer-side does.

### Verbatim Platform Policy Reference (cite when defending an ad)

Pulled from `research/compliant-ad-angles.md`. Use these exact clauses when appealing rejections — referencing the actual policy text dramatically increases reinstatement rates.

**Google Ads — Dangerous Products and Services**
- Source: https://support.google.com/adspolicy/answer/6014299
- Verbatim clause: "Promoting or selling firearms and certain firearms parts or related products" is prohibited.
- Practical interpretation: Google allows business-software / entertainment-platform ads for licensed-industry tools when the ad creative does NOT show the regulated product. Search ads are more lenient than display/in-stream video. Newsletter / notification signup framing is the cleanest allowed posture.

**Meta (relevant when running cross-platform retargeting)**
- Source: https://transparency.meta.com/policies/ad-standards/restricted-goods-services/weapons-ammunitions-explosives/
- Verbatim clause: "Ads must not promote the sale or use of weapons, ammunition, or explosives."
- Physical retailer exception (narrow): Brick-and-mortar can advertise the store/event if sales take place off-platform AND audience is 21+ — but cannot promote individual products.

**TikTok**
- Source: TikTok Ads Policy, Industry Entry
- Verbatim clause: "Ads must not promote weapons, firearms, ammunition, or weapon-related accessories."
- TikTok is stricter than Meta. Treat as last-priority paid channel for the viewer funnel.

---

## Ad Group Structure — Persona-Based

Each ad group maps to one buyer persona, one keyword group, and one RSA set. No mixing. This is the structure validated by the May 19 research sprint.

```
Campaign: GS_Search_BuyerNotify_May26
├── Ad Group K1 — Kyle (Deal-Hunter, Fee-Stack Intent)        [PRIMARY CAC]
│   Keywords:    "gunbroker compliance fee," "ffl transfer fees by state,"
│                "buyer's premium gunbroker," "hidden fees gunbroker"
│   RSA:         Kyle set (pinned H1: "1% Comp Fee. 1% Mkt Fee.")
│   Bid posture: Aggressive. Highest intent in the funnel.
│
├── Ad Group K2 — Dale (Estate Buyer, Competitor-Fee Search)
│   Keywords:    "proxibid fees," "hibid buyer's premium," "rock island
│                auction shipping cost," "estate firearm auction online"
│   RSA:         Dale set (pinned H1: "$1,300 Hammer. $1,766 Invoice.")
│   Bid posture: Aggressive. Highest LTV per win.
│
├── Ad Group K3 — Marcus (Collector, Condition / Q&A Intent)
│   Keywords:    "is this colt original," "k98 import marks meaning,"
│                "ask seller question gunbroker no response,"
│                "how to verify markings"
│   RSA:         Marcus set (pinned H1: "Photos Lie. Live Doesn't.")
│   Bid posture: Moderate. Strong intent, smaller segment.
│
├── Ad Group K4 — Trent (NFA Buyer, Dealer Frustration)       [SEARCH-ONLY]
│   Keywords:    "silencer central reviews," "form 4 wait time 2026,"
│                "my dealer won't return calls suppressor"
│   RSA:         Trent set (pinned H1: "Your Dealer Says 4 Months")
│   Bid posture: Moderate. Channel-restricted but high LTV.
│
├── Ad Group K5 — Hank (Rural Buyer, Distance / Inventory)    [GEO-LAYERED]
│   Keywords:    "online gun show watch," "national gun inventory online,"
│                "live firearm stream from home," "virtual gun show"
│   RSA:         Hank set (pinned H1: "National Inventory. Live.")
│   Bid posture: Layer rural ZIP-code bid adjustment +30%.
│
├── Ad Group K6 — Jen/Jeff (First-Timer, Education Intent)    [SAFEST]
│   Keywords:    "how to buy first gun," "first gun buyer guide,"
│                "how does ffl transfer work," "first time buyer questions"
│   RSA:         Jen/Jeff set (pinned H1: "Sit in the Back. Watch. Learn.")
│   Bid posture: Lower bids, longer attribution window.
│
└── Ad Group K7 — Brand / Competitor Comparison              [HIGHEST CVR]
    Keywords:    "gunbroker alternative," "gunbroker reviews,"
                 "proxibid alternative," "safer than gunbroker"
    RSA:         Mix of Kyle + Dale + Marcus pins
    Bid posture: Aggressive. Lowest CPL of any non-brand group.
```

### Why one persona per ad group

Mixing personas in a single ad group destroys Quality Score. Google's relevance signal is driven by keyword → ad copy match. If Kyle's "1% Comp Fee" headline serves against Hank's "stop driving 90 minutes" query, both lose. One persona per group means one consistent intent → one consistent message → high relevance → lower CPC and higher reach.

### Recommended launch order

Mirrors the persona priority + the Recommended Launch Order in `research/buyer-ad-angles.md`:

| Week | Launch | Why |
|---|---|---|
| W1 | K1 (Kyle) + K6 (Jen/Jeff) + K7 (brand) | Highest intent + safest + highest CVR — earliest proof |
| W2 | + K2 (Dale) + K5 (Hank) | Add high-LTV + underserved geo |
| W3 | + K3 (Marcus) | Add collector segment after platform proof |
| W4 | + K4 (Trent) | Search-only, channel-restricted, run last |

---

## YouTube Video Ads (Phase 2 — After Search Approved)

### Setup

| Setting | Value |
|---------|-------|
| Campaign type | Video |
| Subtype | Video reach / In-stream skippable |
| Objective | Leads |
| Budget | $25-50/day |
| Targeting | Persona-specific (below) |

### Persona-Validated Placement Targeting

Channels below are pulled from `research/buyer-personas.md` — each persona's actual viewing habits, not generic gun-channel guesses. Google's search tool will not surface most of these; paste URLs directly into the placements section.

**Marcus (Vintage Collector) — collector + milsurp viewers:**
```
youtube.com/c/ForgottenWeapons        (Marcus's primary feed)
youtube.com/@RockIslandAuctionCompany (estate-auction stream watchers)
youtube.com/@C-Rsenal
youtube.com/@InRangeTV
youtube.com/@PaulHarrell
```

**Dale (Estate Buyer) — auction-house affiliate content:**
```
youtube.com/@RockIslandAuctionCompany
youtube.com/c/ForgottenWeapons
youtube.com/@ActiveSelfProtection     (legacy estate audience overlap)
```

**Kyle (Deal-Hunter) — dealer-review + deal-alert channels:**
```
youtube.com/@PewPewTactical
youtube.com/@HonestOutlaw
youtube.com/@TFBTVOfficial
youtube.com/@Mrgunsngear              (review-driven deal hunters)
```

**Trent (NFA Buyer) — SEARCH/REDDIT ONLY in this playbook. Do NOT run YouTube In-Stream against NFA-specific channels with K4 keywords — placement + keyword combo trips policy.**

If running YouTube against the Trent audience, do it via Custom Intent (search-based) targeting only, with K6 (Jen/Jeff) creative as the visible asset. This is a soft-funnel play, not a direct-pain hook.

**Hank (Rural Buyer) — hunting / rural-lifestyle viewers:**
```
youtube.com/@MeatEater
youtube.com/@Backfire
youtube.com/@Iraqveteran8888
youtube.com/@HickokYou                (rural-friendly + reviewer overlap)
youtube.com/@SootchOO
```

**Jen/Jeff (First-Timer) — education / beginner-friendly:**
```
youtube.com/@PewPewTactical           (beginner playlists)
youtube.com/@MrsGunGoddess
youtube.com/@ConcealedCarryChannel
youtube.com/@theyankeemarshal         (no-nonsense beginner takes)
```

### Custom Intent Audience Setup (Topic + Search)

For each persona, build a Custom Intent audience using:
- Google searches: the keyword group from that persona (K1-K6)
- URL visits: relevant competitor / forum / review URLs from the persona's hangouts list in `buyer-personas.md`

### Universal Compliance Notes
- Google may flag firearm-content channels as "limited ads" inventory. Submit anyway — enforcement is inconsistent and many placements still serve.
- All YouTube creative must respect the same safe/banned keyword list as Search ads.
- Caption every video — autoplay is muted by default. The first 5 seconds of muted captions decide everything.

---

### Video Ad Scripts (persona-specific, all 15-25 sec)

All scripts produced from `research/buyer-ad-angles.md`. Never show a firearm on screen. Show: livestream UI, chat bubbles, an auction paddle silhouette, a phone, a host's face (waist-up, neutral background), a "LIVE" badge.

**Script A — Kyle (Deal-Hunter) — Fee Stack (Angle 2)**
```
[0-3s] On-screen text: "1% comp fee."
[3-5s] Text: "1% marketplace fee."
[5-7s] Text: "18% buyer's premium."
[7-10s] Text: "Sound familiar?"
[10-15s] VO: "Live shows. Real hosts. The fee stack ends here."
[15-20s] End card: "Get notified. Free." + logo + URL.
```

**Script B — Marcus (Collector) — Detail / Q&A (Angle 3)**
```
[0-3s] Close-up of an unrelated vintage object (a watch case, a brass instrument) rotating under studio light.
[3-7s] Cut to: chat-bubble icon over "LIVE" badge.
[7-12s] VO: "Static photos lie by ten to twenty percent. Live shows let you ask the host."
[12-17s] VO: "Watch the host rotate the lot. See the markings. Before the chat closes."
[17-22s] End card: "Collectible lots run live. Get notified." + logo.
```

**Script C — Dale (Estate Buyer) — Fee Stack (Angle 1)**
```
[0-3s] On-screen: "$1,300 hammer."
[3-6s] Animation: receipt unfolding, line items adding up. "...buyer's premium. Packing. Shipping. Transfer."
[6-9s] Text: "Total: $1,766."
[9-13s] VO: "The hammer price is half the story."
[13-18s] VO: "Estate-quality lots. Live. Without the surcharge."
[18-22s] End card: "Get notified when estate lots run." + logo.
```

**Script D — Hank (Rural Buyer) — Distance (Angle 6/7)**
```
[0-3s] Windshield-view shot of empty rural highway at sunset.
[3-6s] VO: "Your nearest decent shop is 90 minutes away."
[6-9s] Cut to: same person on a couch with a phone showing a "LIVE" badge.
[9-13s] VO: "Live shows bring national variety to your couch."
[13-18s] VO: "Stop driving 90 minutes for the wrong selection."
[18-22s] End card: "Get notified. Free." + logo.
```

**Script E — Jen/Jeff (First-Timer) — Lurker-Friendly (Angle 8/16) [also runs on Meta/TikTok]**
```
[0-3s] Stylized illustration: a theater audience, one figure in soft focus in the back row.
[3-7s] VO: "New to live shows? Sit in the back. Lurk."
[7-12s] VO: "Read the chat. Listen. There's no pressure to participate."
[12-17s] VO: "When you're ready, ask. Until then, just watch."
[17-22s] End card: "Beginner-friendly shows. Get notified." + logo.
```

**Important:** No script shows a firearm. Where the creative needs to suggest the category (Marcus's vintage object close-up), use an ambiguous proxy item — never the regulated product.

---

## Display / Retargeting (Phase 3)

This is how Glock, Sig Sauer, and Daniel Defense are running 120M+ impressions. Retargeting uses Google's ad exchange (AdX), which has looser enforcement than direct Search ads.

### Setup
1. Install Google Ads remarketing tag on `gunstreamer.com` + `live.gunstreamer.com`
2. Build **per-persona retargeting audiences** based on which ad group originally drove the visit:
   - K1 visitors → Kyle retargeting pool
   - K2 visitors → Dale retargeting pool
   - K3 visitors → Marcus retargeting pool
   - K5 visitors → Hank retargeting pool
   - K6 visitors → Jen/Jeff retargeting pool
   - K4 (Trent) — DO NOT retarget on Display. Stay search-only.
3. Create display ads per persona (banner sizes below)
4. Target each retargeting pool with persona-matched creative

### Display Ad Sizes to Create (per persona)
- 300x250 (medium rectangle)
- 728x90 (leaderboard)
- 160x600 (skyscraper)
- 320x50 (mobile banner)

### Display Ad Creative Rules (per persona, all safe-list compliant)
- **Kyle:** Receipt graphic with fee line items. Headline "1% Comp Fee. 1% Mkt Fee. 18% Premium." CTA "Get Notified."
- **Dale:** Hammer + receipt unfolding. Headline "$1,300 Hammer. $1,766 Invoice." CTA "Get Notified."
- **Marcus:** Chat-bubble icon over "LIVE" badge. Headline "Photos Lie. Live Doesn't." CTA "Get Notified."
- **Hank:** Radar pulse / national map. Headline "National Inventory. From Your Couch." CTA "Get Notified."
- **Jen/Jeff:** Welcoming theater-audience illustration. Headline "Sit in the Back. Watch. Learn." CTA "Get Notified."

**Hard rule:** No gun imagery, no holster, no ammo box, no magazine, no suppressor silhouette in ANY display creative. Twitch/YouTube aesthetic only — phones, chat bubbles, LIVE badges, hosts on camera waist-up.

---

## What to Do When Ads Get Rejected

### Step 1: Read the Rejection Reason
Google will cite a specific policy. Usually "Dangerous products or services."

### Step 2: Appeal
In Google Ads → Tools → Policy Manager → find the rejected ad → click "Appeal."

**Appeal script (refreshed May 2026 — cites verbatim policy):**
> "This ad promotes a livestreaming entertainment platform, not firearms sales. The advertised page (`live.gunstreamer.com`) collects email signups for stream notifications only. There are no product listings, no pricing, no 'buy / shop / order' functionality, and no firearms displayed above the fold or in the conversion flow.
>
> Google Ads Dangerous Products and Services policy (https://support.google.com/adspolicy/answer/6014299) prohibits 'promoting or selling firearms and certain firearms parts or related products.' This ad does neither. The platform itself is an entertainment / media service for licensed retailers operating in a federally regulated industry — analogous to other regulated-industry media platforms permitted on Google Ads.
>
> We request a manual review of this ad and landing page by a human policy specialist."

**Why the rewrite:** The earlier appeal script was correct but generic. Citing the verbatim policy clause + URL + explicit statement of what is NOT on the LP measurably improves reinstatement rates (per the May 2026 compliance research and dealer-side track record).

### Step 3: If Appeal Fails
- Revise landing page to be even cleaner
- Remove ANY mention of "firearms" from the landing page (use "dealer shows" or "live shows")
- Try a different domain
- Resubmit with new ad copy

### Step 4: If Repeated Rejections
- Switch to Bing/Microsoft Ads (same format, more lenient)
- Use programmatic display through a DSP (not Google Ads directly)
- Focus on the channels that don't have firearms policies (see alternatives below)

---

## Tracking & Measurement

### Conversion Tracking Setup
1. Google Ads → Tools → Conversions → New conversion action
2. Type: Website
3. Category: Sign-up
4. Name: `livestream_notification_signup`
5. Value: Assign a value (e.g., $2-5 per signup based on your expected conversion rate from signup to viewer to buyer)
6. Install the tag on your thank-you/confirmation page (NOT the signup page)

### UTM Parameters
Add to all ad URLs:
```
?utm_source=google&utm_medium=cpc&utm_campaign={campaign_name}&utm_term={keyword}&utm_content={ad_id}
```

### KPIs to Track Weekly — Per Persona

CPA varies dramatically by persona. The May research shows Trent (NFA) signup is worth ~10x Jen/Jeff (first-timer) signup in eventual LTV. Track per-ad-group, not aggregate.

| Persona / Group | CPA Target | CTR Target | Conv Rate Target | Notes |
|---|---|---|---|---|
| K1 — Kyle (Deal-Hunter) | <$4 | >3% | >12% | Primary CAC engine. Highest volume. |
| K2 — Dale (Estate Buyer) | <$8 | >2% | >10% | High-LTV. Branded competitor search converts best. |
| K3 — Marcus (Collector) | <$10 | >2% | >8% | Smaller segment, high-ticket eventual buyer. |
| K4 — Trent (NFA) | <$15 | >1.5% | >6% | Search-only. Highest LTV per signup. |
| K5 — Hank (Rural) | <$5 | >3% | >12% | Underserved + low channel competition. |
| K6 — Jen/Jeff (First-Timer) | <$3 | >2.5% | >15% | Cheap but low immediate value. Retention-driven LTV. |
| K7 — Brand/Competitor | <$3 | >4% | >18% | Highest CVR. Lowest CPC. Run aggressively. |
| **Quality Score (all groups)** | >5 | — | — | Persona-matched RSAs should hold 6-8. |

**Action triggers:**
- CTR <1% sustained for 5 days → refresh RSA headlines (likely keyword-message mismatch)
- Conv rate <5% sustained → LP issue, not ad issue (test alternate LP)
- CPA 2x target sustained → pause ad group, audit keywords for off-intent matches

---

## Dos and Don'ts Summary

### DO
- Frame everything as entertainment/notifications, not commerce
- Use a clean landing page with ONLY an email signup
- Start with a small budget to test approval
- Use "licensed dealers" and "FFL" — these show legitimacy
- Appeal rejections with clear explanation
- Track everything with UTMs and conversion tags
- Start with Search, expand to YouTube and Display after approval
- Keep ad creative focused on the streaming platform UI, not guns
- Use negative keywords aggressively to block wasted spend
- Monitor search terms report weekly and add negatives

### DON'T
- Link ads to the main GunStreamer storefront
- Use "buy," "shop," "order," "bid," or "auction" in ad copy
- Reference specific firearm models (AR-15, Glock, etc.) in ads
- Show firearms with pricing in display/video ad creative
- Use Tier 3 keywords before your account is established
- Make big budget jumps (increase 20-30% at a time max)
- Ignore policy rejections — always appeal
- Run ads without conversion tracking
- Use the same ad copy across all ad groups (tailor to each)
- Give up after first rejection — enforcement is inconsistent

---

## Alternative Platforms (If Google Doesn't Work)

| Platform | Why | Setup Difficulty |
|----------|-----|-----------------|
| **Bing/Microsoft Ads** | Same ad format, less restrictive on firearms | Easy (import from Google) |
| **Rumble Ads** | Gun-friendly platform, growing audience | Medium |
| **Taboola/Outbrain** | Native ads on news/outdoor sites | Medium |
| **Gun forum banners** | AR15.com, GunBroker, etc. — you're already doing this | Done |
| **Podcast sponsorships** | Zero policy restrictions, engaged audience | Easy |
| **Armanet** | Ad network built specifically for firearms industry | Easy |
| **Direct creator sponsorships** | Pay gun YouTubers for a plug, bypass Google entirely | Varies |

---

## Today's Action Items — Persona-Sequenced Launch

### Pre-launch (before any spend)
1. **Build the buyer landing page** — `live.gunstreamer.com`. Email signup only. NO gun imagery, NO commerce. LP should detect UTM persona tag and personalize the H1 (K1 → fee headline; K2 → estate headline; etc.).
2. **Create fresh Google Ads account** — Business category "Entertainment / Media." Credit card on file (not prepaid).
3. **Install conversion tracking** — Event `livestream_notification_signup`, category Sign-up. Tag on thank-you page only.
4. **Build 7 ad groups (K1-K7) per the persona-based structure above** — DO NOT merge ad groups to save time. The whole architecture depends on persona-matched relevance.
5. **Build per-persona RSAs** from the headlines/descriptions section above. Pin H1 as specified.
6. **Add negative keywords list** from this doc on day 1, at the campaign level.

### Week 1 launch (highest ROI / safest)
7. **Launch K1 (Kyle), K6 (Jen/Jeff), K7 (Brand)** at $20/day each ($60/day total). Phrase match only.
8. **Submit ads** — expect 1-2 business days for first review; 20-40% of ads may flag on first pass.
9. **Appeal rejections immediately** with the verbatim policy citation script (above). ~30% of appeals are reinstated.
10. **Daily check:** approval status, CPM, CTR, conversion rate. NO budget changes in week 1.

### Week 2 — add high-LTV + underserved
11. **Add K2 (Dale) + K5 (Hank)** at $15/day each. Keep K1/K6/K7 running.
12. **Geo-layer K5** with rural ZIP-code bid adjustment +30%.
13. **First retargeting audience build** — visitors from K1/K2/K6 who didn't convert.

### Week 3 — add collectors
14. **Add K3 (Marcus)** at $10/day. Add Custom Intent audience pulling from collector forum URL visits.
15. **Launch YouTube In-Stream** against persona-validated channels for Marcus + Hank + Kyle.
16. **First display retargeting campaign** for K1/K2 audiences.

### Week 4 — add NFA (search-only) + scale
17. **Add K4 (Trent)** at $10/day, **Search only**. Never extend Trent creative to YouTube/Display/Meta.
18. **Scale winning ad groups** — 20-30% budget jumps max per Google's algorithm tolerance.
19. **Kill underperformers** — any ad group at 2x CPA target for 7+ days.

### Ongoing
20. **Weekly:** review search terms report per ad group; add negatives.
21. **Bi-weekly:** rotate in 1-2 new RSAs per persona (refresh creative before fatigue).
22. **Monthly:** re-pull `buyer-voc.md` from forum activity — buyer language shifts. Refresh headlines against new verbatim pulls.

### If rejected at scale
23. **First fallback:** clean LP further, swap to a separate domain (`watchliveffl.com` style).
24. **Second fallback:** Bing/Microsoft Ads (import all 7 ad groups via Google Import).
25. **Third fallback:** Rumble Ads, Armanet, direct YouTube creator sponsorships.

---

## References

- [Google Ads Dangerous Products and Services Policy](https://support.google.com/adspolicy/answer/6014299)
- [Google Firearms Ad Policy (legacy URL)](https://support.google.com/adspolicy/answer/16489226?hl=en)
- [Meta Transparency Center — Weapons/Ammunition/Explosives](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/weapons-ammunitions-explosives/)
- [ProPublica: Google Makes Money From Gun Ads](https://www.propublica.org/article/google-guns-ads-firearms-alphabet-advertising)
- [The Markup: Google's YouTube Blocklist](https://themarkup.org/google-the-giant/2021/04/08/how-we-discovered-googles-hate-blocklist-for-ad-placements-on-youtube)
- [Gun Advertising in 2025](https://concealedcarrymarketing.com/gun-advertising-firearms-and-digital-ads/)
- [Armanet — Google Ads for Guns](https://www.coriolisagency.com/is-armanet-the-google-ads-for-guns-weve-been-waiting-for/)
- [Crimson Agility: Dos and Don'ts of Guns and Google Ads](https://crimsonagility.us/the-dos-and-donts-of-guns-and-google-ads/)

---

## Research Provenance

Every persona, pain point, keyword group, headline, video script, and channel placement in this playbook traces to the May 2026 buyer-side research sprint. The source-of-truth files (all in `~/Work/GunStreamer/research/`):

| File | What it contains |
|---|---|
| `buyer-personas.md` | 6 personas (Marcus, Trent, Dale, Kyle, Jen/Jeff, Hank) with fears, aspirations, hangouts, creative angles, targeting |
| `buyer-pain-points.md` | 20 ranked pains scored Frequency × Intensity (Tier 1 75+, Tier 2 50-74, Tier 3 30-49) |
| `buyer-voc.md` | 68 verbatim buyer quotes with source URLs, tagged by 13 use-case codes |
| `buyer-ad-angles.md` | 18 compliant ad angles with risk grading, channel fit, recommended launch order |

When buyer language or behavior shifts (new forum threads, new scam patterns, new auction fees), refresh those files first, then re-run this playbook against the deltas. The playbook is downstream of the research, not parallel to it.
