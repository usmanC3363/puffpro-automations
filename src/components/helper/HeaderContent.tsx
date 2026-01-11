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
      className={`${paddingClass} grid h-[6rem] min-w-full grid-cols-[1fr_4rem] items-center justify-between lg:grid-cols-[10rem_1fr]`}
    >
      {/* LOGO or HomePage Link */}
      <div className="relative flex h-full w-[130px] items-center">
        <Link href="/" aria-label="Home Button" className="">
          <PrismicNextImage
            field={newdata.logo_image}
            className="h-full w-[130px] object-cover object-center"
          />
        </Link>
      </div>

      <Menu extraClass="" pageName="header" />
    </header>
  );
}
