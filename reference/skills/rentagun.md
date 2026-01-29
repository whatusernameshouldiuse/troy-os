---
name: rentagun
description: Rentagun WooCommerce operations - order management, inventory checks, customer data, subscription monitoring. Use for checking orders, managing gun rentals.
homepage: https://rentagun.com
metadata: {"clawdbot":{"emoji":"🔫"}}
---

# Rentagun Skill

Manage Rentagun.com WooCommerce store: orders, inventory, subscriptions, customers.

## Setup

Credentials stored in heartbeat state. API access via WooCommerce REST API.

## API Reference

Base URL: `https://rentagun.com/wp-json/wc/v3`

### Authentication
```bash
# Consumer Key and Secret (Basic Auth)
WC_KEY="ck_dba6f1a539cf2fc4ed7e63c2a585da84d53363b7"
WC_SECRET="cs_f64e11b60a515cc823801cb9e747a7257ecf72a0"

curl -X GET "https://rentagun.com/wp-json/wc/v3/orders" \
  -u "$WC_KEY:$WC_SECRET"
```

## Common Operations

### Orders

**Get recent orders:**
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/orders?per_page=10&orderby=date&order=desc" \
  -u "$WC_KEY:$WC_SECRET" | jq '.[] | {id, status, total, billing: .billing.first_name}'
```

**Get orders by status:**
```bash
# Processing orders (need attention)
curl -s "https://rentagun.com/wp-json/wc/v3/orders?status=processing" \
  -u "$WC_KEY:$WC_SECRET"

# Completed orders
curl -s "https://rentagun.com/wp-json/wc/v3/orders?status=completed" \
  -u "$WC_KEY:$WC_SECRET"
```

**Get orders from last 24 hours:**
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/orders?after=$(date -v-1d +%Y-%m-%dT00:00:00)" \
  -u "$WC_KEY:$WC_SECRET"
```

**Get single order:**
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/orders/ORDER_ID" \
  -u "$WC_KEY:$WC_SECRET"
```

**Update order status:**
```bash
curl -X PUT "https://rentagun.com/wp-json/wc/v3/orders/ORDER_ID" \
  -u "$WC_KEY:$WC_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"status": "completed"}'
```

### Products (Inventory)

**Get all products:**
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/products?per_page=50" \
  -u "$WC_KEY:$WC_SECRET"
```

**Get product stock:**
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/products/PRODUCT_ID" \
  -u "$WC_KEY:$WC_SECRET" | jq '{name, stock_quantity, stock_status}'
```

**Update stock:**
```bash
curl -X PUT "https://rentagun.com/wp-json/wc/v3/products/PRODUCT_ID" \
  -u "$WC_KEY:$WC_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"stock_quantity": 5}'
```

### Customers

**Get customers:**
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/customers" \
  -u "$WC_KEY:$WC_SECRET"
```

**Search customer by email:**
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/customers?email=user@example.com" \
  -u "$WC_KEY:$WC_SECRET"
```

### Subscriptions (WooCommerce Subscriptions)

**Get active subscriptions:**
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/subscriptions?status=active" \
  -u "$WC_KEY:$WC_SECRET"
```

**Get subscription details:**
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/subscriptions/SUBSCRIPTION_ID" \
  -u "$WC_KEY:$WC_SECRET"
```

## Quick Checks (Heartbeat)

### New orders in last 24h
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/orders?after=$(date -v-1d +%Y-%m-%dT00:00:00)&status=processing" \
  -u "ck_dba6f1a539cf2fc4ed7e63c2a585da84d53363b7:cs_f64e11b60a515cc823801cb9e747a7257ecf72a0" | jq length
```

### Orders stuck in processing > 24h
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/orders?status=processing" \
  -u "$WC_KEY:$WC_SECRET" | jq '[.[] | select(.date_created < (now - 86400 | todate))]'
```

### Low stock products
```bash
curl -s "https://rentagun.com/wp-json/wc/v3/products?stock_status=lowstock" \
  -u "$WC_KEY:$WC_SECRET"
```

## Order Alert Format

When reporting new orders to Troy:
```
🔫 New Rentagun Order #ORDER_ID

Customer: FIRST LAST
Email: EMAIL
Phone: PHONE

Items:
- PRODUCT_NAME x QUANTITY

Total: $AMOUNT
Status: STATUS

Created: DATE
```

## Troubleshooting

### API returns 401
- Check API keys haven't been regenerated
- Verify read/write permissions on API key

### Orders not syncing
- Check WooCommerce webhooks in admin
- Verify n8n workflows if using automation

### Subscription issues
- Check WooCommerce Subscriptions plugin status
- Verify payment gateway connection (Stripe)

## Related Systems
- n8n workflows for order automation
- Stripe for payment processing
- GHL for customer follow-up

## Business Context
Rentagun = 50% of Troy's business focus. Gun rental subscriptions.
Connected to GunStreamer (live commerce) and BBGV (valuations).
