# BRAIN-INDEX.md

> **Last Updated:** 2026-02-12 (Nightly compound)
> **Purpose:** Single entry point for all agents. Read this FIRST before any work.
> **Primary BRAIN-INDEX:** Obsidian `Claude-Shared-Brain/BRAIN-INDEX.md` (most current)

---

## CURRENT PRIORITY

**Focus:** Rentagun Acquisition Engine Phase B + April Content Calendar

| Business | This Week | Status |
|----------|-----------|--------|
| **Rentagun** | Acquisition Engine Phase A done (112 tests). 5 Klaviyo email templates updated. March social COMPLETE (all 5 weeks). April calendar needed. app.rentagun.com needs Cloudflare A record. | 🟡 Phase B + April |
| **BBGV** | 2 n8n workflows built, Batch 002 warming, pSEO architecture complete. Reoon→Klaviyo pipeline STILL broken (189K emails). Ad gallery cloned to MacBook. | 🔴 Pipeline Fix |
| **Hallmark Dentistry** | Deployed, legal pages done. FAQ page + design improvements pending. | 🟡 Enhancement |
| **GunStreamer** | Launch kit created, awaiting assets | 🟡 Asset Collection |
| **Local SEO** | competitor-audit-tool built. Phase 0 now mandatory before builds. | 🟢 Tool Ready |

---

## ✅ BRANCHES RESOLVED

All compound branches merged to main (2026-02-08). Content now goes direct to main per policy.

---

## ACTIVE PROJECTS

| Project | Phase | Next Action | Owner |
|---------|-------|-------------|-------|
| Rentagun Acquisition Phase B | Active | Infrastructure wiring (env vars, Supabase RLS) | Claude Code |
| Rentagun April Calendar | Ready | Create April content calendar + Week 1 posts | Claude Code |
| Rentagun Cloudflare DNS | Blocked | Add A record: `app` → `76.76.21.21` | Troy |
| Rentagun Klaviyo Flows | Blocked | Update 5 flow email subject lines in Klaviyo UI | Troy |
| BBGV Reoon→Klaviyo Pipeline | 🔴 Priority | Fix daily pipeline to push 189K verified emails | Claude Code |
| BBGV pSEO Files | Open | Copy deliverables from scratchpad to permanent location (5 days open) | Claude Code |
| Hallmark FAQ | Active | Build /faq page from 30 dental questions | Claude Code |
| Mac Mini SSH | Blocked | Enable Remote Login on 192.168.200.141 | Troy |

---

## RECENT DECISIONS

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-02-11 | Klaviyo flow subjects = UI only | API returns 405 on PATCH |
| 2026-02-11 | GitHub clone > SCP for Mac mini files | SSH disabled on mini |
| 2026-02-11 | Phase 0 competitive audit mandatory | Data-driven > guesswork |
| 2026-02-11 | Subagents for research only | File writes get auto-denied |
| 2026-02-08 | Content direct to main | Troy doesn't review branches |

---

## CONTEXT FILES (Load as Needed)

| Context | When to Load | Location |
|---------|--------------|----------|
| Troy Bio | First session with new agent | `context/troy.md` |
| Business Overview | Strategic discussions | `context/businesses.md` |
| Tool Ecosystem | Integration work | `context/tools.md` |
| Ecosystem Synergy | Cross-business planning | `context/ecosystem.md` |

---

## DON'T WORK ON

- GunStreamer development (marketing only for now)
- New SEO clients (maintaining current only)
- Any spending without approval

---

## QUICK LINKS

- **Projects:** `/projects/[name]/PROJECT-SETTINGS.md`
- **Prompts:** `/prompts/[tool]/`
- **Skills:** `/reference/skills/`
- **Decisions:** `/brain/decisions/`

---

*Update this file after significant sessions or priority changes.*
