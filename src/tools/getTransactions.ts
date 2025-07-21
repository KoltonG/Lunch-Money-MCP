import { z } from "zod";
import axios from "axios";

// Export schema object for MCP tool registration (DRY principle)
export const getTransactionsInputSchema = {
  start_date: z.string().optional().describe("Start date (YYYY-MM-DD)"),
  end_date: z.string().optional().describe("End date (YYYY-MM-DD)"),
  category_id: z.number().optional().describe("Filter by category ID"),
};

// Create Zod object for type inference
const getTransactionsArgsSchema = z.object(getTransactionsInputSchema);

export async function handleGetTransactions(
  args: z.infer<typeof getTransactionsArgsSchema>
) {
  try {
    // Validate API key is present
    const apiKey = process.env.LUNCH_MONEY_API_KEY;
    if (!apiKey) {
      return {
        content: [
          {
            type: "text" as const,
            text: "Error: LUNCH_MONEY_API_KEY environment variable is required",
          },
        ],
        isError: true,
      };
    }

    const { start_date, end_date, category_id } = args;

    // Build URL with query parameters using native URLSearchParams
    const url = new URL("https://dev.lunchmoney.app/v1/transactions");
    if (start_date) url.searchParams.append("start_date", start_date);
    if (end_date) url.searchParams.append("end_date", end_date);
    if (category_id)
      url.searchParams.append("category_id", String(category_id));

    const response = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(response.data, null, 2),
        },
      ],
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text" as const,
          text: `Error fetching transactions: ${
            error instanceof Error ? error.message : String(error)
          }`,
        },
      ],
      isError: true,
    };
  }
}
