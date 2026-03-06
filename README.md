# Marq’d 🌐

> *Q marks the spot.*

Marq’d is a living archive of queer existence — geographically indexed, anonymously contributed, and built to last. Stories tied to coordinates. A globe that remembers. A record that cannot be erased.

-----

## What It Is

An interactive, map-based platform where queer people share firsthand stories tied to real-world locations. Not just a storytelling app — a **primary source archive** of queer life across time and geography.

Every story submitted is a document. Every location pin is evidence. The accumulation of those stories — from Buenos Aires, Nairobi, Bangkok, Boise — becomes something that no government, institution, or majority vote can undo: **proof that we were here.**

In 64 countries, same-sex relationships are criminalized. In 12, they carry the death penalty. In those places, there are no gay bars on Google Maps, no Pride parades in the historical record, no official documentation of queer life. Marq’d creates the record that official history refuses to keep.

-----

## Why Primary Sources Matter

A primary source is original, firsthand evidence created by someone with direct experience. For queer history, primary sources have always been scarce — because they were dangerous to create and deadly to keep. Letters burned. Diaries written in code. Meeting places demolished. Oral histories lost.

Marq’d is an act of preservation. Stories here are:

- **Firsthand accounts** — the most historically valuable form of evidence
- **Geographically anchored** — tied to specific coordinates, not just vague regions
- **Timestamped** — capturing queer life as it exists across time
- **Permanently archived** — not subject to algorithmic deprioritization or platform deletion

-----

## Features

### Phase 1 — The Archive *(current)*

- 🌍 Interactive 3D globe with story location dots
- 📖 Anonymous story submission — no account required
- 📍 Browser geolocation or manual city/place search
- 🏷️ Story tags (cruisy, spontaneous, romantic, outdoor, unexpected, tender, unforgettable)
- 🔥 Reactions without login
- 🔒 Age-gated (18+), rate-limited, no PII collected from anonymous users
- 🛡️ Designed for safe use in high-risk regions

### Phase 2 — The Platform *(roadmap)*

- 👤 Optional profiles with granular privacy controls
- 🔁 Stories attributed to a profile or kept fully anonymous — decided per story
- 💬 Direct messaging (mutual follows only)
- 📡 Near Me feed by user-defined radius
- 🕰️ Time-scrubber: watch the archive grow chronologically
- 🗺️ Legal context layer: geographic overlay showing LGBTQ+ legal status by country
- 🤝 Research export: open-format archive access for historians and scholars

-----

## Tech Stack

|Layer    |Technology                                         |
|---------|---------------------------------------------------|
|Frontend |React + TypeScript (Vite)                          |
|3D Globe |`globe.gl` / `three.js`                            |
|Styling  |Tailwind CSS + custom design tokens                |
|Backend  |Supabase (Postgres, Auth, Realtime, Edge Functions)|
|Hosting  |GitHub Pages (frontend) + Supabase (backend)       |
|Geocoding|OpenStreetMap Nominatim (free, no key required)    |

-----

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project ([supabase.com](https://supabase.com))

### Local Development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/marqd.git
cd marqd/frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase URL and anon key to .env.local

# Run the dev server
npm run dev
```

### Environment Variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Database Setup

```bash
# Apply migrations via Supabase CLI
supabase db push
```

Or paste `supabase/migrations/001_initial.sql` into the Supabase SQL editor.

-----

## Deployment

Deploys automatically to GitHub Pages on push to `main`.

1. Go to **Settings → Pages** in your GitHub repo
1. Set source to the `gh-pages` branch
1. Add Supabase environment variables as **Repository Secrets**

-----

## Project Structure

```
marqd/
├── CLAUDE.md          # Claude Code build instructions
├── README.md          # This file
├── frontend/          # React app
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       └── styles/
├── supabase/          # DB migrations + Edge Functions
└── docs/
    ├── MISSION.md     # Mission, historical purpose, and values
    ├── DESIGN.md      # Design system & aesthetic guide
    └── SAFETY.md      # Content policy, safety & privacy guidelines
```

-----

## Mission

Marq’d is more than a platform. It’s infrastructure for queer historical memory.

Read [`docs/MISSION.md`](docs/MISSION.md) before contributing. Understanding why this exists shapes every decision about how it’s built.

-----

## Safety & Privacy

- Anonymous users contribute zero personally identifiable information
- IPs are one-way hashed before storage — never stored in plaintext
- The platform is designed to function safely for users in high-risk regions
- All users confirm they are 18+ before accessing content
- Stories containing non-consensual content are removed
- Reporting tools available on all content

See `docs/SAFETY.md` for the full policy.

-----

## Partnerships

As the archive grows, we aim to partner with:

- **ILGA World** — global LGBTQ+ legal rights data
- **ONE Archives at USC** — largest LGBTQ+ archive in the world
- **Equaldex** — crowdsourced LGBTQ+ rights database
- **Rainbow Railroad** — helping LGBTQ+ people escape state-sponsored violence
- **The Trevor Project** — crisis resources integration

-----

## Contributing

Contributions are welcome — especially from queer developers, designers, historians, archivists, and human rights advocates.

Please read `docs/MISSION.md` and `docs/SAFETY.md` before contributing.

-----

## License

MIT — free to use, fork, and build on.

-----

*Marq’d — Leave your Marq. For the record. For us. 🏳️‍🌈*
