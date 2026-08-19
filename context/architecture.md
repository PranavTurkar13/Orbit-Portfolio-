# Architecture

## 1. Stack

- **Frontend:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Analytics:** PostHog
- **Backend:** Only when required
- **Backend platform:** InsForge, if required
- **AI:** Server-side API integration

---

## 2. Core Principle

Keep the portfolio simple.

Do not introduce a backend, database, CMS, or additional service unless a feature actually requires it.

The portfolio should remain easy to maintain and extend.

---

## 3. Application Structure

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
├── projects/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── contact/
│   └── page.tsx
├── api/
│   ├── chat/
│   │   └── route.ts
│   └── contact/
│       └── route.ts
├── layout.tsx
├── globals.css
├── loading.tsx
├── error.tsx
└── not-found.tsx

API routes should only be created when required.

4. Pages
/

Home page containing:

Hero
Featured projects
Skills overview
CTA
Footer
/about

Contains:

Introduction
Education
Skills
Certifications
Achievements
NSS activity
/projects

Contains:

Project listing
Project categories
Project cards
Project links
/projects/[slug]

Optional detailed project page.

/blog

Contains:

Blog introduction
Articles
Empty/coming-soon state when no articles exist
/blog/[slug]

Individual blog article.

/contact

Contains:

Contact information
Social links
Contact form
5. Components
components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   └── SectionHeading.tsx
├── projects/
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   └── ProjectFilters.tsx
├── skills/
│   ├── SkillGroup.tsx
│   └── SkillTag.tsx
├── blog/
│   ├── BlogCard.tsx
│   └── BlogGrid.tsx
├── contact/
│   ├── ContactForm.tsx
│   └── ContactInfo.tsx
└── assistant/
    ├── ChatButton.tsx
    ├── ChatWindow.tsx
    ├── ChatInput.tsx
    └── ChatMessage.tsx

Components should have one clear responsibility.

6. Data

Portfolio content should be data-driven.

data/
├── profile.ts
├── projects.ts
├── skills.ts
├── education.ts
├── certifications.ts
└── social-links.ts

The factual source of truth is:

portfolio-content.md

Do not duplicate project information across pages.

7. Projects

Initial projects:

JobPilot
Student Placement Portal (CSPS)
Prescripto

The architecture must support adding more projects later.

Adding a project should only require:

Verified content
Project data
Images if available
GitHub URL if available
Live Demo URL if available

No architectural rewrite should be necessary.

8. Blog

Use local Markdown or MDX initially.

content/
└── blog/
    └── *.mdx

No CMS or database is required initially.

9. AI Assistant

The AI assistant should use a server-side route:

POST /api/chat

Flow:

Chat UI
   ↓
/api/chat
   ↓
Approved portfolio context
   ↓
AI provider
   ↓
Response
   ↓
Chat UI

API keys must never be exposed to the browser.

The assistant must use verified portfolio information and must not hallucinate.

10. Contact

If server-side contact processing is required:

POST /api/contact

Flow:

Contact Form
   ↓
Validation
   ↓
Server
   ↓
Email / InsForge / Service

Do not introduce a database unless persistent storage is actually required.

11. InsForge

InsForge is optional.

Use it only if the portfolio requires:

Persistent contact submissions
Database storage
AI assistant data storage
Authentication
File storage

Static portfolio content should remain local.

12. PostHog

Use PostHog for meaningful analytics.

Recommended events:

page_viewed
resume_downloaded
project_viewed
project_github_clicked
project_live_demo_clicked
social_link_clicked
contact_form_started
contact_form_submitted
contact_form_success
contact_form_error
assistant_opened
assistant_question_submitted
blog_post_viewed

Do not send sensitive form contents or private conversations to analytics.

13. Server and Client Components

Use Server Components by default.

Use Client Components only when required for:

Interactive navigation
Forms
Filtering
Chatbot
Browser APIs
Client-side state
Interactive animations

Do not make entire pages client-side unnecessarily.

14. Security

Never expose:

API keys
Database credentials
Private tokens
Environment variables
Internal prompts

Keep secrets server-side.

15. Deployment

Preferred deployment:

Vercel

The application should remain deployable as a standard Next.js application.

16. Architecture Rule
Pages
  ↓
Reusable Components
  ↓
Data / Services
  ↓
External APIs

Keep external services isolated from UI components.

17. Final Principle

Build the simplest architecture that supports the portfolio today while making it easy to add projects, blog posts, analytics, and the AI assistant later.