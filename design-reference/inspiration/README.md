# Inspiration — How to use these reference sites

This folder contains the **actual production HTML/CSS** of two sites in the kit author's family. Every AI Partner Method student site should feel like it belongs to this family.

## The two references

| File | What it is | Best parts to study |
|------|------------|---------------------|
| `settoku.html` | Reference site — AI DM setter SaaS | Hero with reveal animations, problem-section emotional copy, bento grid layout, pricing card composition, scroll-triggered fade-ins, line-break-driven headline rhythm |
| `zukeinternationalpimp.html` | Reference site — growth ops agency | Bigger swing visually — serif `<em>` accents (gold colour), audience qualifier section, deliverables grid, model/pricing transparency, testimonials with real numbers, audit-funnel CTA |

## What to extract before building

**Open both files. Read the entire `<style>` block in each.** Both use a single inline `<style>` tag (~625 lines each). You're looking for:

1. **CSS custom properties** — the actual colour tokens (`--bg`, `--text`, `--accent`, `--gold`, `--border`), spacing scale, font variables. Match these in the student site for visual family consistency.
2. **Type scale** — exact `font-size`, `font-weight`, `line-height`, `letter-spacing` values used for hero h1, section h2, body. Especially the `clamp()` patterns for fluid type.
3. **Headline structure** — both sites break headlines across multiple lines with `<br>` and use `<em>` (italic, often coloured) for the punchline word. Steal this rhythm pattern.
4. **Reveal animations** — `.reveal`, `.reveal-delay-1`, `.reveal-delay-2`, `.d1`, `.d2` patterns. Both sites stagger element entrances on scroll.
5. **Section padding** — measure the actual `padding-top`/`padding-bottom` on sections. Both sites breathe — generous vertical spacing is doing real work.
6. **Button styles** — primary/secondary/tertiary variations, hover states, the arrow `↗` after CTA text.
7. **Background treatments** — flat white isn't always flat; both sites use subtle gradients, borders between sections, and occasional dark sections for contrast.

## What NOT to copy

- **Specific copy** — write fresh copy per the student's interview answers. Don't lift the reference site's exact lines (e.g. "Your setter is leaking deals right now"). Use the *structure* (bold problem statement, line-break for rhythm, emotional verb), not the words.
- **Specific brand colours** — the reference accent gold (`#D4A653`-ish) is part of the ZIP brand. Use the student's chosen palette from the interview, not the reference site's tokens.
- **External assets** — both files reference the reference site's photos, Stripe links, Calendly URLs. Replace all of those with the student's own.
- **Section-by-section duplication** — don't ship a Frankenstein clone. Use the reference for *patterns* and *quality bar*, not as a literal blueprint.

## How this changes your build process

Before you write a single line of HTML, you should be able to answer:

- "What does the reference hero do that makes it feel premium?"
- "Where does the visual rhythm come from on the ZIP page?"
- "What's the spacing system? What's the type scale?"
- "How are the reveal animations choreographed?"
- "What's the difference between settoku's tone and ZIP's tone?"

If you can answer those, you've internalised the family aesthetic. *Now* design the student's site.

The student site should feel **unmistakably part of this family** — same level of restraint, same headline rhythm, same motion choreography, same spacing system — but with their content, their positioning, their accent colour.
