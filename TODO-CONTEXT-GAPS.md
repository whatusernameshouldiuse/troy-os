# Context Gaps - Task List

These tasks fill the gaps between "Claude knows your world" and "Claude knows your work."

---

## 1. Brand Voice Guidelines (Missing for BBGV & GunStreamer)

### Task 1.1: BBGV Brand Voice Document
**Priority:** High
**Time:** 30 min with Troy
**Output:** `/projects/bbgv/BRAND-VOICE.md`

**Questions to answer:**
- What does BBGV sound like? (Authoritative? Friendly? Expert?)
- What phrases/words do we use?
- What phrases/words do we NEVER use?
- What's the tone for different content types? (Newsletter vs landing page vs social)
- Example: "Write like [reference person/brand]"

**Template:**
```markdown
# BBGV Brand Voice

## Personality
[3-5 adjectives]

## We sound like...
[Reference examples]

## We say...
- [Phrase 1]
- [Phrase 2]

## We NEVER say...
- [Banned phrase 1]
- [Banned phrase 2]

## Tone by content type
| Type | Tone |
|------|------|
| Newsletter | |
| Blog | |
| Social | |
| Landing page | |
```

---

### Task 1.2: GunStreamer Brand Voice Document
**Priority:** High
**Time:** 30 min with Troy
**Output:** `/projects/gunstreamer/BRAND-VOICE.md`

**Same template as BBGV**

---

## 2. Marketing Playbooks (Missing for All)

### Task 2.1: Rentagun Marketing Playbook
**Priority:** High
**Time:** 1 hour with Troy
**Output:** `/projects/rentagun/MARKETING-PLAYBOOK.md`

**Sections to complete:**
```markdown
# Rentagun Marketing Playbook

## Content Calendar
| Day | Content Type | Platform | Topic Ideas |
|-----|--------------|----------|-------------|
| Mon | | | |
| Tue | | | |
| ... | | | |

## Email Sequences
| Sequence | Trigger | # Emails | Goal |
|----------|---------|----------|------|
| Welcome | Signup | | |
| Abandoned cart | Cart abandon | | |
| Post-rental | Rental complete | | |

## Social Strategy
| Platform | Frequency | Content Type | Voice Notes |
|----------|-----------|--------------|-------------|
| Instagram | | | |
| Twitter | | | |
| Facebook | | | |

## Campaign Templates
### New Inventory Announcement
[Template]

### Seasonal Promo
[Template]

### Partnership/Collab
[Template]

## Metrics to Track
| Metric | Current | Target | Tool |
|--------|---------|--------|------|
| | | | |
```

---

### Task 2.2: BBGV Marketing Playbook
**Priority:** Medium
**Time:** 1 hour with Troy
**Output:** `/projects/bbgv/MARKETING-PLAYBOOK.md`

**Same structure, BBGV-specific content**

---

### Task 2.3: GunStreamer Marketing Playbook
**Priority:** Medium
**Time:** 1 hour with Troy
**Output:** `/projects/gunstreamer/MARKETING-PLAYBOOK.md`

**Same structure, launch-focused**

---

## 3. Launch Checklists (Missing)

### Task 3.1: Product Launch Checklist (Generic)
**Priority:** Medium
**Time:** 30 min
**Output:** `/reference/sops/product-launch-checklist.md`

**Template:**
```markdown
# Product Launch Checklist

## T-30 Days
- [ ] Landing page copy drafted
- [ ] Email sequence drafted
- [ ] Social content calendar created
- [ ] Influencer/partner outreach started

## T-14 Days
- [ ] Landing page live
- [ ] Email sequence built in Klaviyo
- [ ] Social posts scheduled
- [ ] Press/PR outreach

## T-7 Days
- [ ] Final landing page review
- [ ] Test email sequence
- [ ] Teaser content going out

## Launch Day
- [ ] Emails sent
- [ ] Social posts live
- [ ] Monitor for issues
- [ ] Respond to comments/questions

## T+7 Days
- [ ] Performance review
- [ ] Follow-up emails
- [ ] Retargeting adjustments
```

---

### Task 3.2: GunStreamer Launch Checklist (Specific)
**Priority:** High
**Time:** 45 min with Troy
**Output:** `/projects/gunstreamer/LAUNCH-CHECKLIST.md`

**GunStreamer-specific launch tasks**

---

## 4. Weekly Content Requirements (Missing)

### Task 4.1: Content Production Schedule
**Priority:** High
**Time:** 30 min with Troy
**Output:** Add to CLAUDE.md `THIS WEEK` section

**Questions:**
- What content MUST ship every week?
- What's the production cadence?
- Who approves what?

**Draft:**
```markdown
## Weekly Content Requirements

| Business | Content | Deadline | Approval |
|----------|---------|----------|----------|
| BBGV | Newsletter | Thursday | Troy reviews Wed |
| BBGV | 1 blog post | Friday | Troy reviews Thu |
| Rentagun | 3 social posts | Ongoing | Auto-approve templates |
| GunStreamer | 2 Twitter threads | Ongoing | Troy reviews |
```

---

## 5. "What Helping Troy Looks Like" Examples (Missing)

### Task 5.1: Example Interactions Document
**Priority:** Medium
**Time:** 30 min
**Output:** `/reference/sops/helping-troy-examples.md`

**Document real examples of good help:**

```markdown
# What Helping Troy Looks Like

## Good: Content Creation
Troy: "I need a newsletter for BBGV"
Claude: "Got it. What's the hook this week - market news, interesting find, or inheritor tip?"
[Drafts in BBGV voice, shows Troy, sends after approval]

## Good: Bug Fix
Troy: "Checkout is broken"
Claude: "Let me check. [Runs health check] Found it - the payment gateway timeout. Fixed. Tested. Working now."

## Good: Campaign Build
Troy: "Build abandoned cart flow for Rentagun"
Claude: "Building in Klaviyo. 3 emails: reminder (1hr), urgency (24hr), last chance (72hr). Here's the copy for approval."

## Bad: Over-analysis
Troy: "I need a newsletter"
Claude: "Let me analyze your newsletter strategy, review past performance, consider audience segmentation..."
[Just write the newsletter]

## Bad: Waiting for Permission
Troy: "Fix the checkout"
Claude: "Should I look at the checkout? What specifically should I check?"
[Just fix it]
```

---

## Task Summary

| # | Task | Priority | Time | Output |
|---|------|----------|------|--------|
| 1.1 | BBGV Brand Voice | High | 30m | `/projects/bbgv/BRAND-VOICE.md` |
| 1.2 | GunStreamer Brand Voice | High | 30m | `/projects/gunstreamer/BRAND-VOICE.md` |
| 2.1 | Rentagun Marketing Playbook | High | 1h | `/projects/rentagun/MARKETING-PLAYBOOK.md` |
| 2.2 | BBGV Marketing Playbook | Medium | 1h | `/projects/bbgv/MARKETING-PLAYBOOK.md` |
| 2.3 | GunStreamer Marketing Playbook | Medium | 1h | `/projects/gunstreamer/MARKETING-PLAYBOOK.md` |
| 3.1 | Generic Launch Checklist | Medium | 30m | `/reference/sops/product-launch-checklist.md` |
| 3.2 | GunStreamer Launch Checklist | High | 45m | `/projects/gunstreamer/LAUNCH-CHECKLIST.md` |
| 4.1 | Weekly Content Schedule | High | 30m | Update CLAUDE.md |
| 5.1 | Helping Troy Examples | Medium | 30m | `/reference/sops/helping-troy-examples.md` |

**Total time estimate:** ~6 hours (can be done across multiple sessions)

---

## Recommended Order

**Session 1 (Today - 1.5h):**
1. ✅ Review GTM CLAUDE.md draft
2. Task 1.1: BBGV Brand Voice (30m)
3. Task 1.2: GunStreamer Brand Voice (30m)
4. Task 4.1: Weekly Content Schedule (30m)

**Session 2 (Tomorrow - 2h):**
1. Task 2.1: Rentagun Marketing Playbook (1h)
2. Task 3.2: GunStreamer Launch Checklist (45m)

**Session 3 (This week - 2h):**
1. Task 2.2: BBGV Marketing Playbook (1h)
2. Task 2.3: GunStreamer Marketing Playbook (1h)

**Session 4 (When needed - 1h):**
1. Task 3.1: Generic Launch Checklist (30m)
2. Task 5.1: Helping Troy Examples (30m)
