import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import clsx from "clsx";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ComplainceBadges`.
 */
export type ComplainceBadgesProps =
  SliceComponentProps<Content.ComplainceBadgesSlice>;

/**
 * Component for "ComplainceBadges" Slices.
 */
const ComplainceBadges: FC<ComplainceBadgesProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        `my-12 flex h-full w-screen flex-col place-items-center justify-center gap-y-8 xl:px-[60px]`,
      )}
    >
      <div className="grid w-full max-w-4xl grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-4 xl:justify-items-center xl:place-self-center 2xl:max-w-6xl 2xl:gap-x-0">
        {slice.primary.badges.map((badge, index) => (
          <div key={index} className="relative w-32 place-self-center 2xl:w-36">
            <PrismicNextImage
              field={badge.badge}
              className="dark:grayscale-20 h-fit w-full object-cover"
            />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default ComplainceBadges;
