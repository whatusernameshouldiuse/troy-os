#!/bin/bash
# Sync troy-os repo to ~/.claude/CLAUDE.md
# Run this after updating the GitHub repo to keep local CLAUDE.md in sync

set -e

REPO_DIR="/tmp/troy-os"
CLAUDE_MD="$HOME/.claude/CLAUDE.md"
BACKUP_DIR="$HOME/.claude/backups"

echo "🔄 Syncing troy-os to CLAUDE.md..."

# Create backup directory if needed
mkdir -p "$BACKUP_DIR"

# Backup current CLAUDE.md
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
cp "$CLAUDE_MD" "$BACKUP_DIR/CLAUDE.md.$TIMESTAMP"
echo "📦 Backed up to $BACKUP_DIR/CLAUDE.md.$TIMESTAMP"

# Pull latest from GitHub
cd "$REPO_DIR" 2>/dev/null || {
    echo "📥 Cloning troy-os repo..."
    cd /tmp
    gh repo clone whatusernameshouldiuse/troy-os
    cd troy-os
}

git pull origin main

# Build the combined CLAUDE.md
echo "🔨 Building CLAUDE.md from repo..."

cat > "$CLAUDE_MD" << 'HEADER'
# CLAUDE.md - Troy's Operating System
## Claude Code Context & Project Configuration

> **Source of Truth:** https://github.com/whatusernameshouldiuse/troy-os
> **Last Synced:** SYNC_TIMESTAMP
>
> Edit the GitHub repo, then run `~/scripts/sync-to-claude-md.sh` to update this file.

---

HEADER

# Replace timestamp
sed -i '' "s/SYNC_TIMESTAMP/$(date '+%Y-%m-%d %H:%M')/" "$CLAUDE_MD"

# Append brain index
echo "## CURRENT PRIORITY" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"
cat "$REPO_DIR/brain/BRAIN-INDEX.md" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"
echo "---" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"

# Append priorities
cat "$REPO_DIR/brain/priorities.md" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"
echo "---" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"

# Append context files
echo "## CONTEXT" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"
for file in "$REPO_DIR/brain/context/"*.md; do
    cat "$file" >> "$CLAUDE_MD"
    echo "" >> "$CLAUDE_MD"
    echo "---" >> "$CLAUDE_MD"
    echo "" >> "$CLAUDE_MD"
done

# Append key reference files
echo "## REFERENCE" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"
cat "$REPO_DIR/reference/skills/slash-commands.md" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"
echo "---" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"
cat "$REPO_DIR/reference/sops/documentation-standard.md" >> "$CLAUDE_MD"
echo "" >> "$CLAUDE_MD"

echo "✅ CLAUDE.md updated successfully!"
echo "📊 New size: $(wc -l < "$CLAUDE_MD") lines"
