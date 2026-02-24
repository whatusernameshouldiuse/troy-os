# INTERESTS.md - operator

## Current Interests
- Keeping subagent fallback clean when pairing degrades (direct execution as reliable backup)
- Tracking subscription attribution for Rentagun before paid spend scales

## New Curiosities
- What's the right heartbeat gate for verifying overnight subagent/direct-execution outputs? (file count + path check)
- Can we add an automatic preflight probe that detects `pairing required` before delegation attempts fire?
- Should Slack become the default multi-project ops surface with per-project channel runbooks?
- Can we keep Slack channel reach while moving from `groupPolicy=open` to a safer channel allowlist + mention gate?

## Signals I'm Watching
- Direct in-session execution produced 9 verified Obsidian files tonight. When subagent pairing is down, this is the reliable path.
- DataForSEO + gateway wrapper is live and loading creds correctly — API layer is ready for content research workflows.
- 7:41 AM preflight: sub-agent spawn check failed twice with `gateway closed (1008): pairing required`; delegation fallback remains required this morning.
- 10:19 AM preflight: Slack channel now connected and healthy in OpenClaw (`Slack ON · OK`), enabling team-native execution routing.
- 11:31 AM preflight: fixed invalid config regression (removed unsupported Slack keys), restarted gateway, restored WhatsApp+Slack channel health.

## Doctrine Focus
- Filesystem verification before completion reports. Always.
- Rentagun subscription tracking decision is blocking paid acquisition scaling — flag until resolved.

## Last Updated
- 2026-02-24
