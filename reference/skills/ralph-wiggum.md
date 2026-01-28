# Ralph Wiggum (Autonomous Coding)

**What:** Technique for running Claude Code in autonomous loops until task completion.

---

## Workflow

1. `create-prd` → Generate PRD from user input
2. `generate-tasks` → Break PRD into parent tasks + subtasks
3. `process-task-list` → Execute one subtask at a time, wait for "y"

---

## Trigger Words

- "Ralph"
- "PRD"
- "autonomous coding"
- "ship while I sleep"

---

## Iteration Caps

| Scope | Iterations |
|-------|------------|
| Small fix | 10 |
| Single feature | 20-30 |
| Multiple features | 50 |
| Overnight run | 100-200 |

---

## Key Commands

| Command | Purpose |
|---------|---------|
| `/ralph-clarify` | Ask 40-70 clarifying questions, save to `.claude/clarify-session.md` |
| `/ralph-plan` | Create PROMPT.md and TODO.md from clarify session |
| `/ralph-loop` | Execute tasks from TODO.md one at a time |

---

## Full Documentation

See Obsidian: `Reference/ralph-wiggum-complete/SKILL.md`
