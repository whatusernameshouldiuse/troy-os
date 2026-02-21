#!/bin/bash
# LarryBrain skill install — downloads and installs a skill from the marketplace
# Usage: ./install.sh <skill-slug> [target-dir]
# Target dir defaults to ~/.openclaw/workspace/skills/<slug>

set -e

API_URL="${LARRYBRAIN_API_URL:-http://localhost:3000}"
SLUG="${1}"
TARGET="${2:-$HOME/.openclaw/workspace/skills/$SLUG}"

if [ -z "$SLUG" ]; then
  echo "❌ Usage: ./install.sh <skill-slug> [target-directory]"
  echo "   Example: ./install.sh xcellent"
  exit 1
fi

echo "📦 Installing skill: $SLUG"
echo "   Target: $TARGET"
echo ""

# Fetch skill from API
RESPONSE=$(curl -s "${API_URL}/api/skills/install?slug=${SLUG}")

# Check for errors
ERROR=$(echo "$RESPONSE" | node -e "
  const c=[]; process.stdin.on('data',d=>c.push(d));
  process.stdin.on('end',()=>{
    const d=JSON.parse(Buffer.concat(c).toString());
    if(d.error){console.log(d.error);process.exit(1);}
    process.exit(0);
  });
" 2>&1)

if [ $? -ne 0 ]; then
  echo "❌ $ERROR"
  exit 1
fi

# Create target directory
mkdir -p "$TARGET"

# Extract and write files
echo "$RESPONSE" | node -e "
  const c=[]; process.stdin.on('data',d=>c.push(d));
  process.stdin.on('end',()=>{
    const fs = require('fs');
    const path = require('path');
    const data = JSON.parse(Buffer.concat(c).toString());
    
    const skill = data.skill;
    console.log('✓ Found:', skill.name, 'v' + skill.version);
    console.log('  By:', skill.authorName);
    console.log('  ' + (skill.free ? '🆓 Free skill' : '💎 Premium skill'));
    console.log('  Installs:', skill.installs);
    console.log('');
    
    // Write files
    const target = '${TARGET}';
    let count = 0;
    
    if (data.files && data.files.length > 0) {
      data.files.forEach(f => {
        const filePath = path.join(target, f.path);
        const dir = path.dirname(filePath);
        fs.mkdirSync(dir, { recursive: true });
        const content = Buffer.from(f.content, 'base64');
        fs.writeFileSync(filePath, content);
        console.log('  📄 ' + f.path + ' (' + f.size + ' bytes)');
        count++;
      });
    } else if (data.skillMd) {
      // Fallback: write SKILL.md directly
      fs.writeFileSync(path.join(target, 'SKILL.md'), data.skillMd);
      console.log('  📄 SKILL.md');
      count = 1;
    }
    
    console.log('');
    console.log('✅ Installed ' + count + ' file(s) to ' + target);
    console.log('   Your agent can now use this skill.');
  });
"
