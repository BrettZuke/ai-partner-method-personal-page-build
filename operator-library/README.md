# Operator Library

> **Tactical SOPs for AI Partner Method operators.** Deeper than the playbook — these are the actual day-to-day procedures for lead generation, offer creation, content systems, webinars, and AI systems you'll build for clients.

The kit's `playbook/` folder gives you the **fundamentals** (creator research template, personal brand SOP, outreach principles). This folder gives you the **execution-level SOPs** for everything that comes after.

Read each as a standalone reference. They're tool-aware (most reference Apify, Instantly, WebinarJam, Retell, etc.) but the **principles and structures are tool-agnostic** — adapt them to whatever stack you actually use.

---

## Lead generation (`lead-generation/`)

How to fill the top of the funnel. Pick the channel that matches your ICP.

| File | What it covers |
|---|---|
| `instagram_lead_scraper.md` | Pull ICP-matched accounts from Instagram via API/Apify, filter by signals (followers, engagement, niche) |
| `instagram_engagement_scraper.md` | Pull people who engaged with specific posts/accounts — warmer leads than cold scraping |
| `gmaps_lead_generation.md` | Local business prospecting via Google Maps. Best for service-business clients |
| `google_serp_lead_scraper.md` | SERP-based prospecting — find people ranking for keywords your client's offer matches |
| `scrape_leads.md` | General-purpose scraping workflow + cost preview + approval gates |
| `upwork_scrape_apply.md` | Find buyer-intent leads on Upwork who are looking for the service your client offers |
| `instantly_autoreply.md` | Cold email autoreply / nurture flow for inbound responders |

## Offer creation (`offer-creation/`)

Once you have a creator partner or client, design the actual offer ladder.

| File | What it covers |
|---|---|
| `offer_creation_sop.md` | Three-tier offer architecture, pricing logic, positioning |
| `create_proposal.md` | Proposal structure for partnership / project deals — what to include, what to leave out |
| `lead_magnet_crm_setup.md` | Lead magnet → CRM → nurture sequence — the back-end plumbing every offer needs |

## Content creation (`content-creation/`)

Content systems for your client (or yourself).

| File | What it covers |
|---|---|
| `vsl_sop.md` | Video Sales Letter SOP — structure, hooks, CTA, length, recording approach |
| `youtube_content_sop.md` | YouTube content production — video formats that drive DMs and email signups |
| `marketing.md` | General marketing fundamentals — channels, ICP, message-to-channel fit |

## Webinars (`webinars/`)

Book-a-call webinars are the highest-leverage conversion mechanic for $2k+ offers. These docs cover everything from funnel architecture to slide-by-slide structure.

| File | What it covers |
|---|---|
| `webinar_funnel_sop.md` | Full webinar funnel: registration page, confirmation, reminder cadence, replay funnel, recovery |
| `webinar_presentation_sop.md` | The 45–60 minute live presentation structure — frame, agitate, teach, transition, pitch, close |
| `webinarjam_webinar_guide.md` | WebinarJam-specific platform guide — setup, registration, replay, integrations |
| `shelby_sapp_webinar_sop.md` | **Case study:** structural breakdown of a public sales-training webinar that closes $5,997 offers. Use as a structural reference |
| `scott_kelly_webinar_sop.md` | **Case study:** 88-slide breakdown of a public webinar — every slide catalogued by purpose |
| `scott_kelly_webinar_design.md` | **Design system:** the visual language extracted from the same webinar (typography, colour, slide rhythm). Use to design your client's webinar deck |

## AI systems (`ai-systems/`)

Technical SOPs for building specific AI systems for clients.

| File | What it covers |
|---|---|
| `ai_voice_dialer.md` | AI voice dialer architecture — Retell + Twilio + telephony stack. The voice version of an AI DM setter |
| `jump_cut_vad.md` | Voice Activity Detection + jump-cutting for podcast / VSL editing automation |
| `add_webhook.md` | Generic event-driven webhook setup — Modal-based but adaptable to any serverless platform |

## Reference (`reference/`)

| File | What it covers |
|---|---|
| `claude_code_v2171_update.md` | Claude Code v2.17.1 release notes + capabilities reference. Useful when the CLI gains features and you want to know what changed |

---

## How to use the library

### When prospecting a creator
1. Pick a lead-gen SOP that matches the channel (`lead-generation/`)
2. Run it to fill your sheet
3. Use `playbook/creator-research-template.md` to dossier each prospect
4. Use `playbook/outreach-fundamentals.md` to safely DM at volume

### When building for a client
1. Read `playbook/personal-brand-sop.md` to understand the brand they're building
2. Use `offer-creation/offer_creation_sop.md` to architect the offer ladder
3. Use the relevant `content-creation/` SOP to design their content engine
4. If they're going webinar route → start with `webinars/webinar_funnel_sop.md`, then dig into the case studies for slide-level structure
5. Build the AI system per `ai-systems/`

### When designing a webinar deck
1. Read `webinars/webinar_presentation_sop.md` for narrative structure (frame → agitate → teach → pitch)
2. Read both case studies (`shelby_sapp` + `scott_kelly`) to see how real $5k–$10k offers structure their decks
3. Use `webinars/scott_kelly_webinar_design.md` for typography + colour + slide rhythm

---

## What's NOT here (and why)

- **Specific creator dossiers / client research** — those are personal research, not reusable. Use the template in `playbook/creator-research-template.md` to build your own.
- **Specific email sequences / VSL scripts written for specific clients** — those are voice-trained on a specific creator. Use `design-reference/copywriting-frameworks.md` and `playbook/personal-brand-sop.md` to write your own.
- **Brett's specific scrapers and automation scripts** — they're hardcoded to specific Sheet IDs, API keys, and Apify accounts. The SOPs above tell you how the systems work; build your own scripts to the same spec.
- **MCP server configs / API keys / `.env` files** — never bundled. Set up your own Apify, Retell, WebinarJam, Modal, Supabase accounts.
- **Specific platform tokens** — none included. The SOPs reference tools generically.

---

## Quality bar

These SOPs were extracted from real operator workflows. They're not theoretical — they reflect what actually moves the needle. Read the relevant one **end-to-end** before you start the work it describes. Don't skim. The half-applied version of any of these will waste 10× the time it took to read.

If a SOP recommends a tool you don't have access to, the underlying logic still applies — replace the tool, keep the structure.
