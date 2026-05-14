# Rentagun — Project Settings

> **Last Updated:** 2026-05-13
> **Auto-loaded context skill:** `~/Work/Rentagun/rentagun-context.md` (canonical, deepest detail lives there)
> **Full project root:** `~/Work/Rentagun/`
> **Obsidian context:** `Projects/Rentagun/PROJECT-CONTEXT.md` (API keys, workflow IDs, Google Docs)

---

## What Rentagun Is

First and only nationwide firearm rental service in the US. Customers subscribe, pick a firearm from 216+ guns, it ships to their local FFL dealer for 7-14 days, then returns via prepaid FedEx. Turns a $500–$2,500 gamble into an informed decision.

**Location:** Birmingham, AL (operations) + Egunco FFL in Paris, KY (shipping/receiving hub).

**Non-compete:** Rental-only membership. Customers CANNOT purchase firearms through Rentagun. Language rules in `BRAND-VOICE.md`.

---

## Business Model (LOCKED)

| Tier | Price | Rentals/Mo | Period | Max MSRP |
|------|-------|------------|--------|----------|
| Essential | $99/mo | 1 | 14 days | $1,000 |
| Pro | $199/mo | 2 | 14 days | $3,000 |

- Membership pricing is LOCKED — never quote $29/$49/other.
- Public surfaces say **"membership"** never **"subscription."**
- Revenue: subscriptions (primary), shipping margin, future protection/payment plans.

---

## Stack (Production)

| Layer | Technology |
|-------|-----------|
| Storefront | WordPress + WooCommerce |
| Booking | WooCommerce Bookings (REST API limited — CSV import for booking fields) |
| Membership | Custom plugin v2.1.0 |
| Operations | Custom plugin v1.3.1-FINAL |
| Inventory Sync | FFL Cockpit (UPC-match to Sports South) |
| Shipping Labels | PluginHive FedEx (~$99/yr) |
| Email | Klaviyo (5 transactional flows LIVE since Jan 13, 2026) |
| Product Quiz | RevenueHunt |
| AI Chatbot | Next.js 14 + Claude + OpenAI — Vercel |
| Acquisition Engine | Next.js 16 + Supabase — Vercel |
| Collectors Corner | Next.js 16 — Vercel |
| Automation | n8n cloud (4 workflows) |
| Analytics | PostHog project 368049 |

**Klaviyo MCP server:** built at `~/Work/Dev-Tools/rentagun-klaviyo-mcp/` (107 tools), registered in `~/.mcp.json`.

---

## Critical Operational Partners

- **Egunco FFL (Paris, KY)** — physical operations backbone. Holds Sports South distributor account + federal bound book. **No API.** All comms manual (email, phone, one-click email links). Every system designs around this constraint.
- **PluginHive** — FedEx label generation.
- **Sports South** — distributor, indirect (via Egunco).

---

## Inventory Architecture

Two sources act as one:
1. **Sports South (Distributor)** — synced via FFL Cockpit, UPC matching, 15-20 min cycles. Direct API blocked (Egunco won't share credentials — prior breach).
2. **RAG Inventory (Owned Guns)** — returned rentals at Egunco. WooCommerce Booking Resources, `-RAG` SKU suffix. Statuses: available, out_for_rental, pending_return, delivered_pending_inspection, needs_repair, retired.

**Routing:** RAG first → Sports South fallback → Unavailable.

---

## Regulatory Constraints (Non-Negotiable)

- 21+ handguns (federal), 18+ long guns
- Every gun ships FFL-to-FFL (ATF Form 4473 at pickup)
- FedEx ASR (Adult Signature Required) only
- CA + 12 restrictive states excluded
- **No Meta / Google Ads for firearms** — shapes entire growth strategy (see `MARKETING-PLAYBOOK.md`)

---

## Where Things Live

| Item | Path |
|------|------|
| Working code/data/docs | `~/Work/Rentagun/` |
| Auto-loaded context skill | `~/Work/Rentagun/rentagun-context.md` |
| Partnership docs | `~/Work/Rentagun/docs/partnerships/` |
| Chatbot codebase | `~/Work/Rentagun/code/chatbot/` |
| Collectors Corner codebase | `~/Work/Rentagun/code/collectors-corner/` |
| Acquisition codebase | `~/Work/Rentagun/code/acquisition/rentagun-acquisition/` |
| Engine codebase | `~/Work/Rentagun/code/engine/rentagun-engine/` |
| Obsidian context (keys, links) | `Projects/Rentagun/PROJECT-CONTEXT.md` |

---

## Hard Rules

1. **Never modify the live WordPress site directly.** All dev changes route through Adam R. / Matt.
2. **Never publish co-branded OEM marketing without written sign-off** (see `MARKETING-PLAYBOOK.md` → OEM Partner Program).
3. **Never agree to OEM exclusivity.** "First, not only."
4. **Pricing is LOCKED** — $99/$199, never quote alternatives.
5. **Language rules are LOCKED** — see `BRAND-VOICE.md`. Pre-publish grep is mandatory.

---

## Open Structural Gaps

- Email capture not wired at launch (Klaviyo JS + GA4 snippets missing from rentagun.com — dead code until dev installs).
- AvantLink S2S plugin built, needs Jira ticket + dev deploy.
- Inventory Hub plugin documented (8-phase plan), implementation not started.
- Decision Engine (200+ SEO comparison pages, "NerdWallet for guns") designed, not built.

---

## Session Log

- **2026-05-13** — Initial troy-os scaffold created (PROJECT-SETTINGS, BRAND-VOICE, MARKETING-PLAYBOOK). Pulled from `rentagun-context.md` v2026-05-13 (CZ-USA partnership + OEM Partner Program added).
