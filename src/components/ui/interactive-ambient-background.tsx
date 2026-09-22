"use client";

import React from "react";

export function InteractiveAmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Top Hero Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full bg-gradient-to-b from-primary/12 via-primary/5 to-transparent blur-[140px] opacity-70 dark:opacity-50" />

      {/* Subtle Mid Accent Glow */}
      <div className="absolute top-1/3 -right-20 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[150px] opacity-40 dark:opacity-30" />

      {/* Subtle Lower Ambient Glow */}
      <div className="absolute bottom-1/4 -left-20 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[150px] opacity-40 dark:opacity-30" />
    </div>
  );
}
