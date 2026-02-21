#!/bin/bash
set -euo pipefail
WS="/Users/troyvanmaanen/clawd"
ROOT="$WS/mission-control/interests"
OUT="$WS/mission-control/nightly-creations"
mkdir -p "$OUT"
DATE=$(date +%F)
OUTFILE="$OUT/${DATE}.md"
DOW=$(date +%u) # 1=Mon ... 7=Sun

mode="write"
prompt="Write a concise insight memo from one high-signal curiosity."
case "$DOW" in
  1) mode="write"; prompt="Write: produce a crisp 300-500 word memo from the strongest curiosity." ;;
  2) mode="strategy-sketch"; prompt="Strategy sketch: map one curiosity to objective, bottleneck, leverage, next 3 actions." ;;
  3) mode="campaign-concept"; prompt="Campaign concept: propose one market-facing experiment with audience, hook, CTA, KPI." ;;
  4) mode="framework"; prompt="Framework: turn one recurring pattern into a reusable checklist or operating rule." ;;
  5) mode="experimental-idea"; prompt="Experimental idea: propose one bold test with upside, risk, and kill criteria." ;;
  6) mode="weekly-synthesis"; prompt="Synthesize week signals into themes, decisions, and what changes Monday." ;;
  7) mode="reset-brief"; prompt="Reset brief: prune noise, keep only top 3 curiosities per agent for next week." ;;
esac

{
  echo "# Nightly Creation — ${DATE}"
  echo
  echo "Mode: ${mode}"
  echo
  echo "Generated from agent interests."
  echo
  for f in "$ROOT"/*.md; do
    [ -f "$f" ] || continue
    name=$(basename "$f" .md)
    [ "$name" = "README" ] && continue
    echo "## ${name}"
    awk 'BEGIN{p=0} /^## New Curiosities/{p=1;next} /^## Signals I.m Watching/{p=0} p==1{print}' "$f" | sed '/^$/d' | sed 's/^/- /'
    echo
  done
  echo "## Creation Prompt"
  echo "- ${prompt}"
} > "$OUTFILE"
