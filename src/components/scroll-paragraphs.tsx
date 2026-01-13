"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollHighlightText from "./scroll-highlight-text";
import { KeyTextField } from "@prismicio/client";

interface ScrollParagraphsProps {
  content_1?: KeyTextField;
  content_2?: KeyTextField;
}

export const ScrollParagraphs = ({
  content_1,
  content_2,
}: ScrollParagraphsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const p1Progress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const p2Progress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  return (
    <div ref={containerRef} className="min-w-full">
      <ScrollHighlightText
        text={content_1}
        progress={p1Progress}
        highlights={["inconsistent revenue, disappearing customers."]}
        className="text-[48px] font-medium leading-[115%] tracking-tight lg:text-[56px] 1.5xl:text-[60px]"
      />

      <div className="my-12" />

      <ScrollHighlightText
        text={content_2}
        progress={p2Progress}
        highlights={["nobody was building solutions for their needs."]}
        className="text-[48px] font-medium leading-[115%] tracking-tight lg:text-[56px] xl:text-[60px]"
      />
    </div>
  );
};
