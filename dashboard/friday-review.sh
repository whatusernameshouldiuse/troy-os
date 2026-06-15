#!/bin/bash
# Friday Board Review — weekly cron that keeps BOARD.md from going stale.
#
# WHY THIS EXISTS: the manual Friday review died because it depended on Troy
# remembering. The board froze for a month. Anything that depends on a tired
# human remembering will rot. This makes the review fire on its own.
#
# WHAT IT DOES:
#   1. Gathers the week's REAL activity (git across ~ + sub-repos, recent cron logs).
#   2. Invokes `claude -p` headlessly to run the Friday review ritual on BOARD.md
#      (move shipped -> Done, flag stale Now items, re-rank Later, triage Inbox,
#       append a REVIEW-LOG entry with next week's Now-3 + one thing to kill).
#   3. Commits + pushes troy-os (the board's source of truth; Obsidian copy is a symlink).
#   4. Notifies via macOS notification (NEVER Slack — that webhook is Rentagun #orders).
#
# Set DRY_RUN=1 to gather activity + print the plan WITHOUT invoking claude or committing.

set -uo pipefail

DASH="$HOME/troy-os/dashboard"
LOG_DIR="$DASH/logs"
TODAY="$(date +%Y-%m-%d)"
LOG_FILE="$LOG_DIR/review-${TODAY}.log"
# Resolve claude robustly — the binary moved to ~/.local/bin; nvm path is stale.
CLAUDE_BIN="$(command -v claude 2>/dev/null || true)"
[ -x "$CLAUDE_BIN" ] || CLAUDE_BIN="$HOME/.local/bin/claude"
ACTIVITY="$DASH/.week-activity.md"
BOARD="$DASH/BOARD.md"
DRY_RUN="${DRY_RUN:-0}"

mkdir -p "$LOG_DIR"
log() { printf '[%s] %s\n' "$(date +%H:%M:%S)" "$*" | tee -a "$LOG_FILE"; }

log "=== friday board review start (dry_run=$DRY_RUN) ==="

# --- 1. Gather the week's real activity into a file the agent reads ---
{
  echo "# Activity for the week ending $TODAY"
  echo
  echo "## Git commits (last 7 days)"
  echo
  echo "### home repo (~/ — covers most of ~/Work)"
  git -C "$HOME" log --since='7 days ago' --pretty=format:'- %ad %s' --date=short 2>/dev/null || true
  echo
  for repo in "$HOME"/Work/SEO-Clients/*/ "$HOME"/troy-os; do
    [ -d "$repo/.git" ] || continue
    n=$(git -C "$repo" log --since='7 days ago' --oneline 2>/dev/null | wc -l | tr -d ' ')
    [ "$n" -gt 0 ] || continue
    echo "### ${repo#$HOME/}"
    git -C "$repo" log --since='7 days ago' --pretty=format:'- %ad %s' --date=short 2>/dev/null
    echo
  done
  echo
  echo "## Cron / agent logs touched this week"
  find "$HOME/clawd/logs" "$HOME"/.claude/skills/*/logs -type f -mtime -7 2>/dev/null \
    | sed "s#$HOME/#- ~/#" | head -40
} > "$ACTIVITY"

log "gathered activity -> $ACTIVITY ($(wc -l < "$ACTIVITY" | tr -d ' ') lines)"

if [ "$DRY_RUN" = "1" ]; then
  log "DRY_RUN: skipping claude + commit. Activity file follows:"
  cat "$ACTIVITY" | tee -a "$LOG_FILE"
  log "=== dry run end ==="
  exit 0
fi

# --- 2. Run the review ritual via headless claude ---
HASH_BEFORE="$(md5 -q "$BOARD" 2>/dev/null)"

PROMPT="You are running Troy's weekly Friday board review. Be ruthless and brief — Troy's problem is too many open loops, not too few. Closing loops > adding tasks.

Read these files first:
- $DASH/BOARD.md  (the LIVE board — Obsidian renders this exact file via symlink)
- $DASH/REVIEW-LOG.md  (the ritual checklist + past entries)
- $ACTIVITY  (this week's real git + cron activity)

Then edit $DASH/BOARD.md IN PLACE per the Friday review checklist in REVIEW-LOG.md:
1. Move anything actually shipped this week into Done — but ONLY with evidence in $ACTIVITY. No evidence, no checkmark.
2. For each Now item with NO sign of progress in $ACTIVITY, append '(STALE)' to it. Never silently delete a task.
3. Move Done items dated before this week into $DASH/ARCHIVE.md (keep their dates).
4. Re-rank the Later column by impact. Money-bleeders stay at the top.
5. Triage Inbox conservatively into Next/Later. When unsure, leave it in Inbox for Troy.
6. Do NOT invent tasks. Do NOT touch the WIP-limit note lines or the kanban frontmatter/settings.
7. Append a dated entry to $DASH/REVIEW-LOG.md: 3 sentences (what shipped, what didn't, why), the recommended Now-3 for next week, and the ONE thing to kill outright.

CRITICAL: preserve the leading '---/kanban-plugin: board/---' header and the trailing '%% kanban:settings ... %%' block byte-for-byte, or Obsidian stops rendering the board."

log "invoking claude -p..."
if ! "$CLAUDE_BIN" --permission-mode bypassPermissions -p "$PROMPT" >>"$LOG_FILE" 2>&1; then
  log "WARN: claude -p exited non-zero; check log"
fi

HASH_AFTER="$(md5 -q "$BOARD" 2>/dev/null)"

# --- 3. Commit + push troy-os (NOT the home repo — that one has no remote on purpose) ---
if [ "$HASH_BEFORE" != "$HASH_AFTER" ]; then
  log "board changed — committing troy-os"
  git -C "$HOME/troy-os" add dashboard/ >>"$LOG_FILE" 2>&1
  git -C "$HOME/troy-os" commit -m "chore(dashboard): automated Friday review $TODAY" >>"$LOG_FILE" 2>&1
  git -C "$HOME/troy-os" push >>"$LOG_FILE" 2>&1 || log "WARN: push failed (auth?) — board updated locally, push next time"
  osascript -e 'display notification "Board reviewed. Open it and confirm your Now-3 for next week." with title "Friday Board Review"' 2>/dev/null || true
else
  log "board unchanged — agent made no edits"
  osascript -e 'display notification "Friday review ran but changed nothing — check the log." with title "Friday Board Review"' 2>/dev/null || true
fi

rm -f "$ACTIVITY"
log "=== review end ==="
