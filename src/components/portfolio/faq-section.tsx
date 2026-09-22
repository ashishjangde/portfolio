"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "faq-1",
    question: "What type of projects do you take?",
    answer:
      "I specialize in building complete SaaS MVPs, custom full-stack web applications, high-performance REST & WebSocket APIs, background worker systems, database architectures, and real-time financial/data dashboards.",
  },
  {
    value: "faq-2",
    question: "Can you work with an existing codebase?",
    answer:
      "Yes. I regularly jump into existing codebases to fix performance bottlenecks, refactor services, integrate new features, upgrade tech stacks, or build new API modules without breaking existing workflows.",
  },
  {
    value: "faq-3",
    question: "Can you build an MVP from scratch?",
    answer:
      "Absolutely. I can take a raw product idea, technical specification, or Figma mockups and handle the complete development lifecycle—from database modeling to frontend UI, backend API, deployment, and documentation.",
  },
  {
    value: "faq-4",
    question: "Do you work with early-stage startups & founders?",
    answer:
      "Yes. I work closely with startup founders who need clean engineering, rapid execution, transparent milestone demos, and direct technical ownership without corporate overhead.",
  },
  {
    value: "faq-5",
    question: "Can we schedule a call before starting?",
    answer:
      "Yes! You can book a 30-minute discovery call directly to discuss your project scope, architecture requirements, budget, and estimated timeline.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 border-b border-border">
      <BlurFade delay={0.1} className="mb-12 text-left">
        <p className="text-xs font-mono text-primary font-semibold mb-2">
          07 / Frequently Asked Questions
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Common questions & clear answers.
        </h2>
        <p className="text-muted-foreground max-w-2xl mt-2 text-sm leading-relaxed">
          Everything you need to know about starting a project, technical collaboration, and delivery terms.
        </p>
      </BlurFade>

      <BlurFade delay={0.2} className="max-w-3xl mx-auto text-left">
        <Accordion className="border border-border bg-card/60 backdrop-blur-md rounded-2xl shadow-xs">
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value} className="border-b border-border/80 last:border-0 px-2">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BlurFade>
    </section>
  );
}
