"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const lenis = new Lenis({
      autoRaf: true,

      // Core smoothness
      smoothWheel: true,
      lerp: 1, // 👈 inertia (try 0.06–0.1)
      duration: 1, // 👈 how long scroll settles

      // Wheel behavior
      wheelMultiplier: 1.1,

      // Feel
      easing: easeOutExpo,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
