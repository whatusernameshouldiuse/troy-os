# Troy-OS

Agent operating instructions and context for all AI tools (Claude Code, Clawdbot, Cursor, etc.).

## Quick Start

**For agents:** Start every session by reading `/brain/BRAIN-INDEX.md`

**For humans:** This repo contains Troy's operating system - business context, project settings, prompts, and procedures that AI agents need to work effectively.

## Structure

```
/brain/           → Load this first. Priorities, decisions, context.
/projects/        → Project-specific settings and content
/prompts/         → Organized by tool (cursor, claude-code, etc.)
/automations/     → n8n workflows, scripts, GitHub Actions
/reference/       → Skills, SOPs, tool docs
/marketing/       → Emails, ads, content
/inbox/           → Quick capture (processed weekly)
```

## Key Files

| File | Purpose |
|------|---------|
| `brain/BRAIN-INDEX.md` | Current priorities, what to focus on |
| `brain/priorities.md` | Weekly priorities and leading indicators |
| `prompts/system/TROY-OS.md` | Full agent operating instructions |
| `projects/[name]/PROJECT-SETTINGS.md` | Project-specific context |

## Businesses

- **BBGV** - Blue Book of Gun Values (firearm valuations)
- **GunStreamer** - Live commerce for FFLs
- **Rentagun** - Firearm rental marketplace
- **Local SEO** - Client work for local businesses

## For Agents

1. Read `brain/BRAIN-INDEX.md` first
2. Load project settings if doing project work
3. Check `reference/` for methodologies and SOPs
4. Save files to correct locations
5. Update BRAIN-INDEX if priorities change

## Credentials

API credentials are NOT stored in this repo. Load from:
- Obsidian: `300 Entities/Projects/[Project]/PROJECT-CONTEXT.md`
- Or ask Troy for the credentials file

---

*Maintained by Troy VanMaanen | github.com/whatusernameshouldiuse*
