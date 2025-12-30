"use client";

import { KeyTextField } from "@prismicio/client";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Arrow } from "./helper/Arrow";

interface FaqItemProps {
  index: number;
  question: KeyTextField;
  answer: KeyTextField;
}

export const FaqItem = ({ index, question, answer }: FaqItemProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      style={{
        transitionDelay: `${150 + index * 120}ms`,
      }}
      // [&:not(:first-of-type)]:border-b-mycolors-white
      className={`${openIndex === index ? "border-b-mycolors-white" : "border-mycolors-dark-grey"} w-full border-b-[0.5px] py-9 transition-all duration-200 ease-linear first-of-type:border-t`}
    >
      <button
        type="button"
        onClick={() => toggleItem(index)}
        className="flex w-full items-center justify-between gap-x-[5.5rem] text-left"
      >
        <span className="w-6 text-[20px] font-medium">0{index}</span>
        <span
          className={`flex-1 text-[20px] font-medium transition-colors duration-300 ${
            openIndex === index ? "" : ""
          }`}
        >
          {question}
        </span>
        {openIndex === index ? <Arrow name="minus" /> : <Arrow name="plus" />}
      </button>

      <div
        className={`overflow-hidden pl-28 transition-all duration-200 ease-linear ${
          openIndex === index
            ? "mt-3 max-h-40 opacity-100"
            : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <p className="max-w-[34.5rem] text-[16px] font-normal tracking-wide text-mycolors-grey">
          {answer}
        </p>
      </div>
    </div>
  );
};
