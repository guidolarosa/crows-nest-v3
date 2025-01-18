import Menu from "../components/layout/Menu";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const page = await client.getAllByType("servicios");

  console.log(page)

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full">
      <header className="h-screen">
        <Menu />
      </header>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
       
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-6 text-sm opacity-50 mt-6">
        {new Date().getFullYear()} Crows Nest. Todos los derechos reservados.
      </footer>
    </div>
  );
}
