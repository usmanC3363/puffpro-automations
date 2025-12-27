import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/helper/Bounded";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
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
      className="flex h-[75vh] w-screen flex-col justify-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6">
        {/* Top Text Block */}
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <CSSLineReveal textClass="text-[40px] capitalize">
            {slice.primary.heading_1}
          </CSSLineReveal>
          <CSSLineReveal textClass="text-[120px] font-semibold uppercase">
            {slice.primary.heading_2}
          </CSSLineReveal>
        </div>

        {/* Divider */}
        <div className="my-10 h-0.5 w-full bg-white/25" />

        {/* Bottom Row */}
        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
          {/* Description */}
          <CSSLineReveal textClass="max-w-xl text-left body-lg text-white/70">
            {slice.primary.description}
          </CSSLineReveal>

          {/* CTA Buttons */}
          <div className="flex shrink-0 items-center gap-4">
            <PrismicNextLink field={slice.primary.cta1_link}>
              <Button className="flex h-9 items-center gap-1 rounded-sm border border-white/20 px-4">
                <span className="text-sm font-medium">
                  {slice.primary.cta1_label}
                </span>
                <GoArrowUpRight className="size-5" />
              </Button>
            </PrismicNextLink>

            <PrismicNextLink field={slice.primary.cta2_link}>
              <Button
                variant="outline"
                className="flex h-9 items-center rounded-sm border border-white/20 px-4"
              >
                <span className="text-sm font-medium">
                  {slice.primary.cta2_label}
                </span>
              </Button>
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
