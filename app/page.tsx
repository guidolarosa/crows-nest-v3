import Menu from "./components/layout/Menu";
import Image from "next/image";
import WorksGallery from "./components/pages/WorksGallery";
import AuroraEffect from "./components/layout/AuroraEffect";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const page = await client.getAllByType("color-grading");

  const products = {};
  page[0].data.body.forEach((item) => {
    const type: string = item.primary.product_type;
    if (!products[type]) {
      products[type] = [];
    }
    products[type].push(item);
  });

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full">
      <AuroraEffect />
      <header className="h-screen">
        <Menu />
        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 aspect-square relative">
              <Image src="/images/logo.svg" fill alt="Logo" />
            </div>
            <div className="flex justify-center items-center flex-col gap-1">
              <h1 className="text-4xl font-extrabold">CROWS NEST</h1>
              <strong className="font-light opacity-50">Professional Color Grading</strong>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <WorksGallery products={products}/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-10"></footer>
    </div>
  );
}
