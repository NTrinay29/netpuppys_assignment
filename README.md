# Tula's International School — Homepage Redesign

A premium, animated single-page redesign concept for Tula's International School (TIS), Dehradun. The build prioritizes a modern editorial aesthetic, clear admissions conversion paths, responsive layouts and reusable React components.

## Tech stack
- Next.js 14 + React 18 + TypeScript
- Framer Motion for viewport reveals and cursor spring physics
- Lucide React for icons
- CSS for the design system and responsive layout
- Vercel-ready deployment

## Standout features
1. **Custom Cursor** — desktop-only spring-follow cursor that reacts to interactive elements.
2. **Scroll-Triggered Reveals** — lightweight Framer Motion entrance animations with `once: true`.
3. **Scroll Progress** — top-of-page reading progress indicator.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production check:

```bash
npm run build
npm start
```

## Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Effects.tsx
│   ├── Navbar.tsx
│   └── Reveal.tsx
└── data/
    └── site.ts
```

## Notes
The homepage content is based on publicly available TIS information including its Dehradun location, 22-acre campus, CBSE Grades IV–XII positioning, sports offering, admissions messaging and published school statistics. Replace remote image URLs with licensed/official TIS assets before production submission.

## Deployment
Push this repository to GitHub and import it into Vercel. No environment variables are required.
