# Coding Standards

## Languages

| Language | Use Case |
|----------|----------|
| PHP/Laravel | BBGV backend |
| WordPress/PHP | Rentagun |
| Python | SEO automation scripts, data processing |
| JavaScript/React | Frontend, n8n functions |
| Next.js (Vercel) | Local SEO sites, new projects |

---

## Next.js Defaults

Always include in `next.config.js`:

```js
experimental: {
  reactCompiler: true,  // Auto-optimization, no manual memoization needed
}
```

---

## Git Workflow

- Feature branches for all work
- Descriptive commit messages
- Test before merge
- Document changes in README or relevant docs

---

## Code Style

- Clear variable names
- Comments on complex logic only
- Error handling at boundaries
- Validate external inputs

---

## File Naming

- Lowercase with hyphens: `my-component.tsx`
- Descriptive names: `user-authentication.ts` not `auth.ts`
- Match file to primary export

---

## Commit Messages

Format:
```
[type]: Short description

Longer explanation if needed.
```

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `refactor:` Code improvement
- `test:` Tests
- `chore:` Maintenance
