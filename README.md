# seanavc.dev — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion. Dark, spatial, single-scroll
portfolio with a reactive node-field background and a coordinate-style HUD nav instead of a
hamburger menu.

## Structure

- `src/lib/data.ts` — **edit this file to update content.** Projects, skills, and contact links
  all live here as plain data, not scattered through components.
- `src/components/` — `HUD` (nav), `Hero`, `NodeField` (background canvas), `About`, `Projects` /
  `ProjectCard` (click-to-expand), `Skills`, `Contact`.
- `public/Seanav_Chattopadhyay_CV.pdf` — linked from the "Download CV" button. Swap the file (keep
  the same filename, or update the path in `data.ts` → `LINKS.resume`) to update it.

## Local development

Node.js wasn't detected on this machine, so you'll need to install it first:

1. Install Node.js LTS (v20+) from [nodejs.org](https://nodejs.org) — the Windows installer adds
   `node`/`npm` to your PATH automatically. Restart your terminal after installing.
2. From this folder:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Deploying to Vercel

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/SeanavC/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo — Vercel auto-detects Next.js,
   no config needed. Click Deploy.
3. Every push to `main` redeploys automatically.
4. Optional: add a custom domain under Project → Settings → Domains.

## Notes

- Theme (dark/light) persists via `localStorage`, defaults to dark.
- The node-field background is a plain `<canvas>` — no external charting/particle library, so
  there's nothing extra to install or that can go stale.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google`, self-hosted at build
  time — no runtime request to Google Fonts, no layout shift.
