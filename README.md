# Sangam Kumari Portfolio — Next.js

A single-page portfolio built with Next.js (App Router), exported as a static
site so it can be deployed anywhere, including Netlify.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build a static export

```bash
npm run build
```

This produces a fully static site in the `out/` folder (configured via
`output: "export"` in `next.config.js`).

## Deploy to Netlify

### Option A — Netlify CLI (fastest)

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

### Option B — Netlify dashboard (Git-based, auto-deploys on push)

1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project** and pick the repo.
3. Netlify auto-detects the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Click **Deploy site**.

Every future push to the connected branch will auto-redeploy.

## Features

- Real technology logos (via `react-icons`) with brand colours
- Typing role animation, orbiting tech-stack visual, scrolling logo marquee
- Animated counters, scroll-reveal sections, scroll progress bar
- Filterable skills and projects, project detail modal (Esc / click outside to close)
- Collapsible experience details, copy-email button with toast, back-to-top button
- Active-section navigation and mobile hamburger menu
- Respects `prefers-reduced-motion`

## Editing content

All portfolio content (skills, projects, timeline, certifications, education)
lives in plain JS arrays near the top of `app/page.jsx` (styles are in `app/globals.css`) — edit those arrays
directly, no need to touch the JSX layout below them.

## Notes

- Content is synced with the resume (Full Stack Developer, Aaxiomcrest
  Technologies, May 2025 – Oct 2026). Contact: `sangamchoudary25022@gmail.com`,
  `+91 7396 195 396`.
- Projects: 3 professional projects (Vendor Operations Dashboard, NetSuite
  Sync Utility, Auth & Security Enhancement) and 3 training projects
  (Employee Management, Inventory & Billing, Mobile Task Tracker).
- Personal details from the resume (father's name, DOB, marital status) are
  intentionally not published on the public site.
- Google Fonts (Sora, Inter) are loaded in `app/layout.jsx`.
