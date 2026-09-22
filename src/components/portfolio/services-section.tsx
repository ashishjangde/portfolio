"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { SERVICES } from "@/config/portfolio-data";

export function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-20 border-b border-border">
      <BlurFade delay={0.1} className="mb-8 sm:mb-12 text-left">
        <p className="text-xs font-mono text-primary font-semibold mb-2">
          01 / What I Build For You
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
          Services tailored for startups & tech founders.
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
          High-velocity engineering with fixed milestone scope, direct Slack/WhatsApp communication, and clean production handovers.
        </p>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {SERVICES.map((service, i) => {
          const IconComponent = service.icon;
          return (
            <BlurFade key={service.title} delay={0.1 + i * 0.05}>
              <Card className="h-full border-border bg-card/60 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-left group">
                <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-10 sm:size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                      <IconComponent className="size-5 sm:size-6" />
                    </div>
                    <Badge variant="outline" className="font-mono text-[10px] text-muted-foreground border-border shrink-0">
                      {service.subtitle}
                    </Badge>
                  </div>
                  <div className="pt-2 sm:pt-3">
                    <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[11px] sm:text-xs font-mono text-primary/80 mt-1">
                      {service.subtitle}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 p-4 sm:p-6 pt-0 sm:pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/60">
                    {service.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] font-mono text-muted-foreground bg-muted/60"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
