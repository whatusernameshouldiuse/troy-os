# PROJECT.md Template

> **Purpose:** Master file for Claude to load at session start. Points to all project resources.
> **Usage:** Copy to `/tmp/troy-os/projects/[project-name]/PROJECT.md` and fill in.

---

```markdown
# [PROJECT NAME]

> **Last Updated:** [Date]
> **Status:** [Active | Pre-launch | Maintenance | Paused]
> **Priority:** [High | Medium | Low] — [% of focus, e.g., "50% of time"]

---

## Quick Start (Claude)

**Load these files in order:**
1. `PROJECT.md` (this file) — Overview and current state
2. `BRAND-VOICE.md` — How to write/speak for this brand
3. `MARKETING-PLAYBOOK.md` — Tactical templates and campaigns

**For credentials/API keys:** See Obsidian `Projects/[Project]/PROJECT-CONTEXT.md`

---

## What This Is

[One paragraph: What the business does, who it serves, core value prop]

---

## Current Focus

**This Week:**
- [ ] [Task 1]
- [ ] [Task 2]
- [ ] [Task 3]

**Blocked On:**
- [Blocker 1 — who/what is needed]

**Recent Wins:**
- [Win 1] — [Date]
- [Win 2] — [Date]

---

## ICPs (Ideal Customer Profiles)

| ICP | Who They Are | Pain Point | How We Help |
|-----|-------------|------------|-------------|
| **[Name]** | [Description] | [Problem] | [Solution] |
| **[Name]** | [Description] | [Problem] | [Solution] |
| **[Name]** | [Description] | [Problem] | [Solution] |

---

## Brand Quick Reference

**Voice:** [2-3 word descriptor, e.g., "Straight-shooter, confident, helpful"]

**Tagline:** [Primary tagline]

**Key Phrases:**
- "[Phrase 1]"
- "[Phrase 2]"
- "[Phrase 3]"

**Never Say:**
- "[Banned phrase 1]" — [Why]
- "[Banned phrase 2]" — [Why]

---

## Tech Stack

| Component | Tool | Notes |
|-----------|------|-------|
| Website | [Platform] | [URL or admin link] |
| Email | [Klaviyo/Mailchimp/etc] | [Notes] |
| CRM | [Tool] | [Notes] |
| Analytics | [GA4/etc] | [Notes] |
| Automation | [n8n/Zapier/etc] | [Notes] |

---

## Key Workflows

| Workflow | Tool | Description |
|----------|------|-------------|
| [Workflow 1] | [n8n/Klaviyo/etc] | [What it does] |
| [Workflow 2] | [Tool] | [What it does] |

---

## Content Calendar

**Posting Schedule:**
- [Platform 1]: [Frequency]
- [Platform 2]: [Frequency]

**Current Themes:**
- [Month/Week]: [Theme]

**Content Backlog:** [Link or location]

---

## Metrics That Matter

| Metric | Current | Target | Track In |
|--------|---------|--------|----------|
| [Metric 1] | [Value] | [Goal] | [Tool] |
| [Metric 2] | [Value] | [Goal] | [Tool] |

---

## File Locations

| What | Where |
|------|-------|
| Brand Voice | `/tmp/troy-os/projects/[project]/BRAND-VOICE.md` |
| Marketing Playbook | `/tmp/troy-os/projects/[project]/MARKETING-PLAYBOOK.md` |
| Project Settings | `/tmp/troy-os/projects/[project]/PROJECT-SETTINGS.md` |
| API Keys/Credentials | Obsidian: `Projects/[Project]/PROJECT-CONTEXT.md` |
| Content Links | Obsidian: `Projects/[Project]/PROJECT-CONTEXT.md` |

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| [Date] | [Decision] | [Why] |

---

## Open Questions

- [Question 1 — needs Troy's input]
- [Question 2 — researching]

---

*This file is the single source of truth for project context. Update it as decisions are made.*
```
