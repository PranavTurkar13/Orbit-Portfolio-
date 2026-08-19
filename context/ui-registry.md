# UI Registry

## 1. Purpose

This file defines the reusable UI components used throughout the portfolio.

Components should be reused instead of recreating visually similar elements for individual pages.

---

## 2. Layout Components

### Navbar

**Purpose:** Primary site navigation.

Contains:

- Logo / name
- Home
- About
- Projects
- Blog
- Contact
- Hire Me
- Mobile menu

Used on:

- Home
- About
- Projects
- Blog
- Contact
- Project detail pages
- Blog detail pages

---

### Footer

**Purpose:** Consistent site footer.

Contains:

- Pranav branding
- Short description
- Navigation links
- Contact information
- Social links
- Copyright

Used on all public pages.

---

### Container

**Purpose:** Controls page content width and horizontal spacing.

Rules:

- Center content.
- Use consistent maximum width.
- Maintain responsive horizontal padding.

---

### Section

**Purpose:** Provides consistent vertical spacing between major sections.

---

## 3. Typography Components

### SectionHeading

Contains:

- Optional eyebrow
- Heading
- Optional description

Used for major page sections.

Example:

```text
GET TO KNOW ME

About Me

A short introduction about Pranav.

4. Button Components
PrimaryButton

Used for primary actions.

Examples:

Download Resume
Get In Touch
Send Message
Hire Me
SecondaryButton

Used for secondary actions.

Examples:

View My Work
View Project
Read Article
IconButton

Used for compact icon-only actions.

Must include an accessible label.

5. Badge Components
TechnologyBadge

Displays a technology used by a project.

Examples:

Next.js
TypeScript
MongoDB
Gemini API
CategoryBadge

Displays project or content categories.

Examples:

AI
Full Stack
6. Project Components
ProjectCard

Displays a project summary.

Contains:

Project image
Project name
Short description
Technology badges
GitHub link
Live Demo link

The card should receive project data rather than hardcoded project content.

ProjectGrid

Displays multiple ProjectCard components.

Responsibilities:

Grid layout
Responsive behavior
Spacing
ProjectFilters

Optional interactive component for project categories.

Initial categories:

All
AI
Full Stack

Do not add filters that provide no useful distinction.

ProjectLinks

Handles:

GitHub
Live Demo

Only render a link when a verified URL exists.

ProjectHero

Used on individual project pages.

Contains:

Project name
Description
Category
Technology badges
Project links
Project image
7. Skill Components
SkillGroup

Displays a group of related technologies.

Examples:

Frontend
React.js
Next.js
HTML
CSS
Tailwind CSS
SkillTag

Displays an individual skill.

8. Blog Components
BlogCard

Displays:

Article title
Description
Date
Reading time
Tags
Optional image
BlogGrid

Displays multiple BlogCard components.

BlogHeader

Displays:

Article title
Description
Publication information
Tags
BlogContent

Responsible for rendering the actual article content.

9. Contact Components
ContactInfo

Displays:

Email
Location
Optional phone
Social links

Only display information approved for public use.

ContactForm

Contains:

Full Name
Email
Subject
Message
Submit button

States:

Default
Loading
Success
Error
10. Social Components
SocialLinks

Displays verified professional social links.

Possible platforms:

GitHub
LinkedIn
X

Never generate or guess URLs.

SocialLink

Represents one social platform.

Contains:

Icon
Platform name where appropriate
URL
11. AI Assistant Components
ChatButton

Floating or strategically placed button that opens the portfolio assistant.

ChatWindow

Main assistant interface.

Contains:

Header
Message list
Input
Send button
Loading state
Error state
ChatMessage

Represents one message.

Types:

User
Assistant
ChatInput

Handles:

User input
Submit
Loading state
Disabled state
12. Empty State
EmptyState

Reusable component for sections without content.

Example:

No blog posts yet.


Technical articles and notes will be added here soon.

Use this for the Blog page until real articles exist.

13. Loading State
LoadingState

Used when content or an action is loading.

Loading states should be subtle and consistent with the minimalist design.

14. Error State
ErrorState

Used when an operation fails.

Examples:

Contact submission failure
AI assistant failure
Missing external data

Error messages should be clear and user-friendly.

15. Component Rules

Every reusable component should:

Have one clear responsibility.
Accept data through props when appropriate.
Avoid hardcoded portfolio content.
Follow ui-tokens.md.
Follow ui-rules.md.
Be responsive.
Be accessible.
Avoid unnecessary client-side JavaScript.
16. Reuse Rule

If two sections share the same visual pattern, prefer a shared component.

Do not create separate components such as:

JobPilotCard
PrescriptoCard
CSPSCard

when a generic:

ProjectCard

can handle all three.

17. Component Expansion

New reusable components may be added when a recurring UI pattern appears.

Before creating a new component, check whether an existing component can support the requirement through props or composition.

## 19. Imprinted Component Patterns

### SectionHeading
File: `components/ui/SectionHeading.tsx`  
Last updated: 2026-08-19

| Property | Class |
| --- | --- |
| Eyebrow | `text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500` |
| Title | `text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950` |
| Description | `text-sm sm:text-base text-neutral-600 max-w-2xl` |
| Spacing | `mb-12 sm:mb-16` |

**Pattern notes:**
Use for all major page section titles to maintain uniform typographic rhythm.

---

### Button
File: `components/ui/Button.tsx`  
Last updated: 2026-08-19

| Property | Class |
| --- | --- |
| Background | `bg-neutral-950` (primary), `bg-white` (outline), `bg-neutral-100` (ghost) |
| Border | `border border-neutral-950` (primary), `border border-neutral-300/80` (outline) |
| Border radius | `rounded-xl` |
| Text — primary | `text-white font-medium text-sm` |
| Text — secondary | `text-neutral-900 font-medium text-sm` |
| Spacing | `px-6 py-2.5` (md), `px-8 py-3.5` (lg) |
| Hover state | `hover:bg-neutral-800` (primary), `hover:bg-neutral-50 hover:border-neutral-400` (outline) |
| Shadow | `shadow-xs` / `active:scale-[0.98]` |

**Pattern notes:**
Always use rounded-xl with high-contrast text. Never use saturated colored buttons.

---

### TimelineCard
File: `app/about/page.tsx`  
Last updated: 2026-08-19

| Property | Class |
| --- | --- |
| Background | `bg-white` |
| Border | `border border-neutral-200/90` |
| Border radius | `rounded-2xl` |
| Text — primary | `text-base sm:text-lg font-bold text-neutral-950` |
| Text — secondary | `text-xs sm:text-sm text-neutral-600 leading-relaxed` |
| Spacing | `p-6 sm:p-7` |
| Hover state | `hover:border-neutral-400 hover:shadow-xs transition-all` |
| Shadow | `shadow-2xs` |

**Pattern notes:**
Used for education and milestone timeline entries with connected vertical line (`before:w-0.5 before:bg-neutral-200`).

---

### QuickFactCard
File: `app/about/page.tsx`  
Last updated: 2026-08-19

| Property | Class |
| --- | --- |
| Background | `bg-neutral-50/80` |
| Border | `border border-neutral-200/80` |
| Border radius | `rounded-xl` |
| Text — primary | `text-xs sm:text-sm font-bold text-neutral-900` |
| Text — label | `text-[11px] font-semibold uppercase tracking-wider text-neutral-500` |
| Spacing | `p-4` |
| Icon container | `p-2 rounded-lg bg-white border border-neutral-200/60` |

---

### InterestCard (Things I Love)
File: `app/about/page.tsx`  
Last updated: 2026-08-19

| Property | Class |
| --- | --- |
| Background | `bg-neutral-50/70` |
| Border | `border border-neutral-200/80` |
| Border radius | `rounded-2xl` |
| Text — primary | `text-base font-bold text-neutral-900` |
| Text — secondary | `text-xs text-neutral-600 leading-relaxed` |
| Spacing | `p-5 sm:p-6` |
| Hover state | `hover:border-neutral-300 hover:bg-white hover:shadow-xs transition-all duration-200` |
| Icon container | `w-10 h-10 rounded-xl bg-white border border-neutral-200/80 shadow-2xs` |

---

### ProjectCard
File: `components/projects/ProjectCard.tsx`  
Last updated: 2026-08-19

| Property | Class |
| --- | --- |
| Background | `bg-white` |
| Border | `border border-neutral-200/90` |
| Border radius | `rounded-2xl` |
| Text — primary | `text-lg sm:text-xl font-bold text-neutral-950` |
| Text — secondary | `text-xs sm:text-sm text-neutral-600 leading-relaxed` |
| Spacing | `p-6 sm:p-7` |
| Hover state | `hover:border-neutral-400 hover:shadow-md transition-all duration-300` |
| Shadow | `shadow-xs` |

---

### SkillCard
File: `components/skills/SkillCard.tsx`  
Last updated: 2026-08-19

| Property | Class |
| --- | --- |
| Background | `bg-white` |
| Border | `border border-neutral-200/90` |
| Border radius | `rounded-2xl` |
| Text — primary | `text-base font-bold text-neutral-950` |
| Tag badge | `bg-neutral-100/90 border border-neutral-200/80 text-neutral-800 text-xs font-medium rounded-lg px-2.5 py-1` |
| Spacing | `p-6 sm:p-7` |
| Hover state | `hover:border-neutral-400 hover:shadow-xs transition-all duration-200` |
| Shadow | `shadow-xs` |

---

### CertificationCard
File: `app/about/page.tsx`  
Last updated: 2026-08-19

| Property | Class |
| --- | --- |
| Background | `bg-neutral-50/60` |
| Border | `border border-neutral-200/90` |
| Border radius | `rounded-2xl` |
| Text — primary | `text-base sm:text-lg font-bold text-neutral-950` |
| Text — secondary | `text-xs sm:text-sm text-neutral-600 leading-relaxed` |
| Spacing | `p-6 sm:p-7 space-y-4` |
| Hover state | `hover:border-neutral-400 hover:bg-white hover:shadow-xs transition-all duration-200` |
| Button action | `px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-950 hover:text-white text-xs font-semibold text-neutral-800 border border-neutral-200 hover:border-neutral-950 shadow-2xs` |
| Skill pill | `text-[11px] font-medium bg-white text-neutral-700 border border-neutral-200 px-2.5 py-0.5 rounded-md` |
| Shadow | `shadow-xs` |