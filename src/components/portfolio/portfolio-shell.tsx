"use client";

import React from "react";
import { Navbar } from "./navbar";
import { HeroSection } from "./hero-section";
import { ServicesSection } from "./services-section";
import { CaseStudiesSection } from "./case-studies-section";
import { WhoIWorkWith } from "./who-i-work-with";
import { ProcessSection } from "./process-section";
import { ExperienceTimeline } from "./experience-timeline";
import { TechStackSection } from "./tech-stack-section";
import { FAQSection } from "./faq-section";
import { EducationSection } from "./education-section";
import { ContactForm } from "./contact-form";
import { Footer } from "./footer";
import Velaris from "@/components/ui/velaris";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { InteractiveAmbientBackground } from "@/components/ui/interactive-ambient-background";

export function PortfolioShell() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary font-sans transition-colors duration-300">
      {/* Interactive Micro-Interaction Ambient Gradient Background */}
      <InteractiveAmbientBackground />

      {/* Floating Modern Startup Pill Glass Navigation Header */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Featured Case Studies (CrypAlgos & Kalpi.ai) */}
        <CaseStudiesSection />

        {/* Ideal Client Profiles Section */}
        <WhoIWorkWith />

        {/* Freelance & Product Engineering Process Section */}
        <ProcessSection />

        {/* Experience Section with Tracing Beam */}
        <ExperienceTimeline />

        {/* Toolkit / Tech Stack Section */}
        <TechStackSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Education Section */}
        <EducationSection />

        {/* Lead Inquiry Contact Form Section with Velaris WebGL Shader Background */}
        <section id="contact" className="my-8 sm:my-16 text-center relative border border-zinc-800/80 rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl">
          <Velaris 
            bg="#050b08"
            colors={["#10b981", "#059669", "#047857", "#000000"]}
            speed={1.5} 
            grain={0.25} 
            className="py-8 sm:py-16 px-3 sm:px-8"
          >
            <BlurFade delay={0.1} className="mx-auto mb-6 sm:mb-10 flex max-w-3xl flex-col gap-4 sm:gap-6">
              <Badge variant="outline" className="px-3.5 py-1 border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono shadow-xs backdrop-blur-md w-fit mx-auto">
                Have a product in mind? Let&apos;s build it.
              </Badge>

              <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to turn your idea into a production-ready product?
              </h2>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                Tell me what you&apos;re building, your requirements, and your estimated timeline. I&apos;ll reply with practical engineering feedback and a clear proposal for the next step.
              </p>
            </BlurFade>

            <ContactForm />
          </Velaris>
        </section>

        {/* Final CTA Banner & Footer */}
        <Footer />
      </div>
    </main>
  );
}
