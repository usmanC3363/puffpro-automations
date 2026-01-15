import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import clsx from "clsx";
import CSSLineReveal from "@/components/helper/CssLineReveal";
import { MyRichText } from "@/components/helper/rich-text";

import { Arrow } from "@/components/helper/Arrow";
import { BookCallDialog } from "@/components/book-call-dialog";

/**
 * Props for `SectionContent`.
 */
export type SectionContentProps =
  SliceComponentProps<Content.SectionContentSlice>;

/**
 * Component for "SectionContent" Slices.
 */
const SectionContent: FC<SectionContentProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "mb-16 mt-36 flex h-full flex-col place-items-center justify-center",
      )}
    >
      <div
        className={`grid w-full grid-cols-1 gap-y-[3.75rem] ${slice.primary.section_description.length === 0 && "gap-y-16"}`}
      >
        {/* SECTION CONTENT */}
        <div className={`flex flex-col gap-y-8`}>
          {/* SECTION TITLE with border */}

          <div className="flex w-full justify-between border-b border-mycolors-dark-grey pb-3">
            <div className="flex items-center gap-x-2.5">
              <Arrow name="section" />
              <h3 className="text-[16px]">{slice.primary.section_title}</h3>
            </div>
            <span className="">Lorem Ipsum</span>
          </div>

          {/* HEADING */}
          <div className="">
            <CSSLineReveal textClass="w-fit xl:max-w-[60%] text-[42px] sm:text-[62px] 1.5xl:text-[80px] font-medium capitalize leading-[125%] tracking-[-0.0115em]">
              {slice.primary.section_heading}
            </CSSLineReveal>
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="flex flex-col gap-y-9 justify-self-end text-base font-normal leading-[150%] xs:max-w-[70%] lg:max-w-[41%]">
          {slice.primary.section_description.length !== 0 && (
            <MyRichText
              field={slice.primary.section_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-[16px] font-normal leading-[150%] text-mycolors-black/85 dark:text-mycolors-grey xs:text-[18px] sm:text-[20px] md:text-[22px]">
                    {children}
                  </p>
                ),
              }}
            />
          )}
          <BookCallDialog />
        </div>
      </div>
    </Bounded>
  );
};

export default SectionContent;
