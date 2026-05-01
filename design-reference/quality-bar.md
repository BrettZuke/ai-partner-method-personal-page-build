# The £10k Quality Bar — Pre-Ship Checklist

> Run this checklist on every site before shipping. The starter in `starter/` already meets the bar — your job is to keep it there as you customise. If any item below is "no", the site is not ready.

This is the difference between a £500 AI-generated page and a £10k designer build. Most of these are tiny details that compound. Skip three or four of them and the site reads as "AI built it." Hit them all and it reads as "an operator paid for this."

---

## 1. Visual hierarchy (60 seconds to the point)

- [ ] Hero headline communicates positioning in **one glance** — audience + outcome are visible without scrolling
- [ ] One accent-coloured underline phrase in the hero, **only one**
- [ ] Lead paragraph is ≤ 2 sentences, ≤ 30 words
- [ ] Primary CTA above the fold on desktop (visible without scrolling)
- [ ] No more than 3 distinct font sizes visible above the fold
- [ ] Section eyebrows used consistently (`WHAT I INSTALL`, `MY PROCESS`, `WHO IT'S FOR`, `RESULTS`, `QUESTIONS`)

## 2. Typography (Inter, executed properly)

- [ ] `text-wrap: balance` on every h1, h2, h3
- [ ] `text-wrap: pretty` on every paragraph
- [ ] Hero h1 letter-spacing ≤ -0.04em (tight, premium)
- [ ] Body copy max-width 65ch — never stretches full-width
- [ ] **Zero italics.** Bold is the only emphasis style
- [ ] **Zero all-caps headlines** (eyebrows are the only all-caps text)
- [ ] Stat numbers use `font-variant-numeric: tabular-nums`
- [ ] No pure black `#000000` — `#0A0A0A` only
- [ ] `-webkit-font-smoothing: antialiased` on body

## 3. Colour discipline (one accent, restrained use)

- [ ] One accent colour. **One.** Never two
- [ ] Accent appears on: primary CTA, accent-underline, stat numbers (optional), active states. Nowhere else
- [ ] Accent is < 5% of the visual weight on any screen
- [ ] No section backgrounds in the accent colour (whole sections in accent = amateur hour)
- [ ] No drop-shadows on text, ever

## 4. Spacing rhythm (generous, on the 8px grid)

- [ ] Section padding ≥ 80px mobile, ≥ 120px desktop
- [ ] Container max-width 1200px, narrow 760px for FAQ
- [ ] Element gaps are multiples of 8 (8, 16, 24, 32, 48, 80, 120, 160)
- [ ] Hero has at least 80vh on desktop — never crowded

## 5. Buttons & micro-interactions (haptic feel)

- [ ] Primary button has accent-coloured glow shadow (`shadow-accent` token), not flat
- [ ] **Every** button has `transform: scale(0.96)` on `:active`
- [ ] Primary button arrow icon translates `translate(2px, -2px)` on hover
- [ ] Buttons have minimum 44px hit area
- [ ] Border-radius is **8px**, never pill (brand-DNA constraint)
- [ ] No `transition: all` anywhere — specify exact properties

## 6. Motion choreography (one curve, staggered reveals)

- [ ] All transitions use `cubic-bezier(0.16, 1, 0.3, 1)` — the expo curve
- [ ] Reveal animations: `opacity 0 → 1`, `translateY 24px → 0`, 850ms duration
- [ ] Stagger delays in 90ms increments (`.d1`=80ms, `.d2`=170ms, `.d3`=260ms, `.d4`=360ms)
- [ ] Accent-underline animates in (scaleX 0 → 1) on hero load, 600ms after page paint
- [ ] `@media (prefers-reduced-motion: reduce)` strips all animations and shows content immediately
- [ ] Carousel auto-advance pauses on hover, focus, and reduced-motion preference

## 7. Cards & containers (Emil Kowalski rules)

- [ ] **Concentric border radius** — outer radius = inner radius + padding
- [ ] **Layered shadows** — multiple transparent box-shadow values, never single solid
- [ ] **Image outline** `1px solid rgba(10, 10, 10, 0.06)` on every photo
- [ ] Cards have visible hover state — border darkens, lifts 2px, shadow grows
- [ ] No `border` on cards that already have shadow — pick one (we use shadow on hover, border at rest)

## 8. Sticky nav

- [ ] Backdrop-filter blur 20px + saturate 180% — glassy
- [ ] Border + shadow appear only **after scroll** (transparent at top)
- [ ] Nav height 72px mobile, 88px desktop
- [ ] Logo and CTA — that's it. No nav links. No hamburger.

## 9. Anti-AI tells (the dead giveaways)

- [ ] No "John Doe" / "Sarah Chan" testimonial names — use bracketed `[Client Name]` placeholders only
- [ ] No round-number stats (`100%`, `50+`, `99.99%`) — textured numbers (`47`, `£183k`, `23.4×`) read as real
- [ ] No "Acme" / "Nexus" / "SmartFlow" placeholder companies
- [ ] No emoji in body copy. Arrow symbols `↗` `↓` only
- [ ] No `#000000` (already covered, repeating because it's the #1 tell)
- [ ] No "AI purple" `#8B5CF6` or default Tailwind violet
- [ ] No centred body paragraphs — left-align body text
- [ ] No "We" language — first person, "I"
- [ ] No stock photo of "diverse team pointing at laptop"

## 10. Copy (Ogilvy + Copy Elite, no slop)

- [ ] Hero headline reads in 2 seconds, says exactly who it's for and what they get
- [ ] Specific numbers everywhere stats appear — no vague "many clients" / "huge results"
- [ ] FAQ answers handle the **real** objection, don't dodge it
- [ ] Conversational rhythm — short sentences after long ones. Cuts. Like this.
- [ ] First-person throughout. Never "we" or "our team"
- [ ] No "harness", "leverage", "synergy", "unlock", "elevate", "empower"
- [ ] No em-dash + adjective combos that AI loves (— a true game-changer)
- [ ] CTA copy is concrete: "Book a free call", not "Get started today"

## 11. Mobile (50%+ of traffic)

- [ ] Hero stacks cleanly on 375px viewport (iPhone SE)
- [ ] Photo collapses below or hides on mobile (don't shrink it weirdly)
- [ ] Buttons full-width or generously padded on mobile
- [ ] Service cards stack 1-column under 768px
- [ ] FAQ readable without horizontal scroll
- [ ] No nav hamburger — sticky nav still shows logo + CTA
- [ ] All hit areas ≥ 44px

## 12. Performance

- [ ] Lighthouse mobile score ≥ 95 for Performance, Accessibility, Best Practices, SEO
- [ ] Hero image < 300KB, lazy-loaded if below fold
- [ ] No animation libraries (anime.js, GSAP, framer-motion) — vanilla CSS + IntersectionObserver only
- [ ] Fonts loaded via `display=swap`
- [ ] No blocking JS in `<head>`
- [ ] CSS is one file at the root, ≤ 25KB

## 13. SEO + sharing

- [ ] `<title>` tag is `[Name] — AI Growth Operator`
- [ ] `<meta name="description">` matches positioning
- [ ] Open Graph tags set (`og:title`, `og:description`, `og:image`, `og:type`)
- [ ] Single h1 per page (the hero headline)
- [ ] Semantic HTML — `<nav>`, `<header>`, `<section>`, `<footer>`, `<article>`
- [ ] Alt text on every image

## 14. Accessibility

- [ ] Visible focus state on every interactive element (`:focus-visible`)
- [ ] Colour contrast ratio ≥ 4.5:1 for body, ≥ 3:1 for h1
- [ ] Keyboard navigation works through all sections
- [ ] Carousel pauses on focus + responds to arrow keys
- [ ] `aria-hidden`, `aria-selected`, `aria-label` set on carousel + dots
- [ ] `prefers-reduced-motion` respected (no auto-animations)

## 15. Pre-launch

- [ ] All `[Student Name]`, `[handle]`, `#book` placeholders replaced
- [ ] Booking link points to a real Calendly/Cal.com/Tally URL
- [ ] Photo dropped in `assets/` (or hero block deleted if no photo)
- [ ] Testimonial placeholders flagged with `PLACEHOLDER — REPLACE BEFORE GOING LIVE` comments
- [ ] Footer socials trimmed to only the ones the student actually uses
- [ ] Year auto-fills in footer
- [ ] Tested on iPhone 13 (or Chrome devtools 375px viewport)
- [ ] Run on PageSpeed Insights — green across the board
- [ ] Run through Grammarly or similar — zero typos
- [ ] OG image set so link previews look pro on iMessage / X / LinkedIn

---

## How to use this checklist

After building the site, run through every box. If anything is "no":

1. **Don't ship.** Fix it.
2. **Tell the student you're double-checking the quality before they preview.** They paid Dan for premium output. Hold the bar.
3. If a particular item conflicts with a student's specific request (e.g. they insist on a different border-radius), document the override in the file and move on. But default to the bar.

The starter already meets every item on this list. As you customise, the only thing that should change is **content** (copy, photo, accent colour). Structure, motion, and micro-details stay.

If you find yourself rewriting the CSS architecture, stop. The architecture is the bar. Customise within it, not around it.
