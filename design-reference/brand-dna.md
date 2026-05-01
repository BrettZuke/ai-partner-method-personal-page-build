# Brand DNA — The Visual Language

> This is the design language for every site built from this repo. It's drawn from the kit's reference sites (settoku.app, zukeinternationalpimp.com). Follow it strictly. The point is consistency: every AI Partner Method student site should feel like it belongs to the same family.

---

## Core principle

**Confident minimalism with one screaming accent.**

White background. Black text. One bold accent color used sparingly but unforgettably. Typography does the heavy lifting — no decorative graphics, no stock photos of "diverse teams pointing at laptops", no clipart, no gradients on backgrounds.

The site looks like it cost £5k because it doesn't try to. Premium = restraint.

---

## Color foundations

### Always
- **Background:** `#FFFFFF` (pure white)
- **Primary text:** `#0A0A0A` (near-black, slightly warmer than pure black for type rendering)
- **Secondary text:** `#5C5C5C` (medium gray, for sub-copy)
- **Borders / dividers:** `#E5E5E5` (subtle, almost invisible)
- **Card backgrounds:** `#FAFAFA` (off-white, only when separation is necessary)

### Accent (one color, picked from interview)
This is the only color besides black, white, and gray on the page. It appears on:
- Primary CTA buttons
- The single underline / highlight in the hero headline
- Hover states
- Stat numbers (optional — only if the vibe calls for it)
- Active states (e.g. selected FAQ accordion)

**Never** use the accent for:
- Body text
- Section backgrounds (whole sections in accent color = amateur hour)
- Borders (use the gray border instead)
- More than ~5% of the visual weight on any screen

See `color-palettes.md` for the curated accent options.

---

## Typography

**One font family for the entire site:** **Inter** (Google Fonts).

Inter is geometric, modern, has 9 weights, and renders beautifully at every size. It's what settoku.app and zukeinternationalpimp.com both use. Don't pick anything else.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">
```

### Type scale (mobile-first, scales up on desktop)

| Use | Mobile | Desktop | Weight | Letter spacing |
|-----|--------|---------|--------|----------------|
| Display (hero h1) | 48px | 80px | 800 | -0.04em |
| Section heading (h2) | 36px | 56px | 800 | -0.03em |
| Sub-heading (h3) | 22px | 28px | 700 | -0.02em |
| Body large | 18px | 20px | 400 | -0.01em |
| Body | 16px | 17px | 400 | 0 |
| Small / meta | 13px | 14px | 500 | 0.02em |
| Stat number | 56px | 96px | 900 | -0.04em |

### Rules
- **Line height:** 1.1 for headlines, 1.5 for body, 1.0 for stat numbers
- **Max line length:** 65 characters for body copy (don't let lines stretch full-width)
- **Bold for emphasis only:** never italics. Use weight 700+ to emphasize.
- **No all-caps headlines.** Use sentence case or title case. ALL CAPS = shouty/dated.
- **One small all-caps eyebrow** is fine above section headings (e.g., `WHAT I DO` in 13px, weight 600, letter-spacing 0.1em, color secondary)

---

## Spacing system

Use multiples of 8px. The system:

- `4px` (rare — only for tight icon spacing)
- `8px` (small gap inside components)
- `16px` (default gap between elements in a card)
- `24px` (gap between cards, padding inside cards)
- `32px` (gap between sub-sections)
- `48px` (gap between major elements within a section)
- `80px` (mobile section padding top/bottom)
- `120px` (desktop section padding top/bottom)
- `160px` (extra-generous, for hero spacing)

**Containers:** max-width `1200px`, centered, `24px` horizontal padding on mobile, `48px` on desktop.

---

## Layout patterns

### Section structure
Every section follows this pattern:

```
[Section padding top]
[Optional eyebrow text — small, all caps]
[Section heading — large, bold]
[Optional sub-heading or short paragraph]
[Content — varies by section]
[Section padding bottom]
```

### Grid
- Mobile: 1 column, full width
- Tablet (768px+): 2 columns where appropriate
- Desktop (1024px+): up to 3 or 4 columns for cards/grids

### Asymmetry
Hero and About sections can use asymmetric layouts (e.g., 60/40 split on desktop, photo on right). Other sections should be centered or full-width.

---

## Buttons

**Primary CTA:**
- Background: accent color
- Text: white (or black if accent is light/yellow)
- Padding: `16px 28px` (mobile), `18px 32px` (desktop)
- Border-radius: `8px` (slightly rounded, never fully pill)
- Font weight: 600
- Font size: 16px
- Includes arrow `↗` or `→` after text
- Hover: shifts up 2px, accent darkens 10%

**Secondary CTA:**
- Background: transparent
- Border: 1.5px solid `#0A0A0A`
- Text: `#0A0A0A`
- Same padding/radius as primary
- Hover: background goes black, text goes white

**Tertiary / inline link:**
- Underline only, accent color, weight 500
- Hover: removes underline

---

## Interaction & motion

**Less is more.** Settoku and ZIP both use minimal motion. Rules:

- **On scroll:** sections fade in (opacity 0 → 1, translateY 12px → 0, 600ms ease)
- **On hover (buttons):** translate up 2px, transition 200ms ease
- **On hover (cards):** subtle border darken or shadow grow, 200ms ease
- **No parallax. No scroll-jacking. No fancy 3D. No mouse-follow effects.**
- **Carousel for testimonials:** auto-advance every 5s, manual dot navigation, no fancy slide effects

Use IntersectionObserver for scroll fade-ins. Don't use heavy animation libraries.

---

## Imagery

- **Hero:** student's headshot, square or portrait, centered or right-aligned. Black-and-white treatment optional but elegant.
- **About:** can use a second photo, or skip imagery entirely
- **Services / Process:** no images. Use typography and numbers.
- **Testimonials:** placeholder client avatars (initials in a colored circle is fine)
- **Logos / press:** if the student has them, a single grayscale row above stats

**Never use:** stock photos, AI-generated illustrations, emoji, decorative icons in the body. The only "icons" allowed are arrow symbols on CTAs.

---

## What NOT to do (these are dead giveaways of amateur sites)

- Gradients on full backgrounds
- Drop shadows on text
- Multiple accent colors
- Rounded buttons with weird radii (50px or "pill" shape)
- Center-aligned body paragraphs (always left-align body copy)
- "We" language (it's a personal site — use "I")
- Generic SaaS illustrations (the line-art people in pastel colors)
- Too many sections (10 sections max, the structure in CLAUDE.md is the cap)
- Auto-playing video in hero
- Pop-up email captures
- Cookie banners (not needed for a portfolio site)
- Dark mode toggle (waste of time, ship light only)

---

## Anti-AI tells (the subtle giveaways)

These are the patterns that scream "AI built this" even when the visual design is otherwise fine. Avoid all of them. (Borrowed from `taste-skill` by Leonxlnx — credit where due.)

**Content tells:**
- **No "John Doe" / "Sarah Chan" / "Jack Su"** in testimonials. Use realistic, varied first + last name combos. If the student hasn't given you real names, use clearly-marked placeholders like `[Real client name here]` rather than fabricated ones.
- **No round-number stats.** `99.99%`, `100+ clients`, `50% growth` — these are AI defaults. If a stat is unverifiable, use textured numbers (`47 businesses scaled`, `£183k generated`, `23.4x ROI`) — they read as real even when they're estimates.
- **No "Acme" / "Nexus" / "SmartFlow"** placeholder company names. If you need a fictional client name in a testimonial slot, use the explicit comment marker the templates already include — don't invent one.

**Interaction tells:**
- **Tactile button feedback on `:active`** — every primary CTA must have `transform: translateY(1px)` or `scale(0.98)` on press. Static buttons feel dead.
- **No generic loading spinners.** If a section has loading state, use a skeleton matching the layout's shape, not a circular spinner.
- **No emoji in body copy.** They look casual on Slack, cheap on a personal authority site. Use the arrow symbols (`↗`, `→`) defined in the button system and nothing else.

**Visual tells:**
- **No pure black (`#000000`).** The brand DNA already specifies `#0A0A0A` — keep it.
- **No drop shadows on text** — already covered above, repeating because it's the #1 AI tell.
- **No "AI purple" (`#8B5CF6`) or default Tailwind violet anywhere.** The five accent palettes are the only options.
- **Don't center body paragraphs.** Hero copy can be left-aligned or split-screen. Body sections should always left-align text — centered body is a tell.

If you catch yourself defaulting to any of these, stop and use the alternative. The whole point of this kit is sites that don't read as AI-generated.

---

## What good looks like

The finished site should:
1. Look identical in feel to settoku.app and zukeinternationalpimp.com
2. Feel like a £5k design despite being free
3. Be readable in 60 seconds — visitor scrolls, gets the point, books a call
4. Work flawlessly on iPhone (50%+ of traffic)
5. Have one clear next action on every screen (book a call)

If you're ever in doubt while building — pull back. Less color, less motion, less copy, less ornament. The brand DNA is restraint.
