# Agent Ops Best Practices
**Source:** Troy (via Nat / Felix agent example)
**Date:** 2026-02-23

---

## 1. 3-Layer Memory System

**Layer 1: Knowledge Graph** — structured facts about projects and life
- People, projects, tools, accounts, relationships, credentials
- Location: `memory/knowledge-graph.md`
- Format: structured, factual, evergreen

**Layer 2: Daily Notes** — what's actively happening
- Running log of events, decisions, actions taken
- Location: `memory/YYYY-MM-DD.md` (already exists)
- Format: raw, timestamped, operational

**Layer 3: Tacit Knowledge** — preferences, patterns, security rules
- How Troy likes things done
- What I've learned about working style
- Hard rules derived from corrections
- Location: `memory/tacit-knowledge.md`
- Format: rules + patterns, updated on correction

---

## 2. Bot Gets Its Own Accounts

Never use Troy's personal accounts. J needs dedicated:
- X/Twitter account
- GitHub account (or org)
- Email address
- Stripe account (when relevant)

If something breaks, blast radius stays contained. Personal accounts stay clean.
**Action: Troy to create/assign J's accounts.**

---

## 3. Remove Bottleneck Protocol

Every time J asks Troy to do something manually:
1. Do the thing
2. Ask J: "How can we remove this bottleneck?"
3. J documents the dependency and builds toward eliminating it

The more this question gets asked, the more autonomous J becomes over time.
**Apply this to every ask. No exceptions.**

---

## 4. Telegram Per-Project Group Chats

One group chat per project. Bot added to each. Context stays clean.
- BBGV group → BBGV context
- Rentagun group → Rentagun context
- GunStreamer group → GunStreamer context

Currently on WhatsApp (single thread = all context mixed).
**Action: Troy to decide if Telegram migration is worth it.**

---

## 5. Cron Jobs = Proactive Bot

Without cron jobs, bot waits for instructions. With them, it acts.
6-8 cron jobs for a single platform (X/Twitter alone) is not excessive — it's necessary.

**Examples of high-value cron jobs to build:**
- Daily Klaviyo pipeline check (BBGV)
- Weekly content calendar auto-draft
- SEO ranking report pull
- Social media scheduling queue fill
- Lead magnet performance report
- Competitor monitoring scan
- Weekly metrics digest to Troy

**Currently running:** EOD debrief, health check, intel scan, memory archive, morning briefing, overnight build, weekly synthesis.
**Expand aggressively.**
