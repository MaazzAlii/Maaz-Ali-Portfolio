# Maaz Ali — AI Engineer Portfolio (v2)

Production-ready portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Geist fonts. Dark mode default with a clean light mode toggle. Project-first layout, recruiter-friendly.

**Design philosophy:** Vercel / Linear / Stripe — large type, lots of whitespace, content first. The previous version had a LangGraph-trace widget and `node:` labels throughout; this version removes all of that in favour of a portfolio that reads as "professional AI engineer" rather than "LangGraph demo."

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve production build
```

---

## Before you go live — add these files

| File | Purpose |
|------|---------|
| `public/resume.pdf` | Linked by the Download Resume button |
| `public/og-image.png` (1200×630) | Social share preview |
| `public/favicon.ico` | Site icon (generate at realfavicongenerator.net) |

Then update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your real domain.

---

## Adding project screenshots

Each project in `lib/data.ts` has an `image` field. Once you have screenshots, add them to `public/projects/` and set the path:

```ts
{
  slug: "vision-rag",
  title: "LangGraph Agentic Vision RAG System",
  image: "/projects/vision-rag.png",   // <-- add this
  ...
}
```

The card will render the screenshot instead of the icon placeholder. Recommended screenshot size: **1200×750px** (16:10).

For the Vision RAG project, good screenshots to capture:
- Upload/file input interface
- Retrieval results with highlighted passages
- Chat/query interface

For North Tourism:
- Landing page hero
- Recommendations grid
- Booking form

For the Chrome Extension:
- Extension popup open on a ChatGPT conversation
- Context compression output

**Until screenshots exist, the cards render a clean icon placeholder — they still look professional.**

---

## Editing content

Everything lives in `lib/data.ts`. You never need to touch component files to update copy, add a project, or change your contact details.

To add a new project:

```ts
{
  slug: "my-project",
  title: "Project Name",
  description: "One sentence that says what it does.",
  tech: ["Python", "FastAPI"],
  github: "https://github.com/MaazzAlii/my-project",
  demo: "https://my-project.vercel.app",   // optional
  image: "/projects/my-project.png",        // optional until screenshot exists
  icon: "Workflow",                          // fallback icon
},
```

Available fallback icons: `FileSearch`, `GitCompare`, `Workflow`, `Chrome`, `Mic`, `MapPinned`.

---

## Project structure

```
maaz-portfolio/
├── app/
│   ├── layout.tsx         # Metadata, Open Graph, Twitter cards, JSON-LD, ThemeProvider
│   ├── page.tsx            # Assembles all sections
│   ├── globals.css         # CSS variables for light/dark, Tailwind base
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx          # Sticky nav, active section highlight, mobile menu, theme toggle
│   ├── Hero.tsx             # Large type, 4-button CTA row, minimal
│   ├── Projects.tsx         # Uniform 3-col grid
│   ├── ProjectCard.tsx      # Screenshot slot, GitHub + Live Demo links
│   ├── CoverImage.tsx       # Real image or icon-placeholder fallback
│   ├── Skills.tsx            # Flat tag cloud
│   ├── Experience.tsx        # Single role entry replacing the old timeline
│   ├── AndroidApps.tsx       # Published apps with screenshot slots
│   ├── Certifications.tsx
│   ├── Contact.tsx           # Form (mailto) + direct links
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx     # next-themes wrapper
│   ├── ThemeToggle.tsx       # Sun/Moon button
│   ├── SectionHeading.tsx    # Shared h2 + description
│   └── Reveal.tsx             # Scroll-reveal (Framer Motion)
├── lib/
│   └── data.ts               # All content in one file
├── public/
│   └── ASSETS_TODO.md
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## Design tokens

Defined as CSS variables in `app/globals.css` and consumed as Tailwind utility classes via `tailwind.config.ts`. Both themes share the same class names.

| Token | Light | Dark |
|-------|-------|------|
| `bg` | `#ffffff` | `#08090a` |
| `bg-surface` | `#f7f7f8` | `#0f1012` |
| `bg-border` | `#e3e3e6` | `#222327` |
| `ink` | `#0a0a0b` | `#f5f6f7` |
| `ink-dim` | `#52555c` | `#a0a3aa` |
| `accent` | `#2f6fff` | `#2f6fff` |

---

## Deploying to Vercel

**Option A — CLI:**
```bash
npm i -g vercel
vercel
```

**Option B — GitHub import:**
```bash
git init && git add . && git commit -m "init"
git remote add origin https://github.com/MaazzAlii/portfolio.git
git push -u origin main
```
Then: vercel.com → New Project → import repo → Deploy. Zero config needed — Vercel auto-detects Next.js.

Suggested domains:
- `maazali.vercel.app` (free, immediate)
- `maazinex.vercel.app` (free, immediate)
- `maazali.dev` (buy later, ~$12/yr on Cloudflare)

---

## Build verification

Verified before delivery:
- `npm run build` — compiles cleanly, TypeScript strict, zero lint errors
- `npm run start` — all routes (`/`, `/sitemap.xml`, `/robots.txt`) return `200`
- No `node:` labels, no agent trace widget, no LangGraph-demo aesthetics
- Light mode and dark mode both load correctly via `next-themes`
