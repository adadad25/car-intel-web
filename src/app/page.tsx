import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: manufacturers, error } = await supabase
    .from("manufacturers")
    .select("*")
    .order("name");

  return (
    <main style={{ padding: "40px" }}>
      <h1>Car Intel India</h1>

      <h2>Manufacturers</h2>

      {error && (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      )}

      <ul>
        {manufacturers?.map((m) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
    </main>
  );
}