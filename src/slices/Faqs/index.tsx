import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { FaqItem } from "@/components/FaqItem";

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs: FC<FaqsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex h-full w-full flex-col place-items-center justify-center gap-y-8`}
    >
      <div
        className={`relative flex h-full flex-col place-items-center justify-center gap-y-8 overflow-hidden xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl`}
      >
        <div className="pointer-events-none absolute inset-0 min-w-full bg-[linear-gradient(to_bottom_right,rgba(37,74,155,0.01)_35%,rgba(37,74,155,0.075)_50%,rgba(37,74,155,0.075)_60%,rgba(37,74,155,0.01)_65%)] shadow-lg" />

        {slice.primary.faq_data.map(({ question, answer }, index) => (
          <React.Fragment key={index}>
            <FaqItem index={index} question={question} answer={answer} />
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default Faqs;
