---
name: distinctive-design
description: Build sites that don't look generic. Override default LLM design biases. Use when designing or rebuilding any visual moment on the page.
---

# Distinctive Design

The default LLM design output is generic SaaS — pastel gradients, rounded everything, three identical feature cards in a row, stock-illustrated humans, "modern minimalist" boilerplate. It's been seen 10,000 times. It says nothing. **Override that default.**

## Why this matters

Students paid for premium training to operate. Their site is a sales tool. A generic site signals a generic operator. A distinctive site signals taste, confidence, and that the person behind it actually thinks. That's the entire point of the authority site.

## Core principles

### 1. Asymmetry beats symmetry
Three columns of equal cards = boring. One large card + two small = dynamic. A 60/40 split with off-center type = editorial. Break the grid intentionally on at least one section per page.

### 2. Type as art
Headlines should be SCALE moments, not just labels. Display headlines on desktop should be **80-160px**. Don't be afraid of headlines that take up half the screen. The reader's eye craves a single moment of impact per scroll.

### 3. One visual moment per scroll
Each section should have ONE thing the eye locks onto: a giant number, a striking quote, a marquee, a bold image. Not five competing elements. Subtraction is the move.

### 4. Confidence through whitespace
Cheap design is crowded. Premium design lets things breathe. Use 120-200px section padding on desktop. Let a stat number stand alone. Let a headline have empty space around it. The visitor will lean in.

### 5. Color as punctuation
The accent color is for one job per screen — usually the CTA, sometimes a single underline or stat. Never paint sections in accent. Never use 3+ colors. Restraint is the difference between £5k and £50.

### 6. Texture without decoration
Subtle texture (subtle grain, very light noise, fine borders) reads premium. Decorative gradients, drop shadows, glows read amateur. If you add texture, it should be barely perceptible.

## Distinctive moves to use (pick 2-3 per page)

### A. Oversized display headline
The hero h1 should be 80-120px on desktop. Word-wrapped intentionally. One phrase wrapped in `.accent-underline` or larger weight to create rhythm.

### B. Marquee strip
A horizontal scrolling text strip between sections — running things like "PERFORMANCE-ONLY GROWTH ✦ AI SYSTEMS ✦ AUTOMATION". Adds motion + density without clutter. Use 15-20px font, opacity 0.6, 30s loop.

### C. Big number moment
Pull a single stat OUT of the stats grid and make it gigantic — 200-300px display. Like a magazine spread.

### D. Pull quote interlude
Between two sections, drop a single 3-line quote at h1-size, indented, accent-colored or with an accent mark. Acts as a chapter divider.

### E. Bento layout
For services, use 1 large card + 2 smaller cards instead of 3 equal cards. Different sizes signal different importance.

### F. Inverted section
One section with black background, white text. Use for the final CTA or a "manifesto" interlude. Creates visual punctuation.

### G. Editorial split
About section with the eyebrow + name on the left in 25% width, the story on the right in 50% width, with 25% empty. Magazine-style.

### H. Sticky scroll moment
Process section: numbers stay sticky on the left while text scrolls past. Use IntersectionObserver. Premium feel.

## Anti-patterns (instant amateur signals)

- Three equal feature cards in a row, each with an emoji icon at top
- "Trusted by" logos that are obviously placeholder grays
- Pastel gradient backgrounds (purple-to-pink, blue-to-teal)
- Drop shadows on cards (use subtle borders instead)
- Stock photos of laptops or "diverse teams"
- Centered body paragraphs (only headlines should center, body always left)
- "Get started" buttons in mint green
- Auto-playing video in hero
- Pop-up email captures
- Cookie consent banners (not needed for personal portfolio)
- Dark mode toggles
- Cluttered grid of testimonials (use a carousel — one at a time)
- Multiple competing CTAs ("Start free trial" / "Book demo" / "Contact us")
- Emojis as section icons

## Decision rule

Before shipping any section, ask: "Would I see this on settoku.app or zukeinternationalpimp.com?" If no, redesign. If still no after redesign, cut it.

When in doubt, do less. **Restraint is the brand.**
