# BBGV 150K+ Cold-Pool Re-Engagement Roadmap

> **Goal:** Recover 5–15% of the ~150,000 historical/suppressed profiles that were purged or auto-suppressed during the deliverability recovery.
>
> **Why this is a separate plan from the in-Klaviyo Re-Engagement Flow:** profiles in this pool either can't receive email from Klaviyo (suppressed), have damaged reputation if re-emailed without permission, or aren't currently in Klaviyo at all. The recovery channels are off-email until we earn permission to email again.

---

## The math

| Pool | Status | Estimated count | Channel |
|---|---|---:|---|
| In-Klaviyo, [SUNSET] 60-Day Inactive | Active, can email cautiously | 18,188 | Re-Engagement Flow + waves (covered in main flows roadmap) |
| In-Klaviyo, [SUNSET] Never Engaged | Active, fragile | 13,678 | Never Engaged Winback (covered in main flows roadmap) |
| **In-Klaviyo, manually suppressed during recovery purge** | Suppressed — can't email | **~120,000** | Off-Klaviyo recovery (this doc) |
| **In-Klaviyo, auto-suppressed (bounced)** | Suppressed — bad addresses | **~25,000** | Mostly write-off; small subset may be recoverable via address validation |
| Historical email lists outside Klaviyo (if any) | Unknown | TBD | Address validation → re-import → fresh opt-in |
| **Total cold pool target** | | **~150,000** | This doc |

**Confirmation needed from Troy:** the 150K number — is that (a) suppressed in Klaviyo, (b) data sitting outside Klaviyo, or (c) both? The plan below assumes "both," with the bulk in Klaviyo suppression.

---

## Why you cannot just email them

Email regulators and inbox providers track "consent decay." The recovery purge happened because BBGV had been emailing addresses that hadn't engaged in months — Gmail/Outlook/Apple flagged this as low-trust sending and tanked deliverability. Sending to those same addresses again from the same domain would:
- **Reset the recovery you've spent months earning.** 67% open rate today proves the engaged audience is healthy. One bad blast undoes that.
- **Trigger spam complaints at scale.** Old addresses → people don't recognize the sender → mark as spam.
- **Create CAN-SPAM / CASL / GDPR exposure.** If consent is stale (>24 months in some jurisdictions), you need fresh opt-in.

**The recovery has to come through other channels first.** Email comes back only after permission is freshly granted.

---

## The 4-channel re-engagement system

### Channel 1 — Meta Custom Audience ad campaign (highest leverage)

**Mechanism:** Upload the email list to Meta as a Custom Audience. Meta hashes the email and matches against Facebook/Instagram users. Ads serve only to people whose emails are in the list. They click to a re-opt-in landing page.

**Why this works:**
- No email sent. Zero deliverability risk.
- Meta typically matches 40–70% of an email list to active accounts.
- People recognize the brand visually before being asked to opt-in.

**Steps:**
1. Export the suppressed-profile email list from Klaviyo (CSV with hashed or raw emails).
2. Upload to Meta Ads Manager → Custom Audience → "Customer file."
3. Create a campaign with objective "Lead Generation" or "Conversions."
4. Creative: Blue Book of Gun Values brand recognition + value proposition + clear CTA "Get free gun value updates."
5. Budget: $50/day for 14 days = $700 to test. Scale to $200/day if CPL is acceptable.
6. Land on the dedicated re-opt-in page (Channel 5).
7. Each opt-in fires a "Welcome Back" Klaviyo flow (different from new-subscriber Welcome).

**BBGV requirements:**
- Meta ad budget approval ($700 test, scale TBD)
- Brand creative (image of book cover + value chart + signal example)
- Landing page (Channel 5)
- Pixel installed on bluebookofgunvalues.com (likely already in place — verify)

**Expected outcome:** 2,000–6,000 fresh opt-ins from the 120K suppressed pool. Cost-per-opt-in target: $0.50–$2.00.

---

### Channel 2 — Google Customer Match + retargeting

**Mechanism:** Same idea as Meta Custom Audience, but in Google Ads. Upload email list, target search + YouTube ads to those exact people.

**Why this works:**
- Captures intent — when they search "blue book gun values" or related queries, you show up.
- YouTube ads catch the audience in passive browsing.
- Combines with Meta for cross-platform reach.

**Steps:**
1. Same email list export → upload to Google Ads → Customer Match audience.
2. Create Search campaign (high-intent keywords) and YouTube In-Stream campaign (brand recall).
3. Budget: $50/day for 14 days = $700 test.
4. Same re-opt-in landing page (Channel 5).

**BBGV requirements:**
- Google Ads budget approval
- Google Ads account in good standing (verify)
- Tracking conversion = re-opt-in form submit

**Expected outcome:** 1,000–3,000 fresh opt-ins. Lower volume than Meta but higher intent.

---

### Channel 3 — Direct mail postcard

**Mechanism:** Physical postcard to subscribers whose mailing address is on file (paid subscribers historically had to provide one for billing). QR code on postcard → re-opt-in page.

**Why this works:**
- Paid subscribers gave you postal addresses — that consent extends further than email.
- Physical mail has 80%+ open rate and high recall.
- Differentiates from any digital noise.
- Particularly effective for the older firearms buyer demographic.

**Steps:**
1. Export Klaviyo profiles where mailing address is set.
2. Filter to suppressed-only (not currently emailing).
3. Send via Lob API or direct print vendor (Postable, Modern Postcard).
4. Postcard design: front = Blue Book branding + "We've been improving the values database. Want updates?" Back = QR code to landing page + 800 number for non-digital types.
5. Budget: $0.55–$0.85 per piece. 5,000 pieces = $2,750–$4,250 test.

**BBGV requirements:**
- Direct mail budget approval
- Postal address coverage in Klaviyo (audit needed — what % of the 150K have addresses?)
- Print vendor decision (Lob is API-driven and fast; Modern Postcard is cheaper at scale)
- Front-of-postcard creative (1 day design work)

**Expected outcome:** Highest ROI per touch. 5–10% scan/call rate on the QR/phone number = 250–500 opt-ins on a 5K test.

---

### Channel 4 — Onsite re-opt-in for known visitors

**Mechanism:** When someone visits bluebookofgunvalues.com and is identified (cookie match, browser fingerprint, or login), prompt them to re-subscribe via popup or banner.

**Why this works:**
- They came back to the site themselves — that's an interest signal.
- Catches recovery without external ad spend.
- Already-warm traffic; conversion is higher than cold.

**Steps:**
1. Install a cookie-match tag on bluebookofgunvalues.com (Klaviyo Web Tracking does this if web tracking is enabled).
2. Build a Klaviyo signup form that fires only when:
   - Visitor's email cookie matches a suppressed profile, OR
   - They click a "We miss you" banner you ship sitewide.
3. Form copy: "Welcome back. Want our weekly gun value updates again?"
4. On submit: unsuppress profile + add to Welcome Back flow.

**BBGV requirements:**
- Klaviyo Web Tracking enabled on bluebookofgunvalues.com (check)
- 1–2 hours of dev time to ship the cookie-match logic + popup/banner
- Decision on whether to show the banner site-wide or only on lookup result pages

**Expected outcome:** 200–800 opt-ins/month at zero ad cost. Compounds over time.

---

### Channel 5 — The re-opt-in landing page (foundation for Channels 1–4)

**This is the single most important asset.** All 4 channels above land here.

**Page structure:**
1. **Hero** — "We've improved the database. Welcome back to Blue Book."
2. **Value teaser** — 3 popular guns + their current Blue Book values (live from your data). Proof the data is fresh.
3. **One-field form** — email only. Don't ask for more on first opt-in.
4. **Submit triggers Welcome Back flow + UTM-tagged source attribution.**
5. **Below-fold:** social proof, "What you'll get," frequency expectation ("3 emails per week, value-focused").

**URL structure:**
- `bluebookofgunvalues.com/welcome-back?utm_source={meta|google|directmail|onsite}&utm_campaign=reengagement2026q2`
- UTMs let you measure which channel is driving the most opt-ins.

**Welcome Back flow (3 emails — distinct from new-subscriber Welcome):**
1. **Day 0 — "Welcome back. Here's the latest values change."** Shows them what they missed.
2. **Day 4 — "What's different now."** Recovery-era improvements: new data sources, faster updates, etc.
3. **Day 10 — "Your first lookup is on us"** (if applicable) or "Catch up on this month's market shifts."

After Day 10, they merge into the standard engaged-subscriber flow.

**BBGV requirements:**
- Landing page build on bluebookofgunvalues.com (or fast-launch on a subdomain like welcome.bluebookofgunvalues.com)
- Backend: form submit → unsuppress profile in Klaviyo + trigger Welcome Back flow
- Live values data feed for the page (3 popular guns with current values)

---

## Phase plan

### Phase 1 — Foundation (Week 1, May 4–11)

- [ ] Confirm 150K number with Troy (which pools)
- [ ] Export suppressed-profile email list from Klaviyo
- [ ] Audit postal address coverage (% with addresses)
- [ ] Build re-opt-in landing page (Channel 5) — 2 days dev work
- [ ] Build Welcome Back flow (3 emails) in Klaviyo
- [ ] Create Meta Custom Audience + creative (Channel 1) — does NOT spend yet
- [ ] Create Google Customer Match audience (Channel 2) — does NOT spend yet
- [ ] Decide direct-mail vendor and design postcard (Channel 3)

### Phase 2 — Test (Week 2, May 11–18)

- [ ] Launch Channel 1 (Meta) at $50/day for 14 days = $700 spend
- [ ] Launch Channel 2 (Google) at $50/day for 14 days = $700 spend
- [ ] Print + mail 5,000 postcards (Channel 3) = ~$3,000 spend
- [ ] Ship onsite cookie-match popup (Channel 4) — zero spend
- [ ] Track opt-ins by channel via UTM-tagged landing page
- [ ] Total Phase 2 spend: ~$4,400

### Phase 3 — Measure & Scale (Week 3–4, May 18–31)

- [ ] Daily report on opt-ins per channel + cost-per-opt-in
- [ ] Kill any channel below $5 cost-per-opt-in target
- [ ] Scale winning channel to $200–500/day
- [ ] Roll out direct mail to next batch (10K–25K depending on first-batch response)
- [ ] Begin SMS and direct-mail-only customers in subsequent waves

### Phase 4 — Sustain (Month 2+)

- [ ] Reduce Meta/Google spend to maintenance levels ($25–50/day) once core re-engagement is captured
- [ ] Onsite popup runs forever — captures ongoing re-engagement at zero marginal cost
- [ ] Direct mail becomes a quarterly campaign (not perpetual)
- [ ] Migrate re-engaged profiles to standard flow universe (post-purchase, monthly recap, etc.)

---

## Targets

| Phase | Metric | Target |
|---|---|---|
| Test (Phase 2) | Opt-ins | 1,000–2,000 across all 4 channels |
| Test (Phase 2) | Cost per opt-in | <$5 (digital), <$10 (direct mail) |
| Test (Phase 2) | Re-opt-in form bounce rate | <30% |
| Sustain (Phase 4) | Cumulative opt-ins from 150K pool | 7,500–22,500 (5–15% reactivation) |
| Sustain (Phase 4) | Welcome Back flow open rate | >50% |
| Sustain (Phase 4) | Lifetime conversion to paid | 3–8% |

If we hit even the low end (5% reactivation = 7,500 profiles), and 5% of those become paid subscribers ($10/mo each), that's **$3,750/month new MRR = $45K/year recurring**. Direct mail alone could pay for itself in 60 days.

---

## What BBGV needs to provide for this plan

| # | Item | Critical? | Owner |
|---|---|---|---|
| 1 | Confirm what the 150K consists of (suppressed in Klaviyo, external lists, both) | Critical | Troy |
| 2 | Klaviyo CSV export of suppressed profiles | Critical | Troy / Claude (via API) |
| 3 | Re-opt-in landing page on bluebookofgunvalues.com | Critical | BBGV dev |
| 4 | Live values data feed for the landing page (3 popular guns) | Critical | BBGV dev |
| 5 | Form-submit → unsuppress + trigger Welcome Back flow (Zapier or custom) | Critical | BBGV dev |
| 6 | Meta Ads budget approval ($700 test, then up to $200/day scale) | Critical | Troy |
| 7 | Google Ads budget approval ($700 test) | Critical | Troy |
| 8 | Direct mail budget approval ($3K test, then 10K–25K rollout) | Critical | Troy |
| 9 | Postcard creative design (Blue Book branding + QR code + 800 number) | Important | Claude (draft) → Troy (review) |
| 10 | Postal address audit on existing Klaviyo profiles | Important | Troy / Claude (via API) |
| 11 | Print vendor decision (Lob vs Modern Postcard vs other) | Important | Troy |
| 12 | Klaviyo Web Tracking enabled on bluebookofgunvalues.com | Important | BBGV dev |
| 13 | Cookie-match popup logic on site (Channel 4) | Important | BBGV dev |
| 14 | 800 number setup if you want phone-based opt-in | Optional | Troy |

---

## Risks and how we manage them

1. **Suppressed profiles re-opted-in via landing page must be unsuppressed before the Welcome Back flow can email them.** Klaviyo profiles in "Suppressed" status block all sends. Form submission from the landing page must call the Klaviyo API to unsuppress before triggering the flow. Verify this in build.

2. **Some of the 150K may have actively unsubscribed** (not just been auto-suppressed). Re-engaging them requires fresh affirmative consent — that's exactly what the landing page form does. Honor unsubscribes from Welcome Back the same as any other email.

3. **Direct-mail consent is broader than email consent in most jurisdictions** — address opt-out is rare and hard to track. But still, include "Don't want to hear from us by mail? text STOP to 800-XXX-XXXX or visit bluebookofgunvalues.com/optout-mail" on every postcard.

4. **Hash the email list before uploading to Meta/Google.** Both platforms accept hashed (SHA-256) emails. Klaviyo can export hashed if needed. Lower data-exposure risk.

5. **GDPR/CCPA:** for any profile with EU/California ZIP code, get explicit opt-in. Default re-opt-in via paid ads is borderline — landing page form is fine; auto-resubscribing without form action is not.

6. **Brand confusion:** if it's been 12+ months since last contact, recipients may not recognize the brand. Lead with the Blue Book of Gun Values name + book imagery in all creative.

---

*Last updated: 2026-05-01. Companion: `BBGV-FLOWS-ROADMAP.md`.*
