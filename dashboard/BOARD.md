---

kanban-plugin: board

---

## Inbox

> Raw capture only — never decide priority here. Triage every Friday.

- [ ] **[Rentagun]** Verify 5 Rare-On-The-Range SKUs in stock before publishing new membership LP (Marlin 336 JM, Win 94, Norinco SKS, S&W 39-2, Ruger Speed Six .357) <!-- captured 2026-05-14 -->
- [ ] **[BBGV]** SmartLead cold email — Task 1: last30days research on SmartLead playbook (domain/inbox warming ramp + sending thresholds, lead import/hygiene, what's working/flagged 2026). Output: execution playbook doc. START HERE <!-- captured 2026-06-17 -->
- [ ] **[BBGV]** SmartLead cold email — Task 2: buy dedicated cold sending domain (NOT primary), set up SPF/DKIM/DMARC, provision mailboxes, start SmartLead warming (~2-3wk background). Output: live warming domain, DNS verified <!-- captured 2026-06-17 -->
- [ ] **[BBGV]** SmartLead cold email — Task 3: extract ALL BBGV leads (confirm universe + source: Laravel vs Klaviyo), de-dupe, verify emails, reconcile vs Klaviyo suppressions, segment, format SmartLead CSV. Output: clean verified import <!-- captured 2026-06-17 -->
- [ ] **[BBGV]** SmartLead cold email — Task 4: lock the OFFER (w/ Troy), then build sequence + follow-ups + subject variants via cold-email-campaign-builder. MUST route through bbgv-email-gate before send. CAN-SPAM: physical address + unsubscribe <!-- captured 2026-06-17 -->
- [ ] **[BBGV]** SmartLead cold email — Task 5: launch + monitor — sequence config, daily limits matched to warming state, deliverability monitoring (bounce/spam/reply), money-path check that a real reply/lead lands <!-- captured 2026-06-17 -->
- [ ] **[Ops]** Continue/finish the session report — drop the Twitter writes (no longer needed), keep to no-permission-required actions only <!-- captured 2026-06-19 -->
- [ ] **[Marketing]** Mine Twitter bookmarks archive to optimize AI setup — when X archive .zip lands, parse bookmarks.js, triage AI/tooling-relevant, map vs troy-os skills/agents/CLAUDE.md/memory, deliver prioritized backlog (build new / optimize existing / experiment). Analysis+backlog first, approve before building. Waiting on Troy to request + download archive (~24h) <!-- captured 2026-06-19 -->

## Now

> WIP LIMIT: 3. Close loops before starting anything below.

- [ ] **[BBGV]** Complete Wn6Uau paste workflow: AV1 full HTML replace + AV2 + AV3 + 3 subject lines, "Update Live Version" per message — then RE-OPEN each message and confirm it shows the updated live version (verify the artifact, not the click) #P0 @2026-06-14 (STALE)

## Next

> WIP LIMIT: 5. Pulled into Now only after a Now loop closes.

- [ ] **[BBGV]** bbgv-content-agent producing on schedule (Pillar 1 of GTM machine) — turn on once the email machine ships #P1
- [ ] **[Rentagun]** Publish the 3 ready blog posts (~10,450 words, written, in ~/Work/Rentagun/docs/content/) — needs images + dev push #P0
- [ ] **[Rentagun]** Stop the bleed: 527 dead-end membership clicks/60d — redirect dead CTAs to the rental funnel (per rental-first pivot, NOT rebuild membership) #P0
- [ ] **[GunStreamer]** Answer the 10 FFL pre-launch decisions in ffl-acquisition-launch-playbook.md Section 0.1 — ~30 min of your decisions unblocks a fully-built 46k-lead engine #P0
- [ ] **[Rentagun]** Pocket Carry Sampler — hand Adam/Matt the dev handoff (select-3 configurator + no-strikethrough checkout); doc ready: pricing-update-2026-05/HANDOFF-pocket-carry-DEV-2026-06-17.md. Money path: sampler can't sell until wired #P1

## Later

> Ranked, not committed. Re-rank every Friday.

### Money bleeders (track, don't ignore)
- [ ] **[Dutch]** Verify whether live customer site is actually losing leads — point leadwatch at the CUSTOMER URL (dutchdumpsters.com / GHL), not the Vercel deploy alias. Confirm before claiming RED. #P0
- [ ] **[Dutch]** Decision still OPEN: cut over Astro rebuild vs keep GoHighLevel. Don't cut over without deciding. #P1

### Rentagun
- [ ] **[Rentagun]** Per-gun daily-rate pricing model (David/Dad) — import+handoff built, dev not started #P1
- [ ] **[Rentagun]** Email capture wires — install Klaviyo JS + GA4 + PostHog on rentagun.com (currently dead code) #P1
- [ ] **[Rentagun]** Catalog pricing sweep — find ALL products with block_cost==0 or min_duration!=7 (off-model pricing); caught one $0/day bug in sampler #P2
- [ ] **[Rentagun]** Publish go/no-go queue (Troy's call): Glock 48 #9768 · CZ P-10 F .45 #9713 (confirm $599 MSRP) · update sampler mockup $87.99→$83.79 #P2
- [ ] **[Rentagun]** Monitor Hermes order notifier — check ~/rentagun-scripts/logs/slack-notify.log, verify orders, watch wcboc_ misfires #orders #P2
- [ ] **[Rentagun]** Decision Engine (200+ SEO comparison pages) — designed not built #P3
- [ ] **[Rentagun]** Inventory Hub plugin — 8-phase plan, not started #P3

### GunStreamer
- [ ] **[GunStreamer]** Gleam giveaway pending: legal brackets/attorney + dealer banners/QR/PDFs — ONE legal pass on master rules clears all 11 comps incl OmegaGear (decide sponsor entity: GunStreamer LLC vs OmegaGear) #P2
- [ ] **[GunStreamer]** SMS Privacy Policy no-sell clause — STILL OPEN #P2
- [ ] **[GunStreamer]** OmegaGear giveaway: embed Gleam widget XozvM on omegagear.com + decide start date (open now vs keep Jul 1) #P2
- [ ] **[GunStreamer]** Reddit account reality (which accounts, karma/age + no auto-post creds) → locks owned-post cadence + safe-sub matrix. Blocker for the owned-post engine #P2
- [ ] **[GunStreamer]** Extract dealer-schedule from home-dir tree to its own repo + commit (currently uncommitted — home-dir git risk); live at dealer-schedule.vercel.app #P2
- [ ] **[GunStreamer]** journalist-fit-check the 3 debanking bylines before sending the reactive pitch (carried from 06-11, still a send gate) #P2
- [ ] **[GunStreamer]** Dealer Kit pilot (Van's 3-piece) — designs locked, not yet ordered #P3
- [ ] **[GunStreamer]** Draft GS owned posts #3-6 (FFL-to-buy walkthrough, buyer's-premium decoder, anti-scam, NFA dealer-ghosting) — backlog in OWNED-POST-PLAN.md #P3

### SEO clients
- [ ] **[Boaz]** GBP relocation chain: get GBP dashboard details → Places API key (gbp-connector) → pre-stage 407 Conway signage/trucks → ONE clean address-only edit per SOP. Phone already fixed (205) 363-0340 #P1
- [ ] **[Boaz]** QA + Vercel deploy (tasks 1-10 done) #P2
- [ ] **[SEO]** Portfolio-wide audit: every client's schema review count vs LIVE Google count — handoff/scraped counts are systematically inflated (Boaz 160→131, Hallmark "1,653") #P2
- [ ] **[ND Brick]** Phase 2 (Phase 1 complete) #P3
- [ ] **[SEO]** Weekly KW research cron for 6 sites — resume from ~/Work/SEO-Clients/kw-research-plan.md #P3

### Ops
- [ ] **[Ops]** Backfill BBGV + GunStreamer troy-os folders (PROJECT-SETTINGS + BRAND-VOICE + MARKETING-PLAYBOOK) #P3


## Blocked

> Waiting on a dependency, a Troy decision, or spend approval.

- [ ] **[BBGV]** Klaviyo Bug 1 GATE — confirm Benjamin received the bugs handoff doc AND has "paid subscribers locked out of email marketing" in progress. Machine can't run if paid subs can't receive. Ping him today, get an ETA. — _blocked on dependency / decision_ #P0 @2026-06-14
- [ ] **[BBGV]** Send next Signal issue on cadence (Tue/Thu/Sat). MANDATORY: run the fact-check gate in a separate conversation BEFORE send. After send, VERIFY it landed via get_events + an inbox check. — _blocked on dependency / decision_ #P0 @2026-06-14
- [ ] **[Rentagun]** Bot protection — blocked on 4 dev questions to Adam/Matt — _blocked on 4 dev questions to adam/matt_ #P2
- [ ] **[Rentagun]** CZ OEM Partner Program — sales sheet, SKU list, MOU template, /cz wireframe, partner_code tracking. Verbal agreement only. Is this still active? — _blocked on dependency / decision_ #P2
- [ ] **[GunStreamer]** FFL outbound launch — blocked on Troy: domains + ~$100 search quota + 3 dream FFLs — _blocked on troy: domains + ~$100 search quota + 3 dream ffls_ #P1

## Needs Fix

> Bugs where something returned success but the side-effect never happened. Verify the artifact.

- [ ] **[Dutch]** Dutch Dumpsters forms = LIVE lead loss: book.astro:68 + contact.astro:101 POST to Formspree, no res.ok check, both IDs 404 #P0 #bug #side-effect <!-- captured 2026-06-15 -->
- [ ] **[BBGV]** BBGV batch_manager.py:160-166 — Klaviyo bulk-subscribe 202 counted as success, rejected profiles permanently skipped #P1 #bug #side-effect <!-- captured 2026-06-15 -->
- [ ] **[BBGV]** BBGV subscribe_remaining.py:71-73 — same 202-as-success bug #P1 #bug #side-effect <!-- captured 2026-06-15 -->
- [ ] **[GunStreamer]** GunStreamer forum_poster.py:888-899 — reply path logs false success #P2 #bug #side-effect <!-- captured 2026-06-15 -->
- [ ] **[GunStreamer]** GunStreamer sync_to_sheet.py:119-122 — no updatedRows check; clear-then-noop empties tab silently #P2 #bug #side-effect <!-- captured 2026-06-15 -->
- [ ] **[BBGV]** BBGV daily_reoon.sh:16-19 + daily_reoon_cleaner.py:185-195 — exit-0/gog success trusted without $?/updatedRows #P2 #bug #side-effect <!-- captured 2026-06-15 -->

## Done

> Friday review moves these to ARCHIVE.md.


%% kanban:settings
```
{"kanban-plugin":"board","lane-width":272,"show-checkboxes":true,"new-line-trigger":"shift-enter","show-relative-date":true,"date-format":"YYYY-MM-DD","date-display-format":"MMM D","hide-date-display":false,"date-trigger":"@","hide-date-in-title":true,"show-add-list":true,"show-archive-all":true,"show-board-settings":true,"show-search":true,"show-set-view":true,"hide-tags-in-title":false,"table-sizing":{}}
```
%%
