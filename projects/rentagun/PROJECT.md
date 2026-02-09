# Rentagun

> **Last Updated:** 2026-02-04
> **Status:** Active — Post SHOT Show 2026
> **Priority:** High — 50% of focus

---

## Quick Start (Claude)

**Load these files in order:**
1. `PROJECT.md` (this file) — Overview and current state
2. `BRAND-VOICE.md` — How to write/speak for Rentagun
3. `MARKETING-PLAYBOOK.md` — Tactical templates and campaigns

**For credentials/API keys:** See Obsidian `Projects/Rentagun/PROJECT-CONTEXT.md`

---

## What This Is

Rentagun is the first national try-before-you-buy firearm rental service. We ship guns directly to customers' local FFL dealers, letting them test firearms for 7 days before committing to purchase. We eliminate buyer's remorse and the $500-$2,500 gamble of buying blind. Two subscription tiers: Basic ($99/mo, 1 rental) and Pro ($199/mo, 2 rentals).

---

## Current Focus

**This Week:**
- [ ] Verify Jaylin's tracking email was delivered (return label flow fixed 2026-02-03)
- [ ] Generate Midjourney images for Firearm Legends content series
- [ ] Review/publish Firearm Legends posts (10 firearms with greentext copy ready)

**Blocked On:**
- Midjourney images need manual generation in Discord (Troy)

**Recent Wins:**
- Return labels now have ASR, Klaviyo flows set to transactional — 2026-02-03
- Order Shipped workflow fixed (fetch() not available in n8n) — 2026-02-02
- Chatbot API fixed, pricing corrected ($7→$371), Klaviyo env vars set — 2026-02-01

---

## ICPs (Ideal Customer Profiles)

| ICP | Who They Are | Pain Point | How We Help |
|-----|-------------|------------|-------------|
| **The Considerer** | Wants to buy but unsure which model | Analysis paralysis, scared of wrong purchase | Rent 2-3, compare side-by-side, decide with data |
| **The Experience Seeker** | Bachelor parties, bucket list shooters | Wants to shoot a Desert Eagle once, not own one | Access premium/exotic guns without commitment |
| **The Hunter** | Needs specialty rifle for one hunt | $1,500-$2,500 rifle gamble for single use | Rent field-ready kit, return after season |
| **The New Gun Owner** | First purchase, overwhelmed | 1,000+ YouTube videos, still confused | Take quiz, rent top 3 matches, know before buying |

---

## Brand Quick Reference

**Voice:** Straight-shooter, confident, anti-buyer's-remorse

**Tagline:** Rent The Right Gun.

**Key Phrases:**
- "Try before you buy"
- "Stop researching, start shooting"
- "Rent it Saturday, decide Sunday"
- "Shoot more. Spend less."

**Never Say:**
- "Netflix of guns" — Overused, meaningless, tech-bro energy
- "Gun sharing" — Sounds like lending to strangers
- "Cheap" — Say "affordable" or "smart spend"
- "Weapon" — Say "firearm" or "gun"

---

## Tech Stack

| Component | Tool | Notes |
|-----------|------|-------|
| Website | WordPress + WooCommerce | rentagun.com |
| Booking | WooCommerce Bookings | 7-day advance required |
| Email | Klaviyo | Transactional flows active |
| Quiz | RevenueHunt | Product matching |
| Shipping | FedEx API | Return labels with ASR |
| Automation | n8n | Order workflows |
| Chatbot | Custom (Vercel) | Dual-mode WC support |

---

## Key Workflows

| Workflow | Tool | Description |
|----------|------|-------------|
| Order Confirmation | n8n | Sends Klaviyo event on new order |
| Order Shipped | n8n | Triggers tracking email when shipped |
| Return Label | n8n + FedEx | Generates prepaid return label with ASR |
| Quiz → Rental | RevenueHunt | Matches customer to 3 gun recommendations |

---

## Content Calendar

**Current Campaign:** Firearm Legends (greentext nostalgia series)

**Posting Schedule:**
- Instagram: 5x/week (Mon-Fri)
- Instagram Stories: Daily
- YouTube: 1-2x/week (when capacity allows)

**Content Backlog:** Notion (Firearm Legends database — 10 firearms ready)

**Firearm Legends Status:**
- 10 firearms with greentext copy + Midjourney prompts
- Awaiting image generation
- Located in Troy's Notion workspace (separate from GunStreamer)

---

## Metrics That Matter

| Metric | Current | Target | Track In |
|--------|---------|--------|----------|
| Active Subscriptions | TBD | 100+ (12mo) | WooCommerce |
| Email Open Rate | TBD | 35%+ | Klaviyo |
| Quiz → Rental Conversion | TBD | 30%+ | RevenueHunt + WC |
| Rental → Purchase | TBD | 25%+ | WooCommerce |

---

## File Locations

| What | Where |
|------|-------|
| Brand Voice | `/tmp/troy-os/projects/rentagun/BRAND-VOICE.md` |
| Marketing Playbook | `/tmp/troy-os/projects/rentagun/MARKETING-PLAYBOOK.md` |
| Project Settings | `/tmp/troy-os/projects/rentagun/PROJECT-SETTINGS.md` |
| API Keys/Credentials | Obsidian: `Projects/Rentagun/PROJECT-CONTEXT.md` |
| Content Calendar | Notion (Firearm Legends database) |

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-02-03 | Set Klaviyo flows to transactional | Ensures delivery for order/shipping emails |
| 2026-02-03 | Added ASR to return labels | Prevents packages sitting at FedEx locations |
| 2026-01-27 | Firearm Legends = Rentagun brand | Separate from GunStreamer, nostalgia/culture angle |

---

## Open Questions

- What's the current inventory count? (Health check says ~216, need verification)
- Are quiz completions being tracked properly in RevenueHunt → WooCommerce?
- What's the actual email list size in Klaviyo?

---

## Quick Actions

**Health Check (Run Weekly):**
```
- [ ] Site loads fast (<3s)
- [ ] Checkout completes without errors
- [ ] Booking calendar shows correct availability
- [ ] Confirmation emails sending (test order)
- [ ] Return label generation working
```

**Emergency Contacts:**
- Site down: [Check hosting status]
- Payment issues: [Check Stripe dashboard]
- Shipping issues: FedEx API status

---

*This file is the single source of truth for Rentagun project context. Update it as decisions are made.*
