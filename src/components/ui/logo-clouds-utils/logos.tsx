"use client";

import React from "react";
import Image from "next/image";

export interface LogoItemConfig {
  name: string;
  Icon: React.FC<{ className?: string; style?: React.CSSProperties }>;
  color?: string;
}

const createTechIcon = (src: string, alt: string) => {
  const IconComponent: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className }) => (
    <Image 
      src={src} 
      alt={alt} 
      width={36} 
      height={36} 
      className={`object-contain size-8 sm:size-9 transition-transform duration-200 ${className || ""}`} 
    />
  );
  IconComponent.displayName = `TechIcon_${alt}`;
  return IconComponent;
};

export const LOGOS: LogoItemConfig[] = [
  { name: "LangChain", Icon: createTechIcon("/tech-icons/langchain.svg", "LangChain") },
  { name: "LangGraph", Icon: createTechIcon("/tech-icons/langgraph.svg", "LangGraph") },
  { name: "Qdrant", Icon: createTechIcon("/tech-icons/qdrant.svg", "Qdrant") },
  { name: "Python", Icon: createTechIcon("/tech-icons/python.svg", "Python") },
  { name: "FastAPI", Icon: createTechIcon("/tech-icons/fastapi.svg", "FastAPI") },
  { name: "Next.js", Icon: createTechIcon("/tech-icons/nextjs.svg", "Next.js") },
  { name: "React", Icon: createTechIcon("/tech-icons/react.svg", "React") },
  { name: "TypeScript", Icon: createTechIcon("/tech-icons/typescript.svg", "TypeScript") },
  { name: "PostgreSQL", Icon: createTechIcon("/tech-icons/postgresql.svg", "PostgreSQL") },
  { name: "Redis", Icon: createTechIcon("/tech-icons/redis.svg", "Redis") },
  { name: "ClickHouse", Icon: createTechIcon("/tech-icons/clickhouse.svg", "ClickHouse") },
  { name: "Docker", Icon: createTechIcon("/tech-icons/docker.svg", "Docker") },
  { name: "AWS", Icon: createTechIcon("/tech-icons/aws.svg", "AWS") },
  { name: "Node.js", Icon: createTechIcon("/tech-icons/nodejs.svg", "Node.js") },
  { name: "Tailwind CSS", Icon: createTechIcon("/tech-icons/tailwindcss.svg", "Tailwind CSS") },
];
