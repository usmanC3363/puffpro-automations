import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import CSSLineReveal from "@/components/helper/CssLineReveal";

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
        "mb-24 mt-32 flex h-full flex-col place-items-center justify-center lg:mt-48",
      )}
    >
      <div className="flex max-w-4xl flex-col items-center justify-center gap-y-6 text-center xl:max-w-[900px]">
        {slice.primary.section_title !== null ? (
          <Badge
            variant="custom"
            className="fade-up py-0.5 text-lg font-medium"
          >
            {slice.primary.section_title}
          </Badge>
        ) : null}
        <CSSLineReveal textClass="heading-l line-clamp-2 xl:max-w-[780px] 2xl:max-w-full">
          {slice.primary.section_heading}
        </CSSLineReveal>
        <CSSLineReveal textClass="body-xxl">
          {slice.primary.section_description}
        </CSSLineReveal>
      </div>
    </Bounded>
  );
};

export default SectionContent;
