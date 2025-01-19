import Menu from "../components/layout/Menu";
import clsx from "clsx";

import Footer from "../components/layout/Footer";
import {
  H1_STYLE,
  P_STYLE,
} from "../styles/common";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { externalLinks } from "../content/externalLinks";

export default async function Contact() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full">
      <header>
        <Menu />
      </header>
      <main
        className={clsx(
          "flex flex-col row-start-2 sm:items-start mt-20 px-6 lg:max-w-4xl mx-auto lg:mt-40",
          P_STYLE
        )}
      >
        <h1 className={H1_STYLE}>Queremos conocerte</h1>
        <div className="w-full aspect-video mb-4 rounded-lg overflow-hidden">
          <iframe
            style={{ border: 0 }}
            src={externalLinks.googleMaps}
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="links-container grid grid-cols-2 w-full">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <address className="flex flex-col">
                <span>
                  <strong>Arévalo 1853</strong>
                </span>
                <span>C1414CQK - Palermo</span>
                <span>CABA - Argentina</span>
              </address>
            </div>
          </div>
          <div className="links-column">
            <a href="mailto:crowsnestpcg@gmail.com" className="flex items-center gap-2">
              <AiOutlineMail title={"Mail"} />
              <span>crowsnestpcg@gmail.com</span>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/crowsnestcolor/"
              className="flex items-center gap-2"
            >
              <AiOutlineInstagram title={"Instagram"} />
              <span>@crowsnestcolor</span>
            </a>
            <a
              target="blank"
              href="https://www.facebook.com/crownestcolor"
              className="flex items-center gap-2"
            >
              <AiFillFacebook title={"Facebook"} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
        <div className="logo-container">
          <div className="logo" />
          <div className="logo" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
