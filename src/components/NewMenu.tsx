"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import { getCurrentScreenSize } from "@/app/utils/constants.js";
import { asLink, Content } from "@prismicio/client";
import { usePathname } from "next/navigation";

// Typing for individual link item
type MenuLink = Content.MenuDocument["data"]["menu_links"][number];

type Props = {
  menuLinks: MenuLink[];
};

export default function NewMenu({ menuLinks }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<string | null>(null);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => setScreenSize(getCurrentScreenSize());
    handleResize(); // Initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 min-h-screen bg-current transition-all duration-300 ease-in-out ${
          open
            ? "translate-x-0 delay-150 lg:hidden"
            : "w-screen translate-x-full delay-500"
        }`}
      >
        <div className="flex h-full w-full flex-col justify-center gap-y-24 px-6">
          {menuLinks?.map(({ link_title, link_url }, index) => {
            // AsLink for prismic typesafety, doesnt work without it
            const href = asLink(link_url) || "#";
            const isActive = pathname === href;

            return (
              <PrismicNextLink key={index} field={link_url}>
                <button
                  className={`${isActive && ""} flex h-10 w-full max-w-full items-center justify-between border-b-[1.5px] border-black pb-8 dark:border-mycolors-dark-grey ${
                    open
                      ? "translate-x-0 transition-all duration-200 ease-linear hover:border-opacity-70 hover:text-opacity-70"
                      : "translate-x-[100%] transition-all duration-500 ease-in-out"
                  }`}
                  onClick={toggleMenu}
                  style={{
                    transitionDelay: `${200 + index * 100}ms`,
                  }}
                >
                  <span className="uppercase tracking-tighter">
                    {link_title}
                  </span>
                </button>
              </PrismicNextLink>
            );
          })}
        </div>
      </div>

      {/* Desktop Menu */}
      {["lg", "xl", "2xl", "3xl"].includes(screenSize || "") && (
        <div className="flex w-[70%] justify-between">
          {menuLinks?.map(({ link_title, link_url }, index) => {
            // AsLink for prismic typesafety, doesnt work without it
            const href = asLink(link_url) || "#";
            const isActive = pathname === href;
            return (
              <PrismicNextLink field={link_url} key={index}>
                <button
                  className={`${isActive ? "" : ""} group h-fit w-fit min-w-20 px-2 font-light transition-all duration-300 ease-in-out hover:opacity-100`}
                >
                  <span className="text-nowrap tracking-wide text-mycolors-white 2xl:text-lg">
                    {link_title}
                  </span>
                </button>
              </PrismicNextLink>
            );
          })}
        </div>
      )}

      {/* Menu Toggle Button */}
      <button
        title="Menu"
        type="button"
        onClick={toggleMenu}
        className="group z-50 h-10 w-10 cursor-pointer outline-none transition-all duration-300 ease-in-out lg:hidden max-sm:h-8 max-sm:w-8"
      >
        <div
          className={`group flex scale-110 items-center justify-center transition-all duration-300 ease-in-out ${
            open ? "-translate-x-3 -rotate-180 scale-x-150" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            {[6, 12, 18].map((y, idx) => (
              <line
                key={idx}
                x1="4"
                y1={y}
                x2="20"
                y2={y}
                className={`stroke-current stroke-[1.75px] transition-all duration-200 ease-linear ${
                  open ? "rotate-[40deg]" : ""
                }`}
              />
            ))}
          </svg>
        </div>
      </button>
    </>
  );
}
