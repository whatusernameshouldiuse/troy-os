# Rentagun — Brand Voice

> **Last Updated:** 2026-05-13
> **Authority:** This file is the source of truth for voice/language. Auto-loaded context skill (`~/Work/Rentagun/rentagun-context.md`) carries the long form; this is the operating distillation.

---

## One-Line Voice

**"Your buddy who's been to every range and doesn't judge."**

---

## Voice Traits

- **Straight-shooter** — direct, no BS, no corporate speak.
- **Shooter-credible** — knows the language and culture. Say "firearm" not "weapon." Know a Glock 19 from a Sig P320.
- **Anti-buyer's-remorse** — empathize with the $800 mistake sitting in the safe.
- **Confidence-builder** — help them decide. Never pressure.

---

## CRITICAL LANGUAGE RULES (Non-negotiable)

### NEVER Say "Buy" or "Purchase"

Rentagun has a non-compete. They are rental-only. Customers CANNOT purchase firearms through Rentagun.

**BANNED words/phrases:**
- "buy," "purchase," "own," "test drive," "try before you buy"
- "gun buyers," "buying," "bought," "before buying," "to buy"
- "whether a gun belongs in your safe"

**ALWAYS use instead:**
- "Rent The Right Gun" (primary tagline)
- "experience," "try," "compare," "evaluate"
- "gun enthusiasts," "shooters" (NOT "gun buyers")
- "extend, return, or swap" (NOT "buy it")
- "whether a firearm is right for you"

**Pre-publish grep (must return zero matches):**
```
(?i)(buy|purchase|own one|buying|bought|test drive|before buying|to buy)
```

### Other Locked Language

- **Public surfaces say "membership," never "subscription."**
- Pricing is LOCKED at $99/$199 — never quote $29/$49/other tier names.
- **DO say:** Rent, Try, Test, Compare, Confidence, Clarity, Control, Firearm, Gun, Affordable, Smart spend.
- **NEVER say:** "Netflix of guns" (customers say it, we don't), "Weapon," "Cheap," "Disrupt," "Revolutionary," anything political.

---

## Taglines

- **Primary:** "Rent The Right Gun"
- **Category positioning:** "America's Only Gun Subscription" *(only as category descriptor, not on public surfaces where "subscription" is otherwise banned)*
- **Supporting:** "Rent. Return. Repeat." / "Shoot more. Spend less."

---

## Visual Identity

- **Colors:** RentAGun Red `#E63946`, Charcoal Black `#1D1D1D`, Clean White, Steel Gray
- **Production CSS vars (live site):** body `#333`, red accent `#cc0000`, secondary `#2e6266` — square corners, uppercase letter-spaced buttons, Open Sans
- **Typography:** Bold condensed sans-serif headlines, clean sans-serif body, ALL CAPS for CTAs
- **Photography:** Real firearms, action shots, clean product photography. NO tacticool, NO intimidating imagery.

---

## Four Core Messages

1. **Eliminate regret** — the core pain point. The $800 mistake.
2. **Legal, compliant, professional** — address the #1 objection upfront.
3. **Convenience without compromise** — nationwide FFL model.
4. **Smart shooters rent first** — position renting as the intelligent choice, not the budget choice.

---

## Voice by Surface

| Surface | Default voice mode |
|---------|---------------------|
| Homepage / landing pages | Straight-shooter + confidence-builder |
| Email (transactional) | Direct, operational, no marketing fluff |
| Email (Dispatch newsletter) | Editorial, broadsheet, voice-forward |
| Product descriptions | Spec-led + shooter-credible (use `rentagun-product-descriptions.skill`) |
| Cold outreach / partner emails | Direct, business-credible, no jargon |
| Investor / pitch docs | Operator-confident, numbers-first |
| Co-branded OEM surfaces | Match OEM's voice on their side, ours on our side. Never blur. Written OEM sign-off required before publishing. |

---

## Voice Anti-Patterns (what to NOT do)

- Don't lean on tactical/military aesthetic — that's a different audience.
- Don't apologize for the category or hedge on firearm ownership.
- Don't moralize about gun safety beyond what's operationally necessary.
- Don't use "weapon" — always "firearm" or "gun."
- Don't write headlines that sound like fintech ("Disrupting the way America..."). We're not disrupting, we're solving a $800 regret problem.
- Don't end CTAs in question marks. Use imperatives.

---

## Session Log

- **2026-05-13** — Distilled from `rentagun-context.md` v2026-05-13 into troy-os scaffold.
