import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function listUserBalances() {
  const data = await sql`
    SELECT users.name, users.balance
    FROM users
  `;

  return data;
}

export async function GET() {
  try {
    return Response.json(await listUserBalances());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
