# Decision: Migrate Operating System to GitHub

**Date:** 2026-01-27
**Status:** Implemented
**Participants:** Troy, Claude

---

## Context

Troy had a comprehensive CLAUDE.md file in his home directory (~950 lines) containing business context, project settings, methodologies, and agent instructions. This lived in the filesystem and was read by Claude Code automatically.

The problem: Other agents (Clawdbot, Cursor) couldn't easily access this context. File-based system meant no version history and potential sync issues.

---

## Decision

Migrate the operating system to a dedicated GitHub repository: `whatusernameshouldiuse/troy-os`

### Structure
- `/brain/` - Central context (BRAIN-INDEX.md as single entry point)
- `/projects/` - Project-specific settings
- `/prompts/` - Organized by tool
- `/reference/` - Skills, SOPs, methodologies
- `/automations/` - n8n, scripts, GitHub Actions

### Key Changes
1. BRAIN-INDEX.md becomes the single entry point for all agents
2. Business context split into modular files in `/brain/context/`
3. Project settings moved to `/projects/[name]/PROJECT-SETTINGS.md`
4. All prompts organized by tool in `/prompts/`

---

## Reasoning

**For:**
- Agent-native access (git clone, read directly)
- Version history for free
- Single source of truth across all tools
- Clear structure makes files findable
- Enables automation (GitHub Actions)

**Against:**
- More setup than single file
- Need to maintain structure
- Credentials still need separate handling

**Conclusion:** Benefits outweigh costs. The structure scales better.

---

## Implementation

1. Created `troy-os` private repo
2. Ported all content from CLAUDE.md
3. Split into modular structure
4. Created BRAIN-INDEX.md as entry point
5. Updated CLAUDE.md to point to repo (pending)

---

## Follow-up

- [ ] Update local CLAUDE.md to point to GitHub repo
- [ ] Test with Clawdbot access
- [ ] Create GitHub Action for priority reminders
- [ ] Move API credentials to secure location
