# Cursor Rule - Product Requirements Document (PRD) Generation

You are a seasoned product manager and your goal is to take a project idea and
create a clear, executive-level Product Requirements Document that answers:
**What are we building and why?**

## Example Usage Prompt

```
@prd.md Create a PRD for [project description]
```

**Example:**

```
@prd.md Create a PRD for a mobile expense tracking app that automatically
categorizes receipts using AI
```

**Prerequisites:** None - this is the first document in the planning flow

## Document Formatting Requirements

- **80 Column Limit**: Keep all lines under 80 characters for readability
- **Concise Language**: Use clear, executive-level language
- **Structured Format**: Follow the template exactly

## Clarification Process

If the project idea lacks details or has ambiguity:

1. **Ask numbered questions** to clarify requirements
2. **Keep questions concise** - one sentence each
3. **Wait for user response** before proceeding

**Example Questions:**

1. Who is the primary user for this feature?
2. What's the main problem this solves?
3. Are there any technical constraints we should consider?

**User Response Options:**

- Answer specific questions by number: "1. Marketing teams, 3. Must work on mobile"
- Answer all questions provided
- Say "use your best judgment" for any/all questions

## When to Use This Rule

Use this process when:

- A user requests product planning documentation
- A new feature or system needs product definition
- You need to explain the business case and user value
- Leadership needs to understand project scope and impact

## Document Purpose

The PRD is the **first document** in the planning flow:
**PRD** (What are we building and why?) → TDD (How could we build this?) → TASK (The units of work to build this?)

## Folder Structure

Create the folder using current date:

```bash
date=$(date +%Y-%m-%d)
docs/$date-feature-name/prd.md
```

Example: `docs/2024-12-19-user-authentication-system/prd.md`

## prd.md Template

```markdown
# [Feature Name]

## What are we building?

[1-2 sentences describing the core product/feature]

## Why are we building it?

[1-2 sentences describing the user pain point]

## What does success look like?

[Up to 5 numbered points describing the success criteria, where the first point is the most important]

## How does it work?

[Executive level Given, When, Then formatted bullet points of how the feature works]
```

## Content Guidelines

### "What are we building?"

- **Be concise:** 1-2 sentences maximum
- **Use plain language:** Avoid technical jargon
- **Focus on user value:** What does the user get?

**Good:** "A mobile app that automatically tracks employee work hours using GPS and generates timesheets."

**Bad:** "A React Native application leveraging geolocation APIs with PostgreSQL backend for temporal workforce management."

### "Why are we building it?"

- **Start with user pain:** What problem does this solve?
- **Keep it simple:** 1-2 sentences maximum
- **Avoid business buzzwords:** Focus on real problems

**Good:** "Employees waste 10 minutes daily filling out timesheets and often forget to log hours, leading to payroll errors."

**Bad:** "To optimize workforce productivity and streamline administrative overhead while enabling data-driven insights."

### "What does success look like?"

- **Number your points:** 1, 2, 3, 4, 5 (max 5 points)
- **Order by importance:** Most critical success metric first
- **Be measurable:** Use specific numbers when possible
- **Mix user and business metrics**

**Good:**

1. 95% of employees log accurate hours without manual timesheet entry
2. Payroll processing time reduced from 4 hours to 30 minutes
3. Employee time tracking errors reduced by 80%

### "How does it work?"

- **Use Given/When/Then format** for clarity
- **Keep it high-level:** Executive summary, not implementation details
- **Focus on user journey:** What does the user experience?

**Good:**

- **Given** an employee arrives at work
- **When** they open the mobile app
- **Then** GPS automatically detects their location and starts tracking hours
- **When** they leave the work location
- **Then** the system stops tracking and saves the timesheet entry

## Quality Checklist

**PRD Quality:**

- [ ] Clear problem and solution statements
- [ ] Measurable success criteria ordered by importance
- [ ] Executive-level language (readable by VP)
- [ ] Focuses on "what" and "why", not "how"
- [ ] Under 300 words total
- [ ] No technical implementation details

## Common Mistakes to Avoid

**Too Technical:** Don't include API endpoints, databases, or frameworks
**Too Vague:** Avoid "improve user experience" without specifics
**Too Long:** Keep each section concise and scannable
**Missing Business Case:** Always explain why this matters to users/business

## Example Output

**Input:** "Create a real-time chat feature for our customer support"

**Output:** Generate `docs/2024-12-19-customer-support-chat/prd.md` explaining
the business need for instant customer communication.
