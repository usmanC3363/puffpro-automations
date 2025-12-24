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

export type PricingProps = SliceComponentProps<Content.PricingSlice>;

const Pricing: FC<PricingProps> = ({ slice }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-12 flex h-full w-screen flex-col place-items-center justify-center gap-y-8"
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
      <div className="grid h-full w-full justify-items-center gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl">
        {slice.primary.pricing_data.map(
          (
            {
              plan_title,
              plan_description,
              plan_details,
              monthly_price,
              annual_price,
            },
            index,
          ) => {
            const isPopular =
              plan_title?.trim().toLowerCase() === "professional";
            const isEnterprise =
              plan_title?.trim().toLowerCase() === "enterprise";

            return (
              <div
                key={index}
                style={{ transitionDelay: `${150 + index * 120}ms` }}
                className={`${
                  index % 2 === 0
                    ? "bg-[radial-gradient(ellipse_80%_60%_at_bottom,rgba(37,74,155,0.3)_0%,rgba(37,74,155,0.145)_35%,#ececec_75%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_bottom,rgba(37,74,155,0.3)_0%,rgba(37,74,155,0.145)_35%,#0f0f0f_75%)]"
                    : "bg-[radial-gradient(ellipse_80%_60%_at_top,rgba(37,74,155,0.3)_0%,rgba(37,74,155,0.145)_35%,#ececec_75%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_top,rgba(37,74,155,0.3)_0%,rgba(37,74,155,0.145)_35%,#0f0f0f_75%)]"
                } fade-up relative flex min-h-[30rem] flex-col gap-y-5 rounded-2xl border border-white/10 px-5 pb-6 pt-7 shadow-lg lg:px-7 max-lg:max-w-[30rem]`}
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

                <div className="flex flex-col gap-y-4">
                  <div className="flex gap-x-3">
                    <Rocket className="size-8" />
                    <h1 className="text-2xl font-medium">{plan_title}</h1>
                  </div>

                  {/* Pricing */}
                  <span className="heading-m">
                    {isEnterprise
                      ? "Custom"
                      : isMonthly
                        ? `$${monthly_price}`
                        : `$${annual_price}`}
                    {!isEnterprise && (
                      <span className="body-xxl ml-1">
                        /{isMonthly ? "month" : "year"}
                      </span>
                    )}
                  </span>

                  <span>{plan_description}</span>
                </div>

                <Button
                  className="text-base"
                  variant={isPopular ? "primary" : "secondary"}
                >
                  Choose this plan
                </Button>

                <div className="flex flex-col gap-y-2 px-1 pt-2">
                  <span className="w-fit">What&apos;s Included</span>
                  <MyRichText
                    field={plan_details}
                    components={{
                      list: ({ children }) => (
                        <ul className="list-disc pl-6">{children}</ul>
                      ),
                      listItem: ({ children }) => (
                        <li className="py-2">{children}</li>
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
