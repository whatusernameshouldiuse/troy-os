'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const POLL_MS = 7000;

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr + 'T00:00:00');
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.round((d - now) / 86400000);
}

export default function Board() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [seoVisible, setSeoVisible] = useState(false);
  const [activeProjects, setActiveProjects] = useState(new Set());
  const [showSidebar, setShowSidebar] = useState(true);
  const [addingCol, setAddingCol] = useState(null);
  const [dragId, setDragId] = useState(null);
  const [dragOverCol, setDragOverCol] = useState(null);
  const [readOnly, setReadOnly] = useState(false);
  const draggingRef = useRef(false);

  async function load() {
    if (draggingRef.current) return; // don't clobber mid-drag
    try {
      const r = await fetch('/api/board', { cache: 'no-store' });
      if (r.ok) setData(await r.json());
    } catch {}
  }

  useEffect(() => {
    load();
    const t = setInterval(load, POLL_MS);
    return () => clearInterval(t);
  }, []);

  async function mutate(action, payload) {
    const r = await fetch('/api/board', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...payload }),
    });
    const j = await r.json().catch(() => ({}));
    if (j.readOnly) setReadOnly(true);
    if (j.data) setData(j.data);
    return j;
  }

  const projects = data?.projects || [];
  const projMap = useMemo(() => Object.fromEntries(projects.map(p => [p.id, p])), [projects]);

  const visibleProjectIds = useMemo(() => {
    const ids = new Set(projects.filter(p => p.group === 'core' || seoVisible).map(p => p.id));
    return ids;
  }, [projects, seoVisible]);

  function toggleProject(id) {
    setActiveProjects(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  }

  const tasksByCol = useMemo(() => {
    const by = {};
    if (!data) return by;
    const q = search.trim().toLowerCase();
    for (const t of data.tasks) {
      if (!visibleProjectIds.has(t.project)) continue;
      if (activeProjects.size && !activeProjects.has(t.project)) continue;
      if (q && !(t.title.toLowerCase().includes(q) || t.project.includes(q) || (t.tags || []).some(x => x.includes(q)))) continue;
      (by[t.column] ||= []).push(t);
    }
    // priority sort within a column: P0..P3 then untagged
    const order = { P0: 0, P1: 1, P2: 2, P3: 3 };
    for (const k in by) by[k].sort((a, b) => (order[a.priority] ?? 9) - (order[b.priority] ?? 9));
    return by;
  }, [data, search, visibleProjectIds, activeProjects]);

  // --- drag ---
  function onDragStart(e, id) { setDragId(id); draggingRef.current = true; e.dataTransfer.effectAllowed = 'move'; }
  function onDragEnd() { setDragId(null); setDragOverCol(null); draggingRef.current = false; }
  function onDrop(e, col) {
    e.preventDefault();
    const id = dragId;
    setDragOverCol(null);
    draggingRef.current = false;
    if (!id) return;
    // optimistic
    setData(prev => {
      const next = structuredClone(prev);
      const t = next.tasks.find(x => x.id === id);
      if (t) { t.column = col; if (col === 'done') t.doneAt = new Date().toISOString().slice(0, 10); }
      return next;
    });
    setDragId(null);
    mutate('move', { id, col });
  }

  if (!data) {
    return <div style={{ padding: 40, color: '#9aa1ad' }}>Loading board…</div>;
  }

  const agentsLive = (data.agents || []).filter(a => a.status === 'running');
  const agentsAll = (data.agents || []);
  const radar = data.radar || [];

  return (
    <>
      <div className="topbar">
        <h1>Mission Board</h1>
        <span className="sub">{data.tasks.length} tasks</span>
        <div className="chips">
          {projects.filter(p => p.group === 'core').map(p => (
            <Chip key={p.id} p={p} active={activeProjects.has(p.id)} onClick={() => toggleProject(p.id)} />
          ))}
          {seoVisible && projects.filter(p => p.group === 'seo').map(p => (
            <Chip key={p.id} p={p} active={activeProjects.has(p.id)} onClick={() => toggleProject(p.id)} />
          ))}
        </div>
        <button className={'btn' + (seoVisible ? ' on' : '')} onClick={() => setSeoVisible(v => !v)}>
          {seoVisible ? 'Hide Local SEO' : 'Show Local SEO'}
        </button>
        <div className="spacer" />
        <input className="search" placeholder="Search tasks…" value={search} onChange={e => setSearch(e.target.value)} />
        <button className={'btn' + (showSidebar ? ' on' : '')} onClick={() => setShowSidebar(v => !v)}>Agents &amp; Radar</button>
      </div>

      {readOnly && (
        <div className="banner">View-only mode — this is the deployed snapshot. Edits happen locally where Hermes runs (or via the board CLI).</div>
      )}

      <div className="shell">
        <div className="board">
          {data.columns.map(col => {
            const list = tasksByCol[col.id] || [];
            const over = col.limit && list.length > col.limit;
            return (
              <div
                key={col.id}
                className={'col' + (dragOverCol === col.id ? ' dragover' : '')}
                onDragOver={e => { e.preventDefault(); setDragOverCol(col.id); }}
                onDragLeave={() => setDragOverCol(c => (c === col.id ? null : c))}
                onDrop={e => onDrop(e, col.id)}
              >
                <div className="col-head">
                  <span className="name">{col.name}</span>
                  <span className={'count' + (over ? ' over' : '')}>
                    {list.length}{col.limit ? `/${col.limit}` : ''}
                  </span>
                </div>
                {col.hint && <div className="col-hint">{col.hint}</div>}
                <div className="col-body">
                  {list.map(t => (
                    <Card
                      key={t.id} t={t} proj={projMap[t.project]}
                      dragging={dragId === t.id}
                      onDragStart={onDragStart} onDragEnd={onDragEnd}
                      onDelete={() => { if (confirm('Delete this card?')) mutate('rm', { id: t.id }); }}
                    />
                  ))}
                </div>
                {addingCol === col.id
                  ? <AddForm projects={projects} defaultCol={col.id}
                      onCancel={() => setAddingCol(null)}
                      onAdd={async p => { await mutate('add', p); setAddingCol(null); }} />
                  : <button className="col-add" onClick={() => setAddingCol(col.id)}>+ Add card</button>}
              </div>
            );
          })}
        </div>

        <aside className={'sidebar' + (showSidebar ? '' : ' hidden')}>
          <div className="side-section">
            <h2>{agentsLive.length > 0 && <span className="live-dot" />} Agent Activity</h2>
            {agentsAll.length === 0
              ? <div className="empty">No agents running. Hermes posts live runs here.</div>
              : agentsAll.slice().reverse().map(a => (
                <div className="agent" key={a.id}>
                  <div className="ico">{(a.name || '?').slice(0, 1).toUpperCase()}</div>
                  <div style={{ flex: 1 }}>
                    <div className="nm">{a.name} <span className={'st ' + a.status}>{a.status}</span></div>
                    {a.detail && <div className="dt">{a.detail}</div>}
                    {a.task && <div className="dt" style={{ color: '#9aa1ad' }}>task: {a.task}</div>}
                  </div>
                </div>
              ))}
          </div>
          <div className="side-section">
            <h2>Radar — adopt next</h2>
            {radar.length === 0
              ? <div className="empty">Nothing on the radar yet.</div>
              : radar.filter(r => r.status !== 'promoted').map(r => (
                <div className="radar-item" key={r.id}>
                  <div className="rtype">{r.type}</div>
                  <div className="rt">{r.url ? <a href={r.url} target="_blank" rel="noreferrer">{r.title}</a> : r.title}</div>
                  {r.summary && <div className="rs">{r.summary}</div>}
                </div>
              ))}
          </div>
        </aside>
      </div>
    </>
  );
}

function Chip({ p, active, onClick }) {
  return (
    <span
      className={'chip' + (active ? ' on' : '')}
      style={active ? { background: p.color } : {}}
      onClick={onClick}
      title={p.name}
    >
      <span className="dot" style={{ background: active ? '#fff' : p.color }} />
      {p.short}
    </span>
  );
}

function Card({ t, proj, dragging, onDragStart, onDragEnd, onDelete }) {
  const dd = daysUntil(t.due);
  const soon = dd !== null && dd <= 3;
  return (
    <div
      className={'card' + (dragging ? ' dragging' : '')}
      style={{ borderLeftColor: proj?.color || '#ccc' }}
      draggable
      onDragStart={e => onDragStart(e, t.id)}
      onDragEnd={onDragEnd}
    >
      <span className="card-x" onClick={onDelete} title="Delete">×</span>
      <p className="ctitle">{t.title}</p>
      <div className="meta">
        {proj && <span className="tag proj-tag" style={{ background: proj.color }}>{proj.short}</span>}
        {t.priority && <span className={'prio ' + t.priority}>{t.priority}</span>}
        {t.due && <span className={'due' + (soon ? ' soon' : '')}>due {t.due}</span>}
        {(t.tags || []).filter(x => !/^P[0-3]$/.test(x)).map(tag => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      {t.blockedOn && <div className="blocked-on">blocked on {t.blockedOn}</div>}
      {t.sessions && t.sessions.length > 0 && (
        <div className="sessions">sessions: {t.sessions.map((s, i) => (
          <span key={i}>{i > 0 ? ', ' : ''}{s.replace(/\.md$/, '')}</span>
        ))}</div>
      )}
    </div>
  );
}

function AddForm({ projects, defaultCol, onAdd, onCancel }) {
  const [title, setTitle] = useState('');
  const [project, setProject] = useState(projects.find(p => p.group === 'core')?.id || projects[0]?.id);
  const [priority, setPriority] = useState('');
  return (
    <div className="addform" style={{ padding: '0 10px 10px' }}>
      <input autoFocus placeholder="Task title…" value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter' && title.trim()) onAdd({ title, project, priority: priority || null, col: defaultCol }); if (e.key === 'Escape') onCancel(); }} />
      <div className="row">
        <select value={project} onChange={e => setProject(e.target.value)}>
          {projects.map(p => <option key={p.id} value={p.id}>{p.short}</option>)}
        </select>
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="">—</option>
          <option>P0</option><option>P1</option><option>P2</option><option>P3</option>
        </select>
      </div>
      <div className="actions">
        <button className="mini primary" disabled={!title.trim()}
          onClick={() => onAdd({ title, project, priority: priority || null, col: defaultCol })}>Add</button>
        <button className="mini" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
