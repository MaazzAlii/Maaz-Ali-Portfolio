// lib/data.ts — single source of truth for all portfolio content.

export const profile = {
  name: "Maaz Ali",
  title: "AI Engineer & Full Stack Developer",
  location: "Rawalpindi, Pakistan",
  email: "maazalisshahid@gmail.com",
  linkedin: "https://www.linkedin.com/in/maazzalii/",
  github: "https://github.com/MaazzAlii",
  resumeUrl: "/Maaz_Ali_Resume.pdf",
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
  image?: string;
  icon: "FileSearch" | "GitCompare" | "Workflow" | "Chrome" | "Mic" | "MapPinned";
};

export const projects: Project[] = [
  {
    slug: "vision-rag",
    title: "LangGraph Agentic Vision RAG System",
    description:
      "Agentic Vision RAG for scanned PDFs, handwritten documents, and complex layouts — 7-node LangGraph StateGraph with self-correcting retrieval.",
    tech: ["LangGraph", "Python", "ChromaDB", "Mistral AI", "Ollama"],
    featured: true,
    github: "https://github.com/MaazzAlii/langchain-agentic-vision-rag",
    icon: "FileSearch",
  },
  {
    slug: "document-comparison",
    title: "Agentic Document Comparison System",
    description:
      "Agentic PDF comparison tool — upload 2 documents, ask questions, and watch a LangGraph ReAct agent reason across dual ChromaDB vector stores using Mistral AI.",
    tech: ["LangGraph", "Python", "Streamlit", "ChromaDB", "Mistral AI"],
    featured: true,
    github: "https://github.com/MaazzAlii/docagent-ai",
    icon: "GitCompare",
  },
  {
    slug: "content-pipeline",
    title: "Multi-Agent Content Pipeline",
    description:
      "Multi-agent content pipeline built with LangGraph and Mistral AI — specialized Researcher, Writer, and Reviewer agents coordinated by a dynamic state machine router. Deployed with Streamlit.",
    tech: ["LangGraph", "Mistral AI", "Streamlit", "Python"],
    github: "https://github.com/MaazzAlii/orchestr-ai",
    icon: "Workflow",
  },
  {
    slug: "ai-context-saver",
    title: "AI Context Saver Chrome Extension",
    description:
      "Preserves AI conversations across ChatGPT, Claude, Gemini, and Copilot with intelligent context compression. Live on the Chrome Web Store.",
    tech: ["JavaScript", "Chrome APIs", "Mistral AI"],
    github: "https://github.com/MaazzAlii/context-saver-extension",
    demo: "https://chromewebstore.google.com/detail/ai-context-saver-%E2%80%93-chatgp/lfeeefcainjkdadjjcgchjknlbgepfnm",
    icon: "Chrome",
  },
  {
    slug: "ai-voice-chatbot",
    title: "AI Voice Chatbot",
    description:
      "Real-time voice assistant with continuous speech-to-text and text-to-speech — built on the Web Speech API and Mistral AI.",
    tech: ["Python", "Streamlit", "Mistral AI"],
    github: "https://github.com/MaazzAlii/ai-voice-chatbot-python",
    icon: "Mic",
  },
  {
    slug: "north-tourism",
    title: "North Tourism — Recommendation & Booking System",
    description:
      "AI-assisted tourism recommendations and bookings for Gilgit-Baltistan with a TF-IDF/SVD recommendation engine, FastAPI backend, JWT auth, React web platform, and Flutter mobile app.",
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
    "Built a multi-agent content pipeline (Researcher → Writer → Reviewer) coordinated by a LangGraph state machine router, deployed on Streamlit.",
    "Built a Chrome extension (live on Chrome Web Store) that preserves AI conversation context across ChatGPT, Claude, Gemini, and Copilot.",
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
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.maazinex.prayer_time_azan_qibla_finder",
    icon: "Moon",
  },
  {
    name: "Pakistani GPA & CGPA Calculator",
    description:
      "GPA and CGPA calculator built for Pakistani university grading systems, with multi-university support and PDF reports.",
    tags: ["Flutter", "AdMob", "PDF Generation"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.maazinex.pakistani_gpa_calculator",
    icon: "Calculator",
  },
];

export const certifications = [
  { name: "Cisco Python Essentials 1", issuer: "Cisco Networking Academy" },
  { name: "Artificial Intelligence Training", issuer: "NAVTTC" },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    status: "In Progress",
  },
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
