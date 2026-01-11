import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import CSSLineReveal from "@/components/helper/CssLineReveal";
import { MyRichText } from "@/components/helper/rich-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Arrow } from "@/components/helper/Arrow";

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
      <div className="grid grid-cols-1 gap-y-4">
        {/* SECTION CONTENT */}
        <div className="flex flex-col gap-y-8">
          {/* SECTION TITLE with border */}
          <div className="flex w-full justify-between border-b border-mycolors-dark-grey pb-3">
            <div className="flex gap-x-2">
              {/* WIP ADD ICON */}
              <h3 className="text-[16px]">{slice.primary.section_title}</h3>
            </div>
            <span className="">Lorem Ipsum</span>
          </div>
          <div className="">
            <CSSLineReveal textClass="w-fit max-w-[78%] text-[80px] font-medium capitalize leading-[125%] tracking-[-0.0115em]">
              {slice.primary.section_heading}
            </CSSLineReveal>
          </div>
        </div>
        <div className="flex max-w-[41%] flex-col gap-y-9 justify-self-end text-base font-normal leading-[150%]">
          {slice.primary.section_description.length !== 0 && (
            <MyRichText field={slice.primary.section_description} />
          )}
          <Button asChild variant="outline" className="w-fit">
            <Link href="/">
              <span className="pb-0.5 text-base font-normal">Contact Now</span>
              <div className="flex items-center">
                <Arrow svgClass="h-full w-full" name="main" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </Bounded>
  );
};

export default SectionContent;
