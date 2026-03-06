# Marq'd — Monetization & Support Model

> *This archive is free to use. It is not free to run. Here's how we keep it alive — with dignity.*

---

## Philosophy

Marq'd is a cultural archive first. Every monetization decision must pass a single test:

**Does this compromise the experience, the mission, or the trust of our users?**

If yes, we don't do it. Full stop.

That means:
- No surveillance advertising. No third-party ad networks. No tracking pixels.
- No paywalled stories. The archive is always free to read and contribute to.
- No aggressive donation prompts, pop-ups, guilt-driven copy, or gamified giving.
- No sponsored stories or paid placement that could corrupt the integrity of the archive.
- No selling or sharing user data — ever.

What we do instead: accept support gracefully, display advertising from brands that share our values, and make it easy for people who believe in this to contribute to it.

---

## Revenue Streams

### 1. Community Donations — *Open Collective*

**Platform:** [Open Collective](https://opencollective.com)

Open Collective allows the project to accept donations transparently — all income and expenses are publicly visible, which builds trust and aligns with the archival mission. No legal entity required to start.

**Tiers:**

| Tier | Amount | What It Means |
|---|---|---|
| Reader | Any amount (one-time) | You found us, you believe in us |
| Contributor | $5/month | You're part of keeping the lights on |
| Archivist | $15/month | You understand what this is for |
| Patron | $50/month | You're investing in queer history |
| Institutional | Custom | For organizations, libraries, universities |

**What donors receive:**
- A small, tasteful "Supporter" badge visible only on their own profile (Phase 2)
- Our genuine gratitude — and nothing else
- No extra features. No ad-free tier. The archive doesn't have two classes of readers.

**In-product placement:**
- A single, static line in the footer: *"Keep the archive alive → Support us"*
- A brief, non-intrusive prompt at the end of the story submission flow: *"Your story is now part of the record. If you'd like to help keep it that way →"*
- An `/support` page with full context on what donations fund

**Never:**
- Interstitial donation prompts
- Countdown timers or "limited time" urgency
- Guilt-driven copy ("Without your support, stories like this disappear")
- Donor leaderboards or public shaming

---

### 2. Queer-Friendly Brand Advertising

**Model:** Direct partnerships only. No programmatic ad networks. No Google AdSense.

Every brand that advertises on Marq'd must meet the following criteria:

**Eligibility requirements:**
- Queer-owned OR demonstrably queer-affirming (not just rainbow-washing during Pride)
- No history of funding anti-LGBTQ+ politicians or causes
- Products and services that are relevant and respectful to the queer community
- Agreement to our Brand Standards (see below)

**Ad formats — only these, nothing else:**

| Format | Placement | Notes |
|---|---|---|
| **Story Card Sponsor** | One sponsored card per 10 organic stories in the drawer | Clearly labeled "Partner." Beautiful, editorial design. |
| **Globe Sidebar Banner** | Static banner, desktop only, right sidebar | Max 1 per page load. No animation, no video. |
| **Newsletter Sponsorship** | One sponsor per email newsletter (Phase 2) | Single sentence + link, clearly labeled |
| **Support Page Feature** | Featured brands on `/support` page | For brands that make meaningful donations to the archive |

**What we will never run:**
- Auto-playing video or audio
- Animated / flashing ads
- Pop-ups, interstitials, or overlays
- Retargeting ads of any kind
- Ads that track users across the web
- Ads on story pages from countries where homosexuality is criminalized (a reader in Uganda does not need to see a Pride t-shirt ad while contributing a story that could get them imprisoned)

**Brand Standards for Advertisers:**
- Ad creative must be provided by the brand — we do not produce ads
- All creative subject to editorial approval before running
- Ads must not sexualize, fetishize, or stereotype queer identities
- Ads must be accessible (alt text, contrast ratios)
- Brands must be transparent about ownership and values if asked

**Rates:**
- Establish rates after initial traffic data is available (set floor at CPM $15 — premium positioning for a premium, targeted audience)
- Offer quarterly packages to foster ongoing relationships over one-off buys
- Offer a "Founding Advertiser" rate for early partners who take a chance on the project before it has reach

---

### 3. Grants & Institutional Funding *(Phase 2+)*

Once the archive has demonstrated reach and impact:

**Eligible grant sources:**
- **Arcus Foundation** — largest funder of LGBTQ+ rights globally
- **Gill Foundation** — LGBTQ+ equality focus
- **NEH (National Endowment for the Humanities)** — digital preservation grants
- **Internet Archive** — potential partnership for long-term archival
- **Ford Foundation** — supports projects at intersection of human rights and technology

**To pursue these, you'll need:**
- Traffic and contribution metrics
- A formal nonprofit structure or fiscal sponsorship
- A written impact statement connecting the archive to academic or human rights use cases
- Letters of support from partner organizations (ILGA World, ONE Archives, etc.)

This is a Phase 2+ effort, but document the archive's growth from day one with grants in mind.

---

## Implementation Guide for Claude Code

### Donation Integration

```typescript
// Footer component — always present, never intrusive
const SupportLink = () => (
  <a 
    href="https://opencollective.com/marqd" 
    target="_blank"
    rel="noopener noreferrer"
    className="support-link"
  >
    Keep the archive alive
  </a>
);

// Post-submission nudge — appears once, after story is confirmed
const PostSubmitNudge = () => (
  <p className="post-submit-nudge">
    Your Marq is now part of the record.{' '}
    <a href="/support">Help keep it that way →</a>
  </p>
);
```

### Ad Placement Rules (enforced in code)

```typescript
// Never show ads to users in high-risk regions
const HIGH_RISK_COUNTRY_CODES = [
  'AF', 'DZ', 'BD', 'BN', 'CM', 'TD', 'KM', 'CD', 'DJ', 'EG',
  'ER', 'ET', 'GM', 'GH', 'GN', 'IR', 'IQ', 'JO', 'KW', 'LB',
  'LY', 'MY', 'MV', 'MR', 'MA', 'NE', 'NG', 'OM', 'PK', 'PS',
  'QA', 'SA', 'SN', 'SO', 'SD', 'SY', 'TZ', 'TN', 'UG', 'AE',
  'UZ', 'YE', 'ZM', 'ZW'
  // Expand based on current ILGA World report
];

const shouldShowAds = (userCountryCode: string): boolean => {
  return !HIGH_RISK_COUNTRY_CODES.includes(userCountryCode);
};

// One ad per story drawer, max — never on the globe itself
const AD_PLACEMENT_RULES = {
  globe: false,           // Never
  storyDrawer: true,      // One per 10 stories
  submitModal: false,     // Never — sacred space
  supportPage: true,      // Featured partners only
  highRiskRegions: false, // Never
};
```

### Support Page (`/support`)

The `/support` page should include:
- A clear, brief explanation of what the archive costs to run (hosting, storage, moderation)
- The Open Collective embed widget (they provide this)
- A list of current supporting brands (those that have donated or advertised)
- A note on how funds are spent (transparent, since Open Collective shows this publicly)
- A contact path for institutional donors and grant inquiries

Design: same dark, editorial aesthetic as the rest of the site. No charity-website energy.

---

## What This Funds

Being transparent about costs builds trust. Here's what reader and advertiser support actually pays for:

| Cost | Estimated Monthly |
|---|---|
| Supabase (database, auth, storage) | $25–$100 depending on scale |
| GitHub Pages / CDN | Free–$20 |
| Domain + email | ~$5 |
| Content moderation (time) | Variable |
| Legal (privacy policy, terms) | One-time ~$500–$2,000 |
| **Total (early stage)** | **~$50–$150/month** |

At modest scale, a handful of Archivist-tier ($15/month) supporters and one or two brand partnerships covers operating costs entirely. Revenue beyond that goes toward:
- Moderation support
- Accessibility improvements
- Translations and international outreach
- Legal defense fund (for operating in hostile jurisdictions)
- Long-term archival infrastructure

---

## Founding Principle

This archive does not exist to make money. It exists to preserve queer history. Money is what lets it keep existing. Those two things are not in conflict — as long as we never forget which one is the point.
