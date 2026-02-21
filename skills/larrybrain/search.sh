#!/bin/bash
# LarryBrain skill search — queries the marketplace API
# Usage: ./search.sh [query] [sort] [limit]
# Sort: popular, rating, downloads, newest

API_URL="${LARRYBRAIN_API_URL:-http://localhost:3000}"
QUERY="${1:-}"
SORT="${2:-popular}"
LIMIT="${3:-10}"

PARAMS="sort=${SORT}&limit=${LIMIT}"
if [ -n "$QUERY" ]; then
  PARAMS="q=$(echo "$QUERY" | sed 's/ /%20/g')&${PARAMS}"
fi

curl -s "${API_URL}/api/skills/search?${PARAMS}" | node -e "
  const chunks = [];
  process.stdin.on('data', c => chunks.push(c));
  process.stdin.on('end', () => {
    try {
      const data = JSON.parse(Buffer.concat(chunks).toString());
      if (data.error) { console.log('Error:', data.error); process.exit(1); }
      console.log('Found ' + data.total + ' skills' + (data.query ? ' matching \"' + data.query + '\"' : '') + ':\n');
      if (data.skills && data.skills.length > 0) {
        data.skills.forEach((s, i) => {
          console.log((i+1) + '. ' + s.icon + ' ' + s.name + ' (v' + s.version + ')');
          console.log('   ' + s.description);
          console.log('   Tags: ' + s.tags.join(', ') + ' | ★ ' + s.rating + ' | ' + s.installs + ' installs');
          console.log('   By: ' + s.authorName + ' (@' + s.authorGithub + ')');
          console.log('   Slug: ' + s.slug);
          console.log('');
        });
      } else {
        console.log('No skills found.');
      }
    } catch(e) { console.log('Failed to parse response'); }
  });
"
