# Session-Start Prompts — Live-Event Ads (3 Parallel Builds)

> **Created:** 2026-05-28
> **Companion docs:** `docs/live-event-ads-playbook.md`, session log at `sessions/2026-05-28-claude-code-gunstreamer-live-event-ads-scale-architecture.md`
> **Differs from 2026-05-27 3-workstream prompts in Obsidian** — those were tactical/build-level for the existing dealer-application pipeline. These assume the live-event ads scale-architecture framing and build foundations for the 500-dealer end state.

Paste each prompt into a fresh Claude Code session. Each loads context from troy-os + Obsidian, then starts building. Run in parallel or sequentially per the order recommendation at the bottom.

---

## SESSION 1 — Build the Facebook Ads Scaling Architecture

```
Read these files first, in order:
1. ~/troy-os/projects/gunstreamer/PROJECT-CONTEXT.md
2. ~/troy-os/projects/gunstreamer/docs/live-event-ads-playbook.md
3. ~/troy-os/sessions/2026-05-28-claude-code-gunstreamer-live-event-ads-scale-architecture.md

Context: GunStreamer is launching a paid live-event ads program. GunStreamer pays 100% of ad spend, dealers do near-zero technical setup. We're starting with 1-3 pilot dealers but architecting for 500+. The full strategy + scale architecture is documented in live-event-ads-playbook.md.

Your job this session: Build the foundation that scales from dealer #1 to dealer #500 without architectural rewrite.

Deliverables I need by end of session:

1. SUPABASE SCHEMA — Create the schema for:
   - dealers (id, name, slug, city, state, address, phone, host_name, host_photo_url, event_day, event_time, giveaway, stream_url, fb_page_id, ad_account_id, pixel_id, bm_id, status, created_at)
   - events (id, dealer_id, scheduled_at, status, spend, leads, attendees, gmv, commission, day1_roas, day30_roas, day90_roas)
   - leads (id, dealer_id, event_id, name, phone, email, sms_opt_in, source, created_at)
   - ad_accounts (id, dealer_id, bm_id, platform, account_id_external, pixel_id, status)
   - business_managers (id, name, owner_personal_account, payment_card_id, dealer_count, health_status)
   - Provide the SQL migration files.

2. NEXT.JS LP APP — Scaffold the dealer LP engine at ~/Work/GunStreamer/live-event-lp/:
   - Next.js 14+ App Router on Vercel
   - Dynamic route /d/[slug] reads dealer data from Supabase
   - LP template per the playbook spec §6 (H1 = "[Dealer] Live", host photo, address+map, form with name/phone/email, no firearm content)
   - Pixel injection per dealer (dynamic Pixel ID from DB)
   - GA4 + CAPI server-side event firing
   - Use subdomain routing strategy: [slug].glive.com (or recommend a better domain after checking availability)

3. MULTI-BM OPERATIONS DOC — Write the SOP at ~/Work/GunStreamer/ops/multi-bm-rotation.md covering:
   - Which 3 BMs to set up first, who owns each personal account
   - Which dealers go in which BM (assignment logic)
   - Card-to-BM mapping (which Ramp/Brex card pays which BM)
   - Meta Verified Business application checklist
   - Ban-contagion containment SOP (what to do if a BM gets struck)
   - 48-hour migration playbook (move a dealer to a new BM if old one is banned)

4. DATA PIPELINE — Design (don't build yet) the BigQuery + Looker reporting flow:
   - Meta Marketing API → BigQuery (daily ETL)
   - Google Ads API → BigQuery
   - LP events (GA4) → BigQuery
   - Supabase → BigQuery (dealer + event + lead data)
   - Looker Studio dashboard schema (per-dealer ROAS, portfolio ROAS, cohort tables)
   - Just document the architecture + tools needed. Build comes later.

5. KLAVIYO FLOW SPEC — Single flow with dealer_id tag-based dynamic merge:
   - Trigger: lead added to list "Live Event Leads"
   - T+0: immediate confirmation (email + SMS)
   - T+9am day-of: email recap of what to expect
   - T-2h: SMS reminder
   - T-15m: SMS "going live now" with stream link
   - T+2d: post-event email "missed it? next event [date]"
   - Use {{ dealer_name }}, {{ event_time }}, {{ stream_url }}, {{ host_name }} merge tags

Constraints:
- Build for 500 dealers from dealer #1. No duct tape.
- Compliance rules from playbook §1 are non-negotiable (no firearm content anywhere in funnel)
- The LP must read as a generic local-business live event, not gunstreamer.com branded
- Use existing tools where possible: Vercel, Supabase, Next.js, Klaviyo

Confirm you've read all three context files, then start with deliverable #1 (Supabase schema). Ask clarifying questions only on items where I haven't given enough detail.
```

---

## SESSION 2 — Source Dealer Launch Kits to Print Vendors

```
Read these files first, in order:
1. ~/troy-os/projects/gunstreamer/PROJECT-CONTEXT.md
2. ~/Work/GunStreamer/launch-kit/KIT-SPEC-FINAL.md
3. ~/Work/GunStreamer/launch-kit/VENDOR-SOURCING.md
4. ~/Work/GunStreamer/launch-kit/PRODUCTION-PLAYBOOK.md

Context: We have a 9-piece $94 dealer welcoming-party kit designed (per 2026-05-27 reset — see PROJECT-CONTEXT changelog). L.I.V.E. method codified. Pilot dealer is Van's Outdoors in Cullman, AL. Vendor stack already partially identified: MOO, StickerMule, GotPrint, local embroiderer, 4imprint, Etsy, Displays2Go, Packlane, Crane & Co. Now I need to actually place orders and build the programmatic fulfillment pipeline that scales to 50 founding dealers and beyond.

Your job this session: Move the dealer kit from "designed" to "ordered, in production, ready to ship" — and document the workflow for scale.

Deliverables I need by end of session:

1. VENDOR ORDER STATUS — For each of the 9 kit SKUs, document:
   - Vendor selected (per VENDOR-SOURCING.md)
   - Order placed yes/no/blocked
   - If blocked: what's blocking (Van's deliverables, design files, payment auth)
   - Estimated turnaround time
   - Per-unit cost at v1 quantity (1 dealer) and v2 quantity (50 dealers)
   - Save updates back to ~/Work/GunStreamer/launch-kit/VENDOR-SOURCING.md

2. LONG-POLE ORDERS — Place these 4 orders this session if possible:
   - Packlane 50-unit box run (~$200) — design upload + checkout
   - Crane & Co 100-pack cards (~$50)
   - Displays2Go 10-pack A-frame stands (~$80)
   - Local embroiderer + digitizing (~$25) — find a local Cullman, AL or online embroiderer
   - Document confirmation #s and ship dates

3. VAN'S DELIVERABLES — What's still missing from Van's:
   - antler-V SVG
   - host photos
   - founding year
   - first event date
   - Draft the email to Van's requesting these (use existing gunstreamer-brand voice)
   - Save email draft to ~/Work/GunStreamer/launch-kit/vans-deliverables-request-email.md

4. PROGRAMMATIC FULFILLMENT WORKFLOW — Design the workflow from "dealer signs up in GHL" → "kit arrives at dealer's door":
   - Trigger: dealer reaches GHL pipeline stage "Dealer Kit Sent"
   - System reads dealer Brand Profile JSON
   - Generates per-dealer kit files via gunstreamer-dealer-kit skill (note: skill needs update from old 11-piece $200-300 spec to new 9-piece $94 spec — flag this)
   - Auto-uploads print files to vendor APIs (which vendors have APIs?)
   - Places orders with dealer's shipping address
   - Tracks shipment, updates GHL contact field
   - Sends dealer a "kit shipped" notification email with tracking
   - Save to ~/Work/GunStreamer/launch-kit/programmatic-fulfillment-spec.md

5. COST MODEL AT SCALE — Build a kit cost spreadsheet:
   - Per-piece cost from chosen vendors at 1, 10, 50, 200, 500 dealer quantities
   - Shipping per kit
   - Total per-dealer kit cost at each scale
   - Monthly burn at 10, 50, 200 dealers
   - Identify which pieces benefit most from volume pricing
   - Save to ~/Work/GunStreamer/launch-kit/cost-model.md

6. SKILL UPDATE TODO — The existing gunstreamer-dealer-kit skill at ~/.claude/skills/gunstreamer-dealer-kit/ has the OLD 11-piece $200-300 spec. It must be updated or archived. Write a SKILL-UPDATE-NEEDED.md note in the launch-kit folder describing what needs to change, who should do it, and when.

Constraints:
- 9-piece $94 kit per the 2026-05-27 reset — do NOT add pieces or revert to the 11-piece spec
- No firearms visible anywhere in kit (Meta-compliance baked in by design)
- Vendor must support API ordering for any piece that's ordered more than 10x/month — manual order entry doesn't scale past dealer #5 on high-volume SKUs
- Heritage aesthetic, forest olive primary palette
- Hats are NOT in the v1 kit — they're a milestone unlock (first-show-complete)

Confirm you've read all four context files, then start with deliverable #1 (vendor order status). Ask clarifying questions only where the existing docs don't tell you what you need to know.
```

---

## SESSION 3 — Wire GoHighLevel CRM to New Dealer Landing Pages

```
Read these files first, in order:
1. ~/troy-os/projects/gunstreamer/PROJECT-CONTEXT.md
2. ~/obsidian-vault/Projects/GunStreamer/GHL-Dealer-CRM-Setup-Playbook-2026-05-27.md
3. ~/obsidian-vault/Projects/GunStreamer/GHL-Workflow-Spec-Dealer-Form-Inbound-2026-05-28.md
4. ~/obsidian-vault/Claude-Shared-Brain/sessions/2026-05-28-claude-code-gunstreamer-dealer-form-cro.md
5. Current dealer LP source — look in ~/Work/GunStreamer/landing-pages/dealercontact.html

Context: GunStreamer's GHL subaccount is designed and Troy started Phase 1 of the build mid-session on 2026-05-27. The new dealer LP at gunstreamer.com/dealercontact (preview alias: gunstreamer-dealercontact-preview.vercel.app) was shipped with a 2-step form on 2026-05-28 — but the form submit is currently a STUB. The form-to-CRM architecture is locked: form onSubmit → Vercel API route /api/dealer-signup → GHL Inbound Webhook → Stage 1 Prospect. Pipeline is 6 stages: Prospect → Onboarding Zoom Scheduled → Dealer Kit Sent → Demo Scheduled → Streamed Once → Streaming Weekly.

Form fields locked: Step 1 = Shop Name, Email, Phone. Step 2 = FFL # (X-XX-XXX-XX-XX-XXXXX) / Shop Type dropdown / Pain Point textarea.

Your job this session: Make the wiring actually work end-to-end. Form submit creates GHL contact, fires Slack alert, triggers speed-to-lead automation.

Deliverables I need by end of session:

1. GHL BUILD STATUS — First, determine where Troy actually left off on 2026-05-27:
   - Check GHL subaccount via MCP tools if available
   - Look for evidence of: pipeline created, custom fields created, webhook URL, automation workflows
   - Document the actual state at ~/Work/GunStreamer/ghl-integration/build-status-2026-05-28.md
   - Identify what still needs to be built

2. GHL CONFIGURATION COMPLETION — Finish whatever's not done:
   - 6-stage pipeline: Prospect → Onboarding Zoom Scheduled → Dealer Kit Sent → Demo Scheduled → Streamed Once → Streaming Weekly
   - Custom fields: shop_name, ffl_number, shop_type, pain_point, source, utm_source, utm_medium, utm_campaign, utm_content, utm_term, application_step (1 or 2 — for partial vs complete)
   - Lead source tagging (UTM-based)
   - Save the GHL setup state at ~/Work/GunStreamer/ghl-integration/ghl-setup-final.md

3. VERCEL API ROUTE — Build the /api/dealer-signup route per the locked architecture:
   - POST endpoint accepting form data
   - Validates required fields
   - Forwards to GHL Inbound Webhook
   - Returns 200 on success, error on failure
   - Captures IP, user-agent, timestamp
   - Logs all submissions (CloudWatch or Vercel Logs)
   - Save to landing-pages source repo (find correct path)

4. FORM WIRING — Update the dealercontact LP form:
   - Step 1 onSubmit fires partial-lead webhook (application_step=1) — captures the contact BEFORE they finish Step 2 so we don't lose dropoffs
   - Step 2 onSubmit fires complete-lead webhook (application_step=2)
   - Same contact in GHL gets updated, NOT duplicated (match by email)
   - Deploy to Vercel preview, verify the public alias still works (per the 2026-05-28 CRO session — don't break the alias)

5. SPEED-TO-LEAD AUTOMATION — In GHL, build:
   - T+0: Slack alert to #dealer-applications with all form data
   - T+0: SMS to internal sales/onboarding team (NOTE: A2P 10DLC brand registration is an open thread — confirm entity is GunStreamer LLC or BBGV LLC before going live)
   - T+5 min: Auto-text to applicant ("Hey [name], saw your application. Got a quick question — what's your shop's current weekly turn?")
   - T+30 min: If no human reply, auto-email applicant with calendar booking link (use the Onboarding Zoom calendar)
   - T+24h: If no booking, follow-up email
   - T+72h: If still no booking, drop to nurture sequence
   - Document flows at ~/Work/GunStreamer/ghl-integration/speed-to-lead-flows.md

6. END-TO-END TEST:
   - Submit Step 1 only — verify partial contact in GHL with application_step=1, stage=Prospect
   - Submit Step 2 — verify same contact updated with full fields, application_step=2
   - Verify Slack alert fires
   - Verify SMS to internal team fires (or document blocker if A2P not registered)
   - Verify the 5-min auto-text fires (use a real phone number you control)

7. LIVE EVENT LEAD HANDOFF (SPEC ONLY, no build) — Plan the integration for the upcoming Live Event Ads program (see PROJECT-CONTEXT §11 + docs/live-event-ads-playbook.md):
   - Live event LPs will capture phone + email per dealer event
   - These leads should ALSO flow into GHL, tagged by dealer_id and event_id
   - DO NOT enter them into the dealer-application pipeline — they go to a separate "Live Event Leads" pipeline
   - Document at ~/Work/GunStreamer/ghl-integration/live-event-lead-pipeline-spec.md

Constraints:
- Dealer application leads are HIGH VALUE — speed-to-lead is critical (5-min response = 21x qualification rate)
- GHL is the source of truth for CRM data — don't duplicate to other CRMs
- Form must remain 2-step (don't regress the CRO work done 2026-05-28)
- The Vercel preview alias must continue to work after wiring
- Open thread: A2P 10DLC brand-registration entity (GunStreamer LLC vs BBGV LLC) — flag if blocking SMS automation

Confirm you've read all five context files, then start with deliverable #1 (GHL build status check). Ask clarifying questions only if GHL credentials aren't where you expect them or if the form source repo structure isn't clear.
```

---

## Order Recommendation

If running sequentially (not parallel):

1. **Session 3 (GHL wiring) FIRST** — blocks paid traffic on the dealer LP per PROJECT-CONTEXT §11 warning. Without this, the application form leaks leads.
2. **Session 2 (dealer kits) SECOND** — pilot dealer Van's can't ship without it. Also unblocks the dealer-onboarding flow that Session 3's GHL automation triggers.
3. **Session 1 (ad architecture) THIRD** — biggest build, but needs the GHL pipeline and kit fulfillment in place for the funnel to actually work end-to-end.

If running parallel: all three write to different file paths and don't depend on each other in-session. Just confirm the open threads (A2P 10DLC entity, Van's deliverables, subdomain choice) before any of the three reach a launch milestone.

---

*End of session-start prompts.*
