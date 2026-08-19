# Code Standards

## 1. General

- Use TypeScript.
- Prefer simple, readable code.
- Keep components small and focused.
- Avoid unnecessary abstractions.
- Avoid duplicated logic.
- Follow the existing architecture before introducing new patterns.

---

## 2. TypeScript

- Use explicit types for important data structures.
- Avoid `any`.
- Prefer interfaces or type aliases for shared models.
- Keep types close to the data they describe.
- Do not use type assertions unless necessary.
- Handle nullable and optional values explicitly.

---

## 3. React

- Use functional components.
- Prefer Server Components by default.
- Use Client Components only when required.
- Keep components focused on one responsibility.
- Use props for reusable data.
- Avoid deeply nested component logic.
- Do not duplicate components for similar UI patterns.

---

## 4. Next.js

- Use the App Router.
- Use Server Components by default.
- Use route handlers for server-side API functionality.
- Use Next.js metadata APIs for SEO.
- Use `next/image` for optimized images where appropriate.
- Use `next/link` for internal navigation.
- Keep server-only logic on the server.

---

## 5. Components

Use the existing components defined in `ui-registry.md`.

Before creating a component:

1. Check whether an existing component can be reused.
2. Check whether the existing component can accept additional props.
3. Create a new component only when the responsibility is genuinely different.

---

## 6. Naming

### Components

Use PascalCase:

```text
ProjectCard.tsx
ContactForm.tsx
ChatWindow.tsx
Functions

Use camelCase:

getProject()
trackEvent()
sendMessage()
Variables

Use descriptive camelCase names:

projectData
featuredProjects
socialLinks
Constants

Use descriptive names:

MAX_PROJECTS
DEFAULT_CATEGORY
7. File Organization

Keep related files together.

Example:

components/
└── projects/
    ├── ProjectCard.tsx
    ├── ProjectGrid.tsx
    └── ProjectFilters.tsx

Do not place unrelated components in the same directory.

8. Data

Portfolio content must be data-driven.

Do not hardcode the same information across multiple pages.

Use:

data/
├── profile.ts
├── projects.ts
├── skills.ts
└── social-links.ts

The data must remain consistent with portfolio-content.md.

9. Project Data

Projects should use a shared type.

Example:

type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string[];
  technologies: string[];
  image?: string;
  featured?: boolean;
  github?: string;
  liveDemo?: string;
};

Optional information should remain optional.

10. Styling

Use Tailwind CSS.

Prefer existing tokens and reusable classes.

Do not introduce arbitrary styling values without a reason.

Follow:

ui-tokens.md
ui-registry.md
ui-rules.md
11. Responsive Design

Every component must work across:

Mobile
Tablet
Desktop

Do not build desktop-only components.

12. Accessibility

Use semantic HTML.

Examples:

<nav>
<main>
<section>
<header>
<footer>
<button>
<form>

Interactive elements must be keyboard accessible.

Images must have appropriate alt text.

Forms must have associated labels.

13. Error Handling

Handle expected failures explicitly.

Examples:

Failed API requests
Failed contact submissions
AI errors
Missing projects
Missing blog posts

Do not expose internal errors to visitors.

14. API Routes

Validate incoming data on the server.

Never trust client-side validation alone.

Keep API routes focused on one responsibility.

Example:

/api/chat
→ AI requests


/api/contact
→ Contact submissions
15. Security

Never expose:

API keys
Database credentials
Private tokens
Environment variables
Internal prompts
Private data

Use environment variables for secrets.

16. AI Code

Keep AI provider logic separate from the UI.

Preferred structure:

Chat UI
   ↓
API Route
   ↓
AI Service
   ↓
AI Provider

Do not place provider credentials or provider-specific logic inside React components.

17. Analytics Code

Keep PostHog logic behind an analytics abstraction.

Prefer:

trackEvent("project_viewed", {
  project_slug: project.slug,
});

Avoid scattering provider-specific analytics code throughout components.

18. Comments

Write comments only when they explain something that is not obvious from the code.

Avoid comments that simply restate the code.

Bad:

// Set project name
const projectName = project.name;

Good:

// Keep analytics optional so a PostHog failure cannot affect navigation.
19. Dependencies

Before adding a dependency:

Check whether Next.js already provides the functionality.
Check whether an existing dependency can solve the problem.
Add a new dependency only when it provides meaningful value.

Avoid unnecessary packages.

20. Environment Variables

Never hardcode secrets.

Use .env.local during development.

Only add environment variables that are actually required.

21. Git

Use small, meaningful commits.

Recommended format:

feat: add project detail page
fix: improve mobile navigation
refactor: simplify project card
style: refine hero spacing
docs: update portfolio context

Do not commit:

.env.local
API keys
Secrets
Build artifacts
Unnecessary generated files
22. Testing

Test important functionality before considering it complete.

At minimum verify:

Navigation
Project links
Resume download
Contact form
AI assistant
Responsive layouts
Error states
23. Performance

Prefer:

Server Components
Optimized images
Minimal client-side JavaScript
Lazy loading where appropriate
Small reusable components

Avoid unnecessary animations and dependencies.

24. Content Accuracy

Never invent information.

Use verified information from:

portfolio-content.md

If information is missing:

Leave it out.
Ask for the information.
Use an intentional placeholder only during development.

Do not present placeholder information as real information.

25. Before Creating New Code

Check:

AGENTS.md
architecture.md
ui-tokens.md
ui-registry.md
ui-rules.md
Existing implementation

Follow existing decisions before creating new patterns.

26. Final Code Quality Rule

Write the simplest code that is clear, reusable, secure, accessible, and consistent with the existing architecture.