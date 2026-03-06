# Marq'd — Claude Code Instructions

## Project Overview

**Marq'd** is a queer community platform and living archive — where people share anonymous stories tied to real-world geographic locations, preserving queer existence as primary historical source material. The centerpiece is an interactive 3D globe displaying story locations as glowing dots. Each story is an **archive entry**: a permanent, numbered, citable record.

This project is in its founding stage. The immediate goal is a beautiful, functional founding site live on GitHub Pages — establishing Marq'd as a real and serious project, communicating the mission, and inviting early supporters and contributors — while laying clean architectural groundwork for the full platform.

**Do not over-build today. Build the right foundation.**

Read `docs/MISSION.md` and `docs/DESIGN.md` before writing a single line of code. Every decision should follow from those documents.

---

## Today's Goal — The Founding Site

A polished static site on GitHub Pages. No live backend yet. The globe renders with mock seed data. All four pages complete. Donations linked. "Coming soon" features acknowledged honestly and with excitement.

### Definition of Done
- [ ] Live at `https://[username].github.io/marqd`
- [ ] Globe renders, rotates, shows mock archive entry dots
- [ ] All four pages: `/`, `/about`, `/contact`, `/support`
- [ ] Open Collective donation link present
- [ ] "Get Involved" CTA present and linked to `/contact`
- [ ] Site clearly communicates it is in active early development
- [ ] Mobile responsive (test at 375px throughout)
- [ ] Architecture clean and ready for Phase 1 to build into

---

## Tech Stack

- **Frontend:** React + TypeScript (Vite)
- **Globe:** `globe.gl` — simplest path to a beautiful interactive globe
- **Styling:** Tailwind CSS + custom CSS design tokens
- **Routing:** `react-router-dom` with `HashRouter` (required for GitHub Pages)
- **Contact Form:** Formspree (free, no backend required)
- **Hosting:** GitHub Pages
- **Backend:** None yet — mock data only. Supabase added in Phase 1.

---

## Design System

Refer to `docs/DESIGN.md` for the complete system. Critical points for Claude Code:

### Aesthetic Direction
Academic + archival + queer. Literary journal meets museum archive meets documentary film. Not a dating app. Not a SaaS product. Every element should feel like it belongs to something built to last.

**Reference aesthetics:** *The Paris Review*, the Smithsonian digital collections, *GLQ: A Journal of Lesbian and Gay Studies*.

### Color Tokens
```css
:root {
  --bg-base:        #07090f;
  --bg-surface:     #0e1118;
  --bg-elevated:    #161b27;
  --bg-overlay:     rgba(7, 9, 15, 0.88);
  --accent-gold:    #e8c97a;
  --accent-teal:    #4ecdc4;
  --accent-rose:    #c97a8e;
  --pride-red:      #c0392b;
  --pride-orange:   #d4651a;
  --pride-yellow:   #c9a227;
  --pride-green:    #2e7d52;
  --pride-blue:     #2471a3;
  --pride-violet:   #7d3c98;
  --text-primary:   #f0ece4;
  --text-secondary: #a8a5a0;
  --text-muted:     #7a7d8a;
  --border-subtle:  rgba(255, 255, 255, 0.07);
  --border-visible: rgba(255, 255, 255, 0.14);
}
```

### Fonts (load from Google Fonts)
```css
--font-display: 'Playfair Display', Georgia, serif;   /* Headlines, wordmark, pull quotes */
--font-ui:      'DM Sans', sans-serif;                /* All interface text */
--font-mono:    'JetBrains Mono', monospace;          /* Record IDs, timestamps, tags, eyebrows */
```

### The Pride Rule
A 1px 6-color gradient divider — used once or twice per page as a section separator. See `docs/DESIGN.md` for the CSS. Never overused.

### Lambda Mark (λ)
The lambda symbol appears as a subtle brand mark in the globe drawer header, the submit modal step indicator, and as a decorative element on the About and Mission pages. Rendered in `--text-muted` or `--accent-gold`.

---

## Archive Entry (Story Card)

The story card is not a social media post. It is an **archive entry**. Structure:

```
┌─────────────────────────────────────────────┐
│  FIELD RECORD  ·  #MQ-004821                │  ← mono eyebrow, --text-muted
├─────────────────────────────────────────────┤
│  São Paulo, Brazil                          │  ← display italic, --accent-gold
│  March 2024  ·  Outdoor  ·  Spontaneous    │  ← mono, --text-muted, 0.75rem
│                                             │
│  " Walking back from a bar I'd never       │  ← ui weight 300, line-height 1.8
│    been brave enough to enter..."           │   opening " in --accent-gold, large
│                                             │
├─────────────────────────────────────────────┤
│  ▶ Listen  ·  📷 2 photos  ·  2 min read  │  ← mono utility row
├─────────────────────────────────────────────┤
│  🔥 14   👀 8   💬 3   🫦 21               │
├─────────────────────────────────────────────┤
│  Cite this entry  →                        │  ← mono, --text-muted, subtle
└─────────────────────────────────────────────┘
```

- Border radius: `4px` — archival, not bubbly
- Tags: mono-font labels in brackets `[outdoor]  [spontaneous]` — not colorful pills
- Record numbers: permanent, sequential, format `#MQ-` + 6 zero-padded digits
- "Cite this entry" copies a formatted citation to clipboard — no modal

For the founding site, the drawer shows mock archive entries when a dot is clicked. Audio and photo elements render as visual placeholders with a "coming in Phase 1" tooltip.

---

## Pages

### `/` — Home

**Above fold:** Full-screen globe. No competing UI. Ghost nav top-right (transparent). Wordmark top-left in Playfair Display italic + `--accent-gold` apostrophe. Centered tagline fades in on load:

> *"Q marks the spot."*

One ghost CTA below tagline: **"Leave your Marq"** — scrolls to below-fold section.

**Below fold** (scroll down from globe):

**Section 1 — What is Marq'd?**
```
ABOUT THE ARCHIVE                          ← mono eyebrow, --text-muted
────────────────── [pride rule] ──────────

Marq'd is a living archive of queer        ← display font, generous size
existence.

Every dot on this globe is a story —       ← ui weight 300, line-height 1.8
anonymous, geographic, permanent.
Primary source history, written by
the people who lived it.
```

**Section 2 — Why It Matters**
Large display-font stat, centered:

```
64 countries criminalize
same-sex relationships.

In most of them, no official record
of queer life exists.

Marq'd is that record.
```

**Section 3 — How It Works**
Three steps, each with a lambda mark (λ) as the icon:

```
λ  Drop a pin anywhere on the globe
λ  Tell us what happened — text, voice, or both
λ  Your Marq is assigned a permanent record number
```

**Section 4 — Early Development**
Honest and inviting:

```
MARQ'D IS IN ACTIVE DEVELOPMENT           ← mono eyebrow

Story submission, voice recordings,
photography, and the full live archive
are coming in Phase 1.

Want to be part of building this?

  [ Support the Archive ]  [ Get Involved ]
```

**Footer:**
Wordmark · nav links · "Keep the archive alive →" · © year · Privacy · Terms

---

### `/about` — About

**Sections:**

**1. The Project**
Pull mission from `docs/MISSION.md`. Queer stories as primary sources. The historical stakes. 64 countries. What Marq'd is building toward. Use display italic for pull quotes.

**2. The Founder**
```html
<!-- BRYAN: Write this in your own words. First person.
Why did you build this? What does this mean to you?
There are no wrong answers — this is your project and your name on it.
Replace this comment block with your text when ready. -->
```
Display a founder card with: name, photo placeholder (circular, `--bg-elevated`, λ watermark), and the placeholder text rendered in display italic: *"Founder statement coming soon."*

**3. Where We're Headed**
Pull from `docs/ROADMAP.md`. Three phases, one paragraph each. Honest about what's built vs. coming.

**4. Get Involved**
> *"Marq'd is one person with a vision and a lot of work ahead. If you're a developer, designer, archivist, human rights advocate, or someone who simply believes in this — reach out."*
CTA → `/contact` with subject pre-filled "Get Involved"

**5. Partnership Vision**
Brief, aspirational: ILGA World, ONE Archives at USC, Equaldex, Rainbow Railroad. Framed as ambitions, not current relationships.

**6. Press & Media**
*"For press inquiries: [email address]"*

---

### `/contact` — Contact

Human, not a ticketing system.

**Intro:**
> *"Whether you want to share a story, propose a partnership, get involved in building Marq'd, or just say something — we're listening."*

**Form fields:**
- Name — optional
- Email — required
- Subject — dropdown: `General` · `Partnership` · `Press` · `Advertising` · `Get Involved` · `Safety Report` · `Other`
- Message — textarea

**Submit button:** "Send it"

**Below form:**
> *"We read everything. We try to respond to most things."*

**Safety note:**
> *"To report content or a safety concern, select 'Safety Report' above. These are prioritized."*

**Implementation:** Formspree. Free tier. No backend required. Direct to Marq'd Gmail.

---

### `/support` — Support the Archive

Transparent. Dignified. Never guilt-driven.

**Section 1 — Why Support Matters**
> *"Marq'd is free to use and always will be. But hosting, storage, moderation, and development cost real money. Your support keeps the archive alive and independent."*

**Section 2 — Donate**
```html
<!-- BRYAN: Replace this block with the Open Collective embed widget
once your Open Collective page is live at opencollective.com/marqd -->
```
Placeholder: a styled block with "Donate via Open Collective →" linking to the OC page.

Tiers listed in mono font, simple:
```
Reader       —  any one-time amount
Contributor  —  $5 / month
Archivist    —  $15 / month
Patron       —  $50 / month
```

**Section 3 — Get Involved**
> *"Marq'd is one person with a vision and a lot of work ahead. If you're a developer, designer, archivist, human rights advocate, or just someone who believes in this — reach out. We'd love to have you."*
CTA → `/contact` pre-filled "Get Involved"

**Section 4 — What Your Support Funds**
Honest list: hosting · storage · content moderation · legal · development · translations

**Section 5 — Organizations**
> *"If you represent an institution, foundation, or organization interested in supporting or partnering with Marq'd, please get in touch."*
CTA → `/contact` pre-filled "Partnership"

**Closing line:**
> *"Every dollar goes toward keeping the record intact."*

---

## Globe — Mock Data

```typescript
// src/data/seedMarqs.ts
export const seedMarqs = [
  { lat: 37.77,  lng: -122.41, city: "San Francisco",  country: "USA",       count: 12 },
  { lat: 40.74,  lng: -73.99,  city: "New York",        country: "USA",       count: 9  },
  { lat: 34.05,  lng: -118.24, city: "Los Angeles",     country: "USA",       count: 7  },
  { lat: 51.51,  lng: -0.12,   city: "London",          country: "UK",        count: 8  },
  { lat: 48.85,  lng: 2.35,    city: "Paris",           country: "France",    count: 6  },
  { lat: 52.52,  lng: 13.40,   city: "Berlin",          country: "Germany",   count: 11 },
  { lat: 41.39,  lng: 2.15,    city: "Barcelona",       country: "Spain",     count: 5  },
  { lat: 59.33,  lng: 18.06,   city: "Stockholm",       country: "Sweden",    count: 4  },
  { lat: -23.55, lng: -46.63,  city: "São Paulo",       country: "Brazil",    count: 7  },
  { lat: -34.60, lng: -58.38,  city: "Buenos Aires",    country: "Argentina", count: 5  },
  { lat: 35.68,  lng: 139.69,  city: "Tokyo",           country: "Japan",     count: 6  },
  { lat: -33.87, lng: 151.21,  city: "Sydney",          country: "Australia", count: 5  },
  { lat: -26.20, lng: 28.04,   city: "Johannesburg",    country: "S. Africa", count: 3  },
  { lat: -1.29,  lng: 36.82,   city: "Nairobi",         country: "Kenya",     count: 2  },
  { lat: 6.36,   lng: 2.42,    city: "Lagos",           country: "Nigeria",   count: 2  },
  { lat: 31.77,  lng: 35.21,   city: "Jerusalem",       country: "Israel",    count: 2  },
  { lat: 30.04,  lng: 31.24,   city: "Cairo",           country: "Egypt",     count: 1  },
  { lat: 33.89,  lng: 35.50,   city: "Beirut",          country: "Lebanon",   count: 2  },
  { lat: 28.61,  lng: 77.21,   city: "New Delhi",       country: "India",     count: 3  },
  { lat: 55.75,  lng: 37.62,   city: "Moscow",          country: "Russia",    count: 2  },
  { lat: 1.35,   lng: 103.82,  city: "Singapore",       country: "Singapore", count: 3  },
  { lat: 4.71,   lng: -74.07,  city: "Bogotá",          country: "Colombia",  count: 3  },
  { lat: 19.08,  lng: 72.88,   city: "Mumbai",          country: "India",     count: 3  },
  { lat: 22.28,  lng: 114.16,  city: "Hong Kong",       country: "China",     count: 4  },
];
```

All dots render identically — same glow, same pulse. No country is highlighted or marked differently. The globe doesn't editorialize. It shows where we are.

When a dot is clicked, open a minimal drawer showing 2–3 mock archive entries using the full card structure from `docs/DESIGN.md`. Audio and photo rows render as visual placeholders with a subtle tooltip: *"Audio and photo records — coming in Phase 1."*

---

## Repository Structure

```
marqd/
├── CLAUDE.md
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── frontend/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── components/
│   │   │   ├── Globe/
│   │   │   │   ├── Globe.tsx
│   │   │   │   └── globe.css
│   │   │   ├── ArchiveEntry/
│   │   │   │   ├── ArchiveEntry.tsx
│   │   │   │   └── CiteButton.tsx
│   │   │   ├── AudioPlayer/
│   │   │   │   └── AudioPlayer.tsx        ← placeholder for Phase 1
│   │   │   ├── StoryDrawer/
│   │   │   │   └── StoryDrawer.tsx
│   │   │   ├── SubmitModal/
│   │   │   │   └── SubmitModal.tsx        ← "coming soon" for founding site
│   │   │   ├── AgeGate/
│   │   │   │   └── AgeGate.tsx            ← placeholder for Phase 1
│   │   │   ├── Nav/
│   │   │   │   └── Nav.tsx
│   │   │   └── Footer/
│   │   │       └── Footer.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Support.tsx
│   │   ├── data/
│   │   │   └── seedMarqs.ts
│   │   ├── lib/
│   │   │   └── supabase.ts                ← empty, comment: "Phase 1"
│   │   ├── hooks/
│   │   │   └── useMarqs.ts                ← returns seedMarqs for now
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── styles/
│   │       ├── globals.css
│   │       └── tokens.css
│   └── public/
│       └── favicon.svg                    ← lambda mark (λ) in --accent-gold
└── docs/
    ├── MISSION.md
    ├── DESIGN.md
    ├── MONETIZATION.md
    ├── ROADMAP.md
    └── SAFETY.md
```

---

## GitHub Pages Deployment

```ts
// vite.config.ts
export default defineConfig({
  base: '/marqd/',
})
```

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: cd frontend && npm install && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/dist
```

Use `HashRouter` — not `BrowserRouter`. GitHub Pages requires hash-based routing.

---

## Build Order

1. Scaffold Vite + React + TypeScript + Tailwind
2. Set up `tokens.css` with all CSS variables, load Google Fonts
3. Build `Nav` and `Footer`
4. Build `Globe` with seed data — get it rotating and glowing correctly first
5. Build `ArchiveEntry` card component with full structure
6. Build `StoryDrawer` — opens on dot click, shows mock entries
7. Build `Home` page — above fold, then below fold sections
8. Build `About` page — with founder placeholder clearly marked
9. Build `Support` page — with Open Collective placeholder clearly marked
10. Build `Contact` page — Formspree integration
11. Configure routing (`HashRouter`)
12. Configure Vite base path for GitHub Pages
13. Set up GitHub Actions deploy workflow
14. Verify live at GitHub Pages URL

---

## Future Architecture Hooks

Leave these as stubs with clear comments so Phase 1 is additions, not rewrites:

```typescript
// src/lib/supabase.ts
// Supabase client initialized here in Phase 1
// import { createClient } from '@supabase/supabase-js'
export const supabase = null;

// src/hooks/useMarqs.ts
// Returns seed data now. In Phase 1, fetches from Supabase.
import { seedMarqs } from '../data/seedMarqs';
export const useMarqs = () => ({ marqs: seedMarqs, loading: false });

// src/components/SubmitModal/SubmitModal.tsx
// Full 5-step submission flow built in Phase 1.
// For founding site: renders "coming soon" state only.

// src/components/AgeGate/AgeGate.tsx  
// Full age gate implemented in Phase 1.
// For founding site: not rendered.
```

---

## Notes for Claude Code

- Always TypeScript. No `any` types.
- `HashRouter` is non-negotiable for GitHub Pages.
- The globe is the hero — never compromise its visual quality for anything.
- Playfair Display italic is doing significant work — use it for pull quotes, location names in the drawer, and the wordmark. It should feel literary everywhere it appears.
- Border radius on cards is `4px` — archival, not bubbly. This matters.
- The lambda mark (λ) is a brand element — use it deliberately, not decoratively.
- Placeholder content for Bryan (founder bio, OC widget) must be clearly marked with HTML comments so he can find and replace them easily.
- Mobile first. Test at 375px width at every step.
- When in doubt: refer to `docs/DESIGN.md`. The answer is in there.
- This founding site should look finished, not rough. It's a beginning, not a prototype.
