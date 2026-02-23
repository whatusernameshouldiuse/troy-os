# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## Obsidian Vault

- **Active vault:** `~/Documents/Obsidian/Work/`
- **Project files:** `~/Documents/Obsidian/Work/Projects/<ProjectName>/`
- **Open file:** `open "obsidian://open?vault=Work&file=<url-encoded-relative-path>"`
- **Rule:** All user-facing deliverables go here. Write directly to vault. Open immediately after writing.

## Browser Automation

- **Tool:** `agent-browser` (vercel-labs/agent-browser) — replaces OpenClaw Chrome extension relay (disabled)
- **Installed:** globally via npm, Chromium downloaded
- **Use via:** `exec` tool — `agent-browser <command>`
- **Core workflow:**
  ```
  agent-browser open <url>
  agent-browser snapshot -i        # get interactive elements with refs (@e1, @e2)
  agent-browser click @e1          # interact using refs
  agent-browser fill @e2 "text"
  agent-browser screenshot page.png
  agent-browser close
  ```
- **Sessions:** `agent-browser --session <name>` for isolated instances
- **Persistent auth:** `agent-browser --session-name <name>` auto-saves cookies/state
- **Headless by default** — no Chrome extension needed, fully autonomous
- **OpenClaw browser tool:** DISABLED (`browser.enabled: false` in `~/.openclaw/openclaw.json`)

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.
