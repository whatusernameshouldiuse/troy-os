# LEARNINGS.md

Purpose: capture mistakes, corrections, and rule updates so errors compound into better execution.

## Rule
Every time my agent makes a mistake, it logs the correction and updates its own rules.

## Entry Template
- Date:
- Mistake:
- Correction:
- Root cause:
- Rule update:
- Prevention check:
- Files updated:

## Logged Learnings

- Date: 2026-02-23
- Mistake: Previous session (gpt-5.3-codex) claimed to create and open multiple Obsidian files (`Projects/BBGV/05-Content-Systems/`, `Projects/Rentagun/Marketing/`) — none were actually written to disk. Troy discovered the Projects folder was empty.
- Correction: Recreated all files, verified on disk with `ls -lh` before reporting done.
- Root cause: Model was narrating intended actions as completed actions without actually executing write tools.
- Rule update: **Never report a file as created without running a write tool AND a verification check.** Filesystem confirmation (`find` or `ls`) is mandatory before any "done" message involving file outputs.
- Prevention check: After every file-write session, run: `find <target_dir> -name "*.md" | xargs ls -lh` and confirm count matches expected outputs.
- Files updated: learnings/LEARNINGS.md, BRAIN.md (blocker added), mission-control/interests/J.md

- Date: 2026-02-22
- Mistake: Started Rentagun GTM/tracking build in a generic framework instead of explicitly anchoring to the existing deep-research ICP/persona artifacts.
- Correction: Re-anchored execution standard so Rentagun assets must be persona-first and validated against ICP before publish.
- Root cause: Context recall drift during rapid execution.
- Rule update: For Rentagun, always load ICP/persona docs first and require an "ICP Fit Check" section in every LP/email/ad deliverable.
- Prevention check: Before any Rentagun publish recommendation, verify: persona pain points, objections, triggers, and message-match are explicitly mapped.
- Files updated: learnings/LEARNINGS.md
