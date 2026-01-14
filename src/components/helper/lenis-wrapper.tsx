"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      anchors: true,
      easing: easeOutCubic,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
