<div align="center">

# Cursor Rule - Agent Task Execution

_Systematic approach for LLM agents to execute tasks from task.md files with user validation at each step._

</div>

---

## Example Usage Prompt

```
@agent docs/2025-07-20-lunchmoney-mcp-server/tasks.md
```

**Prerequisites:** Must have a properly formatted tasks.md file with c1.i1.t1 structure

## File Validation Requirements

- **Target File:** Must be named `tasks.md` or have `tasks` in the filename
- **File Structure:** Must contain checkpoint/iteration/task hierarchy
- **Task Format:** Must use c1.i1.t1 naming convention
- **Reject Invalid:** Return error if file doesn't match tasks.md format

## Agent Execution Workflow

```mermaid
graph LR
  A[File Analysis] --> B[Branch Management]
  B --> C[Task Selection]
  C --> D[Sub-task Loop]
  D --> E[Task Completion]
  D --> D

  classDef step fill:#e1f5fe,stroke:#01579b,stroke-width:2px
  class A,B,C,D,E step
```

### Step 1: File Analysis

1. Validate target file is a tasks.md file
2. Parse checkpoint/iteration structure
3. Identify current task status (find first uncompleted task)
4. Display current iteration dependencies to user

### Step 1.5: Branch Management

1. **Check Current Branch:** Verify what branch we're currently on
2. **🛑 NEVER Work on Main:** If on `main` branch, MUST create feature branch before any code changes
3. **Propose Branch Name:** Generate branch name using format: `[feature-name]/[checkpoint]-[iteration]-[task]-[description]`
4. **Create Branch:** Create and switch to feature branch before starting work
5. **Branch Naming Convention:**
   - Format: `[feature-name]/[checkpoint]-[iteration]-[task]-[description]`
   - Feature name derived from docs folder (e.g., `lunchmoney-mcp-server`)
   - Task identifier includes checkpoint, iteration, and task number
   - Description summarizes the specific work being done
   - Examples:
     - `lunchmoney-mcp-server/c1-i1-t1-foundation-setup`
     - `lunchmoney-mcp-server/c1-i2-t1-mcp-server-implementation`
     - `lunchmoney-mcp-server/c1-i2-t2-transaction-tool-handler`
     - `user-auth-system/c1-i1-t1-database-schema`
   - **Self-Descriptive:** Anyone can see feature + task from branch name alone

### Step 2: Task Selection

1. Select next uncompleted task in sequence
2. Verify iteration dependencies are satisfied
3. Display task details and sub-tasks to user
4. Ask for user confirmation to proceed

### Step 3: Sub-task Execution Loop

```mermaid
graph LR
  A[Execute Sub-task] --> B{TDD Clear?}
  B -->|No| C[Ask Question]
  C --> D[Update Documents]
  D --> E[Mark Complete]
  B -->|Yes| E[Mark Complete]
  E --> F[Request Validation]
  F --> G{User Approves?}
  G -->|No| H[Handle Feedback]
  H --> A
  G -->|Yes| I{More Sub-tasks?}
  I -->|Yes| A
  I -->|No| J[Task Complete]

  classDef process fill:#e1f5fe,stroke:#01579b,stroke-width:2px
  classDef decision fill:#fff3e0,stroke:#e65100,stroke-width:2px
  classDef complete fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px

  class A,C,D,E,F,H process
  class B,G,I decision
  class J complete
```

For each sub-task within the selected task:

1. **Execute:** Complete the sub-task work (code, files, tests, etc.)
2. **Handle TDD Inconsistencies:** If implementation details conflict with or are missing from TDD, ask **Question:** for user clarification
3. **Update Documents:** If clarification changes requirements, update TDD and tasks.md accordingly
4. **🔧 FUNCTIONAL VALIDATION:**
   - **🛑 MANDATORY:** Verify .gitignore exists and includes `node_modules/` before installing dependencies
   - Test package management commands work (e.g., `bun install`, `npm install`)
   - Verify TypeScript compilation and runtime validation (e.g., `bunx tsc --noEmit`)
   - Test that package.json scripts execute without errors
   - Confirm all generated files are functionally correct and properly ignored by git
   - **🛑 NEVER commit node_modules or dependency folders to git**
5. **Mark Complete:** Update tasks.md to mark sub-task with `[x]` ONLY after functional validation passes
6. **🔧 LOCAL COMMIT:** Commit changes locally with descriptive commit message
7. **🛑 MANDATORY STOP:** Ask user to review and confirm work quality with validation evidence
8. **🛑 WAIT FOR APPROVAL:** Do NOT proceed to next sub-task without explicit user approval
9. **🚫 NEVER PUSH:** Do NOT push to remote - user controls when to push
10. **Handle Feedback:** If user requests changes, implement and re-validate functionally

**⚠️ CRITICAL RULES:**

- **NEVER execute multiple sub-tasks in sequence without user validation between each one**
- **NEVER mark sub-task complete without functional validation (dependencies install, scripts run, environment works)**
- **ALWAYS provide evidence that the work functions, not just that files were created**
- **🚫 NEVER PUSH TO REMOTE:** Only commit locally - user decides when to push
- **🛑 AGENT STOPS AT:** Local commit + validation request + wait for user approval

### Step 4: Task Completion

```mermaid
graph LR
  A[Mark Task Complete] --> B[Generate PR Details]
  B --> C[Present to User]
  C --> D[Request PR Creation]

  classDef complete fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
  class A,B,C,D complete
```

When all sub-tasks are complete:

1. **Mark Task Complete:** Update tasks.md to mark main task with `[x]`
2. **Generate PR Details:** Create merge request title and description
3. **Present to User:** Show PR title, description, and summary of work completed
4. **Request PR Creation:** Ask user to confirm creating the pull request

## Task Execution Rules

### Sequential Execution

- **One Task Only:** Execute exactly one task (c1.i1.t1) per session
- **Sub-task Order:** Complete sub-tasks in numerical order (t1.1 → t1.2 → t1.3)
- **No Skipping:** Cannot skip sub-tasks or move to next task without completion
- **Dependency Respect:** Verify iteration dependencies before starting

### Correct Sub-task Execution Example

```
Agent: Executing c1.i1.t1.1 - Create package.json with MCP SDK...
[creates package.json file]
[runs bun install to verify dependencies work]
[verifies bun version and creates .tool-versions if needed]
[tests that bun scripts work: bun run start, bun test, etc.]
[updates tasks.md to mark c1.i1.t1.1 as complete with [x]]

Agent: ✅ Sub-task c1.i1.t1.1 Complete: Created package.json with MCP SDK dependencies.

**Functional Validation Evidence:**
- ✅ Dependencies installed successfully (node_modules created)
- ✅ bun.lockb file generated
- ✅ bun version confirmed: v1.x.x
- ✅ Scripts validated: `bun run start` ready
- ✅ Changes committed locally with descriptive message

**Please review the package.json file and validation evidence. Does this look correct for proceeding to c1.i1.t1.2?**

[🛑 AGENT STOPS HERE - WAITS FOR USER APPROVAL - DOES NOT PUSH]

User: Yes, looks good.

Agent: Executing c1.i1.t1.2 - Setup TypeScript configuration...
[creates tsconfig.json]
[runs TypeScript compiler to verify config works]
[tests bun build command with TypeScript]
[updates tasks.md to mark c1.i1.t1.2 as complete with [x]]

Agent: ✅ Sub-task c1.i1.t1.2 Complete: Created TypeScript configuration.

**Functional Validation Evidence:**
- ✅ TypeScript compiles without errors
- ✅ bun build command works
- ✅ Type checking passes

**Please review the tsconfig.json and validation evidence. Does this look correct for proceeding to c1.i1.t1.3?**

[Continue this pattern for each sub-task...]
```

### User Validation Points

- **Before Task Start:** Confirm user wants to execute the selected task
- **During Implementation:** Ask **Question:** when TDD details are unclear or inconsistent
- **🛑 After Each Sub-task:** MANDATORY - Mark complete with `[x]`, present work, and wait for explicit user approval before proceeding to next sub-task
- **Before PR Creation:** Confirm PR title/description with user
- **On Errors:** Stop and request user guidance for any issues

### Progress Tracking

- **Update tasks.md:** Mark completed items with `[x]` in real-time
- **Status Display:** Show current progress within iteration
- **Next Steps:** Inform user what task comes next in the sequence

## Pull Request Generation

### PR Title Format

Use the exact task name from tasks.md:

```
Implement Basic MCP Server With Tool Registration
```

### PR Description Template

```markdown
## Summary

[Brief description of what was accomplished]

## Tasks Completed

- [x] c1.i1.t1.1 [Sub-task description]
- [x] c1.i1.t1.2 [Sub-task description]
- [x] c1.i1.t1.3 [Sub-task description]

## Files Changed

- [List of files created/modified]

## Testing

- [Testing completed or test files created]

## References

- Reference: [TDD Component Link from task]
- Addresses: [Requirements from task]
```

## Error Handling

### Invalid File Types

```
Error: Target file must be a tasks.md file with c1.i1.t1 structure.
Please provide a valid tasks.md file.
```

### Missing Dependencies

```
Error: Cannot execute c1.i2.t1 - Iteration 1.1 must complete first.
Next available task: c1.i1.t1
```

### Branch Management Errors

```
🛑 Error: Currently on 'main' branch. Cannot proceed with task execution.

Feature: lunchmoney-mcp-server (derived from docs/2025-07-20-lunchmoney-mcp-server/)
Task: c1.i1.t1 Initialize TypeScript MCP Server Project Structure
Proposed branch name: lunchmoney-mcp-server/c1-i1-t1-foundation-setup

Do you want me to:
1. Create and switch to the proposed branch
2. Use a different branch name
3. Switch to an existing branch

Please specify your preference before proceeding.
```

### User Rejection

```
Task execution paused. Please provide feedback on what needs to be changed.
Ready to continue when you approve the current sub-task.
```

### TDD Inconsistencies

```
**Question:** The TDD specifies [X] but during implementation I discovered [Y].
How should I proceed? Should I:
1. [Option A description]
2. [Option B description]
3. [Alternative approach]

This may require updating the TDD document and potentially the tasks.md file.
```

## Quality Standards

### Code Implementation

- **Follow TDD References:** Implement exactly as specified in referenced TDD components
- **Ask for Clarification:** When TDD is unclear or missing details, ask **Question:** for user guidance
- **Document Updates:** Update TDD and tasks.md when clarifications change requirements
- **Complete Implementation:** Don't create stubs - implement fully working code
- **Test Coverage:** Create tests when sub-tasks specify testing
- **Documentation:** Add comments and documentation as specified

### File Management

- **Organized Structure:** Follow folder structure specified in task details
- **Clean Commits:** Each sub-task becomes one logical commit
- **No Temporary Files:** Clean up any temporary files created during work

## Success Criteria

**Task Execution Complete When:**

1. All sub-tasks marked complete with `[x]` in tasks.md
2. All code/files implemented and working
3. User has validated each sub-task
4. PR title and description generated
5. Ready for user to create pull request

**Session End:**

1. Display next available task for future sessions
2. Show overall iteration progress
3. Note any TDD/tasks.md updates made during session
4. Provide clear status of what was accomplished
