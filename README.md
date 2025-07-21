<div align="center">

# Lunch Money MCP Server

_LLM agent-driven development of a Model Context Protocol server for Lunch Money API access through systematic agent execution with rigorous validation processes._

</div>

---

## 🎯 Repository Goal

This repository builds a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that provides seamless access to Lunch Money financial data via **standard IO (stdio)** transport.

**Goal 1:** Enable AI assistants to interact directly with Lunch Money's API through standardized MCP tools using stdio (not remote), allowing users to:

- Query transaction data with flexible filtering
- Access spending categories and budget information
- Retrieve transaction tags and organizational data
- Perform financial analysis through natural language

## 🚧 Work in Progress

This project is actively under development using a **systematic agent execution approach**. Every line of code, configuration, and documentation is implemented through LLM agents following structured workflows.

## 🤖 LLM Agent-Driven Development

This repository showcases a novel development methodology where:

- **LLM agents execute all coding tasks** following predefined rules and validation checkpoints
- **No manual coding** - agents handle implementation, testing, and documentation
- **Systematic validation** ensures quality through mandatory human approval at each step
- **Structured task management** breaks complex features into validated sub-tasks

### Agent Execution Framework

Significant engineering effort has been invested in creating comprehensive rules and processes that enable:

- **Self-executing agents** that can autonomously implement features
- **Clear validation marks** with mandatory human approval between sub-tasks
- **Quality assurance** through structured TDD and testing requirements
- **Systematic progression** from PRD → TDD → Tasks → Implementation

The agent execution rules in `/rules/` define:

- Task breakdown and dependency management
- Validation checkpoints and quality gates
- Branch management and PR generation
- Error handling and feedback loops

## 📁 Project Structure

```
├── docs/                    # Project documentation and planning
├── rules/                   # Agent execution rules and specifications
├── src/                     # MCP server implementation
└── README.md               # This file
```

## 🔧 Technology Stack

- **Runtime:** Bun (fast TypeScript execution)
- **Framework:** Model Context Protocol SDK
- **Validation:** Zod schemas
- **HTTP Client:** Axios
- **Testing:** Built-in bun test runner

---

_This README will be updated as the project progresses through agent-driven development milestones._
