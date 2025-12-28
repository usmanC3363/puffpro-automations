import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { MyRichText } from "@/components/helper/rich-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Arrow } from "@/components/helper/Arrow";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-20 flex h-[40rem] w-screen flex-col place-items-center justify-center gap-y-16"
    >
      <h1 className="text-[60px] font-medium">{slice.primary.about_heading}</h1>

      {/* IMAGE AND DESCRIPTION GRID */}
      <div className="relative grid h-full w-full gap-x-32 gap-y-14 lg:grid-cols-[28rem_3fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20">
        <div
          className={`${slice.primary.isimageonleft ? "order-1" : "order-2"} h-full`}
        >
          <PrismicNextImage
            field={slice.primary.about_image}
            alt=""
            className="h-full w-full rounded bg-black object-contain object-center dark:bg-none"
          />
        </div>

        {/* RICH TEXT DESCRIPTION AND CTA BUTTON */}
        <div
          className={`${slice.primary.isimageonleft ? "order-2" : "order-1"} flex h-fit max-w-lg flex-col gap-y-10 pl-2 sm:place-self-end lg:max-w-full lg:pl-4 max-sm:py-6`}
        >
          <MyRichText
            field={slice.primary.about_content}
            components={{
              paragraph: ({ children }) => (
                <p className="text-[23px] leading-[150%] text-mycolors-black/85 dark:text-mycolors-grey">
                  {children}
                </p>
              ),
            }}
          />
          <Button asChild variant="outline" className="w-fit">
            <Link href="/">
              <span className="pb-0.5 text-base font-light">Contact Now</span>
              <div className="flex items-center">
                <Arrow svgClass="h-full w-full" name="main" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </Bounded>
  );
};

export default About;
