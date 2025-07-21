import { z } from "zod";
import axios from "axios";

export const getTransactionsSchema = z.object({
  start_date: z.string().optional().describe("Start date (YYYY-MM-DD)"),
  end_date: z.string().optional().describe("End date (YYYY-MM-DD)"),
  category_id: z.number().optional().describe("Filter by category ID"),
});

export async function handleGetTransactions(
  args: z.infer<typeof getTransactionsSchema>,
  extra?: any
) {
  try {
    const { start_date, end_date, category_id } = args;

    // Build URL with query parameters using native URLSearchParams
    const url = new URL("https://dev.lunchmoney.app/v1/transactions");
    if (start_date) url.searchParams.append("start_date", start_date);
    if (end_date) url.searchParams.append("end_date", end_date);
    if (category_id)
      url.searchParams.append("category_id", String(category_id));

    const response = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${process.env.LUNCH_MONEY_API_KEY}`,
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
