import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  handleGetTransactions,
  getTransactionsSchema,
} from "./tools/getTransactions.js";

const server = new McpServer({
  name: "lunch-money-mcp",
  version: "0.1.0",
});

// Register tools with Zod schemas
server.registerTool(
  "get_transactions",
  {
    title: "Get Transactions",
    description: "Fetch transactions from Lunch Money API",
    inputSchema: getTransactionsSchema.shape,
  },
  handleGetTransactions
);

// Connect to transport
const transport = new StdioServerTransport();
await server.connect(transport);

console.log("Lunch Money MCP Server connected via stdio");
