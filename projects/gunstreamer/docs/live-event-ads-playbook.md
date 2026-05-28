# GunStreamer Live-Event Ads Playbook + Scale Architecture

> **Created:** 2026-05-28
> **Status:** Strategy locked, pilot dealer #1 build pending
> **Scope:** Paid Meta + Google ads driving local viewers to weekly dealer live events
> **Funded by:** GunStreamer 100% (dealers pay nothing)
> **Recoup vehicle:** Existing 5% GMV commission on ad-driven buyers

---

## 1. The Compliance Doctrine (read first, breaks everything if violated)

Meta's firearm policy triggers on three things, in order of severity: **ad creative**, **destination domain**, **landing page content**. All three must read as "local business event" with zero firearm signal.

### Hard rules — no exceptions

- **Zero firearms, ammo, holsters, gun parts, targets, or silhouettes** in any image/video used in the ad
- **Zero firearm vocabulary** in ad copy or LP copy. Banned words: gun, firearm, weapon, ammo, ammunition, AR, AK, 9mm, rifle, pistol, handgun, shotgun, silencer, suppressor, magazine, 2A, Second Amendment, NFA, Class III, SOT, NICS, 4473, stamp, can, shoot, auction
- **gunstreamer.com is NOT the ad destination URL.** The word "gun" in the root domain triggers algorithmic scrutiny. Use a **neutral subdomain or separate domain** — recommended: `[dealer].glive.com` (new domain) or `live.[dealername].com` (dealer's own domain)
- **Advertiser name on the ad = the dealer's business name.** Real Page is fine, even if it contains "Gun" / "Firearms" — gun shops run Meta ads all the time for range hours, classes, hiring. Only switch to a DBA Page like "[Dealer] Live" if the real Page gets a policy strike.
- **LP must not show firearms even in stream preview thumbnails.** If embedding the stream, gate behind opt-in or show host-only frame

### Positioning line for everything

> *"Join [Dealer Name] live every [day] for behind-the-scenes deals, giveaways, and our local community."*

### The "barbershop test"

Every ad creative must pass the gut-check: **"Could this be a barbershop or brewery's live event ad?"** If a stranger can't tell what's being sold from creative + LP + URL, you're compliant. The dealer's existing customers fill in the implicit context themselves — that's the strategic advantage. You're hiding from Meta's algorithm, NOT from customers.

---

## 2. Funnel Architecture

```
Cold Ad (Meta or Google)
        │
        ▼
Local live-event LP (no firearm content)
        │  Form: name + phone + email + "remind me where?" (SMS preferred)
        ▼
Lead captured → tagged by dealer + event date in Klaviyo
        │
        ▼
Reminder sequence:
  Immediate: email + SMS "you're in"
  T-24h email: "Tomorrow night at 7pm — set a reminder"
  Day-of 9am: email "tonight at [time]"
  T-2h SMS: "Bob's live in 2 hours — link inside"
  T-15m SMS: "Going live now → [stream link]"
  T+2d email: "Missed it? Next event [date]"
        │
        ▼
Viewer watches stream → DMs/calls dealer → dealer closes via FFL (off-platform)
        │
        ▼
GunStreamer collects 5% commission on completed sale → recoup ad spend
```

---

## 3. Meta Campaign Structure (per dealer, per event)

**Budget:** $75–$120 of $50–$150 weekly spend per dealer on Meta. Reserve $25–$30 for Google search defense.

### Campaign
- Objective: **Leads** (test Instant Form vs LP form in week 1)
- Special Ad Category: None
- Advantage+ Audience: **On** — Meta finds local users better than manual interest stacking in the Andromeda era

### Ad Set
- Geo: **5–15 mile radius pinned on dealer's physical address**
- Age: 25–65
- Gender: All
- Detailed targeting: **Leave blank** — let Advantage+ + geo do the work. Manual interests like "shooting sports" will flag the ad set.
- Placements: Advantage+ (auto)
- Schedule: Run **4 days before** the event, ramp budget 40/30/20/10% across days

### Ads (3 variants — see section 5)
- Advertiser = dealer's Page
- Creative: storefront, host on camera, or community vibe
- CTA: "Sign Up" or "Get Reminder"
- Link to LP for variant A; Instant Form for variant B (test for show-up rate, not CPL)

---

## 4. Google Ads Structure (per dealer)

**Budget:** $25–$50/week. Pure brand defense + intent capture.

### Campaigns

1. **Branded Search** (~$10/wk) — bid on "[dealer name]", "[dealer name] live", "[dealer name] saturday"
2. **Local Service Search** (~$15–$30/wk) — exact + phrase match:
   - `[city] live shopping`
   - `[city] saturday night events`
   - `live events near me`
   - **Negative keywords:** firearm, gun, ammo, AR-15, handgun, pistol, rifle, range, shooting (kept negative to avoid policy flags AND wasted spend on mismatch intent)
3. **Performance Max** — skip in pilot. Too little spend, too little data.

**Conversion:** Lead form submit. Import from GA4 or set up direct GTM tag.

---

## 5. Creative Angles (3 ads per dealer per event)

### Angle A — The Host (best performer in pilots)
- 15-sec selfie video, dealer's host on camera in the shop
- Hook (0–3s): *"Every [day] at 7pm, we go live from [city] with deals our walk-ins never see."*
- B-roll: storefront exterior, host pointing at camera, crowd shot (no product)
- CTA: *"Tap to get a text reminder — first 50 get a free [non-firearm item: hat, koozie, sticker pack]."*

### Angle B — The Giveaway (highest opt-in conversion)
- Static or 5-sec video
- Headline: *"$200 [Local Restaurant] Gift Card — live drawing this Saturday"*
- Body: *"Free to enter, must be local to [city]. Winner picked live on our stream."*
- The prize justifies the email/SMS ask

### Angle C — The Community
- Carousel or 1:1 static
- 4 frames: shop exterior, host, crowd, "join us live [day] 7pm"
- Headline: *"[City]'s Saturday Night Hangout"*
- Soft, social-proof driven

### What NOT to test in pilot
- Product-tease creative (anything that implies category sold)
- Influencer/host shots holding any item (even a coffee mug — keep pattern clean)

---

## 6. Landing Page Spec

One LP per dealer, templated. Hosted on GunStreamer-owned domain (NOT gunstreamer.com).

### Above the fold
- H1: `[Dealer Name] Live — [Day] Nights at [Time]`
- Subhead: `Local deals, giveaways, and our community streaming live from [City]`
- Form: First name, phone (required), email (optional), "How'd you hear about us?" (hidden UTM capture)
- CTA button: `Text Me When We Go Live`

### Below fold
- Host photo + 2-sentence bio
- "What to expect" — 3 bullets, generic ("deals", "giveaways", "Q&A with [host]")
- Address + map of the physical shop (Meta loves real-business signal)
- "About [Dealer Name]" — 1 paragraph
- Footer: dealer's contact, privacy policy, SMS opt-in disclosure (TCPA-compliant — required)

### Must NOT include
- Any product photo
- Stream embed with auto-thumbnail (auto-thumbnail will show product = rejection)
- Words from the banned list (§1)
- Links to dealer's e-commerce/firearm inventory pages
- **GunStreamer branding or footer** — GunStreamer is back-end, dealer brand is front

### A/B test (week 1)
Meta Instant Form vs. LP form. Instant Form gives cheaper leads but lower show-up rate. LP form gives 2–3x show-up rate. Judge by **stream attendance per dollar**, not CPL.

---

## 7. Reminder Sequence (Klaviyo flows)

**Trigger:** Form submission, tagged with `dealer_id` and `event_date`

| When | Channel | Content |
|---|---|---|
| Immediate | Email + SMS | "You're in. We go live [day] at [time]. Save the date." |
| Event day, 9am | Email | "Tonight at [time] — what to expect" |
| T-2 hours | SMS | "[Host] is going live in 2 hours. Link drops at [time]." |
| T-15 min | SMS | "Going live NOW → [stream link]" |
| T+2 days | Email | "Missed it? Next event is [date]. Replay clips here." |

**Reuse the list.** Same person opting in across multiple events = high-LTV viewer. After 3 events attended, tag as VIP and message before public ads run.

---

## 8. Unit Economics

Per-event math (illustrative, validate with real numbers):

```
Ad spend per event:            $100
Leads captured:                  20  (CPL $5)
SMS opt-ins:                     14
Live viewers from ads:           6   (30% of leads attend)
Buyers from ad-driven viewers:   1   (17% buy rate among attendees)
Avg purchase price:           $800
GMV per event from ads:       $800
GunStreamer commission @ 5%:   $40
First-event ROAS:              0.4x  ← loses $60 on day 1
```

**First-event ROAS <1x is fine IF LTV math works:**

```
Customer who buys once:
  - 60% probability of buying again within 6 months
  - Avg lifetime purchases: 2.4
  - Total LTV GMV:           $1,920
  - GunStreamer LTV commission: $96
  - True ROAS on $100 spend: 0.96x  ⚠️ borderline at 5% commission
```

**Critical math note:** At 5% commission and the assumed funnel rates, unit economics are tight. Levers to improve:
- Increase live attendance rate (better reminder sequence)
- Increase buy rate (better dealer hosts, better lots, scarcity tactics)
- Increase repeat purchase rate (retargeting, post-event nurture)
- Lower CPL (creative iteration)

**Kill criteria (portfolio level, not event level):**
- A dealer's cohort 90-day ROAS < 1.0x AND no growth trajectory → kill
- Platform-wide 180-day ROAS < 1.5x → reduce spend, fix funnel before scaling
- Individual creative or geo underperforming → kill that variant, not the dealer

---

## 9. KPIs + Kill Criteria (per event)

| Metric | Target (pilot) | Kill if |
|---|---|---|
| Cost per Lead (Meta) | $3–$8 | >$15 after $75 spent |
| LP conversion rate | 25–40% | <15% after 200 visits |
| SMS opt-in rate | 70%+ of leads | <50% — form is broken or copy is off |
| Live stream attendees from ads | 15–30% of leads | <8% — reminder sequence is broken |
| Cost per live attendee | $10–$25 | >$40 — kill creative, not channel |
| Ad disapproval rate | 0 in week 1 | Any disapproval → immediately review against §1 |

Pull the plug on a creative if CPL >$15 after $50 spent OR any policy flag. Replace, don't appeal — appeals on firearm-adjacent accounts shorten the account's lifespan.

---

## 10. Lazy-Dealer Setup (zero technical work from dealer)

GunStreamer owns everything. Dealer does two things ONCE:

| Step | Dealer does | Time |
|---|---|---|
| 1 | Fill out 10-field intake form on phone (host name, photos, address, hours, event time, giveaway, stream URL) | 10 min |
| 2a | If dealer has existing FB Page: Tap "Accept" on Page admin request notification in FB app | 30 sec |
| 2b | If dealer has no Page: Nothing — GunStreamer creates a "[Dealer Name] Live" Page from inside the BM | 0 sec |

**Total dealer time investment: ~10–15 minutes one-time, ~5 minutes/week thereafter** (confirm event details, send new host clip).

### What GunStreamer owns centrally

| Asset | Owner | Notes |
|---|---|---|
| Business Manager | GunStreamer (multiple — see §11) | 3 BMs in pilot rotation for ban-risk isolation |
| Ad accounts | Inside GunStreamer BMs | One per dealer, isolated |
| Pages | Dealer's existing OR GunStreamer-created | GunStreamer is admin either way |
| Pixel | One per dealer ad account | Lives inside GunStreamer's BM |
| Domain | GunStreamer-owned (e.g., `[dealer].glive.com`) | Verified once per BM |
| Landing pages | GunStreamer hosts on one templated platform | Programmatic LP per dealer |
| Payment card | GunStreamer's dedicated ad-spend card | Ramp/Brex, separated from main ops card |
| Klaviyo | One GunStreamer account, lists segmented per dealer | One reminder flow, dealer-tag based |
| Google Ads | One MCC | Per-dealer accounts inside |

---

## 11. Multi-BM Rotation (ban-contagion containment)

Single BM = single point of failure. With 12+ dealers eventually 500, run them across **3+ GunStreamer-owned BMs**.

```
BM-1 (owned by Troy's personal FB)        → Dealers 1–4
BM-2 (owned by GunStreamer employee #2)   → Dealers 5–8
BM-3 (owned by GunStreamer employee #3)   → Dealers 9–12
```

### Mechanics
- Meta allows each personal FB account to own up to 2 BMs (verified businesses can request more)
- Don't need 3 employees — co-founders/family/W2 employees work
- One legal entity (GunStreamer LLC) is fine; multiple admin personal accounts
- **Each BM uses a DIFFERENT corporate card** so card-flagging doesn't cascade
- **Each BM verifies a DIFFERENT subdomain** so domain-flagging doesn't cascade (BM-1 verifies `live.glive.com`, BM-2 verifies `events.glive.com`, etc.)

### Ban response
- BM-1 banned → dealers 1–4 go dark, BM-2 and BM-3 unaffected
- Migrate dealers 1–4 to a pre-built warm BM-4 within 48 hours
- Document the migration SOP NOW, before it's needed

### Critical action items
1. **Apply for Meta Verified Business status THIS WEEK** — 2–4 week approval clock, gates everything at scale
2. **Open dedicated Ramp/Brex card just for ad spend** — separate from main ops card
3. **Identify the 2 personal FB accounts that will own BM-2 and BM-3** — employees, co-founders, or family
4. **Apply for Meta Marketing API access** — required for programmatic ad creation at Tier 3+, takes weeks

---

## 12. Scale Architecture: 1 → 500+ Dealers

### The strategic fork

| Path | What it is | Cost curve | Team |
|---|---|---|---|
| **Services** | GunStreamer growth team runs ads manually with templates | Linear — 1 person per 8–15 dealers | 300 dealers = 30 ops people |
| **Platform** | Software auto-creates ads, LPs, audiences. Humans monitor exceptions | Logarithmic — software does the work | 300 dealers = 3–5 ops + engineering |

**Past ~50 dealers, only Path 2 works.** Build with Path 2 in mind from dealer #2.

### Scale tiers

| Tier | Dealers | Model | What's built | Team |
|---|---|---|---|---|
| **Pilot** | 1–3 | Manual, hand-crafted | LP template, BM rotation, manual ad builds | Troy solo |
| **Templated** | 4–15 | Templates + light automation | Dealer intake auto-populates LP, ad copy library, batched onboarding | Troy + 1 part-time media buyer |
| **Semi-automated** | 16–50 | Workflow tools + scripts | Zapier/Make orchestration, dynamic creative templates, Looker reporting | + 1 full-time media buyer, + 1 part-time creative editor |
| **Platform** | 50–200 | Meta Marketing API + custom internal tool | Programmatic ad creation, auto-budget allocation, AI creative generation, multi-BM orchestration | + 1 engineer, + 1 ad ops lead |
| **Productized** | 200+ | Full ad-tech platform | Self-serve dealer portal, AI creative engine, automated compliance scanning, predictive budget allocation | Engineering team (2–3), ops (3–5), CS (1–2) |

**Trigger to move tier up:** When current tier's ops time exceeds 50% of team capacity, you're already late on the next tier's build. Start at 30%.

### Tech stack by tier

**Tier 1–2 foundation (build now, carries to scale):**
- Single LP template engine: Next.js or Astro on Vercel, dynamic route per dealer
- Centralized dealer database: Supabase or Postgres (NOT Airtable past 50 dealers)
- Klaviyo with dealer-tag segmentation
- GA4 → BigQuery from day 1 (Looker Studio reads from BQ)
- Subdomain-per-dealer architecture (`[dealer].glive.com`)

**Tier 3 automation layer:**
- Meta Marketing API integration
- Creative template engine (Bannerbear/Nano Banana + dealer variables)
- Per-dealer reporting in Looker
- Compliance pre-scan workflow (Claude/GPT API auto-scans creative + LP for banned keywords)
- Dealer SMS/Slack bot for weekly check-ins

**Tier 4 platform mode:**
- Multi-BM orchestration software
- Programmatic LP creation (new dealer → LP deployed in <1 hour)
- AI creative generation pipeline (Nano Banana for variants)
- Predictive budget allocation
- Self-serve dealer portal (magic link auth)

**Tier 5 productized:**
- Self-serve onboarding (form → automated everything, 72hr go-live)
- Compliance moat productized for other restricted verticals
- Marketplace mechanics (dealers can self-fund extra spend)

### Meta-specific scale limits

| Limit | What | When you hit it | Workaround |
|---|---|---|---|
| Ad accounts per BM | 5 default, 25 verified | ~5–25 dealers per BM | Multiple BMs + verified business status |
| BMs per person | 2 default | ~50 dealers | Multiple personal accounts |
| Pages per BM | ~200 | ~200 dealers | Spread across BMs |
| Spend per BM/card | Risk flag above ~$50k/month per card | 50+ dealers at scale | Multiple corporate cards, one per BM |
| Marketing API access | Requires business verification | Day 1 of programmatic | Apply EARLY (weeks-long process) |

---

## 13. Org Structure by Tier

**At 50 dealers (year 1 stretch):**
- Troy: strategic + accounts oversight
- 1 ad ops lead (full-time)
- 1 creative editor (part-time)
- 1 engineer (contract or part-time)
- Total cost: ~$200–300k/year

**At 200 dealers (year 2 stretch):**
- Troy: GM / strategy
- 2 ad ops (Meta vs Google + reporting)
- 1 creative team lead + 1 producer
- 1 full-time engineer
- 1 customer success
- Total cost: ~$600–900k/year

**At 500 dealers (year 3 stretch):**
- Engineering team (3): platform, AI creative, data
- Ad ops (4): segmented by region or BM
- Creative (3): editor, producer, designer
- CS (2)
- VP of Growth
- Total cost: ~$2M+/year

### Unit economics check at 500 dealers
- $2M / 12 / 500 = $333/dealer/month in fixed ops
- + $200–400/dealer/month in ad spend
- + ~$50/dealer/month in tooling
- **Total: ~$600/dealer/month all-in**
- Requires commission revenue ≥ $1,500/dealer/month for healthy unit economics

**Back-calculate your real commission baseline before committing to scale build.** This is the math gate.

---

## 14. Operational Risks (firearm-vertical-specific)

1. **Card-level Meta bans propagate by card.** If Meta flags your corp card across multiple dealer accounts, all flagged. Use 2+ cards across the portfolio, monitor monthly.

2. **One rogue dealer ad kills their BM and your Partner access.** Dealer agreement must forbid self-ads; monthly audit of accounts you have Partner access to.

3. **Lookalike contamination across dealers.** Don't build a Lookalike from Dealer #1's buyers and use on Dealer #2 — cross-pollinates pixel signal, creates audience overlap, Meta may associate accounts. Each dealer's audience stays in its own ad account.

4. **GunStreamer brand surfacing in funnel.** "Powered by GunStreamer" in LP footer = Meta crawls gunstreamer.com on the way down = risk. Strip GunStreamer branding from dealer-facing LPs entirely.

5. **Tax/accounting on ad spend as CAC, not COGS.** Track recoup by dealer cohort. Otherwise unit economics get muddy and scale decisions break.

6. **Same IP + browser fingerprint logging into multiple dealer accounts.** Use a separate browser profile per dealer (Chrome profiles or Multilogin) and consider residential VPN segmentation at scale.

---

## 15. Strategic Reframe

The product, at scale, is not "we run ads for gun shops."

The product is **a turnkey local customer-acquisition engine for any restricted/regulated vertical that can't run ads on mainstream platforms.**

- Firearms today
- Cannabis tomorrow
- CBD, fireworks, vape, online sports betting (state-by-state)

Compliance moat + multi-BM ops + programmatic creative engine = a platform deployable on any vertical Meta restricts. The dealers are the inventory, the platform is the asset.

That's the venture-scale story.

---

## 16. Day-One Action List

1. Apply for Meta Verified Business status (this week — 2–4 week clock)
2. Apply for Meta Marketing API access (this week — weeks-long verification)
3. Open dedicated Ramp/Brex card for ad spend (separate from main ops)
4. Identify 2 personal FB accounts to own BM-2 and BM-3 (employees, co-founders)
5. Stand up GunStreamer agency BM (BM-1) under Troy's personal FB
6. Set up Supabase with `dealers` table schema (build for 500 from row #1)
7. Build Next.js LP app on Vercel with dynamic `/d/[slug]` route reading from Supabase
8. Pick neutral subdomain root (recommended: `glive.com` or similar — NOT gunstreamer.com)
9. Pick pilot dealer #1 (criteria: cooperative host, real Page, willing to do 15-min intake)
10. Draft 2-paragraph dealer participation addendum to existing GunStreamer dealer agreement
11. Build dealer intake form (Tally or Typeform, 10 fields max)
12. Build Loom showing dealers exactly how to tap Page admin request

---

## Related Documents

- **Session log:** `sessions/2026-05-28-claude-code-gunstreamer-live-event-ads-scale-architecture.md`
- **Session-start prompts (3 parallel builds):** `projects/gunstreamer/Session-Start-Prompts-Live-Event-Ads-2026-05-28.md`
- **PROJECT-CONTEXT.md:** §6 (compliance discipline), §11 (open threads)
- **Earlier dealer-side Facebook Ads playbook:** `~/Work/GunStreamer/docs/facebook-ads-launch-set.md` (paused, B2B framing for dealer acquisition — different campaign type from this playbook)
- **Buyer-side Meta Ads playbook:** `~/Work/GunStreamer/docs/meta-ads-buyer-launch.md` (national buyer acquisition — different from this local-event playbook)
- **Compliant ad angles research:** `~/Work/GunStreamer/research/compliant-ad-angles.md` + `buyer-ad-angles.md`

---

*End of live-event-ads-playbook.md*
