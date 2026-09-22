"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { FREELANCE_PROCESS } from "@/config/portfolio-data";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 border-b border-border">
      <BlurFade delay={0.1} className="mb-12 text-left">
        <p className="text-xs font-mono text-primary font-semibold mb-2">
          04 / How We Work Together
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          A predictable 4-step engineering process.
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
          Clear milestones, regular staging demos, transparent code access, and predictable delivery timelines.
        </p>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FREELANCE_PROCESS.map((p, i) => (
          <BlurFade key={p.step} delay={0.1 + i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 text-left hover:border-primary/40 transition-all flex flex-col justify-between group">
              <div>
                <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 inline-block mb-4">
                  {p.step}
                </span>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
