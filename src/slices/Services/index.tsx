import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import CSSLineReveal from "@/components/helper/CssLineReveal";
import { MyRichText } from "@/components/helper/RichText";
import { Arrow } from "@/components/helper/Arrow";
import { BookCallDialog } from "@/components/book-call-dialog";

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
        "my-44 flex h-full max-h-full flex-col place-items-center justify-center",
      )}
    >
      <div className="flex flex-col gap-y-4 md:gap-y-[7.5rem] lg:gap-y-32">
        {/* CARDS */}
        {slice.primary.services_data.map(
          (
            {
              iscardimgonleft,
              service_title,
              service_description,
              card_image,
              points,
            },
            index,
          ) => (
            <div
              key={index}
              className="grid h-full w-full gap-x-[14%] gap-y-20 lg:grid-cols-[1fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl"
            >
              <div
                className={`${iscardimgonleft ? "md:order-2" : "md:order-1"} flex flex-col gap-y-6`}
              >
                <CSSLineReveal textClass="text-[28px] xs:text-[32px] sm:text-[40px] leading-[130%] font-medium max-w-[90%] line-clamp-2">
                  {service_title}
                </CSSLineReveal>
                <div
                  className={`flex flex-col gap-y-8 ${iscardimgonleft ? "" : "md:pl-28"} `}
                >
                  <CSSLineReveal textClass="font-normal max-w-[85vw] xs:max-w-[70vw] text-[16px] tracking-wide text-mycolors-dark-grey dark:text-mycolors-grey leading-[150%]">
                    {service_description}
                  </CSSLineReveal>
                  <MyRichText
                    field={points}
                    components={{
                      list: ({ children }) => (
                        <ul className="list-none space-y-4">{children}</ul>
                      ),
                      listItem: ({ children }) => (
                        <li className="flex items-center gap-x-3 text-[16px] font-normal">
                          <Arrow name="bullet" />
                          {children}
                        </li>
                      ),
                    }}
                  />
                  <BookCallDialog />
                </div>
              </div>
              {/* SERVICE IMAGE */}
              <div
                className={`${iscardimgonleft ? "md:order-1" : "md:order-2"} relative h-full w-full max-md:h-[70%]`}
              >
                <PrismicNextImage
                  className="h-full w-full object-contain"
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
      <div className="flex flex-col gap-y-[7.5rem] lg:gap-y-16 1.5xl:gap-y-20">
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
                className={`${iscardonleft ? "md:order-1" : "md:order-2"} relative box-border h-full min-h-[360px] w-full rounded-xl`}
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
