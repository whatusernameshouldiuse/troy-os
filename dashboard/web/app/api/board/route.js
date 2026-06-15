import { NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
// Static import guarantees the bundler ships the data file; used as a read
// fallback if the filesystem path isn't resolvable (e.g. on Vercel).
import seedData from '../../../data/tasks.json';

const DATA = path.join(process.cwd(), 'data', 'tasks.json');
const SYNC = path.join(process.cwd(), '..', 'scripts', 'sync-board.mjs');
const COLUMNS = ['inbox', 'now', 'next', 'later', 'blocked', 'needs-fix', 'done'];

export const dynamic = 'force-dynamic';

function read() {
  try {
    return JSON.parse(fs.readFileSync(DATA, 'utf8'));
  } catch {
    // Deployed/read-only environment: serve the bundled snapshot.
    return structuredClone(seedData);
  }
}

function write(d) {
  d.updated = new Date().toISOString();
  fs.writeFileSync(DATA, JSON.stringify(d, null, 2) + '\n');
  // Regenerate BOARD.md for Obsidian when running locally (not on Vercel).
  if (!process.env.VERCEL) {
    execFile('node', [SYNC], () => {});
  }
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48);
}

export async function GET() {
  try {
    return NextResponse.json(read());
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'bad json' }, { status: 400 }); }
  const { action } = body;
  let d;
  try { d = read(); } catch (e) { return NextResponse.json({ error: e.message }, { status: 500 }); }

  try {
    if (action === 'move') {
      const t = d.tasks.find(x => x.id === body.id);
      if (!t) return NextResponse.json({ error: 'no task' }, { status: 404 });
      if (!COLUMNS.includes(body.col)) return NextResponse.json({ error: 'bad col' }, { status: 400 });
      t.column = body.col;
      if (body.col === 'done') t.doneAt = today();
    } else if (action === 'add') {
      const title = (body.title || '').trim();
      if (!title) return NextResponse.json({ error: 'no title' }, { status: 400 });
      const base = slug((body.project || 'ops') + '-' + title.split(' ').slice(0, 6).join('-'));
      let id = base, n = 2; const ids = new Set(d.tasks.map(t => t.id));
      while (ids.has(id)) id = base + '-' + n++;
      d.tasks.push({
        id, title, project: body.project || 'ops', column: body.col || 'inbox',
        priority: body.priority || null, tags: body.tags || [], category: null,
        captured: today(), due: body.due || null, doneAt: null,
        notes: body.notes || '', sessions: [], blockedOn: body.col === 'blocked' ? 'dependency' : null,
      });
    } else if (action === 'update') {
      const t = d.tasks.find(x => x.id === body.id);
      if (!t) return NextResponse.json({ error: 'no task' }, { status: 404 });
      for (const k of ['priority', 'notes', 'due', 'blockedOn', 'title']) if (k in body) t[k] = body[k];
    } else if (action === 'rm') {
      const before = d.tasks.length;
      d.tasks = d.tasks.filter(t => t.id !== body.id);
      if (d.tasks.length === before) return NextResponse.json({ error: 'no task' }, { status: 404 });
    } else {
      return NextResponse.json({ error: 'unknown action' }, { status: 400 });
    }
    write(d);
    return NextResponse.json({ ok: true, data: d });
  } catch (e) {
    // Read-only filesystem (Vercel) or other write failure.
    return NextResponse.json({ error: e.message, readOnly: true }, { status: 200 });
  }
}
