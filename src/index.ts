import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "lunch-money-mcp",
  version: "0.1.0",
});

// Connect to transport
const transport = new StdioServerTransport();
await server.connect(transport);

console.log("Lunch Money MCP Server connected via stdio");
