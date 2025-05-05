import { fetchUser1Balance } from "@/app/query/route";

export default async function Page() {
  const user1Balance = await fetchUser1Balance();
  return (
    <main>
      <p>Assets Page</p>
      <div> User 1 balance: ${user1Balance}</div>
    </main>
  );
}
