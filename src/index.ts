import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const server = new McpServer({
  name: "lunch-money-mcp",
  version: "0.1.0",
});

console.log("Lunch Money MCP Server initialized");
