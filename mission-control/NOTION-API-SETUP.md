# Notion API Path (OpenClaw fallback)

Since Notion MCP is not natively exposed in this OpenClaw toolset, use this API publisher path.

## 1) Create/get token
- Notion → Settings → Connections → Develop integrations
- Copy Internal Integration Token

## 2) Share target page with integration
- Open target page (GS Marketing Hub)
- Share → Invite your integration

## 3) Run publisher
```bash
export NOTION_TOKEN='secret_xxx'
export NOTION_PARENT_PAGE_ID='2fd04d33c41781c397dffb577704476f'
python3 '/Users/troyvanmaanen/Library/Mobile Documents/iCloud~md~obsidian/Documents/Work/Projects/GunStreamer/Promos/Saturday-Night-Special-Launch/notion_publish.py'
```

## 4) Expected output
- Creates a parent page: "Saturday Night Special — Promo Pack"
- Creates child pages for:
  - Platform posts
  - Image prompts
  - Email promo pack
  - Production checklist

## Notes
- If 403: integration not shared to page yet.
- If 401: token invalid.
