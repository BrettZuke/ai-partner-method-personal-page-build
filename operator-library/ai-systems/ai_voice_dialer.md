# AI Voice Dialer (Retell AI)

## Purpose
Trigger outbound AI voice calls to a list of leads using Retell AI. Reads from a Google Sheet, fires calls, and writes results back (Call Status, Recording URL, Summary, Outcome).

## Inputs
- **Google Sheet** with lead rows containing at minimum a phone number column
- `RETELL_API_KEY` in `.env`
- `RETELL_AGENT_ID` in `.env` (the agent to use for calls)
- `RETELL_FROM_NUMBER` in `.env` (your Retell phone number, E.164 format e.g. +15551234567)

## Tools / Scripts
- `execution/ai_voice_dialer.py` — main script

## Sheet Column Conventions
The script expects these column headers (case-insensitive, first row = headers):

| Column | Required | Notes |
|--------|----------|-------|
| `Phone` | Yes | E.164 format (+15551234567) or 10-digit US number |
| `Name` | No | Passed as dynamic variable to agent |
| `Company` | No | Passed as dynamic variable |
| `Call Status` | Yes | Written by script: Pending → Calling → Completed / Failed / No Answer / Voicemail |
| `Call ID` | Yes | Written by script |
| `Recording URL` | No | Written by script after call ends |
| `Call Summary` | No | Written by script after analysis |
| `Call Outcome` | No | Written by script (call_successful from Retell analysis) |

**Trigger condition:** Rows where `Phone` is set AND `Call Status` is empty or `"Pending"`.

## Outputs
- Updated Google Sheet with call results
- Logs to stdout

## Usage

```bash
# Dial all pending leads in sheet
python3 execution/ai_voice_dialer.py --sheet-id "YOUR_SHEET_ID" --tab "Leads"

# Dial with custom concurrency (default: 3 concurrent calls)
python3 execution/ai_voice_dialer.py --sheet-id "YOUR_SHEET_ID" --max-concurrent 5

# Dry run (print rows that would be called, no actual calls)
python3 execution/ai_voice_dialer.py --sheet-id "YOUR_SHEET_ID" --dry-run

# Poll for results after firing calls (waits up to 5 min per call)
python3 execution/ai_voice_dialer.py --sheet-id "YOUR_SHEET_ID" --poll-results
```

## Setup Steps

1. **Get API Key:** Retell AI Dashboard → API Keys → copy key → add to `.env` as `RETELL_API_KEY`
2. **Create or find Agent ID:** Retell Dashboard → Agents → copy agent ID → add to `.env` as `RETELL_AGENT_ID`
3. **Get Phone Number:** Retell Dashboard → Phone Numbers → buy or import a number → add to `.env` as `RETELL_FROM_NUMBER`
4. **Prepare Sheet:** Add column headers matching conventions above. Fill in Phone (and optionally Name, Company). Leave Call Status empty for rows to be dialed.
5. **Run:** `python3 execution/ai_voice_dialer.py --sheet-id YOUR_SHEET_ID`

## Edge Cases & Learnings

- **Phone formatting:** Script auto-formats 10-digit numbers to E.164 (+1XXXXXXXXXX). Numbers with invalid format are skipped with error log.
- **Rate limits:** Retell allows ~10 concurrent calls on most plans. Default max-concurrent is 3 to be safe.
- **Voicemail:** Retell detects voicemail and can leave a message (configure in agent settings). Call ends with status `voicemail`.
- **Polling:** Results (recording, summary) are only available after call ends and analysis completes (~30-90s post-call). Use `--poll-results` to wait and write back, or run again later to backfill.
- **Dynamic variables:** `Name` and `Company` from the sheet are passed to the agent as `customer_name` and `company_name`. Reference them in your agent prompt as `{{customer_name}}` and `{{company_name}}`.

## Self-Annealing

When errors occur:
1. Check Retell API error: 401 = bad API key, 422 = bad phone number format, 429 = rate limit
2. Fix and retry
3. Update this directive with new learnings
