# HEARTBEAT TASKS

Purpose: detect meaningful change, not generate churn.

On heartbeat:
1. If there is **no material change** since the last pass, reply exactly: `HEARTBEAT_OK`.
2. Read `BRAIN.md`; if any item is stale, broken, or overdue, flag it (or fix if safe).
3. During daytime, run a quick preflight sanity check using `mission-control/AGENT-OPS-PREFLIGHT.md` (only escalate if degraded).
4. Only when there is a **material new signal**:
   - Open `mission-control/interests/` and update relevant agent INTERESTS.md files with:
     - one new curiosity
     - one observed signal
     - refreshed last-updated date
   - If the insight is material, append one line to `mission-control/interests/README.md` under "Recent Notes".
5. Keep updates concise (3-6 bullets max per file per day).

Cadence guidance:
- Prioritize daytime heartbeats (roughly 08:00–20:00 local).
- Overnight heartbeats should usually return `HEARTBEAT_OK` unless urgent/material.

Nightly creation:
- A LaunchAgent runs at 21:40 local and writes `mission-control/nightly-creations/YYYY-MM-DD.md` from current interests.
