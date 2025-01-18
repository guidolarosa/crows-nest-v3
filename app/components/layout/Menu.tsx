"use client";

import { mainNavigation } from "@/app/content/navigation";
import HamburgerIcon from "../interaction/HamburgerIcon";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={clsx("fixed top-0 left-0 w-screen z-30")}>
      <div className="p-4 lg:p-8 flex justify-between">
        <div>
          <Link href="/" className="lg:hidden flex items-center gap-2">
            <div className="w-8 aspect-square relative">
              <Image src="/images/logo.svg" fill alt="Logo" />
            </div>
            <strong className="text-xl">CROWS NEST</strong>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-12 bg-[rgba(0,0,0,0.5)] py-3 px-3 rounded-lg backdrop-blur-md items-center pl-8">
            {mainNavigation.map((link) => (
              <li key={link.path} className={clsx("text-stone-300", link.higlighted && 'bg-white py-2 px-4 text-stone-900 rounded-lg')}>
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <HamburgerIcon
            onClick={() => setMenuOpen(true)}
            isOpen={menuOpen}
            className="lg:hidden"
          />
        </div>
      </div>
      {/* DRAWER */}
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
          <ul className="flex flex-col gap-4 items-end">
            {mainNavigation.map((link) => (
              <li key={link.path} className={clsx("text-2xl", link.higlighted && 'bg-stone-900 text-stone-100 w-fit px-4 py-2 rounded-lg mt-10')}>
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* DRAWER UNDERLAY */}
      <div
        className={clsx(
          "fixed top-0  h-screen left-0 w-full text-right z-10 transition duration-300",
          menuOpen
            ? "bg-[rgba(0,0,0,0.5)] backdrop-blur-md"
            : "bg-transparent pointer-events-none"
        )}
      ></div>
    </div>
  );
};

export default Menu;
