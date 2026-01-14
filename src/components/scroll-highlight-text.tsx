"use client";

import { KeyTextField } from "@prismicio/client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useRef, useMemo } from "react";

type Props = {
  text?: string | KeyTextField;
  className?: string;
  transitionStartIndex?: number;
  highlights?: string[];
  progress: MotionValue<number>;
};

const COLORS = {
  darkGrey: "#4C4C4C",
  black: "#191919",
  white: "#ffffff",
  grey: "#C5C5C3",
  blue: "#3375F5",
};

export const EachCharacter = ({
  char,
  start,
  end,
  progress,
  charIndex,
  transitionStartIndex,
  highlightRanges,
}: any) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const isHighlighted = highlightRanges?.some(
    (range: any) => charIndex >= range.start && charIndex < range.end,
  );

  // Base colors
  const startColor = isDark ? COLORS.darkGrey : COLORS.darkGrey;

  const endColor = isHighlighted
    ? COLORS.blue
    : isDark
      ? COLORS.white
      : COLORS.black;

  const animatedColor = useTransform(progress, (v) => {
    if (charIndex < transitionStartIndex) {
      return startColor;
    }

    if (v <= start) return startColor;
    if (v >= end) return endColor;

    // Linear interpolation handled by Framer internally
    return startColor;
  });

  return <motion.span style={{ color: animatedColor }}>{char}</motion.span>;
};

const EachWord = ({
  word,
  progress,
  starting,
  ending,
  currentCharacterIndex,
  highlightRanges,
}: any) => {
  const chars = word.split("");
  const step = (ending - starting) / chars.length;

  return (
    <span className="inline-block whitespace-normal">
      {chars.map((char: string, i: number) => (
        <EachCharacter
          key={i}
          char={char}
          start={starting + step * i}
          end={starting + step * (i + 1)}
          progress={progress}
          charIndex={currentCharacterIndex + i}
          highlightRanges={highlightRanges}
        />
      ))}
      &nbsp;
    </span>
  );
};

export default function ScrollHighlightText({
  text,
  className,
  highlights,
  progress,
}: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text?.split(" ");

  let charIndex = 0;

  const textString = text?.toString() ?? "";

  const highlightRanges = useMemo(() => {
    if (!highlights?.length) return [];

    return highlights
      .map((phrase) => {
        const start = textString.indexOf(phrase);
        if (start === -1) return null;
        return {
          start,
          end: start + phrase.length,
        };
      })
      .filter(Boolean);
  }, [textString, highlights]);

  return (
    <p ref={ref} className={`flex w-full max-w-full flex-wrap ${className}`}>
      {words?.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        const currentIndex = charIndex;
        charIndex += word.length + 1;

        return (
          <EachWord
            key={i}
            word={word}
            progress={progress}
            starting={start}
            ending={end}
            currentCharacterIndex={currentIndex}
            highlightRanges={highlightRanges}
          />
        );
      })}
    </p>
  );
}
