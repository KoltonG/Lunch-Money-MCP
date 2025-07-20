# Lunch Money MCP Server - Technical Design Document

## Architecture Overview

```
AI Assistant (Claude/GPT)
    ↓ MCP Protocol
MCP Server (TypeScript)
    ↓ HTTP/REST
Lunch Money API
```

**Components:**

- **MCP Server:** TypeScript application using @modelcontextprotocol/sdk
- **API Client:** HTTP client for Lunch Money REST API
- **Tool Registry:** MCP tools for each API operation
- **Data Processor:** Handles aggregation and analysis logic
- **Error Handler:** Manages API errors and rate limiting

## Technology Stack

- **Runtime:** Node.js 18+
- **Language:** TypeScript 5+
- **MCP SDK:** @modelcontextprotocol/sdk-typescript
- **HTTP Client:** axios or fetch
- **Build:** tsx for development, tsc for production
- **Testing:** vitest + supertest

## Implementation Sequencing

### Phase 1: Foundation (Week 1)

**Goal:** Basic MCP server with read-only access to core data

**Checkpoints:**

1. **Project Setup** - TypeScript environment, MCP SDK integration
2. **Authentication** - Lunch Money API token validation
3. **Core Read Operations** - Get accounts, transactions, categories
4. **Basic MCP Tools** - Expose 3-4 essential tools

**Success Criteria:** AI can answer "What are my accounts?" and "Show me recent transactions"

### Phase 2: Enhanced Queries (Week 2)

**Goal:** Support complex filtering and aggregation

**Checkpoints:**

1. **Query Filtering** - Date ranges, categories, amounts
2. **Data Aggregation** - Spending totals, category breakdowns
3. **Analysis Tools** - Spending patterns, miscategorization detection
4. **Error Handling** - Rate limiting, network errors

**Success Criteria:** AI can answer "How much did I spend on groceries last month?"

### Phase 3: Write Operations (Week 3)

**Goal:** Enable transaction modifications and creation

**Checkpoints:**

1. **Transaction Updates** - Category changes, notes, descriptions
2. **Transaction Creation** - New manual transactions
3. **Validation Layer** - Input validation and safety checks
4. **Complete Tool Set** - All major Lunch Money endpoints

**Success Criteria:** AI can update transaction categories and create new transactions

## Data Flow Design

### Read Operations:

1. MCP tool receives request with parameters
2. Validate authentication token
3. Construct Lunch Money API request
4. Handle API response and errors
5. Process/aggregate data if needed
6. Return structured response to AI

### Write Operations:

1. Additional validation of write permissions
2. Validate input data against Lunch Money schema
3. Execute API call with retry logic
4. Confirm successful operation
5. Return success/error status

## API Integration Details

**Authentication:**

- Bearer token in Authorization header
- Token validation on server startup
- Environment variable for secure storage

**Key Endpoints to Implement:**

- GET /v1/me - User info and token validation
- GET /v1/accounts - Account balances and details
- GET /v1/transactions - Transaction data with filtering
- GET /v1/categories - Spending categories
- GET /v1/budgets - Budget information
- PUT /v1/transactions/:id - Update transactions
- POST /v1/transactions - Create transactions

**Rate Limiting:**

- Implement exponential backoff
- Request queuing for burst scenarios
- Graceful degradation with user feedback

## Error Handling Strategy

**API Errors:**

- 401 Unauthorized → Clear auth setup instructions
- 429 Rate Limited → Automatic retry with backoff
- 500 Server Error → Fallback response with retry suggestion

**Validation Errors:**

- Invalid parameters → Descriptive error messages
- Missing required fields → Field-specific guidance
- Type mismatches → Type conversion where possible

## Security Considerations

- API token stored in environment variables only
- No logging of sensitive financial data
- Input sanitization for all user-provided data
- HTTPS enforcement for all API calls

## Testing Strategy

**Unit Tests:**

- API client methods
- Data processing functions
- Error handling scenarios

**Integration Tests:**

- MCP tool registration and execution
- End-to-end API flows
- Authentication validation

**Manual Testing:**

- Real AI assistant integration
- Common user query scenarios
- Error condition handling
