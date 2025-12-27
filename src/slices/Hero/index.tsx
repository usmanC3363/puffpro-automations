import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/helper/Bounded";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import CSSLineReveal from "@/components/helper/CssLineReveal";
import { Arrow } from "@/components/helper/Arrow";

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
      className="flex h-full w-screen flex-col justify-center gap-y-20 py-20"
    >
      {/* Top Text Block */}
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Heading */}
        <CSSLineReveal textClass="text-[40px] capitalize">
          {slice.primary.heading_1}
        </CSSLineReveal>
        <CSSLineReveal textClass="text-[120px] leading-none font-semibold uppercase">
          {slice.primary.heading_2}
        </CSSLineReveal>
      </div>

      <div className="flex flex-col gap-y-4">
        {/* Divider */}
        <div className="my-4 h-px w-full bg-current" />

        {/* Bottom Row */}
        <div className="gap-auto grid w-full grid-cols-1 items-center justify-between md:grid-cols-[1fr_1fr]">
          {/* Description */}
          <CSSLineReveal textClass="max-w-lg xl:max-w-[550px] text-left text-[20px] tracking-[0%]  font-light">
            {slice.primary.description}
          </CSSLineReveal>

          {/* CTA Buttons */}
          <div className="flex shrink-0 items-center gap-4 justify-self-end">
            <Button asChild variant="outline" className="shrink-0">
              <PrismicNextLink field={slice.primary.cta1_link}>
                <span className="text-sm font-medium">
                  {slice.primary.cta1_label}
                </span>
                <div className="flex h-full w-full !flex-1 !shrink-0 items-center">
                  <Arrow
                    svgClass="!flex-1 !shrink-0 h-full w-full"
                    name="main"
                  />
                </div>
              </PrismicNextLink>
            </Button>

            <Button variant="outline" asChild>
              <PrismicNextLink field={slice.primary.cta2_link}>
                <span className="text-sm font-medium">
                  {slice.primary.cta2_label}
                </span>
                <Arrow svgClass="scale-125" name="bullet" />
              </PrismicNextLink>
            </Button>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
