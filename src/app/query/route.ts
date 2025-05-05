import postgres from "postgres";
import { users } from "../lib/placeholder-data/dummyUsers";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

/**
 * Note: To reduce the amount of data sent over each DB request, and also to reduce the amount
 * of necessary compute on the frontend, narrow down the data fetched via SQL parameters (using LIMIT, MAX, etc.)
 * as much as possible.
 */

async function listUserBalances() {
  const data = await sql`
    SELECT users.name, users.balance
    FROM users
  `;

  return data;
}

// Fetches the balance of User 1 from the database.
export async function fetchUser1Balance() {
  try {
    const data = await sql<
      { balance: number }[]
    >`SELECT balance FROM users WHERE id = ${users[0].id}`;

    // Add a delay to simulate a slow database response (for demonstration purposes only).
    // await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay
    return data[0].balance;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch User 1 balance.");
  }
}

export async function GET() {
  try {
    return Response.json(await listUserBalances());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
