# CLAUDE.md - Troy's Operating System

> **Source of Truth:** https://github.com/whatusernameshouldiuse/troy-os

---

## WHO I AM

**Troy VanMaanen** - GTM Engineer & Marketer

I don't write code. I direct AI to build things. My job is getting products to market, creating content, running campaigns, and eliminating customer friction.

**How I work:**
- 4-6 hours/day, every day, heads-down
- AI is my execution layer - you build, I direct
- I care about what ships, not how it's built
- Revenue and quality over speed

**Contact:** vanmaanenoa@gmail.com | GitHub: whatusernameshouldiuse

---

## THIS WEEK

> **Updated:** 2026-01-28

| Priority | Business | Focus | Status |
|----------|----------|-------|--------|
| 🔴 1 | **Rentagun** | Post-SHOT Show cleanup, fix customer friction | Active |
| 🟡 2 | **BBGV** | Newsletter (weekly), blog pipeline | Recurring |
| 🟡 3 | **GunStreamer** | Marketing content for launch | Background |
| 🟢 4 | **Local SEO** | Client maintenance | Stable |

**This week I need help with:**
- [ ] Rentagun checkout flow audit
- [ ] BBGV newsletter draft
- [ ] GunStreamer Twitter thread drafts

**Blocked on:**
- Rentagun state unknown - need health check before prioritizing fixes

---

## MY BUSINESSES

### Rentagun
**What:** Try-before-you-buy firearm rental | **Site:** rentagun.com

**ICP:** The Considerer (unsure which gun to buy), Experience Seeker (bucket list), Hunter (one-trip rifle), New Gun Owner (overwhelmed)

**Voice:**
- Straight-shooter, honest, no BS
- "Try before you buy"
- "Stop researching, start shooting"
- "Rent it Saturday, decide Sunday"
- **BANNED:** "Netflix of guns", political statements, gun bro energy

**Current state:** Live, post-SHOT Show. Fixing bugs and friction.

**What "help" looks like:**
- Fix checkout/booking issues
- Write product descriptions
- Create email sequences (Klaviyo)
- Draft social content
- Build n8n automations for order flow

---

### BBGV (Blue Book of Gun Values)
**What:** Firearm valuation authority ("Kelley Blue Book for guns") | **Site:** bluebookofgunvalues.com

**ICP:** Inheritors ("grandpa's guns"), Collectors, FFLs, Insurance/Appraisers

**Voice:**
- Authoritative but accessible
- Educational, not salesy
- "Know what you have before you sell"
- Expert friend, not stuffy institution
- Data-driven, market-aware

**Current state:** Transitioning to freemium. 180K email list is the launch asset.

**What "help" looks like:**
- Write weekly newsletter (market intel, interesting finds)
- Create inheritor journey content
- Draft InstaCash offer landing pages
- Build Klaviyo flows for lead nurturing

---

### GunStreamer
**What:** Live commerce for firearms ("Whatnot for guns") | **Site:** gunstreamer.com

**ICP:** FFLs who want to sell inventory live, Buyers who want to see before they buy

**Voice:**
- Trust-focused ("See it cycle before you buy")
- Anti-scam positioning
- FFL-friendly, professional
- Exciting but not hype-y
- "Watch it. Ask questions. Then decide."

**Current state:** Pre-launch. Marketing content phase.

**What "help" looks like:**
- Write Twitter launch threads
- Create FFL onboarding content
- Draft buyer landing page copy
- Build trust content (scam stories, verification value)

---

### Local SEO (Client Work)
**What:** SEO for "boring" businesses | **Clients:** Dutch Dumpsters, Boaz Septic, ND Brick Pavers

**Voice:** Matches each client's brand - professional, local, service-focused

**Current state:** Maintenance mode

**What "help" looks like:**
- Generate location pages (City × Service matrix)
- Research city profiles (Cursor Deep Research)
- Quality check content (50%+ unique, real neighborhoods)

---

## WHAT I NEED DONE

### Content Creation
| Type | Frequency | Business | Notes |
|------|-----------|----------|-------|
| Newsletter | Weekly | BBGV | Market intel, interesting finds, inheritor tips |
| Blog posts | 1-2/week | BBGV | Inheritor journey, valuation guides |
| Product descriptions | As needed | Rentagun | For new inventory |
| Social posts | Daily | All | Platform-specific, brand voice |
| Email sequences | As needed | Rentagun, BBGV | Klaviyo flows |

**When creating content:**
1. Confirm which business/brand
2. Load that brand's voice guidelines
3. Draft in brand voice
4. Show Troy for approval before publishing

---

### Marketing Campaigns
| Campaign Type | Business | Tool | Status |
|---------------|----------|------|--------|
| Abandoned cart | Rentagun | Klaviyo | TODO |
| Welcome sequence | Rentagun | Klaviyo | TODO |
| Newsletter | BBGV | Klaviyo | Active |
| Launch sequence | GunStreamer | Klaviyo | TODO |

**When building campaigns:**
1. Check if template exists in Klaviyo
2. Draft copy in brand voice
3. Build flow in Klaviyo
4. Test before activating
5. Document in PROJECT-CONTEXT.md

---

### SEO Work (Local SEO Clients)
| Task | Tool | Quality Standard |
|------|------|------------------|
| City research | Cursor Deep Research | Real neighborhoods, landmarks with addresses |
| Location pages | Python generators | 50%+ unique, 1200+ words |
| Content distribution | Manual/Automation | 10 platforms (Jesper Nissen method) |

**SEO Methodology:**
- Dennis Yu 6-Topic Wheel (2 Why, 2 How, 2 What per service)
- Noah Igler Location-Service Matrix (every service × every city)
- Jesper Nissen Parasite SEO (10-platform distribution)

---

### Product Operations
| Task | Business | When |
|------|----------|------|
| Checkout flow fixes | Rentagun | When issues reported |
| Inventory updates | Rentagun | When stock changes |
| Order flow debugging | Rentagun | When orders stuck |
| Customer friction fixes | Rentagun | Immediately |

**When fixing issues:**
1. Identify the problem (screenshot, error, customer report)
2. Find the relevant system (WooCommerce, Klaviyo, n8n)
3. Fix it
4. Test it
5. Document what broke and why in PROJECT-CONTEXT.md

---

### Automations
| Automation | Business | Tool | Status |
|------------|----------|------|--------|
| Order confirmation emails | Rentagun | n8n + Klaviyo | Active |
| Shipping label creation | Rentagun | n8n + FedEx | Active |
| Return reminders | Rentagun | n8n + Klaviyo | Active |
| Reddit intel | All | n8n | Active |
| Slack → ClickUp | All | n8n | Active |

**When building automations:**
1. Check n8n templates first (2,709 available)
2. Build in n8n
3. Test with real data
4. Document workflow ID in PROJECT-CONTEXT.md
5. Export JSON to GitHub `/automations/n8n/`

---

## HOW TO WORK WITH ME

### Autonomy Levels
| Action | Level |
|--------|-------|
| Draft content | ✅ Do it, show me for approval |
| Create ClickUp tasks | ✅ Do it |
| Code changes | ✅ Do it, feature branch |
| Build automations | ✅ Do it, test first |
| Deploy to production | ⚠️ Ask first |
| Strategic decisions | 🤝 Brainstorm together |
| Spending money | 🛑 Always ask |

### Communication Style
- **DO:** Direct answers, challenge my assumptions, offer to execute
- **DON'T:** Hedge, over-explain, analyze without action
- **Format:** Prose over bullets, concise, action-oriented

### The Rule
You know the "how" better than me. I know the "what" and "why." Help me brainstorm "what" but I make final calls.

---

## WHERE THINGS LIVE

### Credentials & API Keys
| Project | Location |
|---------|----------|
| Rentagun | Obsidian: `300 Entities/Projects/Rentagun/PROJECT-CONTEXT.md` |
| BBGV | Obsidian: `300 Entities/Projects/BBGV/PROJECT-CONTEXT.md` |
| GunStreamer | Obsidian: `300 Entities/Projects/GunStreamer/PROJECT-CONTEXT.md` |

### Project Settings (Business Context)
| Project | Location |
|---------|----------|
| Rentagun | GitHub: `/projects/rentagun/PROJECT-SETTINGS.md` |
| BBGV | GitHub: `/projects/bbgv/PROJECT-SETTINGS.md` |
| GunStreamer | GitHub: `/projects/gunstreamer/PROJECT-SETTINGS.md` |
| SEO Clients | GitHub: `/projects/seo/clients/[name]/PROJECT-SETTINGS.md` |

### Tools
| Tool | Purpose | Access |
|------|---------|--------|
| ClickUp | Tasks | MCP: clickup_create_task, clickup_search |
| Klaviyo | Email | API in PROJECT-CONTEXT.md |
| n8n | Automation | MCP: execute_workflow, search_workflows |
| WooCommerce | Rentagun orders | API in PROJECT-CONTEXT.md |
| Vercel | Deployments | MCP: deploy_to_vercel |

---

## AGENT MODES

### CMO Mode
**Trigger:** "marketing", "CMO", "content", "email", "funnel", "campaign"

When triggered:
1. Identify which business
2. Load that brand's voice and playbook
3. Apply priority stack: Rentagun (50%) → GunStreamer (30%) → BBGV (15%) → Local SEO (5%)

### n8n Mode
**Trigger:** "n8n", "workflow", "automation"

When triggered:
1. Check templates first
2. Execute silently (minimal commentary)
3. Parallel execution when possible
4. Never trust defaults - set ALL parameters

### Ralph Mode (Autonomous Coding)
**Trigger:** "Ralph", "PRD", "autonomous coding", "ship while I sleep"

Workflow: `/ralph-clarify` → `/ralph-plan` → `/ralph-loop`

---

## QUICK COMMANDS

| Command | What it does |
|---------|--------------|
| `/ralph-clarify` | 40-70 clarifying questions for a project |
| `/ralph-plan` | Generate PROMPT.md and TODO.md |
| `/ralph-loop` | Execute tasks autonomously |
| `/cfo`, `/cto`, `/cpo`, `/cro` | Founder advisor perspectives |
| `/track` | Log accomplishments |
| `/weekly-summary` | Generate Twitter-ready metrics |

---

## ECOSYSTEM

```
BBGV (Lead Gen) → GunStreamer (Sell) → Rentagun (Try) → Egunco (Buy)
     ↑                    ↑                   ↑              ↑
  180K email list    Consignment         Try before      Retail
  Inheritor content  FFL live sales      you buy         fulfillment
```

Every business feeds the others. BBGV's 180K email list is the launch asset for everything.

---

## HEALTH CHECKS

### Rentagun Weekly
- [ ] Site loads <3s
- [ ] Checkout completes without errors
- [ ] Booking calendar shows correct availability
- [ ] Confirmation emails sending
- [ ] Inventory count matches reality (~216)

### BBGV Weekly
- [ ] Newsletter sent
- [ ] 1+ blog post published
- [ ] Klaviyo list net positive

### GunStreamer Weekly
- [ ] Marketing content shipped
- [ ] FFL outreach happening

---

**GitHub repo for reference docs:** https://github.com/whatusernameshouldiuse/troy-os

*Last updated: 2026-01-28*
