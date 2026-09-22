"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";

export function EducationSection() {
  return (
    <section className="py-10 sm:py-16 border-b border-border">
      <BlurFade delay={0.1} className="rounded-2xl border border-border bg-card backdrop-blur-md p-4 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 text-left">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="flex size-10 sm:size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shrink-0">
            <GraduationCap className="size-5 sm:size-6" />
          </div>
          <div>
            <p className="text-xs font-mono text-primary font-semibold">Education</p>
            <h2 className="text-base sm:text-xl font-bold text-foreground">Bachelor of Computer Applications (BCA)</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Shri Vaishnav Institute of Management & Science · Indore, India</p>
          </div>
        </div>
        <Badge variant="outline" className="font-mono text-xs text-foreground border-border px-3 py-1 shrink-0">
          2021 — 2025
        </Badge>
      </BlurFade>
    </section>
  );
}
