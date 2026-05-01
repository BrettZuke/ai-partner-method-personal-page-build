# Lead Magnet CRM Integration

## Overview

Landing page forms POST to a Make.com webhook, which subscribes the contact in Kit (ConvertKit) and triggers the delivery email automation. No server code needed.

**Flow:**
```
Form submit → Make webhook → Kit: Add Subscriber → Kit Automation: Send delivery email
```

## Setup (one-time)

### 1. Create the Make.com Scenario

1. Go to make.com → Create new scenario
2. Add trigger: **Webhooks → Custom Webhook**
   - Click "Add" → name it "Lead Magnet Opt-In"
   - Copy the webhook URL (looks like `https://hook.us1.make.com/...`)
3. Add module: **ConvertKit → Add Subscriber to a Form**
   - Connect your Kit account (API key in `.env` as `KIT_API_KEY`)
   - Form ID: create a new form in Kit named "Lead Magnet Delivery" → copy its ID
   - Map fields:
     - Email → `{{1.email}}`
     - First Name → `{{1.firstName}}`
4. Turn on the scenario

### 2. Add the Webhook URL to .env

```bash
LEAD_MAGNET_WEBHOOK_URL=https://hook.us1.make.com/YOUR_WEBHOOK_ID
```

The `/landing-page` and `/execute-lead-magnets` commands read this variable and inject it into every generated landing page's form JS.

### 3. Create the Kit Delivery Automation

In Kit → Automations → New Automation:
- **Trigger:** Subscriber added to form "Lead Magnet Delivery"
- **Action:** Send email (use the delivery email copy from `website/lead-magnets/<slug>-email.txt`)
- Set a tag per lead magnet if you want to track which one they opted into

### 4. Test the Full Flow

```bash
# 1. Open any generated landing page locally
open ~/.claude/skills/my-lead-magnet-system/website/lead-magnets/<slug>.html

# 2. Submit the form with a test email
# 3. Check Make.com → scenario run history → should show success
# 4. Check Kit → subscriber should appear under the form
# 5. Check your inbox for the delivery email
```

## Per-Lead-Magnet Tagging (optional)

To track which lead magnet each subscriber came from, update the Make scenario to also:
- Add a tag: **ConvertKit → Add a Tag to Subscriber**
- Tag name: the lead magnet slug (e.g., `lm-ai-automation-playbook`)

This lets you segment by lead magnet in Kit automations.

## Troubleshooting

| Symptom | Fix |
|---|---|
| Form submits but Make doesn't fire | Check `LEAD_MAGNET_WEBHOOK_URL` is set in `.env` and injected into the HTML |
| Make fires but Kit rejects | Verify Kit API key is connected correctly in Make module |
| Subscriber added but no email | Check Kit automation is active and targeting the right form |
| CORS error in browser | Make webhooks accept cross-origin POST by default — check the URL is correct |

## Notes

- Make's free plan allows 1,000 operations/month — enough for early traction
- Kit's free plan supports up to 10,000 subscribers
- The webhook URL is the same for all lead magnets — Kit tagging differentiates them
- If you hit Make limits, swap the webhook for a Modal endpoint calling Kit API directly (see `directives/add_webhook.md`)
