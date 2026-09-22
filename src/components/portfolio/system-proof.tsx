"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Clock, Workflow, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const metrics = [
  {
    icon: Activity,
    metric: "API & Cache Tuning",
    label: "Backend Reliability",
    detail: "Improved Redis-backed portfolio workflows and frequently requested API paths.",
  },
  {
    icon: Clock,
    metric: "Time-Series Queries",
    label: "Analytics Workloads",
    detail: "Engineered time-series financial analytics querying millions of market records.",
  },
  {
    icon: Workflow,
    metric: "Automated Pipelines",
    label: "Repeatable Data Workflows",
    detail: "Automated symbols, fundamentals, and historical market data pipelines.",
  },
  {
    icon: Layers,
    metric: "Product Delivery",
    label: "Full-Stack Ownership",
    detail: "Architected portfolio analytics, ranking, rebalancing, and execution from scratch.",
  },
];

const engineeringProofs = [
  {
    system: "Portfolio Analytics Engine",
    company: "Kalpi.ai",
    tech: ["FastAPI", "PostgreSQL", "Redis", "ClickHouse"],
    highlights: [
      "Optimized ClickHouse time-series queries for analytical financial data workloads",
      "Configured Redis caching layer for high-frequency portfolio performance endpoints",
      "Integrated broker REST and WebSocket APIs for real-time market sync",
    ],
  },
  {
    system: "Quantitative Stock Ranking & Rebalance Engine",
    company: "Kalpi.ai",
    tech: ["Python", "FastAPI", "Pandas", "TA-Lib"],
    highlights: [
      "Quantitative signal calculation engine combining valuation, momentum, and risk metrics",
      "Recurring portfolio rebalance scheduler supporting custom investment cadences",
      "Engineered automated price and market data ingestion pipelines",
    ],
  },
  {
    system: "Algorithmic Trading & Strategy Compiler",
    company: "CrypAlgos (Live Platform)",
    tech: ["React Flow", "Next.js", "Python", "WebSockets", "CCXT"],
    highlights: [
      "Visual drag-and-drop strategy builder mapping directly to execution graphs",
      "Multi-exchange crypto trading engine executing via CCXT abstraction layer",
      "Real-time orderbook, ticker, and position stream handling via WebSockets",
    ],
  },
];

export function SystemProof() {
  return (
    <div className="space-y-16">
      {/* Quantifiable Impact Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-xs">
                  <Icon className="size-4.5" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground font-semibold">
                  Metric
                </span>
              </div>
              <p className="text-2xl font-extrabold font-mono tracking-tight text-foreground group-hover:text-primary transition-colors">
                {item.metric}
              </p>
              <p className="text-xs font-semibold text-foreground mt-1 mb-2">
                {item.label}
              </p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
              {/* Micro accent beam glow indicator */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-500" />
            </motion.div>
          );
        })}
      </div>

      {/* Production Case Breakdown Cards */}
      <div className="space-y-6 text-left">
        <h3 className="text-xl font-bold text-foreground tracking-tight">
          Backend System Implementations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineeringProofs.map((proof, idx) => (
            <motion.div
              key={proof.system}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card/90 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-lg overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="font-mono text-[10px] text-primary border-primary/30 bg-primary/10 px-2.5 py-0.5">
                    {proof.company}
                  </Badge>
                  <span className="text-[10px] font-mono text-muted-foreground">Production Verified</span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {proof.system}
                  </h4>
                </div>

                <ul className="space-y-2 text-xs text-muted-foreground">
                  {proof.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                {proof.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-muted/60 text-foreground border border-border">
                    {t}
                  </span>
                ))}
              </div>

              {/* Micro accent beam glow indicator */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
