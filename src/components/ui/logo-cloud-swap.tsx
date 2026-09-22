"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LOGOS } from "@/components/ui/logo-clouds-utils/logos";

export type LogoEntry = {
  icon: React.ReactNode;
  name?: string;
  id?: string;
};

export type LogoCloudSwapProps = {
  logos?: LogoEntry[];
  title?: string;
  subtitle?: string;
  interval?: number;
  stagger?: number;
  className?: string;
};

const WIPE_DURATION = 0.92;
const WIPE_TIMES = [0, 0.4, 1];

const DEFAULT_LOGOS: LogoEntry[] = LOGOS.map((l) => ({
  icon: (
    <l.Icon className="h-8 w-8" style={{ color: l.color }} aria-hidden="true" />
  ),
  name: l.name,
  id: l.name,
}));

function LogoItem({
  logo,
  index,
  isWaving,
  stagger,
  totalCount,
  onDone,
}: {
  logo: LogoEntry;
  index: number;
  isWaving: boolean;
  stagger: number;
  totalCount: number;
  onDone: () => void;
}) {
  return (
    <motion.div
      aria-label={logo.name ?? "Logo"}
      animate={
        isWaving
          ? {
              clipPath: [
                "inset(0 0% 0 0)",
                "inset(0 100% 0 0)",
                "inset(0 0% 0 0)",
              ],
              filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
              opacity: [1, 0.72, 1],
            }
          : {
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
              opacity: 1,
            }
      }
      transition={
        isWaving
          ? {
              clipPath: {
                duration: WIPE_DURATION,
                times: WIPE_TIMES,
                ease: ["easeIn", [0.16, 1, 0.3, 1]],
                delay: index * stagger,
              },
              filter: {
                duration: WIPE_DURATION * 0.9,
                times: WIPE_TIMES,
                ease: "easeInOut" as const,
                delay: index * stagger,
              },
              opacity: {
                duration: WIPE_DURATION * 0.85,
                times: WIPE_TIMES,
                ease: "easeInOut" as const,
                delay: index * stagger,
              },
            }
          : {
              duration: 0.3,
              ease: "easeOut",
            }
      }
      onAnimationComplete={() => {
        if (isWaving && index === totalCount - 1) onDone();
      }}
      whileHover={{
        scale: 1.07,
        opacity: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 340, damping: 24 },
      }}
      className="flex w-20 shrink-0 cursor-default flex-col items-center gap-2.5 sm:w-24 p-3 rounded-xl border border-border/40 bg-card/60 backdrop-blur-xs transition-colors hover:border-primary/40 hover:bg-card"
    >
      <span className="flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
        {logo.icon}
      </span>
      {logo.name && (
        <span className="select-none text-center truncate max-w-full text-[11px] font-medium tracking-wide text-muted-foreground sm:text-[12px]">
          {logo.name}
        </span>
      )}
    </motion.div>
  );
}

export default function LogoCloudSwap({
  logos = DEFAULT_LOGOS,
  title,
  subtitle,
  interval = 6000,
  stagger = 0.11,
  className,
}: LogoCloudSwapProps) {
  const [waving, setWaving] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (reduceMotion || !isInView) {
      return;
    }

    const id = setInterval(() => setWaving(true), interval);
    return () => clearInterval(id);
  }, [interval, isInView, reduceMotion]);

  return (
    <div ref={containerRef} className={cn("w-full py-4", className)}>
      {(title || subtitle) && (
        <div className="mx-auto max-w-2xl text-center mb-8">
          {title && (
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}

      <div className="mx-auto max-w-5xl">
        <div className="hidden items-center justify-center gap-4 sm:flex sm:flex-wrap sm:gap-6 md:gap-6 lg:gap-8">
          {logos.map((logo, i) => (
            <LogoItem
              key={logo.id ?? i}
              logo={logo}
              index={i}
              isWaving={waving}
              stagger={stagger}
              totalCount={logos.length}
              onDone={() => setWaving(false)}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 place-items-center gap-4 sm:hidden">
          {logos.map((logo, i) => (
            <LogoItem
              key={logo.id ?? i}
              logo={logo}
              index={i}
              isWaving={waving}
              stagger={stagger}
              totalCount={logos.length}
              onDone={() => setWaving(false)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
