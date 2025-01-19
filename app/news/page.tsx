import Menu from "../components/layout/Menu";
import { createClient } from "@/prismicio";
import clsx from "clsx";

// import Image from "next/image";
import Footer from "../components/layout/Footer";
import {
  H1_STYLE,
  P_STYLE,
  // H2_STYLE,
  // IMAGE_CONTAINER,
  // IMAGE,
  // SINGLE_IMAGE_CONTAINER,
} from "../styles/common";
import NewsGrid from "../components/pages/NewsGrid";

export default async function Team() {
  const client = createClient();
  const page = await client.getAllByType("noticias");

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full">
      <header>
        <Menu />
      </header>
      <main
        className={clsx(
          "flex flex-col gap-8 row-start-2 sm:items-start mt-20 px-6 lg:max-w-7xl mx-auto lg:mt-40",
          P_STYLE
        )}
      >
        <div>
          <h1 className={H1_STYLE}>Novedades</h1>
          <NewsGrid news={page[0].data.body}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
