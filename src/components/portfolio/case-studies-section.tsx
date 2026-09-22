"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { CRYPALGOS_NODES } from "@/config/portfolio-data";

export function CaseStudiesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-20 border-b border-border">
      <BlurFade delay={0.1} className="mb-12 text-left">
        <p className="text-xs font-mono text-primary font-semibold mb-2">
          02 / Featured Case Studies & Live Products
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Real full-stack web applications shipped.
        </h2>
      </BlurFade>

      <div className="flex flex-col gap-12">
        {/* CrypAlgos Case Study */}
        <BlurFade delay={0.2}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-2xl backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-primary/5 sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />
            
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="relative h-8 w-44 sm:w-52 flex items-center">
                  <Image
                    src="/assets/crypalgos-horizontal-light.svg"
                    alt="CrypAlgos Logo"
                    fill
                    className="object-contain object-left dark:hidden"
                  />
                  <Image
                    src="/assets/crypalgos-horizontal-dark.svg"
                    alt=""
                    fill
                    className="hidden object-contain object-left dark:block"
                  />
                </div>
                <Badge variant="outline" className="font-mono text-xs text-primary border-primary/40 bg-primary/10">
                  Live Web Application
                </Badge>
              </div>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://crypalgos.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary hover:bg-accent text-xs font-medium text-foreground transition-all shadow-xs"
              >
                Visit CrypAlgos <ExternalLink data-icon="inline-end" className="size-3.5 text-primary" />
              </motion.a>
            </div>

            {/* Problem -> Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-xl bg-muted/40 border border-border">
              <div className="flex flex-col gap-2">
                <strong className="text-xs font-mono text-primary block">Problem</strong>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Traders needed a way to build, backtest, and execute algorithmic trading strategies without manually writing complex Python execution loops or exchange API code.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <strong className="text-xs font-mono text-primary block">Solution & What I Built</strong>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Architected a visual React Flow strategy builder that compiles visual DAG graphs into executable Python strategy classes running on an event-driven backtesting & live order execution engine.
                </p>
              </div>
            </div>

            {/* Product Features & Architecture Map */}
            <div className="space-y-4">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Product Features & Architecture Map
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CRYPALGOS_NODES.slice(0, 3).map((node) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.title} className="flex flex-col gap-2 rounded-xl border border-border bg-card/90 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <Icon className="size-4 text-primary" /> {node.title}
                      </div>
                      <p className="text-[11px] font-mono text-muted-foreground">
                        {node.caption}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {CRYPALGOS_NODES.slice(3, 6).map((node) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.title} className="flex flex-col gap-2 rounded-xl border border-border bg-card/90 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <Icon className="size-4 text-primary" /> {node.title}
                      </div>
                      <p className="text-[11px] font-mono text-muted-foreground">
                        {node.caption}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Deliverables & Achievements */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Key Engineering Highlights
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Built interactive drag-and-drop strategy node canvas with custom ports using React Flow & Next.js.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Engineered Python AST strategy generator that translates visual JSON nodes into executable code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Implemented high-throughput WebSocket price tick ingestion pipeline storing historical candles in ClickHouse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Built REST API integration for Binance & Bybit automated live order execution with Redis task queues.</span>
                </li>
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
              {["Next.js", "React Flow", "Python", "FastAPI", "ClickHouse", "Redis", "Binance API", "Tailwind CSS"].map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </BlurFade>

        {/* Kalpi.ai Case Study */}
        <BlurFade delay={0.25}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-xl backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-primary/5 sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-3.5">
                <div className="relative size-11 rounded-xl overflow-hidden border border-border bg-secondary p-1.5 shrink-0 shadow-xs">
                  <Image
                    src="/assets/kalpi.webp"
                    alt="Kalpi.ai Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Kalpi.ai — Portfolio Investment Platform</h3>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    Backed by Rainmatter by Zerodha
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="font-mono text-xs text-primary border-primary/30 bg-primary/10">
                  Production Engineering (0 to 1)
                </Badge>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://kalpi.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary hover:bg-accent text-xs font-medium text-foreground transition-all shadow-xs"
                >
                  Visit Kalpi.ai <ExternalLink data-icon="inline-end" className="size-3.5 text-primary" />
                </motion.a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 rounded-xl border border-border bg-muted/60 p-4">
                <strong className="text-xs font-mono text-primary block">Portfolio Analytics & Rebalancing</strong>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Architected portfolio calculation microservices in FastAPI and ClickHouse, target allocation rebalancing engines, and recurring order execution schedules.
                </p>
              </div>

              <div className="flex flex-col gap-2 rounded-xl border border-border bg-muted/60 p-4">
                <strong className="text-xs font-mono text-primary block">Broker APIs & Automated Trading</strong>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Integrated broker REST and WebSocket APIs for real-time market sync, portfolio tracking, automated order-execution workflows, and data pipelines.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
              {["Python", "FastAPI", "Next.js", "ClickHouse", "PostgreSQL", "Redis", "Broker APIs", "Rainmatter Ecosystem"].map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
