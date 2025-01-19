import Menu from "./components/layout/Menu";
import clsx from "clsx";

// import Image from "next/image";
import Footer from "./components/layout/Footer";
import { H1_STYLE, P_STYLE } from "./styles/common";
import { IoWarning } from "react-icons/io5";

export default async function Team() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full h-screen flex flex-col">
      <header>
        <Menu />
      </header>
      <main
        className={clsx(
          "flex flex-col gap-4 row-start-2 sm:items-center mt-20 px-6 lg:max-w-7xl mx-auto lg:mt-40 text-center h-screen justify-center",
          P_STYLE
        )}
      >
          <IoWarning className="text-6xl text-yellow-500"/>
          <h1 className={H1_STYLE}>Error</h1>
          <div>
            <p>La página que estás solicitando no existe.</p>
            <p>Por favor intentá navegar a los links de la barra de menú.</p>
          </div>
      </main>
      <Footer />
    </div>
  );
}
