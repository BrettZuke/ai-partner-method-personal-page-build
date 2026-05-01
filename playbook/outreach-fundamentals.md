# Cold DM Outreach Fundamentals

> Tool-agnostic playbook for cold-DM creator outreach. Covers volume, pacing, warmup, safeguards, and shadowban detection. The principles work whether you're sending manually, via Playwright/Puppeteer, via an MCP server, or via any DM automation tool.

This is the operations layer **underneath** any outreach you do. The dossier (`creator-research-template.md`) tells you **who** to message and **what** to say. This doc tells you **how to send them safely** without burning your account.

---

## The bedrock rule

**Cold DM at scale is a slow game by physics, not by patience.** Instagram (and every other platform) has anti-spam systems that look for: (a) bot-like sending patterns, (b) identical message content, (c) sudden volume spikes, (d) all-DMs no-organic activity. Violate any of these and you eat a shadowban or hard ban inside 3–14 days.

You can't out-volume the algorithm. You can only stay below the threshold while compounding.

---

## Volume + pacing (Instagram, established account)

### Steady-state target
**18–22 DMs/day** on a single established account. Higher than this requires multiple accounts (each warmed up separately) or managed-services accounts at significant cost.

### Batch schedule
Spread sends across **4 batches/day**, not in one block. The platform watches for sustained-burst patterns.

| Time (local) | DMs per batch |
|---|---|
| 10:00 AM | 5 |
| 1:00 PM | 5 |
| 4:00 PM | 5 |
| 7:00 PM | 3–5 |

### Weekend rules
2 batches only on Sat/Sun (10–12/day). Weekend volume that matches weekday volume is a bot signal — real humans send less on weekends. Match the pattern.

### Hours
Send only between **9 AM and 9 PM local time**. No 3 AM sends. Match a normal human's waking hours for the timezone of the account.

---

## Warmup ramp (mandatory, even on established accounts)

If your account hasn't been cold-DMing strangers, you cannot just start at 20/day. The pattern shift is what trips the spam filter — not the absolute volume.

| Week | Daily cap | Batches |
|---|---|---|
| 1 | 5/day | 1× morning batch of 5 |
| 2 | 10/day | 2× batches of 5 |
| 3 | 15/day | 3× batches of 5 |
| 4+ | 20/day (steady state) | 4× batches per schedule above |

**For brand-new accounts** (less than 3 months old, less than 100 organic DMs sent): add 4 weeks of slower ramp on top — start at 1/day for week 1, 2/day for week 2, etc. Don't start cold DM until the account has organic DM history.

---

## The 8 send-safety rules

These apply whether you're sending manually or via automation. Bake them into any script you use.

### 1. Randomized inter-send spacing
**90–180 seconds between DMs.** Never under 60. Random, not fixed. Fixed intervals (every 2 min exactly) are the #1 bot signal.

### 2. Profile engagement before each DM
Before sending the message:
1. Visit the recipient's profile
2. Scroll their feed for 5–10 seconds
3. Like one recent post
4. Wait 20–30 seconds
5. Then open DMs and send

This is the single biggest human-vs-bot signal. Skipping it gets you flagged faster than any other safeguard violation.

### 3. Human-typing simulation
If automated, use `page.type(text, {delay: 80–140ms})` (Playwright/Puppeteer). Insert 1–2 typos + backspace per message. If manual, just type normally — don't paste.

### 4. Spintax on the opener
Never send the same exact text twice in a row. Maintain 3–5 variants of every opener and rotate. Same core hook, varied phrasing. Example:
- "hey mate could u help me?"
- "yo bro could u help me?"
- "hey man could u help me out?"

### 5. NO LINKS in the first DM
Links in cold openers = instant flag. The Loom / sales page / booking link goes in DM #2 **after** they reply, not before.

### 6. Residential IP only
Run sends from your home wifi. No VPN. No datacenter proxy. Datacenter IPs are pre-flagged.

### 7. Work hours only
9 AM – 9 PM local time. See volume section.

### 8. Session persistence
If automating, save the platform auth state to disk and reuse it. Every fresh login looks suspicious. Aim for one login per week max.

---

## Shadowban detection

Watch these signals daily. If any trigger, **pause all sends and alert yourself** (email, Slack, Telegram — whatever you check).

| Signal | What it means | Action |
|---|---|---|
| Send failure rate >10% in a single batch | API or UI is rate-limiting you | Pause for 24 hours, re-warm |
| Reply rate drops below 15% for 3 days | Messages are being shadow-delivered (visible to you, not them) | Pause + spot-check from a separate account |
| "Action Blocked" modal in IG UI | Hard rate limit hit | Pause 48 hours minimum |
| DMs visible in your sent box but not in their inbox | Active shadowban | Stop sending immediately, wait 7+ days |
| Sudden drop in profile views from known followers | Account-level reach throttle | Reduce volume by 50% for 2 weeks |

**Spot-check daily:** every morning, send a regular DM to a friend's account and confirm it appears in their inbox. If yours doesn't show up, you're shadowbanned.

---

## Opener template principles

Whatever your specific opener, it must satisfy all of these:

1. **No links.** Ever. In DM #1.
2. **Curiosity-inducing.** Make them want to reply just to find out what you want.
3. **Reciprocity hook.** "Could you help me?" beats "Can I help you?" by 2–3× reply rate. People feel obligation when asked for help; they feel sold-to when offered help.
4. **Sub-10 words.** Long DMs scream sales pitch. Short DMs read as casual.
5. **Lowercase + casual punctuation.** Title case in a cold DM is uncanny. Match how the audience actually types in their own DMs.
6. **Audience-language.** Use the slang from your dossier (`creator-research-template.md` §3 + §11). A British lad audience wants "mate", not "buddy".
7. **No "I" in the first sentence.** Lead with them. "Could you help me with X?" beats "I'm reaching out about X."
8. **Fast-response expectation.** Once they reply, you have a window of ~30 minutes to 2 hours. After that, momentum dies. Have your DM #2 (the Loom / booking link / next message) ready before you send DM #1.

---

## Reply funnel — what happens after they reply

```
DM #1 (opener)
  → they reply
DM #2 (the value drop — Loom VSL / case study / direct ask)
  → they reply / engage
DM #3 (the soft ask — "want to jump on a quick call?")
  → they book or ghost
```

**Don't pitch in DM #1.** Don't pitch in DM #2 either, ideally — DM #2 is value-first. The pitch only emerges in DM #3 or later, once trust exists.

The funnel breaks if you skip steps. Every DM you save by combining steps loses 2–3× more in reply rate.

---

## Lead source structure (whatever tool you use)

You need a single source of truth for: who you've messaged, when, and what their status is. Whether that's a Google Sheet, a Notion table, a Supabase row, or a Kanban board doesn't matter — the schema does.

**Minimum schema:**

| Field | Purpose |
|---|---|
| Handle / URL | Who they are |
| Source | Where you found them (so you can debug what's working) |
| Status | New / DM Sent / Replied / Loom Sent / Call Booked / Closed / Dead |
| Last message sent (timestamp) | So you never re-DM them |
| Notes | Anything from their dossier worth remembering at reply-time |

Filter rule for daily batches: status = "New" AND last message sent IS NULL → take next 5–8 → send → update timestamp + status.

---

## When to walk away

Some prospects look great in the dossier but won't reply. Don't keep stalking. Heuristic:
- **No reply after DM #1** → leave them. Don't follow-up cold.
- **Reply but no engagement after DM #2** → soft-bump once at 48h. If still nothing, leave.
- **Replied + engaged but ghosted on call ask** → bump once with a low-pressure alternative. Then leave.

**Never** go past 4 messages in a cold sequence without a confirmed booking. You're not building a pipeline at that point — you're harassing people.

---

## Compounding math

If you send 20 DMs/day, 5 days/week (no weekends):
- 100 DMs/week × ~25% reply rate = 25 replies
- 25 replies × ~20% Loom watched = 5 Looms watched
- 5 Looms × ~30% call booked = 1.5 calls/week
- 1.5 calls × ~25% close rate = 0.4 closes/week ≈ **1.5–2 closes/month**

These numbers are **per single account** with a tight ICP. Most operators see worse than this in months 1–3 (warmup tax). Most see better in month 4+ (compounding signal + tighter pitch + better dossiers).

Two accounts running in parallel = 3–4 closes/month. Three accounts = 5–6.

---

## Mandatory pre-launch checklist

Don't start cold DMing until all of these are done:

- [ ] DM #2 asset (Loom VSL / one-pager / case study) is recorded and live
- [ ] Booking link works end-to-end (test from a different account)
- [ ] Lead list is populated with >100 prospects, all dossier'd
- [ ] Send-safety rules above are operational (manually or in script)
- [ ] Shadowban detection is set up (daily friend-DM test minimum)
- [ ] Reply alert system is set up — you can't respond fast if you don't know they replied
- [ ] Status tracker (sheet/Notion/CRM) is live with the schema above
- [ ] Warmup week 1 plan is locked (5/day for week 1, no exceptions)

If any box is unchecked, fix it before sending DM #1. Going live without these costs you 2–4 weeks of recovery time once it bites.
