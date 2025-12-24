import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/helper/Bounded";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { PrismicNextImage } from "@prismicio/next";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import CSSLineReveal from "@/components/helper/CssLineReveal";

/**
 * Props for `Process`.
 */
export type ProcessProps = SliceComponentProps<Content.ProcessSlice>;

/**
 * Component for "Process" Slices.
 */
const Process: FC<ProcessProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "my-12 flex h-full flex-col place-items-center justify-center gap-y-8",
      )}
    >
      <div className="grid h-full gap-8 md:grid-cols-2">
        {slice.primary.card_data.map(
          ({ card_heading, card_description, cardimg, order }, index) => (
            <Card
              key={index}
              style={{
                transitionDelay: `${150 + index * 120}ms`,
              }}
              className="fade-up bg-mycolors-cardbglight flex h-full flex-col gap-y-5 rounded-md border p-5 dark:bg-mycolors-cardbg lg:p-8"
            >
              <Badge
                variant="custom"
                className={clsx("body-m fade-up delay-100")}
              >
                Step {order}
              </Badge>

              <CardTitle className="card-title">
                <CSSLineReveal delay={0.3}>{card_heading}</CSSLineReveal>
              </CardTitle>
              <CardDescription className="card-content">
                <CSSLineReveal delay={0.3}>{card_description}</CSSLineReveal>
              </CardDescription>
              <div className="lg: relative h-[180px] w-full rounded-sm border border-white/20 lg:h-48">
                <PrismicNextImage
                  field={cardimg}
                  className="absolute h-full w-full rounded-sm object-cover object-center"
                  alt=""
                />
              </div>
            </Card>
          ),
        )}
      </div>
    </Bounded>
  );
};

export default Process;
