import Menu from "../components/layout/Menu";
// import { createClient } from "@/prismicio";
import clsx from "clsx";

import Image from "next/image";
import Footer from "../components/layout/Footer";
import {
  P_STYLE,
  H1_STYLE,
  H2_STYLE,
  IMAGE_CONTAINER,
  IMAGE,
  SINGLE_IMAGE_CONTAINER,
} from "../styles/common";

export default async function Home() {
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
        <div className="w-full aspect-video relative rounded-md overflow-hidden">
          <Image src={'/images/services/detalle_sala_conformado.jpg'} fill alt="CN" className="object-cover" />
        </div>
        <div>
          <div className="text-box">
            <h1 className={H1_STYLE}>Con un ojo siempre en el color</h1>
            <p>
              Acompañamos a nuestros clientes desde el{" "}
              <strong>
                planeamiento en la pre producción, el conformado del material,
                el color grading, damos asesoramiento artístico, realizamos QC
                de sus piezas
              </strong>{" "}
              y los acompañamos hasta la <strong>masterización final.</strong>
            </p>
          </div>
        </div>
        <div className="text-box">
          <h1 className={H1_STYLE}>Hay equipo(s)</h1>
          <p>
            Contamos con{" "}
            <strong>
              dos islas profesionales de <em>color correction</em> in house con
              monitores de 2,5K y 4K
            </strong>
            , además de estar equipada una de ellas con proyector digital para
            los clientes que deseen ver su trabajo en formato cinematográfico en
            pantalla perlada de 120¨
          </p>
          <p>
            Estamos equipados también{" "}
            <strong>
              equipos portátiles de alta gama para la confección dailies
              CDL&apos;s en rodaje y la creación de Lut&apos;s
            </strong>{" "}
            en el set en casos que así lo requieran.
          </p>
          <p>
            Utilizamos soft de color correction DaVinci Resolve Studio y
            Assimilate Scratch VR, instrumentos de medición de señales portables
            y tecnología de calibración de monitores X-Rite.
          </p>
        </div>
        {/* SALAS */}
        <section className="salas w-full">
          <h1 className={H1_STYLE}>Nuestras Salas</h1>
          <div className="flex flex-col gap-8">
            <div className="sala">
              <h2 className={H2_STYLE}>Sala de Proyección</h2>
              <div className="images flex gap-4 flex-col lg:flex-row">
                <div className={clsx(IMAGE_CONTAINER)}>
                  <Image
                    className={IMAGE}
                    alt="CN"
                    fill
                    src="/images/services/sala_proyeccion.jpg"
                  />
                </div>
                <div className={clsx(IMAGE_CONTAINER)}>
                  <Image
                    className={IMAGE}
                    alt="CN"
                    fill
                    src="/images/services/sala_proyeccion2.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="sala">
              <h2 className={H2_STYLE}>Sala de Conformado y Grading</h2>
              <div className="images flex gap-4 flex-col lg:flex-row">
                <div className={clsx(IMAGE_CONTAINER)}>
                  <Image
                    alt="CN"
                    fill
                    src="/images/services/sala_conformado_color.jpg"
                    className={IMAGE}
                  />
                </div>
                <div className={clsx(IMAGE_CONTAINER)}>
                  <Image
                    alt="CN"
                    fill
                    src="/images/services/detalle_sala_conformado.jpg"
                    className={IMAGE}
                  />
                </div>
              </div>
            </div>
            <div className="sala">
              <h2 className={H2_STYLE}>Sala de VFX - MyM Post</h2>
              <div className={clsx(IMAGE_CONTAINER, SINGLE_IMAGE_CONTAINER)}>
                <Image
                  alt="CN"
                  fill
                  src="/images/services/mym_post.jpg"
                  className={IMAGE}
                />
              </div>
            </div>
            <div className="sala">
              <h2 className={H2_STYLE}>Amenities</h2>
              <div className={clsx(IMAGE_CONTAINER, SINGLE_IMAGE_CONTAINER)}>
                <Image
                  alt="CN"
                  fill
                  src="/images/services/sala_reuniones.jpg"
                  className={IMAGE}
                />
              </div>
            </div>
            <div className="sala">
              <h2 className={H2_STYLE}>Terraza</h2>
              <div className={clsx(IMAGE_CONTAINER, SINGLE_IMAGE_CONTAINER)}>
                <Image
                  alt="CN"
                  fill
                  src="/images/services/terraza.jpg"
                  className={IMAGE}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
