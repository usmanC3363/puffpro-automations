import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/helper/Bounded";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import GSAPLineReveal from "@/components/helper/GSAPLineReveal";
import CSSLineReveal from "@/components/helper/CssLineReveal";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex h-[75vh] w-screen flex-col place-items-center justify-center gap-y-8`}
    >
      {/* Hero Heading and description */}
      <div className={`flex flex-col gap-y-6 text-center`}>
        <GSAPLineReveal textClass="heading-xl">
          {slice.primary.heading}
        </GSAPLineReveal>
        <CSSLineReveal textClass="body-xxl">
          {slice.primary.description}
        </CSSLineReveal>
      </div>

      {/* CTA Buttons */}
      <div className="flex w-fit items-center gap-x-5">
        <PrismicNextLink field={slice.primary.cta1_link}>
          <Button
            className={`slide-in-left flex h-9 w-fit items-center gap-1 rounded-sm border border-white/20`}
          >
            <span className="text-base font-medium">
              {slice.primary.cta1_label}
            </span>
            <GoArrowUpRight
              className={`size-7 transition-all duration-300 ease-in-out`}
            />
          </Button>
        </PrismicNextLink>
        <PrismicNextLink field={slice.primary.cta2_link}>
          <Button
            variant={"outline"}
            className={`slide-in-right flex h-9 w-fit items-center gap-1 rounded-sm border border-mycolors-secText/20`}
          >
            <span className="text-base font-medium">
              {slice.primary.cta2_label}
            </span>
          </Button>
        </PrismicNextLink>
      </div>

      {/* Hero Image  */}
      {/* <div className="relative flex min-h-[20em] w-full justify-end lg:min-h-[30em]">
        <PrismicNextImage
          priority
          field={slice.primary.hero_image}
          className="slide-in-down absolute h-full w-full rounded-sm object-cover object-center pt-6"
        />
      </div> */}
    </Bounded>
  );
};

export default Hero;
