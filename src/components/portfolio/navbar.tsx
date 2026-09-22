"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NAV_ITEMS } from "@/config/portfolio-data";

export function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
  };

  return (
    <header className="sticky top-3 sm:top-4 z-50 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="rounded-full border border-border/80 bg-background/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-lg transition-all duration-300 px-4 sm:px-5 py-2 flex items-center justify-between">
        {/* Logo / Brand Mark */}
        <a
          className="flex items-center gap-2.5 font-sans font-semibold text-sm text-foreground hover:text-primary transition-colors group"
          href="#top"
        >
          <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold group-hover:scale-105 transition-transform shadow-xs">
            AJ
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted/40 p-1 rounded-full border border-border/50">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-background/80 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className="relative flex size-8.5 items-center justify-center rounded-full border border-border/80 bg-card/90 hover:bg-accent text-foreground backdrop-blur-md transition-all cursor-pointer shadow-2xs group overflow-hidden"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="dark"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Sun className="size-4 text-amber-400 fill-amber-400/20 group-hover:rotate-45 transition-transform duration-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="light"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Moon className="size-4 text-emerald-600 fill-emerald-600/10 transition-transform duration-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <a href="#contact">
            <ShimmerButton
              shimmerColor="var(--primary-foreground)"
              background="var(--primary)"
              borderRadius="100px"
              className="text-xs font-semibold text-primary-foreground px-4 py-2 shadow-xs hover:opacity-95 transition-all cursor-pointer"
            >
              Start a Project
              <ArrowUpRight data-icon="inline-end" className="ml-1.5 size-3.5" />
            </ShimmerButton>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden size-8.5 items-center justify-center rounded-full border border-border bg-card hover:bg-accent text-foreground transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-full mt-2 flex flex-col gap-2 rounded-2xl border border-border/80 bg-background/95 p-4 text-left shadow-xl backdrop-blur-xl md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
