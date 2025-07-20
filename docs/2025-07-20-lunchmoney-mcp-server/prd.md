# PRD: Lunch Money MCP Server

## User & Context

**Primary User:** Someone with an active Lunch Money account AND access to
an MCP-compatible chat interface (Cursor, Claude Pro, ChatGPT with plugins)

**User Context:** Developers and finance-conscious individuals who currently
use Lunch Money for expense tracking but get frustrated with slow UI
navigation for simple analysis

**Problem Evidence:** Users report spending 15+ minutes navigating Lunch
Money's web interface to answer basic questions like spending totals by
category or calculating averages, when these queries could be processed
instantly by an LLM

## What problem are we solving?

Users waste significant time navigating Lunch Money's web UI to answer
simple financial questions that an LLM could process in seconds, creating
friction in personal finance analysis and decision-making.

## What does success look like?

- [ ] **1.** Reduce time to get spending insights from 15+ minutes to under
      30 seconds
- [ ] **2.** Users can ask complex financial questions in natural language
      and get accurate answers without leaving their chat interface
- [ ] **3.** Query response time under 2 seconds for all financial calculations

## What are we building?

A Model Context Protocol (MCP) server that connects to the Lunch Money API
through standard I/O, enabling instant natural language financial analysis
within any MCP-compatible chat client.

## Key Assumptions & Risks

1. **Biggest Risk:** Lunch Money API rate limits could prevent real-time
   queries for active users
2. **User Assumption:** Users will adopt chat-based financial queries over
   familiar web UI navigation
3. **Technical Assumption:** MCP standard I/O can reliably handle complex
   financial data parsing and categorization

## Anti-Goals (What we're NOT building)

- NOT building budget modification or expense creation capabilities
- NOT building expense categorization or transaction editing features
- NOT supporting bulk transaction imports or data exports
- NOT creating a standalone financial analysis dashboard

## How does it work?

**Initial Setup**

- **Given** a user has their Lunch Money API key in environment variables
- **When** they configure the MCP server in their chat client
- **Then** the server establishes secure API connection via standard I/O

**Natural Language Financial Queries**

- **When** they ask "How much did I spend on food last month?"
- **Then** server queries transactions, intelligently groups food-related
  categories, and returns total with breakdown
- **When** they ask "What's my average electricity bill for 6 months?"
- **Then** server analyzes utility transactions and calculates precise
  monthly average

**Smart Category Intelligence**

- **Given** broad category queries like "food" or "transportation"
- **When** the user asks about spending patterns
- **Then** server automatically includes related subcategories (groceries,
  dining, coffee for "food") in analysis

## Why now?

MCP protocol adoption is accelerating with Cursor and Claude Pro native
support, making chat-based financial tools accessible to the growing
developer community already using Lunch Money for personal finance tracking.
