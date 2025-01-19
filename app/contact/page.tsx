import Menu from "../components/layout/Menu";
// import { createClient } from "@/prismicio";
import clsx from "clsx";

// import Image from "next/image";
import Footer from "../components/layout/Footer";
import {
  P_STYLE,
  // H1_STYLE,
  // H2_STYLE,
  // IMAGE_CONTAINER,
  // IMAGE,
  // SINGLE_IMAGE_CONTAINER,
} from "../styles/common";

export default async function Team() {
  // const client = createClient();
  // const page = await client.getAllByType("servicios");

  // console.log(page);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full">
      <header>
        <Menu />
      </header>
      <main
        className={clsx(
          "flex flex-col gap-8 row-start-2 sm:items-start mt-20 px-6 lg:max-w-4xl mx-auto lg:mt-40",
          P_STYLE
        )}
      >

      </main>
      <Footer />
    </div>
  );
}
