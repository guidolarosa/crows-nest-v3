"use client";

import { mainNavigation } from "@/app/content/navigation";
import HamburgerIcon from "../interaction/HamburgerIcon";
import { useState } from "react";
import clsx from "clsx";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={clsx('fixed top-0 left-0 w-screen z-10')}>
      <div className={clsx(
          "fixed top-0  h-screen left-0 w-full text-right z-10 transition duration-300",
          menuOpen ? "bg-[rgba(0,0,0,0.5)] backdrop-blur-md" : "bg-transparent pointer-events-none"
        )}>
    
      </div>
      <div
        className={clsx(
          "fixed top-0 bg-white h-screen text-black right-0 w-full max-w-64 text-right z-20 transition duration-300",
          menuOpen ? "translate-x-0" : "translate-x-64"
        )}
      >
        <div className="flex justify-end p-6">
          <HamburgerIcon
            lineClassName="!bg-black"
            isOpen={menuOpen}
            onClick={() => {
              setMenuOpen(false);
            }}
          />
        </div>
        <nav className="p-6">
          <ul className="flex flex-col gap-4">
            {mainNavigation.map((link) => (
              <li key={link.path} className="text-2xl">
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="p-6 flex justify-end">
        <HamburgerIcon onClick={() => setMenuOpen(true)} isOpen={menuOpen}/>
      </div>
    </div>
  );
};

export default Menu;
