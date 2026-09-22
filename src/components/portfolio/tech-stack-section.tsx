"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import LogoCloudSwap from "@/components/ui/logo-cloud-swap";

export function TechStackSection() {
  return (
    <section id="stack" className="py-12 sm:py-20 border-b border-border">
      <BlurFade delay={0.1} className="mb-6 sm:mb-8 text-left">
        <p className="text-xs font-mono text-primary font-semibold mb-2">
          06 / Technology Stack
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
          Production tools & engineering stack.
        </h2>
      </BlurFade>

      <BlurFade delay={0.2} className="flex flex-col gap-8">
        <LogoCloudSwap className="py-2" />
      </BlurFade>
    </section>
  );
}
