# Typography Spec

> Font system for every site. Use this exactly. No deviations.

---

## Font family

**Inter** from Google Fonts. One family, multiple weights.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">
```

In CSS:
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## Type scale

```css
:root {
  /* Mobile-first sizes */
  --fs-display: 48px;       /* Hero h1 */
  --fs-h2: 36px;            /* Section headings */
  --fs-h3: 22px;            /* Sub-headings */
  --fs-body-lg: 18px;       /* Lead paragraphs */
  --fs-body: 16px;          /* Default body */
  --fs-small: 13px;         /* Meta, captions, eyebrows */
  --fs-stat: 56px;          /* Big stat numbers */
}

@media (min-width: 1024px) {
  :root {
    --fs-display: 80px;
    --fs-h2: 56px;
    --fs-h3: 28px;
    --fs-body-lg: 20px;
    --fs-body: 17px;
    --fs-small: 14px;
    --fs-stat: 96px;
  }
}
```

---

## Weight + spacing per level

```css
h1, .display {
  font-size: var(--fs-display);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

h2 {
  font-size: var(--fs-h2);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

h3 {
  font-size: var(--fs-h3);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

p {
  font-size: var(--fs-body);
  font-weight: 400;
  line-height: 1.6;
  color: var(--text);
}

p.lead {
  font-size: var(--fs-body-lg);
  line-height: 1.5;
}

.eyebrow {
  font-size: var(--fs-small);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.stat-number {
  font-size: var(--fs-stat);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--accent);
}

.stat-label {
  font-size: var(--fs-small);
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: 8px;
}
```

---

## Rules

1. **No more than 3 font sizes visible above the fold.** Hero headline, body lead, button. That's it.
2. **Body text max width:** 65 characters per line. Use `max-width: 65ch` on `p` elements.
3. **Never center-align body paragraphs.** Always left-aligned. Centered headlines are OK; centered body is not.
4. **No italics.** Use bold for emphasis. Italics in this design language look like an afterthought.
5. **Eyebrow above section headings is optional but elegant.** Format: `WHAT I DO`, `MY PROCESS`, `WHO IT'S FOR`. Always all-caps, small, secondary color.
6. **Stat numbers are the only place to use weight 900 + accent color.** They should look like the loudest thing on the page.

---

## Headline formulas

The hero h1 is the single most important piece of copy. Use one of these patterns (rewrite based on student's interview):

**Pattern A — Direct claim:**
> I help [audience] [outcome] using AI.

**Pattern B — Bold statement:**
> [Audience], your [thing] is broken. AI fixes it.

**Pattern C — Specific number:**
> From £0 to £10k/mo in [timeframe] using AI systems.

**Pattern D — Promise + accent underline:**
> Performance-only growth for [audience]. <span class="accent-underline">Pay only when it works.</span>

For the underline pattern (D), wrap the closing phrase in a `<span class="accent-underline">` and style with a thick underline in the accent color:

```css
.accent-underline {
  border-bottom: 6px solid var(--accent);
  padding-bottom: 2px;
}
```

Pick the pattern based on the student's positioning answer. If unsure, default to A.
