# Model Routing Matrix

## Default routing
- Routine checks / heartbeats / simple formatting: **cheap model**
- Standard execution tasks: **balanced model**
- Strategy, high-stakes decisions, complex orchestration: **GPT-5.3 Codex**
- Bulk repetitive subtasks: **subagents on lower-cost model**

## Guardrails
- Don’t use premium model for low-leverage routine work.
- Escalate model only when quality/risk requires it.
- Record major model-routing decisions in `mission-control/ops-log.md`.
