/* eslint-disable @typescript-eslint/no-explicit-any */
import Menu from "./components/layout/Menu";
import WorksGallery from "./components/pages/WorksGallery";
import { createClient } from "@/prismicio";
import Hero from "./components/layout/Hero";
import { JSX } from "react";
import Footer from "./components/layout/Footer";

// Define types for products and page data
interface ProductItem {
  primary: {
    product_type: string;
  };
  [key: string]: any; // Adjust if you know the structure of the other properties
}

interface Products {
  [type: string]: ProductItem[];
}

export default async function Home(): Promise<JSX.Element> {
  const client = createClient();
  const page = await client.getAllByType("color-grading");

  // Initialize products with a type
  const products: Products = {};

  // Ensure page[0] and page[0].data.body are defined
  if (page[0]?.data.body) {
    page[0].data.body.forEach((item: any) => {
      const type = item.primary.product_type; // Assume `product_type` is always a string
      if (!products[type]) {
        products[type] = [];
      }
      products[type].push(item);
    });
  }

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full">
      <header className="h-screen">
        <Menu />
        <Hero />
      </header>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <WorksGallery products={products} />
      </main>
      <Footer />
    </div>
  );
}
