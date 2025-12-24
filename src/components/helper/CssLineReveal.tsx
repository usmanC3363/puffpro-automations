// "use client";

// import React, { useEffect, useRef, useState } from "react";

// type CSSLineRevealProps = {
//   children: string | React.ReactNode;
//   textClass?: string;
//   delay?: number;
//   lineDelay?: number;
// };

// export default function CSSLineReveal({
//   children,
//   textClass = "",
//   delay = 0,
//   lineDelay = 20000,
// }: CSSLineRevealProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(el);
//         }
//       },
//       { threshold: 0.3 },
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   const lines =
//     typeof children === "string"
//       ? children
//           .split(/\n|<br\s*\/?>/g)
//           .map((line) => line.trim())
//           .filter(Boolean)
//       : [children];

//   return (
//     <div ref={containerRef} className={`overflow-hidden ${textClass}`}>
//       {lines.map((line, i) => (
//         <span
//           key={i}
//           className={`block overflow-hidden`}
//           style={{
//             opacity: isVisible ? 1 : 0,
//             display: "block",
//           }}
//         >
//           <span
//             style={{
//               display: "inline-block",
//               transform: isVisible ? "translateY(0%)" : "translateY(100%)",
//               transition: `transform 0.9s ease-out ${delay + i * lineDelay}s, opacity 0.9s ease-out ${delay + i * lineDelay}s`,
//               opacity: isVisible ? 1 : 0,
//             }}
//           >
//             {line}
//           </span>
//         </span>
//       ))}
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";

type CSSLineRevealProps = {
  children: string | React.ReactNode;
  textClass?: string;
  delay?: number; // global delay before first line
  lineDelay?: number; // stagger delay between lines
  duration?: number; // per-line duration
};

export default function CSSLineReveal({
  children,
  textClass = "",
  delay = 0,
  lineDelay = 2,
  duration = 0.8,
}: CSSLineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Split text into lines (preserve <br/> support)
  const lines =
    typeof children === "string"
      ? children
          .split(/\n|<br\s*\/?>/g)
          .map((line) => line.trim())
          .filter(Boolean)
      : [children];

  return (
    <div ref={containerRef} className={`overflow-hidden ${textClass}`}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden will-change-transform"
          style={{
            // acts as the line mask
            transform: "translateZ(0)",
          }}
        >
          <span
            className="inline-block will-change-transform"
            style={{
              transform: isVisible ? "translateY(0%)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transitionProperty: "transform, opacity",
              transitionDuration: `${duration}s`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)", // GSAP-ish smooth curve
              transitionDelay: `${delay + i * lineDelay}s`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
}
