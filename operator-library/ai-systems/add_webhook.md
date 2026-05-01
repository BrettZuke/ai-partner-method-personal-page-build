# Add Webhook Directive

## Goal
Register a new event-driven webhook endpoint backed by a Claude directive and deploy it to Modal.

## Inputs
- `slug`: URL-safe identifier (e.g. `send-followup`, `enrich-leads`)
- `description`: What this webhook does in plain English
- `directive`: Name of the directive file (without `.md`) that handles this webhook
- `tools`: List of tools the directive is allowed to use (scoped for security isolation)

## Available Tools for Webhooks
- `send_email` — Send email via Gmail API
- `read_sheet` — Read rows from a Google Sheet
- `update_sheet` — Write/append rows to a Google Sheet

## Steps

1. **Create the directive file** at `directives/{directive}.md`
   - Define: goal, inputs, steps, outputs, edge cases
   - Be specific about what data comes in via the webhook payload

2. **Register the webhook** in `execution/webhooks.json`:
   ```json
   "{slug}": {
     "directive": "{directive}",
     "description": "{description}",
     "tools": ["{tool1}", "{tool2}"]
   }
   ```

3. **Deploy to Modal**:
   ```bash
   modal deploy execution/modal_webhook.py
   ```

4. **Test the endpoint**:
   ```bash
   curl -X POST "https://<your-modal-app>-directive.modal.run?slug={slug}" \
     -H "Content-Type: application/json" \
     -d '{"key": "value"}'
   ```

5. **Verify in Slack** — all webhook activity streams to Slack in real-time.

## Endpoints
- List webhooks: `https://<your-modal-app>-list-webhooks.modal.run`
- Execute directive: `https://<your-modal-app>-directive.modal.run?slug={slug}`
- Test email: `https://<your-modal-app>-test-email.modal.run`

## Edge Cases
- Slug must be URL-safe (lowercase, hyphens only, no spaces)
- Each slug maps to exactly ONE directive (security isolation)
- Tools list should be minimal — only grant what the directive needs
- After adding to `webhooks.json`, always redeploy Modal for changes to take effect
- Check `modal logs claude-orchestrator` if the endpoint doesn't behave as expected

## Notes
- `execution/modal_webhook.py` should not be modified unless absolutely necessary
- Webhook payloads are passed as JSON in the POST body
- All activity (requests, Claude responses, errors) streams to Slack automatically
