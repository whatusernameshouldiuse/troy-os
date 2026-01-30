# Rentagun Win-Back Email Sequence
**Created:** 2026-01-29 (Nightly Compound)
**Status:** Ready for Klaviyo Import
**Trigger:** No order in 60+ days (previously placed at least 1 order)
**Goal:** Re-engage inactive subscribers with 3-email sequence

---

## Sequence Overview

| Email | Timing | Subject | Purpose |
|-------|--------|---------|---------|
| 1 | Day 60 | We Miss You | Friendly check-in, show new inventory |
| 2 | Day 70 | New Inventory Alert | FOMO with exclusive access |
| 3 | Day 80 | Discount Offer | Final attempt with $20 incentive |

---

## Email 1: We Miss You (Day 60)

### Klaviyo Setup
- **Trigger:** No order in 60 days
- **Condition:** Previously placed at least 1 order
- **Wait:** 0 minutes from trigger
- **Metric to Track:** Win-Back - 60 Days Sent

### Subject Lines (A/B Test)
- A: `{{ first_name|default:'Hey' }}, you still shooting?`
- B: `It's been a minute...`

### Preview Text
`We added {{ new_gun_count|default:'12' }} new guns since your last rental.`

### Email Body

```html
{{ first_name|default:'Hey' }},

It's been {{ days_since_last_order|default:'a while' }} since your last rental.

Life gets busy. Ranges get crowded. Plans change. I get it.

But if you've been thinking about trying another gun, I wanted to let you know we've added some solid options since you were here last.

**New arrivals you might like:**
{% for product in new_arrivals|slice:":3" %}
- {{ product.title }}
{% endfor %}

Plus {{ remaining_new_count|default:'9' }} more.

[BROWSE WHAT'S NEW →]

No pressure. Just wanted you to know we're here when you're ready.

Troy
Founder, Rentagun

P.S. If you're not interested anymore, no hard feelings. You can unsubscribe below.
```

### Plain Text Version

```
{{ first_name|default:'Hey' }},

It's been {{ days_since_last_order|default:'a while' }} since your last rental.

Life gets busy. Ranges get crowded. Plans change. I get it.

But if you've been thinking about trying another gun, I wanted to let you know we've added some solid options since you were here last.

Check out what's new: [link]

No pressure. Just wanted you to know we're here when you're ready.

Troy
Founder, Rentagun

P.S. If you're not interested anymore, no hard feelings. You can unsubscribe below.
```

### Design Notes
- Simple, text-heavy design (feels personal, not promotional)
- Optional: 3 product images in a row if using dynamic blocks
- CTA button: Red (#E63946), text "BROWSE WHAT'S NEW"
- Footer includes easy unsubscribe link

---

## Email 2: New Inventory Alert (Day 70)

### Klaviyo Setup
- **Wait:** 10 days from Email 1
- **Condition:** Still no order since sequence started
- **Metric to Track:** Win-Back - New Inventory Sent

### Subject Lines (A/B Test)
- A: `You asked for it: now available`
- B: `First access: new gun drop`

### Preview Text
`You're seeing this before the public announcement.`

### Email Body

```html
{{ first_name|default:'Hey' }},

Remember when people kept asking for [FEATURED_GUN_NAME]?

We got one.

And you're getting early access before we announce it publicly.

**[FEATURED_GUN_NAME]**
[PRODUCT_IMAGE]

Why it's worth trying:
- [KEY_BENEFIT_1]
- [KEY_BENEFIT_2]
- [KEY_BENEFIT_3]

[RESERVE [FEATURED_GUN_NAME] →]

Fair warning: Our most-requested guns book out 2-3 weeks in advance. If you've been waiting for something like this, now's your shot.

Troy

P.S. If this isn't your style, hit reply and tell me what you're looking for. I'm always hunting for new inventory to add.
```

### Dynamic Content Strategy
- Pull most recently added product from catalog
- OR: Manually feature a high-demand gun each month
- If no specific gun, use generic "new inventory" messaging

### Plain Text Version

```
{{ first_name|default:'Hey' }},

Remember when people kept asking for [FEATURED_GUN_NAME]?

We got one.

And you're getting early access before we announce it publicly.

Why it's worth trying:
- [KEY_BENEFIT_1]
- [KEY_BENEFIT_2]
- [KEY_BENEFIT_3]

Reserve it here: [link]

Fair warning: Our most-requested guns book out 2-3 weeks in advance. If you've been waiting for something like this, now's your shot.

Troy

P.S. If this isn't your style, hit reply and tell me what you're looking for. I'm always hunting for new inventory to add.
```

### Design Notes
- Single product focus (not a catalog dump)
- Large, high-quality product image
- Benefits in bullet format for scanability
- CTA button: Red (#E63946), text "RESERVE [GUN NAME]"

---

## Email 3: Discount Offer (Day 80)

### Klaviyo Setup
- **Wait:** 10 days from Email 2
- **Condition:** Still no order since sequence started
- **Metric to Track:** Win-Back - Discount Offer Sent
- **Coupon Required:** Create code `COMEBACK20` (fixed $20 off, valid 7 days)

### Subject Lines (A/B Test)
- A: `Come back? Here's $20 off.`
- B: `Last shot (pun intended)`

### Preview Text
`$20 off your next rental. Valid 7 days.`

### Email Body

```html
{{ first_name|default:'Hey' }},

Last shot (pun intended):

If you come back and rent something in the next 7 days, I'll knock $20 off.

**Use code: COMEBACK20**

[BROWSE RENTALS →]

If you're done with Rentagun, I get it. No hard feelings. You can unsubscribe below.

But if you've just been busy, this is your reminder: stop researching. Start shooting.

Troy
Founder, Rentagun

P.S. This code expires in 7 days. After that, you're back to full price.
```

### Plain Text Version

```
{{ first_name|default:'Hey' }},

Last shot (pun intended):

If you come back and rent something in the next 7 days, I'll knock $20 off.

Use code: COMEBACK20

Browse rentals here: [link]

If you're done with Rentagun, I get it. No hard feelings. You can unsubscribe below.

But if you've just been busy, this is your reminder: stop researching. Start shooting.

Troy
Founder, Rentagun

P.S. This code expires in 7 days. After that, you're back to full price.
```

### Design Notes
- Coupon code prominently displayed (large, bold, bordered box)
- Clear expiration messaging
- Simple layout - this is a final attempt, not a catalog
- CTA button: Red (#E63946), text "BROWSE RENTALS"
- Make unsubscribe visible and easy (we're offering them an out)

---

## Coupon Setup (WooCommerce)

Create the following coupon in WooCommerce for Email 3:

| Field | Value |
|-------|-------|
| **Code** | COMEBACK20 |
| **Discount Type** | Fixed cart discount |
| **Amount** | $20.00 |
| **Usage Limit** | 1 per customer |
| **Expiry** | Rolling 7 days from send (create monthly versions: COMEBACK20-JAN, COMEBACK20-FEB, etc.) |
| **Minimum Spend** | $0 (no minimum) |
| **Product Restrictions** | None |

### Alternative: Dynamic Coupon Strategy
If using Klaviyo's unique coupon feature:
- Create unique codes per recipient
- Set 7-day expiration from send date
- Track redemption by email

---

## Flow Exit Conditions

Remove from flow if:
- Places an order (goal achieved)
- Unsubscribes (respect the request)
- Email bounces (list hygiene)

---

## Success Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| **Open Rate** | 30%+ | Win-back should be personal, higher than average |
| **Click Rate** | 5%+ | Strong interest = ready to convert |
| **Conversion Rate** | 3%+ | Measure orders within 7 days of each email |
| **Unsubscribe Rate** | <2% | Expected higher than usual (we're offering exit) |
| **Revenue Recovered** | Track per sequence | Total revenue from re-engaged customers |

---

## Implementation Checklist

### Before Launch
- [ ] Create COMEBACK20 coupon in WooCommerce
- [ ] Build 3 email templates in Klaviyo
- [ ] Set up flow with proper timing (60/70/80 days)
- [ ] Configure exit conditions (order placed, unsubscribe)
- [ ] Test send all 3 emails to internal address
- [ ] Verify coupon code works at checkout
- [ ] Set up segment: "Ordered 60+ days ago, not in flow"

### After Launch
- [ ] Monitor first week's metrics
- [ ] A/B test subject lines after 100 sends
- [ ] Review revenue recovered weekly
- [ ] Adjust featured products in Email 2 monthly

---

## Notes

**Voice alignment:** All emails follow the Rentagun brand voice:
- Direct, no BS
- From Troy (founder persona)
- Acknowledges that people leave - no guilt trips
- Clear value prop in each email
- Easy out offered in every email

**Why 60/70/80 timing:**
- Day 60: Check-in before they forget us completely
- Day 70: Create FOMO with exclusive access
- Day 80: Financial incentive as last resort

**Why not more aggressive:**
- People who haven't rented in 60+ days aren't cold leads - they've used the service
- Being pushy damages brand trust
- Offering easy unsubscribe shows confidence, not desperation

---

*Created by nightly compound process. Ready for Klaviyo import.*
