# AGENTS.md

# Pranav Portfolio — Master Instructions

This repository contains the personal portfolio website of **Pranav Prakash Turkar**.

The portfolio must present Pranav accurately and professionally using the real information from the provided resume and the visual direction shown in the supplied portfolio screenshots.

---

# 1. Core Objective

Build a modern, responsive, recruiter-friendly personal portfolio for:

**Pranav Prakash Turkar**

Primary professional positioning:

> Information Technology graduate with hands-on experience in Full-Stack Web Development and growing expertise in LLM Engineering and generative AI applications.

The website should communicate:

- Full-Stack Web Development experience
- Real-world project experience
- AI / LLM exploration
- Strong academic performance
- Technical skills
- Problem-solving ability
- Professional contact information

The portfolio should feel like a genuine developer portfolio, not a generic template.

---

# 2. Sources of Truth

There are two major sources of information.

## 2.1 Factual Source

The resume is the authoritative source for personal and professional information.

Use the provided resume for:

- Name
- Location
- Education
- CGPA
- Technical skills
- Projects
- Project descriptions
- Project technologies
- Achievements
- Certifications
- NSS activity
- Contact information

Do not invent information that is not supported by the resume or other explicitly provided project information.

---

## 2.2 Visual Source

The screenshots supplied by the user are the visual design reference.

Use them to understand:

- Layout
- Spacing
- Typography
- Navigation
- Section structure
- Card design
- Button design
- Borders
- Shadows
- Responsive layout
- Visual hierarchy
- Footer structure
- Overall design language

The screenshots are NOT the factual source.

---

# 3. Critical Rule: Do Not Copy Screenshot Data

The screenshots contain fictional placeholder information.

Examples include:

- San Francisco, CA
- 5+ Years
- Senior Frontend Developer
- TechCorp Solutions
- Digital Innovations Inc.
- StartUp Hub
- Creative Agency
- pranav@example.com
- +1 (555) 123-4567
- E-Commerce Platform
- Task Management App
- Weather Dashboard
- Social Media Dashboard
- Recipe Finder App
- Example blog posts

These must NOT be used as Pranav's real information.

The agent must reproduce the visual structure while replacing all placeholder information with verified information.

---

# 4. No Hallucination

Never invent:

- Employment history
- Company names
- Job titles
- Years of experience
- Clients
- Freelance work
- Salary
- Awards
- Certifications
- Project metrics
- Project users
- Technologies
- Testimonials
- Blog posts
- Social media URLs
- GitHub URLs
- LinkedIn URLs
- Phone numbers
- Professional achievements

If information is unavailable:

1. Leave it out.
2. Use a TODO internally.
3. Ask the user when necessary.

Do not silently fabricate information.

---

# 5. Personal Information

## Name

Pranav Prakash Turkar

## Location

Pune, Maharashtra, India

## Email

pranavturkar93@gmail.com

## Phone

+91-8275616832

The phone number should only be displayed publicly if the user wants it exposed on the portfolio.

---

# 6. Education

## P.E.S. Modern College of Engineering

**Bachelor of Engineering in Information Technology**

Pune, Maharashtra

**CGPA: 9.09/10**

**November 2022 – June 2026**

Do not change the CGPA.

Do not change the degree.

Do not invent additional degrees.

---

# 7. Professional Summary

The portfolio should communicate the following verified positioning:

> Information Technology graduate with hands-on experience in Full-Stack Web Development using React.js, Next.js, Node.js, Express.js, TypeScript, and MongoDB.

Additional verified positioning:

> Experienced in building RESTful APIs, authentication systems, database-driven applications, and deploying full-stack applications.

Current AI direction:

> Currently exploring LLM Engineering using frontier APIs, prompt engineering, and API-based generative AI applications.

Do not describe Pranav as:

- Senior Developer
- AI Expert
- Machine Learning Engineer
- AI Researcher
- AI Architect
- 5+ years experienced developer

unless the user explicitly provides evidence for those claims.

---

# 8. Technical Skills

Use the following verified skill structure.

## Languages

- Python
- Java
- JavaScript
- TypeScript
- SQL

## Frontend

- React.js
- Next.js
- HTML
- CSS
- Tailwind CSS

## Backend

- Node.js
- Express.js
- REST APIs

## Databases

- MongoDB
- PostgreSQL
- MySQL
- SQLite

## AI / LLM

- LLM Engineering
- Frontier APIs
- Prompt Engineering
- OpenAI API
- Gemini API

## Authentication

- JWT
- Auth0

## Tools

- Git
- GitHub
- Docker
- Postman
- Vercel
- Render
- Browserbase
- Stagehand
- PostHog

Do not add technologies merely because they appear in a generic portfolio template.

---

# 9. Projects

The portfolio should prioritize the following three verified projects.

---

## 9.1 JobPilot

### Technologies

- Next.js
- TypeScript
- Gemini API
- Browserbase
- Stagehand
- InsForge

### Description

AI-powered job discovery and company research platform.

### Features

- AI job discovery
- Jooble API integration
- Gemini API integration
- Automated job searches
- Job match scoring
- 0–100 job match scoring against user profiles
- Autonomous company research agent
- Browserbase
- Stagehand
- Company webpage crawling
- Structured company research dossiers
- Technology stack research
- Company culture research
- Interview preparation research
- Resume parsing
- Dynamic PDF generation
- `@react-pdf/renderer`
- InsForge Database
- InsForge Auth
- InsForge Storage
- PostHog analytics

### Verified resume description

> Engineered an AI job discovery platform integrating the Jooble API and Gemini API to automate job searches and match scoring (0–100) against user profiles.

> Built an autonomous company research agent using Browserbase and Stagehand to crawl company web pages and synthesize structured dossiers covering tech stack, culture, and interview preparation.

> Implemented resume parsing and dynamic PDF generation using `@react-pdf/renderer`, backed by InsForge Database, Auth, Storage, and PostHog analytics.

---

## 9.2 Student Placement Portal (CSPS)

### Technologies

- Next.js
- TypeScript
- Node.js
- PostgreSQL
- Prisma
- Auth0

### Verified features

- Student-facing home interface
- Notifications
- Job application tracking
- Application status tracking
- Auth0 authentication
- Domain-restricted authentication
- Eligibility engine
- TPO workflows
- Recruiter workflows
- Job posting
- Student analysis
- Gmail notifications
- Company-specific email subjects
- Pre-filled email content

### Verified metrics

- Serves 300+ students
- Eligibility engine uses 6+ parameters
- Reduced manual shortlisting effort by 80%
- Improved administrative workflow efficiency by 60%

### Verified resume description

> Developed student-facing home and notification interfaces for a placement portal serving 300+ students, with job application and status tracking.

> Implemented Auth0 domain-restricted authentication and an eligibility engine across 6+ parameters, reducing manual shortlisting effort by 80%.

> Built TPO/recruiter workflows for job posting and student analysis, with Gmail notifications using company-specific subjects and pre-filled content, improving administrative workflow efficiency by 60%.

Do not create additional metrics.

---

## 9.3 Prescripto

### Technologies

- React.js
- Tailwind CSS
- Node.js
- Express.js
- MongoDB

### Features

- Doctor discovery
- Specialty filtering
- Appointment booking
- Appointment cancellation
- Doctor role
- Patient role
- JWT authentication
- MongoDB Atlas
- Cloudinary
- REST APIs
- Razorpay payments

### Verified technical detail

- 8 REST API endpoints

### Deployment

- Frontend: Vercel
- Backend API: Render

### Verified resume description

> Built a full-stack doctor appointment platform supporting 2 user roles — doctors and patients — with doctor discovery, specialty filtering, appointment booking, and cancellation.

> Implemented JWT authentication, MongoDB Atlas integration, Cloudinary file storage, and 8 REST API endpoints for user, doctor, appointment, and payment workflows.

> Integrated Razorpay for online payments and deployed the frontend on Vercel and backend API on Render.

---

# 10. Projects From Screenshots

The screenshots show these example projects:

- E-Commerce Platform
- Task Management App
- Weather Dashboard
- Social Media Dashboard
- Recipe Finder App
- Portfolio Website

These are placeholders.

DO NOT display them as Pranav's projects.

Replace them with:

1. JobPilot
2. Student Placement Portal (CSPS)
3. Prescripto

Additional projects may be added only when the user provides verified information.

---

# 11. Achievements & Activities

## DSA

**150+ DSA Problems**

Solved 150+ Data Structures and Algorithms problems across:

- LeetCode
- GeeksforGeeks

---

## Certifications

Verified certifications:

- Basics in Python — Infosys Springboard
- MongoDB — Infosys Springboard

Do not list incomplete courses as certifications.

---

## NSS

**NSS Volunteer**

Led a team during college-organized service camps and social outreach programs.

Do not exaggerate this into unrelated leadership claims.

---

# 12. Navigation

The visual reference uses:

```text
<Pranav />

Home
About
Projects
Blog
Contact

Hire Me
Use this structure unless there is a strong UX reason to change it.

The navigation must be:

Responsive
Keyboard accessible
Clear
Easy to use
Consistent across pages

On mobile, use a proper mobile navigation menu.

13. Home Page

Recommended structure:

Navbar


Hero


Featured Projects


Skills & Technologies


Call To Action


# Footer
Hero

The hero should immediately communicate:

Name
Professional direction
Short introduction
Social links
Resume download
Project CTA
Contact CTA

Possible structure:

WELCOME TO MY PORTFOLIO


Hi, I'm Pranav


Full-Stack Developer


I build full-stack applications and explore
LLM-powered applications using modern web
technologies and APIs.


[Download Resume] [View My Work]

The exact copy may be refined, but must remain factually accurate.

Do not claim 5+ years of experience.

14. About Page

Use the visual structure from the screenshots but replace all fictional content.

Recommended structure:

GET TO KNOW ME


About Me


Introduction


Profile / Photo


Education


Technical Skills


Achievements


NSS / Activities

The About page should emphasize that Pranav is an Information Technology graduate with hands-on full-stack development experience and growing LLM/AI experience.

15. Profile Image

The profile image in the screenshots is not necessarily Pranav.

Do not use it as his photograph.

If the user provides a real profile image:

Use that image.
Optimize it.
Add appropriate alt text.

If no real profile image is available:

Use a neutral placeholder,
or design the section without a profile photo.

Never use a random stock image as if it were Pranav.

16. Experience Section

The screenshots show fictional employment history.

Do not reproduce:

Senior Frontend Developer
TechCorp Solutions
2022 – Present


Frontend Developer
Digital Innovations Inc.
2020 – 2022


Junior Web Developer
StartUp Hub
2019 – 2020


Web Development Intern
Creative Agency
2018 – 2019

The provided resume does not establish these jobs.

Instead, use a section such as:

Education & Development


Bachelor of Engineering in Information Technology
P.E.S. Modern College of Engineering


Project Experience
JobPilot
Student Placement Portal
Prescripto

If real professional experience is later provided, it can replace this section.

17. Skills Section

Use a card-based layout inspired by the screenshots.

Suggested categories:

Languages
Frontend
Backend
Databases
AI / LLM
Authentication
Tools

Use only verified skills.

18. Projects Page

The Projects page should contain:

MY WORK


All Projects


All
Full Stack
AI
Frontend

Then display project cards.

Recommended order:

JobPilot
Student Placement Portal
Prescripto

JobPilot should receive strong visual emphasis because it demonstrates AI / LLM application development.

19. Project Cards

Each project card should contain:

Project Image


Project Name


Short Description


Technology Tags


Live Demo
Source Code

Only show buttons when actual links are available.

Never create fake URLs.

20. Project Images

Project images should ideally be screenshots of the actual projects.

If the user provides screenshots:

Use those screenshots.
Crop appropriately.
Optimize file size.
Maintain consistent aspect ratios.

Do not use unrelated stock photos to represent projects.

21. Project Detail Pages

If implemented, use:

Project Title


Overview


Problem


Solution


Key Features


Technical Architecture


Technology Stack


Implementation Details


Challenges


Results


Screenshots


GitHub


Live Demo

Only show sections supported by real information.

Do not fabricate project challenges or results.

22. Blog Page

The screenshots contain fictional blog posts.

Do not copy those articles.

Do not invent:

Article titles
Publication dates
Reading times
Article content
Technical opinions
Claims about years of experience

If no real blog posts exist, use:

WRITING


Blog


Technical articles and notes will be added here.

Or omit the Blog page until real content is available.

23. Contact Page

Follow the visual reference with a two-column layout.

Left:

Let's build something together


Short professional introduction


Email
Location


Social Links

Right:

Full Name
Email Address
Subject
Message


Send Message

Use:

pranavturkar93@gmail.com
Pune, Maharashtra, India

Do not use:

pranav@example.com
San Francisco, CA
+1 (555) 123-4567
24. Contact Form

If the form is displayed as functional, it must actually have a submission mechanism.

Validate:

Name
Email
Subject
Message

Provide:

Loading state
Success state
Error state
Accessible validation

Do not display a fake success message when nothing was sent.

25. Hire Me Button

The Hire Me button should lead to:

/contact

or an appropriate contact section.

It should make it easy for recruiters or potential collaborators to reach Pranav.

Do not imply that Pranav operates a professional agency unless explicitly stated.

26. Resume Button

The Home page should have:

Download Resume

The button must link to the real resume.

Do not generate a different resume unless requested.

27. Social Links

Use only verified social URLs.

Do not guess URLs.

Potential platforms:

GitHub
LinkedIn
X

If the actual URL is not available, use a TODO rather than inventing one.

28. Footer

Use a structure similar to:

<Pranav />


Information Technology graduate building
full-stack applications and exploring
LLM-powered applications.


Quick Links


Home
About
Projects
Blog
Contact


Contact


Pune, Maharashtra, India
pranavturkar93@gmail.com


Social Links


© 2026 Pranav

The footer must never contain placeholder contact information.

29. Design Direction

The screenshots establish a clean minimalist design.

Use:

White / near-white backgrounds
Black / dark typography
Soft gray borders
Rounded cards
Subtle shadows
Generous whitespace
Pill-shaped technology tags
Dark primary buttons
Minimal accent colors
Clean icons

The overall feeling should be:

Modern
Minimal
Professional
Premium
Developer-oriented
Recruiter-friendly
30. Avoid Excessive Design

Do NOT introduce:

Excessive gradients
Neon colors
Huge decorative blobs
Excessive glassmorphism
Heavy 3D elements
Excessive parallax
Excessive shadows
Constant animations
Unnecessary carousels

The design should remain restrained.

31. Typography

Use a clean modern sans-serif font.

Recommended:

Inter

Typography hierarchy should contain:

Eyebrow
Large Page Heading
Section Heading
Card Heading
Body Text
Metadata
Tags

Maintain consistent sizing and spacing.

32. Colors

Base palette:

White
Near-white
Black
Near-black
Gray
Light gray

Accent colors should be restrained.

Technology tags may use subtle category colors.

Do not turn the portfolio into a colorful dashboard.

33. Cards

Cards should generally use:

Rounded corners
Thin border
White / near-white background
Subtle shadow
Consistent padding

Cards should not appear visually heavy.

34. Responsive Design

The portfolio must work on:

Mobile
Tablet
Laptop
Desktop
Large desktop

Test at:

320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px

Check for:

Horizontal overflow
Broken cards
Text clipping
Navigation issues
Button overflow
Form problems
Image distortion
Excessive whitespace
35. Mobile Navigation

Desktop navigation:

Home
About
Projects
Blog
Contact
Hire Me

Mobile navigation should collapse into an accessible menu.

The mobile menu must:

Open/close correctly
Trap focus when appropriate
Close after navigation
Have an accessible button label
36. Accessibility

Use:

Semantic HTML
Proper heading hierarchy
Accessible labels
Keyboard navigation
Visible focus states
Sufficient color contrast
Alt text
Correct button/link semantics
Accessible forms

Do not rely on color alone to communicate meaning.

Respect:

prefers-reduced-motion

for animations.

37. Animations

Use subtle animations only.

Good:

Fade-in
Small slide-up
Hover transitions
Button transitions
Card hover effects

Avoid:

Constant motion
Large parallax effects
Excessive page transitions
Distracting effects

Animation should enhance the interface, not dominate it.

38. Performance

Prioritize:

Optimized images
Minimal JavaScript
Efficient components
Lazy loading where appropriate
Framework-native image optimization
Avoiding unnecessary dependencies

Do not add a library for a feature that can easily be implemented with existing project tools.

39. Component Architecture

Prefer reusable components.

Possible structure:

components/
├── Navbar
├── Footer
├── Button
├── SectionHeading
├── ProjectCard
├── ProjectGrid
├── SkillCard
├── SkillTag
├── SocialLinks
├── ContactForm
├── BlogCard
└── Chatbot

Do not create abstractions merely for the sake of abstraction.

40. Data-Driven Content

Repeated content should preferably live in structured data.

Example:

const projects = [
  {
    name: "JobPilot",
    category: "AI",
    technologies: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "Browserbase",
      "Stagehand",
      "InsForge",
    ],
  },
  {
    name: "Student Placement Portal",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Auth0",
    ],
  },
  {
    name: "Prescripto",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

Do not duplicate the same project information across many files.

41. Routing

Recommended structure:

/
├── /about
├── /projects
├── /blog
└── /contact

Optional project detail route:

/projects/[slug]
42. SEO

Every page should have appropriate:

Page title
Meta description
Open Graph metadata
Semantic headings

SEO copy must accurately represent Pranav.

Never use fake claims such as:

Senior Full-Stack Developer with 5+ years of experience
43. AI Portfolio Assistant

The portfolio may contain an AI assistant.

The assistant should answer questions about Pranav using verified portfolio data.

Example questions:

What technologies does Pranav know?


What projects has Pranav built?


Tell me about JobPilot.


What is the Student Placement Portal?


What is Prescripto?


What is Pranav's educational background?


What AI technologies is Pranav exploring?


How many DSA problems has Pranav solved?


How can I contact Pranav?
44. AI Assistant Anti-Hallucination

The assistant must not invent information.

If asked:

Where does Pranav currently work?

and there is no verified employer:

I don't have a verified current employer listed for Pranav.

If asked:

How many years of professional experience does Pranav have?

Do not answer:

5+ years

Instead explain that the available profile establishes hands-on full-stack development experience but does not establish five years of professional employment.

If information is unavailable:

I don't have verified information about that.
45. No Fake Testimonials

Do not create testimonial sections containing fictional people.

Do not create:

"Pranav is an amazing developer."
— John Doe, CEO

unless the user provides a real testimonial.

46. No Fake Statistics

Do not create fake statistics such as:

50+ Projects
5+ Years Experience
100+ Clients
10K+ Users
99% Satisfaction

Only use verified metrics.

Currently verified metrics include:

300+ students served by Student Placement Portal
6+ eligibility parameters
80% reduction in manual shortlisting effort
60% improvement in administrative workflow efficiency
150+ DSA problems
8 REST API endpoints in Prescripto
47. Content Writing Style

Portfolio copy should be:

Concise
Professional
Human
Confident
Technical when useful
Easy to scan

Avoid:

Generic AI-generated buzzwords
Excessive adjectives
Corporate filler
Long paragraphs
Unsupported claims

Prefer specific statements.

Bad:

Passionate visionary developer creating revolutionary digital experiences.

Better:

I build full-stack applications with modern frontend frameworks, backend APIs, databases, authentication, and third-party integrations.

48. Design vs Content Conflicts

When design and content conflict:

Content rules

The verified resume wins.

Design rules

The screenshots win for:

Layout
Spacing
Typography
Component structure
Visual hierarchy

Example:

Screenshot:

5+ Years
San Francisco, CA

Real information:

Information Technology graduate
Pune, Maharashtra, India

Use the screenshot's visual layout but use the real information.

49. Missing Information

If a section exists in the screenshot but the real information does not exist:

Do not invent it.

Instead:

Remove the section,
rename it appropriately,
or leave it prepared for future content.

Example:

If there is no verified employment history, do not create an employment timeline.

Use:

Education

or:

Project Experience

instead.

50. Development Workflow

Before changing the project:

Inspect the repository.
Inspect the current framework.
Inspect existing components.
Inspect routes.
Inspect styling.
Inspect assets.
Read relevant Markdown context files.
Understand what is already implemented.
Make focused changes.
Test the result.

Do not rewrite working code unnecessarily.

51. Implementation Order

Build in this order.

Phase 1 — Foundation
Project setup
Global styles
Font
Layout
Navbar
Footer
Phase 2 — Home
Hero
Social links
Resume button
Featured projects
Skills
CTA
Phase 3 — About
Introduction
Education
Skills
Achievements
NSS
Phase 4 — Projects
Project listing
Filtering
Cards
Detail pages
Live links
Source links
Phase 5 — Blog
Blog structure
Real articles only
Phase 6 — Contact
Contact information
Contact form
Validation
Submission
Phase 7 — AI Assistant
Knowledge base
Assistant UI
AI integration
Anti-hallucination rules
Phase 8 — Polish
Responsive design
Accessibility
SEO
Performance
Animations
Visual QA
52. Visual QA

After implementing each page:

Run the application.
Open the page.
Compare it with the provided screenshots.
Check:
spacing
typography
alignment
card dimensions
button dimensions
navigation
section heights
responsive behavior
Fix inconsistencies.
Verify factual content again.

The goal is to reproduce the visual quality and design language, not the fake information.

53. Mobile QA

Always check:

320px
375px
390px
414px
Tablet
Desktop
Large desktop

Ensure:

No horizontal scrolling
No text clipping
No broken cards
No broken buttons
No overlapping elements
Forms remain usable
Navigation works
Images scale correctly
54. Security

Never expose:

API keys
Secret tokens
Database credentials
Private environment variables

Use environment variables for secrets.

Never commit:

.env
.env.local

or any secret credentials.

55. External Links

Never invent:

GitHub links
LinkedIn links
Live Demo URLs
Email URLs
Social media URLs

Only use verified URLs.

If a link is not available:

TODO: Add verified GitHub URL
56. Images

When the user provides actual images:

Ask which image belongs to which section only when necessary.
Preserve image quality.
Optimize images for web usage.
Use meaningful alt text.
Do not replace real project screenshots with unrelated stock images.

The user has indicated that additional images can be provided if needed.

57. Required Markdown Context Files

The project should eventually contain:

AGENTS.md
portfolio-content.md
project-overview.md
architecture.md
build-plan.md
progress-tracker.md
progress-overview.md
ui-tokens.md
ui-registry.md
ui-rules.md
code-standards.md
library-docs.md
58. Responsibility of Each Markdown File
AGENTS.md

Master instructions for the coding agent.

Controls:

Accuracy
Development behavior
Design principles
Content rules
Architecture principles
Anti-hallucination rules
portfolio-content.md

Single source of truth for Pranav's portfolio content.

Contains:

Personal information
Education
Skills
Projects
Achievements
Certifications
Activities
Contact information
Social links

This file must never contain fictional template information.

project-overview.md

Explains:

What the portfolio is
Target audience
Pages
User journey
Main features
Goals
architecture.md

Documents:

Application architecture
Folder structure
Components
Data flow
APIs
External services
Routing
Technical decisions
build-plan.md

Defines:

Implementation phases
Feature order
Development tasks
Testing tasks
Deployment tasks
progress-tracker.md

Tracks:

Completed work
Current work
Next task
Known issues
Decisions

Update after meaningful implementation work.

progress-overview.md

Provides a concise high-level snapshot of project status.

ui-tokens.md

Contains:

Colors
Typography
Spacing
Border radius
Shadows
Breakpoints
Component tokens
ui-registry.md

Documents reusable UI components and their visual behavior.

ui-rules.md

Contains rules for:

Layout
Responsive behavior
Typography
Components
Buttons
Cards
Forms
Accessibility
Animations
code-standards.md

Defines:

TypeScript standards
React standards
Naming conventions
Component structure
Error handling
File organization
Code quality
library-docs.md

Contains documentation for important external libraries used by the portfolio.

Only document libraries that are actually used.

59. Final Truth Hierarchy

When uncertain, follow this hierarchy:

1. User's explicit instruction
2. Verified resume / portfolio information
3. AGENTS.md
4. portfolio-content.md
5. Architecture documentation
6. UI documentation
7. Screenshots
8. General implementation assumptions

Never allow a screenshot placeholder to override verified information.

60. Final Principles

Always follow:

Truth > Template


Real Projects > Placeholder Projects


Verified Information > Assumptions


Usability > Pixel Perfection


Clarity > Decoration


Accessibility > Visual Tricks


Maintainability > Cleverness


Specificity > Generic AI Copy


Professional Accuracy > Marketing Hype

The final website must represent the real Pranav Prakash Turkar, not the fictional developer represented by the template screenshots.

END OF AGENTS.md


### Important


I also corrected one thing from the earlier version: the resume says **CGPA 9.09/10**, not 9.09 only, and the actual resume contains **+91-8275616832** and **pranavturkar93@gmail.com**. :contentReference[oaicite:1]{index=1}


For the next step, the clean structure should be:


```text
portfolio/
│
├── AGENTS.md
├── portfolio-content.md
├── project-overview.md
├── architecture.md
├── build-plan.md
├── progress-tracker.md
├── progress-overview.md
├── ui-tokens.md
├── ui-registry.md
├── ui-rules.md
├── code-standards.md
└── library-docs.md

I can provide all 11 .md files one by one as complete copy-pasteable Markdown, with portfolio-content.md containing your actual resume information and the remaining files specifically tailored to the portfolio screenshots.