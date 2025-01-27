import Menu from "../components/layout/Menu";
// import { createClient } from "@/prismicio";
import clsx from "clsx";

import Image from "next/image";
import Footer from "../components/layout/Footer";
import {
  H1_STYLE,
  H2_STYLE,
  IMAGE,
  P_STYLE,
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
          "flex flex-col gap-8 row-start-2 sm:items-start mt-20 px-6 lg:max-w-3xl mx-auto lg:mt-40",
          P_STYLE
        )}
      >
        <div>
          <h1 className={H1_STYLE}>¿Qué es Crows Nest?</h1>
          <div className={P_STYLE}>
            <p>
              Crows Nest PCG es una empresa dedicada al{" "}
              <strong>color grading</strong> y{" "}
              <strong>post producción de color</strong> en todas sus etapas,
              desde el{" "}
              <strong>asesoramiento en pre-producción (¨look book¨)</strong>,
              pasando por <strong>la supervisión en rodaje</strong> hasta el{" "}
              <strong>mastering final</strong> de la obra, creando y diseñando
              el flujo de trabajo particular de cada proyecto, desde los ¨in
              house¨, hasta trabajos internacionales en forma remota.
            </p>
            <p>
              Largometrajes, series, comerciales, cortometrajes, videoclips y
              trabajos para TV y web son nuestra tarea de cada día,{" "}
              <strong>todos los días</strong>.
            </p>
            <p>
              Contamos con{" "}
              <strong>
                20 años de experiencia en diseño y asesoramiento para salas de
                Color Grading profesionales a productoras y casas de
                post-producción
              </strong>
              , considerando la ambientación técnica adecuada; desde la pintura
              de la sala, pasando por la iluminación, los muebles, y hasta el
              hardware necesario según el tipo de trabajos que se deseen
              afrontar.
            </p>
            <p>
              Somos los{" "}
              <strong>
                primeros en utilizar, desarrollar y actualizar equipos
                profesionales de corrección de color
              </strong>{" "}
              y armar salas de color grading profesional en el país.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap divide-y divide-stone-700">
          <div className="flex gap-6 py-10">
            <div className="relative min-w-40 h-40 aspect-square rounded-full overflow-hidden">
              <Image
                priority
                src="/images/laura.jpg"
                fill
                alt="Laura Viviani"
                className={IMAGE}
              />
            </div>
            <div>
              <h2 className={H2_STYLE}>Laura Viviani</h2>
              <p>
                Pionera en Intermedio Digital en el país, y prolífera colorista
                de cine digital con infinidad de producciones cinematográficas y
                publicitarias en su currículum. Es socia fundadora de la
                Asociación Argentina de Coloristas Audiovisuales (AAC).
              </p>
              <p>
                Es la instructora oficial de Assimilate Scratch en la Argentina
                y docente de Manejo del Color en Postproducción en la ENERC.
              </p>
              <p>
                También dicta seminarios en el interior del país y Uruguay
                .Estudió diseño de Imagen y Sonido UBA y es socia fundadora de
                la escuela PuntoCINE, institución de formación de grado y
                postgrado interdisciplinaria en las áreas de realización,
                postproducción y animación, desarrolladas por profesionales en
                actividad del medio.
              </p>
            </div>
          </div>
          <div className="flex gap-6 py-10">
            <div className="relative min-w-40 h-40 aspect-square rounded-full overflow-hidden">
              <Image
                src="/images/edu_sierra.webp"
                fill
                alt="Laura Viviani"
                className={IMAGE}
              />
            </div>
            <div>
              <h2 className={H2_STYLE}>Eduardo Sierra</h2>
              <p>
                Es el colorista con mayor experiencia profesional en actividad
                de la Argentina. Su experiencia inicial fue en laboratorio
                cinematográfico y es uno de los primeros coloristas en transfer
                de película a video en Argentina; su trabajo se combina entre su
                desempeño en Intermedio Digital (DI ) y las últimas tecnologías
                de corrección de color de cinematografía digital. Su currículum
                posee innumerables realizaciones cinematográficas y
                publicitarias.
              </p>
              <p>
                Fundador de Cinefoto, el primer medio digital sobre divulgación
                tecnológica e intercambio de experiencias profesionales de
                Argentina.
              </p>
              <p>
                Es socio fundador de la Asociación Argentina de Coloristas
                Audiovisuales(AAC) y además miembro de la Color Society
                Internacional (CSI), la Society of Motion Pictures and
                Television Ingenieers (SMPTE), Independient Colorist Guild (ICG)
                y la Asociación de Autores de Fotografía Cinematográfica de
                Argentina (ADF).
              </p>
              <p>
                Su experiencia docente está avalada por su actividad en CFP
                SICA, ENERC, FUC y seminarios dictados en UNA, UNT, EPCTV,
                UNICEN, UNLP lo que también lo llevó a formar su propia escuela
                de especialización en postproducción cinematográfica: PuntoCine.
              </p>
              <p>
                En el exterior ha dictado Cursos de Scratch, Da Vinci Resolve y
                Color Grading en Pixelovers de Chile, en el TOA y la Universidad
                Católica del Uruguay. Mantiene ademas su actividad profesional
                como consultor de color y Colorista Senior en Metrovisión S.A. Y
                Cinecolor Digital.
              </p>
            </div>
          </div>
          <div className="flex gap-6 py-10">
            <div className="relative min-w-40 h-40 aspect-square rounded-full overflow-hidden">
              <Image
                src="/images/mariano.JPG"
                fill
                alt="Laura Viviani"
                className={IMAGE}
              />
            </div>
            <div>
              <h2 className={H2_STYLE}>Fernando Rivas</h2>
              <p>
                Colorista referente del departamento Color Grading de
                Telefe/VIACOM Argentina, formador de los coloristas de la
                empresa, e instructor de Davinci Resolve y docente del curso de
                Cine Digital en el centro de formación y laboratorio PuntoCINE.
                Es socio fundador de la Asociación Argentina de Coloristas
                Audiovisuales (AAC). Como docente también ha dictado talleres y
                cursos de color en la Universidad de las Americas (Chile), en el
                Taller de Oficios Audiovisuales del Uruguay (TOA) y en la UNICEN
                (Universidad del Centro, Tandil).
              </p>
              <p>
                Cuenta con amplia experiencia tanto en cine como en TV y demas
                flujos de color grading actuales, como asi tambien en el montaje
                de departamentos técnicos de empresas líderes en postproducción
                de la Argentina como Metrovision, es tambien pionero en el
                manejo de la tecnologia HDR de la Argentina. Trabajó como
                consultor y colorista de post productoras como La Posta, UFA!
                Post y RGB Entertainment entre otros.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
