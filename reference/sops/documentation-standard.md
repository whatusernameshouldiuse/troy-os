# Documentation Standard - "Troy Doesn't Read Code"

**Critical Context:** Troy builds with AI but doesn't review actual code. Every coding project MUST have documentation so he can understand what exists, find things when they break, and extend systems later.

---

## SYSTEM-ARCHITECTURE.md (Required for All Code Projects)

Every project with code MUST have a `SYSTEM-ARCHITECTURE.md` in the project root. Claude MUST create/update this after every coding session.

### Template

```markdown
# System Architecture - [Project Name]

## Quick Reference
- **Main entry point**: `filename.py` or `src/index.js`
- **Config location**: Where settings live
- **Data flow**: Input → Processing → Output (one line)

## File Map
| File | Purpose | When to modify |
|------|---------|----------------|
| `file.py` | Does X | When you need to change X |

## Key Functions
| Function | What it does | Located in |
|----------|--------------|------------|
| `main()` | Entry point | `app.py:15` |

## Data Flow
1. Input comes from [source]
2. Processed by [function/module]
3. Output goes to [destination]

## When Things Break
| Symptom | Likely cause | File to check |
|---------|--------------|---------------|
| "Error X" | Usually means Y | `file.py:123` |

## External Dependencies
- **API**: What external services are called
- **Credentials**: Where secrets are stored (NOT the secrets themselves)
- **Database**: What data is persisted where

## Recent Changes
- [Date]: Added X feature
- [Date]: Fixed Y bug
```

---

## Plain English Summaries

After completing any coding task, Claude MUST provide a 1-2 sentence summary.

### Bad Examples
- "Implementation complete."
- [Technical details about the code]

### Good Examples
- "Added a function that checks if rental orders are overdue and sends reminder emails. Lives in `check_overdue.py`, runs every morning at 9am."
- "Fixed the bug where prices showed $0. The problem was in `calculate_price()` - it wasn't handling null values from the API."
