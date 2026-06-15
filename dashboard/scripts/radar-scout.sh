#!/usr/bin/env bash
# Radar Scout runner — weekly headless sweep that proposes new tech/skills/workflows
# as Radar cards on the Mission Board. Invoked by launchd (see radar-scout.plist) or by hand.
#
#   bash ~/troy-os/dashboard/scripts/radar-scout.sh
#
# Requires the `claude` CLI on PATH. Logs to dashboard/logs/radar-scout.log.
set -euo pipefail

DASH="$HOME/troy-os/dashboard"
BRIEF="$DASH/scripts/radar-scout.md"
LOG_DIR="$DASH/logs"
mkdir -p "$LOG_DIR"
LOG="$LOG_DIR/radar-scout-$(date +%Y%m%d-%H%M%S).log"

echo "[radar-scout] $(date) starting" | tee -a "$LOG"

claude -p "$(cat "$BRIEF")" \
  --allowedTools "Bash,Read,Glob,Grep,WebSearch,WebFetch,Skill" \
  2>&1 | tee -a "$LOG"

# Refresh BOARD.md (Obsidian mirror) in case the agent added cards.
node "$DASH/scripts/sync-board.mjs" >> "$LOG" 2>&1 || true

echo "[radar-scout] $(date) done -> $LOG" | tee -a "$LOG"
