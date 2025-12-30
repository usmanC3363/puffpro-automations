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
      className={`mb-36 mt-20 flex h-full w-full flex-col place-items-end justify-center gap-y-8`}
    >
      <div
        className={`relative flex h-full flex-col place-items-center justify-center overflow-hidden lg:w-[75%]`}
      >
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
