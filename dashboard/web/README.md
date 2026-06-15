# Mission Board (web)

Visual Kanban for every Troy project. Source of truth is `data/tasks.json`
(see `../HERMES.md` for the read/write contract). `../BOARD.md` is generated from it.

## Run locally (full read/write)

```bash
npm install
npm run dev          # http://localhost:4444
```

Locally the API route writes to `data/tasks.json` and regenerates `BOARD.md` on every
change, so drag-and-drop, quick-add, and delete all persist and stay in sync with Obsidian.

## Deploy to Vercel

```bash
vercel              # root dir = this folder (troy-os/dashboard/web)
```

Set env vars in the Vercel project:

- `BOARD_USER` (default `troy`)
- `BOARD_PASSWORD` — **required**; basic-auth gate. If unset, the board is open.

On Vercel the board is a **read-only snapshot** (serverless filesystem is read-only —
edits there won't persist). Authoritative edits happen locally where Hermes runs, then
`git push` / redeploy publishes the new snapshot. To make the deploy live-writable later,
swap the file store for Vercel KV.

## Structure

- `app/page.js` → renders `app/components/Board.jsx` (the whole UI, client component)
- `app/api/board/route.js` → GET board, POST `move|add|update|rm`
- `middleware.js` → basic-auth gate (active only when `BOARD_PASSWORD` is set)
- `data/tasks.json` → source of truth
- `../scripts/` → `seed.mjs` (one-time), `sync-board.mjs` (JSON→BOARD.md), `board.mjs` (CLI for Hermes)
