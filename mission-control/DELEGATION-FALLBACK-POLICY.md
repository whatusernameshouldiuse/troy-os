# Delegation Fallback Policy

If sub-agent delegation fails:
1. Capture the exact error in `mission-control/ops-log.md`
2. Retry once (fresh run)
3. If still failing, execute inline for urgent work
4. Mark task as `delegation-degraded`
5. Request/prompt infrastructure fix when blocking persists

## Completion signaling
- For long tasks, require completion event/message.
- If no completion signal, do one status poll, then fallback.
