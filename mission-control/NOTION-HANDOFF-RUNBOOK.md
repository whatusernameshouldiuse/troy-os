# Notion Handoff Runbook

## Goal
Deliver assets into Notion reliably with fallback when direct integration is unavailable.

## Primary path (direct push)
1. Build deliverables
2. Push to target Notion folder/database
3. Verify pages/assets visible in destination
4. Log completion in ops log

## Fallback path (export bundle)
If direct push fails:
1. Create Notion-ready export folder under project:
   - `.../notion-export/`
2. Include:
   - `00-README-IMPORT.md`
   - campaign/ops docs
   - media prompts/copy packs
3. Provide exact import steps and destination path
4. Log direct-push failure + fallback completion

## Naming standard
- Prefix execution order:
  - `01-...`, `02-...`, `03-...`
- Keep file names plain and import-safe

## QA gate
- [ ] All required files present
- [ ] CTA/timing consistent across docs
- [ ] Import instructions tested/clear
