# BBGV "What's This Gun Worth?" — Full Technical Specification
**Version:** 1.0  
**Date:** 2026-02-23  
**Status:** Ready for Development

---

## Table of Contents

1. [Full Technical Spec](#1-full-technical-spec)
2. [BBGV Laravel API Requirements](#2-bbgv-laravel-api-requirements)
3. [Next.js Project Structure](#3-nextjs-project-structure)
4. [Klaviyo Integration Spec](#4-klaviyo-integration-spec)
5. [MVP Build Plan](#5-mvp-build-plan)
6. [Deployment Checklist](#6-deployment-checklist)

---

## 1. Full Technical Spec

### 1.1 Overview

A standalone Next.js 14+ (App Router) application hosted on Vercel at `value.bluebookofgunvalues.com`. Users enter gun details, declare intent, provide email, and receive a market value range. The tool captures leads into Klaviyo with intent-segmented properties, triggering the correct automation flow.

---

### 1.2 User Flow (Step-by-Step State Machine)

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER ARRIVES                             │
│              value.bluebookofgunvalues.com                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 1: GUN DETAILS  (page: /)                                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Make:      [Text input + autocomplete dropdown]         │   │
│  │  Model:     [Text input + autocomplete, filtered by Make]│   │
│  │  Condition: [Select: Excellent / Very Good / Good /      │   │
│  │                       Fair / Poor]                       │   │
│  └──────────────────────────────────────────────────────────┘   │
│  [→ Continue]                                                   │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 2: INTENT  (modal or inline card)                        │
│                                                                 │
│     "Are you buying or selling this gun?"                       │
│                                                                 │
│         [ 🛒 I'm Buying ]    [ 💰 I'm Selling ]                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 3: EMAIL GATE  (modal or inline card)                    │
│                                                                 │
│  "Where should we send your free valuation?"                    │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Email: [_________________________]                      │   │
│  └──────────────────────────────────────────────────────────┘   │
│  [→ Get My Valuation]                                           │
│                                                                 │
│  ← Fires: POST /api/capture (Klaviyo identify + event)         │
│  ← Fires: POST /api/valuate (BBGV Laravel API or fallback)     │
└────────────────────────────┬────────────────────────────────────┘
                             │
                  ┌──────────┴──────────┐
                  │                     │
                  ▼                     ▼
     ┌──────────────────┐   ┌──────────────────────┐
     │  BUYER RESULT    │   │  SELLER RESULT        │
     │                  │   │                       │
     │  $XXX – $XXX     │   │  $XXX – $XXX          │
     │                  │   │                       │
     │  "Is this a      │   │  "Get an InstaCash    │
     │   fair price?"   │   │   Offer in 24 hrs"   │
     │  context + tip   │   │  [CTA: ICO]           │
     │                  │   │                       │
     │  Soft BBGV       │   │  "Or list it on       │
     │  ecosystem CTA   │   │   consignment"        │
     │                  │   │  [CTA: Consignment]   │
     └──────────────────┘   └──────────────────────┘
```

---

### 1.3 Page & Component Architecture

```
app/
├── page.tsx                     ← Root: renders <ValuationWizard />
├── layout.tsx                   ← Root layout (fonts, meta, analytics)
├── globals.css

components/
├── wizard/
│   ├── ValuationWizard.tsx      ← State machine shell, step router
│   ├── StepGunDetails.tsx       ← Make/Model/Condition form
│   ├── StepIntent.tsx           ← Buying/Selling choice
│   ├── StepEmailGate.tsx        ← Email capture form
│   ├── StepResultBuyer.tsx      ← Buyer result card
│   └── StepResultSeller.tsx     ← Seller result card
├── ui/
│   ├── Autocomplete.tsx         ← Reusable combobox (Make, Model)
│   ├── ProgressBar.tsx          ← 4-step progress indicator
│   ├── Button.tsx               ← Primary/secondary variants
│   ├── Input.tsx                ← Styled text input
│   ├── Select.tsx               ← Styled select/dropdown
│   ├── Card.tsx                 ← Surface container
│   ├── Spinner.tsx              ← Loading state
│   └── ErrorAlert.tsx           ← Inline error display

app/api/
├── valuate/route.ts             ← Server: calls BBGV Laravel API → returns range
├── capture/route.ts             ← Server: sends data to Klaviyo
├── autocomplete/
│   ├── makes/route.ts           ← Returns makes list (cached)
│   └── models/route.ts          ← Returns models for a given make (cached)
```

---

### 1.4 State Management

**Approach:** Single `useWizardStore` Zustand store (lightweight, no boilerplate).  
No Redux. No context providers for wizard state.

```typescript
// store/wizardStore.ts
interface WizardState {
  // Form data
  make: string;
  model: string;
  condition: 'Excellent' | 'Very Good' | 'Good' | 'Fair' | 'Poor' | '';
  intent: 'buyer' | 'seller' | null;
  email: string;

  // Result
  valuationResult: ValuationResult | null;

  // UI state
  step: 1 | 2 | 3 | 4;
  isLoading: boolean;
  error: string | null;

  // Actions
  setField: (field: string, value: string) => void;
  setIntent: (intent: 'buyer' | 'seller') => void;
  setStep: (step: number) => void;
  submitEmailGate: () => Promise<void>;  // orchestrates /api/valuate + /api/capture
  reset: () => void;
}
```

**Step transitions:**
- Step 1 → 2: Make + Model filled + Condition selected
- Step 2 → 3: Intent selected
- Step 3 → 4: Email submitted, API calls complete
- Step 4: Terminal (result shown, CTAs available)

---

### 1.5 API Contracts (Next.js Internal Routes)

#### `POST /api/valuate`

Called server-side on email submission.

**Request:**
```json
{
  "make": "Glock",
  "model": "19",
  "condition": "Very Good"
}
```

**Response (success):**
```json
{
  "found": true,
  "value_low": 380,
  "value_high": 480,
  "category": "Pistol",
  "trend": "stable"
}
```

**Response (not found — fallback):**
```json
{
  "found": false,
  "value_low": null,
  "value_high": null,
  "category": null,
  "trend": null,
  "message": "We couldn't find an exact match. Our team will include estimated range in your email."
}
```

**Response (error):**
```json
{
  "error": "Valuation service unavailable. Please try again.",
  "code": "BBGV_API_ERROR"
}
```

#### `POST /api/capture`

Called server-side, immediately after /api/valuate resolves.

**Request:**
```json
{
  "email": "user@example.com",
  "make": "Glock",
  "model": "19",
  "condition": "Very Good",
  "intent": "seller",
  "value_low": 380,
  "value_high": 480
}
```

**Response:**
```json
{ "success": true }
```

#### `GET /api/autocomplete/makes?q=glo`

**Response:**
```json
{
  "makes": ["Glock", "Globe Firearms", "..."]
}
```

#### `GET /api/autocomplete/models?make=Glock&q=1`

**Response:**
```json
{
  "models": ["17", "19", "19X", "26", "43", "..."]
}
```

---

### 1.6 Error States & Fallbacks

| Error Scenario | Behavior |
|---|---|
| BBGV API down / timeout | Show result UI with `found: false` message. Klaviyo email still fires with null values. A manual follow-up email from Klaviyo flow covers the gap. |
| Gun not in database | `found: false` — show "Our experts will send your estimate within 24 hours." Triggers same Klaviyo lead capture. |
| Klaviyo capture fails | Log error server-side; do NOT block result display. Lead capture is best-effort, never blocks UX. |
| Autocomplete API slow | Debounce 300ms; show spinner in input; graceful empty state "No suggestions found." |
| Email validation fails | Client-side: basic regex. Server-side: reject non-email format with 400. |
| Network offline | Show persistent error banner with retry button. |

---

### 1.7 Performance Strategy (Core Web Vitals Green)

- **No heavy client JS on landing** — wizard is client component but shell page is server-rendered
- **Autocomplete debounce:** 300ms delay, minimum 2 chars before firing
- **Image optimization:** Next.js `<Image>` for any brand assets
- **Font:** `next/font` (no external font request blocking)
- **No third-party scripts in `<head>`** — Klaviyo tracking is server-side only
- **Caching:** Autocomplete makes/models routes cached at edge (`Cache-Control: s-maxage=3600`)
- **Bundle target:** Under 80KB JS initial load (wizard lazy-loads result step)

---

## 2. BBGV Laravel API Requirements

### 2.1 Endpoint to Build

```
POST https://api.bluebookofgunvalues.com/api/v1/valuation/estimate
```

Or if internal routing preferred:
```
POST https://www.bluebookofgunvalues.com/api/v1/valuation/estimate
```

### 2.2 Authentication

```
Header: X-API-Key: <BBGV_API_KEY>
```

- Generate a static API key scoped specifically to this endpoint
- Store in Vercel environment variables
- Laravel: validate via middleware, return 401 if missing/invalid
- Rate limit: 100 req/min per key (prevent abuse)

### 2.3 Request Shape

```json
{
  "make": "Glock",
  "model": "19",
  "condition": "Very Good"
}
```

**Validation rules (Laravel):**
```php
$request->validate([
  'make'      => 'required|string|max:100',
  'model'     => 'required|string|max:100',
  'condition' => 'required|in:Excellent,Very Good,Good,Fair,Poor',
]);
```

### 2.4 Response Shape

```json
{
  "found": true,
  "value_low": 380,
  "value_high": 480,
  "category": "Pistol",
  "trend": "stable"
}
```

**Field definitions:**

| Field | Type | Description |
|---|---|---|
| `found` | bool | Whether a matching record was found |
| `value_low` | int\|null | Lower bound of market value range in USD |
| `value_high` | int\|null | Upper bound of market value range in USD |
| `category` | string\|null | Gun category: Pistol, Rifle, Shotgun, Revolver, etc. |
| `trend` | string\|null | `"rising"`, `"stable"`, `"declining"` |

**Condition-to-multiplier mapping (if database stores single values):**

If BBGV's database stores a single "average" value, the Laravel API should apply these multipliers to derive low/high:

```
Excellent:  value_low = base * 0.95,  value_high = base * 1.10
Very Good:  value_low = base * 0.80,  value_high = base * 0.95
Good:       value_low = base * 0.65,  value_high = base * 0.80
Fair:       value_low = base * 0.45,  value_high = base * 0.65
Poor:       value_low = base * 0.25,  value_high = base * 0.45
```

### 2.5 Not Found Behavior

When gun is not in database, return HTTP 200 with:

```json
{
  "found": false,
  "value_low": null,
  "value_high": null,
  "category": null,
  "trend": null
}
```

**Do NOT return 404** — that would be treated as a network error by the Next.js app. Use `found: false` within a 200 to allow graceful fallback handling.

### 2.6 Autocomplete Endpoints (also needed in Laravel)

```
GET /api/v1/valuation/makes?q={search_term}
GET /api/v1/valuation/models?make={make}&q={search_term}
```

Both return arrays of strings. Min 2 chars required, limit 20 results, ordered by frequency in database.

**Makes response:**
```json
{ "makes": ["Glock", "Globe Firearms"] }
```

**Models response:**
```json
{ "models": ["17", "19", "19X", "26", "43", "43X"] }
```

Cache these at the Laravel level (Redis, 1 hour TTL). These will be hit frequently.

### 2.7 Laravel Route Definition

```php
// routes/api.php
Route::middleware('api.key')->prefix('v1/valuation')->group(function () {
    Route::post('/estimate', [ValuationController::class, 'estimate']);
    Route::get('/makes', [ValuationController::class, 'makes']);
    Route::get('/models', [ValuationController::class, 'models']);
});
```

---

## 3. Next.js Project Structure

### 3.1 Full File/Folder Structure

```
bbgv-valuation-tool/
├── .env.example
├── .env.local                    ← gitignored
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
│
├── app/
│   ├── layout.tsx               ← Root layout: fonts, meta tags, OG
│   ├── page.tsx                 ← Landing: hero + <ValuationWizard />
│   ├── globals.css
│   └── api/
│       ├── valuate/
│       │   └── route.ts         ← POST: proxy to BBGV Laravel API
│       ├── capture/
│       │   └── route.ts         ← POST: Klaviyo identify + track
│       └── autocomplete/
│           ├── makes/
│           │   └── route.ts     ← GET: proxies BBGV makes search
│           └── models/
│               └── route.ts     ← GET: proxies BBGV models search
│
├── components/
│   ├── wizard/
│   │   ├── ValuationWizard.tsx
│   │   ├── StepGunDetails.tsx
│   │   ├── StepIntent.tsx
│   │   ├── StepEmailGate.tsx
│   │   ├── StepResultBuyer.tsx
│   │   └── StepResultSeller.tsx
│   └── ui/
│       ├── Autocomplete.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── ErrorAlert.tsx
│       ├── Input.tsx
│       ├── ProgressBar.tsx
│       ├── Select.tsx
│       └── Spinner.tsx
│
├── store/
│   └── wizardStore.ts           ← Zustand state
│
├── lib/
│   ├── bbgv.ts                  ← BBGV API client (server-side only)
│   ├── klaviyo.ts               ← Klaviyo API client (server-side only)
│   ├── fallbackValuation.ts     ← MVP hardcoded range lookup
│   └── validation.ts            ← Shared Zod schemas
│
├── types/
│   └── index.ts                 ← Shared TypeScript interfaces
│
└── public/
    ├── favicon.ico
    ├── og-image.png             ← 1200×630 OG image
    └── logo.svg
```

---

### 3.2 package.json

```json
{
  "name": "bbgv-valuation-tool",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "14.2.x",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "zustand": "^4.5.0",
    "zod": "^3.22.4",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.x",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.4.2"
  }
}
```

**Why these dependencies:**
- `zustand` — minimal state, no boilerplate, perfect for wizard flow
- `zod` — runtime type validation on API boundaries
- `clsx` + `tailwind-merge` — conditional classname handling with Tailwind
- NO `axios` — native `fetch` is fine in Next.js 14+
- NO `react-hook-form` — wizard steps are simple enough for controlled inputs

---

### 3.3 Environment Variables (.env.example)

```bash
# .env.example — copy to .env.local for local dev

# ── BBGV Laravel API ──────────────────────────────────────
# Base URL of the BBGV backend (no trailing slash)
BBGV_API_BASE_URL=https://api.bluebookofgunvalues.com

# API key for BBGV valuation endpoint
BBGV_API_KEY=your_bbgv_api_key_here

# ── Klaviyo ───────────────────────────────────────────────
# Private API key from Klaviyo dashboard (Settings → API Keys)
KLAVIYO_PRIVATE_API_KEY=pk_xxxxxxxxxxxxxxxxxxxxxxxx

# Public Klaviyo list IDs (create separate lists in Klaviyo)
# For buyers: e.g., "BBGV Buyer Leads"
KLAVIYO_BUYER_LIST_ID=XXXXXX

# For sellers: e.g., "BBGV Seller Leads"
KLAVIYO_SELLER_LIST_ID=XXXXXX

# ── App Config ────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=https://value.bluebookofgunvalues.com

# ── Feature Flags ─────────────────────────────────────────
# Set to "true" to use fallback valuation instead of BBGV API
# Useful during MVP before BBGV API is built
USE_FALLBACK_VALUATION=false
```

**Notes:**
- Variables prefixed `NEXT_PUBLIC_` are exposed to the browser. All others are server-only.
- The Klaviyo private key and BBGV API key must NEVER be prefixed `NEXT_PUBLIC_`.

---

### 3.4 next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode for catching React issues in dev
  reactStrictMode: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

### 3.5 vercel.json

```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-store, max-age=0" }
      ]
    },
    {
      "source": "/api/autocomplete/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "s-maxage=3600, stale-while-revalidate=86400" }
      ]
    }
  ]
}
```

---

### 3.6 Key Implementation Files

#### `lib/bbgv.ts` (server-side only)

```typescript
const BBGV_BASE = process.env.BBGV_API_BASE_URL!;
const BBGV_KEY  = process.env.BBGV_API_KEY!;

export interface ValuationResult {
  found: boolean;
  value_low: number | null;
  value_high: number | null;
  category: string | null;
  trend: string | null;
}

export async function getValuation(
  make: string,
  model: string,
  condition: string
): Promise<ValuationResult> {
  const res = await fetch(`${BBGV_BASE}/api/v1/valuation/estimate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': BBGV_KEY,
    },
    body: JSON.stringify({ make, model, condition }),
    signal: AbortSignal.timeout(8000), // 8 second timeout
  });

  if (!res.ok) {
    throw new Error(`BBGV API error: ${res.status}`);
  }

  return res.json();
}

export async function getMakes(q: string): Promise<string[]> {
  const res = await fetch(
    `${BBGV_BASE}/api/v1/valuation/makes?q=${encodeURIComponent(q)}`,
    { headers: { 'X-API-Key': BBGV_KEY }, next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data.makes ?? [];
}

export async function getModels(make: string, q: string): Promise<string[]> {
  const res = await fetch(
    `${BBGV_BASE}/api/v1/valuation/models?make=${encodeURIComponent(make)}&q=${encodeURIComponent(q)}`,
    { headers: { 'X-API-Key': BBGV_KEY }, next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data.models ?? [];
}
```

#### `lib/fallbackValuation.ts` (MVP fallback)

```typescript
// Hardcoded fallback when BBGV API is not yet available or gun not found.
// Based on rough MSRP category averages. Replace with real data post-MVP.

const CATEGORY_RANGES: Record<string, [number, number]> = {
  'GLOCK':        [350, 550],
  'SMITH & WESSON': [300, 800],
  'RUGER':        [300, 700],
  'SIG SAUER':    [400, 900],
  'REMINGTON':    [200, 600],
  'MOSSBERG':     [250, 500],
  'WINCHESTER':   [300, 700],
  'DEFAULT':      [250, 750],
};

const CONDITION_MULTIPLIERS: Record<string, [number, number]> = {
  'Excellent': [0.95, 1.10],
  'Very Good': [0.80, 0.95],
  'Good':      [0.65, 0.80],
  'Fair':      [0.45, 0.65],
  'Poor':      [0.25, 0.45],
};

export function getFallbackValuation(make: string, condition: string) {
  const makeUpper = make.toUpperCase();
  const [base_low, base_high] = CATEGORY_RANGES[makeUpper] ?? CATEGORY_RANGES['DEFAULT'];
  const [mult_low, mult_high] = CONDITION_MULTIPLIERS[condition] ?? [0.65, 0.80];

  return {
    found: false, // always false for fallback
    value_low: Math.round(base_low * mult_low),
    value_high: Math.round(base_high * mult_high),
    category: null,
    trend: null,
  };
}
```

#### `app/api/valuate/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getValuation } from '@/lib/bbgv';
import { getFallbackValuation } from '@/lib/fallbackValuation';
import { z } from 'zod';

const Schema = z.object({
  make:      z.string().min(1).max(100),
  model:     z.string().min(1).max(100),
  condition: z.enum(['Excellent', 'Very Good', 'Good', 'Fair', 'Poor']),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = Schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { make, model, condition } = parsed.data;
  const useFallback = process.env.USE_FALLBACK_VALUATION === 'true';

  try {
    if (useFallback) {
      return NextResponse.json(getFallbackValuation(make, condition));
    }

    const result = await getValuation(make, model, condition);

    // If found: false in BBGV, supplement with fallback range
    if (!result.found) {
      const fallback = getFallbackValuation(make, condition);
      return NextResponse.json({
        ...result,
        value_low: fallback.value_low,
        value_high: fallback.value_high,
      });
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error('[/api/valuate] Error:', err);
    // Return fallback rather than error — never block the lead
    return NextResponse.json(getFallbackValuation(make, condition));
  }
}
```

---

## 4. Klaviyo Integration Spec

### 4.1 API Version

Use **Klaviyo REST API v2024-02-15** (latest stable).  
Docs: https://developers.klaviyo.com/en/reference/api_overview

Use the **Server-side (private) API key** for all calls. Never expose to browser.

---

### 4.2 Flow: What Happens on Email Submit

```
User submits email gate
        │
        ├─► POST /api/valuate → get valuation
        │
        └─► POST /api/capture
                │
                ├─► Klaviyo: Create/Update Profile (identify)
                │       Set profile properties
                │
                ├─► Klaviyo: Add to List
                │       Buyer → KLAVIYO_BUYER_LIST_ID
                │       Seller → KLAVIYO_SELLER_LIST_ID
                │
                └─► Klaviyo: Track Event "ValuationRequested"
                        + "BuyerLeadCaptured" OR "SellerLeadCaptured"
```

---

### 4.3 Klaviyo API Calls (Exact Payloads)

#### Call 1: Create or Update Profile

```
POST https://a.klaviyo.com/api/profiles/
Headers:
  Authorization: Klaviyo-API-Key {KLAVIYO_PRIVATE_API_KEY}
  Content-Type: application/json
  revision: 2024-02-15
```

```json
{
  "data": {
    "type": "profile",
    "attributes": {
      "email": "user@example.com",
      "properties": {
        "bbgv_intent":           "seller",
        "bbgv_last_make":        "Glock",
        "bbgv_last_model":       "19",
        "bbgv_last_condition":   "Very Good",
        "bbgv_value_low":        380,
        "bbgv_value_high":       480,
        "bbgv_valuation_date":   "2026-02-23T15:30:00Z",
        "bbgv_lead_source":      "valuation_tool"
      }
    }
  }
}
```

**Note:** Prefix all custom properties with `bbgv_` to avoid colliding with other Klaviyo properties.

**Response:** 200 (existing profile updated) or 201 (new profile created). Extract `data.id` (profile ID) for subsequent calls.

---

#### Call 2: Add Profile to Correct List

```
POST https://a.klaviyo.com/api/lists/{LIST_ID}/relationships/profiles/
Headers:
  Authorization: Klaviyo-API-Key {KLAVIYO_PRIVATE_API_KEY}
  Content-Type: application/json
  revision: 2024-02-15
```

```json
{
  "data": [
    {
      "type": "profile",
      "id": "{profile_id_from_call_1}"
    }
  ]
}
```

- `LIST_ID` = `KLAVIYO_BUYER_LIST_ID` if `intent === 'buyer'`
- `LIST_ID` = `KLAVIYO_SELLER_LIST_ID` if `intent === 'seller'`

---

#### Call 3: Track Event — "ValuationRequested"

```
POST https://a.klaviyo.com/api/events/
Headers:
  Authorization: Klaviyo-API-Key {KLAVIYO_PRIVATE_API_KEY}
  Content-Type: application/json
  revision: 2024-02-15
```

```json
{
  "data": {
    "type": "event",
    "attributes": {
      "metric": {
        "data": {
          "type": "metric",
          "attributes": { "name": "ValuationRequested" }
        }
      },
      "profile": {
        "data": {
          "type": "profile",
          "attributes": { "email": "user@example.com" }
        }
      },
      "properties": {
        "make":       "Glock",
        "model":      "19",
        "condition":  "Very Good",
        "intent":     "seller",
        "value_low":  380,
        "value_high": 480,
        "found":      true,
        "trend":      "stable",
        "category":   "Pistol"
      },
      "time": "2026-02-23T15:30:00Z"
    }
  }
}
```

---

#### Call 4a (Buyer): Track Event — "BuyerLeadCaptured"

Same structure as above, `"name": "BuyerLeadCaptured"`, same properties.

#### Call 4b (Seller): Track Event — "SellerLeadCaptured"

Same structure, `"name": "SellerLeadCaptured"`, same properties.

---

#### Call 5 (Optional — fire from browser on CTA click): Track Event — "ICOOfferClicked"

```json
{
  "data": {
    "type": "event",
    "attributes": {
      "metric": {
        "data": { "type": "metric", "attributes": { "name": "ICOOfferClicked" } }
      },
      "profile": {
        "data": { "type": "profile", "attributes": { "email": "user@example.com" } }
      },
      "properties": {
        "make": "Glock",
        "model": "19",
        "value_high": 480
      }
    }
  }
}
```

**Implementation note for ICOOfferClicked / ConsignmentClicked:**  
These are triggered from the client. Create a small API route `/api/track-cta` that accepts `{ email, event, properties }` and proxies to Klaviyo server-side. Never expose Klaviyo private key to browser.

---

### 4.4 Profile Properties Reference

| Property | Type | Example | Purpose |
|---|---|---|---|
| `bbgv_intent` | string | `"seller"` | Segments buyer vs seller flows |
| `bbgv_last_make` | string | `"Glock"` | Personalization in emails |
| `bbgv_last_model` | string | `"19"` | Personalization in emails |
| `bbgv_last_condition` | string | `"Very Good"` | Context in emails |
| `bbgv_value_low` | number | `380` | Show in email template |
| `bbgv_value_high` | number | `480` | Show in email template |
| `bbgv_valuation_date` | datetime | ISO 8601 | Flow timing reference |
| `bbgv_lead_source` | string | `"valuation_tool"` | Attribution |

---

### 4.5 Klaviyo Flow Triggers (How to Build in Klaviyo Dashboard)

**Buyer Flow:**
- Trigger: **"Joined List"** where list = `BBGV Buyer Leads`
- OR trigger: **Metric event** `BuyerLeadCaptured`
- Sequence: Welcome → "Is this a fair price?" education → BBGV subscription CTA → nurture

**Seller Flow:**
- Trigger: **"Joined List"** where list = `BBGV Seller Leads`
- OR trigger: **Metric event** `SellerLeadCaptured`
- Sequence: Valuation delivery → InstaCash offer → consignment offer → nurture

**Recommendation:** Use the list membership trigger (not the metric event trigger) for reliability. Both methods work but list-based flows are easier to manage in Klaviyo's visual builder and easier to suppress/unsuppress.

---

### 4.6 `lib/klaviyo.ts`

```typescript
const KLAVIYO_KEY = process.env.KLAVIYO_PRIVATE_API_KEY!;
const KLAVIYO_API = 'https://a.klaviyo.com/api';
const REVISION    = '2024-02-15';

const kHeaders = {
  'Authorization': `Klaviyo-API-Key ${KLAVIYO_KEY}`,
  'Content-Type':  'application/json',
  'revision':      REVISION,
};

export async function upsertProfile(data: {
  email: string;
  intent: string;
  make: string;
  model: string;
  condition: string;
  value_low: number | null;
  value_high: number | null;
}): Promise<string | null> {
  const res = await fetch(`${KLAVIYO_API}/profiles/`, {
    method: 'POST',
    headers: kHeaders,
    body: JSON.stringify({
      data: {
        type: 'profile',
        attributes: {
          email: data.email,
          properties: {
            bbgv_intent:         data.intent,
            bbgv_last_make:      data.make,
            bbgv_last_model:     data.model,
            bbgv_last_condition: data.condition,
            bbgv_value_low:      data.value_low,
            bbgv_value_high:     data.value_high,
            bbgv_valuation_date: new Date().toISOString(),
            bbgv_lead_source:    'valuation_tool',
          },
        },
      },
    }),
  });

  // 201 = created, 200 = updated, 409 = conflict (profile exists, update it)
  if (res.status === 409) {
    // Extract existing profile ID from conflict response
    const conflictData = await res.json();
    return conflictData?.errors?.[0]?.meta?.duplicate_profile_id ?? null;
  }

  const body = await res.json();
  return body?.data?.id ?? null;
}

export async function addToList(profileId: string, listId: string): Promise<void> {
  await fetch(`${KLAVIYO_API}/lists/${listId}/relationships/profiles/`, {
    method: 'POST',
    headers: kHeaders,
    body: JSON.stringify({
      data: [{ type: 'profile', id: profileId }],
    }),
  });
}

export async function trackEvent(data: {
  email: string;
  eventName: string;
  properties: Record<string, unknown>;
}): Promise<void> {
  await fetch(`${KLAVIYO_API}/events/`, {
    method: 'POST',
    headers: kHeaders,
    body: JSON.stringify({
      data: {
        type: 'event',
        attributes: {
          metric: { data: { type: 'metric', attributes: { name: data.eventName } } },
          profile: { data: { type: 'profile', attributes: { email: data.email } } },
          properties: data.properties,
          time: new Date().toISOString(),
        },
      },
    }),
  });
}
```

---

## 5. MVP Build Plan

### 5.1 MVP vs Full Build Definition

**MVP Live** = A working tool deployed at the subdomain where:
- User can enter Make, Model, Condition (text inputs, no autocomplete)
- Declares intent
- Provides email
- Sees a value range (from fallback lookup, not BBGV database)
- Email is captured in Klaviyo with correct properties + list assignment
- Buyer and seller result pages render correctly with CTAs

**Full Build** = Everything above plus:
- Autocomplete on Make and Model from BBGV database
- Real valuation data from BBGV Laravel API
- ICOOfferClicked / ConsignmentClicked tracking events
- Polished mobile UI / brand-matched design
- Core Web Vitals passing in Lighthouse
- Analytics (Vercel Analytics or GA4)

---

### 5.2 Ordered Task List (0 → Deployed)

**PHASE 1: Scaffold (Day 1)**

| # | Task | Complexity | Notes |
|---|---|---|---|
| 1 | `npx create-next-app@latest` with TypeScript + Tailwind | S | 10 min |
| 2 | Create GitHub repo, push initial scaffold | S | 5 min |
| 3 | Connect Vercel to GitHub repo (auto-deploy on push) | S | 5 min |
| 4 | Set `value.bluebookofgunvalues.com` DNS → Vercel (can point to placeholder page) | S | 10 min + DNS TTL |
| 5 | Create `.env.example`, add real values to Vercel dashboard | S | 15 min |

**PHASE 2: Wizard UI (Day 1–2)**

| # | Task | Complexity | Notes |
|---|---|---|---|
| 6 | Build `ValuationWizard.tsx` shell with step state | M | Zustand store setup |
| 7 | Build `StepGunDetails.tsx` — plain text inputs (no autocomplete yet) | S | |
| 8 | Build `StepIntent.tsx` — two large buttons | S | |
| 9 | Build `StepEmailGate.tsx` — email input + submit | S | |
| 10 | Build `StepResultBuyer.tsx` — value range + context + CTA | S | Hardcode CTA URLs for now |
| 11 | Build `StepResultSeller.tsx` — value range + ICO CTA + consignment CTA | S | Hardcode CTA URLs for now |
| 12 | Add `ProgressBar.tsx` | S | |
| 13 | Mobile-first Tailwind styling pass | M | |

**PHASE 3: API Routes + Logic (Day 2–3)**

| # | Task | Complexity | Notes |
|---|---|---|---|
| 14 | Build `/api/valuate` route with fallback valuation only | S | `USE_FALLBACK_VALUATION=true` for MVP |
| 15 | Build `lib/klaviyo.ts` — upsertProfile + addToList + trackEvent | M | Test against real Klaviyo sandbox |
| 16 | Build `/api/capture` route | M | Wire together klaviyo.ts calls |
| 17 | Wire `StepEmailGate` → `/api/valuate` + `/api/capture` → result step | M | Error handling, loading states |
| 18 | Test full flow end-to-end locally | S | Verify Klaviyo receives lead |

**PHASE 4: QA + Launch (Day 3–4)**

| # | Task | Complexity | Notes |
|---|---|---|---|
| 19 | Verify Klaviyo: buyer lands in buyer list, seller in seller list | S | |
| 20 | Verify Klaviyo: all profile properties set correctly | S | |
| 21 | Verify Klaviyo: events appearing in Metrics | S | |
| 22 | Mobile QA on real iPhone (Safari + Chrome) | S | |
| 23 | Test error states: Klaviyo down, API timeout | S | |
| 24 | Set up Klaviyo buyer flow sequence (minimum: welcome + 1 follow-up email) | M | |
| 25 | Set up Klaviyo seller flow sequence (minimum: valuation delivery email + ICO follow-up) | M | |
| 26 | Add OG meta tags for social sharing | S | |
| 27 | Deploy to production subdomain, smoke test | S | |

**PHASE 5: Full Build (Post-MVP)**

| # | Task | Complexity | Notes |
|---|---|---|---|
| 28 | BBGV: build `/api/v1/valuation/estimate` endpoint in Laravel | L | Depends on BBGV team |
| 29 | BBGV: build autocomplete makes/models endpoints | M | |
| 30 | Swap `USE_FALLBACK_VALUATION=false`, test with real data | S | |
| 31 | Build `Autocomplete.tsx` component with debounce | M | |
| 32 | Wire autocomplete to `/api/autocomplete/makes` + `/api/autocomplete/models` | M | |
| 33 | Add ICOOfferClicked / ConsignmentClicked tracking | S | Via `/api/track-cta` |
| 34 | Lighthouse audit + CWV fixes | M | |
| 35 | Analytics setup (Vercel Analytics or GA4) | S | |

---

### 5.3 What's Hardcoded/Faked for MVP

| Thing | MVP Approach | Full Build |
|---|---|---|
| Valuation data | `lib/fallbackValuation.ts` hardcoded ranges | Real BBGV Laravel API |
| Make/Model input | Plain text inputs | Autocomplete from BBGV database |
| ICO CTA URL | Hardcoded link | Dynamic with pre-filled form |
| Consignment CTA URL | Hardcoded link | Dynamic |
| Email content | Klaviyo templates (build manually) | Can auto-populate value range |
| Brand design | Clean Tailwind, BBGV colors | Pixel-perfect brand match |

---

## 6. Deployment Checklist

### 6.1 GitHub Repo Setup

```bash
# Initialize
npx create-next-app@latest bbgv-valuation-tool \
  --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*"

cd bbgv-valuation-tool

# Create GitHub repo (via gh CLI or GitHub UI)
gh repo create bbgv-valuation-tool --private --source=. --push

# Add .gitignore entry for .env.local (already in Next.js default .gitignore)
```

**Recommended repo settings:**
- Visibility: **Private** (the Klaviyo key and BBGV API key must not be public)
- Default branch: `main`
- Enable branch protection on `main` (require PR review, optional for solo dev)
- Enable Vercel GitHub integration (auto-deploy PRs as preview deploys)

---

### 6.2 Vercel Project Config

1. Go to https://vercel.com/new
2. Import `bbgv-valuation-tool` GitHub repo
3. Framework: **Next.js** (auto-detected)
4. Root directory: `.` (repo root)
5. Build command: `next build` (default)
6. Output directory: `.next` (default)
7. Node.js version: **20.x** (set in Vercel project settings)

---

### 6.3 Environment Variables to Set in Vercel Dashboard

Navigate to: Vercel Project → Settings → Environment Variables

| Variable | Value | Environments |
|---|---|---|
| `BBGV_API_BASE_URL` | `https://api.bluebookofgunvalues.com` | Production, Preview, Development |
| `BBGV_API_KEY` | `<generate secure key>` | Production, Preview, Development |
| `KLAVIYO_PRIVATE_API_KEY` | `pk_xxxxxxxxx` | Production, Preview, Development |
| `KLAVIYO_BUYER_LIST_ID` | `XXXXXX` | Production, Preview, Development |
| `KLAVIYO_SELLER_LIST_ID` | `XXXXXX` | Production, Preview, Development |
| `NEXT_PUBLIC_APP_URL` | `https://value.bluebookofgunvalues.com` | Production only |
| `NEXT_PUBLIC_APP_URL` | `https://preview.bbgv-tool.vercel.app` | Preview only |
| `USE_FALLBACK_VALUATION` | `true` (MVP) → `false` (full build) | Production, Preview |

**Security note:** Rotate BBGV API key and Klaviyo key quarterly. Store originals in a password manager (1Password, etc.).

---

### 6.4 DNS / Subdomain Setup

**Target:** `value.bluebookofgunvalues.com` → Vercel

**Steps:**

1. In Vercel dashboard: Project → Settings → Domains → Add `value.bluebookofgunvalues.com`
2. Vercel will provide one of:
   - **CNAME:** `cname.vercel-dns.com` (recommended if BBGV uses a CNAME-capable DNS)
   - **A record:** Vercel's IP (if root domain, but for subdomain use CNAME)
3. In BBGV's DNS provider (wherever `bluebookofgunvalues.com` is managed):
   ```
   Type:  CNAME
   Name:  value
   Value: cname.vercel-dns.com
   TTL:   3600 (or "Auto")
   ```
4. Wait for DNS propagation (typically 5–30 minutes, up to 48 hours in worst case)
5. Vercel automatically provisions SSL certificate via Let's Encrypt

**Verification:**
```bash
dig value.bluebookofgunvalues.com CNAME
# Should return cname.vercel-dns.com

curl -I https://value.bluebookofgunvalues.com
# Should return HTTP 200
```

---

### 6.5 Pre-Launch Verification Checklist

**Functional Tests:**
- [ ] Full wizard flow completes without errors on desktop Chrome
- [ ] Full wizard flow completes without errors on mobile Safari (iOS)
- [ ] Full wizard flow completes without errors on mobile Chrome (Android)
- [ ] Buyer path: leads appear in `BBGV Buyer Leads` Klaviyo list
- [ ] Seller path: leads appear in `BBGV Seller Leads` Klaviyo list
- [ ] All Klaviyo profile properties set correctly (check a test profile)
- [ ] `ValuationRequested` event visible in Klaviyo Metrics
- [ ] `BuyerLeadCaptured` event visible in Klaviyo Metrics
- [ ] `SellerLeadCaptured` event visible in Klaviyo Metrics
- [ ] ICO CTA link goes to correct URL
- [ ] Consignment CTA link goes to correct URL
- [ ] Error state: disable fallback + kill API → verify graceful fallback to hardcoded ranges
- [ ] Test with invalid email → validation error shows
- [ ] Test with empty fields → continue button disabled

**Performance Tests:**
- [ ] Lighthouse score ≥90 on Mobile (run at PageSpeed Insights)
- [ ] No layout shift on mobile (CLS < 0.1)
- [ ] LCP < 2.5s on mobile 4G
- [ ] SSL/TLS: A+ rating on SSL Labs

**SEO/Social:**
- [ ] OG image renders correctly when URL shared on iMessage/Twitter
- [ ] Page title: "What's This Gun Worth? — Free Gun Valuation Tool | Blue Book"
- [ ] Meta description set

**Klaviyo Flow Tests:**
- [ ] Submit a buyer lead → confirm welcome email arrives within 5 minutes
- [ ] Submit a seller lead → confirm valuation delivery email arrives within 5 minutes
- [ ] Verify email contains correct make/model/value range (pulled from profile properties)

**Security:**
- [ ] BBGV_API_KEY not visible in browser DevTools → Network tab
- [ ] KLAVIYO_PRIVATE_API_KEY not visible in browser DevTools → Network tab
- [ ] No sensitive env vars prefixed with NEXT_PUBLIC_
- [ ] API routes return 400 for malformed input, not 500

---

## Appendix: Klaviyo Setup Checklist

Before the tool goes live, complete these steps in the Klaviyo dashboard:

1. **Create Lists:**
   - `BBGV Buyer Leads` → note the List ID
   - `BBGV Seller Leads` → note the List ID
   - Enter both IDs into Vercel environment variables

2. **Create Profile Properties** (optional — they'll auto-create on first event, but pre-creating allows template editor autocomplete):
   - `bbgv_intent`, `bbgv_last_make`, `bbgv_last_model`, `bbgv_last_condition`
   - `bbgv_value_low`, `bbgv_value_high`, `bbgv_valuation_date`, `bbgv_lead_source`

3. **Create Flows:**
   - Buyer Flow: trigger = Joined List `BBGV Buyer Leads`
   - Seller Flow: trigger = Joined List `BBGV Seller Leads`

4. **Buyer Flow Email 1 (immediate):**
   - Subject: "Here's what that {{ bbgv_last_make }} {{ bbgv_last_model }} is worth"
   - Body: Show `{{ bbgv_value_low }}` – `{{ bbgv_value_high }}` range
   - CTA: "Browse Blue Book Listings"

5. **Seller Flow Email 1 (immediate):**
   - Subject: "Your {{ bbgv_last_make }} {{ bbgv_last_model }} is worth ${{ bbgv_value_low }}–${{ bbgv_value_high }}"
   - Body: Value range + "Get an InstaCash Offer in 24 hours"
   - CTA: ICO link

6. **Verify API Key:** Settings → API Keys → confirm private key matches Vercel env var

---

## Appendix: CTA URLs (To Be Confirmed)

| CTA | URL Placeholder |
|---|---|
| ICO (InstaCash Offer) | `https://www.bluebookofgunvalues.com/instacash` |
| Consignment | `https://www.bluebookofgunvalues.com/consignment` |
| BBGV Subscription | `https://www.bluebookofgunvalues.com/subscribe` |

These should be confirmed with the BBGV team and hardcoded during MVP. Post-MVP, these can be made dynamic (pre-filling make/model in destination forms via URL params).

---

*End of Specification*  
*Document is authoritative. A developer can execute from Task #1 with no additional questions assuming access to Klaviyo, Vercel, GitHub, and coordination with the BBGV Laravel developer for Phase 5 endpoints.*
