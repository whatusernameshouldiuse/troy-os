#!/usr/bin/env python3
from pathlib import Path
import argparse, json, re, random
from datetime import datetime

ROOT = Path('/Users/troyvanmaanen/clawd')
OUT = ROOT / 'mission-control' / 'deep-research'

SOURCES = [
    ROOT / 'BRAIN.md',
    ROOT / 'MEMORY.md',
    ROOT / 'SOUL.md',
    ROOT / 'USER.md',
    ROOT / 'mission-control' / 'OPENCLAW-OPERATING-DOCTRINE.md',
]

PROJECT_HINTS = [
    'BBGV', 'Rentagun', 'GunStreamer', 'GTM', 'SEO',
    'email lifecycle', 'conversion', 'offer', 'consignment', 'instant cash offer',
]

TEMPLATES = [
    "Act as a principal strategy researcher. Build an evidence-backed plan to improve {theme} for {project}. Include benchmarks, competitor patterns, implementation risks, and a 14-day execution checklist.",
    "Run deep research on best-in-class systems for {theme} in {project}. Output a practical SOP, tools stack, KPI tree, and weekly cadence.",
    "Research what top performers do for {theme} in {project} and what they avoid. Provide a gap analysis against our current approach and prioritized fixes.",
    "Generate a decision memo for {theme} in {project}: options, tradeoffs, expected ROI, confidence levels, and next 3 experiments.",
    "Research emerging opportunities in {theme} relevant to {project}. Provide 10 high-leverage actions ranked by speed-to-value and revenue impact.",
]


def extract_points(text: str):
    pts = []
    for line in text.splitlines():
        l = line.strip('-* ').strip()
        if len(l) > 20 and not l.startswith('#'):
            pts.append(l)
    return pts


def load_context_points():
    points = []
    for p in SOURCES:
        if p.exists():
            try:
                points += extract_points(p.read_text(errors='ignore'))
            except Exception:
                pass

    mem = ROOT / 'memory'
    if mem.exists():
        for p in sorted(mem.glob('*.md'))[-10:]:
            try:
                points += extract_points(p.read_text(errors='ignore'))
            except Exception:
                pass

    # Project docs sampling
    proj_root = Path('/Users/troyvanmaanen/Library/Mobile Documents/iCloud~md~obsidian/Documents/Work/Projects')
    if proj_root.exists():
        for p in sorted(proj_root.rglob('*.md'))[:150]:
            sp = str(p).lower()
            if any(h.lower() in sp for h in PROJECT_HINTS):
                try:
                    text = p.read_text(errors='ignore')[:4000]
                    points += extract_points(text)
                except Exception:
                    pass

    # dedupe
    seen = set(); dedup = []
    for pt in points:
        k = re.sub(r'\s+', ' ', pt.lower())[:180]
        if k in seen:
            continue
        seen.add(k)
        dedup.append(pt)
    return dedup


def infer_project(theme: str):
    t = theme.lower()
    if any(x in t for x in ['valuation', 'consignment', 'ico', 'firearm value', 'bbgv']):
        return 'BBGV'
    if any(x in t for x in ['stream', 'egunco', 'promo', 'collector']):
        return 'GunStreamer'
    if any(x in t for x in ['rent', 'acquisition', 'dealer']):
        return 'Rentagun'
    return 'GTM'


def build_prompt(theme, i):
    project = infer_project(theme)
    tpl = TEMPLATES[i % len(TEMPLATES)]
    return tpl.format(theme=theme, project=project)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--month', required=True, help='YYYY-MM')
    ap.add_argument('--count', type=int, default=500)
    args = ap.parse_args()

    OUT.mkdir(parents=True, exist_ok=True)
    random.seed(args.month)

    points = load_context_points()
    if not points:
        points = [
            'improve conversion from lead to activated user',
            'strengthen lifecycle email deliverability',
            'increase high-intent traffic quality',
            'improve offer positioning and trust',
        ]

    # Expand themes
    themes = []
    seed_topics = [
        'customer journey optimization', 'offer conversion lift', 'email performance recovery',
        'content-to-revenue pipeline', 'high-intent lead qualification', 'sales ops automation',
        'acquisition channel prioritization', 'retention and reactivation', 'pricing and packaging',
        'competitive positioning', 'SOP creation and delegation', 'analytics and attribution integrity'
    ]
    themes.extend(seed_topics)
    themes.extend(points)

    prompts = []
    i = 0
    while len(prompts) < args.count:
        theme = themes[i % len(themes)]
        text = build_prompt(theme, i)
        prompts.append({
            'id': len(prompts) + 1,
            'month': args.month,
            'theme': theme,
            'prompt': text,
            'status': 'todo'
        })
        i += 1

    md_path = OUT / f'{args.month}-prompts.md'
    js_path = OUT / f'{args.month}-prompts.json'

    lines = [f'# Deep Research Prompt Bank — {args.month}', '', f'Total prompts: {len(prompts)}', '',
             'Daily target: 5-10 runs/day', '']
    for p in prompts:
        lines += [f"## [{p['id']}] ({p['status']}) {p['theme']}", p['prompt'], '']

    md_path.write_text('\n'.join(lines))
    js_path.write_text(json.dumps(prompts, indent=2))

    print(f'Wrote {md_path}')
    print(f'Wrote {js_path}')


if __name__ == '__main__':
    main()
