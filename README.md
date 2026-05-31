# Wedding Invitation Web App

A production-ready, single-page wedding invitation experience built with React, TypeScript, and Vite.

Live website:
- https://heinandthinzar.vercel.app/

This repository is maintained as a customizable wedding microsite template and implementation. It combines editorial storytelling (hero, date, venue, timeline, gallery, final message), interactive guest flows (RSVP), and practical logistics (registry, details, dress code) in one responsive application.

## Who This Repo Is For

- **Developers** who need to customize, extend, or deploy the invitation website.
- **Project stakeholders** (couple, planners, collaborators) who want to understand what the site includes and how content is structured.

## What This Project Delivers

- Responsive one-page wedding site with smooth section navigation
- Sticky interactive top navbar (`Home`, `Venue`, `RSVP`, `Registry`)
- Animated timeline and content transitions using `motion`
- RSVP workflow with backend-ready submission structure
- Registry section with expandable details (currently U.S.-focused)
- Gallery lightbox interaction
- Background music player and ambient snow visual layer

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animation:** `motion`
- **Icons:** `lucide-react`

## Repository Structure

```text
src/
  app/
    App.tsx
    components/
      TopNavbar.tsx
      ModernHero.tsx
      ModernDateSection.tsx
      CountdownSection.tsx
      UniqueVenueSection.tsx
      EventDetailsSection.tsx
      ConciseDetails.tsx
      RefinedDressCode.tsx
      EntourageSection.tsx
      GallerySection.tsx
      RSVPSectionNew.tsx
      RegistrySection.tsx
      FinalSectionNew.tsx
      MusicPlayerNew.tsx
      SnowEffect.tsx
  imports/
    *.jpg
    song.mp3
```

## Application Architecture

`App.tsx` composes the full page in section order and assigns scroll anchors via wrapper IDs. The navbar uses hash navigation plus `IntersectionObserver` to track and style the active tab.

Current primary anchor targets:
- `#home`
- `#venue`
- `#rsvp`
- `#registry`

If you change section names/order, update both:
- `src/app/components/TopNavbar.tsx` (`navItems`)
- `src/app/App.tsx` (section `id` wrappers)

## Local Development

### Prerequisites

- Node.js 18+ recommended
- npm 9+ recommended

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

Build output is generated in `dist/`.

### Deployment

- Hosting: Vercel
- Production URL: https://heinandthinzar.vercel.app/
- Deployment flow: after `git add` + `git commit` + `git push`, Vercel auto-deploys the latest commit.

## Feature Notes

### Navbar

- Sticky/fixed at top
- Active state follows viewport section using `IntersectionObserver`
- Mobile-friendly horizontal overflow handling

### RSVP

- Main implementation: `src/app/components/RSVPSectionNew.tsx`
- Structured for external submission endpoints (Google Apps Script / Sheets compatible)
- Additional integration docs are included in repository root:
  - `HOW_TO_CONNECT_GOOGLE_SHEETS.md`
  - `GOOGLE_SHEETS_SETUP.md`
  - `UPDATE_GOOGLE_SHEETS_FOR_GUEST_NAMES.md`
  - `NEW_GOOGLE_APPS_SCRIPT.txt`

### Registry

- File: `src/app/components/RegistrySection.tsx`
- Current content is U.S.-specific:
  - Venmo
  - Zelle
- Replace placeholders before launch:
  - `@[Your Venmo Handle]`
  - `[Your Email or Phone]`

## Content and Asset Management

- Visual assets are in `src/imports/`
- Audio track is `src/imports/song.mp3`
- Most text is currently hardcoded in components for direct editorial control

When updating assets:
1. Keep filenames stable if possible to reduce import churn.
2. Optimize large images for web delivery.
3. Validate mobile crop behavior for each major section.

## Quality and Validation

Minimum release checks:
- `npm run build` passes with zero errors
- Anchor navigation works across all navbar tabs
- RSVP submission path tested end-to-end
- Registry content verified and placeholders removed
- Mobile and desktop layout pass visual review

## Known Customization Areas

- Typography and color palettes are component-level and intentionally expressive.
- Timeline density/content can be changed in `EventDetailsSection.tsx` via the `events` array.
- Navbar scope can be adjusted in `TopNavbar.tsx` by editing `navItems`.

## Ownership and Contribution

This codebase is maintained as a custom invitation implementation. If multiple developers are collaborating:

- Keep commits scoped by section/feature.
- Document content decisions in PR descriptions.
- Re-run `npm run build` before merging.
- Avoid introducing breaking visual changes without screenshot validation.

## Attribution

Original design reference:
- https://www.figma.com/design/rFtgW4FrNxpj810Z1IYe8P/Hein-ThinzarWeddingInvitation
