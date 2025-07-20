# Cursor Rule - Tasks Document Generation

You are a senior technical project manager and your goal is to take a technical
design and create a comprehensive task breakdown that answers:
**What are the specific units of work to build this?**

## Example Usage Prompt

```
@create-tasks for @docs/YYYY-MM-DD-feature-name/tdd.md
```

**Example:**

```
@create-tasks for @docs/2024-12-19-expense-tracker/tdd.md
```

**Prerequisites:** Must have completed PRD and TDD first

## Document Formatting Requirements

- **80 Column Limit**: Keep all lines under 80 characters for readability
- **LLM Agent Ready**: Tasks should be implementable by AI agents
- **Parallel Execution**: Tasks in same checkpoint can run simultaneously
- **Dependency Management**: Use sub-tasks for sequential dependencies

## When to Use This Rule

Use this process when:

- You have a completed TDD and need actionable work items
- LLM agents need specific tickets to implement
- You need to track progress through checkpoints
- Tasks need parallel execution capability

## Document Purpose

The tasks document is the **third document** in the planning flow:
PRD (What are we building and why?) → TDD (How could we build this?) → **TASKS** (The units of work to build this?)

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

- **Format:** `c1.t1`, `c1.t2`, `c2.t1` (checkpoint.task numbering)
- **Checkpoint grouping:** All tasks for checkpoint 1 use c1 prefix
- **Sequential within checkpoint:** t1, t2, t3 for task ordering
- **Sub-task format:** `c1.t2.1`, `c1.t2.2` for dependent work

### Task Content Structure

- **Start with action verb:** Create, Implement, Add, Configure, Test, Write
- **Be LLM agent ready:** Specific enough for AI implementation
- **Include references:** Point to TDD components or requirements
- **One PR per task:** Each task should equal one pull/merge request

### Task Details and Sub-tasks

- **Merge Request Scope:** Each top-level task equals one merge request
- **Sub-tasks as Commits:** Sub-tasks represent individual commits in the MR
- **Reference TDD with Links:** Point to specific TDD components using file links
- **Single Agent per MR:** One agent completes entire task tree for one PR
- **Git History:** Sub-tasks create logical commit progression

**Task Examples:**

```
- [ ] c1.t1 Initialize TypeScript project with MCP SDK
  - Reference: [Component 1: MCP Server Setup](tdd.md#component-1)
  - Include package.json, tsconfig.json, and basic folder structure
  - This task = 1 merge request with 1 commit

- [ ] c1.t2 Implement Lunch Money API client class
  - Reference: [Component 2: API Client](tdd.md#component-2)
  - Reference: [Checkpoint 1 Requirements](tdd.md#checkpoint-1)
  - [ ] c1.t2.1 Create base API client with authentication (commit 1)
  - [ ] c1.t2.2 Add GET /v1/me endpoint for token validation (commit 2)
  - [ ] c1.t2.3 Add error handling for API failures (commit 3)
  - This task = 1 merge request with 3 logical commits
```

### Parallel Execution Design

- **Checkpoint-level parallelism:** All c1.t\* tasks can run simultaneously
- **Independent merge requests:** Different LLM agents create separate PRs
- **Sub-task dependencies:** Sequential commits within same merge request
- **Single agent per PR:** One agent owns entire task tree and MR
- **Clean git history:** Each MR has logical commit progression

### Task Sizing Guidelines

- **One Merge Request:** Each top-level task creates one meaningful MR
- **Multiple Commits:** Sub-tasks become individual commits in the MR
- **4-8 hour effort:** Substantial enough for good progress
- **Clear completion:** MR is ready when all sub-tasks complete
- **Linked References:** Use file links to TDD components and requirements

## Quality Checklist

**TASK Quality:**

- [ ] All tasks use c1.t1 naming convention
- [ ] Tasks follow checkpoint structure from TDD exactly
- [ ] Each top-level task represents one merge request
- [ ] Sub-tasks represent individual commits in the MR
- [ ] Include file links to TDD components and requirements
- [ ] LLM agent implementable with provided context
- [ ] Parallel execution possible within checkpoints

## Common Mistakes to Avoid

**Wrong Naming:** Use c1.t1 format, not TASK-001
**Too Large:** Tasks should be one MR scope, split if needed
**Missing Dependencies:** Use sub-tasks for sequential commits
**No File Links:** Always link to TDD components with file references
**Poor Git History:** Sub-tasks should create logical commit progression

## Example Output

**Input:** TDD for "Real-time chat feature" with multiple checkpoints

**Output:** Generate checkpoint-organized tasks using c1.t1 format,
each representing one merge request with sub-tasks as commits, including
file links to TDD components for LLM agent implementation.
