---
name: klaviyo
description: Klaviyo email marketing - list management, campaign analytics, profile operations, warm-up monitoring. Use for BBGV email operations.
homepage: https://developers.klaviyo.com
metadata: {"clawdbot":{"emoji":"📧"}}
---

# Klaviyo Skill

Manage Klaviyo email marketing: lists, profiles, campaigns, and analytics.

## Setup

1. Get API key from Klaviyo → Settings → API Keys → Create Private API Key
2. Store credentials:
```bash
mkdir -p ~/.config/klaviyo
echo "your-private-api-key" > ~/.config/klaviyo/api_key
```

## API Reference

Base URL: `https://a.klaviyo.com/api`

### Authentication
```bash
KLAVIYO_KEY=$(cat ~/.config/klaviyo/api_key)
curl -X GET "https://a.klaviyo.com/api/..." \
  -H "Authorization: Klaviyo-API-Key $KLAVIYO_KEY" \
  -H "revision: 2024-02-15" \
  -H "Content-Type: application/json"
```

## Common Operations

### Lists

**Get all lists:**
```bash
curl -X GET "https://a.klaviyo.com/api/lists" \
  -H "Authorization: Klaviyo-API-Key $KLAVIYO_KEY" \
  -H "revision: 2024-02-15"
```

**Create list:**
```bash
curl -X POST "https://a.klaviyo.com/api/lists" \
  -H "Authorization: Klaviyo-API-Key $KLAVIYO_KEY" \
  -H "revision: 2024-02-15" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "list",
      "attributes": {
        "name": "BBGV Warm-up List"
      }
    }
  }'
```

**Get list profiles:**
```bash
curl -X GET "https://a.klaviyo.com/api/lists/LIST_ID/profiles" \
  -H "Authorization: Klaviyo-API-Key $KLAVIYO_KEY" \
  -H "revision: 2024-02-15"
```

### Profiles

**Add profiles to list (batch):**
```bash
curl -X POST "https://a.klaviyo.com/api/lists/LIST_ID/relationships/profiles" \
  -H "Authorization: Klaviyo-API-Key $KLAVIYO_KEY" \
  -H "revision: 2024-02-15" \
  -H "Content-Type: application/json" \
  -d '{
    "data": [
      {"type": "profile", "id": "PROFILE_ID_1"},
      {"type": "profile", "id": "PROFILE_ID_2"}
    ]
  }'
```

**Create/update profile:**
```bash
curl -X POST "https://a.klaviyo.com/api/profiles" \
  -H "Authorization: Klaviyo-API-Key $KLAVIYO_KEY" \
  -H "revision: 2024-02-15" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "profile",
      "attributes": {
        "email": "user@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "properties": {
          "source": "bbgv-import"
        }
      }
    }
  }'
```

### Campaigns & Metrics

**Get campaigns:**
```bash
curl -X GET "https://a.klaviyo.com/api/campaigns" \
  -H "Authorization: Klaviyo-API-Key $KLAVIYO_KEY" \
  -H "revision: 2024-02-15"
```

**Get campaign metrics (opens, clicks, etc):**
```bash
curl -X GET "https://a.klaviyo.com/api/campaigns/CAMPAIGN_ID/campaign-messages" \
  -H "Authorization: Klaviyo-API-Key $KLAVIYO_KEY" \
  -H "revision: 2024-02-15"
```

**Get metric aggregates (deliverability):**
```bash
curl -X POST "https://a.klaviyo.com/api/metric-aggregates" \
  -H "Authorization: Klaviyo-API-Key $KLAVIYO_KEY" \
  -H "revision: 2024-02-15" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "metric-aggregate",
      "attributes": {
        "metric_id": "METRIC_ID",
        "measurements": ["count"],
        "filter": ["greater-than", ["string", "$attributed_message"], ["string", ""]],
        "timeframe": {"key": "last_7_days"}
      }
    }
  }'
```

## BBGV Email Warm-up System

Location: `~/bbgv-email-scripts/`

### Check Status
```bash
cd ~/bbgv-email-scripts && python3 scripts/klaviyo_drip.py --status
```

### Manual Run
```bash
cd ~/bbgv-email-scripts && ./cron/daily_drip.sh
```

### Check Logs
```bash
tail -50 ~/bbgv-email-scripts/logs/cron.log
```

### Warm-up Schedule
| Week | Daily Limit |
|------|-------------|
| 1 | 1,500 |
| 2 | 2,500 |
| 3 | 5,000 |
| 4+ | 10,000 |

### Health Check Thresholds
- **Bounce rate** > 3% → Pause sends
- **Spam rate** > 0.1% → Alert immediately
- **Open rate** < 15% → Deliverability issue
- **Unsubscribe** > 1% → Review content

## Troubleshooting

### "List ID does not exist" error
1. List was deleted in Klaviyo
2. Create new list, get ID
3. Update `~/bbgv-email-scripts/.env`:
   ```
   KLAVIYO_LIST_ID=new_list_id
   ```

### Cron not running
1. Check if machine was asleep at 9 AM
2. Manual run: `~/bbgv-email-scripts/cron/daily_drip.sh`
3. Set wake schedule: `sudo pmset repeat wake MTWRFSU 08:55:00`

### Deliverability issues
1. Check domain reputation at mail-tester.com
2. Verify DKIM/SPF/DMARC in DNS
3. Review recent campaign content for spam triggers

## BBGV Configuration

```
Location: ~/bbgv-email-scripts/.env
List ID: Check .env file (changes if list recreated)
Cron: 9 AM daily
```

## Related Skills
- `gog` - Gmail integration for replies
- `ghl` - CRM for converted leads
