"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { MyRichText } from "@/components/helper/rich-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Arrow } from "@/components/helper/Arrow";
import { cn } from "@/lib/utils";
import { ScrollParagraphs } from "@/components/scroll-paragraphs";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return slice.variation === "default" ? (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-20 flex h-full max-h-full w-screen flex-col place-items-center justify-center gap-y-16"
    >
      <h1 className="text-[60px] font-medium">{slice.primary.about_heading}</h1>

      {/* IMAGE AND DESCRIPTION GRID */}
      <div className="relative grid h-full w-full gap-x-16 gap-y-14 lg:grid-cols-[33rem_auto] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20">
        <div
          className={`${slice.primary.isimageonleft ? "order-1" : "order-2"} flex h-full flex-col items-center`}
        >
          {/* <PrismicNextImage
            field={slice.primary.about_image}
            alt=""
            className="h-[28rem] w-[28rem] rounded bg-black object-contain object-center dark:bg-none"
          /> */}
          <svg
            width="245"
            height="176"
            viewBox="0 0 245 176"
            fill="none"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.113 106.109C99.2938 95.9308 129.854 110.696 139.378 139.125C148.902 167.554 179.462 182.319 207.643 172.141C235.823 161.963 250.956 130.675 241.438 102.265C231.915 73.8358 201.354 59.0705 173.174 69.2483C144.993 79.4261 114.426 64.6426 104.909 36.2321C95.3912 7.82156 64.8246 -6.96193 36.6439 3.21586C8.46311 13.3936 -6.67548 44.6636 2.84816 73.0924C12.3657 101.503 42.9323 116.286 71.113 106.109Z"
              className="fill-black dark:fill-mycolors-white"
            />
          </svg>
        </div>

        {/* RICH TEXT DESCRIPTION AND CTA BUTTON */}
        <div
          className={`${slice.primary.isimageonleft ? "order-2" : "order-1"} flex h-fit max-w-lg flex-col gap-y-10 pl-2 sm:place-self-end lg:max-w-full lg:pl-4 max-sm:py-6`}
        >
          <MyRichText
            field={slice.primary.about_content}
            components={{
              paragraph: ({ children }) => (
                <p className="text-[23px] font-normal leading-[150%] text-mycolors-black/85 dark:text-mycolors-grey">
                  {children}
                </p>
              ),
            }}
          />
          <Button asChild variant="outline" className="w-fit">
            <Link href="/">
              <span className="pb-0.5 text-base font-normal">Contact Now</span>
              <div className="flex items-center">
                <Arrow svgClass="h-full w-full" name="main" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </Bounded>
  ) : (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(
        "my-[6.5rem] flex h-full flex-col place-items-center justify-center",
      )}
    >
      <div className="grid grid-cols-1 gap-y-4">
        {/* SECTION CONTENT */}
        <div className="flex flex-col gap-y-8">
          {/* SECTION TITLE with border */}
          <div className="flex w-full justify-between border-b border-mycolors-dark-grey pb-3">
            <div className="flex gap-x-2">
              {/* WIP ADD ICON */}
              <h3 className="text-[16px]">{slice.primary.about_title}</h3>
            </div>
            <span className="">Lorem Ipsum</span>
          </div>
        </div>
        <ScrollParagraphs
          content_1={slice.primary.about_content_1}
          content_2={slice.primary.about_content_2}
        />
      </div>
    </Bounded>
  );
};

export default About;
