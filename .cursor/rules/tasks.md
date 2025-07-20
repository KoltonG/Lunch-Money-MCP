# Cursor Rule - Tasks Document Generation

You are a senior technical project manager and your goal is to take a technical
design and create a comprehensive task breakdown that answers:
**What are the specific units of work to build this?**

## When to Use This Rule

Use this process when:

- You have a completed TDD and need actionable work items
- Engineering teams need specific tickets to implement
- You need to track progress through checkpoints
- Tasks need to be assigned to individual contributors

## Document Purpose

The TASK document is the **third document** in the planning flow:
PRD (What are we building and why?) → TDD (How could we build this?) → **TASK** (The units of work to build this?)

## Folder Structure

Add to existing PRD/TDD folder:

```bash
docs/$date-feature-name/tasks.md
```

Example: `docs/2024-12-19-user-authentication-system/tasks.md`

## tasks.md Template

```markdown
# [Feature Name]

## Checkpoint 1: [Checkpoint Name]

- [ ] c1.t1 [Specific actionable task]
- - [Additional Details]
- - [Or reference to TDD architecture components]
- - [Or reference to TDD checkpoint requirements numbers]

- [ ] c1.t2 [Specific actionable task]
- - [ ] c1.t2.1 [Specific actionable sub task]
```

## Content Guidelines

### Task Naming Convention

- **Format:** `TASK-001`, `TASK-002`, etc. (zero-padded, sequential)
- **Sequential across all phases:** Don't restart numbering for each phase
- **Unique identifiers:** Each task gets one number for entire project

### Task Content Structure

- **Start with action verb:** Create, Implement, Add, Configure, Test, Write
- **Be specific:** Include what technology, file, or component
- **Include context:** Enough detail to be actionable
- **Avoid vague terms:** No "setup", "handle", or "manage"

**Good Task Examples:**

- `TASK-001 - Initialize TypeScript project with package.json and tsconfig.json`
- `TASK-015 - Create User interface with email, password, and role fields`
- `TASK-032 - Implement JWT token validation middleware for Express routes`

**Bad Task Examples:**

- `TASK-001 - Setup project` (too vague)
- `TASK-015 - Handle users` (no action or context)
- `TASK-032 - Security stuff` (not specific)

### Task Sizing Guidelines

- **1-4 hours per task:** Small enough for daily progress tracking
- **Single responsibility:** Each task should do one specific thing
- **Testable outcome:** Clear way to know when task is complete
- **No dependencies within checkpoint:** Tasks in same checkpoint can be parallel

### Checkpoint Structure

- **3-6 tasks per checkpoint:** Logical grouping of related work
- **Follow TDD checkpoints:** Use exact same checkpoint names and structure
- **Sequential between checkpoints:** Complete checkpoint 1 before starting 2
- **Parallel within checkpoints:** Tasks within checkpoint can be done simultaneously

## Task Categories and Patterns

### Setup/Infrastructure Tasks

- Initialize project and dependencies
- Configure build tools and linting
- Set up folder structure
- Create configuration files

### Development Tasks

- Implement API endpoints
- Create database models/interfaces
- Build UI components
- Add business logic functions

### Integration Tasks

- Connect frontend to backend
- Integrate third-party APIs
- Set up authentication flows
- Configure deployment pipelines

### Testing Tasks

- Write unit tests for functions
- Create integration tests
- Add end-to-end test scenarios
- Test error handling paths

### Documentation Tasks

- Write README and setup instructions
- Document API endpoints
- Create troubleshooting guides
- Add code comments and examples

## Quality Checklist

**TASK Quality:**

- [ ] All tasks are actionable and specific
- [ ] Tasks follow checkpoint structure from TDD exactly
- [ ] Sequential numbering across all phases (no gaps or duplicates)
- [ ] Each task estimable at 1-4 hours
- [ ] Dependencies are clear from ordering
- [ ] Action verbs used consistently
- [ ] Enough context to be implemented independently

## Common Mistakes to Avoid

**Too Large:** Tasks taking more than 4 hours should be split
**Too Vague:** "Handle authentication" vs "Implement JWT token validation"
**Wrong Order:** Dependencies must be in correct sequence
**Missing Context:** Include file names, technologies, specific requirements
**Inconsistent Naming:** Use same TASK-XXX format throughout

## Estimation Guidelines

**1 Hour Tasks:**

- Add configuration setting
- Write single unit test
- Create simple interface/type
- Update documentation section

**2-3 Hour Tasks:**

- Implement single API endpoint
- Create UI component with logic
- Add database migration
- Write integration test

**4 Hour Tasks:**

- Complex business logic implementation
- Multiple related API endpoints
- Complete authentication flow
- Full feature with error handling

## Example Usage

**Input:** TDD for "Real-time chat feature" with 3 phases and 12 checkpoints

**Output:** Generate ~60-80 specific tasks organized by TDD checkpoints, covering frontend components, backend APIs, WebSocket implementation, database schema, testing, and documentation.
