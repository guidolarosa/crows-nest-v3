"use client";

import clsx from "clsx";

const HamburgerIcon = ({
  className,
  onClick,
  lineClassName,
  isOpen
}: {
  className?: string;
  onClick?: () => void;
  lineClassName?: string;
  isOpen?: boolean
}) => {

  const LINE_STYLES = "w-full h-px bg-white transition";
  return (
    <div
      className={clsx(className, "flex flex-col h-5 w-6 justify-between")}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <div
        className={clsx(LINE_STYLES, isOpen && "opacity-0", lineClassName)}
      ></div>
      <div className="relative">
        <div
          className={clsx(
            LINE_STYLES,
            "absolute -bottom-px left-0 opacity-0",
            isOpen && "rotate-45 opacity-100",
            lineClassName
          )}
        ></div>
        <div
          className={clsx(
            LINE_STYLES,
            "absolute -bottom-px left-0",
            isOpen && "-rotate-45",
            lineClassName
          )}
        ></div>
      </div>
      <div
        className={clsx(LINE_STYLES, isOpen && "opacity-0", lineClassName)}
      ></div>
    </div>
  );
};

export default HamburgerIcon;
