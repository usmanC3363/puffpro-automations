"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MyRichText } from "@/components/helper/RichText";
import { Switch } from "@/components/ui/switch";
import { Arrow } from "@/components/helper/Arrow";

export type PricingProps = SliceComponentProps<Content.PricingSlice>;

const Pricing: FC<PricingProps> = ({ slice }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-16 flex h-full w-screen flex-col place-items-center justify-center gap-y-8"
    >
      {/* Toggle */}
      <span className="flex items-center justify-center">
        Monthly
        <Switch
          className="mx-4"
          checked={!isMonthly}
          onCheckedChange={() => setIsMonthly((prev) => !prev)}
        />
        Annually
      </span>

      {/* Pricing Grid */}
      <div className="grid h-full w-full justify-items-center gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl">
        {slice.primary.pricing_data.map(
          (
            {
              plan_title,
              plan_description,
              plan_details,
              monthly_price,
              annual_price,
              setup_fee,
            },
            index,
          ) => {
            const isPopular =
              plan_title?.trim().toLowerCase() === "professional";
            const isEnterprise =
              plan_title?.trim().toLowerCase() === "enterprise";

            return (
              <div
                // CARD
                key={index}
                style={{ transitionDelay: `${150 + index * 120}ms` }}
                className={`relative flex min-h-[30rem] w-full flex-col gap-y-5 rounded-2xl border border-mycolors-white pb-6 pt-3 shadow-lg max-lg:max-w-[30rem]`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <Badge
                    variant="custom"
                    className="absolute right-2.5 top-8 w-fit text-sm font-medium"
                  >
                    Popular
                  </Badge>
                )}

                <div className="flex flex-col gap-y-4 px-[18px]">
                  <div className="flex gap-x-2">
                    {/* PRICING */}
                    <h2 className="text-[72px] font-medium">
                      {isEnterprise
                        ? "Custom"
                        : isMonthly
                          ? `$${monthly_price}`
                          : `$${annual_price}`}
                      {!isEnterprise && (
                        <span className="ml-1 text-[16px] font-normal">
                          /{isMonthly ? "Month" : "Year"}
                        </span>
                      )}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-y-3 pb-4">
                    <p className="text-[20px] font-medium">
                      {/* PLAN TITLE */}
                      {plan_title} Plan
                    </p>

                    <p className="text-[16px] text-mycolors-dark-grey dark:text-mycolors-grey max-1.5xl:min-h-12">
                      {/* PLAN DESCRIPTION */}
                      {plan_description}
                    </p>

                    <span className="">
                      {/* SETUP_FEE */}
                      <span className="font-normal">Setup Fee:</span>{" "}
                      {setup_fee}
                    </span>
                  </div>
                </div>

                {/* PLAN DETAILS */}
                <div className="flex flex-col gap-y-2 border-t border-mycolors-white px-[18px] pt-9">
                  <MyRichText
                    field={plan_details}
                    components={{
                      list: ({ children }) => (
                        <ul className="list-none space-y-3.5">{children}</ul>
                      ),
                      listItem: ({ children }) => (
                        <li
                          className={`flex items-center gap-x-4 text-base font-normal ${index === 0 || index === 1 ? "last-of-type:text-mycolors-dark-grey" : ""}`}
                        >
                          <Arrow name="bullet" />
                          {children}
                        </li>
                      ),
                      paragraph: ({ children }) => (
                        <p className="">{children}</p>
                      ),
                    }}
                  />
                </div>
              </div>
            );
          },
        )}
      </div>
    </Bounded>
  );
};

export default Pricing;
