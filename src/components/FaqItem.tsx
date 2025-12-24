"use client";

import { KeyTextField } from "@prismicio/client";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

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
      className={`fade-up bg-mycolors-cardbglight w-full rounded-md border border-white/20 p-5 transition-all duration-300 dark:bg-mycolors-cardbg`}
    >
      <button
        type="button"
        onClick={() => toggleItem(index)}
        className="flex w-full items-center justify-between text-left"
      >
        <span
          className={`font-sembold text-base transition-colors duration-300 sm:text-lg lg:text-xl ${
            openIndex === index ? "dark:text-white" : "dark:text-gray-200"
          }`}
        >
          {question}
        </span>
        <GoArrowRight
          className={`text-gray-400 transition-transform duration-300 ease-in-out ${
            openIndex === index ? "rotate-90 dark:text-white" : ""
          }`}
          size={22}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex === index
            ? "mt-3 max-h-40 opacity-100"
            : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <p className="text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};
