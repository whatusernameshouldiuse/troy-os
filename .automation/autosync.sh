#!/bin/bash
set -euo pipefail

WS="/Users/troyvanmaanen/clawd"
LOG_DIR="$WS/.automation/logs"
STATE_DIR="$WS/.automation/state"
LOCKDIR="$STATE_DIR/autosync.lock"
LAST_RUN_FILE="$STATE_DIR/last_run_epoch"
DEBOUNCE_SECONDS=120

mkdir -p "$LOG_DIR" "$STATE_DIR"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" >> "$LOG_DIR/autosync.log"; }

# lock
if ! mkdir "$LOCKDIR" 2>/dev/null; then
  exit 0
fi
trap 'rmdir "$LOCKDIR" >/dev/null 2>&1 || true' EXIT

now=$(date +%s)
last=0
if [[ -f "$LAST_RUN_FILE" ]]; then
  last=$(cat "$LAST_RUN_FILE" 2>/dev/null || echo 0)
fi
if (( now - last < DEBOUNCE_SECONDS )); then
  exit 0
fi

echo "$now" > "$LAST_RUN_FILE"

cd "$WS"

# Must be a git repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  log "skip: not a git repo"
  exit 0
fi

# Skip if no origin
if ! git remote get-url origin >/dev/null 2>&1; then
  log "skip: no origin remote"
  exit 0
fi

# Skip if no changes
if git diff --quiet && git diff --cached --quiet; then
  # include untracked check
  if [[ -z "$(git ls-files --others --exclude-standard)" ]]; then
    exit 0
  fi
fi

branch=$(git rev-parse --abbrev-ref HEAD)

# stage/commit/push
set +e
git add -A
if git diff --cached --quiet; then
  set -e
  exit 0
fi
msg="chore(autosync): workspace update $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$msg" >> "$LOG_DIR/autosync.log" 2>&1
commit_rc=$?
if [[ $commit_rc -ne 0 ]]; then
  log "commit failed (rc=$commit_rc)"
  exit 0
fi

git push origin "$branch" >> "$LOG_DIR/autosync.log" 2>&1
push_rc=$?
set -e
if [[ $push_rc -ne 0 ]]; then
  log "push failed (rc=$push_rc)"
  exit 0
fi

log "synced: branch=$branch"
