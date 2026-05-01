# Color Palettes

> Five curated accent colors. Pick one based on the student's "vibe" answer in the interview. Each comes with primary, hover, and light tint values.

---

## 1. Electric (default — recommended)

The settoku.app feel. Tech-forward, clean, professional. Works for anyone who can't decide.

- **Accent:** `#0066FF`
- **Accent hover:** `#0052CC` (10% darker)
- **Accent tint:** `#E6F0FF` (very light, for hover backgrounds)
- **Vibe:** Trust, intelligence, future
- **Best for:** AI/tech-focused offers, B2B services, premium positioning

---

## 2. Warm

The zukeinternationalpimp.com feel. Energetic, performance-driven, money-coded.

- **Accent:** `#FF5722`
- **Accent hover:** `#E64A19`
- **Accent tint:** `#FFEDE5`
- **Vibe:** Action, results, urgency
- **Best for:** Growth/sales-focused offers, fitness/coaching, performance marketing

---

## 3. Clean

Pure black-and-white. No accent color at all. Most premium feeling.

- **Accent:** `#0A0A0A` (just black — buttons are black)
- **Accent hover:** `#333333`
- **Accent tint:** `#F5F5F5`
- **Vibe:** Editorial, premium, restrained
- **Best for:** High-ticket consulting, executive coaching, designer-y offers

---

## 4. Money

Green accent. Direct association with wealth and growth.

- **Accent:** `#00C853`
- **Accent hover:** `#00A843`
- **Accent tint:** `#E5F8EC`
- **Vibe:** Wealth, growth, financial outcome
- **Best for:** Money-focused offers, trading, sales coaching, "make more money" positioning

---

## 5. Custom

Student supplies a hex code. Validate it's a real hex (#RRGGBB) and:

- Generate `accent hover` by darkening the hex by 10% (multiply RGB by 0.9)
- Generate `accent tint` by mixing the hex with white at 8% opacity (or use a fixed light variant)
- Reject if the color is too light to use on white (luminance check — don't use yellow #FFFF00 etc on white background)

If they want yellow or another light color, gently steer them: "That'll be hard to read on white — want me to use it for accents only and keep buttons black?"

---

## How to apply a palette

When the student picks a palette, set CSS custom properties at the top of `style.css`:

```css
:root {
  /* Always the same */
  --bg: #FFFFFF;
  --text: #0A0A0A;
  --text-secondary: #5C5C5C;
  --border: #E5E5E5;
  --card-bg: #FAFAFA;

  /* From the picked palette */
  --accent: #0066FF;
  --accent-hover: #0052CC;
  --accent-tint: #E6F0FF;
}
```

Then reference these throughout the CSS. Never hard-code colors anywhere else.

---

## Palette switching

If the student says "actually let me see the warm version" mid-build, just swap the three `--accent*` variables and reload. Don't rebuild anything else. The whole site re-themes from the variable swap.
