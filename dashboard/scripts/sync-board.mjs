#!/usr/bin/env node
/**
 * sync-board.mjs — regenerate BOARD.md (Obsidian Kanban) from tasks.json.
 * Source of truth = web/data/tasks.json. This keeps the Obsidian board in sync.
 * Writes to both troy-os/dashboard/BOARD.md and the Obsidian vault copy.
 * Makes a timestamped .bak of any file it overwrites.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DASH = path.resolve(__dirname, '..');
const DATA = path.join(DASH, 'web', 'data', 'tasks.json');
const TARGETS = [
  path.join(DASH, 'BOARD.md'),
  path.join(os.homedir(), 'obsidian-vault', 'Dashboard', 'BOARD.md'),
];

const KANBAN_SETTINGS = '%% kanban:settings\n```\n' +
  JSON.stringify({"kanban-plugin":"board","lane-width":272,"show-checkboxes":true,"new-line-trigger":"shift-enter","show-relative-date":true,"date-format":"YYYY-MM-DD","date-display-format":"MMM D","hide-date-display":false,"date-trigger":"@","hide-date-in-title":true,"show-add-list":true,"show-archive-all":true,"show-board-settings":true,"show-search":true,"show-set-view":true,"hide-tags-in-title":false,"table-sizing":{}}) +
  '\n```\n%%';

function pname(projects, id) {
  const p = projects.find(x => x.id === id);
  return p ? p.short : id;
}

function renderTask(t, projects) {
  const box = t.column === 'done' ? 'x' : ' ';
  let s = `- [${box}] **[${pname(projects, t.project)}]** ${t.title}`;
  if (t.blockedOn) s += ` — _blocked on ${t.blockedOn}_`;
  if (t.priority) s += ` #${t.priority}`;
  for (const tag of (t.tags || [])) if (!/^P[0-3]$/.test(tag)) s += ` #${tag}`;
  if (t.due) s += ` @${t.due}`;
  if (t.doneAt) s += ` ✅ ${t.doneAt}`;
  if (t.captured) s += ` <!-- captured ${t.captured} -->`;
  return s;
}

function build(data) {
  const { columns, projects, tasks } = data;
  const hints = {
    inbox: 'Raw capture only — never decide priority here. Triage every Friday.',
    now: 'WIP LIMIT: 3. Close loops before starting anything below.',
    next: 'WIP LIMIT: 5. Pulled into Now only after a Now loop closes.',
    later: 'Ranked, not committed. Re-rank every Friday.',
    blocked: 'Waiting on a dependency, a Troy decision, or spend approval.',
    'needs-fix': 'Bugs where something returned success but the side-effect never happened. Verify the artifact.',
    done: 'Friday review moves these to ARCHIVE.md.',
  };
  let out = '---\n\nkanban-plugin: board\n\n---\n';
  for (const col of columns) {
    out += `\n## ${col.name}\n\n`;
    if (hints[col.id]) out += `> ${hints[col.id]}\n\n`;
    const colTasks = tasks.filter(t => t.column === col.id);
    // group by category within Later
    if (col.id === 'later') {
      const cats = [...new Set(colTasks.map(t => t.category || 'General'))];
      for (const cat of cats) {
        out += `### ${cat}\n`;
        for (const t of colTasks.filter(t => (t.category || 'General') === cat)) out += renderTask(t, projects) + '\n';
        out += '\n';
      }
    } else {
      for (const t of colTasks) out += renderTask(t, projects) + '\n';
    }
  }
  out += '\n' + KANBAN_SETTINGS + '\n';
  return out;
}

function stamp() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
const md = build(data);
for (const target of TARGETS) {
  try {
    if (fs.existsSync(target)) fs.copyFileSync(target, `${target}.bak-${stamp()}`);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, md);
    console.log('wrote', target);
  } catch (e) {
    console.warn('skip', target, '-', e.message);
  }
}
