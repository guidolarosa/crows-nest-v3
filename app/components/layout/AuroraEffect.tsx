import React from "react";
import "@/app/css/Aurora.css"; // Import the CSS file
import clsx from "clsx";

const AuroraEffect = ({ className } : { className: string }) => {
  return (
    <article
      id="wrap"
      className={clsx(className, "absolute w-screen h-screen")}
    >
      <article id="lightings">
        <section id="one">
          <section id="two">
            <section id="three">
              <section id="four">
                <section id="five"></section>
              </section>
            </section>
          </section>
        </section>
      </article>
    </article>
  );
};

export default AuroraEffect;
