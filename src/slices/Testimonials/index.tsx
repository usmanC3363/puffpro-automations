import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { Handshake, Star } from "lucide-react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`my-12 flex h-full w-screen flex-col place-items-center justify-center gap-y-8`}
    >
      <div className="grid w-[100%] gap-6 md:grid-cols-2 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl">
        {slice.primary.testimonial_data.map(
          ({ statement, user_name, user_image, user_position }, index) => (
            // TESTIMONY CARD
            <div
              key={index}
              style={{
                transitionDelay: `${150 + index * 120}ms`,
              }}
              className="fade-up flex min-h-52 flex-col items-start gap-y-5 rounded-2xl border border-white/10 bg-[linear-gradient(to_top_left,rgba(37,74,155,0.25)_-10%,rgba(37,74,155,0.1)_30%,#ececec_70%)] p-5 dark:bg-[linear-gradient(to_top_left,rgba(37,74,155,0.25)_-10%,rgba(37,74,155,0.1)_30%,#0f0f0f_70%)] lg:p-7"
            >
              {/* REVIEW STARS */}
              <div className="flex gap-1">
                <Star className="size-4 fill-white outline-none lg:size-5" />
                <Star className="size-4 fill-white outline-none lg:size-5" />
                <Star className="size-4 fill-white outline-none lg:size-5" />
                <Star className="size-4 fill-white outline-none lg:size-5" />
                <Star className="size-4 fill-white outline-none lg:size-5" />
              </div>
              {/* REVIEW STATEMENT */}
              <span className="body-xxl">{statement}</span>
              {/* USER DATA */}
              <div className="flex h-full w-full items-center gap-x-4">
                {/* USER IMAGE */}
                <PrismicNextImage
                  field={user_image}
                  className="h-11 w-11 rounded-full object-cover"
                />
                {/* USER CREDENTIALS */}
                <div className="flex flex-col">
                  <h1 className="body-xxl">{user_name}</h1>
                  <span className="text-base font-light">{user_position}</span>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </Bounded>
  );
};

export default Testimonials;
