<div align="center">

# Specification <br/> Test Patterns and Standards

_Standardized testing patterns for consistent, readable, and maintainable tests_

</div>

---

## Table of Contents

- [Overview](#overview)
- [Test Structure](#test-structure)
  - [Describe Block Hierarchy](#describe-block-hierarchy)
  - [Test Naming Convention](#test-naming-convention)
- [Test Implementation Patterns](#test-implementation-patterns)
  - [Given/When/Then Pattern](#givenwhennthen-pattern)
  - [Multiple Test Cases with it.each](#multiple-test-cases-with-iteach)
  - [Error Testing](#error-testing)
- [Complete Example](#complete-example)
- [Best Practices](#best-practices)

## Overview

Standardized testing patterns for consistent, readable, and maintainable tests using bun test runner with TypeScript. bun test uses Jest-compatible API structure (not Vitest). Focus on pure functions and clear test structure.

## Test Structure

### Describe Block Hierarchy

```typescript
// Level 1: Function name (required)
describe("functionName", () => {
  // Level 2: Test cases/scenarios (optional)
  describe("when input is valid", () => {
    // Level 3: Specific conditions (optional, max depth)
    describe("and user is authenticated", () => {
      // Tests go here - NO DEEPER NESTING
      it("should return expected result", () => {
        // Test implementation
      });
    });
  });

  // Direct tests without nested describes are also fine
  it("should handle empty input", () => {
    // Test implementation
  });
});
```

**Rules:**

- **Level 1 (Required):** Function name being tested
- **Level 2 (Optional):** General test case or scenario
- **Level 3 (Optional):** Specific condition, but NO DEEPER
- **Maximum 3 levels** of nested describes

### Test Naming Convention

Use **"it should"** pattern with clear expectations:

```typescript
// ✅ Good
it("should return empty string when no parameters provided", () => {});
it("should filter out undefined values from query params", () => {});
it("should throw error when API key is missing", () => {});

// ❌ Bad
it("filters undefined values", () => {});
it("test empty params", () => {});
it("error handling", () => {});
```

## Test Implementation Patterns

### Given/When/Then Pattern

Structure test logic using comments and clear sections (works for both sync and async functions):

```typescript
it("should calculate total when valid transactions provided", () => {
  // Given transactions exist with food purchases
  const transactions = [
    { amount: 100, category: "food" },
    { amount: 50, category: "food" },
  ];
  // AND given food as the target category
  const category = "food";

  // When calling calculateCategoryTotal function
  const result = calculateCategoryTotal(transactions, category);

  // Then expect the total to be 150
  expect(result).toBe(150);
  // AND expect the result to be a number
  expect(typeof result).toBe("number");
  // AND expect all matching transactions to be included
  expect(result).toBe(
    transactions
      .filter((t) => t.category === category)
      .reduce((sum, t) => sum + t.amount, 0)
  );
});
```

**AND Capitalization Rules:**

- **Capitalize "AND"** when listing multiple items in the same section:
  - "Given X AND given Y"
  - "Then expect A AND expect B"
- **Capitalize transition words** when moving between sections:
  - "Given X When calling Y"
  - "When calling X Then expect Y"

### Multiple Test Cases with it.each

For testing multiple scenarios efficiently:

```typescript
describe("buildQueryParams", () => {
  it.each([
    // [input parameters object, expected query string, test description]
    [{ start_date: "2024-01-01" }, "start_date=2024-01-01", "single param"],
    [
      { start_date: "2024-01-01", end_date: "2024-01-02" },
      "start_date=2024-01-01&end_date=2024-01-02",
      "multiple params",
    ],
    [{ start_date: undefined }, "", "undefined values filtered"],
    [{}, "", "empty object"],
  ])("should handle %s", (params, expected, description) => {
    // Given input parameters
    const inputParams = params;

    // When calling buildQueryParams function
    const result = buildQueryParams(inputParams);

    // Then expect the correct query string output
    expect(result).toBe(expected);
  });
});
```

### Error Testing

Focus on realistic error scenarios that can occur in production:

```typescript
describe("parseTransactionData", () => {
  it("should throw error when required field is missing", () => {
    // Given transaction data missing amount field
    const invalidData = { date: "2024-01-01", description: "Coffee" };

    // When calling parseTransactionData function
    // Then expect ValidationError to be thrown
    expect(() => parseTransactionData(invalidData)).toThrow(
      "Amount is required"
    );
  });

  it("should handle network timeout gracefully", async () => {
    // Given a function that can timeout
    const slowOperation = () =>
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Network timeout")), 100)
      );

    // When calling function with timeout
    // Then expect timeout error to be handled
    await expect(slowOperation()).rejects.toThrow("Network timeout");
  });
});
```

**What to Test:**

- **Business logic errors** (validation failures, data constraints)
- **Network failures** (timeouts, connection errors)
- **Data format errors** (malformed responses, missing fields)
- **State errors** (invalid transitions, race conditions)

**What NOT to Test:**

- **TypeScript compilation errors** (wrong argument types)
- **Third-party API internals** (assume they're tested)
- **Framework bugs** (assume libraries work correctly)

## Complete Example

```typescript
// src/tools/getTransactions.test.ts
import { describe, it, expect } from "bun:test";
import { formatAmount } from "./getTransactions";

describe("formatAmount", () => {
  it("should format transaction amounts correctly", () => {
    // Given a transaction amount in cents
    const amountInCents = 12345;
    // AND given a currency code
    const currency = "USD";

    // When calling formatAmount function
    const result = formatAmount(amountInCents, currency);

    // Then expect properly formatted currency string
    expect(result).toBe("$123.45");
    // AND expect correct decimal places
    expect(result).toMatch(/\$\d+\.\d{2}/);
  });

  // Multiple test cases with it.each
  it.each([
    // [amount in cents, currency, expected formatted string]
    [12345, "USD", "$123.45"],
    [0, "USD", "$0.00"],
    [1, "USD", "$0.01"],
  ])("should format %i cents as %s", (amount, currency, expected) => {
    // Given amount and currency parameters
    // When calling formatAmount function
    const result = formatAmount(amount, currency);

    // Then expect correct formatted output
    expect(result).toBe(expected);
  });
});
```

## Best Practices

### Focus on Pure Functions

- **Prioritize testing pure functions** (no side effects, predictable output)
- **Extract only unique business logic** - don't build what already exists
- **Minimize mocking** - pure functions don't need mocks and are much easier to test
- **Design for testability** - separate data transformation from side effects

### Test Organization

- **One test file per source file**: `utils.ts` → `utils.test.ts` alongside source (not in `__tests__` folders)
- **Only `.test.ts` extension** - no `.spec.ts` files
- **Group related tests** with describe blocks
- **Test realistic error conditions** and edge cases
- **Use meaningful test data** that reflects real usage
- **Consistent variable naming** - use `params` for parameters, `result` for outputs

### Performance

- **Fast tests with bun**: Use `bun test` for quick feedback
- **Avoid unnecessary async**: Test pure functions synchronously when possible
- **Pure functions are fastest** - no setup, no mocking, just input/output testing

### Readability

- **Clear test names** that explain the behavior being tested
- **Given/When/Then** structure for complex test logic
- **Consistent formatting** across all test files
- **Descriptive variables** in test setup
- **Proper AND capitalization** following the rules above
