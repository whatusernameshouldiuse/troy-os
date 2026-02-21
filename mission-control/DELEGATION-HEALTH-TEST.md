# Delegation Health Test

Run before major delegation windows.

## Test A: Spawn sanity test
1. Spawn a tiny sub-agent task:
   - "Return: DELEGATION_TEST_OK"
2. Confirm completion signal arrives.

Pass criteria:
- Sub-agent starts
- Returns expected output
- No gateway/pairing errors

## Test B: Fallback test
1. Simulate failure path (or use known failure event)
2. Apply fallback policy:
   - retry once
   - then inline execute if urgent
3. Confirm log entry written.

Pass criteria:
- Failure handled without dead-end
- Fallback executed cleanly
- Ops log updated

## If failed
- Mark `delegation-degraded`
- Use inline execution for urgent tasks
- Queue infra fix before next heavy run
