import postgres from "postgres";
import { users } from "../lib/placeholder-data/dummyUsers";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

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
