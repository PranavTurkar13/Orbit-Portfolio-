# Agent Skills

## 1. Purpose

This file defines the agent skills available for building and maintaining the portfolio.

---

## 2. `/architect`

### Purpose

Plan serious features before implementation.

### Behavior

The agent should:

1. Read the relevant context files.
2. Ask focused questions one at a time when decisions are missing.
3. Identify unresolved architectural decisions.
4. Surface assumptions.
5. Propose the implementation approach.
6. Produce a clear plan.
7. Wait for approval before major implementation.

### Rule

Do not start major implementation while important architectural decisions remain unresolved.

---

## 3. `/remember save`

### Purpose

Save the current session state.

### Capture

- Decisions made
- Architecture decisions
- UI patterns established
- Implementation completed
- Important discoveries
- Current progress
- Remaining work

### Output

Update the project memory/context file so a future session can continue accurately.

---

## 4. `/remember restore`

### Purpose

Restore the previous project state at the beginning of a new session.

### Behavior

The agent should:

1. Load the saved memory.
2. Read the relevant context files.
3. Understand previous decisions.
4. Identify the current implementation state.
5. Continue from the existing state.

Do not restart decisions that have already been made.

---

## 5. `/review`

### Purpose

Review the implementation against the project's requirements.

### Check

- Implementation vs build plan
- Architecture boundaries
- UI consistency
- Code quality
- Accessibility
- Responsiveness
- Security
- Performance
- Production readiness
- Content accuracy

### Severity

Issues must be classified as:

#### Critical

Issues that must be fixed before production.

#### Important

Issues that should be fixed before production when practical.

#### Minor

Small improvements that do not block production.

### Rule

`/review` must never automatically fix issues.

The user remains in control of fixes.

---

## 6. `/recover`

### Purpose

Diagnose problems when development becomes stuck or inconsistent.

### Failure Modes

#### Targeted Bug

A specific implementation is failing.

The agent should:

- Identify the failing behavior.
- Locate the likely cause.
- Propose the smallest corrective action.

#### Polluted Context

The agent has accumulated conflicting or irrelevant context.

The agent should:

- Identify conflicting information.
- Re-read the relevant context files.
- Establish the current source of truth.
- Continue from the corrected context.

#### Wrong Assumption

An earlier decision or assumption is incorrect.

The agent should:

- Identify the assumption.
- Explain its impact.
- Propose the corrected approach.
- Update the relevant context if approved.

---

## 7. `/imprint`

### Purpose

Capture a newly established UI pattern.

### Behavior

The agent should:

1. Identify the new reusable pattern.
2. Compare it with the existing UI registry.
3. Add the approved pattern to `ui-registry.md`.
4. Check the codebase for inconsistent versions.
5. Produce a list of inconsistencies.
6. Produce a recommended fix list.

### Rule

Do not automatically modify unrelated components without approval.

---

## 8. Skill Usage Rules

Before using an agent skill:

- Read the relevant context files.
- Respect existing architectural decisions.
- Use verified portfolio content.
- Do not invent missing information.
- Preserve established UI patterns.
- Keep changes focused on the requested task.

---

## 9. Context Priority

When making implementation decisions, use this priority:

1. `AGENTS.md`
2. `portfolio-content.md`
3. `project-overview.md`
4. `architecture.md`
5. `build-plan.md`
6. `progress-tracker.md`
7. `progress-overview.md`
8. `ui-tokens.md`
9. `ui-registry.md`
10. `ui-rules.md`
11. `code-standards.md`
12. `library-docs.md`

---

## 10. General Agent Rule

> Read the context first, understand the existing decisions, make the smallest appropriate change, and keep the project consistent across sessions.

# End of agents-skills.md