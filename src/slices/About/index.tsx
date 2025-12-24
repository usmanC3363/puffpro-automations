import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { MyRichText } from "@/components/helper/RichText";
import { PrismicNextImage } from "@prismicio/next";

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
      className="mt-32 flex h-full w-screen flex-col place-items-center justify-center gap-y-8"
    >
      <div className="relative grid h-full w-full gap-x-20 gap-y-14 lg:grid-cols-[1fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-20">
        <div
          className={`${slice.primary.isimageonleft ? "order-1" : "order-2"} flex h-full w-full flex-col gap-y-10`}
        >
          <h1
            className={`w-fit text-start text-3xl opacity-70 lg:text-4xl 2xl:text-5xl`}
            style={{ fontStretch: "200px" }}
          >
            About Us
          </h1>
          <div className="relative h-[25rem] w-full sm:h-full max-lg:max-w-96">
            <PrismicNextImage
              field={slice.primary.about_image}
              alt=""
              className="h-[25rem] w-full rounded object-cover object-center"
            />
          </div>
        </div>

        <div
          className={`${slice.primary.isimageonleft ? "order-2" : "order-1"}`}
        >
          <div className="hidden h-[4.75rem] w-full lg:block" />
          <div className="body-xxl flex h-fit max-w-lg flex-col gap-y-4 pl-2 sm:place-self-end md:text-base lg:max-w-3xl lg:place-self-start lg:pl-4 max-sm:py-6">
            <MyRichText field={slice.primary.about_content} />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default About;
