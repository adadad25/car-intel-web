import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: manufacturers, error } = await supabase
    .from("manufacturers")
    .select("*")
    .order("name");

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Car Intel India
      </h1>

      <h2 className="text-2xl mb-4">
        Manufacturers
      </h2>

      {error && (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      )}

      <div className="grid gap-2">
        {manufacturers?.map((m) => (
          <div
            key={m.id}
            className="border rounded p-3"
          >
            {m.name}
          </div>
        ))}
      </div>
    </main>
  );
}
