# GunStreamer — Project Context

> **Last Updated:** 2026-05-20 12:00
> **Updated by:** Claude Code session — synthesis subagent
> **Update protocol:** Any AI tool may update this file when facts change. Append to the Changelog table at the bottom when updating.

---

## 1. AT-A-GLANCE

- **Positioning (locked):** "See it live before you buy it." (per `~/troy-os/projects/gunstreamer/CLAUDE.md`)
- **Phase:** PRE-LAUNCH — marketing content only, zero development work
- **Top priority RIGHT NOW:** Build the BUYER audience before any further FFL push. Buyer-side Meta + Google launch playbooks are research-complete; assets in progress
- **Marketing model:** Viral Operator — one big announcement, engineered launch
- **Last 3 troy-os commits to `projects/gunstreamer/`:**
  - `32eaad0` (2026-05-19) docs(gunstreamer): add ChatGPT image-gen brief for Meta buyer ads
  - `e8ec5df` (2026-05-19) docs(gunstreamer): add Meta Ads buyer-side launch (Meta-safe lean)
  - `974d114` (2026-05-19) docs(gunstreamer): add buyer-side Google Ads playbook + research

**Conflict alert (resolve before launch):**
- `troy-os/projects/gunstreamer/PROJECT-SETTINGS.md` says "3% transaction fees"
- `troy-os/projects/gunstreamer/CONTENT-GROWTH-STRATEGY-2026.md` and most recent docs say "5% take rate"
- Older `MARKETING-PLAYBOOK.md` (Jan 2026) still says "3%"
- **Working assumption for current copy: 5%.** Settings file is stale.

---

## 2. THE BUSINESS

**What GunStreamer is.** A livestream commerce platform for federally-licensed firearm dealers. Dealers go live, host an auction in real time, buyers watch the host handle the lot on camera, ask questions in chat, and bid. Inventory ships FFL → buyer's local FFL → buyer.

**Business model.**
- Platform take rate: **5%** (per CONTENT-GROWTH-STRATEGY-2026.md). Legacy comp claim still floating in some docs: 3% (PROJECT-SETTINGS.md). Resolve to 5% in new copy.
- **7-day payouts** — pitched against legacy processors' 14-90 day settlement + chargeback freezes
- **FFL-verified hosts only** — every seller is a federally-licensed dealer; this is the trust anchor
- Revenue lever roadmap (Phase 3+): buyer protection plans, payment plans on high-ticket guns, shipping handling, FFL featured placement

**The wedge / mechanism.** Live video + live chat + auction-style bidding fixes three structural problems GunBroker, Proxibid, and HiBid cannot solve:
1. **Inspection gap** — Static photos hide 10-20% of true wear. Live video shows the bore, the cartouche, the trigger pull, the holster wear on demand
2. **Q&A latency** — On legacy platforms, ~50% of buyer questions go unanswered before the auction closes. Live chat collapses the loop to seconds
3. **Fee stack** — Legacy auctions pile 17-25% buyer's premium + packing + shipping + insurance + FFL transfer + sales tax + 1% compliance fee + 1% marketplace fee. Hammer-to-out-the-door surcharge is 30-50%. GunStreamer runs leaner

**Anchor partner: BBGV** (Blue Book of Gun Values). 45-year firearm valuation authority used as the credibility anchor. 180K-subscriber BBGV email list is the highest-ROI growth lever once BBGV Phase 1 deliverability is recovered.

**Anchor inventory source.** BBGV consignment + estate flow. The "stuff you can't find on a wall in your town" inventory is what differentiates the platform from a Glock-19-at-MSRP retailer.

**Creator / dealer pipeline.** OI.io is the planned creator pipeline (per `troy-os/projects/gunstreamer/CLAUDE.md`).

**Marketing model.** Viral Operator. Hold the big public announcement. Build the supply (FFLs) and the demand (buyers + email list) in parallel. Then a single engineered launch event.

---

## 3. ICPs — DEALER SIDE (7 personas, May 13 research)

Source: `~/Work/GunStreamer/research/audience-segments.md` + `~/Work/GunStreamer/personas/*.md`

**Mike — Solo Home-FFL.** Type 01 kitchen-table dealer. 1 person, $15K-$80K/yr, age 38-62. Distributor cutoffs and limited customer window are his pain. Best angle: "30 Minutes a Day. National Audience. Real Revenue." (Angle 19). Find him on FFL list custom audiences + side-hustle interest layers.

**Dave — Brick-and-Mortar Shop Owner.** Type 01 with retail storefront + small range. 3-12 employees, $500K-$5M, age 42-65. PRIMARY dealer CAC target. Pain: foot traffic down 35% from 2020; lease + payroll don't scale down on slow weeks. Best angles: "Your Foot Traffic Isn't Coming Back" (Angle 5), "The Lease Doesn't Care How Quiet Today Was" (Angle 21).

**Eli — Auction House / Estate Specialist.** Type 01/02 with regular auction operation. 4-30 employees, $1M-$15M, age 48-70. Pain: buyer's premium model breaking, younger buyers not showing up. Best angle: "Estate Liquidation, Done Right" (Angle 13). Find via auctioneer associations + LinkedIn.

**Ryan — Class III / SOT Dealer.** Type 07 manufacturer or 01 with SOT. 2-15 employees, $400K-$8M, age 32-55. Reddit-native, Discord-fluent. Pain: 6-12 month Form 4 wait turns paying customers cold; processor risk on high-ticket transactions. Best angle: "Keep Your Customer Warm For 8 Months" (Angle 12). Find via SOT list + r/NFA + YouTube NFA viewers.

**Sarah — Online-Only Retailer / E-Commerce FFL.** Type 01, Shopify + GunBroker. 1-8 employees, $200K-$3M, age 30-50. High tech comfort, multiple platform bans behind her. Pain: payment processor freezes, ad-account bans. Best angle: "When Banks Say No, We Say Welcome" (Angle 16).

**Joe — Pawn Shop with FFL.** Type 01 inside a pawn shop. 2-20 employees, $400K-$4M, age 45-68. Low tech comfort. Pain: aging trade-in inventory tying up working capital. Best angle: "Your Inventory Is Aging. Move It in 90 Minutes." (Angle 10).

**Greg — Gun-Show Vendor Going Digital.** Type 01, primary business is gun-show tables. 1-3 people, $80K-$500K, age 50-72. Pain: shows shrinking, booth fees rising, knees giving out. Best angle: "Bring the Show Floor to Every Phone" (Angle 9, rewrite required for compliance).

### Top dealer pain scores (`research/pain-points.md`)

| Pain | Score | Who feels it |
|---|---|---|
| Payment processors freeze funds | **100** | Every FFL |
| ATF Zero Tolerance / license risk | **90** | Every FFL |
| Can't advertise on Meta/Google/TikTok | **90** | All consumer-facing FFLs |
| Drop-ship margin collapse (2-5%) | **90** | B&M, online retailers |
| Banks debank entire business | **80** | Online, SOT, manufacturers |
| Foot traffic dying (-35% from 2020) | 72 | B&M with lease |
| Declining-sales environment generally | 72 | All |
| GunBroker fee stack | 63 | Anyone listing there |

---

## 4. ICPs — BUYER SIDE (6 personas, May 19 research)

Source: `~/Work/GunStreamer/research/buyer-personas.md` (mirrored to `~/troy-os/projects/gunstreamer/research/buyer-personas.md`)

**Marcus — Vintage / Milsurp Collector.** Pre-64 Winchesters, Colt SAAs, K98s, Lugers. Provenance matters. Age 48-72, $80K-$300K income. Fear: dropping $4K on a "95%" piece that's a refinish-bubba job. Channels: Forgotten Weapons, Rock Island Auction streams, Gunboards, Colt Forum. Best angle: "See the Detail. Ask the Question. Before You Bid." Out of scope for Meta — collector context forces firearm visuals.

**Trent — NFA / Stamp Buyer.** Suppressor + SBR buyer. 2-12 stamps already. Age 28-48, $70K-$200K. Reddit-native (r/NFA). Fear: dealer ghosts post-payment now that ATF wait times have collapsed. Best angle: "ATF Says 4 Days. Your Dealer Says 4 Months." Channels: Reddit, YouTube, Google Search. **Cannot run on Meta.**

**Dale — Estate / Auction Buyer.** Buys used at fair prices, knows hammer ≠ cost. Age 50-72, $60K-$200K. Fear: 17% buyer's premium + $25 packing + $61 shipping + $40 FFL turning a $1,300 hammer into $1,766. Best angle: "Estate-Quality Lots. Live. Without the 25% Buyer's Premium." Out of scope for Meta — auction + firearm context too risky.

**Kyle — Deal-Hunter.** Price-shops every purchase. r/GunDeals lurker. Age 25-45, $45K-$120K. Fear: fee stack ($35 ship + $50 transfer + $42 tax + $8 comp fee) kills the deal. Best angle: "1% Comp Fee. 1% Marketplace Fee. 18% Buyer's Premium. Sound Familiar?" **#1 CAC engine — biggest segment, highest intent.** On Meta, only the soft "vetted hosts" framing — never name fees verbatim.

**Jen / Jeff — First-Time / Entry-Level Buyer.** New gun owner or considering becoming one. Age 25-55, $50K-$130K. Fear: getting upsold or condescended to at a local shop. Best angle: "Sit in the Back. Watch. Learn. Ask When You're Ready." **Primary Meta persona** — safest for paid social.

**Hank — Rural / Distance-Constrained Buyer.** 60-150 minutes from a real-selection dealer. Age 35-65, $45K-$120K. Fear: three drives for one gun (drive to shop, drive home empty, drive back for transfer). Best angle: "National Inventory. From Your Couch." Secondary Meta persona — geo-targeted rural ZIPs.

### Top buyer pain scores (`research/buyer-pain-points.md`)

| Pain | Score | Who feels it |
|---|---|---|
| Buyer's premium + ship + transfer fee stack = 30-50% surcharge | **90** | Dale, Kyle, Marcus |
| Scams + no real buyer protection ($400 GB cap) | **90** | Every buyer |
| Hidden / stacked platform fees (comp fee, marketplace fee) | **81** | Kyle, Marcus, Dale |
| Seller doesn't answer "Ask Seller a Question" pre-close | **81** | Marcus, Dale |
| Photos hide condition; arrives worse than described | **81** | Marcus, Dale, Kyle |
| Customer service "is a black hole" | **80** | Every buyer on legacy |

---

## 5. CURRENT MARKETING CHANNELS — STATE OF EACH

### Forum previews (organic, daily) — ACTIVE
- **33 active forums** in `~/clawd/scripts/gs-forum-automation/.forum-registry.json` (registry last updated 2026-05-12). 7 core + 26 extended.
- **Active keys (core):** agf, bayou, gulf, ingo, mds, swf, tgt
- **Active keys (extended):** 1911addicts, 1911forum, coltforum, duckhuntingchat, firearmstalk, georgiasporting, glocktalk, gunandgame, gunboards, handgunforum, hkpro, homesteadingforum, m14forum, marlinowners, msgo, nationalgunforum, njgunforums, nyfirearms, rimfirecentral, rugerforum, rugerforumcom, shotgunforums, sigtalk, smithandwessonforums, thefirearmsforum, trapshooters
- **Dealer schedule (per `~/Work/GunStreamer/CLAUDE.md` — DO NOT ASK AGAIN):**
  - eGunco's: 1:00 PM CT / 2:00 PM ET, M-F
  - Shotgun Sports: 5:30 PM CT / 6:30 PM ET, M-F
  - Tucker's Guns & Ammo: variable — confirm per stream
  - Van's Sporting Goods: variable — confirm per stream
- **Automation entry points:**
  - Single forum: `~/clawd/scripts/gs-forum-automation/preview.py --forum <key>`
  - Dual-dealer: `run_dual_preview_YYYY_MM_DD.py` (copy most recent, update date + lots, run)
  - Extended fanout: `run_preview_YYYY_MM_DD_extended.py`
  - Recap reply: `recap_reply_egunco_YYYY-MM-DD.py`
- **Format rules:** XenForo BBCode, ≤80 char titles, 6 rotating title + body variants, wave posting (4 forums/wave, 12s delay), brand overrides by forum (glocktalk → lead Glocks, trapshooters → lead shotguns, 1911forum → only if 1911 in lineup, etc.)
- **Recent outputs:** `~/Work/GunStreamer/forum-previews/2026-05-13-*`, `2026-05-18-*`

### Reddit — PARTIAL
- `~/Work/GunStreamer/reddit-content/` exists
- `reddit-karma` skill exists for karma-farming pre-post
- Dealer Reddit onboarding doc: `~/Work/GunStreamer/docs/DEALER-REDDIT-ONBOARDING.md`
- Reddit posting + sub setup playbooks: `docs/REDDIT-POSTING-STRATEGY.md`, `docs/REDDIT-SUB-SETUP.md`, `docs/REDDIT-FFL-AEO-PLAYBOOK.md`

### Google Ads (buyer-side) — PLAYBOOK READY, NOT LAUNCHED
- `~/Work/GunStreamer/docs/GUNSTREAMER-GOOGLE-ADS-PLAYBOOK.md` — full rewrite May 19 against 6-persona research
- Conversion frame: newsletter signup, not firearm purchase
- Creative production order: Kyle → Hank → Marcus → Dale → Jen/Jeff → Trent

### Meta Ads (buyer-side) — PLAYBOOK READY, ASSETS IN PROGRESS
- `~/Work/GunStreamer/docs/meta-ads-buyer-launch.md` (508 lines) — Meta-safe lean version
- Personas in scope: Jen/Jeff (primary), Hank (secondary), Kyle (tertiary, softened framing)
- Personas excluded from Meta: Marcus, Dale, Trent (all run on Google/Reddit/YouTube only)
- 3 cinematic-documentary-realism creative prompts ready (hunter-01 "the find," hunter-02 "the deal," hunter-03 "the sleeper") — Troy generating in ChatGPT against `~/Work/GunStreamer/assets/ads/buyer-meta/CHATGPT-BRIEF.md`
- Campaign architecture: 3 ad sets (Broad Lifestyle, Live-Commerce Interest, Rural Geo); $20-30/day starting CBO
- See detailed handoff in §11 below

### Facebook Ads (dealer-side) — PLAYBOOK READY, PAUSED
- `~/Work/GunStreamer/docs/facebook-ads-launch-set.md`
- B2B SaaS framing, dealer applications to `gunstreamerdealers.com`
- Holding while buyer-side ramps; will reactivate per phase priority

### YouTube — PLANNED PER PERSONA, NOT LAUNCHED
- Persona-by-persona placement targeting plans in `research/buyer-personas.md`
- Marcus → Forgotten Weapons, RIA, C&Rsenal, InRangeTV
- Trent → Pew Pew Tactical, Garand Thumb, sound-test channels
- Kyle → dealer-review channels, deal-hunter creators
- Jen/Jeff → first-time-buyer education (Mrs Gun Goddess, Pew Pew beginner playlists)
- Hank → Meateater, Backfire, Iraqveteran8888, hunting/varmint creators

### Email — THREE COMPLEMENTARY SYSTEMS (resolved 2026-05-19, no actual conflict)

The PROJECT-CONTEXT v1 flagged a Gmail-vs-Klaviyo conflict. The conflict isn't real — they handle different audiences. Three systems coexist:

| System | Audience | Trigger | Stack | Status |
|---|---|---|---|---|
| **A. Dealer Inbound Nurture** | FFL dealer leads from `gunstreamer.com/dealers` form | Tally form submission | Gmail/Tally manual, 5 templates, 14-day sequence | Production-ready (see `launch-kit/lead-nurture-system.md`). Auto-migrates to Klaviyo when volume >5 leads/week per the doc's own upgrade trigger |
| **B. Buyer Signup + Stream-Launch Autoresponder** | New buyers from Meta/Google ads + organic via `live.gunstreamer.com` | Google Sign-In OAuth | All-Google stack: GIS frontend + Apps Script Web App + Google Sheet + MailApp autoresponders | **NEW** — spec complete, code ready, not deployed (see `launch-kit/buyer-google-oauth-system.md`). Ceiling: 2,000 sends/day. Migration trigger at 1,800 subs. |
| **C. Legacy 184K Wave Launch** | 184K BBGV-cross-pollinated cold contacts | Bulk wave send (no user action) | Klaviyo, separate account | Wave 1 sent (10K), 17 waves remaining, 135K in Reoon validation queue. Phase 2 will add Klaviyo flows for "Live Intel" (buyer weekly) + "Dealer Brief" (FFL biweekly). See `CONTENT-GROWTH-STRATEGY-2026.md`. |

**Important:** Systems B and C must NEVER be merged into the same Klaviyo account. System B's list is clean (one-click Google-verified). System C carries inherited deliverability baggage. Mixing them would tank the buyer list's sender reputation.

**Meta launch dependency:** System B is the missing piece that unblocks the Meta ad launch. Section 7 of the Meta playbook requires "signup → instant confirm <60s" — System B's Apps Script handles this natively via `MailApp.sendEmail()` on form submission.

### Content / Blog — STRATEGY READY, NOT EXECUTED
- `troy-os/projects/gunstreamer/CONTENT-GROWTH-STRATEGY-2026.md` — 8 foundational SEO posts planned for Q2 2026 (4 buyer-side, 4 FFL-side)
- Current SEO position: zero (new domain)

### Outreach / Sales — IN PROGRESS
- `~/Work/GunStreamer/partnerships/` — Python scraper for state-by-state org list (NRA Foundation banquets, Ducks Unlimited, NWTF, RMEF, SCI chapter events). SE-first priority: AL → GA → TN → FL → MS → SC → NC → KY → LA → AR → VA → WV → TX. Output: `partnerships/data/orgs.sqlite` + per-state CSVs
- BBGV cross-promotion (highest ROI): blocked on BBGV Phase 1 deliverability recovery

### Stream reports + weekly recap pipeline — ACTIVE (automated)
- Hourly cron `com.gunstreamer.stream-reports` parses forwarded GunStreamer reports
- Friday 06:30 cron generates weekly recap (`weekly_recap.py`)
- Most recent recap: `~/Work/GunStreamer/stream-reports/weekly/2026-W20-recap.md` (5 streams, $9,203 GMV, 66 firearms sold)
- Pipeline code: `~/clawd/scripts/gs-stream-reports/`
- Skill: `gs-weekly-recap` turns recap into Reddit + forum + X + IG posts

---

## 6. COMPLIANCE DISCIPLINE (locked rules)

Source verbatim from `~/Work/GunStreamer/research/compliant-ad-angles.md` + `buyer-ad-angles.md` + `docs/meta-ads-buyer-launch.md`.

### Paid social — non-negotiables
1. **Zero firearm imagery in any creative.** No guns, parts, ammo, magazines, holsters, scopes, suppressors, targets, gun-show booths, range backdrops, taxidermy, antlers, camo. If unsure, default to abstraction (wrapped fabric bundle, wooden case, leather pouch, out-of-focus silhouette behind dealer's hand)
2. **Banned keyword list in ad copy and LP above-the-fold:** gun, firearm, weapon, ammo, ammunition, AR, AK, 9mm, rifle, pistol, handgun, shotgun, silencer, suppressor, magazine, 2A, Second Amendment, NFA, Class III, SOT, NICS, 4473, stamp, can
3. **Conversion = newsletter / livestream notification signup.** Never purchase, never bid, never "shop now"
4. **Age-gate 21+** on every ad set (friction reduction, not legal)
5. **Safe vocabulary:** live, livestream, show, host, audience, watch, tune in, notify me, get notified, lot, consignment, estate, demo, real-time, chat, presenter, federally-licensed retailers, regulated industry, small business, retail

### Verbatim policy citations (use in appeal scripts)
- **Meta:** https://transparency.meta.com/policies/ad-standards/restricted-goods-services/weapons-ammunitions-explosives/ — "Ads must not promote the sale or use of weapons, ammunition, or explosives."
- **Google:** https://support.google.com/adspolicy/answer/6014299 — Dangerous Products and Services
- **TikTok:** Industry Entry policy — weapons, ammo, accessories prohibited globally

### Expected rejection rate
- Meta: 30-50% first-pass rejection. Submit 3-5 variants per ad set. ~30% of appeals reinstated
- TikTok: Stricter than Meta. Lead with software/dashboard creative only
- Have a backup ad account warmed 7+ days before launch under a different business entity

### Appeal script (tested verbatim on dealer side)
> "This ad promotes a livestream entertainment platform, not weapons. The advertised page collects email signups for stream notifications only. There are no product listings, pricing, or purchase functionality. Meta Transparency Center policy prohibits ads that 'promote the sale or use of weapons, ammunition, or explosives' (URL) — this ad does neither. We request a manual review by a policy specialist."

### Owned channels — different rules
- On gunstreamer.com, forum posts, email, X/IG organic, podcasts — "gun" / "firearm" / "watch the gun cycle" / "grill the dealer" are ALL fine. Do not confuse owned-channel voice with paid-social voice (Handoff §11 explicitly calls this out)

---

## 7. OPERATIONAL CONTEXT

### Dealers — 4 active streaming on weekdays
| Dealer | Schedule (Central) | Avg per gun | Notes |
|---|---|---|---|
| **eGunco's** | 1:00 PM, Mon-Fri | ~$228 | Daily grinder. Used guns. Hi-Points, SCCYs, Taurus G2C, RIA Melik. Volume engine. 346 lots / $79K GMV in dataset |
| **Shotgun Sports** | 5:30 PM, Mon-Fri | ~$364 | Mid-market. Used handguns. Sometimes runs a 2nd Friday 8pm ET stream. 39 lots / $14.2K GMV |
| **Tucker's Guns & Ammo** | Variable | ~$547 | Premium new-ish. Pulls highest per-stream revenue. Recent stream had a $1,754 Sig MCX Rattler. 12 lots / $6.6K GMV |
| **Van's Sporting Goods** | Variable | ~$278 | Selective. Smaller volume. 20 lots / $5.5K GMV |

*(Notes: `~/Work/GunStreamer/CLAUDE.md` cites Tucker's avg ~$1,500 and Van's avg ~$700 — those numbers are from earlier reporting periods or estimate the higher-ticket pieces. Live database aggregates above are from `sold_real` as of 2026-05-20.)*

### Top buyers — concentration risk
| Buyer | Lots | GMV | Avg | Notes |
|---|---|---|---|---|
| **Ronnie** | 71 | $18,156 | $256 | Bargain hunter, volume |
| **Jwballengee** | 63 | $15,518 | $246 | #2 volume |
| **smunro622** | 7 | $6,460 | $923 | Premium whale — buys Tucker's high-tickets ($1,754 Sig, $1,132 Benelli) |
| **larrybolen64** | 30 | $4,738 | $158 | Dedicated cheap-gun hunter |
| **allaboutconstruction** | 20 | $4,441 | $222 | Steady mid-tier |
| **rev426** | 11 | $3,982 | $362 | |
| **Bruce** | 5 | $2,463 | $493 | Quiet whale, fewer but bigger |
| **joehammer75** | 9 | $2,364 | $263 | |

- **Ronnie + Jwballengee = $33.7K of $105.3K total GMV = 32% of platform revenue concentrated in 2 buyers.** Real concentration risk to monitor going into launch
- Diversifying the top of the buyer leaderboard is implicit Phase 2 priority

### Sold database
- Location: `~/Work/GunStreamer/sold-db/sold.db` (SQLite)
- Current state (as of 2026-05-20): **419 total rows, 417 in `sold_real`** (2 test/canceled excluded), $105,336 GMV, date range 2026-03-01 to 2026-05-18
- **Always query `sold_real` view** (filters `status='sold'` — excludes test/canceled/refunded) — never raw `sold` table
- Pre-launch cutoff: ORD-1772393612 (March 1, 2026)
- Schema: `~/Work/GunStreamer/sold-db/schema.sql`. Key fields: `order_no` (unique key), `item`, `make`, `model`, `category`, `condition`, `sold_price`, `starting_price`, `bid_count`, `sold_date`, `sold_time`, `dealer` (egunco/shotgun_sports/tuckers/vans), `buyer`, `status`
- Importer: `import_ares.py` for Ares V4 admin paste batches; drops to `inbox/`, archives after success
- Analytics: `analyze.py` generates 4 markdown reports
  - `weekly-dealer-YYYY-MM-DD.md` — per-dealer revenue, top categories/makes/lots
  - `category-leaderboard.md` — all-time popularity & price by category, make, model
  - `stream-analytics.md` — stream length, velocity, hour-of-day, day-of-week
  - `pricing-benchmarks.md` — price percentiles (p25/p50/p75) by make + category
- Skill: `gunstreamer-sales` is the canonical interface — use it for any sales query
- Stream-reports pipeline (separate from sold-db): hourly cron pulls forwarded Live Session Reports + Live Comment Analysis emails from `troy@bluebookinc.com`, extracts into `stream-reports/extracted/` + `stream-reports/rollups/`

---

## 8. PLAYBOOK INVENTORY

### Strategy / canonical (troy-os, git-versioned)
| File | Path | Description |
|---|---|---|
| Brand voice | `~/troy-os/projects/gunstreamer/BRAND-VOICE.md` | 620 lines. 5 voice pillars, banned phrases, audience-specific tone (FFLs vs buyers), examples by format |
| Marketing playbook | `~/troy-os/projects/gunstreamer/MARKETING-PLAYBOOK.md` | 1761 lines. Soft launch playbook, Twitter templates, FFL outreach, buyer marketing, metrics dashboards. Last updated Jan 28 — some pricing figures stale |
| Content + growth | `~/troy-os/projects/gunstreamer/CONTENT-GROWTH-STRATEGY-2026.md` | 463 lines. 184K email wave plan, recurring newsletter cadence (Live Intel + Dealer Brief), 8-post SEO plan, FFL acquisition channels |
| Launch checklist | `~/troy-os/projects/gunstreamer/LAUNCH-CHECKLIST.md` | 418 lines. 5-phase launch readiness checklist with success criteria |
| Project settings | `~/troy-os/projects/gunstreamer/PROJECT-SETTINGS.md` | 57 lines. Quick-reference settings. **Contains stale 3% fee — update to 5%** |
| Operating instructions | `~/troy-os/projects/gunstreamer/CLAUDE.md` | 36 lines. AI-tool entry point. Skills mapping, brand rules |
| Buyer Google Ads | `~/troy-os/projects/gunstreamer/docs/GUNSTREAMER-GOOGLE-ADS-PLAYBOOK.md` | Mirrored May 19. Buyer-side Google rewrite |
| Buyer Meta Ads | `~/troy-os/projects/gunstreamer/docs/meta-ads-buyer-launch.md` | Mirrored May 19. Meta-safe lean campaign |
| Buyer research (mirrored) | `~/troy-os/projects/gunstreamer/research/buyer-{personas,pain-points,voc,ad-angles}.md` | Mirrored May 19 from `~/Work/GunStreamer/research/` |
| Buyer-Meta brief (mirrored) | `~/troy-os/projects/gunstreamer/assets/ads/buyer-meta/CHATGPT-BRIEF.md` | ChatGPT brief for image gen |

### Working files (`~/Work/GunStreamer/`)
| File | Description |
|---|---|
| `CLAUDE.md` | Dealer schedules, forum strategy, post format rules, "DO NOT ASK AGAIN" facts |
| `docs/GUNSTREAMER-GOOGLE-ADS-PLAYBOOK.md` + `.pdf` | Buyer-side Google Ads (PDF is older version) |
| `docs/meta-ads-buyer-launch.md` | Buyer-side Meta Ads (508 lines) |
| `docs/facebook-ads-launch-set.md` | Dealer-side Facebook Ads |
| `docs/advertorial-quiz-fomo-funnel.md` | Quiz funnel advertorial concept |
| `docs/VA-FORUM-ENGAGEMENT-PLAYBOOK.md` | VA playbook for forum engagement (note: forum count outdated — actual is 33, not 17) |
| `docs/FORUM-AUTOMATION-HANDOFF-2026-05-03.md` | Forum automation system handoff |
| `docs/DEALER-REDDIT-ONBOARDING.md` | Reddit playbook for dealer inbound |
| `docs/REDDIT-{POSTING-STRATEGY,SUB-SETUP,FFL-AEO-PLAYBOOK}.md` | Reddit posting + sub + AEO playbooks |
| `docs/FORUM-OUTREACH-HANDOFF-2026-05-01.md` | Forum outreach earlier handoff |
| `docs/dealer-welcome-sequence.md` | Dealer onboarding email sequence |
| `docs/dealer-stream-kit.md` | Quick-reference kit for dealers |
| `docs/community-strategy.md` | 90-day community strategy |
| `docs/ffl-acquisition-launch-playbook.md` | FFL acquisition launch plan |
| `docs/gunstreamerdealers-landing-page.md` | Dealer LP spec |
| `docs/launch-decisions.md` | Decisions log |
| `docs/eti-call-prep.md` | Sales call prep |
| `docs/press-release-1-relaunch.md`, `press-release-2-live-commerce.md` | Press release drafts |
| `docs/negative-review-response-package.md`, `review-response-execution-week1.md` | Review response playbooks |
| `docs/WEEKLY-MEETING-REPORT-2026-04-24.md` | Apr 24 weekly meeting report |
| `docs/2026-ffl-live-commerce-report-outline.md` | Industry report outline |
| `docs/Gun Streamer Strategy.md`, `GunStreamer Buyer Persona_Empathy Map.md` | Strategy + buyer empathy maps (older Feb-era) |
| `research/audience-segments.md` | 7 dealer personas (May 13) |
| `research/pain-points.md` | 25 dealer pain points ranked (May 13) |
| `research/compliant-ad-angles.md` | 22 compliant ad angles + risk matrix (dealer-side) |
| `research/buyer-personas.md` | 6 buyer personas (May 19) |
| `research/buyer-pain-points.md` | 20 buyer pains ranked (May 19) |
| `research/buyer-voc.md` | 68 verbatim buyer quotes |
| `research/buyer-ad-angles.md` | 18 buyer ad angles with risk grading |
| `research/competitor-positioning.md`, `competitor-ads.md` | Competitor analysis |
| `research/landing-page-pain-selection.md`, `landing-pages-v1.md`, `ad-creatives-v1.md` | LP + creative variants |
| `research/voice-of-customer.md` | Dealer VOC (separate from buyer-voc.md) |
| `research/tracking-spec.md` | Tracking spec |
| `personas/*.md` | 6 detailed dealer persona files (May 13/14) |
| `knowledge-base/voice.md`, `angles.md`, `mechanism.md`, `pain-points.md` | Knowledge base library |
| `knowledge-base/ad-scripts.md`, `formats.md`, `hooks-data.csv` | Creative library |
| `knowledge-base/cycle2-briefs.md`, `pillar5-sprint-roadmap.md`, `team-onepagers.md` | Sprint planning |
| `launch-kit/lead-nurture-system.md` | Gmail-only Tally-driven nurture (production reality) |
| `launch-kit/GO-LIVE.md`, `creative-1-brief.md`, `dealers.html` | Launch kit assets |
| `partnerships/README.md`, `SOURCE_QUEUE.md` | SE-first partnership outreach system (NRA, DU, NWTF, RMEF, SCI scraper) |
| `releases/dealer-case-study/`, `dealer-economics-vans/` | Case study + dealer-economics one-pagers (with hosted PDFs) |
| `marketing-ops/index.html`, `vercel.json` | Marketing ops landing |
| `assets/ads/buyer-meta/CHATGPT-BRIEF.md` | ChatGPT image-gen brief for current Meta buyer campaign |
| `assets/ads/V2-CHECKPOINT.md` | V2 ad system checkpoint |
| `assets/ads/build-video-ads.mjs`, `capture-*.mjs` | Node.js automation scripts for ad rendering |
| `sold-db/schema.sql`, `README.md` | Sales DB schema + workflow |
| `stream-reports/weekly/2026-W20-recap.md` | Most recent weekly recap |
| `forum-previews/2026-05-18-*.bbcode` | Most recent dual-dealer preview posts |

### Session memory (Obsidian)
| File | Date | Purpose |
|---|---|---|
| `Handoff-Meta-Ads-Setup-2026-05-19.md` | May 19 | **Most recent handoff.** Buyer-side Meta Ads campaign build instructions for Claude Desktop |
| `Homepage-Redesign-Brief-2026-02-24.md` | Feb 24 | Homepage redesign brief (when dev work resumes) |
| `Social-Media-Strategy-2026-02-24.md` | Feb 24 | 5-pillar social content strategy (buyers + dealers) |
| `Dev-Handoff-Live-Widget.md` | Feb 24 | Live widget conditional embed logic (LIVE vs OFFLINE states), 3 API endpoints |
| `homepage-prototype.html` | Feb 24 | Static prototype of redesigned homepage |
| `PROJECT-CONTEXT.md` | This file | Canonical spine document |

---

## 9. INFRASTRUCTURE & TOOLS

| System | URL / Path | Status |
|---|---|---|
| Marketing site | gunstreamer.com (Nuxt.js + Tailwind) | Live but homepage is a raw app embed; redesign brief in Obsidian |
| Live widget | WebSocket: `wss://ws.gunstreamer.com` | Planned per Dev-Handoff |
| Live shows LP | `live.gunstreamer.com` | Planned destination for Meta buyer ads |
| Dealer LP | gunstreamerdealers.com | Dealer acquisition |
| Sold DB | `~/Work/GunStreamer/sold-db/sold.db` (SQLite) | 417 real rows, $105K GMV |
| Forum automation | `~/clawd/scripts/gs-forum-automation/` (Python 3.14, Playwright sessions) | Active daily |
| Forum registry | `~/clawd/scripts/gs-forum-automation/.forum-registry.json` | 33 active forums (7 core + 26 extended) |
| Stream-reports pipeline | `~/clawd/scripts/gs-stream-reports/` | Hourly cron + Friday weekly recap |
| Sales analytics skill | `gunstreamer-sales` | Canonical sold-db interface |
| Forum report skill | `gunstreamer-forum-report` | Forum reporting |
| Brand skill | `gunstreamer-brand` | Brand-asset/copy generation |
| Image gen skill | `cc-nano-banana` | Quick image generation |
| Research skill | `dataforseo-research` | SEO/keyword research |
| Weekly recap skill | `gs-weekly-recap` | Turns recap into Reddit/forum/X/IG posts |
| Form submission | FormSubmit.co → `troy@gunstreamer.com` | Dealer LP form |
| Tally form | (`launch-kit/lead-nurture-system.md`) | Dealer inbound capture |
| Master sheet | https://docs.google.com/spreadsheets/d/1ltGIzCQQ5AyDmdnP9_r3_X3b0tmiuvr9chRtVcczxvY/edit | Multi-tab ops sheet |
| Klaviyo | Status uncertain — see §5 conflict note | Plan exists; production state unclear |
| Meta Pixel | NOT yet verified (per Handoff §7 ⚠️) | Required before Meta launch |
| Partnership scraper | `~/Work/GunStreamer/partnerships/` (Python) | SE-first state crawl |
| Obsidian vault | `~/Documents/Obsidian/Work/` (iCloud-synced) | Session memory + handoffs |
| Forwarding inbox | `troy@bluebookinc.com` | Stream reports forward here for pipeline parsing |

---

## 10. WHAT WE'RE WORKING TOWARDS — PHASE PRIORITIES

| Phase | Description | Status |
|---|---|---|
| **Phase 1** | Forum daily previews live across 33 forums | ✅ done |
| **Phase 2** | Buyer-side paid acquisition launch (Meta + Google) — playbooks ready, creative assets in progress | 🟡 in progress |
| **Phase 3** | Dealer acquisition expansion (Facebook + Google) — playbook ready, paused while buyer side ramps | 🟡 in progress (paused) |
| **Phase 4** | Website + live-widget production polish (gunstreamer.com homepage, live.gunstreamer.com LP) | 🔴 not started |
| **Phase 5** | Klaviyo flows + email nurture (184K wave, FFL Prospect track, Buyer Nurture track, recurring "Live Intel" + "Dealer Brief") | 🔴 not started |
| **Phase 6** | Big-bang launch (Viral Operator model — single engineered announcement) | 🔴 not started |

---

## 11. OPEN THREADS / DECISIONS PENDING

From the May 19 Meta Ads handoff and current session:

1. **BBGV credibility line as 4th creative variant** — should one hunter creative include "Backed by Blue Book of Gun Values — 45 years of firearm valuation authority"? Worth A/B test as 4th variant before scaling
2. **"See it live before you buy it" — clean headline variant** — locked positioning line but not used verbatim in any of the 3 hunter creatives. Test as headline variant
3. **Last-30-days sales data swap** — replace placeholder prices/timestamps in ad copy ($1,650, 7:18pm, etc.) with real sold-db values. Pull via `gunstreamer-sales` skill or install `last30days` skill from https://github.com/mvanhorn/last30days-skill
4. **Reels video versions** of hunter-01/02/03 — Reels has highest Meta reach right now; statics ship first, videos commissioned after proof-out
5. **Claude Desktop MCP scope** — verify filesystem MCP includes all 3 roots (`~/Work/GunStreamer/`, `~/troy-os/projects/gunstreamer/`, `~/Documents/Obsidian/Work/Projects/GunStreamer/`)
6. **4:5 + 9:16 aspect ratio variants** of the 3 hunter creatives — generate after 1:1 statics approve
7. **3-5 alternate primary text per creative** — A/B copy variations not yet drafted
8. **Meta Pixel verification** — install + verify before any ad launch (Handoff §4)
9. **Backup ad account** — must exist 7+ days before launch under a different business entity
10. ~~Klaviyo vs Gmail-only nurture~~ — **RESOLVED 2026-05-19.** Three complementary systems, no conflict. Buyer-side missing piece (`buyer-google-oauth-system.md`) now spec'd and code-ready. Deployment is the next blocker for Meta launch — needs Google Cloud OAuth client + Apps Script deploy + frontend wire-up on `live.gunstreamer.com` + webhook on `gunstreamer.com` admin. See §5
11. **5% vs 3% take rate** — update PROJECT-SETTINGS.md, older MARKETING-PLAYBOOK.md, and any stale collateral
12. **Buyer concentration risk** — Ronnie + Jwballengee = 32% of GMV. Build buyer diversification into Phase 2 KPIs
13. **VA-FORUM-ENGAGEMENT-PLAYBOOK.md** — forum count cited (17) is stale; real number is 33. Update doc

---

## 12. WORKING AGREEMENTS (for AI tools)

These are how Troy works. Apply to every interaction.

- **Direct, no superlatives, no flattery.** No "you're absolutely right!" No "great question!" No buzzword soup
- **Challenge assumptions when warranted.** Troy has killed his own ad hooks mid-session because pushback was right. Pushback is welcome
- **Surface real gaps before proposing solutions.** Honesty over false confidence. If something can't be done, say so
- **Prefer Path 3 hybrid approaches** over single-shot solutions when complexity warrants
- **Ask before structural decisions** (git target, scope splits, channel selection) — single tight question with a recommendation, let Troy choose
- **Never push to remote without explicit ask.** Commits OK on request, pushes require sign-off
- **Brand voice on owned channels (gunstreamer.com, forums, X organic) uses "gun" / "firearm" freely** — "watch the gun cycle, grill the dealer, win the auction." On Meta paid ads, those words are banned per compliance. Don't confuse the two contexts
- **Marketing outputs go to Obsidian** at `~/Documents/Obsidian/Work/Projects/GunStreamer/` and open immediately via `open "obsidian://open?vault=Work&file=Projects%2FGunStreamer%2F<filename>"`
- **Use the right skill** from `~/clawd/skills/`: `gunstreamer-sales`, `gunstreamer-brand`, `gunstreamer-forum-report`, `gs-weekly-recap`, `cc-nano-banana`, `dataforseo-research`, `copywriting`, `launch-strategy`, etc.
- **NO development promises.** Platform isn't built yet. Don't over-promise features. Don't write copy that names features that don't exist
- **Target buyers first** in all current content. FFLs are Phase 3
- **Execute to draft-ready status.** Don't stop at outlines. Write the full email, the actual landing page, complete copy. Troy reviews — not rewrites

---

## 13. SOURCE OF TRUTH PROTOCOL

Three roots. Each has a role.

| Root | Path | Role | Sync |
|---|---|---|---|
| **Working files** | `~/Work/GunStreamer/` | Drafts, generated assets, code, scratch | Local only, gitignored |
| **Canonical strategy** | `~/troy-os/projects/gunstreamer/` | Versioned long-form playbooks, research, brand voice | Git-versioned to https://github.com/whatusernameshouldiuse/troy-os |
| **Session memory** | `~/Documents/Obsidian/Work/Projects/GunStreamer/` | Handoffs, this file, project-context spine | iCloud-synced to Obsidian vault |

### Protocol for any AI tool

1. **Session start.** Read this file (`PROJECT-CONTEXT.md`) first. Then read the most recent `Handoff-YYYY-MM-DD-*.md` in Obsidian. That gives you current state in 2 reads
2. **During work.** Update this file inline as facts change (new dealer, new URL, new metric, new commit). Don't gather updates for end-of-session — apply immediately
3. **Session end.** Write a new `Handoff-YYYY-MM-DD-<topic>.md` to Obsidian. Mirror canonical-strategy changes to `~/troy-os/projects/gunstreamer/`. Git commit on Troy's request

---

## 14. CHANGELOG

| Date | Session focus | What changed | Notes |
|---|---|---|---|
| 2026-05-20 | Nurture conflict resolution + buyer OAuth system | Resolved the flagged Gmail-vs-Klaviyo "conflict" — actually 3 complementary systems with different audiences. Created `launch-kit/buyer-google-oauth-system.md` (Google Sign-In + Apps Script + MailApp autoresponders). Updated §5 and §11. This unblocks the Meta launch (handles "signup → instant confirm <60s" requirement). | Spec + Apps Script code complete, not yet deployed. Needs Google Cloud OAuth client + DNS DMARC verification + frontend integration on `live.gunstreamer.com`. |
| 2026-05-20 | Spine file synthesis | Initial PROJECT-CONTEXT.md created; consolidated 3 roots into single canonical reference | Synthesized from ~50 files. Identified 3% vs 5% fee conflict, Klaviyo vs Gmail nurture conflict (now resolved above), forum count stale in VA playbook |
| 2026-05-19 | Buyer-side launch prep | Buyer research sprint (4 files: personas, pain-points, VOC, ad-angles); Google Ads playbook full rewrite; Meta Ads buyer playbook; ChatGPT image-gen brief; 3 cinematic-realism creative prompts | 3 troy-os commits: 974d114, e8ec5df, 32eaad0. Handoff-Meta-Ads-Setup-2026-05-19.md written to Obsidian |
| 2026-05-18 | Forum previews + recap | 2026-05-18 dual-dealer previews posted; W20 recap generated ($9.2K GMV, 66 firearms, 5 streams) | `forum-previews/2026-05-18-*`, `stream-reports/weekly/2026-W20-recap.md` |
| 2026-05-13 | Dealer research sprint | 7 dealer personas + 25 ranked pain points + 22 compliant ad angles | `research/audience-segments.md`, `research/pain-points.md`, `research/compliant-ad-angles.md`. Forum registry updated to 33 active |
| 2026-04-24 | Weekly meeting | Weekly meeting report generated | `docs/WEEKLY-MEETING-REPORT-2026-04-24.md` |
| 2026-04-13 | Dealer welcome + community strategy | Dealer welcome sequence, 90-day community strategy, dealer stream kit | `docs/dealer-welcome-sequence.md`, `docs/community-strategy.md`, `docs/dealer-stream-kit.md` |
| 2026-04-01 | Content + growth strategy | 463-line content + growth strategy document (184K wave, recurring newsletters, 8 SEO posts, BBGV cross-promo plan) | troy-os commit `3cbd9f1` |
| 2026-02-24 | Homepage + social strategy | Homepage redesign brief, social media strategy (5-pillar), Dev-Handoff for live widget | Obsidian handoffs + `homepage-prototype.html` |
| 2026-01-28 | Marketing foundation | 1761-line Marketing Playbook + Launch Checklist + Brand Voice Guide + Content Growth Strategy | troy-os commit `72a087a` |
| 2026-01-27 | Project initialization | PROJECT-SETTINGS.md, troy-os structure | troy-os commit `5f58dee` |

---

*End of PROJECT-CONTEXT.md*
