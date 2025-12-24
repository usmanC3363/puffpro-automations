import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import CSSLineReveal from "@/components/helper/CssLineReveal";
import { MyRichText } from "@/components/helper/RichText";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies: FC<CaseStudiesProps> = ({ slice }) => {
  return slice.variation === "default" ? (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`my-12 flex h-full w-screen flex-col place-items-center justify-center gap-y-8`}
    >
      <div className="flex flex-col gap-y-28">
        {slice.primary.casestudy_data.map(
          (
            {
              iscardonleft,
              brand_logo_image,
              case_heading,
              case_study_image,
              case_description,
              impact_point_1,
              impact_point_2,
              impact_point_3,
              impact_point_4,
            },
            index,
          ) => (
            <div
              key={index}
              className="grid h-full w-full gap-x-20 gap-y-20 md:grid-cols-2 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl"
            >
              <div
                className={`md:${iscardonleft ? "order-1" : "order-2"} flex flex-col gap-y-8`}
              >
                <div>
                  <PrismicNextImage
                    className="h-fit w-fit min-w-24 rounded-md object-cover"
                    field={brand_logo_image}
                  />
                </div>
                <div className="flex flex-col gap-y-5">
                  <CSSLineReveal textClass="text-3xl font-semibold">
                    {case_heading}
                  </CSSLineReveal>
                  <CSSLineReveal textClass="text-sm lg:text-base">
                    {case_description}
                  </CSSLineReveal>

                  <>
                    {impact_point_1 !== null && (
                      <span className="fade-up text-lg">Impact :</span>
                    )}
                    <ul className="flex list-disc flex-col gap-2 pl-8">
                      {impact_point_1 !== null && (
                        <li className="fade-up delay-0">{impact_point_1}</li>
                      )}
                      {impact_point_2 !== null && (
                        <li className="fade-up delay-75">{impact_point_2}</li>
                      )}
                      {impact_point_3 !== null && (
                        <li className="fade-up delay-100">{impact_point_3}</li>
                      )}
                      {impact_point_4 !== null && (
                        <li className="fade-up delay-150">{impact_point_4}</li>
                      )}
                    </ul>
                  </>
                </div>
              </div>
              <div
                className={`md:${iscardonleft ? "order-2" : "order-1"} slide-in-left relative box-border flex h-full min-h-96 w-full rounded-md bg-mycolors-cardbg xl:min-h-[40vh]`}
              >
                <PrismicNextImage
                  className="absolute h-full w-full rounded-md object-cover object-center"
                  field={case_study_image}
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
      className={`flex h-full w-screen flex-col place-items-center justify-center gap-y-8 py-11`}
    >
      <div className="flex flex-col gap-y-28">
        {slice.primary.casestudy_data.map(
          (
            {
              iscardonleft,
              brand_logo_image,
              case_heading,
              case_study_image,
              case_description,
              solution,
              results,
              process,
              testimonial,
            },
            index,
          ) => (
            <div key={index} className="flex flex-col gap-y-20">
              <div className="grid h-full w-full gap-x-20 gap-y-20 md:grid-cols-2 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl">
                <div
                  className={`md:${iscardonleft ? "order-1" : "order-2"} flex flex-col gap-y-8`}
                >
                  <div>
                    <PrismicNextImage
                      className="h-fit w-fit min-w-24 rounded-md object-cover"
                      field={brand_logo_image}
                    />
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <CSSLineReveal textClass="text-3xl font-semibold">
                      {case_heading}
                    </CSSLineReveal>
                    <CSSLineReveal textClass="text-sm lg:text-base">
                      {case_description}
                    </CSSLineReveal>
                  </div>
                </div>
                <div
                  className={`md:${iscardonleft ? "order-2" : "order-1"} slide-in-left relative box-border flex h-full min-h-96 w-full rounded-md bg-mycolors-cardbg xl:min-h-[40vh]`}
                >
                  <PrismicNextImage
                    className="absolute h-full w-full rounded-md object-cover object-center"
                    field={case_study_image}
                  />
                </div>
              </div>
              <div className="grid gap-x-10 gap-y-10 border-b-2 border-mycolors-border/20 pb-24 lg:grid-cols-2">
                <div className="rounded-lg bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#ececec_65%)] p-6 shadow-lg backdrop-blur-lg dark:bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#0f0f0f_65%)]">
                  {solution !== null && (
                    <MyRichText
                      field={solution}
                      components={{
                        heading2: ({ children }) => (
                          <h2 className="pb-3 text-xl font-semibold 2xl:text-2xl">
                            {children}
                          </h2>
                        ),
                      }}
                    />
                  )}
                </div>
                <div className="rounded-lg bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#ececec_65%)] p-6 shadow-lg backdrop-blur-lg dark:bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#0f0f0f_65%)]">
                  {process !== null && (
                    <MyRichText
                      field={process}
                      components={{
                        heading2: ({ children }) => (
                          <h2 className="pb-3 text-xl font-semibold 2xl:text-2xl">
                            {children}
                          </h2>
                        ),
                      }}
                    />
                  )}
                </div>
                <div className="rounded-lg bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#ececec_65%)] p-6 shadow-lg backdrop-blur-lg dark:bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#0f0f0f_65%)]">
                  {results !== null && (
                    <MyRichText
                      field={results}
                      components={{
                        heading2: ({ children }) => (
                          <h2 className="pb-3 text-xl font-semibold 2xl:text-2xl">
                            {children}
                          </h2>
                        ),
                      }}
                    />
                  )}
                </div>
                <div className="rounded-lg bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#ececec_65%)] p-6 shadow-lg backdrop-blur-lg dark:bg-[radial-gradient(circle_at_bottom,rgba(37,74,155,0.35)_0%,#0f0f0f_65%)]">
                  {testimonial !== null && (
                    <MyRichText
                      field={testimonial}
                      components={{
                        heading2: ({ children }) => (
                          <h2 className="pb-3 text-xl font-semibold 2xl:text-2xl">
                            {children}
                          </h2>
                        ),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </Bounded>
  );
};

export default CaseStudies;
