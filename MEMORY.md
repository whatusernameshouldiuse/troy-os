# MEMORY.md

## Operating Preferences (Troy)
- Prefers concise, practical execution over theoretical planning.
- Wants systems to compound: decisions and workflows should be persisted in markdown artifacts.
- Values proactive reminders and structured follow-through.
- Expects co-founder-level agency behavior (accountability, research, optimization, initiative).

## Established Standards
- Heartbeats should avoid churn (`HEARTBEAT_OK` when no material change).
- Project-local `CLAUDE.md` should guide per-project communication/workflow behavior.
- Canonical organization + migration logs are preferred over destructive cleanup.
- Use subagents for heavy execution when available, with fallback policy when delegation is degraded.
- **Obsidian-first outputs:** All user-facing deliverables go directly to `~/Documents/Obsidian/Work/Projects/<Project>/`. Open in Obsidian immediately after writing — `open "obsidian://open?vault=Work&file=<encoded-path>"`. Never produce a deliverable without opening it.

## Core Doctrines (Ingested 2026-02-23)

### Engines vs. Boulders
Every system evaluated on one axis: does it run without Troy, or does it need a human to push it again next week? Default to engine. If designing a boulder, redesign it as an engine first.

### Cycles, Not Funnels (Justin Brooke)
Funnels lose 97% by design. Cycles keep non-buyers in the loop and use buyer outputs (testimonials, language, referrals) to fuel the next Acquire phase. 5 parts: Acquire → Educate → Convert → Collect Feedback → Optimize & Reinvest → repeat. Every system must answer: where does the loop close?

## Infrastructure Baseline (2026-02-23)
- Mission-control doctrine, preflight checks, model routing, project intake, memory maintenance, delegation fallback — all in place.
- Obsidian vault structure normalized. `~/Documents/Obsidian/Work/Projects/` is canonical output destination.
- **agent-browser CLI** (vercel-labs/agent-browser) replaced OpenClaw Chrome relay (intentionally disabled).
- 3-layer memory system established: knowledge-graph.md (facts) / YYYY-MM-DD.md (daily) / tacit-knowledge.md (patterns).
- Marketing OS assembled across all 4 projects: CLAUDE.md per project, 35 installed skills, brand context docs complete.
- BRAIN.md is live command board — read every session, update when state changes.

## Active Portfolio (as of 2026-02-23)
1. **BBGV** — Freemium transition + email deliverability recovery + lead magnet build
2. **Rentagun** — CRO audit + quiz (waiting on 4 Troy answers)
3. **GunStreamer** — Pre-launch, marketing only; needs buyers first
4. **OutdoorInfluencers.io** — New. Creator marketplace + mastermind. Phase 0+1 foundation complete. Outreach system built, awaiting Snov.io creds + domain + Instagram account.

## Key Decisions (2026-02-23)
- **BBGV lead magnet = "What's This Gun Worth Right Now?"** — free two-sided valuation tool, email gate before result, one routing question (buying or selling), InstaCash offer for sellers.
- **OI.io outreach stack = Snov.io + n8n + Resend + Airtable** (J operates full pipeline). Cost $30/mo vs. $71 for alternatives.
- **GunStreamer dropped from OI.io Sprint Cohort 1** — platform not live; promising revenue from it is a credibility landmine. BBGV also removed from sprint. Sprint anchors = Rentagun + GunStreamer only... wait — correct state: **Rentagun + GunStreamer** are sprint anchors at $300 + $200 = $500 minimum. BBGV removed.
- **OI.io pricing (J's recommendation, pending Troy review):** Pro $49/mo committed, Mastermind $149/mo with results guarantee, brand fees $299/$399/$599, transaction fee 10% flat.
- **Email warm-up must start before cold outreach** — 14-day lead time. DM outreach can start immediately (no warm-up).

## Lessons Learned (2026-02-23)
- When J produces a file and claims it's "saved to Obsidian" — verify it's actually on disk. Integrity gap caught earlier in day. Always filesystem-verify before reporting completion.
- Context windows fill fast during heavy sub-agent days. Key state lives in knowledge-graph.md, tacit-knowledge.md, and BRAIN.md — not in chat history.
- Sub-agent parallel spawning (4 agents simultaneously) dramatically compresses build time on large deliverables. Default to parallel when tasks are independent.
- "Remove the bottleneck" is a standing protocol: every manual step Troy takes should immediately prompt J to document and work toward eliminating the dependency.
