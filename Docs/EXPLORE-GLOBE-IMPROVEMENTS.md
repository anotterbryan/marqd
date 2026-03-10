# MARQ'D — explore.html: Globe Layer System + Mobile UX
### Claude Code Session Instructions

---

## CONTEXT

Marq'd is a vanilla HTML/JS/CSS site on GitHub Pages. No build step.
`explore.html` uses globe.gl v2.27.2 from unpkg.
Supabase JS is loaded via CDN.

**Supabase URL:** `https://llsfwdwjygdjwgvtskpx.supabase.co`
**Supabase key:** `sb_publishable_v-ezH58URDnW60txjWuawg_KRwWiahQ`

There are now TWO data sources for the globe:
1. `marqs` table — user-submitted stories (already live)
2. `history_events` table — curated historical events (newly added)

---

## TASK 1 — TWO-COLOR DOT SYSTEM

User submissions and historical events must be visually distinct on the globe.

**Color assignments:**
- User submissions → teal `#4ecdc4`, circle points
- Historical events → gold `#e8c97a`, slightly larger points (they are fixed landmarks, not anonymous submissions)

**Implementation:**
Fetch both datasets separately, then merge into a single points array with a `type` field:

```javascript
const { data: stories } = await sb.from('marqs').select('lat, lng, id, location_display, story, tags, submitted_at, views, reactions_fire, reactions_heart, audio_url, location_withheld');
const { data: history } = await sb.from('history_events').select('lat, lng, id, name, date, year, location_display, description, category, source');

const storyPoints = (stories || []).map(s => ({ ...s, _type: 'story' }));
const historyPoints = (history || []).map(h => ({ ...h, _type: 'history' }));

let allPoints = [...storyPoints, ...historyPoints];
```

In the globe.gl `pointsData` / `pointColor` / `pointRadius` config:

```javascript
Globe
  .pointColor(d => d._type === 'history' ? '#e8c97a' : '#4ecdc4')
  .pointRadius(d => d._type === 'history' ? 0.45 : 0.35)
  .pointAltitude(d => d._type === 'history' ? 0.015 : 0.01)
```

---

## TASK 2 — THREE-WAY TOGGLE

Add a toggle UI element that filters which points are shown on the globe.

**Three states:**
- `λ Stories` — show only `_type === 'story'`
- `λ History` — show only `_type === 'history'`
- `λ Both` — show all points (default)

**Toggle placement:**
- Desktop: Fixed top-center of the globe viewport, below the nav
- Mobile: Fixed bottom of screen, above any drawer controls
- Z-index above the globe canvas

**Toggle HTML (insert into explore.html body):**

```html
<div id="globe-toggle" role="group" aria-label="Filter globe data">
  <button class="toggle-btn" data-filter="both" aria-pressed="true">λ Both</button>
  <button class="toggle-btn" data-filter="story" aria-pressed="false">λ Stories</button>
  <button class="toggle-btn" data-filter="history" aria-pressed="false">λ History</button>
</div>
```

**Toggle CSS:**

```css
#globe-toggle {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  gap: 2px;
  background: rgba(7,9,15,0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 2px;
  padding: 4px;
}
.toggle-btn {
  background: transparent;
  border: none;
  color: #7a7d8a;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}
.toggle-btn[aria-pressed="true"] {
  background: #e8c97a;
  color: #07090f;
}
.toggle-btn:hover:not([aria-pressed="true"]) {
  color: #f0ece4;
  background: rgba(255,255,255,0.05);
}

@media (max-width: 600px) {
  #globe-toggle {
    top: auto;
    bottom: calc(env(safe-area-inset-bottom) + 80px);
    font-size: 0.7rem;
  }
  .toggle-btn { padding: 8px 12px; }
}
```

**Toggle JS logic:**

```javascript
let activeFilter = 'both';

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    document.querySelectorAll('.toggle-btn').forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
    applyFilter();
  });
});

function applyFilter() {
  let filtered;
  if (activeFilter === 'story') filtered = storyPoints;
  else if (activeFilter === 'history') filtered = historyPoints;
  else filtered = allPoints;
  Globe.pointsData(filtered);
}
```

---

## TASK 3 — HISTORY EVENT DRAWER

When a user clicks a gold (history) dot, the drawer should open with a distinct "historical record" layout — different from the user story drawer.

**History drawer template:**

```html
<div id="history-drawer" class="drawer" style="display:none;">
  <button class="drawer-close" onclick="closeHistoryDrawer()">✕</button>
  
  <!-- Category tag -->
  <div id="hd-category" class="history-tag"></div>
  
  <!-- Event name -->
  <h2 id="hd-name" class="history-title"></h2>
  
  <!-- Date + Location metadata -->
  <div class="history-meta">
    <span id="hd-date" class="meta-date"></span>
    <span class="meta-sep">·</span>
    <span id="hd-location" class="meta-location"></span>
  </div>
  
  <!-- Description -->
  <p id="hd-description" class="history-body"></p>
  
  <!-- Source citation -->
  <div id="hd-source" class="history-source"></div>
</div>
```

**History drawer CSS additions:**

```css
.history-tag {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #e8c97a;
  background: rgba(232,201,122,0.1);
  border: 1px solid rgba(232,201,122,0.2);
  padding: 4px 10px;
  border-radius: 2px;
  margin-bottom: 20px;
}
.history-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f0ece4;
  line-height: 1.3;
  margin-bottom: 12px;
}
.history-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 0.8rem;
}
.meta-date { color: #e8c97a; font-family: 'JetBrains Mono', monospace; }
.meta-sep { color: #7a7d8a; }
.meta-location { color: #7a7d8a; }
.history-body {
  color: #c8c4bc;
  font-size: 0.95rem;
  line-height: 1.75;
  margin-bottom: 32px;
}
.history-source {
  border-top: 1px solid rgba(255,255,255,0.07);
  padding-top: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #7a7d8a;
  opacity: 0.7;
  line-height: 1.6;
}
.history-source::before {
  content: '// source: ';
  color: #e8c97a;
  opacity: 0.5;
}
```

**Click handler — differentiate between story and history clicks:**

```javascript
Globe.onPointClick(point => {
  if (point._type === 'history') {
    openHistoryDrawer(point);
  } else {
    openStoryDrawer(point); // existing function
  }
});

function openHistoryDrawer(event) {
  document.getElementById('hd-category').textContent = event.category || 'Historical Event';
  document.getElementById('hd-name').textContent = event.name;
  document.getElementById('hd-date').textContent = event.year || event.date || '';
  document.getElementById('hd-location').textContent = event.location_display || '';
  document.getElementById('hd-description').textContent = event.description;
  document.getElementById('hd-source').textContent = event.source || '';
  document.getElementById('history-drawer').style.display = 'block';
  document.getElementById('story-drawer').style.display = 'none'; // close story drawer if open
}

function closeHistoryDrawer() {
  document.getElementById('history-drawer').style.display = 'none';
}
```

---

## TASK 4 — MOBILE UX IMPROVEMENTS

### 4A — Prevent browser zoom conflict

Add this to the `<head>` of explore.html ONLY (not other pages):

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

And on the globe container element, add:
```css
#globe-container {
  touch-action: none;
}
```

This gives pinch-to-zoom full control to globe.gl and prevents the browser intercepting the gesture.

### 4B — Manual zoom controls

Add `+` / `−` zoom buttons for mobile users who struggle with pinch:

```html
<div id="zoom-controls">
  <button id="zoom-in" aria-label="Zoom in">+</button>
  <button id="zoom-out" aria-label="Zoom out">−</button>
</div>
```

```css
#zoom-controls {
  position: fixed;
  right: 20px;
  bottom: 160px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 50;
}
#zoom-controls button {
  width: 44px;
  height: 44px;
  background: rgba(14,17,24,0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.1);
  color: #f0ece4;
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
#zoom-controls button:hover { background: rgba(232,201,122,0.15); }

/* Hide on desktop — mouse wheel is sufficient */
@media (min-width: 768px) {
  #zoom-controls { display: none; }
}
```

```javascript
// globe.gl exposes camera controls via .controls()
document.getElementById('zoom-in').addEventListener('click', () => {
  const controls = Globe.controls();
  controls.dollyIn(1.3);
  controls.update();
});
document.getElementById('zoom-out').addEventListener('click', () => {
  const controls = Globe.controls();
  controls.dollyOut(1.3);
  controls.update();
});
```

### 4C — Larger tap targets on mobile

Increase point radius on mobile so dots are easier to tap:

```javascript
const isMobile = window.innerWidth < 768;

Globe
  .pointRadius(d => {
    const base = d._type === 'history' ? 0.45 : 0.35;
    return isMobile ? base * 1.8 : base;
  })
```

### 4D — Pause auto-rotation on touch

The globe auto-rotates by default. This makes tapping a specific dot nearly impossible on mobile because the target moves.

```javascript
const globeEl = document.getElementById('globe-container');

globeEl.addEventListener('touchstart', () => {
  Globe.controls().autoRotate = false;
}, { passive: true });

// Optional: resume rotation after 5 seconds of inactivity
let rotateTimer;
globeEl.addEventListener('touchend', () => {
  clearTimeout(rotateTimer);
  rotateTimer = setTimeout(() => {
    Globe.controls().autoRotate = true;
  }, 5000);
}, { passive: true });
```

### 4E — Mobile drawer as bottom sheet

On screens under 768px, the story and history drawers should slide up from the bottom rather than from the side.

Add these CSS rules (they override the existing drawer positioning on mobile only):

```css
@media (max-width: 767px) {
  .drawer {
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    top: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    max-height: 70vh !important;
    overflow-y: auto !important;
    border-radius: 12px 12px 0 0 !important;
    border-top: 1px solid rgba(255,255,255,0.1) !important;
    transform: translateY(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding-top: 16px !important;
    -webkit-overflow-scrolling: touch;
  }
  .drawer.open {
    transform: translateY(0);
  }
  /* Drag handle */
  .drawer::before {
    content: '';
    display: block;
    width: 36px;
    height: 4px;
    background: rgba(255,255,255,0.15);
    border-radius: 2px;
    margin: 0 auto 20px;
  }
}
```

Update your drawer open/close JS to toggle the `open` class instead of `display: block/none` when on mobile:

```javascript
function openDrawer(el) {
  el.style.display = 'block';
  requestAnimationFrame(() => el.classList.add('open'));
}
function closeDrawer(el) {
  el.classList.remove('open');
  el.addEventListener('transitionend', () => {
    el.style.display = 'none';
  }, { once: true });
}
```

---

## SUMMARY OF ALL CHANGES

| Task | File | Type |
|---|---|---|
| Two-color dot system | explore.html | JS |
| Three-way toggle UI | explore.html | HTML + CSS + JS |
| History event drawer | explore.html | HTML + CSS + JS |
| Prevent zoom conflict | explore.html | meta tag + CSS |
| Manual zoom buttons | explore.html | HTML + CSS + JS |
| Larger mobile tap targets | explore.html | JS |
| Pause rotation on touch | explore.html | JS |
| Mobile bottom sheet drawer | explore.html | CSS + JS |

**Do not modify:** index.html, about.html, submit.html, contact.html, support.html, analytics.html

---

*Prepared for Marq'd Claude Code session, March 2026.*
