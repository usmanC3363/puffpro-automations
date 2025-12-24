import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { Handshake } from "lucide-react";
import clsx from "clsx";

/**
 * Props for `Benefits`.
 */
export type BenefitsProps = SliceComponentProps<Content.BenefitsSlice>;

/**
 * Component for "Benefits" Slices.
 */
const Benefits: FC<BenefitsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        `my-12 flex h-full w-screen flex-col place-items-center justify-center gap-y-8 xl:px-[60px]`,
      )}
    >
      <div className="grid gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl">
        {slice.primary.benefits_data.map(
          ({ benefit_heading, benefit_description, benefit_icon }, index) => (
            <div
              key={index}
              style={{
                transitionDelay: `${150 + index * 120}ms`,
              }}
              className="fade-up flex min-h-56 flex-col items-start justify-center gap-y-[24px] rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#ececec_65%)] p-5 dark:bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#0f0f0f_65%)] lg:p-6"
            >
              {/* <PrismicNextImage
                field={benefit_icon}
                className="h-10 object-cover"
              /> */}
              <Handshake className="ml-1 size-8" />
              <div className="flex flex-col gap-y-2 lg:gap-y-2.5">
                <h1 className="card-title">{benefit_heading}</h1>
                <span className="card-content">{benefit_description}</span>
              </div>
            </div>
          ),
        )}
      </div>
    </Bounded>
  );
};

export default Benefits;
