"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TracingBeam } from "@/components/ui/tracing-beam";

const roles = [
  {
    role: "Software Engineer",
    type: "Full-stack product engineering",
    dates: "Jun 2025 — Aug 2026",
    location: "Remote",
    summary:
      "Built and maintained product workflows across portfolio analytics, real-time broker connectivity, scheduled data pipelines, and responsive interfaces.",
    highlights: [
      "Developed Python and FastAPI services for portfolio analytics and investment workflows.",
      "Integrated broker REST and WebSocket APIs for market synchronization and order workflows.",
      "Built Next.js interfaces, including a visual strategy builder with React Flow.",
      "Worked with PostgreSQL, Redis, and ClickHouse across transactional and time-series workloads.",
    ],
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis", "ClickHouse"],
  },
  {
    role: "Software Engineer Intern",
    type: "Engineering internship",
    dates: "Jun 2025 — Nov 2025",
    location: "Remote",
    summary:
      "Contributed to the early backend foundation through API development, broker integrations, real-time data handling, and historical market-data pipelines.",
    highlights: [
      "Implemented and maintained Python and FastAPI microservices.",
      "Connected broker APIs and WebSocket streams for live product workflows.",
      "Supported PostgreSQL, Redis, ClickHouse, and historical data ingestion.",
    ],
    stack: ["Python", "FastAPI", "WebSockets", "SQLAlchemy", "Docker"],
  },
] as const;

export function ExperienceTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="border-b border-border py-12 sm:py-20">
      <BlurFade delay={0.1} className="mb-8 text-left sm:mb-12">
        <p className="mb-2 font-mono text-xs font-semibold text-primary">
          05 / Background &amp; Track Record
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          Work experience
        </h2>
        <p className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
          Hands-on full-stack product work across backend APIs, data systems,
          real-time integrations, and customer-facing interfaces.
        </p>
      </BlurFade>

      <TracingBeam className="sm:pl-7 md:pl-10">
        <div className="flex flex-col gap-5 sm:gap-6">
          {roles.map((role, index) => (
            <motion.article
              key={`${role.role}-${role.dates}`}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <Card className="relative gap-0 overflow-hidden bg-card/85 py-0 shadow-sm ring-border transition-[box-shadow,ring-color] duration-300 group-hover:shadow-xl group-hover:ring-primary/30">
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />

                <CardHeader className="gap-4 sm:gap-5 border-b border-border/70 p-4 sm:px-7 sm:py-6 sm:grid-cols-[1fr_auto]">
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <motion.div
                      whileHover={reduceMotion ? undefined : { rotate: -3, scale: 1.05 }}
                      className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-1 shadow-sm sm:size-14 sm:rounded-2xl sm:p-1.5"
                    >
                      <Image
                        src="/assets/kalpi.webp"
                        alt="Kalpi.ai"
                        width={56}
                        height={56}
                        className="size-full object-contain"
                      />
                    </motion.div>

                    <div className="min-w-0">
                      <div className="mb-1.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <Badge variant="secondary" className="text-[10px] sm:text-xs">Kalpi.ai</Badge>
                        <Badge variant="outline" className="text-[10px] sm:text-xs">{role.type}</Badge>
                      </div>
                      <CardTitle className="text-base font-semibold tracking-tight sm:text-xl">
                        {role.role}
                      </CardTitle>
                      <CardDescription className="mt-0.5 sm:mt-1 flex items-center gap-1.5 text-xs">
                        <MapPin aria-hidden="true" className="size-3.5" />
                        {role.location}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start rounded-full border border-border bg-muted/50 px-3 py-1.5 font-mono text-[11px] sm:text-xs text-muted-foreground sm:justify-self-end">
                    <BriefcaseBusiness aria-hidden="true" className="size-3.5 text-primary" />
                    {role.dates}
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-4 sm:gap-5 p-4 sm:px-7 sm:py-6">
                  <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {role.summary}
                  </p>

                  <ul className="grid gap-2.5 sm:gap-3 md:grid-cols-2" aria-label={`${role.role} responsibilities`}>
                    {role.highlights.map((highlight) => (
                      <motion.li
                        key={highlight}
                        whileHover={reduceMotion ? undefined : { x: 3 }}
                        className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 size-3.5 sm:size-4 shrink-0 text-primary"
                        />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-wrap gap-1.5 sm:gap-2 border-t border-border/70 p-4 sm:px-7">
                  {role.stack.map((technology) => (
                    <Badge key={technology} variant="outline" className="font-mono text-[10px] sm:text-xs">
                      {technology}
                    </Badge>
                  ))}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-auto hidden size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:block motion-reduce:transition-none"
                  />
                </CardFooter>
              </Card>
            </motion.article>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}
