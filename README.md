# Let's Learn AI

A 3-page educational website teaching AI tools at progressive skill levels, featuring a Japanese Ink dark theme with burnt orange zen accents.

**Live Site:** https://williamb-source.github.io/lets-learn-ai/

---

## Project Overview

This site guides users through AI tools at three levels:
1. **Begin** - Introduction to major AI tools (ChatGPT, Claude, Gemini, Copilot, Perplexity)
2. **Level Up** - Prompting best practices, tool selection, workflows
3. **Mastery** - API strategy, future trends, business recommendations

---

## File Structure

```
/
├── index.html        # Page 1: Begin (beginner intro)
├── intermediate.html # Page 2: Level Up (best practices)
├── advanced.html     # Page 3: Mastery (strategy & trends)
├── styles.css        # All styling (dark theme, animations)
├── animations.js     # Scroll-triggered animations
└── README.md         # This file
```

---

## Design System

### Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-deep` | `#0a0a09` | Deepest background |
| `--bg-primary` | `#121210` | Primary background |
| `--bg-elevated` | `#1a1a17` | Elevated surfaces |
| `--bg-card` | `#1f1f1b` | Card backgrounds |
| `--accent` | `#cc5500` | Burnt orange accent |
| `--accent-light` | `#e86a10` | Hover state |
| `--accent-glow` | `rgba(204, 85, 0, 0.4)` | Glow effects |
| `--text-primary` | `#e8e4df` | Primary text |
| `--text-secondary` | `#a09a90` | Secondary text |
| `--text-muted` | `#6b6660` | Muted text |
| `--border-color` | `#2a2a25` | Borders |

### Typography
- **Font:** Helvetica Neue / system sans-serif
- **Weights:** 200 (headings), 300 (body), 400-500 (emphasis)
- **Hero h1:** 4rem, weight 200
- **Section h2:** 2rem, weight 200, orange line accent
- **Body:** 1.1rem, weight 300, line-height 1.7-1.9

### Visual Elements
- Subtle paper texture overlay (SVG noise at 3% opacity)
- Orange glow effects on hover/focus
- Decorative zen circle in hero
- Border-left accents on intro sections
- Cards with hover lift and glow

---

## Animations

### On Page Load
- Hero title/subtitle fade in from below
- Progress indicator fades in
- Zen circle fades in slowly
- CTA button has pulsing glow

### On Scroll (Intersection Observer)
- Sections fade in on viewport entry
- Section headers animate with orange line extending
- Cards stagger in sequentially
- Bar charts animate fill when visible

### Hover Effects
- Cards lift up 4px
- Matrix rows slide right 8px
- Tip numbers rotate and fill orange
- Workflow steps scale up

### Accessibility
- Respects `prefers-reduced-motion`

---

## Deployment

Hosted on GitHub Pages. Any push to `main` auto-deploys.

```bash
git add .
git commit -m "Update"
git push
```

---

## Rebuild Prompt

Use this prompt to recreate the entire website from scratch:

---

### Prompt: Build "Let's Learn AI" Educational Website

Create a 3-page educational website called **"Let's Learn AI"** that teaches people about AI tools at progressive skill levels. Use a **Japanese Ink dark theme** with the following aesthetic:

#### Design System

**Colors:**
- Background deep: `#0a0a09`
- Background primary: `#121210`
- Background elevated: `#1a1a17`
- Background card: `#1f1f1b`
- Accent (burnt orange): `#cc5500`
- Accent light: `#e86a10`
- Accent glow: `rgba(204, 85, 0, 0.4)`
- Text primary: `#e8e4df`
- Text secondary: `#a09a90`
- Text muted: `#6b6660`
- Border: `#2a2a25`

**Typography:**
- Font: Helvetica Neue / system sans-serif
- Weights: 200 (headings), 300 (body), 400-500 (emphasis)
- Hero h1: 4rem, weight 200
- Section h2: 2rem, weight 200, with orange line accent before text
- Body: 1.1rem, weight 300, line-height 1.7-1.9

**Visual Elements:**
- Subtle paper texture overlay (SVG noise filter at 3% opacity)
- Orange glow effects on hover and focus states
- Decorative zen circle in hero (nested circles with orange inner ring)
- Border-left accents on intro sections
- Cards with subtle hover lift and glow

---

#### Page 1: "Begin" (index.html)

**Hero:**
- Progress indicator: "01 Begin" (active) | "02 Level Up" | "03 Mastery"
- Title: "Getting Started with AI"
- Subtitle about gentle introduction, no technical background required

**Sections:**
1. **What Are AI Assistants?** - Intro callout with border-left accent
2. **The Major Tools** - 2-column grid of 5 tool cards:
   - ChatGPT (OpenAI): general-purpose, plugins, DALL-E, voice
   - Claude (Anthropic): long-form writing, analysis, coding, nuanced
   - Gemini (Google): Google integration, multimodal, YouTube
   - Copilot (Microsoft): Office integration, Windows, enterprise
   - Perplexity: research with citations, real-time info
   - Each card shows: name, maker, description, strengths list, free/paid tiers
3. **What Can You Do?** - 3-column grid of 6 use cases: Writing, Learning, Ideation, Coding, Research, Analysis
4. **Where to Begin** - Decision guide table matching needs to recommended tools
5. **First Steps** - 4 numbered tips: speak naturally, provide context, iterate, verify
6. **CTA** - "Continue to Level Up" button with glow animation

---

#### Page 2: "Level Up" (intermediate.html)

**Hero:**
- Progress indicator: "02 Level Up" active
- Title: "Level Up Your AI Skills"
- Subtitle about extracting real value

**Sections:**
1. **The Art of the Prompt** - Intro callout
2. **Core Principles** - 2-column grid of 4 principle cards, each with:
   - Large faded number (01-04)
   - Principle name and explanation
   - Weak vs Strong example comparison (red vs orange accents)
   - Principles: Be Specific, Provide Context, Iterate Freely, Assign a Role
3. **Choosing the Right Tool** - Matrix table with columns: Task | Best Choice | Why
   - 8 rows covering: long documents, research, coding, YouTube, Excel/Word, brainstorming, news, image analysis
4. **Understanding Context Windows** - Split layout:
   - Left: explanation text
   - Right: bar chart showing token limits (Claude 200K, Gemini 1M+, ChatGPT 128K)
5. **Chaining Tools Together** - 3 workflow cards showing multi-tool pipelines:
   - Research: Perplexity → Claude → ChatGPT
   - Content: Claude → Gemini → ChatGPT
   - Code: Claude → Perplexity → Claude
6. **Common Mistakes** - 3-column grid of 6 mistake cards with X icons
7. **Prompt Patterns That Work** - 4 template cards with monospace code blocks
8. **CTA** - "Continue to Mastery"

---

#### Page 3: "Mastery" (advanced.html)

**Hero:**
- Progress indicator: "03 Mastery" active
- Title: "AI Strategy & Future Trends"
- Subtitle for builders and strategists

**Sections:**
1. **Beyond the Surface** - Intro callout
2. **Consumer Products vs APIs** - 2 comparison cards side-by-side:
   - Consumer: best for, limitations
   - API (highlighted with orange border): best for, considerations
   - "When to Move to API" callout below
3. **Building Your Business on AI** - 3-column provider grid:
   - OpenAI, Anthropic, Google
   - Each with: stat bars (API Stability, Enterprise Features, Documentation), notes
   - "On Vendor Lock-in" warning callout
4. **Building Reliable AI Systems** - 4-column grid: Consistency, Fallbacks, Monitoring, Cost Control
5. **Where AI Is Heading** - 6 trend cards with status badges:
   - Emerging Now (orange): Agents & Autonomy, Computer Use
   - Active Development (blue): Multimodal Expansion, Reasoning Models
   - On the Horizon (purple): Personalization, Local & Edge AI
6. **Build Now or Wait?** - 2-column split:
   - Build Now (orange accent): list of ready-to-build applications
   - Wait & Watch (muted accent): list of not-yet-reliable uses
7. **Staying Current** - 4-column resource grid
8. **Current Recommendations** - 5 recommendation rows with use case → model mapping
9. **The Path Forward** - Closing philosophical text
10. **CTA** - "Back to Beginning" (circular navigation)

---

#### Animations & Interactions

**CSS Animations:**
- Smooth scroll behavior (`scroll-behavior: smooth`)
- Hero elements fade in on load with staggered delays
- CTA button has pulsing glow (`glowPulse` keyframe animation)
- Sections and cards fade in from below on scroll (Intersection Observer)
- Staggered children animation for grids (0.1s delay per item)
- Bar charts animate fill width when visible

**Hover Effects:**
- Cards: lift up 4px, border glows orange
- Matrix rows: slide right 8px
- Tip numbers: rotate 5deg, fill with orange
- Workflow steps: scale 1.02
- Nav links: orange underline animates width

**Other:**
- Navbar becomes solid with blur on scroll (>50px)
- Zen circle has subtle parallax on scroll
- Respects `prefers-reduced-motion` media query

---

#### Technical Requirements

- Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- Mobile responsive (breakpoints at 900px and 768px)
- Single shared `styles.css` for all pages
- Single `animations.js` for scroll-triggered animations
- Semantic HTML structure
- Consistent nav across all pages with active state

---

## License

MIT

---

*Built with Claude Code*
