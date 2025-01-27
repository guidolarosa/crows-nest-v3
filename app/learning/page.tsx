/* eslint-disable @typescript-eslint/no-explicit-any */
import Menu from "../components/layout/Menu";
import { createClient } from "@/prismicio";
import clsx from "clsx";

import Footer from "../components/layout/Footer";
import {
  H1_STYLE,
  IMAGE,
  IMAGE_CONTAINER,
  P_STYLE,
  // H1_STYLE,
  // H2_STYLE,
  // IMAGE_CONTAINER,
  // IMAGE,
  // SINGLE_IMAGE_CONTAINER,
} from "../styles/common";
import Image from "next/image";

export default async function Team() {
  const client = createClient();
  const page = await client.getAllByType("educacional");
  const educationItems = page[0].data.body;

  console.log(educationItems);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full">
      <header>
        <Menu />
      </header>
      <main
        className={clsx(
          "flex flex-col gap-8 row-start-2 sm:items-start mt-20 px-6 lg:max-w-3xl mx-auto lg:mt-40",
          P_STYLE
        )}
      >
        <section className={"mb-12"}>
          <div className="content-copy">
            <h1 className={H1_STYLE}>Nuestros cursos</h1>
            <p>
              Dictamos{" "}
              <strong>
                cursos de manejo de software de color de forma personalizada e
                individual
              </strong>
              , ya sean aspirantes a coloristas que desean profundizar
              conocimientos, directores de fotografía, editores, montajistas o
              vfx´s para actualizarlos en el manejo de nuevas versiones de
              software de corrección de color del mercado, tips y estrategias
              para realizar proyectos desde su inicio.
            </p>
            <p>
              Realizamos también{" "}
              <strong>tutorías para ¨coloristas noveles¨</strong> que desean
              tomar sus primeros pasos en este oficio de manera correcta
              acompañándolos y aconcejándolos en sus proyectos{" "}
              <strong>
                de la mano de verdaderos coloristas profesionales con cualquiera
                de las herramientas
              </strong>{" "}
              utilizadas en la actualidad, haciendo hincapié en las formas de
              trabajo y métodos más eficientes en los flujos de trabajo
              actuales.
            </p>
            <p>
              También{" "}
              <strong>
                diseñamos cursos a medida, capacitaciones y workshops de Color
                Grading y Software
              </strong>{" "}
              para empresas, productoras y casas de post-producción que
              necesitan actualizarse en el manejo y conocimiento de nuevas
              tecnologías de corrección de color, y a estudiantes universitarios
              o de carreras afines a la educación audiovisual, tanto{" "}
              <strong>en el país como en el exterior</strong>.
            </p>
          </div>
          <div className="flex-col sm:flex-row flex gap-2 sm:gap-4 mt-8">
            <div className={IMAGE_CONTAINER}>
              <Image priority fill alt="CN" src="/images/UDLA.jpg" className={IMAGE} />
            </div>
            <div className={IMAGE_CONTAINER}>
              <Image priority fill alt="CN" src="/images/UDLA2.jpg" className={IMAGE} />
            </div>
          </div>
        </section>
        <div>
          <span className="text-center block text-xl">
            Las siguientes instituciones se han capacitado con nosotros
          </span>
          <div className="flex flex-wrap gap-4 justify-between">
            {educationItems?.map((item: any) => (
              <div className={clsx(IMAGE_CONTAINER, "w-24 lg:w-40 relative aspect-square !h-auto")} key={item.id}>
                <Image
                  fill
                  alt="CN"
                  src={item.primary.logo.url}
                  className={clsx('object-contain')}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
