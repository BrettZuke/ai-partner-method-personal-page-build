# Section Patterns

> Every section the site can use, with structure, when to use, and what content to fill in. Pull templates from `templates/` and adapt to the student's answers.

---

## 1. Navigation

**Always include.** Top of page, sticky on desktop only (not mobile — saves vertical space).

**Contents:**
- Left: student's name in bold (acts as logo). E.g., "ALEX MORGAN" in 16px weight 700 letter-spacing 0.02em.
- Right: One CTA button "Book a call ↗" linking to their calendar URL.
- That's it. No nav links. This is a one-pager.

**Mobile:** Same layout, slightly smaller. Don't add a hamburger menu — there's nothing to put in it.

---

## 2. Hero

**Always include.** First thing the visitor sees.

**Layout (desktop):** 60/40 split. Left = headline + sub + CTA. Right = headshot.
**Layout (mobile):** Stacked. Headshot below headline if used at all (or hidden on mobile to save space).

**Contents:**
- **Eyebrow (optional):** "AI GROWTH OPERATOR" in small all-caps
- **H1 headline:** the positioning line, with one phrase wrapped in `.accent-underline`. Example:
  > I help fitness coaches scale to <span class="accent-underline">£10k/mo using AI systems</span>.
- **Sub-paragraph:** 1-2 sentences expanding the headline. Use lead paragraph styling (18-20px).
- **Primary CTA:** "Book a free call ↗" → calendar link
- **Secondary CTA (optional):** "See my process ↓" → scrolls to process section

**Min height:** 80vh on desktop, 70vh on mobile. Generous breathing room.

---

## 3. Stats bar

**Include if student gave 3 stats.** Skip if they didn't.

**Layout:** 3 columns desktop, 1 column mobile.

**Each stat:**
- Big number in accent color, weight 900, font-size 56-96px. Examples: `£250k`, `23x`, `47`.
- Small label below in secondary text color. Example: `Generated for clients`, `Average ROI`, `Businesses scaled`.

**Wrapping:** Above the stats, optional one-line eyebrow `THE NUMBERS`.

**Background:** white (or `--card-bg` light gray for visual separation from hero).

---

## 4. About

**Always include.**

**Layout:** Asymmetric 50/50 (or 40/60), photo on right desktop, stacked on mobile.

**Contents:**
- **Eyebrow:** `ABOUT ME`
- **H2 headline:** Short, opinionated. Examples:
  - "I'm not a guru. I'm an operator."
  - "I built this so you don't have to."
  - "Years offline. AI changed everything."
- **Body:** 2-3 short paragraphs. Their story. Why they do this. Use the student's answer from the interview, but rewrite for impact. First person. Conversational. Direct.
- **Optional:** small image (second photo) or skip imagery.

---

## 5. Services / What I Do

**Always include.**

**Layout:** 2- or 3-column card grid on desktop. 1 column mobile.

**Each service card:**
- Service number (`01`, `02`, `03`) in accent or secondary color, small
- Service name (h3, weight 700)
- 1-2 sentence description (you write this from the bullet they gave)
- Optional small "Read more ↗" link (skip if there's nothing to link to)

**Cards:** subtle border `1px solid var(--border)`, padding `32px`, border-radius `12px`. On hover, border darkens.

**Section heading:**
- Eyebrow `WHAT I DO`
- H2: "Three ways I work with clients" (or similar — match the number of services)

---

## 6. Process

**Always include.**

**Layout:** 3 horizontal steps on desktop, vertical on mobile.

**Each step:**
- Big number in accent color (`01`, `02`, `03`)
- Step name (h3): "Audit", "Build", "Scale" (or whatever student gave)
- 1-2 sentence description

**Connector line:** thin gray line between steps on desktop.

**Section heading:**
- Eyebrow `MY PROCESS`
- H2: "How we work together" or "The 3-step process"

---

## 7. Who It's For

**Always include.** This qualifies leads — only the right people book calls.

**Layout:** 2-column grid: "This is for you if…" and "This isn't for you if…".

**Each column:**
- H3 heading
- Bulleted list of 3-4 items each
- Use checkmark `✓` for "for you" and `✗` for "not for you" — but plain unicode characters, no emoji

**Section heading:**
- Eyebrow `WHO IT'S FOR`
- H2: "Is this you?"

---

## 8. Testimonials Carousel

**Always include with placeholders.**

**Layout:** Single testimonial visible at a time, dot navigation below, auto-advance every 5s.

**Each testimonial card:**
- 3-4 line quote in larger type (h3 size, weight 500)
- Below quote: avatar (initials in colored circle), name, role
- Center-aligned

**3 placeholder testimonials** — write them like real testimonials but mark them clearly:

```html
<!-- ⚠️ PLACEHOLDER — REPLACE BEFORE GOING LIVE ⚠️ -->
<!-- These are template testimonials. Replace each with a real review from a real client. -->
```

Placeholder content (these are deliberately structured to LOOK like real testimonials so the section doesn't look empty, but the comments make it clear they must be replaced):

1. "[Replace with your client's testimonial — 2-3 sentences about the result you delivered.]" — [Client Name], [Their Business]
2. "[Replace with second testimonial — focus on a specific outcome.]" — [Client Name], [Their Role]
3. "[Replace with third testimonial — emphasize speed or transformation.]" — [Client Name], [Their Business]

**Section heading:**
- Eyebrow `RESULTS`
- H2: "What clients say"

---

## 9. FAQ

**Always include.** Handles objections before the CTA.

**Layout:** Accordion. One question expanded by default, others collapsed.

**Default questions (rewrite based on student's offer):**
1. How long does it take to see results?
2. What if I'm not technical?
3. Do I need to be on social media?
4. How is this different from other AI courses/coaches?
5. What's the investment?
6. Do you offer a guarantee?

**Each item:**
- Question (h3 weight 600)
- Plus icon `+` on right that rotates to `×` when open
- Answer paragraph below (revealed on click)

**Section heading:**
- Eyebrow `QUESTIONS`
- H2: "Common questions"

---

## 10. Final CTA

**Always include.** Last push to book a call.

**Layout:** Full-width section, centered content.

**Contents:**
- H2: Strong closer. Examples:
  - "Ready to grow?"
  - "Let's build it."
  - "Stop guessing. Start operating."
- 1 line sub-paragraph: "Book a free call. We'll talk through your bottleneck and map a path forward."
- Primary CTA button: "Book a call ↗"
- Optional secondary line: "No pitch. No pressure. Just a conversation."

**Background:** can be inverted (black background, white text, accent button) for visual punctuation. Or keep white for restraint.

---

## 11. Footer

**Always include.** Minimal.

**Contents:**
- Left: copyright `© 2025 [Student Name]`
- Right: social links (Instagram, X, LinkedIn, YouTube — only the ones they gave)
- Below: tiny line `Built with the AI Partner Method` (subtle, secondary color)

**Padding:** smaller than other sections — `48px` top/bottom.

---

## Section flow rules

- Don't add sections beyond these 11. Don't add a "blog" section, don't add a "contact form", don't add a "newsletter signup".
- Order is fixed (1 → 11). Don't reorder unless the student specifically requests it.
- If the student doesn't have content for a section, ask — don't fabricate. Acceptable to skip "Stats bar" if they have no numbers, but skip nothing else.

---

## Deployment workflow

After the site is built and approved:

### 1. Initialize git
```bash
cd ~/Desktop/<student-repo-name>
git init
git add .
git commit -m "Initial site build"
```

### 2. Create GitHub repo

Walk the student through:
1. Go to github.com → click `+` top-right → "New repository"
2. Name: their-name-site (e.g., `alex-morgan-site`)
3. Public or private (their choice — public is fine, no secrets in this repo)
4. Don't initialize with README (we already have one)
5. Click "Create repository"

GitHub will show commands. The relevant ones:
```bash
git remote add origin https://github.com/<their-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

You can run these for them after asking for their GitHub username.

### 3. Deploy to Vercel

Walk them through:
1. Go to vercel.com → sign in with GitHub
2. Click "Add New" → "Project"
3. Find their repo in the list, click "Import"
4. Framework preset: "Other"
5. Click "Deploy"
6. Wait ~30 seconds. Done.

Vercel gives them a URL like `alex-morgan-site.vercel.app`. They can add a custom domain later from Vercel's dashboard if they own one.

### 4. Custom domain (optional)
If they own a domain (e.g., `alexmorgan.com`):
1. In Vercel dashboard → their project → Settings → Domains
2. Add domain → Vercel gives them DNS records
3. They update DNS at their registrar (Namecheap, GoDaddy, etc.)
4. Site is live on their domain in ~10 min to 24 hours

---

## When the student wants changes after deploy

1. They tell you what to change
2. You edit the files locally
3. Run:
```bash
git add .
git commit -m "Update <thing>"
git push
```
4. Vercel auto-rebuilds in ~30 seconds
5. Live site updates

This is the magic of git + Vercel — the student never has to log into anything to update their site. Just talk to you.
