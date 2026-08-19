# Library Documentation

## 1. Purpose

This file records the official libraries and external services used by the portfolio.

Use official documentation as the source of truth when implementing or troubleshooting a library.

---

## 2. Next.js

**Purpose:** Application framework.

**Usage:**

- App Router
- Pages
- Layouts
- Server Components
- Route Handlers
- Metadata
- Image optimization
- Navigation

**Documentation:** https://nextjs.org/docs

---

## 3. React

**Purpose:** UI development.

**Usage:**

- Components
- Props
- State
- Client-side interactions

**Documentation:** https://react.dev/

---

## 4. TypeScript

**Purpose:** Type safety.

**Usage:**

- Component props
- Project models
- API types
- Portfolio data
- Utility functions

**Documentation:** https://www.typescriptlang.org/docs/

---

## 5. Tailwind CSS

**Purpose:** Styling.

**Usage:**

- Layout
- Responsive design
- Typography
- Spacing
- Colors
- Components

**Documentation:** https://tailwindcss.com/docs

---

## 6. PostHog

**Purpose:** Product analytics.

**Usage:**

- Page views
- Resume downloads
- Project interactions
- Contact interactions
- AI assistant interactions

**Documentation:** https://posthog.com/docs

---

## 7. InsForge

**Status:** Optional.

**Purpose:** Backend/data functionality when required.

Potential usage:

- Database
- Authentication
- Storage
- Contact submissions
- AI assistant data

Do not add InsForge unless the feature requires it.

---

## 8. AI Provider

The AI provider is configurable.

Potential providers:

- Gemini
- OpenAI
- Other supported providers

The selected provider must be accessed through a server-side boundary.

Never expose provider API keys to the client.

---

## 9. Next.js Image

Use `next/image` when image optimization is beneficial.

**Documentation:** https://nextjs.org/docs/app/api-reference/components/image

---

## 10. Next.js Link

Use `next/link` for internal application navigation.

**Documentation:** https://nextjs.org/docs/app/api-reference/components/link

---

## 11. Next.js Metadata

Use Next.js metadata APIs for page titles, descriptions, and social metadata.

**Documentation:** https://nextjs.org/docs/app/getting-started/metadata-and-og-images

---

## 12. Documentation Rule

Before using a library feature:

1. Check the official documentation.
2. Prefer the current recommended API.
3. Avoid deprecated APIs.
4. Do not assume an API works from memory when documentation is available.
5. Keep implementation consistent with the installed library version.

---

## 13. Dependency Rule

Do not add a library simply because it can solve a problem.

Before adding a dependency:

1. Check whether Next.js provides the functionality.
2. Check whether React provides the functionality.
3. Check whether the existing project already has a suitable solution.
4. Add a dependency only when it provides meaningful value.

---

## 14. Version Rule

The installed package version is the source of truth for implementation details.

If documentation differs from the installed version:

- Check the installed version.
- Use documentation appropriate to that version.
- Do not blindly copy examples from another version.

---

## 15. External Service Rule

Keep external service implementations isolated.

```text
UI
 ↓
Application Service
 ↓
External Library / API
Do not spread provider-specific code throughout the application.

## 16. Final Rule

Use the official documentation and the installed package version as the source of truth. Keep dependencies minimal and external services isolated.