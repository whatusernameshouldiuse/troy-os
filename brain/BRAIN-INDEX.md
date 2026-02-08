# BRAIN-INDEX.md

> **Last Updated:** 2026-02-07 (Nightly compound)
> **Purpose:** Single entry point for all agents. Read this FIRST before any work.

---

## CURRENT PRIORITY

**Focus:** BBGV Email Pipeline + Merge Accumulated Content

| Business | This Week | Status |
|----------|-----------|--------|
| **BBGV** | 2 n8n workflows built, Batch 002 (2K) warming, 6 blogs SEO'd. Fix Reoon→Klaviyo pipeline (189K emails unused). | 🔴 Pipeline Fix |
| **Rentagun** | Valentine's campaign ready (Feb 7-14), post-Valentine's content ready (Feb 17-21). Both on unmerged branches. | 🟡 Merge Needed |
| **Hallmark Dentistry** | Deployed, legal pages done, footer redesigned. FAQ page + Dentologie-style design improvements pending. | 🟡 Enhancement |
| **GunStreamer** | Launch kit created, awaiting assets | 🟡 Asset Collection |
| **Marketing Automation** | 6 cron jobs running, caffeinate fixed for 24/7 reliability | 🟢 Running |
| **Local SEO** | local-seo-website-build skill created from Hallmark project | 🟢 Skill Ready |

---

## ⚠️ BRANCH MERGE NEEDED

**8 compound branches** have content that was never merged to main (Jan 28–Feb 6):
- `compound/2026-01-28-rentagun-social-post` — Social post + skills
- `compound/2026-01-29-rentagun-winback-emails` — 3-email win-back sequence
- `compound/2026-01-30-rentagun-social-content` — 5 carousels + stories
- `compound/2026-01-31-rentagun-feb-calendar` — February calendar
- `compound/2026-02-03-product-launch-sop` — Launch checklist SOP
- `compound/2026-02-04-project-md-template` — PROJECT.md template
- `compound/2026-02-05-rentagun-valentines-campaign` — Valentine's campaign (3 emails + 7 social + landing page)
- `compound/2026-02-06-bbgv-email-rentagun-social` — Luger email + Feb week 4 social

**Decision needed:** Merge all to main, or change auto-compound to commit directly to main for content.

---

## ACTIVE PROJECTS

| Project | Phase | Next Action | Owner |
|---------|-------|-------------|-------|
| BBGV Reoon→Klaviyo Pipeline | 🔴 Priority | Fix daily pipeline to push 189K verified emails | Claude Code |
| BBGV Warm-Up Emails | 🔴 Priority | Beta Dashboard email (needs Troy input) + Blog Teaser (Luger P08 ready) | Claude Code |
| BBGV n8n Credentials | Active | Configure Anthropic, Twitter, Facebook, LinkedIn, Sheets in n8n | Troy |
| Hallmark FAQ | Active | Build /faq page from 30 dental questions | Claude Code |
| Hallmark Design | Active | Dentologie-style Featured Services, teal insurance section | Claude Code |
| Rentagun Gun Finder | Blocked | Needs 16 lifestyle photos for quiz | Troy |
| BBGV Blog CMS | Blocked | Enable image upload feature | Dev team |
| BBGV robots.txt | Blocked | Allow AI crawlers (GPTBot, ClaudeBot) | Dev team |
| GunStreamer Launch | Ready | Complete asset creation | Troy |

---

## RECENT DECISIONS

| Date | Decision | Reasoning | File |
|------|----------|-----------|------|
| 2026-02-07 | Content branches should go to main, not feature branches | Troy doesn't review branches — 8 accumulated unmerged | `learnings/general.md` |
| 2026-02-06 | Reddit/Quora = templates only, never automate | High spam/ban risk | `learnings/general.md` |
| 2026-02-06 | Use real photos for firearms, not AI | AI hallucinate gun models | `learnings/general.md` |
| 2026-02-06 | Voice > SEO when they conflict (NeuronWriter) | Brand authenticity matters more than keyword stuffing | `patterns/what-works.md` |
| 2026-02-05 | Content goes direct to main for review visibility | Branches create invisible work | `learnings/general.md` |
| 2026-02-04 | AI image prompts: "Photo of..." not "photorealistic" | Avoids filters, add camera metadata for realism | `learnings/general.md` |
| 2026-02-04 | Multi-agent coordination via LIVE files | J/Cowork working same codebase need shared status | `patterns/what-works.md` |

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
