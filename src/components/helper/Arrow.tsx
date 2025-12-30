"use client";
import React from "react";
import Link from "next/link";
import { MainArrow, LinkArrow, BulletArrow, Plus, Minus } from "./icons";

type ArrowName = "main" | "link" | "bullet" | "plus" | "minus";
type ArrowPosition = "right" | "left" | "topright" | "bottomleft";

interface ArrowProps {
  name: ArrowName;
  position?: ArrowPosition;
  svgClass?: string;
  withLink?: boolean;
  url?: string;
}

const rotationMap: Record<ArrowPosition, string> = {
  right: "-rotate-45",
  left: "rotate-[180deg]",
  topright: "-rotate-[45deg]",
  bottomleft: "rotate-90",
};

const ICONS: Record<ArrowName, React.FC<{ className?: string }>> = {
  main: MainArrow,
  link: LinkArrow,
  bullet: BulletArrow,
  plus: Plus,
  minus: Minus,
};

export const Arrow = ({
  name,
  position,
  svgClass = "",
  withLink = false,
  url = "#",
}: ArrowProps) => {
  const Icon = ICONS[name];

  const iconElement = (
    <Icon
      className={`group ${svgClass} ${
        name === "main" && position ? rotationMap[position] : ""
      }`}
    />
  );

  if (withLink) {
    return (
      <Link href={url}>
        <Icon className={`group ${svgClass}`} />
      </Link>
    );
  }

  return iconElement;
};
