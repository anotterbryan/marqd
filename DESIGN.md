# Marq'd — Design System

> *Where the archive meets the intimate. Where queer history looks like itself.*

This document is the source of truth for all visual and interaction design decisions on Marq'd. When in doubt, return here. Update this document before touching code.

---

## Design Philosophy

Marq'd occupies a specific and unusual space: it is simultaneously an **intimate personal platform** and a **serious historical archive**. The design must hold both without collapsing into either.

The primary aesthetic reference is not social media, not a dating app, and not a generic SaaS product. The references are:

- Literary journals — *The Paris Review*, *Granta*, *n+1* — the weight of considered typography
- Museum and archive interfaces — the Smithsonian, the ONE Archives, the British Library digital collections — authority without coldness
- Documentary film title cards — spare, weighted, deliberate
- Queer academic publishing — *GLQ: A Journal of Lesbian and Gay Studies*, *Journal of Homosexuality* — serious framing of serious subject matter

**Four words to design toward:**
- **Archival** — every element should feel like it belongs to something built to last
- **Academic** — signals that what lives here has weight, credibility, and permanence
- **Intimate** — warm enough that people trust it with their most private moments
- **Proud** — unapologetically, visibly queer — not in a loud way, in a true way

**Four things to actively avoid:**
- Anything that reads as a dating or hookup app (aggressive neons, swipe mechanics, match culture)
- Anything that reads as a generic SaaS product (Inter, card grids, purple gradients)
- Anything that feels disposable — this is an archive, not a feed
- Rainbow washing — queer identity expressed as a brand flourish rather than something genuine

### The Globe as Argument

The globe is the product's central visual argument: **we are everywhere.** Every glowing dot is evidence. The globe doesn't editorialize — it just shows where we are, and have always been. The design should make that argument legible without stating it. The globe speaks for itself.

---

## Color System

The palette is dark, editorial, and warm — with a full queer spectrum present but restrained. The Pride colors exist in the system; they are used with intention, never decoration.

### Base Palette

```css
:root {
  /* Backgrounds */
  --bg-base:        #07090f;   /* Near-black — globe background only */
  --bg-surface:     #0e1118;   /* Cards, drawers, modals */
  --bg-elevated:    #161b27;   /* Hover states, active surfaces */
  --bg-overlay:     rgba(7, 9, 15, 0.88); /* Overlays, backdrops */

  /* Primary Accents */
  --accent-gold:    #e8c97a;   /* Primary brand — warm gold, editorial */
  --accent-teal:    #4ecdc4;   /* Globe dot glow */
  --accent-rose:    #c97a8e;   /* Intimacy moments, reactions */

  /* Queer Spectrum — muted, purposeful */
  --pride-red:      #c0392b;
  --pride-orange:   #d4651a;
  --pride-yellow:   #c9a227;
  --pride-green:    #2e7d52;
  --pride-blue:     #2471a3;
  --pride-violet:   #7d3c98;

  /* Text */
  --text-primary:   #f0ece4;   /* Near-white with warmth */
  --text-secondary: #a8a5a0;
  --text-muted:     #7a7d8a;

  /* Structure */
  --border-subtle:  rgba(255, 255, 255, 0.07);
  --border-visible: rgba(255, 255, 255, 0.14);
  --border-rule:    rgba(255, 255, 255, 0.06); /* Section dividers */
  --shadow-deep:    0 24px 64px rgba(0, 0, 0, 0.6);
  --shadow-glow:    0 0 32px rgba(78, 205, 196, 0.2);
}
```

### The Pride Rule

A subtle 6-color horizontal rule (1px tall, full width) using the pride spectrum vars — used sparingly as a section divider between major content areas on the homepage and About page. Not on every divider. Once or twice per page, maximum. It reads as an understated acknowledgment, not a decoration.

```css
.pride-rule {
  height: 1px;
  background: linear-gradient(
    to right,
    var(--pride-red),
    var(--pride-orange),
    var(--pride-yellow),
    var(--pride-green),
    var(--pride-blue),
    var(--pride-violet)
  );
  opacity: 0.4;
  border: none;
}
```

### Color Usage Rules

- `--bg-base` is reserved for the globe background exclusively
- `--accent-gold` is the primary brand color — CTAs, active states, the wordmark accent
- `--accent-teal` belongs to the globe and location elements
- Pride spectrum colors appear only in the pride rule and as subtle accents in queer iconography — never as background fills or button colors
- Never pure white. Always `--text-primary` or softer.

---

## Typography

Typography is where the academic character of Marq'd lives most clearly. The serif display font does significant work — it signals that this is a publication, an archive, a record — not an app.

### Font Stack

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400&display=swap');

:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-ui:      'DM Sans', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
}
```

### Type Scale

| Token | Font | Size | Weight | Use |
|---|---|---|---|---|
| `--type-wordmark` | Display Italic | 2rem | 600 | The Marq'd wordmark |
| `--type-display` | Display | 3rem+ | 400 | Hero text, major section headers |
| `--type-headline` | Display | 1.5rem | 400 | Story headlines, card titles |
| `--type-headline-italic` | Display Italic | 1.5rem | 400 | Pull quotes, featured callouts |
| `--type-body` | UI | 1rem | 300 | Story body, general prose |
| `--type-ui` | UI | 0.875rem | 400 | Labels, buttons, nav |
| `--type-caption` | Mono | 0.75rem | 300 | Record IDs, timestamps, coordinates, tags |
| `--type-eyebrow` | Mono | 0.7rem | 400 uppercase | Section labels, field names |

### Typography Rules

- Story body text: `--font-ui` weight 300, line-height 1.8 — generous, like reading a letter
- Pull quotes and story excerpts: `--font-display` italic — signals literary weight
- Record IDs, coordinates, timestamps: always `--font-mono` in `--text-muted`
- Section eyebrows (e.g. "FIELD RECORD", "ARCHIVE ENTRY"): `--font-mono` uppercase, `0.7rem`, heavy letter-spacing (`0.15em`)
- Wordmark: *Marq'd* — the "M" in Display regular, "arq" in Display italic, the apostrophe and "d" in Display regular, gold accent on the apostrophe
- Never bold story body text
- Never use Display font below `1.2rem` — it loses its character at small sizes

---

## Queer Iconography

Queer identity is expressed through specific, historically-grounded symbols — used with intention as subtle visual elements, not decorations. These appear in the About and Mission pages, as favicon variants, in section headers, and as subtle watermarks.

| Symbol | Meaning | Use in Marq'd |
|---|---|---|
| **λ** (Lambda) | First queer liberation symbol, adopted 1970 | Primary decorative mark — section headers, loading state |
| **Pink Triangle** | Reclaimed from Nazi persecution — resistance and memory | Mission page, About page — weighted contexts only |
| **Labrys** | Lesbian feminist symbol | Community section headers |
| **∞ (Rainbow Infinity)** | Neurodiversity + queer overlap | Accessibility contexts |
| **⚧** (Transgender symbol) | Trans inclusion | Profile and community sections |
| **Interlocking symbols** (♂♂ ♀♀ ⚥) | Same-sex and gender identity | Tags, filter options |

These symbols are rendered in `--text-muted` or `--accent-gold` — never in Pride spectrum colors, which would make them feel like clip art rather than meaningful marks.

---

## Archive Entry (Story Card)

This is the most important component in the product. It is not a social media card. It is an **archive entry** — closer to a museum placard or journal citation than a tweet or post.

### Structure

```
┌─────────────────────────────────────────────┐
│  FIELD RECORD  ·  #MQ-004821                │  ← eyebrow: --font-mono, --text-muted
│                                             │     uppercase, 0.7rem, letter-spacing
├─────────────────────────────────────────────┤  ← --border-subtle
│                                             │
│  São Paulo, Brazil                          │  ← --font-display italic, --accent-gold
│  March 2024  ·  Outdoor  ·  Spontaneous    │  ← --font-mono, --text-muted, 0.75rem
│                                             │
│  "Walking back from a bar I'd never been   │  ← --font-ui weight 300, line-height 1.8
│   brave enough to enter before, I caught   │     opening quote mark in --accent-gold
│   eyes with someone across the street..."  │
│                                             │
├─────────────────────────────────────────────┤  ← --border-subtle
│  ▶ Listen  ·  📷 2 photos  ·  2 min read  │  ← --font-mono, --text-muted, 0.75rem
├─────────────────────────────────────────────┤
│  🔥 14   👀 8   💬 3   🫦 21               │  ← reaction row
├─────────────────────────────────────────────┤
│  Cite this entry  →                        │  ← --font-mono, --text-muted, subtle
└─────────────────────────────────────────────┘
```

### Card Styling

- Background: `--bg-surface`
- Border: `1px solid var(--border-subtle)`
- Border radius: `4px` — archival, not bubbly
- No drop shadows — depth comes from the dark background
- Opening quotation mark: large, `--accent-gold`, positioned as a typographic ornament
- Tags rendered as small mono-font labels, not colorful pills: `[outdoor]  [spontaneous]`
- Record ID is permanent and unique — format `MQ-` followed by 6 digits, zero-padded

### The Record Number

Every story receives a permanent, sequential record number at the moment of submission. This is displayed on every card, always. It signals to contributors that their story has been received, recorded, and given a permanent place in the archive. It also makes stories citable.

Format: `#MQ-004821` — the `MQ` prefix stands for Marq'd, the number is zero-padded to 6 digits.

### "Cite This Entry"

A small, understated link at the bottom of every archive entry that copies a formatted academic citation to the clipboard:

```
Marq'd Archive. Field Record #MQ-004821. São Paulo, Brazil. March 2024.
Retrieved from https://marqd.org/archive/MQ-004821
```

This is a small feature with enormous symbolic weight. It tells every contributor: *your story is citable. It is a source. It counts.* It also makes the archive genuinely useful to researchers, historians, and journalists.

On click: the text "Cite this entry →" briefly becomes "Copied to clipboard ✓" in `--accent-gold`. No modal, no interruption.

---

## Audio Features

### AI-Read Stories (Phase 1)

When a user submits a written story, they can optionally select **"Generate audio reading."** The platform uses the ElevenLabs API to generate a natural voice reading of the story.

**Voice selection UI:** A small panel within the submit modal, after the story text step:

```
How would you like this read?

  ○  Text only
  ●  Read aloud — choose a voice:

  [ Voice A — warm, mid-range    ▶ ]
  [ Voice B — deep, measured     ▶ ]
  [ Voice C — light, expressive  ▶ ]
  [ Voice D — androgynous, calm  ▶ ]
```

Voices should be diverse in tone, gender expression, and warmth — not labeled by name or demographic. Let them speak for themselves. Preview plays a 5-second sample.

**Audio player on the card:**

```
▶  ━━━━━━━━━━━━━○───  1:24 / 2:03
```

- Minimal, inline — not a full media player
- `--font-mono` timestamps
- Play/pause icon from Lucide
- No volume slider on mobile — system volume only
- Progress bar uses `--accent-gold` for the played portion

### User Voice Upload (Phase 2)

Users may upload their own voice recording. This is the most historically valuable format — accent, emotion, and presence are irreplaceable primary source material.

**Safety notice, shown before upload UI:**

> *"Your voice is identifying. If you are in a region where your safety could be at risk, we strongly recommend using the AI reading option instead. We will never share your audio without your consent, but we cannot guarantee anonymity if your voice is recognizable."*

Accepted formats: `.mp3`, `.m4a`, `.wav`. Max duration: 5 minutes. Max file size: 25MB.

---

## Photography

Photos in Marq'd are **place documents** — not portraits, not selfies, not images of people. They capture the physical spaces where queer life has happened: doorways, parks, streets at night, bars, alleyways, hotel rooms after the fact.

This constraint is both a safety rule and an aesthetic one. A collection of anonymous photographs of spaces where queer life occurred, accumulated across years and geographies, becomes its own extraordinary archive.

### Submission Rules (enforced via guidelines and moderation)

- **No people** — no faces, no identifying features, no one who hasn't explicitly consented
- **Places and spaces only** — the location, the atmosphere, the context
- **Optional** — never required. Contributors in high-risk regions should never feel pressure to upload anything traceable.
- **Moderated** — every photo reviewed before it appears publicly
- **Maximum 3 photos per story**
- Accepted formats: `.jpg`, `.png`, `.heic`. Max 10MB per photo.

### Photo Display

Photos appear in a minimal lightbox — full dark background, no UI chrome. Tap/click to open. Swipe to advance on mobile.

Below each photo:

```
FIELD PHOTOGRAPH  ·  São Paulo, Brazil  ·  March 2024
Submitted with Record #MQ-004821
```

No captions beyond this. The image speaks.

---

## The Story Drawer

Opens when a globe dot is clicked. Contains all archive entries for that location.

- Mobile: slides up from bottom, `max-height: 80vh`, scrollable
- Desktop: slides in from right, `width: 440px`, full height
- Backdrop: `rgba(7, 9, 15, 0.7)` with `backdrop-filter: blur(4px)`
- Entrance: `cubic-bezier(0.16, 1, 0.3, 1)` at `350ms`

**Drawer header:**

```
━━━━━━━━━━  (close handle, mobile)

  λ  São Paulo, Brazil          [×]
     14 records  ·  Since 2024
```

The lambda (λ) appears as a subtle mark before the city name — understated, meaningful.

---

## Submit Modal

Five steps. One per screen. No progress bar — three lambda marks (λ λ λ) at the top, the active one in `--accent-gold`.

1. **Location** — "Where did this happen?"
   - Use my location / Search for a place
   - Static map preview of selected point

2. **Story** — "What happened?"
   - Textarea, 500 char max
   - Character limit shown as a slowly depleting thin arc around a dot — not a number
   - Placeholder: *"You don't have to use names. You don't have to explain anything. What happened here? Leave your Marq."*

3. **Audio** — "How would you like this read?"
   - Text only / AI-read (choose voice) / Upload your voice (Phase 2)

4. **Photos** — "Is there a place you'd like to document?"
   - Optional upload, 3 max
   - Reminder: *"Places and spaces only — no people, no faces."*

5. **Tags** — "How would you describe it?"
   - Pill toggles: `cruisy` · `spontaneous` · `romantic` · `outdoor` · `unexpected` · `tender` · `anonymous` · `unforgettable` · `significant`

Final screen after submission:

> *"Your Marq is part of the record. Field Record #MQ-XXXXXX has been assigned."*
>
> *[Copy record number]     [Leave another Marq]*
>
> *Your Marq joins thousands of others — a living record of queer life, by location, across time.*

---

## Age Gate

- Full-screen takeover on first visit
- Centered: wordmark, then one sentence: *"Marq'd contains adult content and stories of a sexual nature."*
- One button: **"I'm 18 or older — enter the archive"** in `--accent-gold`
- Fine print: *"By entering, you agree to our Terms of Service and Privacy Policy."*
- No X. No back. Just the choice.
- Stored: `localStorage` key `marqd_age_confirmed: true`

---

## Motion Principles

1. **Purposeful** — every animation communicates a state change or hierarchy
2. **Smooth** — no linear easing. Entrances: `ease-out`. Exits: `ease-in`. Expressive: custom cubic-bezier.
3. **Restrained** — the globe moves. Most UI is still.
4. **Respectful** — always honor `prefers-reduced-motion`

```css
:root {
  --ease-out:     cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:      cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out:  cubic-bezier(0.83, 0, 0.17, 1);

  --duration-fast:   150ms;
  --duration-base:   250ms;
  --duration-slow:   350ms;
  --duration-globe: 2500ms;
}
```

---

## Iconography

**Lucide Icons** for all UI. Stroke width `1.5px`. Size `20px` UI / `16px` inline.

| Action | Icon |
|---|---|
| Submit / Add | `Plus` |
| Location | `MapPin` |
| Search | `Search` |
| Close | `X` |
| Audio play | `Play` |
| Audio pause | `Pause` |
| Photo | `Camera` |
| Cite | `Quote` |
| Share | `Link` |

Reactions use emoji directly: `🔥 👀 💬 🫦` — with `aria-label` on every instance.

The **λ** (lambda) is used as a brand mark in the drawer header, the submit modal step indicator, and subtle watermark contexts — rendered in `--text-muted` or `--accent-gold` as appropriate.

---

## Responsive Behavior

| Breakpoint | Globe | Drawer | Submit |
|---|---|---|---|
| Mobile `< 768px` | Full screen, touch | Slides up, 80vh | Full screen |
| Tablet `768–1024px` | Full screen | Slides right, 400px | Centered, 560px |
| Desktop `> 1024px` | Full screen | Slides right, 440px | Centered, 500px |

The globe is always full-screen. Nothing competes with it.

---

## Writing Style

Marq'd speaks like a trusted archivist with excellent taste — someone who understands that what you're contributing matters, treats it accordingly, and never makes you feel small for contributing it.

| ❌ Don't | ✅ Do |
|---|---|
| "Share your hookup story" | "Tell us what happened" |
| "Submit" | "Marq this spot" |
| "Post" | "Add to the record" |
| "Loading..." | "Retrieving records..." |
| "No stories found" | "Nothing recorded here yet. Be the first." |
| "Error" | "Something went wrong — your story is safe, try again" |
| "Upload photo" | "Document this place" |
| "Choose a voice" | "How would you like this read?" |

**After submission:**
> *"Field Record #MQ-XXXXXX has been assigned. Your Marq is part of the record."*

**Empty globe:**
> *"Everywhere you see darkness, someone has been. The records are accumulating."*

**Photo upload reminder:**
> *"Places and spaces only — no people, no faces. The room is enough."*

---

## Accessibility

- Contrast: minimum `4.5:1` for all body text
- Focus states: `2px solid var(--accent-gold)`, `2px offset`
- Globe: keyboard users access a sortable list view of all archive entries as an alternative
- Audio player: full keyboard control, transcript available on request
- All emoji reactions: `aria-label` required
- Photos: `alt` text required — auto-generated from location + date if not provided
- `prefers-reduced-motion`: disable globe rotation and dot pulses, cap transitions at `150ms`
- `prefers-color-scheme`: dark mode is the default and primary — light mode may be considered in Phase 2

---

*This document is a living record. Update it before the code.*
