# Marketing Operating System Blueprint
**Source:** Corey Haines article (sent by Troy, Feb 23 2026)
**Filed:** Core architecture reference

---

## The Architecture Pattern

```
Brain (CLAUDE.md) → Skills (execution) → Tools (data) → Brands (context) → Agents (coordination)
```

## Layer-by-Layer Breakdown

1. **Brain:** CLAUDE.md ~500 lines — tells Claude what tools exist, what skills are available, which brand is active, how to route any request, preferences. Every session reads it first.

2. **Skills:** Markdown files with frameworks, voice markers, anti-patterns, real examples. Run a protocol: resolve brand → load context → check files needed → execute → log feedback → corrections become rules.

3. **Tools (MCP servers):** External data sources.
   - YouTube Research: pull full transcripts → extract principles → build skills from smart people's content
   - YouTube Outlier: tracks channels, flags 3x/5x/10x overperforming videos → reverse-engineer what works
   - Thumbnail Generator: Gemini-powered, profile-aware (knows face, colors, style)
   - Reddit RSS Monitor: fetch subreddit posts without getting blocked → real audience language

4. **Brands:** Each brand gets a directory with 5 files: voice, positioning, audience, assets (accumulates), learnings (append-only corrections). A **context matrix** controls which files each skill loads.

5. **Agents:** 4 specialist personas: Strategist, Copywriter, Researcher, Orchestrator. Share memory files. Skills feed each other via defined schemas (brief → copy consumes brief as input).

---

## Gap Analysis: Our System vs. Blueprint

| Layer | Blueprint | Our System | Status |
|-------|-----------|------------|--------|
| Brain | CLAUDE.md ~500 lines | AGENTS.md + project CLAUDE.md files | ✅ Equivalent |
| Skills | 14 skills, 7 marketing-specific | 35 skills installed | ✅ Exceeds |
| Tools/MCPs | YouTube, Reddit, Thumbnail | DataForSEO wrapper, basic tools | ⚠️ Gap |
| Brand context | 5-file brand dirs + context matrix | product-marketing-context.md per project | ✅ Equivalent |
| Learnings per brand | Append-only learnings file per brand | tacit-knowledge.md (global) | ⚠️ Needs per-project |
| Skills talking to each other | Defined schemas, output feeds input | Independent, no pipeline | ⚠️ Gap |
| Agent personas | Strategist/Copywriter/Researcher/Orchestrator | Generic sub-agents | ⚠️ Could formalize |

## Key Gaps to Address

### Gap 1: MCP Tools Layer (HIGH VALUE)
Missing: YouTube transcript pull, YouTube outlier tracking, Reddit RSS
Value: Feeds content strategy with real data instead of guessing. Half his skills were built from YouTube transcripts.
Fix: Build/install MCPs for these 3 data sources

### Gap 2: Per-Project Learnings Files (MEDIUM)
Missing: Append-only learnings.md in each brand directory
Value: Corrections today become rules tomorrow — per project, not global
Fix: Create `projects/<project>/learnings.md` and update skill protocol to write corrections there

### Gap 3: Skills Feeding Skills (MEDIUM)
Missing: Defined schema for skill output → next skill consumes as input
Example: content-strategy produces brief → copywriting consumes it
Fix: Define output schema for strategy-level skills; document handoff format

### Gap 4: Specialist Agent Personas (LOW — later)
Missing: Named personas (Strategist, Copywriter, Researcher, Orchestrator) with distinct context
Fix: Create persona files that sub-agents load when spawned for specific task types
