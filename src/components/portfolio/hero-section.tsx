"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, CheckCircle2, Layers } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { HERO_HIGHLIGHTS } from "@/config/portfolio-data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const handleOpenCalendly = () => {
    window.open("https://calendly.com/ashishjangde54/new-meeting", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Hero Section */}
      <section id="top" className="relative grid grid-cols-1 items-center gap-10 overflow-hidden border-b border-border pb-16 lg:grid-cols-12">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-16 size-64 rounded-full bg-primary/10 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -10, 0], opacity: [0.25, 0.42, 0.25] }}
          transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="flex flex-col gap-6 text-left lg:col-span-7">
          <BlurFade delay={0.08}>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-primary">
              <motion.span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-primary"
                animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.9, 1.15, 0.9] }}
                transition={reduceMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              Full-Stack Engineer · Next.js · Python · FastAPI
            </div>
          </BlurFade>

          <BlurFade delay={0.15}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] sm:leading-[1.1]">
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={reduceMotion ? undefined : { duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                I build the product your idea needs
              </motion.span>{" "}
              <AnimatedGradientText colorFrom="var(--primary)" colorTo="var(--foreground)" speed={1.2}>
                from first API to final handover.
              </AnimatedGradientText>
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Full-stack engineering for founders and teams who need thoughtful product work across Python, FastAPI, Node.js, Next.js, and the systems around them.
            </p>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a href="#contact" className="w-full sm:w-auto">
                <ShimmerButton
                  shimmerColor="var(--primary-foreground)"
                  background="var(--primary)"
                  borderRadius="100px"
                  className="text-xs sm:text-sm font-bold text-primary-foreground px-6 sm:px-7 py-3 shadow-md cursor-pointer justify-center w-full sm:w-auto"
                >
                  Start a Project
                  <ArrowUpRight data-icon="inline-end" className="ml-2 size-4 text-primary-foreground" />
                </ShimmerButton>
              </a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpenCalendly}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-border bg-card hover:bg-accent text-foreground backdrop-blur-md cursor-pointer justify-center w-full sm:w-auto text-xs sm:text-sm h-11"
                )}
              >
                <Calendar className="mr-2 size-4 text-primary" />
                Book a 30-min Call
              </motion.button>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-muted-foreground border-t border-border">
              <span className="flex items-center gap-1.5 text-foreground">
                <MapPin className="size-3.5 text-primary" /> Indore, India (Remote Worldwide)
              </span>
              <span className="flex items-center gap-1.5 text-foreground">
                <CheckCircle2 className="size-3.5 text-primary" /> Fixed Milestones & Direct Handover
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.28}>
            <div className="grid grid-cols-1 gap-2 border-t border-border pt-4 sm:grid-cols-3">
              {HERO_HIGHLIGHTS.map(([step, title, detail]) => (
                <motion.div
                  key={step}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className="group flex items-start gap-2 rounded-xl border border-border/70 bg-card/40 p-3 transition-colors duration-300 hover:border-primary/35 hover:bg-card/70"
                >
                  <span className="font-mono text-[10px] font-semibold text-primary">{step}</span>
                  <span className="flex flex-col gap-0.5">
                    <strong className="text-xs font-semibold text-foreground">{title}</strong>
                    <span className="font-mono text-[10px] text-muted-foreground">{detail}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} className="relative flex justify-center lg:col-span-5">
          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={reduceMotion ? undefined : { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group w-full max-w-sm lg:max-w-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-muted shadow-xl transition-shadow duration-500 group-hover:shadow-2xl">
              <Image
                src="/assets/ashish-jangde.png"
                alt="Ashish Jangde - Full-Stack Engineer"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 border-b border-border pb-3 font-mono text-[11px] text-muted-foreground">
              <span className="font-semibold text-primary">Full-stack engineer</span>
              <span>Indore · Remote</span>
            </figcaption>
          </motion.figure>
        </BlurFade>
      </section>

      {/* Production Engineering Credibility Banner */}
      <section className="py-8 border-b border-border">
        <BlurFade delay={0.1}>
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card/60 p-4 text-left shadow-xs backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-lg sm:p-6 md:flex-row md:items-center md:justify-between"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />
            <div className="flex items-start gap-3.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 motion-reduce:transition-none">
                <Layers aria-hidden="true" className="size-4.5" />
              </div>
              <div>
                <p className="mb-1 font-mono text-xs font-semibold text-primary">
                  Production Engineering Credibility
                </p>
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  Kalpi.ai — Backed by Rainmatter by Zerodha
                </h3>
                <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground">
                  Engineered portfolio analytics microservices, ClickHouse time-series querying, broker WebSocket sync, and automated order-execution workflows.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-2 md:max-w-[270px] md:justify-end">
              <Badge variant="secondary" className="font-mono text-xs">
                Full-Stack & Backend Ownership
              </Badge>
              <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary bg-primary/10">
                Real-Time Systems
              </Badge>
            </div>
          </motion.div>
        </BlurFade>
      </section>

      {/* Marquee Capabilities Bar */}
      <section aria-label="Selected capabilities" className="overflow-hidden border-b border-border py-8">
        <Marquee pauseOnHover className="[--duration:25s]">
          <span className="mx-6 font-mono text-xs text-foreground font-semibold flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary inline-block" /> MVP Development
          </span>
          <span className="mx-6 font-mono text-xs text-foreground font-semibold flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary inline-block" /> Full-Stack Next.js
          </span>
          <span className="mx-6 font-mono text-xs text-foreground font-semibold flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary inline-block" /> Python & FastAPI
          </span>
          <span className="mx-6 font-mono text-xs text-foreground font-semibold flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary inline-block" /> Real-Time WebSockets
          </span>
          <span className="mx-6 font-mono text-xs text-foreground font-semibold flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary inline-block" /> PostgreSQL & ClickHouse
          </span>
          <span className="mx-6 font-mono text-xs text-foreground font-semibold flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary inline-block" /> AI Agents & Vector DBs
          </span>
        </Marquee>
      </section>
    </>
  );
}
