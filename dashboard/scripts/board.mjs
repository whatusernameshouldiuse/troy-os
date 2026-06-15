#!/usr/bin/env node
/**
 * board.mjs — Hermes/CLI interface to the Kanban. Reads & writes tasks.json
 * (the source of truth), then regenerates BOARD.md. This is how agents and the
 * terminal mutate the board safely. See dashboard/HERMES.md for the contract.
 *
 * Usage:
 *   node scripts/board.mjs list [--col now] [--project bbgv]
 *   node scripts/board.mjs add "<title>" --project bbgv --col inbox [--priority P1] [--due 2026-06-20] [--tags bug,seo] [--notes "..."]
 *   node scripts/board.mjs move <taskId> <col>
 *   node scripts/board.mjs done <taskId>
 *   node scripts/board.mjs update <taskId> [--priority P0] [--notes "..."] [--blocked "dev decision"] [--addSession <file>]
 *   node scripts/board.mjs rm <taskId>
 *   node scripts/board.mjs agent start <name> --task <taskId|free text> [--project bbgv] [--detail "..."]   -> prints agentId
 *   node scripts/board.mjs agent update <agentId> --status running --detail "..."
 *   node scripts/board.mjs agent done <agentId> [--detail "..."]
 *   node scripts/board.mjs agent clear                         (remove finished/stale agents)
 *   node scripts/board.mjs radar add "<title>" --type skill|mcp|workflow|tech --url <url> --summary "..." [--source last30days]
 *   node scripts/board.mjs radar promote <radarId> --project dev-tools   (turn a radar item into an inbox task)
 *
 * All mutating commands run sync-board.mjs afterward unless --no-sync is passed.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DASH = path.resolve(__dirname, '..');
const DATA = path.join(DASH, 'web', 'data', 'tasks.json');
const SYNC = path.join(__dirname, 'sync-board.mjs');

const COLUMNS = ['inbox', 'now', 'next', 'later', 'blocked', 'needs-fix', 'done'];

function load() { return JSON.parse(fs.readFileSync(DATA, 'utf8')); }
function save(d, doSync) {
  d.updated = new Date().toISOString();
  fs.writeFileSync(DATA, JSON.stringify(d, null, 2) + '\n');
  if (doSync) { try { execFileSync('node', [SYNC], { stdio: 'inherit' }); } catch {} }
}
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,48);}
function uid(prefix, d, key){let base=slug(prefix);let id=base,n=2;const ids=new Set((d[key]||[]).map(x=>x.id));while(ids.has(id))id=base+'-'+n++;return id;}

// crude flag parser: --key value  (and --key with no value => true)
function parseFlags(args) {
  const flags = {}; const pos = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const k = args[i].slice(2);
      const v = (i + 1 < args.length && !args[i + 1].startsWith('--')) ? args[++i] : true;
      flags[k] = v;
    } else pos.push(args[i]);
  }
  return { flags, pos };
}

const [cmd, ...rest] = process.argv.slice(2);
const { flags, pos } = parseFlags(rest);
const doSync = !flags['no-sync'];
const d = load();

function findTask(id){const t=d.tasks.find(x=>x.id===id);if(!t){console.error('No task:',id);process.exit(1);}return t;}

switch (cmd) {
  case 'list': {
    let ts = d.tasks;
    if (flags.col) ts = ts.filter(t => t.column === flags.col);
    if (flags.project) ts = ts.filter(t => t.project === flags.project);
    for (const t of ts) console.log(`[${t.column}] (${t.project}) ${t.priority||'  '} ${t.id} :: ${t.title}`);
    console.log(`\n${ts.length} task(s)`);
    break;
  }
  case 'add': {
    const title = pos.join(' ').trim();
    if (!title) { console.error('add needs a title'); process.exit(1); }
    const project = flags.project || 'ops';
    const column = flags.col || 'inbox';
    if (!COLUMNS.includes(column)) { console.error('bad col'); process.exit(1); }
    const t = {
      id: uid(project + '-' + title.split(' ').slice(0,6).join('-'), d, 'tasks'),
      title, project, column,
      priority: flags.priority || null,
      tags: flags.tags ? String(flags.tags).split(',').map(s=>s.trim()).filter(Boolean) : [],
      category: flags.category || null,
      captured: new Date().toISOString().slice(0,10),
      due: flags.due || null, doneAt: null,
      notes: flags.notes || '', sessions: [], blockedOn: flags.blocked || null,
    };
    if (column === 'blocked' && !t.blockedOn) t.blockedOn = 'dependency';
    d.tasks.push(t); save(d, doSync); console.log('added', t.id);
    break;
  }
  case 'move': {
    const t = findTask(pos[0]); const col = pos[1];
    if (!COLUMNS.includes(col)) { console.error('bad col'); process.exit(1); }
    t.column = col;
    if (col === 'done') t.doneAt = new Date().toISOString().slice(0,10);
    save(d, doSync); console.log('moved', t.id, '->', col);
    break;
  }
  case 'done': {
    const t = findTask(pos[0]); t.column = 'done'; t.doneAt = new Date().toISOString().slice(0,10);
    save(d, doSync); console.log('done', t.id);
    break;
  }
  case 'update': {
    const t = findTask(pos[0]);
    if (flags.priority) t.priority = flags.priority;
    if (flags.notes) t.notes = flags.notes;
    if (flags.blocked) { t.blockedOn = flags.blocked; t.column = 'blocked'; }
    if (flags.addSession) t.sessions.push(flags.addSession);
    if (flags.due) t.due = flags.due;
    save(d, doSync); console.log('updated', t.id);
    break;
  }
  case 'rm': {
    const before = d.tasks.length; d.tasks = d.tasks.filter(t => t.id !== pos[0]);
    if (d.tasks.length === before) { console.error('No task:', pos[0]); process.exit(1); }
    save(d, doSync); console.log('removed', pos[0]);
    break;
  }
  case 'agent': {
    const sub = pos[0];
    if (sub === 'start') {
      const name = pos.slice(1).join(' ') || 'agent';
      const a = {
        id: uid('a-' + name, d, 'agents'),
        name, status: 'running',
        task: flags.task || null, project: flags.project || null,
        detail: flags.detail || '', startedAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
      };
      d.agents.push(a); save(d, doSync); console.log(a.id);
    } else if (sub === 'update') {
      const a = d.agents.find(x => x.id === pos[1]); if (!a){console.error('no agent');process.exit(1);}
      if (flags.status) a.status = flags.status;
      if (flags.detail) a.detail = flags.detail;
      a.updatedAt = new Date().toISOString(); save(d, doSync); console.log('ok');
    } else if (sub === 'done') {
      const a = d.agents.find(x => x.id === pos[1]); if (!a){console.error('no agent');process.exit(1);}
      a.status = 'done'; if (flags.detail) a.detail = flags.detail; a.updatedAt = new Date().toISOString();
      save(d, doSync); console.log('ok');
    } else if (sub === 'clear') {
      d.agents = d.agents.filter(a => a.status === 'running');
      save(d, doSync); console.log('cleared finished agents');
    } else { console.error('agent: start|update|done|clear'); process.exit(1); }
    break;
  }
  case 'radar': {
    const sub = pos[0];
    if (sub === 'list') {
      for (const r of d.radar) console.log(`[${r.status}] (${r.type}) ${r.id} :: ${r.title}`);
      console.log(`\n${d.radar.length} radar item(s)`);
      break;
    }
    if (sub === 'add') {
      const title = pos.slice(1).join(' ').trim();
      const r = {
        id: uid('radar-' + title.split(' ').slice(0,4).join('-'), d, 'radar'),
        title, type: flags.type || 'tech', source: flags.source || 'manual',
        url: flags.url || '', summary: flags.summary || '',
        addedAt: new Date().toISOString().slice(0,10), status: 'idea',
      };
      d.radar.push(r); save(d, doSync); console.log('radar added', r.id);
    } else if (sub === 'promote') {
      const r = d.radar.find(x => x.id === pos[1]); if(!r){console.error('no radar item');process.exit(1);}
      const t = {
        id: uid((flags.project||'dev-tools') + '-' + r.title.split(' ').slice(0,6).join('-'), d, 'tasks'),
        title: `[Radar] ${r.title}`, project: flags.project || 'dev-tools', column: 'inbox',
        priority: null, tags: ['radar', r.type], category: null,
        captured: new Date().toISOString().slice(0,10), due: null, doneAt: null,
        notes: `${r.summary}${r.url ? '\nSource: ' + r.url : ''}`, sessions: [], blockedOn: null,
      };
      d.tasks.push(t); r.status = 'promoted'; save(d, doSync); console.log('promoted ->', t.id);
    } else { console.error('radar: add|promote'); process.exit(1); }
    break;
  }
  default:
    console.log('commands: list | add | move | done | update | rm | agent | radar');
}
