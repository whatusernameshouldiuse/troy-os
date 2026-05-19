# BBGV Klaviyo Lists — Registry & Onboarding Consent Routing

> **Last Updated:** 2026-05-18
> **API key + private credentials live in:** Obsidian `Projects/BBGV/00 Home/PROJECT-CONTEXT.md` (not committed)
> **Klaviyo account:** Blue Book Publications (public key `SMvTcV`)

---

## List Registry

| List ID | Name | Purpose | Opt-in |
|---------|------|---------|--------|
| `YjVgTd` | Paid Subscribers | ~9,800 — ALWAYS include in newsletter | — |
| `TJZRAD` | Beta Invite | Warm-up drip (triggers re-engagement flow) | — |
| `T8cw5C` | Engaged Re-engaged | Flow graduates → add to newsletter | — |
| `XCzkWg` | Sunset - No Engagement | Stop emailing | — |
| `WUV3Yf` | Blog Subscribers | New signups from blog CTAs | — |
| `V8T7c2` | The Signal | Default catch-all for step-1 onboarding consent. Weekly newsletter. | single |
| `Wmwmd2` | BBGV Free Users - Single Valuation | Step-2 `user_type=single-gun-value` segment | single |
| `T9MRLv` | BBGV Free Users - Enthusiast | Step-2 `user_type=enthusiast` segment | single |
| `UTcynX` | BBGV FFL Dealers | Step-2 `user_type=ffl-dealer` segment | single |
| `RYr2wv` | BBGV Abandoned Onboarding | Triggers abandoned flow. Add on step 1, remove on `Completed Onboarding`. | single |

---

## Onboarding Consent Routing (live as of 2026-05-18 build)

### Step 1 — Email + consent checkbox (pre-checked)

If `marketing_consent === true`:
1. Subscribe to `V8T7c2` (Signal) — default newsletter list
2. Subscribe to `RYr2wv` (Abandoned Onboarding) — triggers the abandoned flow
3. Fire `Started Onboarding` Klaviyo event with: `email`, `user_type` (null), `step_reached: 1`, `consent_marketing`, `consent_source`, `consent_timestamp`, `consent_ip`, `consent_text_shown`

### Step 2 — `user_type` picker

If user picks a `user_type`, additionally subscribe to the matching segment list (additive, do NOT remove from Signal/Abandoned):

| user_type | List ID |
|---|---|
| `single-gun-value` | `Wmwmd2` |
| `enthusiast` | `T9MRLv` |
| `ffl-dealer` | `UTcynX` |

Skip = stays only on Signal + Abandoned.

### Completion (step 4)

Fire `Completed Onboarding` Klaviyo event. Flow filter on `RYr2wv` exits the abandoned flow.

### Suppression handling

Before any subscribe call, check the profile's `email_marketing_consent` status. If `suppressed`, **do not** resubscribe. Surface a re-engagement UI in-app instead. The 291K suppressed history matters more than the marginal opt-in.

---

## Dev `.env` block

```env
KLAVIYO_LIST_SIGNAL=V8T7c2
KLAVIYO_LIST_FREE_SINGLE=Wmwmd2
KLAVIYO_LIST_FREE_ENTHUSIAST=T9MRLv
KLAVIYO_LIST_FFL_DEALER=UTcynX
KLAVIYO_LIST_ABANDONED_ONBOARDING=RYr2wv
```

`config/klaviyo.php`:
```php
return [
    'api_key' => env('KLAVIYO_PRIVATE_API_KEY'),
    'lists' => [
        'signal'              => env('KLAVIYO_LIST_SIGNAL', 'V8T7c2'),
        'free_single_value'   => env('KLAVIYO_LIST_FREE_SINGLE', 'Wmwmd2'),
        'free_enthusiast'     => env('KLAVIYO_LIST_FREE_ENTHUSIAST', 'T9MRLv'),
        'ffl_dealer'          => env('KLAVIYO_LIST_FFL_DEALER', 'UTcynX'),
        'abandoned_onboarding'=> env('KLAVIYO_LIST_ABANDONED_ONBOARDING', 'RYr2wv'),
    ],
];
```

---

## Proof-of-consent profile properties

Write these to the Klaviyo profile on every consent-granting submission:

```
consent_marketing       true | false
consent_source          onboarding-step-1 | onboarding-step-2
consent_timestamp       ISO 8601
consent_ip              request IP at consent time
consent_text_shown      exact string of the checkbox label
user_type               single-gun-value | enthusiast | ffl-dealer (when known)
onboarding_started_at   ISO 8601
onboarding_step_reached 1 | 2 | 3 | 4
onboarding_completed_at ISO 8601 (only on completion)
```

Defense-in-depth against future abuse-desk or compliance challenges.
