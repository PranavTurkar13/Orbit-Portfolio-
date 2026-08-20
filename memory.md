# Memory — Light & Dark Theme System

Last updated: 2026-08-20 15:44 IST

## What was built

- **Theme Infrastructure (`next-themes`)**:
  - Created [`components/theme/ThemeProvider.tsx`](file:///Users/pranavturkar/Projects/orbit/components/theme/ThemeProvider.tsx) wrapping `next-themes` with `attribute="class"`, `defaultTheme="system"`, and `enableSystem`.
  - Created [`components/theme/ThemeToggle.tsx`](file:///Users/pranavturkar/Projects/orbit/components/theme/ThemeToggle.tsx) featuring animated Sun ☀️ / Moon 🌙 toggle icons, `useSyncExternalStore` hydration safety (0 FOUC/flicker), and full keyboard/screen reader accessibility.
  - Added `suppressHydrationWarning` and `ThemeProvider` to [`app/layout.tsx`](file:///Users/pranavturkar/Projects/orbit/app/layout.tsx).
- **Tailwind CSS v4 & Global Theme Tokens (`app/globals.css`)**:
  - Added `@custom-variant dark (&:where(.dark, .dark *));`.
  - Defined `:root` (light) and `.dark` CSS tokens for background, foreground, muted, borders, and card surfaces (`#09090b` obsidian background, `#27272a` neutral borders).
  - Configured dark scrollbars, selection highlights, and animated hero grid pattern.
- **Full Component Dark Theme Adaptation**:
  - Updated [`components/layout/Navbar.tsx`](file:///Users/pranavturkar/Projects/orbit/components/layout/Navbar.tsx) with desktop & mobile drawer `ThemeToggle` and backdrop blur styling.
  - Updated [`components/layout/Footer.tsx`](file:///Users/pranavturkar/Projects/orbit/components/layout/Footer.tsx) with dark borders, typography, and social icons.
  - Updated [`components/ui/Button.tsx`](file:///Users/pranavturkar/Projects/orbit/components/ui/Button.tsx), [`components/ui/Badge.tsx`](file:///Users/pranavturkar/Projects/orbit/components/ui/Badge.tsx), [`components/ui/SectionHeading.tsx`](file:///Users/pranavturkar/Projects/orbit/components/ui/SectionHeading.tsx).
  - Updated [`app/page.tsx`](file:///Users/pranavturkar/Projects/orbit/app/page.tsx), [`components/projects/ProjectCard.tsx`](file:///Users/pranavturkar/Projects/orbit/components/projects/ProjectCard.tsx), [`components/projects/ProjectsView.tsx`](file:///Users/pranavturkar/Projects/orbit/components/projects/ProjectsView.tsx), [`components/skills/SkillCard.tsx`](file:///Users/pranavturkar/Projects/orbit/components/skills/SkillCard.tsx), [`components/about/AboutView.tsx`](file:///Users/pranavturkar/Projects/orbit/components/about/AboutView.tsx), [`components/contact/ContactView.tsx`](file:///Users/pranavturkar/Projects/orbit/components/contact/ContactView.tsx), and [`components/blog/PlacementStoryView.tsx`](file:///Users/pranavturkar/Projects/orbit/components/blog/PlacementStoryView.tsx).

## Decisions made

- Used standard `next-themes` client provider with class attribute matching Tailwind CSS v4 custom variant for zero-flicker instant render.
- Maintained strict obsidian/slate minimalist palette in dark mode adhering to recruiter-friendly guidelines in `AGENTS.md`.
- Implemented `useSyncExternalStore` in `ThemeToggle` to satisfy React 19 concurrent hydration rules without cascading effect re-renders.

## Problems solved

- Eliminated theme flicker and hydration mismatch errors on reload.
- Resolved React 19 ESLint hooks rules with 0 errors and 0 warnings.

## Current state

- **Theme Engine**: 100% complete and verified across all routes (`/`, `/about`, `/projects`, `/blog`, `/contact`).
- **Build Status**: Verified with `next build` (0 errors) and `eslint` (0 warnings).

## Next session starts with

- Continue feature development or content expansions as requested.

## Open questions

- None.
