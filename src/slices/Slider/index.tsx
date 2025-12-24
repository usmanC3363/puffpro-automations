import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import CSSLineReveal from "@/components/helper/CssLineReveal";

export type SliderProps = SliceComponentProps<Content.SliderSlice>;

const Slider: FC<SliderProps> = ({ slice }) => {
  const logos = slice.primary.logoimages;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "relative my-10 flex min-h-36 flex-col items-center justify-between",
      )}
    >
      <CSSLineReveal textClass="heading-m">{slice.primary.title}</CSSLineReveal>

      {/* Outer container remains padded, but inner slider stretches full width */}
      <div className="relative h-[7rem] min-w-[100vw] overflow-hidden">
        <div className="absolute -bottom-4 left-0 right-0 w-screen overflow-hidden">
          <div className="slider-track flex gap-28 whitespace-nowrap px-4">
            {[...logos, ...logos].map((logo, id) => (
              <div className="flex items-center gap-20 rounded-md" key={id}>
                <div className="relative h-16 w-40 flex-shrink-0">
                  <PrismicNextImage
                    field={logo.logoimg}
                    alt=""
                    className="h-full w-full object-contain object-center transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Slider;
