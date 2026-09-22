"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, CheckCircle2, Cpu, Zap, ShieldCheck, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { CRYPALGOS_NODES } from "@/config/portfolio-data";

export function CaseStudiesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-12 sm:py-20 border-b border-border">
      <BlurFade delay={0.1} className="mb-8 sm:mb-12 text-left">
        <p className="text-xs font-mono text-primary font-semibold mb-2">
          02 / Featured Case Studies & Production Proof
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
          Real systems engineered and shipped.
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-xl">
          Deep-dive technical ownership breakdown: from problem definition to architecture, engineering stack, and production results.
        </p>
      </BlurFade>

      <div className="flex flex-col gap-10 sm:gap-14">
        {/* CrypAlgos Case Study */}
        <BlurFade delay={0.2}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col gap-6 sm:gap-8 overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-8 text-left shadow-2xl backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-primary/5"
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
                  Live Algorithmic Web Platform
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

            {/* 4-Part Structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* 1. THE PROBLEM */}
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase">
                  <ShieldCheck className="size-4" /> 1. The Problem
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Algo traders needed a visually intuitive way to design, test, and execute complex trading algorithms without writing raw exchange WebSocket code or manually handling order state machines.
                </p>
              </div>

              {/* 2. WHAT I BUILT */}
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase">
                  <Layers className="size-4" /> 2. What I Built
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Engineered an interactive React Flow DAG strategy builder, Python AST code compiler, event-driven backtester, and automated Binance/Bybit order execution engine.
                </p>
              </div>

              {/* 3. ENGINEERING & ARCHITECTURE */}
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase">
                  <Cpu className="size-4" /> 3. Engineering & Stack
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <strong>Frontend:</strong> Next.js, React Flow canvas, Tailwind CSS</li>
                  <li>• <strong>Backend:</strong> Python, FastAPI, Asyncio WebSocket feeds</li>
                  <li>• <strong>Data & Infrastructure:</strong> ClickHouse, Redis queues, Docker</li>
                </ul>
              </div>

              {/* 4. RESULT & IMPACT */}
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase">
                  <Zap className="size-4" /> 4. Result & Impact
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Reduced strategy creation time from days of coding to minutes of drag-and-drop building. Sub-millisecond tick processing and zero-downtime execution.
                </p>
              </div>
            </div>

            {/* Product Architecture Map */}
            <div className="space-y-4 pt-2">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Product Architecture Map
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {CRYPALGOS_NODES.map((node) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.title} className="flex flex-col gap-1.5 rounded-xl border border-border bg-card/90 p-3.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <Icon className="size-4 text-primary shrink-0" /> {node.title}
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
            className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-8 text-left shadow-xl backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-primary/5"
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
                    Backed by Rainmatter by Zerodha · Founding Engineer Ownership
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="font-mono text-xs text-primary border-primary/30 bg-primary/10">
                  Founding Engineer (0 to 1)
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

            {/* 4-Part Structure for Kalpi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* 1. THE PROBLEM */}
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase">
                  <ShieldCheck className="size-4" /> 1. The Problem
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Retail investors needed real-time portfolio analytics, automated target rebalancing, and seamless broker integration across multi-broker accounts without manual spreadsheet tracking.
                </p>
              </div>

              {/* 2. WHAT I BUILT */}
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase">
                  <Layers className="size-4" /> 2. What I Built
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Architected the core portfolio calculation engines, automated rebalancing microservices, real-time broker WebSocket sync, and user dashboard UI from 0 to 1 as founding engineer.
                </p>
              </div>

              {/* 3. ENGINEERING & ARCHITECTURE */}
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase">
                  <Cpu className="size-4" /> 3. Engineering & Stack
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <strong>Backend & APIs:</strong> Python, FastAPI, Broker REST & WebSocket APIs</li>
                  <li>• <strong>Data Layer:</strong> ClickHouse time-series DB, PostgreSQL, Redis</li>
                  <li>• <strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS</li>
                </ul>
              </div>

              {/* 4. RESULT & IMPACT */}
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-muted/40 border border-border">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase">
                  <Zap className="size-4" /> 4. Result & Impact
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Secured backing from Zerodha Rainmatter ecosystem. Processed millions in portfolio data calculations with real-time automated broker order execution.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
              {["Python", "FastAPI", "Next.js", "ClickHouse", "PostgreSQL", "Redis", "Broker APIs", "Zerodha Rainmatter"].map((tech) => (
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

