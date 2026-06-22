// lib/data.ts
// Single source of truth for all portfolio content.

export const profile = {
  name: "Maaz Ali",
  title: "AI Engineer & Full Stack Developer",
  location: "Rawalpindi, Pakistan",
  email: "maazalisshahid@gmail.com",
  linkedin: "https://linkedin.com/in/MaazzAlii",
  github: "https://github.com/MaazzAlii",
  resumeUrl: "/resume.pdf",
};

export const hero = {
  headline: "Building AI Agents, RAG Systems, and LLM Applications.",
  subheadline:
    "Final-year Computer Science student focused on Agentic AI, LangGraph workflows, FastAPI backends, and intelligent automation.",
  meta: "NUML Islamabad · Final-year CS · open to relocation & remote",
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  /** Path under /public, e.g. "/projects/vision-rag.png". Leave undefined until a real screenshot is added. */
  image?: string;
  /** Lucide icon name used for the placeholder cover when `image` is not set. */
  icon: "FileSearch" | "GitCompare" | "Workflow" | "Chrome" | "Mic" | "MapPinned";
};

export const projects: Project[] = [
  {
    slug: "vision-rag",
    title: "LangGraph Agentic Vision RAG System",
    description:
      "Agentic Vision RAG for scanned PDFs, handwritten documents, and complex layouts.",
    tech: ["LangGraph", "Python", "ChromaDB", "Mistral AI", "Ollama"],
    featured: true,
    github: "https://github.com/MaazzAlii",
    icon: "FileSearch",
  },
  {
    slug: "document-comparison",
    title: "Agentic Document Comparison System",
    description:
      "Autonomous document comparison agent with LangGraph ReAct tool selection.",
    tech: ["LangGraph", "Python", "Streamlit", "ChromaDB"],
    featured: true,
    github: "https://github.com/MaazzAlii",
    icon: "GitCompare",
  },
  {
    slug: "content-pipeline",
    title: "Multi-Agent Content Pipeline",
    description:
      "Researcher → Writer → Reviewer workflow as a LangGraph state machine.",
    tech: ["LangGraph", "Mistral AI", "Streamlit"],
    github: "https://github.com/MaazzAlii",
    icon: "Workflow",
  },
  {
    slug: "ai-context-saver",
    title: "AI Context Saver Chrome Extension",
    description:
      "Preserves AI conversations across ChatGPT, Claude, Gemini, and Copilot with context compression.",
    tech: ["JavaScript", "Chrome APIs", "Mistral AI"],
    github: "https://github.com/MaazzAlii",
    icon: "Chrome",
  },
  {
    slug: "ai-voice-chatbot",
    title: "AI Voice Chatbot",
    description:
      "Real-time voice assistant with continuous speech-to-text and text-to-speech.",
    tech: ["Python", "Streamlit", "Mistral AI"],
    github: "https://github.com/MaazzAlii",
    icon: "Mic",
  },
  {
    slug: "north-tourism",
    title: "North Tourism — Recommendation & Booking System",
    description:
      "AI-assisted tourism recommendations and bookings for Gilgit-Baltistan, with a Flutter app.",
    tech: ["FastAPI", "Flutter", "React", "SQLite", "JWT"],
    github: "https://github.com/MaazzAlii",
    icon: "MapPinned",
  },
];

export const skills = [
  "Python",
  "FastAPI",
  "LangGraph",
  "LangChain",
  "Agentic RAG",
  "ChromaDB",
  "Mistral AI",
  "Ollama",
  "Prompt Engineering",
  "Multi-Agent Systems",
  "REST APIs",
  "JWT Authentication",
  "SQLAlchemy",
  "React",
  "Flutter",
  "JavaScript",
  "SQLite",
  "MongoDB Atlas",
  "Git",
];

export const experience = {
  role: "AI Engineer — Academic & Independent Projects",
  period: "2025 — Present",
  points: [
    "Built a 7-node LangGraph Vision RAG system for scanned and handwritten document retrieval, using ChromaDB and Mistral AI.",
    "Built a multi-agent system (5 parallel agents) for automated code review using the Mistral AI SDK.",
    "Built a Chrome extension that preserves AI conversation context across ChatGPT, Claude, Gemini, and Copilot.",
    "Built FastAPI backends with JWT authentication, SQLAlchemy, and a TF-IDF/SVD recommendation engine for a client-facing tourism platform.",
  ],
};

export type AndroidApp = {
  name: string;
  description: string;
  tags: string[];
  playStoreUrl?: string;
  image?: string;
  icon: "Moon" | "Calculator";
};

export const androidApps: AndroidApp[] = [
  {
    name: "Prayer Times, Azan & Adhkar",
    description:
      "Prayer times, Qibla direction, Azan notifications, and a full Quran audio player — localized in Arabic and Urdu with RTL support.",
    tags: ["Flutter", "AdMob", "Localization"],
    icon: "Moon",
  },
  {
    name: "Pakistani GPA & CGPA Calculator",
    description:
      "GPA and CGPA calculator built for Pakistani university grading systems, with multi-university support and PDF reports.",
    tags: ["Flutter", "AdMob", "PDF Generation"],
    icon: "Calculator",
  },
];

export const certifications = [
  { name: "Cisco Python Essentials 1", issuer: "Cisco Networking Academy" },
  { name: "Artificial Intelligence Training", issuer: "NAVTTC" },
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", status: "In Progress" },
];

export const contact = {
  heading: "Let's build something",
  body: "Open to AI Engineer roles, internships, software engineering positions, and freelance projects. The fastest way to reach me is email.",
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
