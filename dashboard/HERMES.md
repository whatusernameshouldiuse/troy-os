# Mission Board — Hermes Connection Contract

The Mission Board is a visual Kanban for every Troy project. It lives at
`troy-os/dashboard/web` and is backed by a single JSON file that **Hermes (and any
agent) reads and writes**. The web UI is just a renderer; the JSON is the truth.

## The source of truth

```
troy-os/dashboard/web/data/tasks.json
```

Everything — tasks, projects, live agent activity, the radar — is in this one file.
`BOARD.md` (in this folder and in the Obsidian vault) is **generated** from it, so the
Obsidian Kanban stays in sync automatically. Never hand-edit `BOARD.md`; edit the JSON
(via the CLI below) and it regenerates.

## How Hermes reads the board

Just read the JSON. To "see what's on the board," parse `tasks.json`:

- `tasks[]` — `{ id, title, project, column, priority, tags, due, notes, sessions[], blockedOn }`
- `columns[]` — `inbox · now · next · later · blocked · needs-fix · done`
- `projects[]` — `{ id, name, short, color, group }`  (`group: "core"` or `"seo"`)
- `agents[]` — live agent runs (what Hermes is doing right now)
- `radar[]` — new tech / skills / workflows worth adopting

When Troy says *"what's on my board"* or *"means do something"*, Hermes should load this
file for context before acting.

## How Hermes writes the board

Use the CLI — it validates input, writes `tasks.json`, and regenerates `BOARD.md`:

```bash
cd troy-os/dashboard

# Tasks
node scripts/board.mjs add "Fix the thing" --project bbgv --col now --priority P0
node scripts/board.mjs move <taskId> blocked
node scripts/board.mjs done <taskId>
node scripts/board.mjs update <taskId> --blocked "Benjamin: consent fix" --addSession 2026-06-15-claude-code-x.md
node scripts/board.mjs list --col now            # see what's active

# Live agent activity (shows in the board's "Agent Activity" panel)
AID=$(node scripts/board.mjs agent start "BBGV Email Gate" --task <taskId> --project bbgv --detail "running fact-check")
node scripts/board.mjs agent update $AID --detail "Seven Sweeps 2/3"
node scripts/board.mjs agent done $AID --detail "passed, ready to send"
node scripts/board.mjs agent clear               # remove finished runs

# Radar — propose tech/skills/workflows to adopt
node scripts/board.mjs radar add "New MCP for X" --type mcp --url https://... --summary "why it matters"
node scripts/board.mjs radar promote <radarId> --project dev-tools   # turn into an inbox task
```

**The agent-activity pattern:** when Hermes kicks off real work, call `agent start`
at the top, `agent update` as it progresses, `agent done` at the end. Troy watches
the board's live "Agent Activity" panel to see his agents working in real time.

## Linking tasks to sessions

Session logs live in `~/obsidian-vault/Claude-Shared-Brain/sessions/`
(`YYYY-MM-DD-claude-code-<slug>.md`). When a session works a task, attach it:

```bash
node scripts/board.mjs update <taskId> --addSession 2026-06-15-claude-code-bbgv-email.md
```

The board then shows the session(s) on that card, so Troy can trace any task back to
the conversation(s) that moved it.

## Project visibility

- **core** projects (Rentagun, BBGV, GunStreamer, Marketing, Dev, Ops) are front and center.
- **seo** projects (Dutch Dumpsters, Boaz, ND Brick, Hallmark, Local SEO) are hidden behind
  the **"Show Local SEO"** toggle by default. Tasks still exist and sync to `BOARD.md`;
  they're just collapsed in the UI so SEO isn't front-and-center.

## The Radar (system-improvement engine)

The radar is meant to be fed by a scheduled scraper agent: a weekly sweep
(`last30days`, the skills-hub, MCP registries, release notes) that proposes new tech,
skills, and automations for Troy's systems and lands them as radar cards. Build that
agent to call `board.mjs radar add`, and the board becomes a system-improvement engine,
not just a task tracker. (Seeded with that idea as radar item #1.)
