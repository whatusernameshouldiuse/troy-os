#!/bin/bash
# LarryBrain skill upload — uploads a skill folder to the marketplace
# Usage: ./upload.sh /path/to/skill-folder
# Requires: LARRYBRAIN_API_URL (defaults to localhost:3000)

set -e

SKILL_DIR="${1:-.}"
API_URL="${LARRYBRAIN_API_URL:-http://localhost:3000}"

if [ ! -f "$SKILL_DIR/SKILL.md" ]; then
  echo "❌ No SKILL.md found in $SKILL_DIR"
  echo "   Every skill must have a SKILL.md file."
  exit 1
fi

echo "📦 Uploading skill from: $SKILL_DIR"
echo ""

# Collect all files
FILES_JSON="["
FIRST=true
for f in $(find "$SKILL_DIR" -type f -not -path '*/node_modules/*' -not -path '*/.git/*' -not -name '*.pyc' -not -name '.DS_Store'); do
  REL_PATH="${f#$SKILL_DIR/}"
  CONTENT=$(base64 -w 0 "$f" 2>/dev/null || base64 "$f")
  SIZE=$(wc -c < "$f" | tr -d ' ')
  
  if [ "$FIRST" = true ]; then
    FIRST=false
  else
    FILES_JSON="$FILES_JSON,"
  fi
  FILES_JSON="$FILES_JSON{\"path\":\"$REL_PATH\",\"content\":\"$CONTENT\",\"size\":$SIZE}"
  echo "  📄 $REL_PATH ($SIZE bytes)"
done
FILES_JSON="$FILES_JSON]"

echo ""
echo "🔍 Running security scan..."

# Send to upload endpoint
RESPONSE=$(curl -s -X POST "${API_URL}/api/skills/upload" \
  -H "Content-Type: application/json" \
  -d "{\"files\":$FILES_JSON}")

echo "$RESPONSE" | node -e "
  const chunks = [];
  process.stdin.on('data', c => chunks.push(c));
  process.stdin.on('end', () => {
    try {
      const data = JSON.parse(Buffer.concat(chunks).toString());
      if (data.error) {
        console.log('❌ Upload failed:', data.error);
        if (data.securityIssues) {
          console.log('\\n🚨 Security issues found:');
          data.securityIssues.forEach(i => console.log('   -', i));
        }
        process.exit(1);
      }
      console.log('✅ ' + data.message);
      if (data.skill) {
        console.log('\\n📊 Skill details:');
        console.log('   Name:', data.skill.name);
        console.log('   Slug:', data.skill.slug);
        console.log('   Files:', data.skill.fileCount);
        console.log('   Status:', data.skill.status);
      }
    } catch(e) { console.log('Failed to parse response:', e.message); }
  });
"
