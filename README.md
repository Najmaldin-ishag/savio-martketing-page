This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

````bash
npm run dev
# or
# Savio — Marketing Landing Page

**Overview**
- **Project:**: A marketing/landing site for Savio built with `Next.js`, TypeScript, Tailwind CSS and lightweight animation utilities.
- **Purpose:**: Showcase product features and collect waitlist signups (includes a `Waitlist` form and an animated `Hero` section with a dashboard mockup image).

**Quick Start**
- **Prerequisites:**: Node.js 18+ and npm (works on Windows PowerShell). This project uses `next@16` and `react@19` as declared in `package.json`.

- **Install dependencies (PowerShell):**
```powershell
npm install
````

- **Run in development (PowerShell):**

```powershell
npm run dev
# Open http://localhost:3000
```

- **Build for production:**

```powershell
npm run build
npm start
```

**NPM Scripts**

- **`dev`:**: Runs the Next.js development server (`next dev`).
- **`build`:**: Builds the production app (`next build`).
- **`start`:**: Starts the production server (`next start`).
- **`lint`:**: Runs `eslint`.

**Project Structure (important files)**

- **`/app`**: Primary Next.js app files (`layout.tsx`, `page.tsx`, global styles).
- **`/components`**: UI components and section components used on the landing pages.
  - **`/components/sections/hero.tsx`**: Animated hero and dashboard mockup (the dashboard image lives at `public/imgs/Desktop.png`).
  - **`/components/sections/waitlist.tsx`**: Waitlist signup form with client-side validation (Zod + react-hook-form).
  - **`/components/ui`**: Reusable UI primitives (`Button`, `Input`, `Section`, `Card`, etc.).
- **`/public/imgs`**: Static assets (e.g. `Desktop.png`, `Effect.png`, `dashbaord.png`, `Mask group.png`).
- **`/lib`**: Utility helpers.

**Assets**

- The dashboard mockup used in the hero section is `public/imgs/Desktop.png`. Replace or update this file to change the visual.

**Notes & Gotchas**

- The project uses an animation library dependency named `motion` (see `package.json`) and some files import from `framer-motion`. If you see odd runtime or type errors related to motion imports, ensure imports are consistent across components — e.g. `import { motion } from "framer-motion"` or `import { motion } from "motion"` depending on the chosen library.
- The `Waitlist` component uses `zod` + `react-hook-form` for client-side validation and simulates an API call. Replace the simulated timeout with your backend integration as needed.

**Development Tips**

- Add new images to `public/imgs` and reference them with `/imgs/<name>` in `next/image` components.
- Use the site locally and verify responsive/layout behavior by resizing the browser and checking breakpoints (many components use Tailwind responsive classes).

**Deployment**

- Recommended: Deploy to Vercel for first-class Next.js support. Connect the repository and let Vercel handle builds.
- Environment variables and API endpoints: configure them in your host (Vercel project settings) and reference via `process.env`.

**Contributing**

- Fork → create a branch → implement changes → open a PR. Keep changes focused and run `npm run dev` to verify.

**License**

- This repository does not include an explicit license file. Add a `LICENSE` if you intend to open-source the project.

If you want, I can also:

- Add a short `CONTRIBUTING.md` or `CODE_OF_CONDUCT.md`.
- Standardize the animation imports across the codebase.
- Add a simple GitHub Actions workflow for linting and building on PRs.

---

Generated on behalf of the repository in the local workspace.

---

## Project Details (scanned files)

- **Next.js app router**: The app uses the `/app` directory (`app/layout.tsx`, `app/page.tsx`) and global styles in `app/globals.css`.
- **Pages / Sections**: The main page composes several section components imported in `app/page.tsx`: `Navigation`, `Hero`, `Features`, `Pricing`, `Waitlist`, and `Footer` (located in `components/sections`).
- **Hero**: `components/sections/hero.tsx` is a client component using `framer-motion` for animations and `next/image` for static images. It includes a dashboard mockup image under `public/imgs/Dashboard.png` (previously updated to reference `Desktop.png` in edits).
- **Waitlist**: `components/sections/waitlist.tsx` implements the waitlist form using `react-hook-form`, `zod` for validation, and a `Section` UI wrapper. It currently simulates an API call and displays a success state.
- **UI primitives**: Reusable UI components live in `components/ui` (e.g. `button.tsx`, `input.tsx`, `card.tsx`, `section.tsx`). Buttons use motion animations for hover/tap effects (see `components/ui/button.tsx` which imports `motion` from `motion/react`).
- **Utilities**: `lib/utils.ts` provides helper functions (`cn` wrapper around `clsx`).
- **Static assets**: The `public/imgs` folder contains `Desktop.png`, `Dashboard.png`, `Effect.png`, `Frame.png`, `Mask.png`, and `icon.png` used by the hero and other sections.
- **Configs & Tooling**: Key config files include `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, and `eslint.config.mjs`. The project uses Tailwind CSS and ESLint.

## Tech Stack

- Framework: `Next.js` (app router)
- UI: Tailwind CSS
- Language: TypeScript
- Animations: mixture of `framer-motion` and `motion` imports (inconsistent — see Notes)
- Form & Validation: `react-hook-form` + `zod`

## Scripts

- `npm run dev` — start development server (Next.js)
- `npm run build` — build production assets
- `npm start` — run built production server
- `npm run lint` — run ESLint

## How to run (Windows PowerShell)

Install dependencies:

```powershell
npm install
```

Run dev server:

```powershell
npm run dev
# then open http://localhost:3000
```

Build & start production:

```powershell
npm run build
npm start
```

## Notes & Recommendations

- Animation imports are inconsistent across files: `components/sections/hero.tsx` uses `framer-motion` (`import { motion } from "framer-motion"`) while `components/sections/waitlist.tsx` and `components/ui/button.tsx` use `motion/react` (`import { motion } from "motion/react"`). I recommend standardizing on one library (either `framer-motion` or the lightweight `motion` package) and updating imports accordingly.
- The `Waitlist` currently simulates an API call using a timeout. Replace the timeout in `components/sections/waitlist.tsx` with your actual backend endpoint when integrating.
- Dashboard image(s) used by the Hero live in `public/imgs/`. Replace `Desktop.png` or `Dashboard.png` to update the visual.
- The project currently lists the `motion` package in `package.json` (version `^12.23.24`). If you unify on `framer-motion`, add it to `package.json` and remove the other package to avoid duplicate packages.

## Suggested Next Steps

1. Standardize animation imports and dependencies.
2. Wire the waitlist form to a real API or serverless function.
3. Add a basic CI workflow to run linting and build on PRs.
4. Add a `LICENSE` and `CONTRIBUTING.md` if planning to open source.

---

If you'd like, I can now:

- Standardize `motion`/`framer-motion` imports across the repo.
- Wire the waitlist form to a mock API endpoint or add a serverless function.
- Add a GitHub Actions workflow for lint/build checks.

Tell me which of the above you want next and I'll implement it.
