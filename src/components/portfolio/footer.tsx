"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowUp, Calendar } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenCalendly = () => {
    window.open("https://calendly.com/ashishjangde54/new-meeting", "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 sm:py-16 text-center relative">
      <BlurFade delay={0.1} className="mx-auto flex max-w-2xl flex-col gap-5 sm:gap-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a href="#contact" className="w-full sm:w-auto">
            <ShimmerButton
              shimmerColor="var(--primary-foreground)"
              background="var(--primary)"
              borderRadius="100px"
              className="text-xs sm:text-sm font-bold text-primary-foreground px-6 sm:px-8 py-3 shadow-md cursor-pointer justify-center w-full sm:w-auto"
            >
              Start a Project
              <ArrowUpRight data-icon="inline-end" className="ml-2 size-4 text-primary-foreground" />
            </ShimmerButton>
          </a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOpenCalendly}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-accent text-xs font-semibold text-foreground backdrop-blur-md cursor-pointer shadow-xs w-full sm:w-auto"
          >
            <Calendar className="size-4 text-primary" /> Book a 30-min Call
          </motion.button>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Ashish Jangde. All rights reserved.</p>
          <p>Built with Next.js, FastAPI & Tailwind CSS.</p>
        </div>
      </BlurFade>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex size-9 sm:size-10 items-center justify-center rounded-full border border-border bg-card/90 backdrop-blur-md text-foreground shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4 text-primary" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

