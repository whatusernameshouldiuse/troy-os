# Agent Accounts Setup Checklist (Gmail + X)

## Goal
Give J high-signal inputs (bookmarks/saves) to improve workflows without exposing personal accounts.

## 1) Create dedicated agent accounts
- [ ] Create agent Gmail account (not your personal primary)
- [ ] Create agent X account (read-focused)
- [ ] Store credentials in your password manager

Suggested naming:
- Gmail: `j.agent.<brand>@gmail.com`
- X: `@jagent_<brand>`

## 2) Permission model (least privilege first)

### Gmail (start read-only)
- [ ] Read access only
- [ ] Labels access
- [ ] No send permission initially
- [ ] No delete/trash permission initially

### X (start read-only)
- [ ] Read timeline/bookmarks
- [ ] No posting/reply/DM until approved

## 3) Connect to OpenClaw

### Gmail/Google
- [ ] Connect via `gog` flow
- [ ] Verify mailbox read works
- [ ] Create label: `Agent-Review`

### X
- [ ] Use browser relay or approved API path
- [ ] Verify bookmarks can be opened/reviewed

## 4) Ingestion pipeline (daily)
- [ ] Pull new bookmarks/saves
- [ ] Classify each item:
  - `Act now`
  - `Research later`
  - `Noise`
- [ ] Log top 3 actionable insights in `BRAIN.md`
- [ ] Convert best insight into one task in mission-control

## 5) Guardrails
- [ ] No public posting without explicit approval
- [ ] No account/security changes without approval
- [ ] No external sends from agent Gmail until enabled
- [ ] Weekly review of permissions

## 6) Success criteria (first 14 days)
- [ ] 5+ high-value insights captured/week
- [ ] 3+ implemented workflow improvements/week
- [ ] Reduced false productivity drift (tracked in daily review)

## 7) Activation message to send J after setup
"Accounts connected. I’ll run daily bookmark intelligence, distill signal into money-first actions, and surface only high-leverage lever pulls."
