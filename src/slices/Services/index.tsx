import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import CSSLineReveal from "@/components/helper/CssLineReveal";
import { MyRichText } from "@/components/helper/RichText";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services: FC<ServicesProps> = ({ slice }) => {
  const services = slice.primary.services_data;
  return slice.variation === "default" ? (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "my-12 flex h-full flex-col place-items-center justify-center gap-y-8",
      )}
    >
      <div className="flex flex-col gap-y-[7.5rem] lg:gap-y-24">
        {slice.primary.services_data.map(
          (
            {
              iscardonleft,
              service_label,
              service_title,
              service_description,
              service_tag,
              service_tag2,
              service_tag3,
              card_image,
            },
            index,
          ) => (
            <div
              key={index}
              className="grid h-full w-full gap-x-20 gap-y-12 md:grid-cols-2 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl"
            >
              <div
                className={`${iscardonleft ? "md:order-2" : "md:order-1"} flex flex-col gap-y-6`}
              >
                <Badge
                  variant="custom"
                  className={clsx("fade-up py-0.5 text-base font-medium")}
                >
                  {service_label}
                </Badge>
                <CSSLineReveal textClass="heading-m">
                  {service_title}
                </CSSLineReveal>
                <CSSLineReveal textClass="card-content">
                  {service_description}
                </CSSLineReveal>
                <div className="flex gap-2">
                  <Badge
                    variant="custom"
                    className={clsx("fade-up py-0.5 text-sm font-normal")}
                  >
                    {service_tag}
                  </Badge>
                  <Badge
                    variant="custom"
                    className={clsx("fade-up py-0.5 text-sm font-normal")}
                  >
                    {service_tag2}
                  </Badge>

                  {service_tag3 !== null ? (
                    <Badge
                      variant="custom"
                      className={clsx("fade-up py-0.5 text-sm font-normal")}
                    >
                      {service_tag3}
                    </Badge>
                  ) : null}
                </div>
              </div>
              <div
                className={`${iscardonleft ? "slide-in-left md:order-1" : "slide-in-right md:order-2"} relative box-border h-full min-h-[360px] w-full rounded-lg bg-mycolors-cardbglight dark:bg-mycolors-cardbg`}
              >
                <PrismicNextImage
                  className="absolute bottom-0 left-[5%] h-[90%] w-[90%] rounded-3xl object-contain"
                  field={card_image}
                />
              </div>
            </div>
          ),
        )}
      </div>
    </Bounded>
  ) : (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-12 flex h-full flex-col place-items-center justify-center gap-y-8"
    >
      <div className="flex flex-col gap-y-[7.5rem] lg:gap-y-24">
        {slice.primary.services_data.map(
          (
            {
              iscardonleft,
              service_label,
              service_title,
              service_description,
              service_image,
            },
            index,
          ) => (
            <div
              key={index}
              className="grid h-full w-full gap-x-20 gap-y-12 md:grid-cols-2 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl"
            >
              <div
                className={`${iscardonleft ? "md:order-2" : "md:order-1"} flex flex-col gap-y-6`}
              >
                <Badge
                  variant="custom"
                  className={clsx(
                    "fade-up py-0.5 text-lg font-medium uppercase",
                  )}
                >
                  {index + 1}.&nbsp;{service_label}
                </Badge>
                <CSSLineReveal textClass="heading-m">
                  {service_title}
                </CSSLineReveal>
                {/* Service Description */}
                <div className="flex flex-col gap-y-2">
                  <span className="text-lg">What You get</span>
                  <MyRichText
                    field={service_description}
                    components={{
                      listItem: ({ children }) => (
                        <li className="my-2 2xl:text-lg">{children}</li>
                      ),
                    }}
                  />
                </div>
              </div>
              <div
                className={`${iscardonleft ? "slide-in-left md:order-1" : "slide-in-right md:order-2"} relative box-border h-full min-h-[360px] w-full rounded-xl bg-mycolors-cardbglight dark:bg-mycolors-cardbg`}
              >
                {/* <div className="absolute inset-0 rounded-xl bg-black/50" /> */}
                <PrismicNextImage
                  className="absolute bottom-4 left-[5%] h-[90%] w-[90%] rounded-xl object-contain"
                  field={service_image}
                />
              </div>
            </div>
          ),
        )}
      </div>
    </Bounded>
  );
};

export default Services;
