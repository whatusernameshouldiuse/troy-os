# Skill Roadmap

Skills built and planned based on Troy's workflow patterns across Claude instances.

## ✅ Built (2026-01-29)

### Priority 1 - Daily Operations
| Skill | Description | Pain Point Solved |
|-------|-------------|-------------------|
| `ghl` | GoHighLevel CRM - workflows, contacts, webhooks | Spent 30+ min clicking through UI today |
| `klaviyo` | Email marketing - lists, analytics, BBGV warm-up | Daily cron monitoring, deliverability checks |
| `rentagun` | WooCommerce - orders, inventory, subscriptions | Frequent order checks in heartbeats |

## 🔜 Next Up

### Priority 2 - Business Operations
| Skill | Description | Why Needed |
|-------|-------------|------------|
| `bbgv` | Gun valuations, API integration, GEO strategy | Separate from Klaviyo, has unique workflows |
| `gunstreamer` | Social content with brand voice, Notion sync | Ian (VA) onboarding, content calendar |
| `troy-os` | Load project context, brand voice, playbooks | Standardize how all Claudes access docs |

### Priority 3 - Utilities
| Skill | Description | Why Needed |
|-------|-------------|------------|
| `lead-router` | Webhook handling, multi-CRM distribution | Pattern across ND Brick Pavers, Dutch Dumpsters |
| `analytics-dash` | Cross-business metrics aggregator | Unified view: Rentagun + BBGV + GHL leads |
| `a2p-setup` | SMS compliance checklist, 10DLC registration | Blocker for GHL SMS automation |

### Priority 4 - Advanced
| Skill | Description | Why Needed |
|-------|-------------|------------|
| `geo-seo` | LLM optimization - robots.txt, Grokopedia, Reddit | BBGV GEO strategy from 2026-01-28 |
| `creator-outreach` | Influencer partnership templates, tracking | Rentagun creator program, GunStreamer partnerships |
| `content-repurpose` | Transform long-form → social snippets | GunStreamer 70/20/10 content system |

## 📊 Patterns Observed

From analyzing memory files and session history:

### Most Frequent Tasks
1. **Order/Lead checks** - Multiple times daily (Rentagun, GHL)
2. **Email campaign monitoring** - BBGV warm-up, deliverability
3. **Content creation** - GunStreamer social, email copy
4. **CRM workflow setup** - GHL automations, speed-to-lead
5. **Documentation sync** - troy-os, Obsidian, Notion alignment

### Biggest Time Sinks
1. **Browser automation in GHL** - No good API for workflow creation
2. **Context loading** - Jumping between projects, finding right docs
3. **Field mapping debugging** - Webhook → CRM mismatches
4. **Multi-system coordination** - Same lead in GHL + Klaviyo + WooCommerce

### Automation Opportunities
1. **Unified lead ingestion** - One webhook → distribute to all systems
2. **Cross-business dashboard** - Morning briefing with all metrics
3. **Content queue** - Pre-approved posts auto-scheduled
4. **Alert deduplication** - Don't notify twice for same event

## 🏗️ Skill Architecture Notes

### What Makes a Good Skill
1. **Clear trigger** - Description matches user intent
2. **Self-contained** - All commands/examples in one file
3. **Credentials documented** - Where to find/store API keys
4. **Troubleshooting section** - Common errors and fixes
5. **Business context** - How it fits Troy's ecosystem

### Skill Dependencies
```
troy-os (base context)
├── gunstreamer (brand voice)
├── bbgv (brand voice)
├── rentagun (brand voice)
└── local-seo (client configs)

ghl (CRM)
├── lead-router (webhook handler)
└── a2p-setup (SMS enablement)

klaviyo (email)
└── bbgv (warm-up specifics)
```

## 📝 Maintenance

- Review skill usage monthly
- Update API versions when providers change
- Add new patterns as workflows evolve
- Archive unused skills to `skills/archive/`
