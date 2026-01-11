"use client";
import { useEffect, useState } from "react";

// You can't directly import HeaderContent because it's async
export default function HeaderShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollUp(currentY < lastScrollY || currentY < 200);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full border-b border-current transition-all duration-200 ease-linear ${
        scrollUp
          ? "translate-y-0 bg-mycolors-white/50 backdrop-blur-[10px] dark:bg-mycolors-black/50"
          : "-translate-y-full"
      }`}
    >
      {children}
    </div>
  );
}
