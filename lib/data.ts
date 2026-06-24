// lib/data.ts — single source of truth. Edit here only.

export const profile = {
  name: "Maaz Ali",
  title: "AI Engineer",
  location: "Rawalpindi, Pakistan",
  email: "maazalisshahid@gmail.com",
  linkedin: "https://www.linkedin.com/in/maazzalii/",
  github: "https://github.com/MaazzAlii",
  resumeUrl: "/Maaz_Ali_Resume.pdf",
};

export const hero = {
  headline: "AI Engineer building intelligent applications, RAG systems, and agentic workflows using LLMs, FastAPI, LangGraph, and modern AI infrastructure.",
  subheadline:
    "Final-year Computer Science student shipping production-ready AI systems — from multi-agent pipelines to published mobile apps.",
  meta: "NUML Islamabad · open to relocation & remote",
};

// ─── SKILLS ──────────────────────────────────────────────────────────────────

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & LLM Engineering",
    items: ["LangGraph", "LangChain", "RAG", "ChromaDB", "Ollama", "Mistral AI", "Prompt Engineering", "Multi-Agent Systems"],
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

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  metrics?: string[];          // e.g. ["Open Source", "Local-First Architecture"]
  github?: string;
  demo?: string;
  huggingface?: string;
  /** Drop file in public/projects/<filename>. Uses /temp.png until replaced. */
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "vision-rag",
    title: "LangGraph Agentic Vision RAG System",
    description:
      "Agentic Vision RAG for scanned PDFs, handwritten documents, and complex layouts — 7-node LangGraph StateGraph with self-correcting retrieval.",
    tech: ["LangGraph", "Python", "ChromaDB", "Mistral AI", "Ollama"],
    metrics: ["Self-Correcting Retrieval", "7-Node StateGraph", "Open Source"],
    github: "https://github.com/MaazzAlii/langchain-agentic-vision-rag",
    image: "/projects/vision-rag.png",
    featured: true,
  },
  {
    slug: "document-comparison",
    title: "Intelligent Document Comparison Platform",
    description:
      "Upload 2 documents, ask questions, and watch a LangGraph ReAct agent reason across dual ChromaDB vector stores using Mistral AI.",
    tech: ["LangGraph", "Python", "Streamlit", "ChromaDB", "Mistral AI"],
    metrics: ["ReAct Agent", "Dual Vector Stores", "Open Source"],
    github: "https://github.com/MaazzAlii/docagent-ai",
    image: "/projects/document-comparison.png",
    featured: true,
  },
  {
    slug: "content-pipeline",
    title: "Multi-Agent Content Generation Platform",
    description:
      "Researcher → Writer → Reviewer agents coordinated by a LangGraph state machine router — full content pipeline from query to polished output.",
    tech: ["LangGraph", "Mistral AI", "Streamlit", "Python"],
    metrics: ["3 Specialist Agents", "State Machine Router", "Open Source"],
    github: "https://github.com/MaazzAlii/orchestr-ai",
    image: "/projects/content-pipeline.png",
    featured: true,
  },
  {
    slug: "ai-context-saver",
    title: "AI Context Saver",
    description:
      "Preserves AI conversations across ChatGPT, Claude, Gemini, and Copilot with intelligent context compression. Live on the Chrome Web Store.",
    tech: ["JavaScript", "Chrome APIs", "Mistral AI"],
    metrics: ["Published on Chrome Web Store", "Local-First Architecture", "Open Source"],
    github: "https://github.com/MaazzAlii/context-saver-extension",
    demo: "https://chromewebstore.google.com/detail/ai-context-saver-%E2%80%93-chatgp/lfeeefcainjkdadjjcgchjknlbgepfnm",
    image: "/projects/context-saver.png",
    featured: true,
  },
  {
    slug: "ai-voice-chatbot",
    title: "Real-Time AI Voice Assistant",
    description:
      "Continuous speech-to-text and text-to-speech with Mistral AI — real-time voice conversation in a Streamlit interface.",
    tech: ["Python", "Streamlit", "Mistral AI"],
    metrics: ["Real-Time STT/TTS", "Open Source"],
    github: "https://github.com/MaazzAlii/ai-voice-chatbot-python",
    image: "/projects/voice-assistant.png",
  },
  {
    slug: "north-tourism",
    title: "AI-Assisted Tourism Recommendation & Booking System",
    description:
      "Full-stack tourism platform for Northern Pakistan — TF-IDF/SVD recommendation engine, FastAPI backend, JWT auth, React web, and Flutter mobile app.",
    tech: ["FastAPI", "Flutter", "React", "SQLite", "JWT"],
    metrics: ["Recommendation Engine", "JWT Authentication", "Booking Management"],
    github: "https://github.com/MaazzAlii",
    image: "/projects/tourism-system.png",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

// ─── ANDROID APPS ────────────────────────────────────────────────────────────

export type AndroidApp = {
  name: string;
  description: string;
  tags: string[];
  metrics?: string[];
  playStoreUrl?: string;
  /** Drop file in public/apps/<filename>. Uses /temp.png until replaced. */
  image: string;
};

export const androidApps: AndroidApp[] = [
  {
    name: "Prayer Times, Azan & Adhkar",
    description:
      "Prayer times, Qibla direction, Azan notifications, and a full Quran audio player — localized in Arabic and Urdu with RTL support.",
    tags: ["Flutter", "AdMob", "Localization"],
    metrics: ["Published on Google Play", "RTL Support", "Qibla + Azan Features"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.maazinex.prayer_time_azan_qibla_finder",
    image: "/apps/prayer-times.png",
  },
  {
    name: "Pakistani GPA & CGPA Calculator",
    description:
      "GPA and CGPA calculator for Pakistani university grading systems with multi-university support and PDF report generation.",
    tags: ["Flutter", "AdMob", "PDF Generation"],
    metrics: ["Published on Google Play", "Multi-University Support", "PDF Export"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.maazinex.pakistani_gpa_calculator",
    image: "/apps/gpa-calculator.png",
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

export const experience = {
  role: "AI Engineer",
  location: "Rawalpindi, Pakistan",
  period: "2025 — Present",
  points: [
    "Built and deployed AI-powered applications using LangGraph, FastAPI, ChromaDB, and modern LLM frameworks.",
    "Developed Retrieval-Augmented Generation (RAG) systems, multi-agent workflows, and document intelligence solutions.",
    "Engineered production-ready backend services using FastAPI, JWT authentication, SQLAlchemy, and REST APIs.",
    "Published software products across web, browser, and mobile platforms including Chrome Web Store and Google Play Store.",
  ],
};

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────

export type Certification = {
  title: string;
  provider: string;
  date?: string;
  credentialUrl?: string;
  status?: string;
  /** Drop file in public/certifications/<filename> if you have a PDF/image. */
  image?: string;
};

export const certifications: Certification[] = [
  {
    title: "Artificial Intelligence Training",
    provider: "NAVTTC",
    date: "2024",
    status: "Completed",
  },
  {
    title: "Python Essentials 1",
    provider: "Cisco Networking Academy",
    date: "2024",
    status: "Completed",
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    provider: "Microsoft",
    status: "In Progress",
  },
];

// ─── CONTACT ─────────────────────────────────────────────────────────────────

export const contact = {
  heading: "Let's build something",
  body: "Open to AI Engineer roles, internships, software engineering positions, and freelance projects.",
};

// ─── NAV ─────────────────────────────────────────────────────────────────────

export const nav = [
  { label: "Work", href: "#featured" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
