# Claude Code Essentials

> **The full Claude Code productivity kit — install once, use on every project. Not required for the website kit, but transforms how you work in Claude Code afterwards.**

The website kit ships with 13 design + copy + SEO skills that auto-load when you run `/build-my-site`. Those are scoped to **just this kit**.

This folder is **separate and much bigger**: 44 slash commands, 28 specialised subagents, 135 skills, and 9 universal coding rules. You install them **globally** to your `~/.claude/` directory once, and they work on every project you ever open with Claude Code — not just this one.

---

## What's in here

```
claude-code-essentials/
├── commands/    44 slash commands  (productivity, build/test, language-specific reviews)
├── agents/      28 specialised subagents  (planner, reviewers per language, build resolvers, etc.)
├── skills/      135 skills           (design, copy, SEO, language patterns, testing, MCP)
└── rules/       9 universal coding rules  (testing, security, git, performance)
```

### Commands (`/<name>` from anywhere in Claude Code)

**Session productivity**
- `/aside` — quick side question without losing your current task's context
- `/checkpoint` — save a checkpoint mid-task so you can branch / explore / rewind
- `/save-session` — save current session state to a dated file
- `/resume-session` — load the most recent session and continue with full context
- `/sessions` — manage saved sessions
- `/context-budget` — analyse context usage to find optimisation opportunities

**Learning & iteration**
- `/learn` — extract reusable patterns from the current session
- `/learn-eval` — extract patterns + self-evaluate quality before saving
- `/prompt-optimize` — analyse + improve a draft prompt before sending it

**Planning & review**
- `/plan` — restate requirements, assess risks, write a step-by-step plan (waits for your approval before coding)
- `/code-review` — comprehensive code review of recent changes
- `/quality-gate` — run quality gate checks (lint, type-check, test, format)
- `/verify` — verification step before declaring work done

**Build & test**
- `/build-fix` — fix build errors incrementally with minimal changes
- `/tdd` — enforce TDD workflow (write tests first, then implement)
- `/test-coverage` — check + improve test coverage
- `/e2e` — generate and run end-to-end tests with Playwright
- `/refactor-clean` — dead code cleanup + consolidation

**Docs**
- `/docs` — look up current documentation for any library via Context7 MCP
- `/update-docs` — keep your project docs in sync with code
- `/update-codemaps` — refresh code maps after structural changes

### Subagents (`Agent` tool with `subagent_type`)

**Planning + review (universal):**
- **planner** — implementation planning specialist. Use proactively for complex features.
- **architect** — system design + scalability decisions.
- **code-reviewer** — proactive code review immediately after writing code.
- **security-reviewer** — vulnerability detection for auth, user input, APIs, sensitive data.
- **tdd-guide** — Test-Driven Development enforcement.
- **refactor-cleaner** — dead code removal + consolidation.
- **doc-updater** — documentation + codemap maintenance.
- **docs-lookup** — Context7 MCP wrapper for library docs.
- **database-reviewer** — PostgreSQL query optimisation, schema, security, performance.
- **e2e-runner** — Playwright E2E test runner.

**Per-language reviewers + build-error-resolvers:**
- **rust-reviewer / rust-build-resolver** — ownership, lifetimes, idioms, build errors
- **python-reviewer** — PEP 8, type hints, Pythonic patterns
- **go-reviewer / go-build-resolver** — idiomatic Go, concurrency, build errors
- **kotlin-reviewer / kotlin-build-resolver** — null safety, coroutines, KMP
- **java-reviewer / java-build-resolver** — Spring Boot, JPA, layered architecture
- **cpp-reviewer / cpp-build-resolver** — modern C++, memory safety, CMake errors
- **typescript-reviewer** — type safety, async, idiomatic patterns
- **flutter-reviewer** — Dart idioms, widget patterns, Compose-style state
- **pytorch-build-resolver** — tensor shape errors, CUDA, training crashes
- **build-error-resolver** — generic build / TypeScript error fixer

**Specialised:**
- **chief-of-staff** — multi-channel communication triage (email, Slack, etc.)

### Skills (135 total — auto-load when relevant)

The largest pile. Skills auto-load when their description matches what you're working on.

**Design** (~25 skills): `design`, `design-system`, `design-consultation`, `design-review`, `design-html`, `design-shotgun`, `design-loop`, `design-taste-frontend`, `bencium-ux-designer`, `frontend-design`, `interface-design`, `industrial-brutalist-ui`, `minimalist-ui`, `libre-uiux`, `make-interfaces-feel-better`, `high-end-visual-design`, `web-design-guidelines`, `ui-styling`, `css-animation`, `banner-design`, `slides`, `frontend-slides`, `stitch-design-taste`, `redesign-existing-projects`, `plan-design-review`

**Copy + writing** (~6): `copywriting`, `copy-editing`, `ogilvy-copywriting`, `stop-slop`, `brand`, `dan-email`-equivalents (excluded — personal)

**SEO** (~20): `seo-audit`, `seo-page`, `seo-content`, `seo-technical`, `seo-local`, `seo-images`, `seo-image-gen`, `seo-google` (Search Console + PSI), `seo-firecrawl`, `seo-dataforseo`, `seo-cluster`, `seo-competitor-pages`, `seo-programmatic`, `seo-sitemap`, `seo-hreflang`, `seo-sxo`, `seo-drift`, `seo-backlinks`, `seo-maps`, `seo-plan`

**Language patterns** (~15): `python-patterns`, `kotlin-patterns`, `rust-patterns`, `golang-patterns`, `perl-patterns`, `react-best-practices`, `frontend-patterns`, `backend-patterns`, `django-patterns`, `springboot-patterns`, `laravel-patterns`, `kotlin-coroutines-flows`, `kotlin-ktor-patterns`, `kotlin-exposed-patterns`, `compose-multiplatform-patterns`, `android-clean-architecture`

**Testing** (~10): `python-testing`, `kotlin-testing`, `rust-testing`, `golang-testing`, `cpp-testing`, `perl-testing`, `e2e-testing`, `ai-regression-testing`, `tdd-workflow`, `springboot-tdd`, `laravel-tdd`, `django-tdd`

**Verification + quality**: `verification-loop`, `springboot-verification`, `laravel-verification`, `django-verification`, `eval-harness`, `benchmark`, `benchmark-models`, `qa`, `qa-only`

**Process + workflows**: `pair-agent`, `pair-programming`, `quality-gate`, `code-review`, `tdd`, `careful`, `freeze`, `unfreeze`, `guard`, `careful`, `health`, `ship`, `land-and-deploy`, `setup-deploy`, `canary`, `document-release`, `gstack-upgrade`, `make-pdf`

**Speciality**: `mcp-server-patterns` (build MCP servers), `claude-api`, `cso` (security audit), `coding-standards`, `cpp-coding-standards`, `java-coding-standards`, `api-design`, `office-hours`, `llm-council`, `iterative-retrieval`, `wiki-brain`, `continuous-learning`, `continuous-learning-v2`, `learn`, `meta-rate-limiter`, `plankton-code-quality`, `prompt-optimize`, `strategic-compact`, `context-save`, `context-restore`, `skill-stocktake`, `configure-ecc`, `full-output-enforcement`, `impeccable`

(Plus a handful of niche skills — graph visualisation, browser automation, etc.)

Browse the `skills/` folder to see all 135. Most have great auto-trigger descriptions in their frontmatter.

### Rules (universal coding principles, language-agnostic)

The `rules/common/` directory contains 9 universal rule files Claude reads on every project to apply consistent standards:

- **agents.md** — when to use which subagent, parallel orchestration
- **coding-style.md** — immutability, file organisation, error handling
- **development-workflow.md** — research → plan → TDD → review → commit
- **git-workflow.md** — commit format, PR process
- **hooks.md** — PreToolUse, PostToolUse, Stop hook patterns
- **patterns.md** — repository pattern, API response envelopes
- **performance.md** — model selection (Haiku vs Sonnet vs Opus), context window management
- **security.md** — pre-commit security checklist, secret management, OWASP-aware
- **testing.md** — 80% coverage minimum, TDD workflow, test-failure troubleshooting

There are also language-specific rule directories (typescript, python, golang, etc.) — see `rules/README.md` for the install script that supports per-language layering.

---

## Install (5 minutes, one time)

You install these into your **global** Claude Code config at `~/.claude/`. They become available in every Claude Code session you open, on every project — not just this kit.

### macOS / Linux

```bash
# From inside this kit's directory
cd claude-code-essentials

# Install commands (44 slash commands)
mkdir -p ~/.claude/commands
cp commands/*.md ~/.claude/commands/

# Install subagents (28 specialised agents)
mkdir -p ~/.claude/agents
cp agents/*.md ~/.claude/agents/

# Install skills (135 skills, copied as full directories)
mkdir -p ~/.claude/skills
cp -R skills/* ~/.claude/skills/

# Install rules (universal common rules)
mkdir -p ~/.claude/rules/common
cp rules/common/*.md ~/.claude/rules/common/
cp rules/README.md ~/.claude/rules/README.md
```

### Windows (PowerShell)

```powershell
cd claude-code-essentials

New-Item -ItemType Directory -Force -Path "$HOME\.claude\commands" | Out-Null
Copy-Item commands\*.md "$HOME\.claude\commands\"

New-Item -ItemType Directory -Force -Path "$HOME\.claude\agents" | Out-Null
Copy-Item agents\*.md "$HOME\.claude\agents\"

New-Item -ItemType Directory -Force -Path "$HOME\.claude\skills" | Out-Null
Copy-Item -Recurse skills\* "$HOME\.claude\skills\"

New-Item -ItemType Directory -Force -Path "$HOME\.claude\rules\common" | Out-Null
Copy-Item rules\common\*.md "$HOME\.claude\rules\common\"
Copy-Item rules\README.md "$HOME\.claude\rules\README.md"
```

### Verify install

Open Claude Code, type `/`, and you should see the new commands appear in the list (`/aside`, `/checkpoint`, `/learn`, etc).

To verify subagents, ask Claude in a fresh session: "List the subagents available to you." It should mention `planner`, `code-reviewer`, `security-reviewer`, `tdd-guide`, etc.

To verify rules, the next time you ask Claude to do anything in any project, it'll automatically apply standards from `coding-style.md`, `testing.md`, `security.md` etc — no command needed.

---

## How to use them — typical AI Partner Method workflows

### Building an AI system for a client (DM Setter / Funnel / Analytics)

```
/plan                      ← write the implementation plan first, get approval
/tdd                       ← enforce write-tests-first
... (Claude builds it)
/code-review               ← review what was just built
/quality-gate              ← lint + type-check + test
/verify                    ← final verification
/learn                     ← extract any reusable patterns from this build
```

### Long client session (multi-day build)

```
End of day:    /save-session
Next morning:  /resume-session
Mid-task:      /aside <quick question>   ← doesn't lose context
Mid-task:      /checkpoint                ← snapshot before risky change
```

### Outreach copy / DM scripts / sales emails

The bundled `copy-editing` skill in this kit's `.claude/skills/` works for any copy task. Just ask: *"Run the 7-pass copy edit on this DM script."*

### Researching a library or API

```
/docs <library name>       ← Context7 fetches current docs (no stale results)
```

---

## Updating

When this kit gets updates, the essentials might too. To re-sync:

```bash
cd <where-you-cloned-the-kit>
git pull
cd claude-code-essentials
cp commands/*.md ~/.claude/commands/
cp agents/*.md ~/.claude/agents/
cp rules/common/*.md ~/.claude/rules/common/
```

Existing files get overwritten. If you've customised any (renamed, edited), back them up first.

---

## What's NOT included (and why)

These are deliberately left out to keep the bundle generic + portable:

- **Language-specific commands** (`cpp-build`, `go-test`, `rust-review`, etc) — install only if you use that language. They live in your global skills if you want them.
- **Personal workflow commands** — anything bound to specific people, clients, or business flows is excluded by design.
- **MCP server configs** — those depend on your accounts (Slack, GitHub, Linear, etc) and personal API keys. Set up MCPs separately.
- **Hooks** (`~/.claude/hooks/`) — hook configurations are per-machine and often need editing for your paths. Set up hooks separately if you want auto-format-on-save, block-no-verify, etc.
- **Skills already bundled in this kit** — the 13 design/copy/SEO skills in `.claude/skills/` auto-load when you run `/build-my-site`. They're scoped to this kit, not global.

---

## Total install footprint

- 21 slash commands (~50 KB)
- 11 subagents (~80 KB)
- 9 rules + index (~30 KB)

≈ 160 KB total. Negligible.
