# UI Rules

## 1. General

- Keep the design minimal, clean, and professional.
- Prioritize typography, whitespace, and hierarchy.
- Avoid unnecessary decoration.
- Avoid visual clutter.
- Keep the interface consistent across all pages.

---

## 2. Layout

- Use a consistent centered container.
- Maintain consistent horizontal padding.
- Use generous whitespace between major sections.
- Do not allow horizontal scrolling.
- Keep layouts responsive.
- Do not force desktop layouts onto mobile screens.

---

## 3. Typography

- Use the typography scale defined in `ui-tokens.md`.
- Maintain a clear heading hierarchy.
- Keep body text readable.
- Avoid excessive font weights.
- Do not use large text simply for visual impact.
- Keep paragraph widths comfortable for reading.

---

## 4. Colors

- Keep the visual system primarily monochrome.
- Use accent colors sparingly.
- Maintain sufficient contrast.
- Do not use color as the only way to communicate meaning.
- Follow the colors defined in `ui-tokens.md`.

---

## 5. Spacing

- Use the spacing scale from `ui-tokens.md`.
- Keep spacing consistent between similar components.
- Use larger spacing between major sections.
- Do not compress unrelated content together.
- Do not add arbitrary spacing values without a reason.

---

## 6. Buttons

- Use `PrimaryButton` for the main action.
- Use `SecondaryButton` for supporting actions.
- Keep button sizing consistent.
- Provide visible hover states.
- Provide visible focus states.
- Provide disabled and loading states when applicable.
- Do not create custom button styles for individual pages unless necessary.

---

## 7. Cards

- Keep cards visually lightweight.
- Prefer subtle borders over heavy shadows.
- Maintain consistent padding.
- Use consistent border radius.
- Keep card content aligned.
- Do not overload cards with excessive information.

---

## 8. Project Cards

Every project card should prioritize:

1. Project image
2. Project name
3. Short description
4. Technologies
5. Relevant links

Only display GitHub or Live Demo buttons when verified URLs exist.

Do not invent project information.

---

## 9. Technology Tags

- Keep tags visually subtle.
- Use consistent sizing.
- Use consistent spacing.
- Do not create a different tag style for every technology.
- Do not display technologies that are not actually used by the project.

---

## 10. Navigation

- Keep navigation simple.
- Use the same navigation structure across pages.
- Clearly indicate the current page when appropriate.
- Make all navigation keyboard accessible.
- Provide a mobile navigation experience.
- Do not add unnecessary navigation items.

---

## 11. Hero

The hero must immediately communicate:

- Who Pranav is.
- What he does.
- What he builds.

The hero should contain:

- Name
- Professional title
- Short description
- Primary CTA
- Secondary CTA where appropriate
- Social links where appropriate

Avoid excessive animations or decorative elements.

---

## 12. Sections

Each major section should have a clear purpose.

A section should generally contain:

- Optional eyebrow
- Heading
- Optional description
- Main content

Do not create sections simply to fill empty space.

---

## 13. Images

- Prefer real project screenshots.
- Preserve image proportions.
- Do not stretch images.
- Optimize image sizes.
- Use meaningful alt text.
- Use decorative images with empty alt text when appropriate.
- Do not use unrelated stock imagery as project evidence.

---

## 14. Responsive Design

### Mobile

- Use one-column layouts where appropriate.
- Stack content naturally.
- Keep buttons touch-friendly.
- Simplify navigation.
- Reduce heading sizes.
- Maintain adequate spacing.

### Tablet

- Use two-column layouts where appropriate.
- Preserve hierarchy and spacing.

### Desktop

- Use multi-column layouts when content benefits from them.
- Use the available space without making content excessively wide.

---

## 15. Animations

- Keep animations subtle.
- Prefer short transitions.
- Use animation to support hierarchy or interaction.
- Do not animate every element.
- Avoid distracting effects.
- Respect `prefers-reduced-motion`.

---

## 16. Accessibility

Every interactive element must be:

- Keyboard accessible.
- Focusable when appropriate.
- Clearly identifiable.
- Properly labeled.

Forms must have:

- Labels
- Validation
- Error messages
- Success feedback

Images must have appropriate alternative text.

---

## 17. Forms

The contact form must:

- Validate required fields.
- Validate email format.
- Show loading feedback.
- Prevent duplicate submissions where appropriate.
- Show success feedback.
- Show useful error feedback.
- Never expose internal errors directly to visitors.

---

## 18. AI Assistant UI

The AI assistant should:

- Look like part of the portfolio.
- Remain visually minimal.
- Clearly distinguish user and assistant messages.
- Show loading feedback.
- Handle errors gracefully.
- Be keyboard accessible.
- Work on mobile.
- Never expose system prompts or secrets.

The assistant should not dominate the portfolio experience.

---

## 19. Empty States

Empty states should feel intentional.

For example:

> Technical articles and notes will be added here soon.

Do not show broken layouts when content is unavailable.

---

## 20. Error States

Errors should:

- Be understandable.
- Avoid technical jargon where unnecessary.
- Tell the user what happened.
- Provide a reasonable next action when possible.

Do not expose:

- API keys
- Stack traces
- Internal errors
- Server details

---

## 21. Content Accuracy

- Use information from `portfolio-content.md`.
- Never invent projects.
- Never invent achievements.
- Never invent experience.
- Never invent metrics.
- Never invent social links.
- Never invent testimonials.
- Never invent blog posts.
- Never use placeholder information from the design reference as real information.

---

## 22. Reusable Components

Use components from `ui-registry.md`.

If the same visual pattern appears more than once, reuse the existing component instead of creating a duplicate.

---

## 23. Design Consistency

All pages must share:

- Typography
- Colors
- Spacing
- Buttons
- Cards
- Navigation
- Footer
- Interaction states

Do not create page-specific design systems.

---

## 24. Mobile Rule

Every feature must be considered for mobile before it is considered complete.

A feature is not complete if it works only on desktop.

---

## 25. Final Rule

> Prefer simple, intentional, consistent design over decorative complexity.

# End of ui-rules.md