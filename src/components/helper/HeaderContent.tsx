import React from "react";
import { paddingClass } from "@/app/utils/constants";
import Link from "next/link";
// import CTAButton from "./CTAButton";
import Menu from "../Menu";
import { HeaderDocumentData } from "@/../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "../ui/button";

type Props = {
  newdata: HeaderDocumentData;
};

export default async function HeaderContent({ newdata }: Props) {
  return (
    <header
      className={`${paddingClass} grid h-[7.5rem] min-w-full grid-cols-[1fr_4rem] items-center justify-between lg:grid-cols-[10rem_1fr]`}
    >
      {/* LOGO or HomePage Link */}
      <div className="relative flex h-fit w-fit items-center">
        <Link
          href="/"
          aria-label="Home Button"
          className="flex w-fit flex-col justify-center gap-[3px]"
        >
          <PrismicNextImage
            field={newdata.logo_image}
            className="h-full w-full object-contain object-center"
          />
        </Link>
      </div>

      <Menu extraClass="" pageName="header" />

      {/* <div className="justify-self-center max-lg:hidden">
        <Button className="font-semibold">{newdata.cta_title}</Button>
      </div> */}
    </header>
  );
}
