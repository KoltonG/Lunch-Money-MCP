# Cursor Rule - Product Requirements Document (PRD) Generation

You are a seasoned product manager and your goal is to take a project idea and
create a clear, executive-level Product Requirements Document that answers:
**What are we building and why?**

## Example Usage Prompt

```
@create-prd for [project description]
```

**Example:**

```
@create-prd for a mobile expense tracking app that automatically
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

To create the prd file, please do the following

1. Determine todays data via the terminal command `date +%Y-%m-%d`
2. Then create the feature folder via the terminal command `mkdir -p docs/$date-<feature-name>`
3. Then create the prd file via the terminal command `touch docs/$date-<feature-name>/prd.md`

**Important:** Always use lowercase `prd.md` for the filename.

## prd.md Template

```markdown
# PRD: [Feature Name]

## User & Context

**Primary User:** [Specific persona with role/context]
**User Context:** [When/where they encounter this problem]
**Problem Evidence:** [Specific data/research showing this problem exists]

## What problem are we solving?

[1-2 sentences: specific user pain with evidence]

## What does success look like?

[Up to 5 numbered checkbox items focusing on behavior change and business outcomes]

- [ ] **1.** [User behavior change metric]
- [ ] **2.** [Business outcome or time savings metric]
- [ ] **3.** [Product quality/performance metric]

## What are we building?

[1-2 sentences describing the solution]

## Key Assumptions & Risks

1. **Biggest Risk:** [What could prevent success?]
2. **User Assumption:** [Will users actually adopt this behavior?]
3. **Technical Assumption:** [Can we build this reliably?]

## Anti-Goals (What we're NOT building)

- [Clear scope boundaries to prevent feature creep]
- [What related features we explicitly won't tackle]

## How does it work?

[Grouped Given/When/Then scenarios with bolded headers]

## Why now?

[Market timing, user readiness, competitive landscape, or business catalyst]
```

## Content Guidelines

### "User & Context"

- **Be specific:** Avoid generic "users" - define the exact persona
- **Include constraints:** What tools/access do they need?
- **Provide evidence:** How do you know this problem exists?

**Good:** "Someone with a Lunch Money account AND access to MCP-compatible chat interface (Cursor, Claude Pro, ChatGPT). Users currently spend 15+ minutes navigating Lunch Money UI for basic spending analysis based on user research."

**Bad:** "Users who want to track finances better."

### "What problem are we solving?"

- **Start with user pain:** What specific friction exists?
- **Include evidence:** Time wasted, error rates, user feedback
- **Avoid solution language:** Focus on the problem, not the fix

**Good:** "Users spend 15+ minutes navigating Lunch Money's web UI to answer simple questions like 'How much did I spend on food last month?' when an LLM could process this in seconds."

**Bad:** "Users need better financial analysis tools."

### "What are we building?"

- **Be concise:** 1-2 sentences maximum
- **Use plain language:** Avoid technical jargon
- **Focus on user value:** What does the user get?

**Good:** "A mobile app that automatically tracks employee work hours using GPS and generates timesheets."

**Bad:** "A React Native application leveraging geolocation APIs with PostgreSQL backend for temporal workforce management."

### "What does success look like?"

- **Use numbered checkboxes:** - [ ] **1.** format (max 5 items, often 3-4 is ideal)
- **Order by importance:** Most critical success metric first
- **Be quantifiable:** Use specific, measurable numbers when possible
- **Be distinct:** Each criterion should test a different aspect - avoid overlap
- **Be provable:** Must be easy to verify objectively once complete
- **Focus on outcomes:** What the user/business gets, not how it's built
- **Track completion:** Check boxes as criteria are met post-launch

**Good:**

- [ ] **1.** 95% of employees log accurate hours without manual timesheet entry
- [ ] **2.** Payroll processing time reduced from 4 hours to 30 minutes
- [ ] **3.** Employee time tracking errors reduced by 80%

**Bad (redundant/overlapping):**

- [ ] **1.** Users can easily track time
- [ ] **2.** Simple user interface for time tracking
- [ ] **3.** Seamless time tracking experience

**Why bad:** All three test the same thing (ease of use) rather than distinct aspects

### "How does it work?"

- **Use Given/When/Then format** grouped under bolded scenarios
- **Group by user workflow:** Each bold header represents a key user scenario
- **Keep it high-level:** Executive summary, not implementation details
- **Focus on user journey:** What does the user experience?

**Good:**

**Initial Setup**

- **Given** an employee downloads the mobile app
- **When** they enable location permissions
- **Then** the app is ready to automatically track work hours

**Daily Time Tracking**

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
- [ ] File named with lowercase `prd.md` (not PRD.md)

## Common Mistakes to Avoid

**Too Technical:** Don't include API endpoints, databases, or frameworks
**Too Vague:** Avoid "improve user experience" without specifics
**Too Long:** Keep each section concise and scannable
**Missing Business Case:** Always explain why this matters to users/business
**Wrong Date:** Always run `date +%Y-%m-%d` for current date, never use example dates

## Example Output

**Input:** "Create a real-time chat feature for our customer support"

**Output:** Generate `docs/2024-12-19-customer-support-chat/prd.md` explaining
the business need for instant customer communication.
