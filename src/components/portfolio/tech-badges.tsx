"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TECH_ITEMS, TechItemConfig } from "@/config/portfolio-data";

export function TechBadges() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 my-6">
      {TECH_ITEMS.map((tech: TechItemConfig, i: number) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          whileHover={{ y: -3, scale: 1.02 }}
          className="group relative flex items-center gap-3 p-3.5 rounded-xl border border-border bg-card/80 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-xs"
        >
          <div className="relative flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/80 p-2 shadow-inner group-hover:border-primary/40 transition-all duration-300">
            <Image
              src={tech.iconPath}
              alt={`${tech.name} logo`}
              width={24}
              height={24}
              className="object-contain size-6 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col min-w-0 text-left">
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {tech.name}
            </span>
            <span className="text-[11px] text-muted-foreground transition-colors truncate">
              {tech.category}
            </span>
          </div>

          {/* Micro accent beam glow indicator */}
          <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/70 transition-all duration-500 rounded-b-xl" />
        </motion.div>
      ))}
    </div>
  );
}
