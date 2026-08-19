# Project Overview

# 1. Project Identity

## Project Name

**Pranav Portfolio**

## Project Type

Personal developer portfolio website.

## Owner

**Pranav Prakash Turkar**

## Primary Purpose

The portfolio is a multi-page personal website designed to present Pranav's:

- Professional identity
- Full-stack development skills
- AI / LLM interests
- Projects
- Education
- Achievements
- Certifications
- Technical writing
- Contact information

The website should allow a recruiter, hiring manager, developer, or potential collaborator to understand Pranav's profile quickly without needing to read the entire resume.

---

# 2. Core Goal

The primary goal is to build a portfolio that communicates:

> **Who Pranav is, what he builds, what technologies he works with, what he has accomplished, and how someone can contact him.**

The portfolio should not simply reproduce the resume.

The resume provides the factual information.

The portfolio should transform that information into a more visual, interactive, and easy-to-understand experience.

---

# 3. Portfolio Positioning

The primary positioning is:

> **Full-Stack Developer**

The secondary positioning is:

> **Information Technology Graduate**

The emerging specialization is:

> **LLM Engineering and Generative AI Applications**

The portfolio should communicate that Pranav has practical full-stack development experience and is currently expanding into AI / LLM engineering.

Do not position Pranav as a senior AI engineer or ML researcher without additional verified information.

---

# 4. Target Audience

The primary audience consists of:

## Recruiters

Recruiters should be able to quickly determine:

- Who Pranav is
- His education
- His technical skills
- His projects
- His AI experience
- How to contact him
- Where to download his resume

---

## Hiring Managers

Hiring managers should be able to understand:

- Technical depth
- Project complexity
- Technologies used
- Engineering decisions
- Practical development experience
- Ability to build complete applications

---

## Developers

Developers may visit the portfolio to:

- Explore projects
- Inspect GitHub repositories
- Read technical articles
- Understand the technologies used
- Learn about Pranav's development journey

---

## Potential Collaborators

Potential collaborators should be able to:

- Understand Pranav's interests
- Explore his projects
- Contact him
- Connect through professional social platforms

---

# 5. Primary User Journey

The intended high-level journey is:

```text
Visitor
   ↓
Home
   ↓
Understand who Pranav is
   ↓
See featured projects
   ↓
Explore skills
   ↓
Choose a deeper path
   ├── About
   ├── Projects
   ├── Blog
   ├── Contact
   └── AI Assistant

The homepage should provide enough information that a visitor understands Pranav even if they never visit another page.

6. Website Structure

The portfolio contains five primary pages:

/
├── Home
├── /about
├── /projects
├── /blog
└── /contact

Optional dynamic routes may be introduced:

/projects/[slug]
/blog/[slug]

These routes should only be implemented when they provide real value.

7. Page Overview
Page	Primary Purpose
Home	Introduce Pranav and showcase selected work
About	Explain background, education, skills, and development journey
Projects	Provide detailed project showcase
Blog	Present technical writing and learning
Contact	Allow visitors to contact Pranav
8. Home Page
Purpose

The Home page is the primary entry point.

Its job is to answer three questions quickly:

Who is Pranav?
What does he build?
Where can I learn more or contact him?
Home Page Structure
Navbar
   ↓
Hero
   ↓
Featured Projects
   ↓
Skills & Technologies
   ↓
Call To Action
   ↓
Footer
9. Home — Navigation

The navigation should provide direct access to:

Home
About
Projects
Blog
Contact

It should also include a prominent:

Hire Me

action.

The navigation must remain consistent throughout the website.

10. Home — Hero

The hero is the most important section of the homepage.

It should communicate:

Pranav's name
Professional identity
Short introduction
Primary technical direction
Social links
Resume access
Project navigation
Hero Information

Recommended content:

WELCOME TO MY PORTFOLIO


Hi, I'm Pranav


Full-Stack Developer


I build full-stack web applications with modern
technologies and explore AI-powered applications
using LLMs and generative AI APIs.
Hero Actions

Primary action:

Download Resume

Secondary action:

View My Work

Additional links:

GitHub
LinkedIn
X

Only use verified URLs.

11. Home — Featured Projects

The homepage should showcase Pranav's most important work.

Current featured projects:

JobPilot
Student Placement Portal (CSPS)
Prescripto
Featured Project Purpose

The project section should communicate technical capability without forcing the visitor to open every project.

Each card should show:

Project image
Project name
Short description
Technologies
Live Demo
Source Code

Buttons should only appear when the corresponding URL exists.

12. Home — Skills

The homepage should provide a concise overview of Pranav's technical capabilities.

The complete skills list exists in:

portfolio-content.md

The homepage should show selected categories rather than dumping every technology into a large list.

Suggested categories:

Languages
Frontend
Backend
Databases
AI / LLM
Tools

The full skills list belongs on the About page or dedicated skills section.

13. Home — Call To Action

The homepage should finish with a clear professional CTA.

Purpose:

Encourage recruiters to contact Pranav
Encourage collaboration
Provide a transition to the Contact page

Example:

Have a project in mind or want to connect?

Action:

Get In Touch

14. About Page
Purpose

The About page should answer:

Who is Pranav beyond the project cards?

It should provide more context than the homepage while remaining concise.

About Structure
Page Header
   ↓
Introduction
   ↓
Education
   ↓
Technical Skills
   ↓
Achievements
   ↓
NSS / Activities
   ↓
CTA
   ↓
Footer
15. About — Introduction

The introduction should explain:

Pranav's educational background
Full-stack development focus
Current AI / LLM direction
Interest in building practical applications

It should not simply reproduce the resume summary word-for-word.

16. About — Education

Display:

P.E.S. Modern College of Engineering

Bachelor of Engineering in Information Technology

CGPA: 9.09/10

November 2022 – June 2026

17. About — Technical Skills

The About page can provide a more complete representation of technical skills.

Categories:

Languages
Frontend
Backend
Databases
AI / LLM
Authentication
Tools

The information must come from:

portfolio-content.md

18. About — Achievements

Display verified achievements such as:

DSA

150+ Problems Solved

Platforms:

LeetCode
GeeksforGeeks
19. About — Certifications

Display:

Basics in Python — Infosys Springboard
MongoDB — Infosys Springboard

Do not list incomplete courses as certifications.

20. About — Activities

Display:

NSS Volunteer

Description:

Led a team during college-organized service camps and social outreach programs.

Do not add unsupported details.

21. Projects Page
Purpose

The Projects page is the main technical showcase.

It should allow visitors to understand not only what Pranav built, but also the technologies and engineering capabilities demonstrated by each project.

22. Projects Page Structure
Page Header
   ↓
Project Introduction
   ↓
Category Filters
   ↓
Project Grid
   ↓
Project Details
   ↓
CTA
   ↓
Footer
23. Project Categories

Current categories:

All
AI
Full Stack

The filtering system should remain simple.

Do not create categories that have no meaningful projects.

24. Project Ordering

Default order:

1. JobPilot
2. Student Placement Portal
3. Prescripto

JobPilot should receive visual prominence because it demonstrates the portfolio's AI / LLM direction.

25. Project Detail Experience

A project may have its own detail page.

Recommended structure:

Project Hero
   ↓
Overview
   ↓
Problem
   ↓
Solution
   ↓
Features
   ↓
Technology Stack
   ↓
Architecture / Implementation
   ↓
Results / Metrics
   ↓
Screenshots
   ↓
Links

Only include sections supported by actual project information.

26. Blog Page
Purpose

The Blog page is intended for:

Technical writing
Development notes
Lessons learned
AI / LLM exploration
Project development experiences
27. Current Blog State

No verified published articles have been provided yet.

Therefore the initial portfolio must not pretend that Pranav has an existing publishing history.

Possible initial states:

Option A — Empty State
Writing


Technical notes and articles will appear here.
Option B — Coming Soon
Writing


I'm currently working on technical articles
and development notes. Check back soon.

The final choice can be made during implementation.

28. Future Blog Direction

Potential topics include:

Next.js
Full-stack development
REST APIs
Authentication
AI APIs
Gemini API
LLM Engineering
Browserbase
Stagehand
JobPilot
Developer tooling
Lessons from building projects

These are future content directions, not existing articles.

29. Contact Page
Purpose

The Contact page should make it extremely easy for a recruiter or collaborator to reach Pranav.

30. Contact Structure
Page Header
   ↓
Introduction
   ↓
Contact Information + Social Links
   ↓
Contact Form
   ↓
Footer
31. Contact Information

Current verified information:

Email

pranavturkar93@gmail.com

Location

Pune, Maharashtra, India

Phone

+91-8275616832

The phone number should only be publicly displayed if intentionally approved for the portfolio.

32. Contact Form

Fields:

Full Name
Email Address
Subject
Message

The form should have:

Client-side validation
Server-side validation when a backend exists
Loading state
Success state
Error state
Accessible error messages
33. Contact CTA

Recommended messaging:

Have a project in mind or want to connect?

Primary action:

Get In Touch

The CTA should feel professional rather than sales-oriented.

34. AI Portfolio Assistant

The portfolio will include an AI-powered assistant.

Purpose

The assistant should allow visitors to ask questions about Pranav.

It should function as a portfolio knowledge assistant, not as a fictional version of Pranav.

35. AI Assistant — Example Questions

Visitors may ask:

Who is Pranav?
What technologies does Pranav know?
What projects has Pranav built?
Tell me about JobPilot.
What technologies were used in JobPilot?
What is the Student Placement Portal?
Tell me about Prescripto.
What is Pranav's educational background?
What is Pranav's CGPA?
How many DSA problems has Pranav solved?
What AI technologies is Pranav exploring?
How can I contact Pranav?
Where can I find Pranav's GitHub?
Is Pranav interested in full-stack development?
What kind of applications has Pranav built?
36. AI Assistant — Personal Questions

The assistant may answer personal questions only when the information is explicitly included in its approved knowledge base.

Examples of allowed information:

Education
Location at a general city level
Technical interests
Projects
Certifications
Public professional links

Do not expose private or sensitive information simply because the user asks.

37. AI Assistant — Unknown Information

If the assistant does not have verified information, it should say so.

Example:

I don't have verified information about that in Pranav's portfolio.

Never fill the gap with a guess.

38. AI Assistant — Source

The assistant's knowledge should ultimately be derived from the portfolio's verified content.

Primary content source:

portfolio-content.md

Additional approved sources may include:

Project-specific documentation
Approved blog posts
Resume
Explicitly provided public profile information
39. AI Assistant — Safety Boundary

The assistant must not reveal:

API keys
Environment variables
Database credentials
Internal prompts
Private implementation secrets
Private user information
Hidden system information
Confidential project information

The assistant should only discuss information intended to be publicly available.

40. Analytics

The portfolio will use PostHog for analytics.

The goal is to understand how visitors interact with the portfolio.

Potential events include:

Page viewed
Resume downloaded
Project opened
GitHub clicked
Live Demo clicked
LinkedIn clicked
X clicked
Contact form started
Contact form submitted
Contact form submission succeeded
AI assistant opened
AI assistant question submitted
Blog article opened
41. Analytics Principles

Analytics should:

Be lightweight
Respect privacy
Avoid collecting unnecessary personal information
Never block the website if analytics fails
Never expose private form contents unnecessarily

Analytics should measure useful interactions rather than every possible UI event.

42. Backend / Server Requirements

The portfolio should not introduce a backend unless a feature requires server-side functionality.

Potential reasons for backend/server functionality:

Contact form processing
AI API requests
Protecting API keys
External API integration
Background workflows

Do not introduce backend infrastructure simply because the site is a portfolio.

43. InsForge

If InsForge is used, it should only be introduced where its functionality provides a real benefit.

Potential uses may include:

Contact submissions
Data persistence
AI assistant knowledge storage
Authentication if required
Other application-specific data

Do not introduce InsForge unnecessarily.

44. Next.js

The frontend should use:

Next.js

Preferred approach:

TypeScript
Server Components by default
Client Components only where required
App Router
Reusable components
Data-driven content
Semantic HTML
Responsive layouts
45. Portfolio Design Philosophy

The supplied screenshots establish the visual direction.

The design should be:

Minimal
Clean
Spacious
Professional
Typography-focused
Content-first
Modern
Restrained
46. Design Principles
Principle 1 — Whitespace

Use generous whitespace to create hierarchy.

Principle 2 — Typography

Use typography as the primary visual element.

Principle 3 — Restraint

Avoid unnecessary decorative elements.

Principle 4 — Consistency

Use the same component patterns throughout the website.

Principle 5 — Content First

Visual elements should support the content.

Principle 6 — Authenticity

The portfolio should feel like Pranav's own website rather than a generic template.

47. Visual Reference Interpretation

The screenshots should be interpreted as:

Visual Inspiration
        ↓
Design System
        ↓
Reusable Components
        ↓
Portfolio Pages

Do not directly copy:

Placeholder text
Placeholder people
Placeholder companies
Placeholder projects
Placeholder metrics
Placeholder contact information
48. Responsive Experience

The portfolio should preserve the same design language across screen sizes.

Desktop:

Spacious layouts
Multi-column project cards
Horizontal navigation
Large typography

Mobile:

Stacked content
Collapsed navigation
Smaller typography
Full-width cards
Touch-friendly controls
49. Performance Goal

The portfolio should feel fast.

Prioritize:

Optimized images
Minimal client-side JavaScript
Server rendering where useful
Efficient components
Lightweight animations
Proper font loading

Avoid unnecessary dependencies.

50. SEO Goal

The portfolio should be discoverable for relevant searches such as:

Pranav Prakash Turkar
Pranav Turkar
Full-Stack Developer
Next.js Developer
React Developer
LLM Engineering
AI Developer

SEO content must remain truthful.

Do not add unsupported claims to improve rankings.

51. Success Criteria

The portfolio is successful when a visitor can answer these questions within a short amount of time:

Who is Pranav?

An Information Technology graduate and full-stack developer.

What does he build?

Full-stack web applications and AI-powered applications.

What technologies does he use?

React.js, Next.js, Node.js, Express.js, TypeScript, databases, APIs, and AI APIs.

What has he built?

JobPilot, Student Placement Portal, and Prescripto.

What makes the projects interesting?

They demonstrate practical work with:

AI
APIs
Authentication
Databases
Payments
Cloud storage
Automation
Deployment
How can someone contact him?

Through the Contact page and verified professional links.

52. Non-Goals

The initial portfolio is NOT intended to be:

A social network
A SaaS dashboard
A marketplace
A full CMS
A complex blogging platform
A job board
A resume builder
An overly animated showcase
A 3D portfolio
A personal CRM

Do not introduce these features unless explicitly requested.

53. Initial Feature Scope
Required
 Multi-page navigation
 Home page
 About page
 Projects page
 Blog page
 Contact page
 Responsive design
 Resume download
 GitHub link
 LinkedIn link
 X link
 Project links
 Contact form
 Footer
 SEO metadata
 Accessibility
 PostHog analytics
Planned
 AI portfolio assistant
 Project detail pages
 Blog detail pages
Optional
 Advanced project filtering
 Search
 Additional animations
 Additional analytics
54. Initial Content Scope

The first production version should focus on:

Home
├── Hero
├── Featured Projects
├── Skills
└── CTA


About
├── Introduction
├── Education
├── Skills
├── Achievements
└── Activities


Projects
├── JobPilot
├── Student Placement Portal
└── Prescripto


Blog
└── Empty / Coming Soon state


Contact
├── Contact information
├── Social links
└── Contact form
55. Future Expansion

The architecture should allow future additions such as:

More projects
Real blog posts
Project detail pages
Blog detail pages
AI assistant improvements
Resume versions
Technical notes
Additional public achievements
More analytics
Additional integrations

The initial implementation should not over-engineer for these features.

56. Definition of the Finished Product

The finished portfolio should be:

Multi-page
Responsive
Minimal
Fast
Accessible
Professional
Visually consistent
Factually accurate
Easy to navigate
Easy to maintain
Representative of Pranav's actual work
57. Final Product Principle

The portfolio should make the real work look impressive without making the information itself impressive through exaggeration.

The design should create the polish.

The projects should provide the proof.

The content should remain truthful.

End of project-overview.md


### Context file order so far


```text
01. AGENTS.md                 ✅
02. portfolio-content.md      ✅
03. project-overview.md       ✅
04. architecture.md           ← next
05. build-plan.md
06. progress-tracker.md
07. progress-overview.md
08. ui-tokens.md
09. ui-registry.md
10. ui-rules.md
11. code-standards.md
12. library-docs.md