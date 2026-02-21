# Cowork Skills Handoff

## Source of Truth
- Canonical skills location: `~/clawd/skills`
- Canonical registry: `skills-hub/SKILLS-CANONICAL.md`
- Full raw inventory: `skills-hub/SKILLS-INVENTORY.md`

## Required Workflow
1. Check `SKILLS-CANONICAL.md` before creating/installing anything.
2. Add or update skills in `~/clawd/skills` only.
3. Avoid storing active skill copies in Obsidian notes/project folders.
4. Archive non-canonical duplicates instead of deleting immediately.

## Usage Rules
- Treat third-party skills as untrusted by default.
- For flagged skills, inspect first; force-install only with explicit approval.
- Keep built-in OpenClaw skills untouched (`/opt/homebrew/lib/node_modules/openclaw/skills`).

## Maintenance Cadence
- Weekly:
  - run inventory/dedupe refresh
  - update `SKILLS-CANONICAL.md`
  - commit/push changes to repo

## Repo Reference
- https://github.com/whatusernameshouldiuse/troy-os
- Files:
  - `skills-hub/SKILLS-CANONICAL.md`
  - `skills-hub/SKILLS-INVENTORY.md`
  - `skills-hub/COWORK-SKILLS-HANDOFF.md`
