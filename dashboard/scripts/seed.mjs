#!/usr/bin/env node
/**
 * seed.mjs — One-time seed of web/data/tasks.json from the existing BOARD.md
 * plus the known Needs-Fix bug queue. Safe to re-run: it OVERWRITES tasks.json,
 * so only run once (or when you intentionally want to re-seed from BOARD.md).
 *
 * After seeding, tasks.json is the source of truth. Use board.mjs to mutate it
 * and sync-board.mjs to regenerate BOARD.md.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DASH = path.resolve(__dirname, '..');
const BOARD = path.join(DASH, 'BOARD.md');
const OUT = path.join(DASH, 'web', 'data', 'tasks.json');

/* ---- Project registry ----
 * group "core"  → Rentagun / BBGV / GunStreamer + Marketing/Ops/Dev = front and center
 * group "seo"   → Local SEO clients = hidden behind a toggle by default
 */
const PROJECTS = [
  { id: 'bbgv',           name: 'Blue Book',      short: 'BBGV',        color: '#428bca', group: 'core', pinned: true },
  { id: 'rentagun',       name: 'Rentagun',       short: 'Rentagun',    color: '#b45309', group: 'core', pinned: true },
  { id: 'gunstreamer',    name: 'GunStreamer',    short: 'GunStreamer', color: '#dc2626', group: 'core', pinned: true },
  { id: 'marketing',      name: 'Marketing',      short: 'Marketing',   color: '#7c3aed', group: 'core' },
  { id: 'dev-tools',      name: 'Dev Tools',      short: 'Dev',         color: '#0891b2', group: 'core' },
  { id: 'ops',            name: 'Ops',            short: 'Ops',         color: '#64748b', group: 'core' },
  { id: 'dutch-dumpsters',name: 'Dutch Dumpsters',short: 'Dutch',       color: '#0d9488', group: 'seo' },
  { id: 'boaz-septic',    name: 'Boaz Septic',    short: 'Boaz',        color: '#65a30d', group: 'seo' },
  { id: 'nd-brick-pavers',name: 'ND Brick Pavers',short: 'ND Brick',    color: '#a16207', group: 'seo' },
  { id: 'hallmark',       name: 'Hallmark Dental', short: 'Hallmark',   color: '#0096aa', group: 'seo' },
  { id: 'seo',            name: 'Local SEO',      short: 'SEO',         color: '#475569', group: 'seo' },
];

const PROJECT_ALIASES = {
  'blue book': 'bbgv', 'bbgv': 'bbgv',
  'rentagun': 'rentagun',
  'gunstreamer': 'gunstreamer',
  'marketing': 'marketing',
  'dev-tools': 'dev-tools', 'dev tools': 'dev-tools',
  'dutch dumpsters': 'dutch-dumpsters',
  'boaz septic': 'boaz-septic',
  'nd brick pavers': 'nd-brick-pavers',
  'hallmark': 'hallmark',
  'seo': 'seo',
  'ops': 'ops',
};

function projectId(label) {
  const key = (label || '').trim().toLowerCase();
  return PROJECT_ALIASES[key] || 'ops';
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48);
}

// Section header -> column id
const SECTION_TO_COL = {
  'inbox': 'inbox',
  'now': 'now',
  'next': 'next',
  'later': 'later',
  'done': 'done',
};

function parseBoard(md) {
  const lines = md.split('\n');
  const tasks = [];
  let col = null;
  let subcat = null;
  let seen = new Set();
  for (const raw of lines) {
    const line = raw.trimEnd();
    const h2 = line.match(/^##\s+(.+)/);
    if (h2) {
      const name = h2[1].trim().toLowerCase();
      col = SECTION_TO_COL[name] || null;
      subcat = null;
      continue;
    }
    const h3 = line.match(/^###\s+(.+)/);
    if (h3) { subcat = h3[1].trim(); continue; }
    if (!col) continue;
    const m = line.match(/^- \[( |x)\]\s+(.*)$/);
    if (!m) continue;
    const done = m[1] === 'x';
    let text = m[2];

    // strip HTML comments (capture date)
    let captured = null;
    text = text.replace(/<!--\s*captured\s*([0-9-]+)\s*-->/i, (_, d) => { captured = d; return ''; });
    text = text.replace(/<!--.*?-->/g, '');

    // done date  ✅ 2026-06-13
    let doneAt = null;
    text = text.replace(/✅\s*([0-9-]+)/, (_, d) => { doneAt = d; return ''; });

    // due  @2026-06-14
    let due = null;
    text = text.replace(/@([0-9]{4}-[0-9]{2}-[0-9]{2})/, (_, d) => { due = d; return ''; });

    // priority #P0..#P3
    let priority = null;
    text = text.replace(/#P([0-3])\b/i, (_, p) => { priority = 'P' + p; return ''; });

    // remaining #tags
    const tags = [];
    text = text.replace(/#([a-z0-9_-]+)/gi, (_, t) => { tags.push(t); return ''; });

    // project [Project]
    let proj = 'ops';
    text = text.replace(/^\s*\*{0,2}\[([^\]]+)\]\*{0,2}\s*/, (_, p) => { proj = projectId(p); return ''; });

    // clean bold + whitespace
    let title = text.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
    if (!title) continue;

    const id = slug(proj + '-' + title.split(' ').slice(0, 6).join('-'));
    let uid = id, n = 2;
    while (seen.has(uid)) { uid = id + '-' + n++; }
    seen.add(uid);

    tasks.push({
      id: uid,
      title,
      project: proj,
      column: done ? 'done' : col,
      priority,
      tags,
      category: subcat,
      captured,
      due,
      doneAt,
      notes: '',
      sessions: [],
      blockedOn: null,
    });
  }
  return tasks;
}

// Heuristic: pull blocked/gated tasks out of their column into "blocked"
function applyBlocked(tasks) {
  for (const t of tasks) {
    if (t.column === 'done') continue;
    const blob = (t.title + ' ' + (t.notes || '')).toLowerCase();
    const m = blob.match(/blocked on ([^.#]+)/);
    if (m) { t.column = 'blocked'; t.blockedOn = m[1].trim(); }
    else if (/\bgate\b|awaiting|waiting on|verbal only|verbal agreement/.test(blob)) {
      t.column = 'blocked';
      t.blockedOn = t.blockedOn || 'dependency / decision';
    }
  }
}

// The 6 "returned success but side-effect broke" bugs (side-effect-bug-queue memory)
const NEEDS_FIX = [
  { project: 'dutch-dumpsters', priority: 'P0',
    title: 'Dutch Dumpsters forms = LIVE lead loss: book.astro:68 + contact.astro:101 POST to Formspree, no res.ok check, both IDs 404',
    notes: 'Port the working site/.../ContactForm.tsx fetch+assert pattern. FIX FIRST — active revenue leak.' },
  { project: 'bbgv', priority: 'P1',
    title: 'BBGV batch_manager.py:160-166 — Klaviyo bulk-subscribe 202 counted as success, rejected profiles permanently skipped',
    notes: 'Poll job / diff list count instead of trusting the 202.' },
  { project: 'bbgv', priority: 'P1',
    title: 'BBGV subscribe_remaining.py:71-73 — same 202-as-success bug',
    notes: 'Same fix as batch_manager.' },
  { project: 'gunstreamer', priority: 'P2',
    title: 'GunStreamer forum_poster.py:888-899 — reply path logs false success',
    notes: 'Copy the verified _post_via_http pattern.' },
  { project: 'gunstreamer', priority: 'P2',
    title: 'GunStreamer sync_to_sheet.py:119-122 — no updatedRows check; clear-then-noop empties tab silently',
    notes: 'Assert updatedRows before trusting the write.' },
  { project: 'bbgv', priority: 'P2',
    title: 'BBGV daily_reoon.sh:16-19 + daily_reoon_cleaner.py:185-195 — exit-0/gog success trusted without $?/updatedRows',
    notes: 'Check $? and updatedRows.' },
];

function buildNeedsFix() {
  return NEEDS_FIX.map((b, i) => ({
    id: slug('fix-' + b.project + '-' + i),
    title: b.title,
    project: b.project,
    column: 'needs-fix',
    priority: b.priority,
    tags: ['bug', 'side-effect'],
    category: null,
    captured: '2026-06-15',
    due: null,
    doneAt: null,
    notes: b.notes,
    sessions: [],
    blockedOn: null,
  }));
}

// Radar — new tech / workflows / skills worth adopting. Seeded; a scraper agent appends here.
const RADAR = [
  { title: 'Auto-scrape new Claude skills / MCP servers / workflows worth adopting',
    type: 'workflow', source: 'self', url: '',
    summary: 'Build the Radar scraper agent: weekly sweep (last30days + skills-hub + MCP registries) → proposes new tech/skills/automations for Troy\'s systems → lands here as cards. THIS is the engine that keeps the board top-tier.',
    status: 'idea' },
];

function buildRadar() {
  return RADAR.map((r, i) => ({
    id: slug('radar-' + i + '-' + r.title.split(' ').slice(0, 4).join('-')),
    addedAt: '2026-06-15',
    status: 'idea',
    ...r,
  }));
}

const md = fs.readFileSync(BOARD, 'utf8');
let tasks = parseBoard(md);
applyBlocked(tasks);
tasks = [...tasks, ...buildNeedsFix()];

const data = {
  updated: '2026-06-15T00:00:00Z',
  meta: { source: 'troy-os/dashboard/web/data/tasks.json', note: 'Source of truth. BOARD.md is generated from this.' },
  columns: [
    { id: 'inbox',     name: 'Inbox',     hint: 'Raw capture — triage Friday' },
    { id: 'now',       name: 'Now',       hint: 'WIP — max 3', limit: 3 },
    { id: 'next',      name: 'Next',      hint: 'Up next — max 5', limit: 5 },
    { id: 'later',     name: 'Later',     hint: 'Ranked, not committed' },
    { id: 'blocked',   name: 'Blocked',   hint: 'Waiting on dep / decision / spend' },
    { id: 'needs-fix', name: 'Needs Fix', hint: 'Bugs — side-effect never happened' },
    { id: 'done',      name: 'Done',      hint: 'Recent ships' },
  ],
  projects: PROJECTS,
  tasks,
  agents: [],   // Hermes writes live agent runs here
  radar: buildRadar(),
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');
console.log(`Seeded ${tasks.length} tasks, ${PROJECTS.length} projects, ${data.radar.length} radar items -> ${OUT}`);
