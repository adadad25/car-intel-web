import { supabase } from "@/lib/supabase";

export default async function ManufacturerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: manufacturer } = await supabase
    .from("manufacturers")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!manufacturer) {
    return <div>Manufacturer not found</div>;
  }

  const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .eq("manufacturer_id", manufacturer.id)
    .order("model");

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        {manufacturer.name}
      </h1>

      {error && (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      )}

      <div className="grid gap-3">
        {cars?.map((car) => (
          <div
            key={car.id}
            className="border rounded p-4"
          >
            {car.model}
          </div>
        ))}
      </div>
    </main>
  );
}