# Cursor Rule - Technical Design Document (TDD) Generation

You are a senior software architect and your goal is to take a Product
Requirements Document (PRD) and create a unified Technical Design Document
(TDD) that answers: **How could we build this?**

The TDD maintains **executive-level clarity** while providing implementation
details - a VP should be able to scan checkpoints and understand delivery
progress, while engineers get the technical guidance they need.

## Example Usage Prompt

```
@create-tdd for @docs/YYYY-MM-DD-feature-name/prd.md
```

**Example:**

```
@create-tdd for @docs/2024-12-19-expense-tracker/prd.md
```

**Prerequisites:** Must have completed PRD first

## Document Formatting Requirements

- **80 Column Limit**: Keep all lines under 80 characters for readability
- **Mermaid Diagrams**: Use Mermaid syntax for all diagrams and flows
- **Junior-Friendly**: Write for junior/intern engineers to understand
- **Component Focus**: Detailed component descriptions for task creation

## When to Use This Rule

Use this process when:

- You have a completed PRD and need technical planning
- **PM/Engineer collaboration** on implementation approach and delivery checkpoints
- **Executive visibility** needed on technical delivery progress
- You need to break down complex projects into **demo-able phases**
- Engineering teams need implementation guidance with **business context**

## Document Purpose

The TDD is the **second document** in the planning flow:
**PRD** (What/Why - VP Level) → **TDD** (How/Checkpoints - PM/Eng Level) → **TASK** (Work Units)

**Unified Document Philosophy:**

- **Single source of truth** - everything in one place for faster iteration
- **Executive-readable** - VP can scan and understand without technical depth
- **PM-testable checkpoints** - clear user outcomes for validation
- **Engineer implementation guide** - technical patterns and architecture

**Clear Section Separation:**

- **Architecture & Components** (Engineers read this) - How to build it
- **Implementation Checkpoints** (PMs validate this) - What users can do

**Y Combinator Mindset:** Move fast, ship value quickly, keep it simple.
Assume limited time and resources. Focus on what actually needs to be built,
not theoretical architecture.

**Don't Reinvent the Wheel:** Always check if functionality already exists:

- Use native Web APIs (URLSearchParams, fetch, URL, etc.) instead of custom helpers
- Leverage runtime capabilities (bun has built-in TypeScript, testing, etc.)
- Check if the framework/SDK already provides the functionality
- Only build custom code for business logic unique to your application

## Reference Standards

When creating TDDs, reference these specialized rules for consistency:

| Reference                     | Purpose                              | When to Use                                         |
| ----------------------------- | ------------------------------------ | --------------------------------------------------- |
| **@rules/tech-stack.spec.md** | Technology choices and configuration | All TDDs - defines runtime, language, testing stack |
| **@rules/test.spec.md**       | Testing patterns and structure       | When including test examples                        |
| **Context7 MCP**              | Up-to-date documentation             | Before writing code examples for frameworks/SDKs    |

## Folder Structure

Add to existing PRD folder:

```bash
docs/$date-feature-name/tdd.md
```

Example: `docs/2024-12-19-user-authentication-system/tdd.md`

## tdd.md Template

```markdown
<div align="center">

# TDD <br/> [Feature Name]

_Building on [**PRD**](./prd.md) - this document explains how we'll deliver the user value identified in the PRD through specific technical implementation and demo-able checkpoints._

</div>

---

## Table of Contents

- [Architecture & Components](#architecture--components)
  - [Architecture Overview](#architecture-overview)
  - [Component 1: [Primary Structure/Setup]](#component-1-primary-structuresetup)
  - [Component 2: [Handler/Function Pattern]](#component-2-handlerfunction-pattern)
- [Implementation Checkpoints](#implementation-checkpoints)
  - [Sequencing Strategy](#sequencing-strategy)
  - [Checkpoint 1: [Checkpoint Name]](#checkpoint-1-checkpoint-name)
  - [Checkpoint 2: [Checkpoint Name]](#checkpoint-2-checkpoint-name)
  - [Checkpoint 3: [Checkpoint Name]](#checkpoint-3-checkpoint-name)

---

## 🏗️ Architecture & Components

**(Engineers - Implementation Guide)**

### Architecture Overview

- Keep it SIMPLE. Explain the actual components that need to be built.
- Avoid over-engineering. If using an SDK, don't document what the SDK does.
- Focus on the tools/functions/endpoints you're actually building.
- Use clear Mermaid diagrams showing only essential components.
- Ask: "What would a junior engineer actually need to code?"
- Avoid theoretical components - focus on concrete implementation pieces.

### **Component 1: [Primary Structure/Setup]**

[Main structural component - server setup, app initialization, etc.]

**Technical Details:**

\`\`\`[language]
// Example code showing implementation pattern
// Include folder structure and key files
\`\`\`

**Recommended Organization:**

- File structure and naming conventions
- Key dependencies and setup steps
- **Before proposing custom functions**: Check if native APIs already provide the functionality
- Use Web APIs (URLSearchParams, URL, fetch) instead of building utilities
- Extract only business logic that's unique to your application

### **Component 2: [Handler/Function Pattern]**

...

---

## 🎯 Implementation Checkpoints

**(PMs - Validation & Demo Points)**

### Sequencing Strategy

- MOVE FAST. Create minimal viable checkpoints that prove patterns work.
- Checkpoint 1: Get the simplest possible end-to-end flow working first.
- Checkpoint 2: Prove the main pattern works with one real example.
- Checkpoint 3: Scale the proven pattern to remaining components.
- Each checkpoint should be **demo-able to executives** and completable in under a day.
- Focus on proving the approach works, not building everything perfectly.
- Ask: "What's the fastest way to validate this actually works?"

### Checkpoint 1: [Checkpoint Name]

[What this checkpoint achieves]

#### Requirements:

**CRITICAL: Write requirements from the USER perspective, not technical implementation.**

Examples:

- ✅ Good: "When user asks 'show me my categories' via MCP, Then user receives a list of all their categories"
- ❌ Bad: "When tool handler makes GET request to /v1/categories endpoint, Then API returns 200 response"

Format:

- Checkbox numbered list prefixed with [c<checkpoint number>.r]
- Use Given/When/Then format focused on USER BEHAVIOR and OUTCOMES
- Write so a product manager can validate by testing the actual user experience
- Group requirements with bolded headers describing USER CAPABILITIES like "Categories Data Access", "Transaction Search", "Budget Information"
- Avoid technical implementation details (HTTP methods, status codes, internal functions)

**[Case Name]**

- [ ] c1.r1 Given X
- [ ] c2.r2 When Y
- [ ] c3.r3 Then Z

**[Case Name]**

- [ ] c1.r4 Given X
- - [ ] c1.r4.1 When Y
- - - [ ] c1.r4.1.1 Then Z
- - - [ ] c1.r4.1.2 Then Z
- - [ ] c1.r4.2 When Y
- - - [ ] c1.4.2.1 Then Z
- - - [ ] c1.4.2.2 Then Z
```

## Content Guidelines

### 🏗️ Architecture & Components Section (For Engineers)

**Architecture Overview:**

- **KISS Principle:** Keep it stupid simple - avoid over-engineering
- **SDK Reality Check:** Don't document what frameworks/SDKs already handle
- **Concrete Focus:** Only describe what engineers actually need to build
- **Mermaid diagrams:** Show only essential components, not every detail

**Component Descriptions:**

- **Implementation Focus:** What code needs to be written, not theory
- **Copy-Paste Ready:** Include specific technical patterns to follow
- **Pattern Establishment:** First component sets the pattern for others
- **Junior-Proof:** Clear enough that an intern can implement immediately

### 🎯 Implementation Checkpoints Section (For PMs)

**Sequencing Strategy:**

- **Rapid Validation:** Get end-to-end working in Checkpoint 1
- **Pattern Proof:** Validate approach with one real example in Checkpoint 2
- **Pattern Scale:** Apply proven approach to remaining tools in Checkpoint 3
- **Daily Shipping:** Each checkpoint completable in under one day
- **Executive Demo-able:** VPs can see progress at each checkpoint

**Checkpoint Requirements:**

- **USER-FOCUSED:** Write from user perspective, not technical implementation
- **Given/When/Then format:** Clear, testable requirements
- **PM-friendly:** Easy to validate by testing actual user experience
- **Grouped by capability:** Bold headers for user capabilities, not technical features
- **Nested numbering:** c1.r1, c1.r2 format with sub-requirements
- **Business outcome focus:** What users get, not how it's built

## Quality Checklist

**Unified TDD Quality:**

**Executive Readability:**

- [ ] VP can scan checkpoints and understand delivery progress
- [ ] Clear link to PRD context and business value
- [ ] Demo-able checkpoints with user-focused outcomes

**PM Validation:**

- [ ] Checkpoint requirements written from user perspective (not technical)
- [ ] PM can test requirements by using the actual product
- [ ] Clear acceptance criteria with Given/When/Then format

**Engineer Implementation:**

- [ ] Clear architecture overview with Mermaid diagrams
- [ ] Detailed component descriptions for each building block
- [ ] Junior-friendly technical details with code examples
- [ ] All components detailed enough for task creation

**Document Structure:**

- [ ] Clear section separation (Architecture vs Checkpoints)
- [ ] Consistent c1.r numbering format for requirements
- [ ] Building on PRD context without duplication

## Common Mistakes to Avoid

**Over-Engineering:** Don't design complex systems when simple ones work
**SDK Duplication:** Don't document what the framework already handles
**Theoretical Components:** Focus on actual code, not architectural concepts
**Too Many Checkpoints:** Keep it to 3 checkpoints maximum for speed
**Perfect Architecture:** Ship working code, iterate later
**Analysis Paralysis:** Build something testable in Checkpoint 1

## Y Combinator Speed Principles

**Bias to Action:** When in doubt, build the simplest thing that works
**Prove, Then Scale:** Get one example working before building more
**Daily Demos:** Each checkpoint should be demonstrable same day
**Technical Debt OK:** Ship fast, refactor later if needed
**Pattern Over Perfection:** Establish the pattern, copy for the rest

## Component Standards

**Consistent Terminology:** Always use "Component 1", "Component 2" etc.
**Code Examples Required:** Every component SHOULD include implementation code
**Pattern Focus:** Components should lay the foundations for pattern to be
used in later components or checkpoints.
**Reference Ready:** Components must be detailed enough for task creation
**Copy-Paste Friendly:** Include actual code snippets junior engineers can use

## Example Output

**Input:** PRD for "Real-time chat feature for customer support"

**Output:** Generate unified TDD with:

- **Architecture & Components** section with Mermaid diagrams and implementation patterns
- **Implementation Checkpoints** section with user-focused Given/When/Then requirements
- **Executive readability** - VP can scan checkpoints for delivery confidence
- **PM validation** - requirements testable through actual user experience
- **Engineer guidance** - detailed component descriptions for implementation
