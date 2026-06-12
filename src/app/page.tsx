import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: manufacturers } = await supabase
    .from("manufacturers")
    .select("*")
    .order("name");

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Car Intel India
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {manufacturers?.map((m) => (
          <Link
            key={m.id}
            href={`/manufacturer/${m.slug}`}
            className="border rounded p-4 hover:bg-gray-100"
          >
            {m.name}
          </Link>
        ))}
      </div>
    </main>
  );
}