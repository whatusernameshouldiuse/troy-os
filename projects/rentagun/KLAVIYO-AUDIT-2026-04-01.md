# Rentagun Klaviyo Audit
> **Date:** 2026-04-01  
> **Auditor:** CMO  
> **Method:** Direct Klaviyo API via MCP  
> **Status:** Critical issues found — CTO action required

---

## Executive Summary

The Rentagun Klaviyo account has serious structural failures that are silently killing email performance. New subscribers are not receiving welcome emails. Paying members are not tracked in Klaviyo. No marketing emails have ever been sent to real subscribers. Zero behavioral segments exist.

**The account looks built but isn't working.**

---

## List Audit

| List | ID | Profiles | Flow Trigger | Issue |
|------|-----|---------|-------------|-------|
| Email List (original) | QW8vX6 | **6** | None | Subscribers land here but get no welcome email |
| Newletter [sic] | XVFqQG | **0** | Welcome Series → | Flow is connected to wrong/empty list |
| Rentagun — All Subscribers | Snt4ie | **0** | None | WooCommerce not syncing |
| Rentagun — Email Leads (Pre-Purchase) | XKJGPF | **0** | None | Lead capture not routing here |
| Rentagun — Basic Members | ShPMWQ | **0** | None | WooCommerce not syncing |
| Rentagun — Pro Members | XF7suh | **0** | None | WooCommerce not syncing |
| Rentagun — Cancelled Members | TteCQG | **0** | None | WooCommerce not syncing |
| Chatbot Leads | WewTBp | **0** | None | Chatbot not routing to Klaviyo |
| Rentagun Dispatch | VhAUfi | **0** | None | No subscribers |
| Preview List | WRMWKL | 2 | None | Internal test only |

**Total reachable subscribers across all lists: 6** (likely test accounts)

---

## Critical Bug #1: Welcome Flow Is Orphaned

**Flow:** "Email Welcome Series with Discount" (`U3Gi6F`) — status: **LIVE**  
**Trigger:** Added to "Newletter" list (`XVFqQG`)  
**"Newletter" list profiles:** **0**

**The welcome flow is live and fully built (4 emails, proper time delays) but nobody ever enters it.** Website signups land in "Email List" (`QW8vX6`, 6 profiles) which has zero flow triggers. The "Newletter" list that actually triggers the welcome series has never received a single subscriber.

**Fix required (CTO):** Either:
- Connect the site signup form to the "Newletter" list instead of "Email List", OR
- Re-point the welcome flow trigger to "Email List"

Recommendation: Re-point the welcome flow to "Email List" and rename it to something meaningful. Keep the "Newletter" list as-is (don't delete) until we confirm no other connections.

---

## Critical Bug #2: WooCommerce Member Lists Not Populating

**Lists with 0 profiles:**
- Rentagun — Basic Members (`ShPMWQ`)
- Rentagun — Pro Members (`XF7suh`)
- Rentagun — Cancelled Members (`TteCQG`)
- Rentagun — All Subscribers (`Snt4ie`)

All four created 2026-03-11. All empty. This means either:
1. The WooCommerce → Klaviyo webhook/integration was set up but never tested
2. The n8n workflow that handles subscription events isn't routing to these lists
3. The profile property that gates list membership isn't being set on purchase

**Fix required (CTO):** Audit the WooCommerce subscription webhook. When a customer completes a Basic or Pro checkout, confirm their profile is being added to the correct Klaviyo list. Check n8n execution logs for subscription events.

---

## Critical Bug #3: Double Opt-In On All Lists

Every list in the account uses `double_opt_in`. This means:
- A customer pays for a subscription → triggers Klaviyo list add → Klaviyo sends a confirmation email → customer must click to confirm → if they don't click, they never appear in the list
- Paying customers who haven't confirmed the opt-in email are invisible in Klaviyo

**For a subscription commerce platform where customers already provided consent at checkout**, double opt-in creates unnecessary friction and likely explains why member lists show 0 profiles even if actual subscribers exist in WooCommerce.

**Fix required (CTO):** Switch the member lists (Basic Members, Pro Members, All Subscribers) to single opt-in. Alternatively, use Klaviyo's `subscribe` endpoint (which bypasses opt-in) for customers who consent at WooCommerce checkout.

---

## Flow Audit

### Live Flows (7) — Operational flows working correctly

| Flow | ID | Trigger | Status |
|------|----|---------|--------|
| Order Confirmation | RszZX2 | Metric | Live |
| Rental Complete Follow Up | RtfGcN | Metric | Live |
| Delivered to FFL | SbFyL6 | Metric | Live |
| Return Received | TxvUGy | Metric | Live |
| Email Welcome Series with Discount | U3Gi6F | Added to List (Newletter) | Live — but orphaned |
| Return Due Soon | U77GMp | Metric | Live |
| Order Shipped | VvciTP | Metric | Live |

The transactional/operational flows are correctly live. The welcome flow is live but misconfigured.

### Draft Flows (7) — Never activated

| Flow | ID | Trigger | Notes |
|------|----|---------|-------|
| Browse Abandonment | UvJhVY | Metric (draft) | High-value — should be activated |
| Abandoned Checkout Reminder | Y8deAp | Metric (draft) | High-value — should be activated |
| Customer Thank You | WhcABV | Metric (draft) | Post-rental — activate |
| Onboarding Welcome Series_ | UTDNn4 | Unconfigured | Duplicate template — delete |
| Onboarding Welcome Series_ | XupCVe | Unconfigured | Duplicate template — delete |
| Essential Flow Recommendation_ | UzqbqP | Unconfigured | Klaviyo template — delete |
| Essential Flow Recommendation_ | XPJV4d | Unconfigured | Klaviyo template — delete |

The 4 unconfigured "template" flows (two duplicates of each) are Klaviyo-generated setup guides that were never configured or deleted. They're clutter.

Browse Abandonment and Abandoned Checkout are high-value flows that should be activated once Bug #1 and #2 are fixed (need members in lists first).

---

## Campaign Audit

**Total campaigns sent:** 3  
**All sent to:** Preview List (2 internal test accounts)  
**Subject:** "Internal: Subject Lines" tests (Feb 11, 2026)  

**Zero marketing campaigns have ever been sent to real subscribers.**

---

## Segments

**Total segments:** 0

No behavioral segments exist. Cannot target by:
- Engagement (opened/clicked in last 30/60/90 days)
- Purchase behavior (rented 1x vs. repeat renters)
- ICP type (inferred from gun categories browsed)
- Subscription status

This is expected given the list issues — you can't build meaningful segments when lists are empty. Segments should be built after the integration is fixed.

---

## Prioritized Fix List

### P0 — Fix immediately (no email is working)

1. **Re-point welcome flow** to "Email List" (`QW8vX6`) — 30 minutes, CTO
2. **Fix WooCommerce → Klaviyo member list sync** — verify webhook fires on subscription purchase and adds to correct list — CTO investigation, likely 2–4 hours
3. **Switch member lists to single opt-in** — Basic Members, Pro Members, All Subscribers — 15 minutes, CTO

### P1 — Fix within 1 week (unlock conversion flows)

4. **Activate Browse Abandonment flow** (`UvJhVY`) — connect to correct metric trigger — 1 hour
5. **Activate Abandoned Checkout flow** (`Y8deAp`) — 1 hour
6. **Delete 4 unconfigured template flows** — cleanup

### P2 — Build after P0/P1 resolved (growth layer)

7. Build engagement segments (Engaged-30, Engaged-60, Lapsed)
8. Build ICP segments (Considerer, Hunter, Experience Seeker) based on browse behavior
9. Activate Customer Thank You flow post-rental
10. Create first real campaign (dispatch to "All Subscribers" once populated)

---

## Impact Estimate

If WooCommerce has active paying members and they're simply not syncing to Klaviyo, fixing P0 items immediately unlocks:
- Welcome sequence for all future signups
- Post-rental follow-up for existing customers
- The ability to send any campaign to the member base

Every day this is unfixed is a day of post-rental follow-up and upsell revenue being left on the table.
