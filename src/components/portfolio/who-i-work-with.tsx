"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Server, Workflow, GitBranch } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const targetClients = [
  {
    icon: Terminal,
    title: "Startup Founders",
    subtitle: "Idea to Live Product",
    description:
      "Turn your product specification, napkin sketch, or Figma design into a fully functional, production-ready MVP built correctly from day one.",
    tag: "MVP Development",
  },
  {
    icon: Server,
    title: "Early-Stage Startups",
    subtitle: "Technical Foundation & Scale",
    description:
      "Establish a robust architecture with scalable FastAPI backends, Next.js frontends, automated data pipelines, and reliable database structures.",
    tag: "Technical Partnership",
  },
  {
    icon: Workflow,
    title: "Established Businesses",
    subtitle: "Custom Internal Software",
    description:
      "Build custom web dashboards, high-performance APIs, internal workflow automations, third-party integrations, and analytics tools.",
    tag: "Custom Solutions",
  },
  {
    icon: GitBranch,
    title: "Product & Dev Teams",
    subtitle: "Engineering Capacity Boost",
    description:
      "Add hands-on full-stack support for focused product features, API integrations, backend improvements, and data-heavy workflows.",
    tag: "Team Augmentation",
  },
];

export function WhoIWorkWith() {
  return (
    <section id="clients" className="py-12 sm:py-20 border-b border-border">
      <BlurFade delay={0.1} className="mb-8 sm:mb-12 text-left">
        <p className="text-xs font-mono text-primary font-semibold mb-2">
          03 / Client Profiles & Fit
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
          Who I work with.
        </h2>
        <p className="text-muted-foreground max-w-2xl mt-2 text-xs sm:text-sm leading-relaxed">
          Whether you need a full MVP built from scratch or an experienced full-stack engineer to lead a complex backend system.
        </p>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
        {targetClients.map((client, idx) => {
          const Icon = client.icon;
          return (
            <BlurFade key={client.title} delay={0.1 * (idx + 1)}>
              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="h-full group relative overflow-hidden rounded-2xl"
              >
                <div className="h-full p-4 sm:p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-md flex flex-col justify-between hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-xs">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-border bg-muted/60 text-muted-foreground group-hover:border-primary/30 transition-colors">
                        {client.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {client.title}
                    </h3>
                    <p className="text-xs font-mono text-primary font-medium mt-0.5 mb-3">
                      {client.subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </div>
                {/* Micro accent beam glow indicator */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-500" />
              </motion.div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
