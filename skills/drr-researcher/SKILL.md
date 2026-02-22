---
name: drr-researcher
description: Generate and maintain high-leverage ChatGPT Deep Research prompts from workspace context. Use when planning monthly research cycles, creating 500-prompt batches by the 1st, or building daily Deep Research run queues for GTM, content, outreach, product, and operations.
---

# DRR Researcher

Create a compounding Deep Research engine for monthly system upgrades.

## Required Outcome
- Produce **500 Deep Research prompts by the 1st of each month**.
- Base prompts on live context from:
  - `BRAIN.md`
  - `MEMORY.md`
  - `memory/*.md` (recent logs)
  - `mission-control/*.md`
  - key project strategy docs

## Workflow
1. Run prompt generator script:
   - `python3 skills/drr-researcher/scripts/generate_drr_prompts.py --month YYYY-MM`
2. Verify outputs:
   - `mission-control/deep-research/YYYY-MM-prompts.md`
   - `mission-control/deep-research/YYYY-MM-prompts.json`
3. Build daily queue:
   - 5-10 prompts/day
   - prioritize money-first workflows first
4. Track execution status in the markdown file (todo/in-progress/done).

## Daily Usage Rules
- Run Deep Research aggressively (5-10/day target).
- Prioritize prompts tied to:
  - revenue now (pipeline/conversion/cash)
  - near-term compounding (SOPs, automation, segmentation, positioning)
- Avoid one-off vanity research unless explicitly requested.

## Monthly Cadence
- By the 1st: generate full 500-prompt bank.
- Weekly: refresh top 50 prompts using newest context.
- End of month: mark winners and fold into SOPs/frameworks.

## Guardrails
- No fabricated data claims.
- Every research prompt must request:
  - sources
  - framework output
  - action plan
  - risk/assumption notes
- Keep outputs implementation-ready, not generic summaries.
