# Ops Log

## 2026-02-20
- Implemented Agent Ops hardening pack:
  - AGENT-OPS-PREFLIGHT.md
  - MODEL-ROUTING-MATRIX.md
  - PROJECT-INTAKE-TEMPLATE.md
  - MEMORY-MAINTENANCE-RUNBOOK.md
  - SKILL-BUILDER-TRIGGER.md
  - DELEGATION-FALLBACK-POLICY.md
- Implemented operations upgrades from review:
  - PROMPT-TEMPLATES.md
  - SYSTEM-HYGIENE-CHECKLIST.md
  - DELEGATION-HEALTH-TEST.md
  - NOTION-HANDOFF-RUNBOOK.md
- Updated OPENCLAW-OPERATING-DOCTRINE.md control files list.

## 2026-02-23
- Heartbeat preflight: `openclaw status` reachable and channel healthy; workspace read/write passed.
- Sub-agent spawn sanity check failed twice with `gateway closed (1008): pairing required` (runIds: `e69fbe5c-9ed0-438f-9d08-5fb64b1d471b`, `6e94bb4b-43e0-4add-89be-03764d80b07f`).
- Degradation remains active; fallback delegation policy should be used until pairing is restored.
