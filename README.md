# AI Partner Method — Personal Page Build

Your personal authority website kit. You'll get a beautiful one-page site that positions you as an AI Growth Operator. Built by Claude in your VS Code, deployed free on Vercel, takes 30 minutes.

---

## What this is

This is a **Claude-powered site builder kit**. You don't write code. You don't edit HTML. You open this folder in Claude Code, type one command, answer 7 simple questions, and Claude builds the whole site for you.

The site is one page, conversion-focused, and built fresh for you — not assembled from cookie-cutter templates. The end result should feel like it belongs to the same family as:

- **[Reference site A]** — Brett's AI DM setter SaaS
- **[Reference site B]** — Brett's growth ops agency

The full production HTML/CSS of both sites is bundled in `design-reference/inspiration/` so Claude can study the actual code, not guess at it. Plus **13 design + copy + SEO skills** auto-load before Claude designs anything (UI/UX intelligence, anti-AI-slop frontend rules, Emil Kowalski's micro-detail principles, motion design audit, frontend polish/iteration, Ogilvy copywriting, 7-pass copy editing, conversion optimisation, Vercel's official UI guidelines audit, single-page SEO checklist, the Copy Elite frameworks, and a stop-slop layer that strips AI writing tells). The result reads like a £10k designer site, not a generic AI page — and a `quality-bar.md` pre-ship checklist runs on every build to keep it there.

The structure:

- Big hero with your positioning line
- Stats / proof points
- The 6 AI systems you install (the AI Partner Method stack)
- Your 3-phase process (Audit → Build → Scale)
- "Who it's for" qualifier
- Testimonial carousel (placeholders — replace with real ones when you have them)
- FAQ
- Final call-to-action
- Mobile-ready, fast, SEO-clean

---

## Setup (5 minutes, one time)

If this is your first AI Partner Method project, follow [SETUP.md](./SETUP.md).

You need:
- A Mac (or Windows)
- VS Code installed
- Claude Code installed in VS Code
- A GitHub account (free)
- A Vercel account (free — sign up with GitHub)

That's it. No paid software. No design skills.

---

## How to build your site

1. Open this folder in **VS Code**
2. Open **Claude Code** (the AI sidebar)
3. Type:

```
/build-my-site
```

4. Answer the 7 questions Claude asks you
5. Claude builds the site
6. Claude shows you a preview
7. You give feedback ("change the color", "rewrite the about", etc.) — Claude iterates
8. When you're happy, Claude pushes to GitHub and deploys to Vercel
9. You have a live website

---

## What you'll need ready before you start

Before running `/build-my-site`, have these on hand:

- **Your name** — used in nav, hero, and footer
- **Your positioning** — fill in: "I help ___ achieve ___ using AI"
- **3 stats / numbers** — soft credibility works ("AI Partner Method certified", "Trained by [your mentor]", "Built X systems")
- **Who it's for** — your ideal client, specifically
- **Your booking link** — Calendly, Cal.com, Typeform — or say "placeholder" and add it later
- **Social handles** — Instagram, X, LinkedIn, YouTube (only the ones you actually use)
- **A color vibe** — Electric / Warm / Clean / Money / or a custom hex

A professional headshot (square or portrait, 1000x1000+) is optional — Claude will ask after the 7 questions and use a placeholder if you don't have one.

**You don't pick services or process.** Every AI Partner Method site installs the same 6 AI systems (DM Setter, Content Systems, Funnel Infrastructure, Sales Operations, Offer Architecture, Analytics) and uses the same 3-phase process (Audit → Build → Scale). That's the business model — your site reflects it.

---

## What's in the repo

You don't need to understand any of this. Claude does. But for context:

```
.
├── CLAUDE.md                ← Claude's operating manual (the brain)
├── README.md                ← this file
├── SETUP.md                 ← install guide
│
├── .claude/
│   ├── commands/            ← /build-my-site command
│   └── skills/              ← 13 bundled design + copy + SEO skills (auto-loaded for the build)
├── design-reference/        ← brand DNA, copy frameworks, £10k quality-bar checklist
├── starter/                 ← full £10k reference build (the floor)
├── playbook/                ← operator fundamentals — creator research template, brand SOP, outreach
├── operator-library/        ← 23 tactical SOPs — lead-gen, offers, content, webinars, AI systems
├── claude-code-essentials/  ← OPTIONAL — 44 commands, 28 agents, 9 rules, 135 skills to install globally
└── assets/                  ← your photo goes here
```

When the site is built, three new files appear at the root: `index.html`, `style.css`, `script.js`. That's your website.

---

## Bonus — `playbook/` (operator fundamentals)

Three standalone docs that handle everything **after** your site is live — the foundational frameworks for prospecting, brand-building, and outreach.

- **`creator-research-template.md`** — 13-section dossier you fill out before pitching any creator
- **`personal-brand-sop.md`** — universal personal-brand framework + 16-step buyer's journey
- **`outreach-fundamentals.md`** — tool-agnostic cold DM playbook (volume, warmup, safety, shadowban detection)

See [playbook/README.md](./playbook/README.md).

---

## Bonus — `operator-library/` (23 tactical SOPs)

The execution layer underneath the playbook. Real procedures for the daily work of an AI Partner Method operator:

- **`lead-generation/`** (7 docs) — Instagram, Google Maps, SERP, Upwork prospecting + cold email autoreply
- **`offer-creation/`** (3 docs) — three-tier offer architecture, proposal structure, lead magnet + CRM setup
- **`content-creation/`** (3 docs) — VSL SOP, YouTube content production, marketing fundamentals
- **`webinars/`** (6 docs) — funnel architecture, presentation structure, WebinarJam guide, plus two real-world case studies (Shelby Sapp's $5,997 sales training webinar + Scott Kelly's 88-slide deck breakdown with full design system)
- **`ai-systems/`** (3 docs) — AI voice dialer architecture, voice activity detection, webhook orchestration
- **`reference/`** (1 doc) — Claude Code release notes

See [operator-library/README.md](./operator-library/README.md).

---

## Bonus — `claude-code-essentials/` (optional)

The largest folder by far. The full Claude Code productivity kit students install **globally** to `~/.claude/`. Works on every project you touch, not just this one:

- **44 slash commands** — `/aside`, `/learn`, `/save-session`, `/resume-session`, `/plan`, `/code-review`, `/quality-gate`, `/checkpoint`, `/tdd`, `/build-fix`, `/refactor-clean`, `/docs` (Context7 lookup), language-specific build/review/test commands for Python/Go/Rust/Kotlin/C++, and more
- **28 specialised subagents** — planner, architect, code-reviewer, security-reviewer, tdd-guide, build-error-resolver, refactor-cleaner, doc-updater, plus per-language reviewers (rust, python, go, kotlin, java, cpp, typescript, flutter)
- **9 universal coding rules** — testing, security, git workflow, performance, code style, dev workflow, hooks, patterns, agent orchestration
- **135 skills** — design (UI/UX, design systems, motion), copy (Ogilvy, copy-editing, stop-slop, brand voice), SEO (technical, content, audit, programmatic, image-gen), language-specific patterns (Python, Kotlin, Rust, Go, Spring Boot, Django, Laravel), testing patterns, MCP server building, plus dozens of speciality skills

See [claude-code-essentials/README.md](./claude-code-essentials/README.md) for the full inventory + a 5-minute copy-paste install. Skip if you only care about the website build.

---

## Updating your site after launch

Whenever you want to change something:

1. Open this folder in VS Code
2. Tell Claude what to change ("update my headline to say X")
3. Claude edits the files
4. Claude runs:
   ```
   git add .
   git commit -m "Update headline"
   git push
   ```
5. Vercel auto-rebuilds in ~30 seconds. Live site updates.

You never log into Vercel. You never edit code. You just talk to Claude.

---

## Help

If something breaks, your first move is to tell Claude exactly what happened. Paste the error message. Claude can fix almost everything.

If you're truly stuck, ask Dan or another AI Partner Method student in the community.

---

**Now go to [SETUP.md](./SETUP.md) and get installed.**
