# Lunch Money MCP Server

## What (are we building)?

A Model Context Protocol (MCP) server built with TypeScript that provides comprehensive access to the Lunch Money API, enabling LLMs to interact with personal finance data for analysis, categorization, and transaction management.

## How (does it work)?

- [ ] 1. **Given** the MCP server is initialized with a valid Lunch Money API token
- [ ] 1.1. **When** an LLM requests account information
- [ ] 1.1.1. **Then** the server fetches and returns account balances and details
- [ ] 1.2. **When** an LLM requests transaction data
- [ ] 1.2.1. **Then** the server retrieves transactions with optional filtering by date range, category, or amount
- [ ] 1.3. **When** an LLM requests category information
- [ ] 1.3.1. **Then** the server returns all categories with their spending data
- [ ] 1.4. **When** an LLM requests budget information
- [ ] 1.4.1. **Then** the server returns budget data and spending progress

- [ ] 2. **Given** the LLM needs to analyze spending patterns
- [ ] 2.1. **When** asked "how much did I spend last week?"
- [ ] 2.1.1. **Then** the server calculates total spending for the past 7 days
- [ ] 2.2. **When** asked "how much did I spend on [category] last week?"
- [ ] 2.2.1. **Then** the server filters transactions by category and date range, then sums the amounts
- [ ] 2.3. **When** asked "which transactions seem miscategorized?"
- [ ] 2.3.1. **Then** the server analyzes transaction descriptions and suggests potential category mismatches

- [ ] 3. **Given** the LLM needs to modify financial data
- [ ] 3.1. **When** asked to update a transaction category
- [ ] 3.1.1. **Then** the server updates the transaction via the Lunch Money API
- [ ] 3.2. **When** asked to add a new transaction
- [ ] 3.2.1. **Then** the server creates the transaction with provided details
- [ ] 3.3. **When** asked to update transaction notes or descriptions
- [ ] 3.3.1. **Then** the server modifies the transaction metadata

- [ ] 4. **Given** the server needs authentication
- [ ] 4.1. **When** the server starts up
- [ ] 4.1.1. **Then** it validates the API token with Lunch Money
- [ ] 4.2. **When** the API token is invalid or missing
- [ ] 4.2.1. **Then** the server provides clear error messages and setup instructions

- [ ] 5. **Given** the server exposes MCP tools
- [ ] 5.1. **When** tools are registered
- [ ] 5.1.1. **Then** the server exposes tools for: get_transactions, get_accounts, get_categories, get_budgets, update_transaction, create_transaction, analyze_spending
- [ ] 5.2. **When** tool schemas are requested
- [ ] 5.2.1. **Then** the server provides comprehensive parameter definitions and descriptions

- [ ] 6. **Given** error handling requirements
- [ ] 6.1. **When** API rate limits are hit
- [ ] 6.1.1. **Then** the server implements exponential backoff and retry logic
- [ ] 6.2. **When** network errors occur
- [ ] 6.2.1. **Then** the server provides meaningful error messages to the LLM
- [ ] 6.3. **When** invalid parameters are provided
- [ ] 6.3.1. **Then** the server validates inputs and returns helpful error descriptions
