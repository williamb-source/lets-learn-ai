# Claude Context: Let's Learn AI Website

This file captures the full context of the conversation that built this website, for use in future Claude sessions.

---

## Session Summary

### What Was Built
A 3-page educational website called **"Let's Learn AI"** that teaches people about AI consumer tools at progressive skill levels:
- **Page 1 (Begin):** Introduction for complete beginners
- **Page 2 (Level Up):** Best practices for intermediate users
- **Page 3 (Mastery):** Strategy and future trends for advanced users

### Design Evolution
1. **Initial request:** User asked for a prompt to create an AI education website with 3 pages
2. **First build:** Created basic website with light theme called "AI Tools Guide"
3. **Redesign request:** User wanted dark mode with orange zen accents, more aesthetic design
4. **Style options presented:**
   - Option A: Warm Ember Glow
   - Option B: Minimalist Zen
   - Option C: Sunset Gradient
   - Option D: Japanese Ink ← **Selected**
5. **Name change:** "AI Tools Guide" → "Let's Learn AI"
6. **Final enhancements:** Added smooth scroll and subtle animations

### Key Design Decisions
- **Theme:** Japanese Ink - near-black backgrounds with warm undertones, muted burnt orange accents
- **Aesthetic:** Zen-like, serene, sophisticated, asymmetric layouts
- **Typography:** Light weights (200-300), generous spacing
- **Accents:** Burnt orange (`#cc5500`) with glow effects
- **Texture:** Subtle paper/noise overlay at 3% opacity

### Technical Implementation
- Pure HTML, CSS, vanilla JavaScript (no frameworks)
- Single `styles.css` shared across all pages (~1800 lines)
- `animations.js` for Intersection Observer scroll animations
- Mobile responsive (breakpoints at 900px and 768px)
- Respects `prefers-reduced-motion` for accessibility

### Deployment
- **Platform:** GitHub Pages
- **Repo:** https://github.com/williamb-source/lets-learn-ai (public)
- **Live URL:** https://williamb-source.github.io/lets-learn-ai/
- Auto-deploys on push to main branch

---

## File Structure

```
/Users/williambierbower/claude-sandbox/
├── index.html          # Page 1: Begin
├── intermediate.html   # Page 2: Level Up
├── advanced.html       # Page 3: Mastery
├── styles.css          # All styling (~1800 lines)
├── animations.js       # Scroll-triggered animations
├── README.md           # Project documentation
└── CLAUDE_CONTEXT.md   # This file
```

---

## Commands Used

```bash
# Start local server
python3 -m http.server 8000

# Git setup and deploy
git init
git add index.html intermediate.html advanced.html styles.css animations.js
git commit -m "Initial commit"
git remote add origin https://github.com/williamb-source/lets-learn-ai.git
git push -u origin main

# GitHub CLI (downloaded manually)
./gh_2.63.2_macOS_arm64/bin/gh auth login
./gh_2.63.2_macOS_arm64/bin/gh repo edit --visibility public --accept-visibility-change-consequences
./gh_2.63.2_macOS_arm64/bin/gh api repos/williamb-source/lets-learn-ai/pages -X POST ...
```

---

## Content Structure by Page

### Page 1: Begin (index.html)
1. Hero with zen circle decoration
2. "What Are AI Assistants?" intro callout
3. "The Major Tools" - 5 tool cards (ChatGPT, Claude, Gemini, Copilot, Perplexity)
4. "What Can You Do?" - 6 use case cards
5. "Where to Begin" - decision guide table
6. "First Steps" - 4 numbered tips
7. CTA to Page 2

### Page 2: Level Up (intermediate.html)
1. Hero
2. "The Art of the Prompt" intro
3. "Core Principles" - 4 cards with weak/strong examples
4. "Choosing the Right Tool" - 8-row matrix table
5. "Understanding Context Windows" - split layout with bar chart
6. "Chaining Tools Together" - 3 workflow diagrams
7. "Common Mistakes" - 6 mistake cards
8. "Prompt Patterns That Work" - 4 template cards
9. CTA to Page 3

### Page 3: Mastery (advanced.html)
1. Hero
2. "Beyond the Surface" intro
3. "Consumer Products vs APIs" - 2 comparison cards
4. "Building Your Business on AI" - 3 provider cards with stat bars
5. "Building Reliable AI Systems" - 4 cards
6. "Where AI Is Heading" - 6 trend cards with status badges
7. "Build Now or Wait?" - 2-column decision guide
8. "Staying Current" - 4 resource cards
9. "Current Recommendations" - 5 recommendation rows
10. "The Path Forward" - closing text
11. CTA back to Page 1

---

## Design System Reference

### Colors
```css
--bg-deep: #0a0a09;
--bg-primary: #121210;
--bg-elevated: #1a1a17;
--bg-card: #1f1f1b;
--accent: #cc5500;
--accent-light: #e86a10;
--accent-glow: rgba(204, 85, 0, 0.4);
--accent-subtle: rgba(204, 85, 0, 0.15);
--text-primary: #e8e4df;
--text-secondary: #a09a90;
--text-muted: #6b6660;
--border-color: #2a2a25;
--border-glow: rgba(204, 85, 0, 0.3);
```

### Typography
- Font: Helvetica Neue / system sans-serif
- Hero h1: 4rem, weight 200
- Section h2: 2rem, weight 200, orange line before
- Body: weight 300, line-height 1.7-1.9

### Animations
- Hero: fadeInUp on load
- CTA button: glowPulse infinite
- Sections: fade in on scroll (Intersection Observer)
- Cards: stagger children with 0.1s delay
- Hover: lift 4px, glow border

---

## Full Rebuild Prompt

Use this prompt to recreate the entire website from scratch:

---

Create a 3-page educational website called **"Let's Learn AI"** that teaches people about AI tools at progressive skill levels. Use a **Japanese Ink dark theme** with the following aesthetic:

### Design System

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

### Page 1: "Begin" (index.html)

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

### Page 2: "Level Up" (intermediate.html)

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

### Page 3: "Mastery" (advanced.html)

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

### Animations & Interactions

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

### Technical Requirements

- Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- Mobile responsive (breakpoints at 900px and 768px)
- Single shared `styles.css` for all pages
- Single `animations.js` for scroll-triggered animations
- Semantic HTML structure
- Consistent nav across all pages with active state

---

## How to Use This Context

In a new Claude session, say:

> "Read CLAUDE_CONTEXT.md in /Users/williambierbower/claude-sandbox/ for the full context of this project, then help me [your request]"

Or for a complete rebuild:

> "Read the rebuild prompt in CLAUDE_CONTEXT.md and recreate the Let's Learn AI website"

---

*Last updated: January 3, 2026*
*Built with Claude Code (Opus 4.5)*
