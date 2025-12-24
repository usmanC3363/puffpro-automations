"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { MyRichText } from "@/components/helper/RichText";

export type PlanDetailsProps = SliceComponentProps<Content.PlanDetailsSlice>;

const PlanDetails: FC<PlanDetailsProps> = ({ slice }) => {
  // Extract primary content
  const featuresList = slice.primary.features; // RichText field with bullet points
  const plans = slice.primary.plan_details; // 3 items: Starter, Professional, Enterprise

  // Prepare plan mapping
  const starter = plans.find(
    (p) => p.plan_title?.trim().toLowerCase() === "starter",
  );
  const professional = plans.find(
    (p) => p.plan_title?.trim().toLowerCase() === "professional",
  );
  const enterprise = plans.find(
    (p) => p.plan_title?.trim().toLowerCase() === "enterprise",
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      className="my-16 w-full overflow-x-auto"
    >
      <div className="mx-auto w-full overflow-x-auto 2xl:max-w-screen-2xl">
        {/* ✅ FORCE FULL TABLE WIDTH FOR SCROLLING */}
        <div className="min-w-[750px] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
          {/* HEADER */}
          <div className="grid grid-cols-[15rem_2fr_2fr_2fr] border-b border-black/10 bg-white/5 backdrop-blur-sm dark:border-white/10 xl:grid-cols-[18rem_1fr_1fr_1fr]">
            <div className="py-4 pl-6 text-xl font-semibold">Features</div>
            <div className="py-4 text-xl font-medium">
              {starter?.plan_title}
            </div>
            <div className="py-4 text-xl font-medium">
              {professional?.plan_title}
            </div>
            <div className="py-4 text-xl font-medium">
              {enterprise?.plan_title}
            </div>
          </div>

          {/* BODY */}
          <div>
            {featuresList?.map((item: any, index: number) => (
              <div
                key={index}
                className="grid grid-cols-[15rem_2fr_2fr_2fr] border-b border-black/5 last:border-none dark:border-white/5 xl:grid-cols-[18rem_1fr_1fr_1fr]"
              >
                {/* FEATURE NAME */}
                <div className="py-3 pl-6 pr-4 text-sm 2xl:text-base">
                  <MyRichText
                    field={[item]}
                    components={{
                      list: ({ children }) => (
                        <ul className="list-none pl-0">{children}</ul>
                      ),
                      listItem: ({ children }) => (
                        <li className="my-0">
                          {/* <li className="my-0 w-44 rounded-md border px-1.5 py-1"> */}
                          {children}
                        </li>
                      ),
                    }}
                  />
                </div>

                {/* STARTER VALUE */}
                <div className="flex items-center py-3 text-sm dark:text-white/90 2xl:text-base">
                  <MyRichText
                    field={
                      starter?.plan_details?.[index]
                        ? [starter.plan_details[index]]
                        : []
                    }
                    components={{
                      list: ({ children }) => (
                        <ul className="list-none pl-0">{children}</ul>
                      ),
                      listItem: ({ children }) => (
                        <li className="my-0">{children}</li>
                      ),
                    }}
                  />
                </div>

                {/* PROFESSIONAL VALUE */}
                <div className="flex items-center py-3 text-sm dark:text-white/90 2xl:text-base">
                  <MyRichText
                    field={
                      professional?.plan_details?.[index]
                        ? [professional.plan_details[index]]
                        : []
                    }
                    components={{
                      list: ({ children }) => (
                        <ul className="list-none pl-0">{children}</ul>
                      ),
                      listItem: ({ children }) => (
                        <li className="my-0">{children}</li>
                      ),
                    }}
                  />
                </div>

                {/* ENTERPRISE VALUE */}
                <div className="flex items-center py-3 text-sm dark:text-white/90 2xl:text-base">
                  <MyRichText
                    field={
                      enterprise?.plan_details?.[index]
                        ? [enterprise.plan_details[index]]
                        : []
                    }
                    components={{
                      list: ({ children }) => (
                        <ul className="list-none pl-0">{children}</ul>
                      ),
                      listItem: ({ children }) => (
                        <li className="my-0">{children}</li>
                      ),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE MESSAGE */}
      <div className="mt-4 text-center text-sm dark:text-white/60 md:hidden 2xl:text-base">
        Swipe horizontally to view →
      </div>
    </Bounded>
  );
};

export default PlanDetails;
