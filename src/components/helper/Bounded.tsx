import React from "react";
import clsx from "clsx";
import { paddingClass } from "@/app/utils/constants";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          `${paddingClass}`,
          // isSticky ? "sticky top-24 -z-10 h-[110vh]" : "z-30", // <== sticky scroll behavior
          className,
        )}
        {...restProps}
      >
        {children}
      </Comp>
    );
  },
);

Bounded.displayName = "Bounded";
export default Bounded;
