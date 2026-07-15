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
    "Shipping production-ready AI systems — from multi-agent pipelines and RAG architectures to published mobile apps and Chrome extensions.",
  meta: "NUML Islamabad · open to relocation & remote",
};

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

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  metrics?: string[];
  github?: string;
  demo?: string;
  huggingface?: string;
  // Primary thumbnail shown in cards and hero carousel
  image: string;
  // Additional screenshots shown in the in-card slider (optional)
  // Drop files in public/projects/ and list paths here
  images?: string[];
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
    image: "/projects/vision-rag-1.png",
    images: [
      "/projects/vision-rag-1.png",
      "/projects/vision-rag-2.png",
      "/projects/vision-rag-3.png",
      "/projects/vision-rag-4.png",
      "/projects/vision-rag-5.png",
      "/projects/vision-rag-6.png",
      "/projects/vision-rag-7.png",
    ],
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
    image: "/projects/doc-comp-1.png",
    images: [
      "/projects/doc-comp-1.png",
      "/projects/doc-comp-2.png",
      "/projects/doc-comp-3.png",
      "/projects/doc-comp-4.png",
      "/projects/doc-comp-5.png",
    ],
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
    images: [
      "/projects/content-pipeline.png",
      // Add more: "/projects/content-pipeline-2.png"
    ],
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
    images: [
      "/projects/context-saver.png",
      // Add more: "/projects/context-saver-2.png", "/projects/context-saver-3.png"
    ],
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
    images: [
      "/projects/voice-assistant.png",
      // Add more: "/projects/voice-assistant-2.png"
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

// FYP — separate type because it has many more images and dedicated section
export type FYPImage = {
  path: string;
  caption: string;
};

export const fyp = {
  title: "AI-Assisted Tourism Recommendation & Booking System for Northern Pakistan",
  shortDescription:
    "Full-stack Final Year Project — AI-powered tourism platform for Gilgit-Baltistan with a TF-IDF/SVD recommendation engine, FastAPI backend, React web app, and Flutter mobile app.",
  tech: ["FastAPI", "React", "Flutter", "SQLite", "JWT", "TF-IDF", "SVD", "Python"],
  metrics: [
    "Recommendation Engine",
    "JWT Authentication",
    "Booking Management",
    "Real-Time Availability",
    "Multi-Currency",
    "Flutter Mobile App",
  ],
  github: "https://github.com/MaazzAlii",
  // Each image has a path + caption describing what it shows
  // Drop files in public/projects/fyp/ — uses /temp.png until replaced
  images: [
    { path: "/projects/fyp/landing.png",        caption: "Landing Page — Hero & Navigation" },
    { path: "/projects/fyp/recommendations.png", caption: "AI Recommendation Engine" },
    { path: "/projects/fyp/search.png",          caption: "Destination Search & Filters" },
    { path: "/projects/fyp/destination.png",     caption: "Destination Detail Page" },
    { path: "/projects/fyp/booking.png",         caption: "Booking System & Availability" },
    { path: "/projects/fyp/hotel-detail.png",    caption: "Hotel & Accommodation Detail" },
    { path: "/projects/fyp/user-dashboard.png",  caption: "User Dashboard & Booking History" },
    { path: "/projects/fyp/admin-panel.png",     caption: "Admin Panel & Analytics" },
    { path: "/projects/fyp/flutter-home.png",    caption: "Flutter App — Home Screen" },
    { path: "/projects/fyp/flutter-explore.png", caption: "Flutter App — Explore & Discover" },
    // Add more: { path: "/projects/fyp/...", caption: "..." }
  ] as FYPImage[],
};

export type AndroidApp = {
  name: string;
  description: string;
  tags: string[];
  metrics?: string[];
  playStoreUrl?: string;
  image: string;
  images?: string[];
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
    images: [
      "/apps/prayer-times.png",
      // Add more: "/apps/prayer-times-2.png", "/apps/prayer-times-3.png"
    ],
  },
  {
    name: "Pakistani GPA & CGPA Calculator",
    description:
      "GPA and CGPA calculator for Pakistani university grading systems with multi-university support and PDF report generation.",
    tags: ["Flutter", "AdMob", "PDF Generation"],
    metrics: ["Published on Google Play", "Multi-University Support", "PDF Export"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.maazinex.pakistani_gpa_calculator",
    image: "/apps/gpa-calculator.png",
    images: [
      "/apps/gpa-calculator.png",
      // Add more: "/apps/gpa-calculator-2.png", "/apps/gpa-calculator-3.png"
    ],
  },
];

export const experience = {
  role: "Agentic AI Developer & Full Stack Engineer",
  location: "Rawalpindi, Pakistan",
  period: "2025 — Present",
  points: [
    "Architected and deployed multi-agent AI systems using LangGraph StateGraphs — including self-correcting RAG pipelines, ReAct tool-use agents, and orchestrated Researcher/Writer/Reviewer workflows.",
    "Built production-grade LLM applications integrating ChromaDB vector stores, Mistral AI, and Ollama for semantic retrieval, document intelligence, and real-time conversational AI.",
    "Engineered scalable backend services with FastAPI, SQLAlchemy, JWT authentication, and REST APIs — deployed and serving real users.",
    "Shipped cross-platform software to production: Chrome Web Store extension, two Google Play Store apps, and a full-stack tourism platform with a TF-IDF/SVD recommendation engine.",
  ],
};

export type Certification = {
  title: string;
  provider: string;
  date?: string;
  marks?: string;
  status?: string;
  // Uncomment credentialUrl and replace "#" with your real certificate/post URL when available
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Azure Fundamentals (AZ-900)",
    provider: "Microsoft",
    date: "2025",
    marks: "983 / 1000",
    status: "Completed",
    // credentialUrl: "https://www.linkedin.com/in/maazzalii/",  // Replace with actual certificate URL
  },
  {
    title: "Artificial Intelligence Training",
    provider: "NAVTTC",
    date: "2024",
    status: "Completed",
    // credentialUrl: "#",  // Replace with actual certificate URL
  },
  {
    title: "Python Essentials 1",
    provider: "Cisco Networking Academy",
    date: "2024",
    status: "Completed",
    // credentialUrl: "#",  // Replace with actual certificate URL
  },
];

export const contact = {
  heading: "Let's build something",
  body: "Open to AI Engineer roles, internships, software engineering positions, and freelance projects.",
};

export const nav = [
  { label: "Work", href: "#featured" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
