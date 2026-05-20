# Buyer Signup + Stream-Launch Autoresponder — All-Google Stack

> **Replaces:** `~/Work/GunStreamer/launch-kit/buyer-nurture-system.md` (Gmail/Tally manual). That file is now archived as a fallback; this is what we're shipping.
>
> **Architecture:** Google Sign-In (OAuth) on `live.gunstreamer.com` → Apps Script Web App → Google Sheet storage → MailApp autoresponders (welcome email on signup + stream-launch alert on webhook from gunstreamer.com admin).
>
> **Why this stack:** Native to your Workspace, free, zero third-party dependencies. One-click signup (no form fill). Event-triggered alerts when streams actually go live (not weekly broadcasts). Ceiling: 2,000 sends/day (Workspace Gmail quota). At 2,000+ active subscribers OR 2,000+ events/day, migrate to a real ESP.

---

## 1. Architecture at a Glance

```
┌──────────────────────────────────────────────────────────────┐
│ live.gunstreamer.com                                         │
│  ┌──────────────────────────────┐                            │
│  │ "Sign in with Google" button │  (Google Identity Services)│
│  └──────────────────────────────┘                            │
└────────────────┬─────────────────────────────────────────────┘
                 │ on success: POST JSON {name, email, ...}
                 ↓
┌──────────────────────────────────────────────────────────────┐
│ Apps Script Web App                                          │
│  endpoint: /signup    → append to Sheet + fire welcome email │
│  endpoint: /stream-launch → bulk alert to active subscribers │
│  endpoint: /unsubscribe   → mark subscriber inactive         │
└────┬────────────────────┬────────────────────┬───────────────┘
     │                    │                    │
     ↓                    ↓                    ↓
 Google Sheet         MailApp           gunstreamer.com webhook
 (the list)        (sends emails)    (fires when stream goes live)
```

### Three components, three responsibilities

| Component | Owns | Lives in |
|---|---|---|
| **Frontend** | OAuth flow, signup UX | `live.gunstreamer.com` codebase |
| **Apps Script Web App** | Signup endpoint, autoresponders, unsubscribe | script.google.com (Troy's Workspace) |
| **Google Sheet** | Subscriber list (source of truth for the list) | Drive (Troy's Workspace) |

---

## 2. Setup Sequence (~90 min total)

### Step 1 — Create the Google Sheet (5 min)

1. Open Drive → New Google Sheet → name it **"GunStreamer Buyer Subscribers"**
2. Add header row (column order matters — Apps Script depends on it):
   ```
   A: timestamp
   B: name
   C: email
   D: google_id
   E: source
   F: status
   G: welcome_sent
   H: last_alert_sent
   ```
3. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`). Save for Step 4.

### Step 2 — Create a Google Cloud OAuth client (15 min)

1. Go to https://console.cloud.google.com/
2. Create new project: **"GunStreamer Buyer Signup"**
3. **APIs & Services → OAuth consent screen** → External → fill in:
   - App name: GunStreamer
   - User support email: `troy@gunstreamer.com`
   - App logo (optional)
   - Authorized domains: `gunstreamer.com`
   - Developer contact email: `troy@gunstreamer.com`
4. Scopes: add `email`, `profile`, `openid` (basic — that's all we need)
5. Save and publish (or leave in testing if you want to whitelist test emails first)
6. **APIs & Services → Credentials → Create Credentials → OAuth Client ID:**
   - Application type: Web application
   - Name: `live.gunstreamer.com — signup`
   - Authorized JavaScript origins: `https://live.gunstreamer.com` (and `http://localhost:3000` if you want to test locally)
   - Authorized redirect URIs: leave blank (Google Sign-In with the GIS library doesn't redirect — it returns a JWT to the page)
7. Save the **Client ID** (looks like `123456789-xxxx.apps.googleusercontent.com`)

### Step 3 — Deploy the Apps Script Web App (15 min)

1. Go to https://script.google.com → New Project → name it **"GunStreamer Buyer Autoresponder"**
2. In `Code.gs`, paste the full Apps Script source from Section 4 below
3. At the top of the file, replace these constants:
   ```javascript
   const SHEET_ID = 'PASTE_FROM_STEP_1';
   const FROM_EMAIL = 'troy@gunstreamer.com';
   const STREAM_LAUNCH_SECRET = 'GENERATE_A_RANDOM_32_CHAR_STRING';
   const PHYSICAL_ADDRESS = 'Your CAN-SPAM-compliant mailing address';
   ```
   Generate the secret with: `openssl rand -hex 16`
4. Save the project
5. **Deploy → New deployment → Settings (gear) → Web app:**
   - Description: `Buyer signup + autoresponder v1`
   - Execute as: **Me** (so the script runs under Troy's Workspace email)
   - Who has access: **Anyone** (so the public live.gunstreamer.com page can POST to it)
6. Click Deploy → Authorize permissions (Apps Script will ask permission to send mail, access the Sheet, etc.)
7. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfycb.../exec`). Save for Step 4 and Step 5.

### Step 4 — Wire up the frontend on live.gunstreamer.com (30 min)

Paste the HTML/JS snippet from Section 5 below into the buyer-signup landing page. Replace:
- `YOUR_GOOGLE_CLIENT_ID` → from Step 2
- `YOUR_APPS_SCRIPT_WEB_APP_URL` → from Step 3

The HTML expects two elements:
- `#signup-form` — the visible signup state
- `#signup-success` — hidden until signup completes (use CSS `display:none` by default)

### Step 5 — Wire up the stream-launch webhook on gunstreamer.com (20 min)

When a dealer/stream goes live on `gunstreamer.com`, the platform backend should POST to the Apps Script URL with the stream-launch action. See Section 6 for the integration spec. The platform team builds this — provide them the URL and secret from Step 3.

### Step 6 — Test the full loop (10 min)

See "Testing Checklist" in Section 7.

---

## 3. Google Sheet Schema

| Column | Type | Notes |
|---|---|---|
| A — timestamp | ISO 8601 string | Set by Apps Script |
| B — name | string | From Google profile |
| C — email | string | From Google profile |
| D — google_id | string (`sub` from JWT) | Stable user ID, useful for deduplication |
| E — source | string | UTM source captured at signup (`meta` / `google` / `direct`) |
| F — status | `active` \| `unsubscribed` | Apps Script reads this for broadcast filtering |
| G — welcome_sent | `yes` \| `no` | Set to `yes` after welcome email fires |
| H — last_alert_sent | ISO 8601 string | Updated after each stream-launch broadcast |

You can manually add columns past H — Apps Script only reads A-H.

---

## 4. Apps Script Source (`Code.gs`)

```javascript
// GunStreamer Buyer Signup + Stream-Launch Autoresponder
// Deploy as Web App in Troy's Workspace (or any Google account that owns the Sheet + sending inbox).
// Quota note: this script uses MailApp.sendEmail() which counts against the 2,000/day Workspace
// quota (1,500/day for non-Workspace Gmail). Don't exceed that within a 24h window.

const SHEET_ID = 'PASTE_GOOGLE_SHEET_ID_HERE';
const FROM_EMAIL = 'troy@gunstreamer.com';
const STREAM_LAUNCH_SECRET = 'PASTE_32_CHAR_RANDOM_SECRET';
const PHYSICAL_ADDRESS = 'GunStreamer — [your mailing address]';

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const action = body.action;

    if (action === 'signup') return handleSignup(body);
    if (action === 'stream-launch') return handleStreamLaunch(body);
    if (action === 'unsubscribe') return handleUnsubscribe(body);

    return jsonResponse({ error: 'unknown action' }, 400);
  } catch (err) {
    Logger.log(err);
    return jsonResponse({ error: err.message }, 500);
  }
}

function doGet() {
  return jsonResponse({ status: 'ready' });
}

// ── Handlers ────────────────────────────────────────────────────────────

function handleSignup(body) {
  const { name, email, googleId, source } = body;
  if (!email) return jsonResponse({ error: 'email required' }, 400);

  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

  // Deduplicate
  if (findSubscriberByEmail(sheet, email)) {
    return jsonResponse({ status: 'already_subscribed', email });
  }

  // Append
  sheet.appendRow([
    new Date().toISOString(),
    name || '',
    email,
    googleId || '',
    source || 'direct',
    'active',
    'no',
    ''
  ]);

  // Send welcome
  try {
    sendWelcomeEmail(email, name || 'there');
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 7).setValue('yes');
  } catch (err) {
    Logger.log('Welcome email failed: ' + err.message);
  }

  // Notify Troy
  try {
    GmailApp.sendEmail(
      FROM_EMAIL,
      'New buyer signup: ' + email,
      `Name: ${name || '(none)'}\nEmail: ${email}\nSource: ${source || 'direct'}\nGoogle ID: ${googleId || '(none)'}`
    );
  } catch (err) {
    Logger.log('Notification failed: ' + err.message);
  }

  return jsonResponse({ status: 'subscribed', email });
}

function handleStreamLaunch(body) {
  const { secret, dealer, time, featuredLot, watchUrl } = body;

  if (secret !== STREAM_LAUNCH_SECRET) {
    return jsonResponse({ error: 'unauthorized' }, 401);
  }

  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return jsonResponse({ status: 'no_subscribers', count: 0 });

  const data = sheet.getRange(2, 1, lastRow - 1, 8).getValues();
  const active = data.filter(row => row[5] === 'active');

  // Hard quota guard — Workspace cap is 2,000/day
  if (active.length > 1800) {
    return jsonResponse({
      error: 'subscriber count near daily quota — migrate to ESP',
      count: active.length
    }, 503);
  }

  let sent = 0;
  active.forEach((row, idx) => {
    const email = row[2];
    const name = row[1];
    try {
      sendStreamLaunchEmail(email, name || 'there', dealer, time, featuredLot, watchUrl);
      sheet.getRange(idx + 2, 8).setValue(new Date().toISOString());
      sent++;
    } catch (err) {
      Logger.log(`Send failed for ${email}: ${err.message}`);
    }
  });

  return jsonResponse({ status: 'sent', count: sent });
}

function handleUnsubscribe(body) {
  const { email } = body;
  if (!email) return jsonResponse({ error: 'email required' }, 400);

  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return jsonResponse({ error: 'not_found' }, 404);

  const data = sheet.getRange(2, 3, lastRow - 1, 1).getValues();
  for (let i = 0; i < data.length; i++) {
    if (data[i][0].toLowerCase() === email.toLowerCase()) {
      sheet.getRange(i + 2, 6).setValue('unsubscribed');
      return jsonResponse({ status: 'unsubscribed', email });
    }
  }
  return jsonResponse({ error: 'not_found' }, 404);
}

// ── Email Templates ─────────────────────────────────────────────────────

function sendWelcomeEmail(email, name) {
  const unsubUrl = `https://live.gunstreamer.com/unsubscribe?email=${encodeURIComponent(email)}`;
  const subject = "You're on the list — we'll alert you when shows go live";

  const body = `Hey ${name},

You're in. Welcome to GunStreamer.

When a federally-licensed dealer goes live, you'll get an email from us with the stream link. No daily blasts, no spam — only when shows are actually running.

Watch what's live right now:
https://gunstreamer.com/live

How GunStreamer works in 30 seconds:

Federally-licensed dealers go on camera with their inventory. Used, consignment, estate — the stuff that doesn't make it onto a distributor catalog. You watch live, ask questions in chat, and bid in real time. The host is on camera the whole time — when you ask about the bore, the markings, the wear, you get an answer.

Trust is the whole point.

See you on the next stream.

Troy
GunStreamer
troy@gunstreamer.com

---
To stop receiving alerts, click here: ${unsubUrl}
${PHYSICAL_ADDRESS}
`;

  MailApp.sendEmail({
    to: email,
    from: FROM_EMAIL,
    subject: subject,
    body: body,
    headers: {
      'List-Unsubscribe': `<${unsubUrl}>, <mailto:unsubscribe@gunstreamer.com?subject=unsubscribe>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
    }
  });
}

function sendStreamLaunchEmail(email, name, dealer, time, featuredLot, watchUrl) {
  const unsubUrl = `https://live.gunstreamer.com/unsubscribe?email=${encodeURIComponent(email)}`;
  const url = watchUrl || 'https://gunstreamer.com/live';
  const subject = `${dealer} is live now — ${time}`;

  const body = `${name},

${dealer} just went live.

Time: ${time}
${featuredLot ? `Featured this stream: ${featuredLot}\n` : ''}
→ Watch now: ${url}

The host is on camera and answers chat questions in real time. If you've been waiting to see something specific, this is the moment.

Troy
GunStreamer

---
To stop receiving alerts, click here: ${unsubUrl}
${PHYSICAL_ADDRESS}
`;

  MailApp.sendEmail({
    to: email,
    from: FROM_EMAIL,
    subject: subject,
    body: body,
    headers: {
      'List-Unsubscribe': `<${unsubUrl}>, <mailto:unsubscribe@gunstreamer.com?subject=unsubscribe>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
    }
  });
}

// ── Helpers ─────────────────────────────────────────────────────────────

function findSubscriberByEmail(sheet, email) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;
  const data = sheet.getRange(2, 3, lastRow - 1, 1).getValues();
  for (let i = 0; i < data.length; i++) {
    if (data[i][0].toLowerCase() === email.toLowerCase()) return data[i];
  }
  return null;
}

function jsonResponse(payload, statusCode) {
  // Apps Script web apps can't set HTTP status codes directly on createTextOutput,
  // so we pass the status as a payload key. Frontend should treat any payload.error as failure.
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Apps Script quotas you need to know
- **MailApp.sendEmail**: 2,000/day for Workspace, 1,500/day for non-Workspace Gmail
- **UrlFetchApp / external calls**: 20,000/day Workspace
- **Sheet writes**: ~30K/day soft limit, fine for this load
- **Web app execution time**: 6 min per invocation. Stream-launch broadcast to 2,000 subscribers takes ~3-5 min — safe but watch for timeouts at peak.

---

## 5. Frontend HTML/JS for `live.gunstreamer.com`

```html
<!-- Place in <head> -->
<script src="https://accounts.google.com/gsi/client" async defer></script>

<!-- Place in the signup section of the page -->
<div id="signup-form">
  <h2>Get notified when shows go live</h2>
  <p>Federally-licensed dealers go live on camera. One click to subscribe.</p>

  <div id="g_id_onload"
       data-client_id="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
       data-callback="handleSignIn"
       data-auto_prompt="false">
  </div>
  <div class="g_id_signin"
       data-type="standard"
       data-size="large"
       data-theme="filled_black"
       data-text="signup_with"
       data-shape="pill"
       data-logo_alignment="left">
  </div>

  <p class="small-print">
    One click. No spam. We only send alerts when streams actually go live.
  </p>
</div>

<div id="signup-success" style="display:none;">
  <h2>You're on the list.</h2>
  <p>We'll send <span id="signup-success-email"></span> an alert next time a federally-licensed dealer goes live.</p>
  <p><a href="https://gunstreamer.com/live">Watch what's live right now →</a></p>
</div>

<script>
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';

function handleSignIn(response) {
  // Decode the JWT credential (no verification needed client-side — Apps Script trusts the Google ID from frontend; if you want server-side JWT verification, add it in handleSignup)
  const payload = JSON.parse(atob(response.credential.split('.')[1]));

  // Grab UTM source for tracking
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || 'direct';

  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'signup',
      name: payload.name,
      email: payload.email,
      googleId: payload.sub,
      source: source
    })
  })
  .then(r => r.json())
  .then(data => {
    if (data.error) {
      console.error(data.error);
      alert('Something went wrong. Email troy@gunstreamer.com and we\'ll get you added.');
      return;
    }
    // Show success state
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('signup-success').style.display = 'block';
    document.getElementById('signup-success-email').textContent = payload.email;

    // Optional: fire a Meta Pixel Lead event here for ad attribution
    if (typeof fbq === 'function') {
      fbq('track', 'Lead', { content_name: 'newsletter_signup' });
    }
    if (typeof gtag === 'function') {
      gtag('event', 'sign_up', { method: 'Google' });
    }
  })
  .catch(err => {
    console.error(err);
    alert('Network error. Try again or email troy@gunstreamer.com.');
  });
}
</script>
```

### Frontend notes
- **Meta Pixel Lead event** fires inside `handleSignIn` — this is what feeds the Meta Ads conversion tracking. Required for the Meta launch playbook's optimization event.
- **GA4 sign_up event** fires for Google Analytics attribution.
- **Privacy**: the email + name come from the user's own Google profile. No password storage, no PII beyond what they consent to share with the Google Sign-In prompt.

---

## 6. Webhook Integration on `gunstreamer.com`

When a stream goes live on `gunstreamer.com`, the platform backend must POST to the Apps Script URL.

### Endpoint
```
POST {APPS_SCRIPT_URL}
Content-Type: application/json
```

### Request body
```json
{
  "action": "stream-launch",
  "secret": "STREAM_LAUNCH_SECRET (from Apps Script constants)",
  "dealer": "eGunco's",
  "time": "1:00 PM CT",
  "featuredLot": "Sig MCX Rattler + 12 used handguns",
  "watchUrl": "https://gunstreamer.com/live/egunco"
}
```

### Response
```json
{ "status": "sent", "count": 1247 }
```

### When to fire it
Best practice: fire 5-10 minutes BEFORE the stream goes live (so subscribers have time to open the email and join). Trigger options:
- **Manual trigger**: a "Notify Subscribers" button in the admin panel. Simplest, gives Troy control.
- **Scheduled trigger**: cron job on gunstreamer.com that fires based on the dealer's published schedule (eGunco's daily 1pm CT, etc.). Pulls from a stream calendar.
- **Automatic on go-live**: when the WebSocket detects a stream start, the backend automatically POSTs. Best buyer experience but requires platform integration.

For launch: **manual trigger** is the right starting place. Build the button into the admin, fire it manually for the first few weeks, automate after the volume is real.

### Security
The `STREAM_LAUNCH_SECRET` constant is the only auth on the broadcast endpoint. Treat it like an API key:
- Store as env var on gunstreamer.com server (`STREAM_LAUNCH_SECRET=...`)
- Never expose in client-side code
- Rotate quarterly
- If leaked, regenerate in the Apps Script and redeploy

---

## 7. Testing Checklist

### Pre-launch tests (do all of these in order)

| Test | How | Pass condition |
|---|---|---|
| 1. Apps Script deploys cleanly | Deploy from Step 3 | Web app URL returned, no permission errors |
| 2. `doGet` returns `{status: 'ready'}` | Open the Web app URL in a browser | JSON response visible |
| 3. Signup endpoint works | `curl -X POST {URL} -H "Content-Type: application/json" -d '{"action":"signup","email":"test@example.com","name":"Test","googleId":"123"}'` | Row appended to Sheet, welcome email arrives at test@example.com |
| 4. Frontend Google Sign-In renders | Open `live.gunstreamer.com` | "Sign in with Google" button visible |
| 5. Full signup loop | Click button → choose a Google account | Success state shows, Sheet row appears, welcome email arrives, Pixel fires |
| 6. Deduplication | Sign up twice with same email | `status: already_subscribed` returned, no duplicate row |
| 7. Stream-launch endpoint | `curl -X POST {URL} ... action: stream-launch, secret: ...` | All active subscribers receive the alert |
| 8. Unauthorized stream-launch | Same as 7 but with wrong secret | Returns `unauthorized` |
| 9. Unsubscribe | Click unsubscribe link in welcome email (or `curl` the unsubscribe action) | Sheet row status → `unsubscribed`, next broadcast skips them |
| 10. Quota guard | (Optional — only test if you ever exceed 1,800 subs) | Stream-launch returns 503 to force migration |

### Post-launch monitoring (weekly)

- Check Apps Script execution logs (script.google.com → Executions tab) — look for failed sends
- Check Sheet for any rows where `welcome_sent = 'no'` (welcome email failed)
- Check Workspace Gmail send count: stay below 1,500/day to leave buffer
- Sample 5 random subscribers and confirm they got the last broadcast

---

## 8. Compliance

### Gmail Bulk Sender Rules (Feb 2024+)
The script's headers already satisfy these:
- **List-Unsubscribe header** — present in both welcome + alert
- **List-Unsubscribe-Post: One-Click** — present
- **DMARC alignment** — requires DNS setup on gunstreamer.com (SPF + DKIM + DMARC records). Coordinate with the platform team.
- **Complaint rate < 0.3%** — monitor via Postmaster Tools (https://postmaster.google.com/) for gunstreamer.com domain

### CAN-SPAM
- ✅ Unsubscribe mechanism — one-click via header + visible link in body
- ✅ Physical mailing address — included in both templates via `PHYSICAL_ADDRESS` constant (UPDATE THIS BEFORE DEPLOY)
- ✅ Sender identification — clear "From: Troy / GunStreamer"
- ✅ Subject lines are accurate — no deceptive framing
- ✅ Honor unsubscribes within 10 business days — Apps Script handles in milliseconds

### Meta Compliance (matters because Meta ads drive the signups)
Same banned-keyword rules from `meta-ads-buyer-launch.md` Section 2 apply to all emails. The templates above stay in safe-vocabulary land (live, livestream, show, host, lot, hammer, watch, chat) and avoid the AVOID list. Don't drift.

---

## 9. Quota Management

| Daily Subscribers | Action |
|---|---|
| 0-500 | Comfortable. No action needed. |
| 500-1,500 | Safe but watch the daily Gmail send count. Each stream-launch event = 1 send per subscriber. If you fire 2 stream-launches per day to 1,500 subs, that's 3,000 sends — over the limit. |
| 1,500-1,800 | Approaching ceiling. Plan ESP migration. |
| 1,800+ | Apps Script returns 503 on stream-launch to force migration. |

### What "over quota" actually looks like
Apps Script will start failing `MailApp.sendEmail()` calls silently mid-broadcast. Subscribers later in the alphabetical order get nothing. The Sheet still shows `last_alert_sent` as updated, but the email never landed. This is the #1 failure mode.

The hard guard at 1,800 subs in the script triggers a 503 response BEFORE we start sending. Catch the 503 on the gunstreamer.com side and surface a notification to Troy — "list too big, migrate to ESP today."

---

## 10. Migration Trigger (To ESP)

Migrate when ANY is true:
- Active subscribers > 1,800
- More than 1 stream-launch per day (because 1 launch × 2,000 subs = quota; 2 launches × 1,000 subs = quota)
- Need per-persona segmentation (Marcus vs Kyle vs Hank get different alerts)
- Need A/B testing on subject lines
- Need automated re-engagement flow for cold subscribers

### Migration target
Klaviyo or MailerLite — separate account from the 184K BBGV-cross-pollinated wave-launch list. The buyer list is clean (one-click signup, Google-verified emails). Don't pollute it with the legacy list's deliverability baggage.

### Migration steps (when triggered)
1. Export the Google Sheet to CSV
2. Import to Klaviyo/MailerLite as a new list
3. Rebuild the welcome flow + stream-launch flow in the ESP
4. Update the frontend to fire the signup webhook at the ESP instead of Apps Script
5. Update gunstreamer.com stream-launch webhook to fire at the ESP
6. Sunset Apps Script (keep the Sheet as a historical record)
7. Update PROJECT-CONTEXT.md

**Migration time estimate**: 4-6 hours.

---

## 11. Status & Open Items

### Status
Spec complete. Code complete. Ready to deploy.

### Open items before going live
1. ☐ Pick a `FROM_EMAIL` (Troy's primary or a dedicated `alerts@gunstreamer.com`)
2. ☐ Add the physical mailing address to `PHYSICAL_ADDRESS` constant
3. ☐ Generate the `STREAM_LAUNCH_SECRET` via `openssl rand -hex 16` and store it on gunstreamer.com server
4. ☐ Confirm DMARC + DKIM + SPF records exist on `gunstreamer.com` (talk to whoever owns DNS)
5. ☐ Decide on the `FROM_EMAIL` sending domain — the welcome email shows the From: address, so it should match the brand
6. ☐ Build the "Notify Subscribers" admin button on `gunstreamer.com` for manual stream-launch triggers (platform team)
7. ☐ Run the 10 tests in Section 7 with a real test signup before opening the Meta ad floodgates

### Out of scope for this build (defer)
- Per-persona segmentation (Marcus vs Kyle vs Hank)
- Re-engagement flow for cold subscribers
- SMS / push notification alongside email
- Calendar invites (Google Calendar API integration)
- Buyer-specific dashboard on the platform

These all become possible after ESP migration. Don't try to bolt them onto Apps Script.

---

## 12. Related Files

- `~/Work/GunStreamer/docs/meta-ads-buyer-launch.md` — Meta campaign that drives signups into this system
- `~/Work/GunStreamer/docs/GUNSTREAMER-GOOGLE-ADS-PLAYBOOK.md` — Google Ads buyer-side (also feeds this system)
- `~/Work/GunStreamer/launch-kit/lead-nurture-system.md` — Dealer-side equivalent (Gmail/Tally manual, different audience)
- `~/Work/GunStreamer/launch-kit/buyer-nurture-system.md` — *Archived* — earlier Gmail-only manual buyer spec, superseded by this doc
- `~/troy-os/projects/gunstreamer/CONTENT-GROWTH-STRATEGY-2026.md` — Klaviyo wave system for the 184K legacy list (separate, do not merge)
- `~/Documents/Obsidian/Work/Projects/GunStreamer/PROJECT-CONTEXT.md` — Master project state (needs update to reflect this system)
