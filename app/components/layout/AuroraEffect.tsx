"use client";

import React from "react";
import "@/app/styles/Aurora.css"; // Import the CSS file
import clsx from "clsx";

const AuroraEffect = ({ className }: { className: string }) => {
  return (
    <article
      id="wrap"
      className={clsx(className, "absolute w-screen h-screen")}
    >
      <section className="wrapper">
        <div className="hero"></div>
        <div className="content">
          <input type="checkbox" id="switch" checked readOnly />
        </div>
      </section>
    </article>
  );
};

export default AuroraEffect;
