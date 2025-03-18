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
import Link from "next/link";

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
              Crows Nest PCG es una empresa especializada en color grading y
              postproducción de color en todas sus etapas.
            </p>
            <p>
              Ofrecemos asesoramiento en preproducción (look book), supervisión
              en rodaje y mastering final, diseñando un flujo de trabajo
              personalizado para cada proyecto. Trabajamos tanto en estudios
              propios (in-house) como en producciones internacionales de forma
              remota.
            </p>
            <p>
              Nos dedicamos al color grading para largometrajes, series,
              comerciales, cortometrajes, videoclips y contenidos para TV y web,
              brindando soluciones de alta calidad día tras día.
            </p>
            <p>
              Con más de 20 años de experiencia, asesoramos y diseñamos salas de
              color grading profesionales para productoras y casas de
              postproducción.
            </p>
            <p>
              Nos enfocamos en cada detalle técnico, desde la pintura y la
              iluminación hasta el mobiliario y el hardware necesario según las
              exigencias de cada proyecto. Fuimos pioneros en el uso, desarrollo
              y actualización de equipos profesionales de corrección de color,
              así como en la creación de salas de color grading de nivel
              profesional en el país. Gracias a nuestra experiencia y
              conocimiento acumulados a lo largo de los años, también ofrecemos
              cursos personalizados, adaptados a las necesidades específicas de
              cada cliente.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap divide-y divide-stone-700">
          <div className="flex flex-col md:flex-row gap-6 py-10">
            <div className="relative min-w-40 w-40 h-40 aspect-square rounded-full overflow-hidden">
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
                Colorista Senior con una amplia trayectoria en producciones
                cinematográficas y publicitarias.
              </p>

              <p>
                Forma parte del medio audiovisual desde finales de los años 90 y
                fue pionera en Intermedio Digital en Argentina, trabajando en
                Metrovisión Producciones.
              </p>

              <p>
                Gracias a su conocimiento en diversas áreas, ha participado en
                múltiples producciones desempeñando distintos roles, incluyendo
                fotografía, cámara, VFX y producción.
              </p>

              <p>
                Es socia fundadora de la Asociación Argentina de Coloristas
                Audiovisuales (AAC) y de la escuela PuntoCINE.
              </p>

              <p>
                Estudió Diseño de Imagen y Sonido en la UBA y ha realizado
                cursos de actualización en diversas instituciones como FIAF,
                FUNDAVIS, UNA, BMD, etc., con el objetivo de abordar el
                conocimiento del color desde una perspectiva técnica, física,
                corporal y emocional.
              </p>

              <p>
                Es instructora oficial de Assimilate Scratch en Argentina y
                docente de Manejo del Color en Postproducción en la ENERC y
                PuntoCINE.
              </p>

              <p>
                Además, imparte seminarios y charlas en festivales, empresas y
                para particulares en Argentina y Uruguay.
              </p>

              <Link
                target="_blank"
                href="https://www.linkedin.com/in/laura-viviani-color/
"
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 py-10">
            <div className="relative min-w-40 w-40 h-40 aspect-square rounded-full overflow-hidden">
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
                de Argentina.
              </p>

              <p>
                Su carrera comenzó en el laboratorio cinematográfico Cinecolor
                en 1984, siendo uno de los primeros coloristas en realizar
                transferencias de película a video en el país.
              </p>

              <p>
                Su trabajo abarca tanto su desempeño en Intermedio Digital (DI)
                como las últimas tecnologías de corrección de color en
                cinematografía digital.
              </p>

              <p>
                Su currículum incluye innumerables proyectos cinematográficos y
                publicitarios.
              </p>

              <p>
                Además, está diplomado en electrónica, fotografía fija
                profesional y dirección de fotografía cinematográfica.
              </p>

              <p>
                Es también moderador y fundador del foro Cinefoto, el primer
                medio digital de divulgación tecnológica e intercambio de
                experiencias profesionales en Argentina.
              </p>

              <p>
                Es socio fundador de la Asociación Argentina de Coloristas
                Audiovisuales (AAC) y miembro de la Color Society International
                (CSI), Independent Colorist Guild (ICG), la Society of Motion
                Picture and Television Engineers (SMPTE) y la Asociación de
                Autores de Fotografía Cinematográfica de Argentina (ADF).
              </p>

              <p>
                Su experiencia docente está respaldada por su participación en
                instituciones como CFP SICA, ENERC, FUC, PUNTOCINE, así como en
                seminarios dictados en UNA, UNT, EPCTV, UNICEN, UNLP y TGSM.
              </p>

              <p>
                Esta experiencia le permitió fundar su propia escuela de
                especialización en postproducción cinematográfica: PuntoCine -
                Buenos Aires.
              </p>

              <p>
                En el exterior, ha dictado cursos de Scratch, DaVinci Resolve y
                Color Grading en Pixelovers (Chile), en el TOA y en la
                Universidad Católica del Uruguay.
              </p>

              <p>
                Además de su labor docente, mantiene una activa carrera
                profesional como consultor de color y Colorista Senior en
                Metrovisión Producciones y Cinecolor Digital.
              </p>

              <Link
                target="_blank"
                href="https://www.imdb.com/name/nm4096874/?ref_=nv_sr_srsg_1_tt_0_nm_8_in_0_q_Eduardo%2520Sierra"
              >
                IMDB
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 py-10">
            <div className="relative min-w-40 w-40 h-40 aspect-square rounded-full overflow-hidden">
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
                Coordinador del Departamento de Color Grading del área de
                postproducción de PARAMOUNT/TELEFE, formador de los coloristas
                de la empresa y encargado de las charlas de capacitación del
                personal interno de las distintas áreas.
              </p>

              <p>
                También es asesor de las tecnologías necesarias de las salas de
                grading y del diseño y testeo de los flujos para los diferentes
                desafíos propuestos, así como del QC interno y de soporte para
                otras áreas técnicas.
              </p>

              <p>
                Instructor Certificado de BMD Davinci Resolve y docente de
                cursos de Color con Resolve y de Cine Digital en el centro de
                formación y laboratorio PuntoCINE.
              </p>

              <p>
                Como docente, también ha dictado talleres y cursos de color
                desde 2014 en la Universidad de las Américas (Chile), en el
                Taller de Oficios Audiovisuales del Uruguay (TOA) y en la UNICEN
                (Universidad del Centro, Tandil).
              </p>

              <p>
                Ha realizado capacitaciones sobre corrección de color para
                instituciones privadas como el Teatro Gral. San Martín, Viditec
                S. A. y Aleta Media, entre otros.
              </p>

              <p>
                Es socio fundador de la Asociación Argentina de Coloristas
                Audiovisuales (AAC) y forma parte de la Comisión de Formación
                Profesional de la misma.
              </p>

              <p>
                Cuenta con amplia experiencia tanto en cine y publicidad como en
                TV y demás flujos de color grading actuales, así como en el
                montaje de departamentos técnicos y salas de Color Grading en
                empresas líderes de postproducción en Argentina, como
                Metrovisión.
              </p>

              <p>
                Es también pionero en el manejo de la tecnología HDR en
                Argentina.
              </p>

              <p>
                Trabajó como consultor y colorista en postproductoras como La
                Posta, UFA! Post y RGB Entertainment, entre otras.
              </p>

              <Link
                target="_blank"
                href="https://www.linkedin.com/in/fernandogabrielrivas/"
              >
                LinkedInd
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
