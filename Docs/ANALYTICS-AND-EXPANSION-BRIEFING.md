# MARQ'D — ANALYTICS, EXPANSION & LIVING ARCHIVE BRIEFING
### Instructions for Claude Code / Cross-Chat Sessions

---

## WHO YOU ARE TALKING TO
**Bryan Lane** — sole founder of Marq'd, business administration student, San Diego.
Not a developer. All decisions go through Bryan.
Email: marqd.official@gmail.com
GitHub: github.com/anotterbryan/marqd
Live site: https://anotterbryan.github.io/marqd

---

## WHAT MARQ'D IS

Marq'd is a living queer archive — geographically indexed, anonymously contributed stories tied to real places where queer life happened. It operates as a globe-based web app. Every submission is a pin on the globe. Every pin is a story.

**Core mission:** In 64 countries, being queer is still a crime. In every country, queer history disappears. Marq'd exists to change that.

**New tagline (approved this session):**
> "Welcome to Marq'd — your living queer history archive."

Shorter variant for hero/nav use:
> "Q marks the spot."

---

## WHAT'S BEEN BUILT SO FAR

| File | Status |
|---|---|
| index.html | ✅ Live — homepage, globe mock, submission form |
| explore.html | ✅ Live — interactive globe.gl, live Supabase data |
| about.html | ⚠️ Needs nav/footer fix (old anchor links) |
| submit.html | ✅ Live — standalone fallback form |
| contact.html | ⚠️ Needs standalone build |
| support.html | ⚠️ Needs standalone build |
| analytics.html | 🔲 NEW — see below |

---

## NEW DIRECTION: DATA ANALYTICS AS A CORE FEATURE

### The Vision
Marq'd is not just an archive — it is a **living dataset**. Every submission, view, and reaction is timestamped and geotagged. Over time, this data creates something no other organization has: **real-time, ground-level geographic data on where queer people feel safe enough to tell their stories.**

Silence on the globe is data. A cluster of pins in Berlin means something. Zero pins in Riyadh means something else.

### What Marq'd Collects (Already in the `marqs` Supabase table)
- `lat` / `lng` — exact coordinates of every story
- `submitted_at` — timestamp
- `location_display` — named location
- `location_withheld` — boolean (safety flag — this itself is data)
- `tags` — community-generated categories
- `year_occurred` — when the event happened (historical depth)
- `views` — engagement tracking
- `reactions_fire` / `reactions_heart` — emotional resonance data
- `audio_type` — whether user recorded their own voice vs. used AI (community voice data)

### Why This Matters for Researchers and Organizations
- **Williams Institute (UCLA)** — leading LGBTQ+ policy research center
- **ILGA World** — tracks criminalization globally; needs ground-level data
- **Human Rights Watch** — documents persecution; needs anonymous testimony geography
- **OutRight Action International** — freedom of assembly tracking
- **Equaldex** — crowdsourced LGBTQ rights index by country
- **Academic researchers** — queer geography, digital humanities, social movements

Marq'd can become a **primary data source** for these organizations — not just a story archive.

### Annual "State of Marq'd" Report Concept
Each year, Marq'd publishes a public data report including:
- Total stories submitted and by region
- Most active cities
- Silence map — regions with zero or near-zero submissions
- Reaction patterns (what kinds of stories move people most)
- Year_occurred distribution — how far back do stories reach?
- Location withheld percentage by region (proxy for safety)
- Audio submission trends
- Growth over time

---

## PAGES TO BUILD / EDIT THIS SESSION

### 1. UPDATE index.html

#### A. New Tagline
Replace the existing hero tagline with:
> "Welcome to Marq'd — your living queer history archive."

Sub-line can remain or update to:
> "Stories from real places. Left by real people. Forever."

#### B. New Homepage Section — Data & Impact (Teaser)
Add a new section to index.html BEFORE the footer, AFTER the existing "How It Works" or CTA section.

Section specs:
- ID: `data-impact`
- Eyebrow (λ mark): `λ The Archive Speaks`
- Heading: `Queer geography, in real time.`
- Body: 2–3 sentences explaining that every Marq is a data point, that silence is data too, and that researchers and advocates can access anonymized insights.
- Stat counters (pull live from Supabase `marqs` table):
  - Total stories
  - Countries represented
  - Years of history covered (min year_occurred to present)
- CTA button: `Explore the Data →` → links to `analytics.html`
- Design: dark surface card, gold accent numbers, teal underlines, consistent with existing section styling

#### C. Navigation Update
Add `Data` to the nav on ALL pages:
```
[Marq'd] | Explore | Data | About | Support | Contact | [Leave a Marq]
```

---

### 2. BUILD analytics.html (NEW PAGE)

Full standalone page. Must match Marq'd design system exactly.

**Design system quick reference:**
```
bg-base: #07090f
bg-surface: #0e1118
bg-elevated: #161b27
gold: #e8c97a
teal: #4ecdc4
rose: #c97a8e
text-primary: #f0ece4
text-muted: #7a7d8a
border-radius: 2px everywhere
fonts: Playfair Display / DM Sans / JetBrains Mono
section padding: 108px 0
container: max-width 1160px, padding 0 48px
pride rule: 1px, 6-color gradient, opacity 0.3
λ eyebrow mark: color #e8c97a
```

**Page sections (in order):**

**Hero**
- Eyebrow: `λ Living Data`
- H1: `The archive is speaking.`
- Subhead: `Every story is a data point. Every silence is too. Marq'd tracks queer geography in real time — so researchers, advocates, and communities can see what the world actually looks like.`

**Live Stats Bar**
Pull from Supabase in real time:
- Stories in the archive
- Countries represented (count distinct location_display country-level)
- Years of history (range of year_occurred)
- Stories with withheld locations (proxy for safety index)

**What We Collect**
Explain in plain language what data exists and what it tells us. NOT surveillance — it's testimony. Cover: geography, time, tags, engagement, audio, location withheld.

**The Silence Map**
Static section (no live map needed yet) explaining the concept: that blank spaces on the globe tell a story too. Regions where queer people cannot safely submit anything. Use rose (#c97a8e) as the "danger" color in this section.

**For Researchers & Organizations**
- Who can use Marq'd data
- What's available (anonymized, aggregated)
- How to request access or partnership
- Contact CTA → marqd.official@gmail.com
- Partner logos placeholder (for future: Williams Institute, ILGA, HRW)

**Annual Report**
Placeholder section for "State of Marq'd 2025" — first report coming. Email signup or contact link.

**Footer**
Same footer as all other pages.

---

### 3. BUILD history_events TABLE in Supabase

Run this SQL in Supabase SQL Editor:

```sql
create table history_events (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  date date,
  year integer,
  lat double precision not null,
  lng double precision not null,
  location_display text,
  description text not null,
  category text,
  source text,
  created_at timestamptz default now()
);

-- RLS
alter table history_events enable row level security;
create policy "Public read" on history_events for select using (true);
```

Then import `history_events.csv` via Supabase Table Editor → Import CSV.

Categories used: Legislative, Uprisings, Tragedies, Firsts, Cultural, Trans History, International

---

### 4. UPDATE explore.html — History Layer

After importing history_events to Supabase, update explore.html to:

1. Fetch `history_events` in addition to `marqs`
2. Render history events as **rose/amber diamond markers** (different shape from user story dots)
3. Add a three-way toggle above the globe:
   - `λ Stories` — shows user submissions
   - `λ History` — shows history_events
   - `λ Both` — shows all
4. History event drawer should be styled as a "historical record" with:
   - Gold header bar
   - Event name as H2
   - Date and location as metadata
   - Description body
   - Source citation in JetBrains Mono, smaller, muted
   - Category tag pill

---

### 5. FIX about.html

Replace old anchor links:
- `index.html#support` → `support.html`
- `index.html#contact` → `contact.html`

Add `Data` to nav and footer on about.html.

---

## PARTNERSHIP & EXPANSION STRATEGY

### Phase 1 — Establish (Now)
- Launch data section
- Begin collecting publicly citable submission data
- Reach out to Equaldex for cross-referencing
- Reach out to ILGA World as a potential data partner

### Phase 2 — Formalize (6–12 months)
- Publish first "State of Marq'd" annual report (PDF, designed)
- Apply for academic data partnership with Williams Institute
- Apply for grant funding (Ford Foundation has funded LGBTQ data projects)
- Establish data request process (email-based, honor system initially)

### Phase 3 — Infrastructure (12–24 months)
- Build API endpoint for anonymized aggregate data
- Add researcher dashboard (password-protected)
- Partner with 2–3 academic institutions for formal research use
- Begin multilingual support to expand global submissions

### Revenue Potential from Data
- Open Collective: add "Research Supporter" tier ($100+/mo) for orgs using the data
- Foundation grants: LGBTQ-specific data projects are highly fundable
- Academic licensing: anonymized dataset licensing to universities

---

## CONSTRAINTS & RULES

- **No PII ever.** Location withheld stories must never be reverse-engineered.
- **Anonymized aggregates only** for external sharing — no individual story data shared with third parties without express community consent process.
- **Supabase URL:** `https://llsfwdwjygdjwgvtskpx.supabase.co`
- **Supabase key:** `sb_publishable_v-ezH58URDnW60txjWuawg_KRwWiahQ`
- **No build step** — vanilla HTML/CSS/JS, GitHub Pages
- **Do not modify** explore.html history layer until `history_events` table is confirmed in Supabase
- **All pages** must share the same nav and footer structure

---

## OPEN QUESTIONS FOR BRYAN TO DECIDE

1. Should the Data page be public immediately or launch with the first milestone (e.g., 100 stories)?
2. Do you want a "State of Marq'd 2025" PDF designed as a separate deliverable?
3. Should researchers be able to self-serve anonymized CSVs, or should all requests go through Bryan personally?
4. Do you want a mailing list / newsletter for data updates? (Mailchimp, Substack, or Buttondown)

---

*This briefing was prepared in the Marq'd planning session, March 2026.*
*All design decisions align with DESIGN.md. All architecture decisions align with CLAUDE.md.*
