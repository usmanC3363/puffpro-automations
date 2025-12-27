import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { Button } from "@/components/ui/button";
import { PrismicNextLink } from "@prismicio/next";
import { GoArrowUpRight } from "react-icons/go";
import CSSLineReveal from "@/components/helper/CssLineReveal";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta: FC<CtaProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`my-12 flex h-full w-full flex-col place-items-center justify-center gap-y-8`}
    >
      <div
        className={`relative z-10 my-12 flex h-full w-full flex-col place-items-center justify-center gap-y-8 overflow-hidden rounded-2xl p-16 text-center lg:h-[400px] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl`}
      >
        <div className="pointer-events-none absolute -inset-0 -z-10 min-w-full rounded-2xl bg-[linear-gradient(to_bottom_right,rgba(37,74,155,0.4)_0%,rgba(100,100,100,0.1)_27%,rgba(100,100,100,0.1)_74%,rgba(37,74,155,0.4)_100%)] shadow-lg" />
        <CSSLineReveal textClass="heading-l max-w-[35rem]">
          {slice.primary.cta_heading}
        </CSSLineReveal>
        <CSSLineReveal textClass="body-xxl">
          {slice.primary.cta_subheading}
        </CSSLineReveal>
        <Button asChild className="fade-up text-lg">
          <PrismicNextLink
            field={slice.primary.cta_link}
            className="flex items-center gap-x-2"
          >
            {slice.primary.cta_button}
            <GoArrowUpRight className="scale-110" />
          </PrismicNextLink>
        </Button>
      </div>
    </Bounded>
  );
};

export default Cta;
