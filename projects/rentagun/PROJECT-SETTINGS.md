# PROJECT-SETTINGS: Rentagun

> **Last Updated:** 2026-01-27
> **Status:** Active - Post SHOT Show 2026

---

## Quick Reference

- **Website:** rentagun.com
- **Tech Stack:** WordPress + WooCommerce + WooCommerce Bookings
- **Hosting:** [TBD]
- **Admin:** rentagun.com/wp-admin

---

## Business Context

**What:** First national try-before-you-buy firearm rental service

**Tiers:**
- Basic: $99/month - 1 rental/month, 7 days, $1K MSRP max
- Pro: $199/month - 2 rentals/month, 7 days each, $3K MSRP max

**Inventory:** ~216 firearms (150+ available)

---

## ICPs

1. **The Considerer:** Wants to buy but unsure which model
2. **The Experience Seeker:** Bachelor parties, bucket list (Thompson, etc.)
3. **The Hunter:** Needs specialty rifle for one hunt
4. **The New Gun Owner:** First purchase, overwhelmed by options

---

## Brand Voice

- Straight-shooter, honest, no BS
- "Try before you buy"
- "Stop researching, start shooting"
- "Rent it Saturday, decide Sunday"

**BANNED:** "Netflix of guns", political statements

---

## Health Check (Run Weekly)

### Critical Path (Revenue)
- [ ] Site loads fast (<3s)
- [ ] Checkout completes without errors
- [ ] Payment processing works
- [ ] Booking calendar shows correct availability
- [ ] Confirmation emails sending

### Inventory
- [ ] Product count matches reality (~216)
- [ ] Availability status accurate
- [ ] Pricing correct
- [ ] Images loading

### Customer Experience
- [ ] Quiz working (RevenueHunt)
- [ ] FFL locator functional
- [ ] Contact forms submitting
- [ ] FAQ accessible

### Backend
- [ ] WooCommerce Bookings synced
- [ ] No pending orders stuck
- [ ] Cron jobs running

*When issues found, create ClickUp task in Rentagun → 🚨 Issue Inbox*

---

## Technical Notes

- RevenueHunt quiz for product matching
- 7-day advance booking required
- In-person pickup available (Birmingham area)
- Excludes California + 12 other restrictive states
- Ships to FFL, customer completes background check

---

## API Credentials

See: `/projects/rentagun/CREDENTIALS.md` (gitignored, stored locally)

Or load from Obsidian: `300 Entities/Projects/Rentagun/PROJECT-CONTEXT.md`

---

## Key Workflows

| Workflow | Tool | ID |
|----------|------|-----|
| Order Confirmation | n8n | [TBD] |
| Shipping Labels | FedEx API | [TBD] |
| Email Notifications | Klaviyo | [TBD] |

---

## Current Issues

Track in ClickUp: Rentagun → 🚨 Issue Inbox
