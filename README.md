# Maaz Ali — AI Engineer Portfolio

A production-ready portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Dark by default, electric-blue accent, recruiter-friendly, and SEO-optimized.

**Signature design element:** the hero panel is a live "agent trace" — a small terminal-style readout that cycles through real LangGraph node names from the Vision RAG project, because the whole point of this site is "this person builds real AI systems," not "this person used a portfolio template."

## Tech stack

- Next.js 15 (App Router, React 19)
- TypeScript (strict mode)
- Tailwind CSS 3
- Framer Motion
- Lucide Icons
- Geist Sans / Geist Mono (Vercel's official typefaces, via the `geist` package)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — add 3 files

These are intentionally not included since only you have them. Instructions are also in `public/ASSETS_TODO.md`:

1. `public/resume.pdf` — your actual resume (linked from the "Download Resume" button).
2. `public/og-image.png` (1200×630) — social share preview image.
3. `public/favicon.ico` — site icon.

Also update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` once you have a real domain (currently set as a placeholder: `https://maazali.dev`).

## Project structure

```
maaz-portfolio/
├── app/
│   ├── layout.tsx        # Root layout, metadata, Open Graph, Twitter cards, JSON-LD
│   ├── page.tsx           # Assembles all sections
│   ├── globals.css        # Tailwind layers, base styles, scrollbar
│   ├── sitemap.ts         # /sitemap.xml
│   └── robots.ts          # /robots.txt
├── components/
│   ├── Navbar.tsx          # Sticky nav, active-section highlight, mobile menu
│   ├── Hero.tsx             # Hero section
│   ├── AgentTrace.tsx       # Signature animated LangGraph-style trace panel
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── AndroidApps.tsx
│   ├── Stats.tsx             # Animated counters
│   ├── Timeline.tsx
│   ├── Certifications.tsx
│   ├── WhyWorkWithMe.tsx
│   ├── LearningAndFocus.tsx  # "Currently learning" + "Focus areas"
│   ├── Contact.tsx            # Working contact form (mailto) + direct links
│   ├── Footer.tsx
│   ├── SectionHeading.tsx     # Shared eyebrow + heading
│   └── Reveal.tsx              # Scroll-reveal wrapper (Framer Motion)
├── lib/
│   └── data.ts                 # Single source of truth for all content
├── public/
│   └── ASSETS_TODO.md
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Editing content

All real content (projects, skills, timeline, copy) lives in **`lib/data.ts`**. You should never need to touch component files just to update text — change the data file and every section updates automatically.

## Design tokens

Defined in `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `bg` | `#08090A` | Page background |
| `bg-surface` | `#0F1012` | Cards |
| `bg-raised` | `#16171A` | Chips, nested surfaces |
| `bg-border` | `#222327` | Hairline borders |
| `ink` | `#F5F6F7` | Primary text |
| `ink-dim` | `#A0A3AA` | Secondary text |
| `ink-faint` | `#5B5E66` | Tertiary/meta text |
| `accent` | `#2F6FFF` | Electric blue — CTAs, links, active states |
| `accent-bright` | `#5C8DFF` | Hover/icon accent |

## Deploying to Vercel

**Option A — CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js — no config needed.

**Option B — GitHub + Vercel dashboard**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/MaazzAlii/portfolio.git
git push -u origin main
```

Then on [vercel.com](https://vercel.com): **New Project → Import** your `portfolio` repo → **Deploy**. No environment variables are required for the base site.

After deploying, add your custom domain under **Project Settings → Domains**, then update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to match it and redeploy.

## Notes on the contact form

The form currently opens the visitor's email client with a prefilled message (`mailto:`) — no backend, no API keys, works immediately on any static host. If you'd rather collect submissions server-side, swap the `handleSubmit` function in `components/Contact.tsx` for a call to a form service (Formspree, Resend, or a custom `app/api/contact/route.ts`).

## Verified

This project was built and verified end-to-end before delivery:
- `npm run build` — compiles cleanly, passes TypeScript strict checks and ESLint
- `npm run start` — production server boots and serves `/`, `/sitemap.xml`, and `/robots.txt` with `200` responses
- No hydration warnings or runtime errors in the server log
