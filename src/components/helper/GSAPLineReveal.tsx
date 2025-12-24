// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import SplitType from "split-type";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// type GsapLineRevealProps = {
//   children: React.ReactNode;
//   textClass?: string;
//   delay?: number; // optional global delay
//   duration?: number; // optional duration for smoother control
// };

// gsap.registerPlugin(ScrollTrigger);

// export default function GSAPLineReveal({
//   children,
//   textClass = "",
//   delay = 0,
//   duration = 0.9,
// }: GsapLineRevealProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const splitRef = useRef<SplitType | null>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Split text into lines once — avoid heavy reflows
//     splitRef.current = new SplitType(containerRef.current, {
//       types: "lines",
//       lineClass: "line-child",
//     });

//     const lines = containerRef.current.querySelectorAll(".line-child");

//     // Kill any existing animation before creating a new one
//     gsap.killTweensOf(lines);

//     // Setup animation
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         lines,
//         { yPercent: 100, opacity: 0 },
//         {
//           yPercent: 0,
//           opacity: 1,
//           ease: "power3.out",
//           duration,
//           stagger: 0.12,
//           delay,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 90%", // trigger slightly earlier
//             end: "bottom 80%",
//             once: true,
//             scrub: false,
//             markers: false,
//           },
//           onStart: () => {
//             if (containerRef.current) containerRef.current.style.opacity = "1";
//           },
//         },
//       );
//     }, containerRef);

//     // Cleanup
//     return () => {
//       ctx.revert();
//       if (splitRef.current) splitRef.current.revert();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, [delay, duration]);

//   return (
//     <div className="overflow-hidden will-change-transform">
//       <div
//         ref={containerRef}
//         className={`${textClass} opacity-0`}
//         style={{
//           transform: "translateZ(0)", // helps GPU accelerate
//         }}
//       >
//         {children}
//       </div>

//       <style jsx global>{`
//         .line-child {
//           display: block;
//           overflow: hidden;
//           will-change: transform, opacity;
//         }
//         .line-child > * {
//           display: inline-block;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapLineRevealProps = {
  children: React.ReactNode;
  textClass?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  end?: string;
};

export default function GSAPLineReveal({
  children,
  textClass = "",
  delay = 0,
  duration = 0.8,
  stagger = 0.15,
  start = "top 85%",
  end = "bottom 70%",
}: GsapLineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into lines
    splitRef.current = new SplitType(el, {
      types: "lines",
      lineClass: "line-child",
    });

    const lines = el.querySelectorAll(".line-child");

    gsap.set(el, { opacity: 1 });

    // Animate each line
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        end,
        once: true,
        markers: false,
      },
    });

    tl.fromTo(
      lines,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power3.out",
        duration,
        stagger,
        delay,
      },
    );

    return () => {
      tl.kill();
      splitRef.current?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [delay, duration, stagger, start, end]);

  return (
    <div className="overflow-hidden will-change-transform">
      <div ref={containerRef} className={`${textClass} opacity-0`}>
        {children}
      </div>

      <style jsx global>{`
        .line-child {
          display: block;
          overflow: hidden;
        }
        .line-child > * {
          display: inline-block;
          transform: translateZ(0);
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}
