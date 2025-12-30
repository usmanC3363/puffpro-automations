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
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        "my-44 flex h-full max-h-full flex-col place-items-center justify-center gap-y-24",
      )}
    >
      <div className="grid grid-cols-1 gap-y-4">
        <div className="flex flex-col gap-y-8">
          {/* SECTION TITLE with border */}
          <div className="flex w-full justify-between border-b border-mycolors-white pb-3">
            <div className="flex gap-x-2">
              {/* <div className="">
                <Arrow name="link" svgClass="size-5" />
              </div> */}
              <h3 className="text-[16px]">{slice.primary.title}</h3>
            </div>
            <span className="">Lorem Ipsum</span>
          </div>
          <div className="">
            <h1 className="w-fit max-w-[78%] text-[80px] font-medium capitalize leading-[125%] tracking-[-0.0115em]">
              {slice.primary.heading}
            </h1>
          </div>
        </div>
        <div className="flex max-w-[41%] flex-col gap-y-9 justify-self-end text-base font-light leading-[150%]">
          <MyRichText field={slice.primary.description} />
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

      <div className="flex flex-col gap-y-[7.5rem] lg:gap-y-36">
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
              className="grid h-full w-full gap-x-[14%] gap-y-12 lg:grid-cols-[1fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl"
            >
              <div
                className={`${iscardimgonleft ? "md:order-2" : "md:order-1"} flex flex-col gap-y-6`}
              >
                <CSSLineReveal textClass="text-[40px] leading-[130%] font-medium max-w-[90%] line-clamp-2">
                  {service_title}
                </CSSLineReveal>
                <div
                  className={`flex flex-col gap-y-8 ${iscardimgonleft ? "" : "pl-28"} `}
                >
                  <CSSLineReveal textClass="font-light text-[16px] tracking-wide text-mycolors-grey leading-[150%]">
                    {service_description}
                  </CSSLineReveal>
                  <MyRichText
                    field={points}
                    components={{
                      list: ({ children }) => (
                        <ul className="list-none space-y-4">{children}</ul>
                      ),
                      listItem: ({ children }) => (
                        <li className="flex items-center gap-x-3 text-base font-normal">
                          <Arrow name="bullet" />
                          {children}
                        </li>
                      ),
                    }}
                  />
                  <Button asChild variant="outline" className="w-fit">
                    <Link href="/">
                      <span className="pb-0.5 text-base font-normal">
                        Contact Now
                      </span>
                      <div className="flex items-center">
                        <Arrow svgClass="h-full w-full" name="main" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
              {/* SERVICE IMAGE */}
              <div
                className={`${iscardimgonleft ? "md:order-1" : "md:order-2"} relative h-full w-full`}
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
