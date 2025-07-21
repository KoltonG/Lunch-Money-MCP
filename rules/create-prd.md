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
<div align="center">

# PRD <br/> [Feature Name]

_Executive summary: what we're building and why - scannable by VP level for business context and decision making_

</div>

---

## Table of Contents

- [📋 Context & Opportunity](#context--opportunity)
  - [User & Context](#user--context)
  - [What problem are we solving?](#what-problem-are-we-solving)
  - [Why now?](#why-now)
- [🎯 Solution & Scope](#solution--scope)
  - [What are we building?](#what-are-we-building)
  - [What does success look like?](#what-does-success-look-like)
  - [Anti-Goals (What we're NOT building)](#anti-goals-what-were-not-building)
  - [Key Assumptions & Risks](#key-assumptions--risks)
- [⚡ Execution](#execution)
  - [How does it work?](#how-does-it-work)

---

## 📋 Context & Opportunity

### User & Context

**Primary User:** [Specific persona with role/context]
**User Context:** [When/where they encounter this problem]
**Problem Evidence:** [Specific data/research showing this problem exists]

### What problem are we solving?

[1-2 sentences: specific user pain with evidence]

### Why now?

[Market timing, user readiness, competitive landscape, or business catalyst]

## 🎯 Solution & Scope

### What are we building?

[1-2 sentences describing the solution]

### What does success look like?

[Up to 5 numbered checkbox items focusing on behavior change and business outcomes]

- [ ] **1.** [User behavior change metric]
- [ ] **2.** [Business outcome or time savings metric]
- [ ] **3.** [Product quality/performance metric]

### Anti-Goals (What we're NOT building)

- [Clear scope boundaries to prevent feature creep]
- [What related features we explicitly won't tackle]

### Key Assumptions & Risks

1. **Biggest Risk:** [What could prevent success?]
2. **User Assumption:** [Will users actually adopt this behavior?]
3. **Technical Assumption:** [Can we build this reliably?]

## ⚡ Execution

### How does it work?

[Grouped Given/When/Then scenarios with bolded headers]
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

### "Key Assumptions & Risks"

- **Identify deal-breakers:** What could kill this project?
- **Question user behavior:** Will they actually change habits?
- **Surface technical risks:** Can we build this reliably?
- **Be honest:** Acknowledge uncertainty upfront

**Good:**

1. **Biggest Risk:** Lunch Money API rate limits prevent real-time queries
2. **User Assumption:** Users will switch from web UI to chat interface for finance questions
3. **Technical Assumption:** MCP standard I/O can handle complex financial data parsing

### "Anti-Goals"

- **Prevent scope creep:** Explicitly state what we won't build
- **Clarify boundaries:** What related features are out of scope?
- **Stay focused:** Keep the team aligned on limits

**Good:**

- NOT building budget modification capabilities
- NOT building expense categorization features
- NOT supporting bulk transaction imports

### "Why now?"

- **Market timing:** What makes this the right moment?
- **User readiness:** Why are users ready for this change?
- **Competitive landscape:** What's changed in the market?
- **Business catalyst:** What internal driver makes this urgent?

**Good:** "MCP protocol adoption is accelerating with Cursor and Claude Pro support, making chat-based financial tools more accessible to developers with existing Lunch Money workflows."

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

- [ ] Specific user persona with constraints/tools defined
- [ ] Problem evidence provided (not just assumed pain)
- [ ] Success criteria focus on behavior change and business outcomes
- [ ] Biggest risks and assumptions identified upfront
- [ ] Clear anti-goals prevent scope creep
- [ ] Market timing/catalyst explained in "Why now?"
- [ ] Executive-level language (readable by VP)
- [ ] Focuses on user outcomes, not features
- [ ] Under 400 words total (updated for new sections)
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
