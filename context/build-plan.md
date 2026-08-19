# Build Plan

## 1. Phase 1 — Foundation

- Set up Next.js with TypeScript.
- Configure Tailwind CSS.
- Configure fonts and global styles.
- Create the base layout.
- Create Navbar.
- Create Footer.
- Create reusable UI primitives.
- Set up responsive breakpoints.

---

## 2. Phase 2 — Content

- Create profile data.
- Create skills data.
- Create project data.
- Create education data.
- Create certification data.
- Create social links.
- Add resume file.
- Add project images when available.

---

## 3. Phase 3 — Home Page

Build:

- Hero
- Introduction
- Resume CTA
- Social links
- Featured projects
- Skills overview
- Final CTA
- Footer

---

## 4. Phase 4 — About Page

Build:

- About introduction
- Education
- Skills
- Certifications
- Achievements
- NSS activity
- CTA

---

## 5. Phase 5 — Projects Page

Build:

- Projects header
- Project categories
- Project grid
- Project cards
- GitHub links
- Live Demo links

Ensure the architecture supports adding future projects.

---

## 6. Phase 6 — Project Details

Implement:

- `/projects/[slug]`
- Project overview
- Features
- Technology stack
- Technical details
- Metrics
- Screenshots
- GitHub
- Live Demo

Only display information that is available for each project.

---

## 7. Phase 7 — Blog

Build:

- Blog page
- Blog card component
- Empty/coming-soon state

Add Markdown/MDX blog support when real articles are available.

---

## 8. Phase 8 — Contact

Build:

- Contact information
- Social links
- Contact form
- Form validation
- Loading state
- Success state
- Error state

Add server-side submission only when the submission method is decided.

---

## 9. Phase 9 — PostHog

Integrate PostHog.

Track only meaningful events:

- Page views
- Resume downloads
- Project interactions
- Social clicks
- Contact interactions
- Blog interactions

Verify that analytics failure does not affect the website.

---

## 10. Phase 10 — AI Portfolio Assistant

Build:

- Chat button
- Chat window
- Message list
- Input
- Loading state
- Error state
- `/api/chat`

Use verified portfolio information as the assistant's context.

Implement server-side API key protection.

Add streaming if practical.

---

## 11. Phase 11 — Optional InsForge

Only introduce InsForge if required.

Possible uses:

- Contact submissions
- Persistent data
- AI assistant data
- Storage
- Authentication

Do not add it merely because it is available.

---

## 12. Phase 12 — Responsive Design

Test and refine:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Check:

- Navigation
- Typography
- Cards
- Images
- Buttons
- Forms
- Spacing
- Horizontal overflow

---

## 13. Phase 13 — Accessibility

Verify:

- Semantic HTML
- Keyboard navigation
- Focus states
- Form labels
- Error messages
- Image alt text
- Color contrast
- Reduced-motion support

---

## 14. Phase 14 — SEO

Add:

- Page titles
- Meta descriptions
- Open Graph metadata
- Proper heading hierarchy
- Sitemap
- Robots configuration

Use only truthful portfolio information.

---

## 15. Phase 15 — Performance

Optimize:

- Images
- Fonts
- Client-side JavaScript
- API requests
- Animations
- Component rendering

Remove unused dependencies and code.

---

## 16. Phase 16 — Final Review

Before deployment:

- Verify all personal information.
- Remove placeholder content.
- Verify project information.
- Verify social links.
- Verify resume.
- Test every route.
- Test every button.
- Test contact form.
- Test AI assistant.
- Test analytics.
- Test mobile layouts.
- Check accessibility.
- Check SEO.
- Check performance.

---

## 17. Future Project Workflow

When a new project is built:

1. Add verified project information to `portfolio-content.md`.
2. Add the project to the structured project data.
3. Add project screenshots.
4. Add GitHub URL.
5. Add Live Demo URL.
6. Assign categories.
7. Decide whether it should be featured.
8. Verify the project card.
9. Verify the project detail page.

No architectural rewrite should be required.

---

## 18. Build Priority

The implementation priority is:

1. Foundation
2. Content
3. Home
4. About
5. Projects
6. Project details
7. Blog
8. Contact
9. PostHog
10. AI assistant
11. Optional InsForge
12. Responsive polish
13. Accessibility
14. SEO
15. Performance
16. Final review

---

## 19. Completion Rule

A phase is complete only when:

- The implementation works.
- The design is consistent with the UI rules.
- The content is accurate.
- Responsive behavior works.
- No known critical issues remain.

# End of build-plan.md