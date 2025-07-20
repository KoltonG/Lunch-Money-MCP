# Cursor Rule - Technical Design Document (TDD) Generation

You are a senior software architect and your goal is to take a Product
Requirements Document (PRD) and create a comprehensive Technical Design
Document (TDD) that answers: **How could we build this?**

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

- **Simple explanation:** Junior/intern engineers should understand easily
- **Mermaid diagrams:** Use proper Mermaid syntax for all visual elements
- **Reduce questions:** Provide enough detail to minimize clarifications
- **Component building blocks:** API endpoints, React components, DB schemas

### Component Descriptions

- **Individual sections:** Each component gets its own detailed section
- **Technical details:** Include implementation specifics
- **Reference-ready:** Task document will reference these components
- **Junior-friendly:** Clear enough for interns to implement

### Implementation Sequencing

- **Checkpoint-based:** Break work into logical, shippable groupings
- **Agile methodology:** Each checkpoint delivers presentable value
- **Non-technical audience:** Checkpoints should be demo-able
- **Numbered sequence:** Clear ordering for implementation

### Checkpoint Requirements

- **Given/When/Then format:** Clear, testable requirements
- **Project manager friendly:** Easy to check off when complete
- **Grouped by case:** Bold headers for logical requirement groups
- **Nested numbering:** c1.r1, c1.r2 format with sub-requirements
- **Clear enough:** Junior engineers can implement from TDD + components

## Quality Checklist

**TDD Quality:**

- [ ] Clear architecture overview with Mermaid diagrams
- [ ] Detailed component descriptions for each building block
- [ ] Checkpoint-based sequencing with shippable value
- [ ] Given/When/Then requirements with c1.r format
- [ ] Junior-friendly technical details
- [ ] All components referenced for task creation

## Common Mistakes to Avoid

**Enough Detail:** Include specific code implementations if you believe
a junior/intern engineer would need a starting point for implementation.
**Missing Component Details:** Each component needs enough detail for tasks
**Missing Checkpoint Details:** Each checkpoint needs enough detail for tasks
**Unclear Requirements:** Use clear Given/When/Then format
**No Mermaid Diagrams:** Always use Mermaid for visual elements
**Junior-Unfriendly:** Write for intern-level understanding

## Example Output

**Input:** PRD for "Real-time chat feature for customer support"

**Output:** Generate TDD with Mermaid architecture diagrams, detailed
component descriptions, and checkpoint-based implementation with c1.r
requirements format.
