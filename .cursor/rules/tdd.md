# Cursor Rule - Technical Design Document (TDD) Generation

You are a senior software architect and your goal is to take a Product
Requirements Document (PRD) and create a comprehensive Technical Design
Document (TDD) that answers: **How could we build this?**

## When to Use This Rule

Use this process when:

- You have a completed PRD and need technical planning
- A feature requires architectural decisions and sequencing
- You need to break down complex projects into phases
- Engineering teams need implementation guidance

## Document Purpose

The TDD is the **second document** in the planning flow:
PRD (What are we building and why?) → **TDD** (How could we build this?) → TASK (The units of work to build this?)

## Folder Structure

Add to existing PRD folder:

```bash
docs/$date-feature-name/tdd.md
```

Example: `docs/2024-12-19-user-authentication-system/tdd.md`

## tdd.md Template

```markdown
# [Feature Name]

## Architecture Overview

[

- A short overview explaining the architecture in simple terms that a
  junior/intern engineer could understand leveraging Mermaid diagrams where
  appropriate.
- Your goal is to reduce the amount of questions that a junior engineer or
  intern will have to ask to build this feature and for the following
  document which is the task document to be created.
- The document should be written in a way that is easy to understand and
  follow.
- A list of components will follow where the definition of a component could be
  any building block of the architecture. A API endpoint, a React Page, or
  Component, a DB schema, etc. The components will be references in the
  Implementation Sequencing section thus they should have enough details on
  to be understood by a junior/intern engineer on how to build the component.
  ]

[A list of components that are part of the architecture, each with a description
and responsibility]

### **Component 1:**

[Description of the component]

[Technical details of the component]

## Implementation Sequencing

[

- Describe the implementation sequencing of the feature.
- Break down the feature into checkpoints, each with a description of what it
  achieves.
- The checkpoints should be logical groupings of work that is shippable
  following the agile methodology.
- You goal is to continuously ship presentable value to a non-technical
  audience. It is ok that the checkpoints are not in the most optimal order,
  as shipping value is more important then being questioned.
- The checkpoints should be numbered and each checkpoint should have a
  description of what it achieves.
  ]

### Checkpoint 1: [Checkpoint Name]

[What this checkpoint achieves]

#### Requirements:

[

- A checkbox numbered list prefixed with [c<checkpoint number>.r] of
  requirements using the Given, When, Then format.
- The requirements should be written easily enough that a project manager can
  easily check off as they are completed.
- These requirements should be clear enough for a junior/intern engineer given
  the TDD architecture and the component descriptions.
- Each group of Given/When/Then should have a short bolded header in title case
  that helps group the requirements such as "Start Server", "Get User 200 Response"
  "GET /api/users OpenAPI Schema".
  ]

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

### Architecture Overview

- **Create ASCII diagram:** Simple boxes and arrows showing data flow
- **List 3-5 components:** Each with clear responsibility
- **Show interfaces:** How components communicate

### Technology Stack

- **Be specific:** Include versions (Node.js 18+, React 18, etc.)
- **Justify choices:** Why this technology for this use case
- **Consider constraints:** Existing infrastructure, team skills

### Implementation Sequencing (Critical Section)

- **Always 3 phases:** Foundation → Enhancement → Polish
- **Always 4 checkpoints per phase:** Logical groupings of work
- **Week-based timing:** Phase 1 (Week 1), Phase 2 (Week 2), etc.
- **Clear success criteria:** How to know phase is complete

**Phase Progression:**

- **Phase 1:** Basic functionality, core features working
- **Phase 2:** Enhanced features, error handling, optimization
- **Phase 3:** Polish, edge cases, production readiness

### Data Flow Design

- **Map key operations:** Read, write, update flows
- **Step-by-step:** Numbered sequences
- **Include validation:** Where data gets checked
- **Show error paths:** What happens when things fail

## Sequencing Strategy

**Phase 1 Goals:**

- Get basic end-to-end flow working
- Prove core concept and architecture
- Enable early testing and feedback

**Phase 2 Goals:**

- Add filtering, search, advanced features
- Implement proper error handling
- Optimize performance and reliability

**Phase 3 Goals:**

- Handle edge cases and corner scenarios
- Add monitoring, logging, documentation
- Production deployment and maintenance

## Quality Checklist

**TDD Quality:**

- [ ] Clear architecture diagram with data flow
- [ ] 3 phases with logical progression
- [ ] 4 checkpoints per phase with clear descriptions
- [ ] Technical implementation details included
- [ ] Sequencing rationale explained
- [ ] All major technical decisions justified

## Common Mistakes to Avoid

**Too Much Detail:** Don't include specific code or line-by-line implementation
**Unclear Sequencing:** Phases should build logically on each other
**Missing Rationale:** Explain why you chose this architecture/approach
**No Error Handling:** Always include error scenarios and handling
**Unrealistic Timelines:** One week per phase is guideline, adjust as needed

## Example Usage

**Input:** PRD for "Real-time chat feature for customer support"

**Output:** Generate TDD with 3-tier architecture (frontend/backend/database), WebSocket implementation plan, and 3-phase rollout strategy.
