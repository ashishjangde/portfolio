"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight - 50]),
    {
      stiffness: 400,
      damping: 40,
    }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight]),
    {
      stiffness: 400,
      damping: 40,
    }
  );

  if (reduceMotion) {
    return <div className={cn("relative w-full max-w-5xl mx-auto", className)}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn("relative w-full max-w-5xl mx-auto", className)}
    >
      <div className="absolute -left-4 md:-left-12 top-3 bottom-0 hidden sm:block">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-neutral-700/60 bg-neutral-900/90 shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            className="h-1.5 w-1.5 rounded-full border border-sky-400 bg-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* Background line */}
          <motion.path
            d={`M 1 0V ${svgHeight}`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.25"
            transition={{
              duration: 10,
            }}
          />
          {/* Animated beam gradient path */}
          <motion.path
            d={`M 1 0V ${svgHeight}`}
            fill="none"
            stroke="url(#tracing-beam-gradient)"
            strokeWidth="2.5"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <motion.linearGradient
              id="tracing-beam-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#38bdf8" stopOpacity="0" />
              <stop stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="0.7" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="1" stopColor="#c084fc" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
