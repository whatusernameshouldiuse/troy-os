---
name: ghl
description: GoHighLevel CRM automation - workflows, contacts, pipelines, webhooks, internal notifications. Use when managing leads, creating automations, or working with GHL sub-accounts.
homepage: https://developers.gohighlevel.com
metadata: {"clawdbot":{"emoji":"📊"}}
---

# GoHighLevel (GHL) Skill

Automate GoHighLevel CRM operations: contacts, workflows, pipelines, webhooks, and notifications.

## Setup

### Option 1: API Access (Preferred)
1. Get API key from GHL Settings → Business Profile → API Keys
2. Store credentials:
```bash
mkdir -p ~/.config/ghl
cat > ~/.config/ghl/config.json << 'EOF'
{
  "api_key": "your-api-key",
  "location_id": "your-location-id"
}
EOF
```

### Option 2: Browser Automation (Fallback)
Use when API access unavailable:
```
browser action=start profile=clawd
browser action=open targetUrl="https://app.gohighlevel.com"
```

## API Reference

Base URL: `https://services.leadconnectorhq.com`

### Authentication
```bash
GHL_KEY=$(jq -r .api_key ~/.config/ghl/config.json)
curl -X GET "https://services.leadconnectorhq.com/..." \
  -H "Authorization: Bearer $GHL_KEY" \
  -H "Version: 2021-07-28" \
  -H "Content-Type: application/json"
```

## Common Operations

### Contacts

**Create Contact:**
```bash
curl -X POST "https://services.leadconnectorhq.com/contacts/" \
  -H "Authorization: Bearer $GHL_KEY" \
  -H "Version: 2021-07-28" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+12345678900",
    "locationId": "LOCATION_ID",
    "tags": ["lead", "home-show-2026"]
  }'
```

**Search Contacts:**
```bash
curl -X GET "https://services.leadconnectorhq.com/contacts/?locationId=LOCATION_ID&query=john" \
  -H "Authorization: Bearer $GHL_KEY" \
  -H "Version: 2021-07-28"
```

**Update Contact:**
```bash
curl -X PUT "https://services.leadconnectorhq.com/contacts/CONTACT_ID" \
  -H "Authorization: Bearer $GHL_KEY" \
  -H "Version: 2021-07-28" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Smith",
    "tags": ["qualified-lead"]
  }'
```

**Add Tag to Contact:**
```bash
curl -X POST "https://services.leadconnectorhq.com/contacts/CONTACT_ID/tags" \
  -H "Authorization: Bearer $GHL_KEY" \
  -H "Version: 2021-07-28" \
  -H "Content-Type: application/json" \
  -d '{"tags": ["hot-lead", "callback-scheduled"]}'
```

### Webhooks (Inbound)

GHL webhook URL format:
```
https://services.leadconnectorhq.com/hooks/LOCATION_ID/webhook-trigger/WEBHOOK_ID
```

**Send data to GHL webhook:**
```bash
curl -X POST "https://services.leadconnectorhq.com/hooks/LOCATION_ID/webhook-trigger/WEBHOOK_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane@example.com",
    "phone": "+12345678900",
    "tags": ["source-landing-page"]
  }'
```

**Important field mappings (snake_case required):**
- `first_name` (not firstName)
- `last_name` (not lastName)
- `phone`
- `email`
- `tags` (array)
- Custom fields by field key

### Opportunities (Pipeline)

**Create Opportunity:**
```bash
curl -X POST "https://services.leadconnectorhq.com/opportunities/" \
  -H "Authorization: Bearer $GHL_KEY" \
  -H "Version: 2021-07-28" \
  -H "Content-Type: application/json" \
  -d '{
    "pipelineId": "PIPELINE_ID",
    "locationId": "LOCATION_ID",
    "name": "John Doe - Patio Project",
    "pipelineStageId": "STAGE_ID",
    "status": "open",
    "contactId": "CONTACT_ID",
    "monetaryValue": 15000
  }'
```

### Workflows (Limited API)

> **Note:** Workflow creation is limited via API. Use browser automation for complex workflows.

**Trigger workflow for contact:**
```bash
curl -X POST "https://services.leadconnectorhq.com/contacts/CONTACT_ID/workflow/WORKFLOW_ID" \
  -H "Authorization: Bearer $GHL_KEY" \
  -H "Version: 2021-07-28"
```

## Browser Automation Patterns

When API is insufficient, use browser automation:

### Navigate to Sub-Account
```
browser action=open profile=clawd targetUrl="https://app.gohighlevel.com"
# Wait for load, then snapshot
browser action=snapshot profile=clawd
# Click Sub-Accounts in sidebar
# Find account, click "Switch to Sub-Account"
```

### Create Workflow
```
# Navigate to Automation → Workflows
# Click "Create Workflow" → "Start from Scratch"
# Add Trigger: Contact Created / Inbound Webhook / etc.
# Add Actions: Send Email, Internal Notification, Add Tag, etc.
# Toggle Draft → Publish
```

## Speed-to-Lead Workflow Template

Standard workflow for instant lead response:

**Trigger:** Contact Created (filter by tag: "lead")

**Actions:**
1. **Internal Notification (Email)** to sales team:
   - Subject: `🚨 New Lead: {{contact.first_name}} - {{contact.phone}}`
   - Body: Contact details + "Call within 5 minutes!"

2. **Send Email** to lead:
   - Subject: `Thanks for reaching out, {{contact.first_name}}!`
   - Body: Confirmation + next steps

3. **Add Tag:** `speed-to-lead-sent`

4. **Wait:** 5 minutes

5. **If/Else:** Check if tag "contacted" exists
   - No → Send reminder notification to team

## Troy's Sub-Accounts

| Business | Location ID | Webhook Base |
|----------|-------------|--------------|
| ND Brick Pavers | `36DWfhzkzvGfZCApyIkC` | `https://services.leadconnectorhq.com/hooks/36DWfhzkzvGfZCApyIkC/webhook-trigger/` |
| Dutch Dumpsters | TBD | TBD |

## Troubleshooting

### Contact names showing as "?" or "-"
- Form sending camelCase (`firstName`) instead of snake_case (`first_name`)
- Fix: Update form to use `first_name`, `last_name`, `full_name`

### Webhook not creating contacts
- Check webhook is active in GHL → Automation → Workflows
- Verify Location ID in webhook URL
- Check field mappings match GHL expected format

### SMS not sending
- A2P/10DLC registration required
- Check: Settings → Phone Numbers → Messaging Compliance
- Alternative: Use email notifications until SMS configured

## Related Skills
- `notion` - Content calendars synced to GHL
- `gog` - Gmail for email campaigns alongside GHL

## API Documentation
- https://highlevel.stoplight.io/docs/integrations
- https://marketplace.gohighlevel.com/docs/
