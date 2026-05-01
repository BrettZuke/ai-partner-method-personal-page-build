# Make Scenario 1 — Typeform Lead Router
## Typeform → Kit + Close CRM + Retell

**Trigger form:** `<your-typeform-url>` (main application)

---

## WHAT THIS DOES
When someone submits the application form:
1. Tags them in Kit + triggers the right email sequence
2. Creates them as a lead in Close CRM with the right status
3. Waits 20 minutes
4. Fires the correct Retell agent to call them

---

## BUILD INSTRUCTIONS (step by step in Make)

### MODULE 1 — Typeform Trigger
- App: **Typeform**
- Trigger: **Watch Responses**
- Form ID: `<your-form-id>`
- Click "Determine where to start" → From now on

---

### MODULE 2 — Router (splits into 3 paths)
- App: **Router** (built into Make — the fork icon)
- This splits based on whether the submission was complete or partial, and HT vs LT

**How to detect partial submit:**
Typeform sends a webhook for partial submissions if you enable it.
Go to Typeform → Connect → Webhooks → enable "Partial submissions"
Partial submissions have `event_type = "partial_response"` in the payload.

**How to detect HT vs LT:**
This depends on your form question. Which question in `<your-form-id>` determines if someone is HT or LT? (e.g. "What is your monthly revenue?" — if >£X = HT)
→ Add that field name here once confirmed.

For now, assume:
- `event_type = "partial_response"` → Path C (Partial)
- Answer to qualifying question meets HT threshold → Path A (HT)
- Does not meet HT threshold → Path B (LT)

---

### PATH A — HT (completed, qualifies for high ticket)

**Module A1 — Kit: Add Subscriber**
- App: **ConvertKit (Kit)**
- Action: **Add Subscriber to a Form**
- API Key: `<YOUR_KIT_API_KEY>`
- Email: `{{1.answers.email}}` (map from Typeform)
- First Name: `{{1.answers.first_name}}`

**Module A2 — Kit: Add Tag**
- App: **HTTP** (use HTTP module for tag since Kit V3 needs it)
- Method: POST
- URL: `https://api.convertkit.com/v3/tags/<TAG_ID>/subscribe`
- Body (JSON):
```json
{
  "api_secret": "<YOUR_KIT_API_SECRET>",
  "email": "{{1.answers.email}}"
}
```
(Tag ID <TAG_ID> = "HT (Typeform)")

**Module A3 — Kit: Trigger Sequence**
- App: **HTTP**
- Method: POST
- URL: `https://api.convertkit.com/v3/sequences/<SEQUENCE_ID>/subscribe`
- Body (JSON):
```json
{
  "api_secret": "<YOUR_KIT_API_SECRET>",
  "email": "{{1.answers.email}}"
}
```
(Sequence <SEQUENCE_ID> = "HT (Typeform)")

**Module A4 — Close CRM: Create Lead** ← add once Close API key is available
- Status: "HT - Applied, No Call Booked"
- Source: "Typeform Application"

**Module A5 — Sleep**
- App: **Sleep**
- Duration: 20 minutes

**Module A6 — Retell: Trigger Call**
- App: **HTTP**
- Method: POST
- URL: `https://api.retellai.com/v2/create-phone-call`
- Headers: `Authorization: Bearer <YOUR_RETELL_API_KEY>`
- Body (JSON):
```json
{
  "from_number": "{{RETELL_FROM_NUMBER}}",
  "to_number": "{{1.answers.phone}}",
  "agent_id": "<YOUR_RETELL_AGENT_ID>",
  "retell_llm_dynamic_variables": {
    "prospect_name": "{{1.answers.first_name}}"
  }
}
```

---

### PATH B — LT (completed, low ticket)

Same as Path A but:
- Tag ID: `<LT_TAG_ID>` ("LT (Typeform)")
- Sequence ID: `<LT_SEQUENCE_ID>` ("LT (Typeform)")
- Close status: "LT - Applied"
- Retell agent: `<YOUR_LT_RETELL_AGENT_ID>`

---

### PATH C — Partial Submit

**Module C1 — Kit: Add Tag**
- Tag ID: `<PARTIAL_TAG_ID>` ("Partial Submit (Typeform)")

**Module C2 — Kit: Trigger Sequence**
- Sequence ID: `<PARTIAL_SEQUENCE_ID>` ("Partial Submit (Typeform)")

**Module C3 — Close CRM: Create Lead**
- Status: "Partial - Incomplete Application"

**Module C4 — Sleep: 20 minutes**

**Module C5 — Retell: Trigger Call**
- Agent: `<YOUR_PARTIAL_RETELL_AGENT_ID>`

---

## NOTES
- Phone number field: map `{{1.answers.phone_number}}` — check exact field name in Typeform response
- Make sure Typeform partial submission webhook is enabled (Typeform → Connect → Webhooks)
- Once Close API key is added, add Close modules in each path
- Test with a real submission before going live — use a test phone number first

---

## FORMS REFERENCE
| Form | ID | Purpose |
|------|----|---------|
| Main Application | `<your-form-id>` | All leads — routes to HT/LT/Partial |
| HT Onboarding | `<HT_ONBOARDING_FORM_ID>` | After they buy high ticket |
| LT Onboarding | `<LT_ONBOARDING_FORM_ID>` | After they buy low ticket community |
| Waitlist | `<WAITLIST_FORM_ID>` | FOMO/waitlist — separate scenario needed |
