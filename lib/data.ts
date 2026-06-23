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
  headline: "Designing AI-Powered Applications, Agentic Workflows, and Production-Ready Software Solutions.",
  subheadline:
    "Final-year Computer Science student building LLM applications, multi-agent systems, and intelligent automation tools — from research to working software.",
  meta: "NUML Islamabad · Final-year CS · open to relocation & remote",
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & LLM Engineering",
    items: [
      "LangGraph",
      "LangChain",
      "RAG",
      "ChromaDB",
      "Ollama",
      "Mistral AI",
      "Prompt Engineering",
      "Multi-Agent Systems",
    ],
  },
  {
    label: "Backend Engineering",
    items: ["Python", "FastAPI", "SQLAlchemy", "JWT Authentication", "REST APIs"],
  },
  {
    label: "Frontend & Mobile",
    items: ["React", "Flutter", "JavaScript"],
  },
  {
    label: "Databases & Tools",
    items: ["SQLite", "MongoDB Atlas", "Git"],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
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
    github: "https://github.com/MaazzAlii/langchain-agentic-vision-rag",
    icon: "FileSearch",
    image: "/projects/vision-rag.png",
  },
  {
    slug: "document-comparison",
    title: "Intelligent Document Comparison Platform",
    description:
      "Agentic PDF comparison tool — upload 2 documents, ask questions, and watch a LangGraph ReAct agent reason across dual ChromaDB vector stores using Mistral AI.",
    tech: ["LangGraph", "Python", "Streamlit", "ChromaDB", "Mistral AI"],
    github: "https://github.com/MaazzAlii/docagent-ai",
    icon: "GitCompare",
    image: "/projects/document-comparison.png",
  },
  {
    slug: "content-pipeline",
    title: "Multi-Agent Content Generation Platform",
    description:
      "Multi-agent content pipeline built with LangGraph and Mistral AI — specialized Researcher, Writer, and Reviewer agents coordinated by a dynamic state machine router.",
    tech: ["LangGraph", "Mistral AI", "Streamlit", "Python"],
    github: "https://github.com/MaazzAlii/orchestr-ai",
    icon: "Workflow",
    image: "/projects/content-pipeline.png",
  },
  {
    slug: "ai-context-saver",
    title: "AI Context Saver",
    description:
      "Preserves AI conversations across ChatGPT, Claude, Gemini, and Copilot with intelligent context compression. Live on the Chrome Web Store.",
    tech: ["JavaScript", "Chrome APIs", "Mistral AI"],
    github: "https://github.com/MaazzAlii/context-saver-extension",
    demo: "https://chromewebstore.google.com/detail/ai-context-saver-%E2%80%93-chatgp/lfeeefcainjkdadjjcgchjknlbgepfnm",
    icon: "Chrome",
    image: "/projects/context-saver.png",
  },
  {
    slug: "ai-voice-chatbot",
    title: "Real-Time AI Voice Assistant",
    description:
      "Real-time voice assistant with continuous speech-to-text and text-to-speech — built on the Web Speech API and Mistral AI, embedded in a Streamlit interface.",
    tech: ["Python", "Streamlit", "Mistral AI"],
    github: "https://github.com/MaazzAlii/ai-voice-chatbot-python",
    icon: "Mic",
    image: "/projects/voice-assistant.png",
  },
  {
    slug: "north-tourism",
    title: "AI-Assisted Tourism Recommendation & Booking System",
    description:
      "AI-assisted tourism recommendations and bookings for Northern Pakistan with a TF-IDF/SVD recommendation engine, FastAPI backend, JWT auth, React web platform, and Flutter mobile app.",
    tech: ["FastAPI", "Flutter", "React", "SQLite", "JWT"],
    github: "https://github.com/MaazzAlii",
    icon: "MapPinned",
    image: "/projects/tourism-system.png",
  },
];

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
    image: "/projects/prayer-app.png",
  },
  {
    name: "Pakistani GPA & CGPA Calculator",
    description:
      "GPA and CGPA calculator built for Pakistani university grading systems, with multi-university support and PDF reports.",
    tags: ["Flutter", "AdMob", "PDF Generation"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.maazinex.pakistani_gpa_calculator",
    icon: "Calculator",
    image: "/projects/gpa-calculator.png",
  },
];

export const experience = {
  role: "AI Engineer & Full Stack Developer",
  company: "Independent & Academic Projects",
  location: "Rawalpindi, Pakistan",
  period: "2025 — Present",
  points: [
    "Designed and developed AI-powered applications using LangGraph, LangChain, FastAPI, ChromaDB, and modern LLM frameworks.",
    "Built Retrieval-Augmented Generation (RAG) systems, multi-agent workflows, document intelligence solutions, and conversational AI applications.",
    "Developed scalable backend services with FastAPI, JWT authentication, SQLAlchemy, and REST APIs.",
    "Engineered AI-assisted recommendation systems, browser extensions, and intelligent automation tools.",
    "Published software products across web, browser, and mobile platforms, including Chrome Web Store and Google Play Store.",
    "Collaborated on end-to-end system design, deployment, testing, and optimization of AI-driven solutions.",
  ],
};

export const certifications = [
  { name: "NAVTTC Artificial Intelligence Training", issuer: "NAVTTC", status: "Final Exam Completed" },
  { name: "Cisco Python Essentials 1", issuer: "Cisco Networking Academy" },
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", status: "In Progress" },
];

export const contact = {
  heading: "Let's build something",
  body: "Open to AI Engineer roles, internships, software engineering positions, and freelance projects. The fastest way to reach me is email.",
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Apps", href: "#apps" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
