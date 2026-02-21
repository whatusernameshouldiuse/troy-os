# Agent Ops Preflight (Daily, 2 minutes)

Run this at start of day and before major delegation.

## Checks
- [ ] Gateway connected and healthy (`openclaw status`)
- [ ] Sub-agent spawn test works (tiny no-op task)
- [ ] Messaging path works (current channel healthy)
- [ ] Vault/workspace read+write works
- [ ] Browser/tool stack reachable if needed

## If a check fails
1. Log failure in `mission-control/ops-log.md`
2. Retry once
3. Use fallback policy (`DELEGATION-FALLBACK-POLICY.md`)
4. Notify Troy only if blocking
