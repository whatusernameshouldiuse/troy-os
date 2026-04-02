# Rentagun Welcome Flow — UI Fixes Required
> **Created:** 2026-04-02  
> **Owner:** Troy (UI edits only — API cannot modify drag-and-drop templates)  
> **Estimated time:** 20–30 minutes in Klaviyo  
> **Flow:** Email Welcome Series with Discount (`U3Gi6F`) — already Live

---

## Why These Can't Be Fixed via API

Klaviyo's drag-and-drop builder (`SYSTEM_DRAGGABLE`) templates are editor-owned. The API returns read-only HTML. Direct PATCH returns 400: "Unsupported template type." All changes below require editing in the Klaviyo flow builder UI.

---

## Email 1 — Day 0 Welcome

**Flow message:** "Welcome + How it works + Coupon" (`RZJDyV`)  
**Template:** `Yyr8Ye`  
**Path:** Flows → Email Welcome Series with Discount → first email → Edit

### Change 1 — Fix the button link (functional bug)
- Current: `http://Rentagun.com`
- Change to: `https://rentagun.com`

### Change 2 — Remove emoji checkmarks from the "How it works" steps
Current text block:
```
✅ Browse & Select - Check out our full range of handguns, rifles, and shotguns online

✅ Choose Your FFL - Pick a licensed dealer near you at checkout
✅ We Ship - Your rental ships directly to your chosen FFL

✅ Complete Paperwork - Standard background check process (same as buying)

✅ Easy Return - Use our prepaid FedEx label when you're done
```

Replace with:
```
1. Browse and Select — Check out our full range of handguns, rifles, and shotguns online

2. Choose Your FFL — Pick a licensed dealer near you at checkout

3. We Ship — Your rental ships directly to your chosen FFL

4. Complete Paperwork — Standard background check process (same as buying)

5. Easy Return — Use our prepaid FedEx label when you're done
```

### Change 3 — Subject line
- Current: `Rentals Made Easy: $15 Off Your First Experience`
- Change to: `Your first rental is $15 off. Here's how it works.`

### Change 4 — Preview text
- Current: `5 steps to your first rental (+ exclusive discount)`
- Change to: `The process, the coupon, and what to expect.`

### Change 5 — Reply-to email
- Current: (empty)
- Change to: support@rentagun.com

---

## Email 2 — Day 3 Coupon Reminder

**Flow message:** "Coupon reminder email" (`RnHAWi`)  
**Template:** `XdKMpA`  
**Path:** Flows → Email Welcome Series with Discount → second email (after 3-day delay) → Edit

### Change 1 — Headline (H1)
- Current: `Your special deal`
- Change to: `The $400 mistake 1 in 3 gun buyers make`

### Change 2 — Body copy
Current:
```
Hi [first_name],
You still have a special offer available! Use your code 15OFFFirstMonth at checkout to enjoy Get $15 Off Your First Month on your next firearm rental. It's the perfect time to try something new or add to your rental experience without commitment. Act now and make the most of your discount!
```

Replace with:
```
Hi [first_name],

Most gun buyers do their research. They watch YouTube reviews, read forums, ask at the gun store. Then they spend $600 on a firearm that doesn't fit their hands, kicks harder than expected, or just sits in the safe after the second range trip.

That is the $400 mistake. And it happens to one in three buyers.

Your $15 off code is still active: 15OFFFirstMonth

Use it to rent before you commit. Try the gun you've been researching. If it's wrong for you, you're out $99 — not $600.

Ready when you are.
```

### Change 3 — Footer background color
- Current: `#14361f` (dark green)
- Change to: `#EC0000` (red — matches Email 1 footer)

### Change 4 — Subject line
- Current: `Don't miss out on your special deal.`
- Change to: `Your $15 coupon expires soon.`

### Change 5 — Preview text
- Current: `Your Welcome Offer Awaits!`
- Change to: `Still haven't rented? Here's why it matters.`

### Change 6 — Reply-to email
- Current: (empty)
- Change to: support@rentagun.com

---

## After Making Changes

1. Save each email template
2. Confirm both flow actions are still set to **Live**
3. Send a test email to yourself to verify rendering
4. The flow trigger is already pointed at the correct list (`XVFqQG` — "Email Subscribers") — no CTO action needed for that once the website form is updated per TRO-10

---

---

## Email 3 — Day 6 About Us

**Flow message:** "About us" (`Tb9usM`)  
**Template:** `X98x4c`  
**Path:** Flows → Email Welcome Series with Discount → third email → Edit

### Change 1 — Reply-to email
- Current: (empty)
- Change to: support@rentagun.com

### Change 2 — Fix [First Name] placeholder (non-Klaviyo syntax)
- Current: `Hi [First Name],`
- Change to: `Hi {{ first_name|default:"there" }},`

### Change 3 — Remove emoji checkmarks from the "Why we built it" benefits block
Current text block:
```
✅ No more guessing - Feel the actual trigger, grip, and weight before you buy

✅ No more buyer's remorse - Know exactly what works for YOU, not some YouTuber

✅ No more vault collecting - Try everything without needing storage for guns you don't love

✅ No more expensive mistakes - Spend $90-200 to rent instead of $600+ to gamble

✅ No more settling - Find your perfect match instead of 'good enough'
```

Replace with:
```
— No more guessing: Feel the actual trigger, grip, and weight before you buy

— No more buyer's remorse: Know exactly what works for you, not some YouTuber

— No more vault collecting: Try everything without needing storage for guns you don't love

— No more expensive mistakes: Spend $90–200 to rent instead of $600+ to gamble

— No more settling: Find your perfect match instead of "good enough"
```

---

## Email 4 — Day 10 Best Sellers

**Flow message:** "Best sellers email" (`WKZftK`)  
**Template:** `TtDvFQ`  
**Path:** Flows → Email Welcome Series with Discount → fourth email → Edit

### Change 1 — Reply-to email
- Current: (empty)
- Change to: support@rentagun.com
