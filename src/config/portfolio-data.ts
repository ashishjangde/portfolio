import {
  Code2,
  Database,
  Server,
  Terminal,
  GitBranch,
  Layers,
  Activity,
  Workflow,
  Icon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: typeof Terminal;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface CrypAlgoNode {
  icon: typeof GitBranch;
  title: string;
  caption: string;
}

export interface TechItemConfig {
  name: string;
  category: string;
  iconPath: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#work" },
  { label: "Who I Work With", href: "#clients" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: Terminal,
    title: "MVP Development",
    subtitle: "From Idea to Production Launch",
    description:
      "Build a complete production-ready MVP from your product specification, requirements, or Figma design—with robust database architecture, clean APIs, and modern responsive UI.",
    tags: ["Next.js", "Python / FastAPI", "PostgreSQL", "Tailwind CSS"],
  },
  {
    icon: Code2,
    title: "Full-Stack Web Applications",
    subtitle: "Modern, Fast & Scalable SaaS Products",
    description:
      "End-to-end full-stack development using Next.js, React, TypeScript, and FastAPI. Crafted with high attention to performance, micro-interactions, and accessibility.",
    tags: ["React / Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    icon: Server,
    title: "Backend Systems & APIs",
    subtitle: "High-Concurrency & Real-Time Data Pipelines",
    description:
      "Build scalable REST and WebSocket APIs, authentication services, third-party integrations, background job queues, and real-time event-driven backends.",
    tags: ["Python / FastAPI", "Node.js", "WebSockets", "Redis"],
  },
  {
    icon: Database,
    title: "Production Infrastructure",
    subtitle: "Database Design, Caching & Cloud Hosting",
    description:
      "Database schema design, time-series data storage in ClickHouse, Redis caching layers, Docker containerization, and automated deployments on AWS and Vercel.",
    tags: ["PostgreSQL", "ClickHouse", "Docker", "AWS EC2/S3"],
  },
];

export const FREELANCE_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understand the product vision, target users, core requirements, and technical constraints to establish a clear milestone scope.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Define the database schema, API contracts, system architecture, and UI component structure to build a solid foundation.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description:
      "Ship in short milestone sprints with regular live staging previews, allowing you to test working features and give feedback early.",
  },
  {
    step: "04",
    title: "Launch & Handover",
    description:
      "Production deployment, automated checks, clean documented codebase, and complete technical handover so your team can scale.",
  },
];

export const CRYPALGOS_NODES: CrypAlgoNode[] = [
  { icon: GitBranch, title: "Visual Strategy Builder", caption: "React Flow DAG Builder" },
  { icon: Layers, title: "Strategy Compiler", caption: "Python Execution Engine" },
  { icon: Activity, title: "Backtest Engine", caption: "Event-Driven Futures & Spot" },
  { icon: Server, title: "Market Data Feed", caption: "WebSockets & ClickHouse" },
  { icon: Database, title: "Strategy Replay", caption: "Candle & Indicator Inspection" },
  { icon: Workflow, title: "Live Order Execution", caption: "Exchange REST & WebSocket APIs" },
];

export const HERO_HIGHLIGHTS = [
  ["01", "Backend", "Python · FastAPI"],
  ["02", "Frontend", "Next.js · React"],
  ["03", "Systems", "APIs · WebSockets"],
] as const;

export const TECH_ITEMS: TechItemConfig[] = [
  {
    name: "LangChain",
    category: "LLM Framework",
    iconPath: "/tech-icons/langchain.svg",
  },
  {
    name: "LangGraph",
    category: "Multi-Agent Graphs",
    iconPath: "/tech-icons/langgraph.svg",
  },
  {
    name: "LangSmith",
    category: "AI Observability",
    iconPath: "/tech-icons/langsmith.svg",
  },
  {
    name: "Qdrant",
    category: "Vector Database",
    iconPath: "/tech-icons/qdrant.svg",
  },
  {
    name: "Python",
    category: "Backend & Quant",
    iconPath: "/tech-icons/python.svg",
  },
  {
    name: "FastAPI",
    category: "High-Perf APIs",
    iconPath: "/tech-icons/fastapi.svg",
  },
  {
    name: "Next.js",
    category: "Full-Stack App",
    iconPath: "/tech-icons/nextjs.svg",
  },
  {
    name: "React",
    category: "Frontend UI",
    iconPath: "/tech-icons/react.svg",
  },
  {
    name: "TypeScript",
    category: "Core Language",
    iconPath: "/tech-icons/typescript.svg",
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    iconPath: "/tech-icons/postgresql.svg",
  },
  {
    name: "Redis",
    category: "In-Memory Cache",
    iconPath: "/tech-icons/redis.svg",
  },
  {
    name: "ClickHouse",
    category: "Analytics DB",
    iconPath: "/tech-icons/clickhouse.svg",
  },
  {
    name: "Docker",
    category: "Containerization",
    iconPath: "/tech-icons/docker.svg",
  },
  {
    name: "AWS",
    category: "Cloud Hosting",
    iconPath: "/tech-icons/aws.svg",
  },
  {
    name: "Node.js",
    category: "Runtime Engine",
    iconPath: "/tech-icons/nodejs.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Utility Styling",
    iconPath: "/tech-icons/tailwindcss.svg",
  },
];
