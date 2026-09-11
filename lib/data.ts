// lib/data.ts — single source of truth. Edit here only.

export const profile = {
  name: "Maaz Ali",
  title: "AI Engineer · Automation (n8n & GHL) · Content Creator",
  tagline: "Building AI systems, automating businesses, and teaching it all in public.",
  location: "Rawalpindi, Pakistan",
  email: "maazalisshahid@gmail.com",
  linkedin: "https://www.linkedin.com/in/maazzalii/",
  github: "https://github.com/MaazzAlii",
  resumeUrl: "/Maaz_Ali_Resume.pdf",
  photo: "/maaz-ali-photo.png",
};

export type SocialLink = { label: string; url: string; icon: "linkedin" | "github" | "mail" | "instagram" | "telegram" | "tiktok" | "youtube" | "facebook" };

export const socials: SocialLink[] = [
  { label: "LinkedIn", url: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", url: profile.github, icon: "github" },
  { label: "Instagram", url: "https://www.instagram.com/maazali.ai/", icon: "instagram" },
  { label: "YouTube", url: "https://www.youtube.com/@Maazali_ai", icon: "youtube" },
  { label: "TikTok", url: "https://www.tiktok.com/@maazali_ai", icon: "tiktok" },
  { label: "Telegram", url: "https://t.me/Maazinex", icon: "telegram" },
  { label: "Facebook", url: "https://www.facebook.com/maazaliai", icon: "facebook" },
];

export const hero = {
  headline: "AI Engineer building intelligent applications, RAG systems, and agentic workflows — and automating businesses end-to-end with n8n and GoHighLevel.",
  subheadline:
    "Shipping production-ready AI systems, client automations, and published mobile apps — and sharing the process with a growing audience across YouTube, Instagram, and TikTok.",
  meta: "NUML Islamabad · open to relocation & remote",
};

export const about = {
  eyebrow: "About",
  heading: "AI Engineer, automation builder, and content creator",
  paragraphs: [
    "I'm a final-year Computer Science student who builds production-grade AI systems — agentic RAG pipelines, multi-agent orchestration with LangGraph, and LLM-powered backends — for startups, agencies, and internal ventures.",
    "Alongside engineering, I design end-to-end business automations with n8n and GoHighLevel: lead pipelines, AI voice/chat agents, CRM workflows, and content systems that run without manual upkeep.",
    "I also document the build process publicly — breaking down AI engineering and automation workflows for an audience across YouTube, Instagram, TikTok, and Telegram.",
  ],
};

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & LLM Engineering",
    items: ["LangGraph", "LangChain", "RAG", "ChromaDB", "Ollama", "Mistral AI", "Prompt Engineering", "Multi-Agent Systems"],
  },
  {
    label: "Automation & Workflows",
    items: ["n8n", "GoHighLevel (GHL)", "Webhooks", "API Integrations", "WhatsApp/Telegram Bots", "CRM Automation"],
  },
  {
    label: "Backend Engineering",
    items: ["Python", "FastAPI", "Node.js", "SQLAlchemy", "JWT Authentication", "REST APIs"],
  },
  {
    label: "Frontend & Mobile",
    items: ["React", "Next.js", "Flutter", "TypeScript", "JavaScript"],
  },
  {
    label: "Databases & Tools",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "Docker", "Git"],
  },
];

export type ProjectCategory =
  | "AI & Agentic Systems"
  | "Automation & Workflows"
  | "Enterprise Full-Stack & SaaS"
  | "Mobile Apps"
  | "Python Core & Utilities"
  | "Client & Freelance Work"
  | "Personal Ventures";

export const categories: { key: ProjectCategory; blurb: string }[] = [
  { key: "AI & Agentic Systems", blurb: "Agentic RAG, multi-agent orchestration, and LLM-powered applications." },
  { key: "Automation & Workflows", blurb: "n8n pipelines and business-process automation." },
  { key: "Enterprise Full-Stack & SaaS", blurb: "Production-shaped full-stack apps with real auth, payments, and data." },
  { key: "Mobile Apps", blurb: "Cross-platform mobile engineering." },
  { key: "Python Core & Utilities", blurb: "Focused tools, dashboards, and scripts." },
  { key: "Client & Freelance Work", blurb: "Confidential engagements — described here to show scope of work; repos are private." },
  { key: "Personal Ventures", blurb: "Products built and kept closed-source as personal/venture work." },
];

export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  visibility: "public" | "private";
  description: string;
  longDescription?: string;
  tech: string[];
  metrics?: string[];
  github?: string;
  links?: ProjectLink[];
  demo?: string;
  huggingface?: string;
  image?: string;
  images?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  // ───────────────────────── AI & Agentic Systems ─────────────────────────
  {
    slug: "vision-rag",
    title: "LangGraph Agentic Vision RAG System",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Agentic Vision RAG for scanned PDFs, handwritten documents, and complex layouts — 7-node LangGraph StateGraph with self-correcting retrieval.",
    longDescription:
      "A multi-modal retrieval-augmented generation system built around a 7-node LangGraph StateGraph. Vision-based ingestion parses scanned PDFs, handwritten notes, and complex layouts into a ChromaDB vector store, and a self-correcting retrieval loop re-queries when confidence is low instead of returning a weak answer.",
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
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Upload 2 documents, ask questions, and watch a LangGraph ReAct agent reason across dual ChromaDB vector stores using Mistral AI.",
    longDescription:
      "DocCompare AI lets a user upload two documents and ask natural-language comparison questions. A LangGraph ReAct agent plans its own tool calls, querying two independent ChromaDB vector stores (one per document) and synthesizing a grounded, cited answer via Mistral AI.",
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
    slug: "hr-automation",
    title: "Enterprise HR Service Automation Engine",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "LangGraph-orchestrated HR engine that classifies employee requests, enforces deterministic approval policy, and integrates Google Workspace + WhatsApp.",
    longDescription:
      "An enterprise-grade HR service engine that strictly separates LLM responsibilities (intent classification, entity extraction, empathetic responses) from deterministic business logic (leave-balance checks, approval-threshold routing, escalation). Classifies 8 core HR intents, integrates Google Sheets/Gmail/Calendar/Drive, and supports WhatsApp via Twilio and Meta Cloud API adapters.",
    tech: ["LangGraph", "FastAPI", "PostgreSQL", "Redis", "React"],
    metrics: ["8 HR Intents", "Human Approval Gates", "WhatsApp Integration"],
    github: "https://github.com/MaazzAlii/enterprise-hr-automation-engine",
    image: "/projects/hr-automation-1.jpg",
    images: ["/projects/hr-automation-1.jpg"],
    featured: true,
  },
  {
    slug: "content-pipeline",
    title: "Multi-Agent Content Generation Platform",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Researcher → Writer → Reviewer agents coordinated by a LangGraph state machine router — full content pipeline from query to polished output.",
    tech: ["LangGraph", "Mistral AI", "Streamlit", "Python"],
    metrics: ["3 Specialist Agents", "State Machine Router", "Open Source"],
    github: "https://github.com/MaazzAlii/orchestr-ai",
    image: "/projects/content-pipeline.png",
    images: ["/projects/content-pipeline.png"],
    featured: true,
  },
  {
    slug: "ai-context-saver",
    title: "AI Context Saver",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Preserves AI conversations across ChatGPT, Claude, Gemini, and Copilot with intelligent context compression. Live on the Chrome Web Store.",
    tech: ["JavaScript", "Chrome APIs", "Mistral AI"],
    metrics: ["Published on Chrome Web Store", "Local-First Architecture", "Open Source"],
    github: "https://github.com/MaazzAlii/context-saver-extension",
    demo: "https://chromewebstore.google.com/detail/ai-context-saver-%E2%80%93-chatgp/lfeeefcainjkdadjjcgchjknlbgepfnm",
    image: "/projects/context-saver.png",
    images: ["/projects/context-saver.png"],
    featured: true,
  },
  {
    slug: "ai-voice-chatbot",
    title: "Real-Time AI Voice Assistant",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Continuous speech-to-text and text-to-speech with Mistral AI — real-time voice conversation in a Streamlit interface.",
    tech: ["Python", "Streamlit", "Mistral AI"],
    metrics: ["Real-Time STT/TTS", "Open Source"],
    github: "https://github.com/MaazzAlii/ai-voice-chatbot-python",
    image: "/projects/voice-assistant.png",
    images: ["/projects/voice-assistant.png"],
  },
  {
    slug: "techbazaar-shopping-assistant",
    title: "TechBazaar AI Shopping Assistant",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Full-stack AI shopping assistant with native LLM function-calling, live checkout, and n8n order-automation workflows.",
    tech: ["Streamlit", "Mistral AI", "Google Gemini", "Groq", "Stripe", "n8n"],
    github: "https://github.com/MaazzAlii/techbazaar-ai-shopping-assistant",
  },
  {
    slug: "safex-rag-chatbot",
    title: "SafeX RAG Knowledge Assistant",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Enterprise-grade knowledge-retrieval assistant that scrapes and refreshes its own knowledge base for document query resolution.",
    tech: ["RAG", "ChromaDB", "sentence-transformers", "FastAPI", "Playwright"],
    github: "https://github.com/MaazzAlii/Rag-Chatbot-Safex",
  },
  {
    slug: "ai-talent-advisor",
    title: "AI Talent Advisor — Resume Screener",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Recruiting agent that parses CVs via Mistral OCR and ranks candidates against job criteria across weighted evaluation dimensions.",
    tech: ["Groq", "Mistral AI", "FastAPI", "python-docx"],
    github: "https://github.com/MaazzAlii/ai-talent-advisor",
  },
  {
    slug: "ollamastream-studio",
    title: "OllamaStream Studio — Local LLM Interface",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Local desktop playground for chatting with and testing open-source LLMs fully offline, with a cloud-API mode via Mistral AI.",
    tech: ["Streamlit", "Ollama", "Mistral AI", "Pandas"],
    github: "https://github.com/MaazzAlii/OllamaStream-Local-LLM-Interface",
  },
  {
    slug: "mediquant-llm-finetuning",
    title: "MediQuant — Medical LLM Fine-Tuning",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Real LoRA/PEFT fine-tuning pipeline (not just inference) producing a clinical-QA specialized LLM with tracked evaluation metrics.",
    tech: ["PyTorch", "Unsloth", "Hugging Face TRL/PEFT", "LoRA"],
    github: "https://github.com/MaazzAlii/MediQuant-Medical-LLM-FineTuning",
  },
  {
    slug: "agentic-vision-numpy-lab",
    title: "Agentic Vision RAG (NumPy Lab)",
    category: "AI & Agentic Systems",
    visibility: "public",
    description:
      "Interactive experimentation repository exploring array manipulation and early vector-extraction techniques for multi-modal RAG.",
    tech: ["Python", "NumPy"],
    github: "https://github.com/MaazzAlii/Agentic-Vision-RAG",
  },

  // ───────────────────────── Automation & Workflows ─────────────────────────
  {
    slug: "telegram-content-pipeline",
    title: "Telegram AI Content Automation Pipeline",
    category: "Automation & Workflows",
    visibility: "public",
    description:
      "Human-in-the-loop content curation built on n8n: research → draft → sheet queue → human approval → scheduled Telegram post.",
    longDescription:
      "An n8n workflow that automates content curation end-to-end while keeping a human approval gate in the loop: it researches topics, drafts posts, queues them in Google Sheets for review, and publishes approved posts to Telegram on a schedule — removing manual busywork without removing oversight.",
    tech: ["n8n", "Google Sheets API", "Python"],
    github: "https://github.com/MaazzAlii/telegram-ai-content-pipeline",
  },

  // ───────────────────────── Enterprise Full-Stack & SaaS ─────────────────────────
  {
    slug: "multivendor-ecommerce-platform",
    title: "Multi-Vendor E-Commerce Platform",
    category: "Enterprise Full-Stack & SaaS",
    visibility: "public",
    description:
      "Multi-role (buyer/seller/admin) marketplace with split-by-vendor orders, Stripe payments, and automated test coverage.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Stripe", "Cloudinary", "Jest"],
    github: "https://github.com/MaazzAlii/mern-multivendor-ecommerce-api",
    links: [{ label: "Frontend repo", url: "https://github.com/MaazzAlii/multivendor-ecommerce-frontend-react-vite" }],
  },
  {
    slug: "edupulse-lms",
    title: "EduPulse LMS — Production Next.js 15 App",
    category: "Enterprise Full-Stack & SaaS",
    visibility: "public",
    description:
      "Full-stack Learning Management System: auth, course creation, progress tracking, video, payments, and its own e2e test suite.",
    tech: ["Next.js 15", "MongoDB", "JWT", "Stripe", "Resend", "Playwright"],
    github: "https://github.com/MaazzAlii/edupulse-lms-nextjs",
  },
  {
    slug: "taskflow-devops-pipeline",
    title: "TaskFlow — Containerized MERN DevOps Pipeline",
    category: "Enterprise Full-Stack & SaaS",
    visibility: "public",
    description: "Task manager containerized with Docker, featuring a real CI/CD deployment pipeline.",
    tech: ["React", "TypeScript", "Docker", "Express"],
    github: "https://github.com/MaazzAlii/taskflow-mern-devops-pipeline",
  },
  {
    slug: "taskflow-typescript",
    title: "TaskFlow API (TypeScript)",
    category: "Enterprise Full-Stack & SaaS",
    visibility: "public",
    description: "Strictly-typed TaskFlow rewrite with generics, superseding the plain-JS version.",
    tech: ["TypeScript", "Express", "MongoDB", "JWT"],
    github: "https://github.com/MaazzAlii/taskflow-api-typescript-express-mongodb",
    links: [{ label: "Frontend repo", url: "https://github.com/MaazzAlii/taskflow-frontend-typescript-react-vite" }],
  },
  {
    slug: "movie-ticket-booking",
    title: "Movie Ticket Booking System",
    category: "Enterprise Full-Stack & SaaS",
    visibility: "public",
    description: "Seat-level ticketing platform with role-based access control.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    github: "https://github.com/MaazzAlii/movie-ticket-booking-api-node-express-mongodb",
    links: [{ label: "Frontend repo", url: "https://github.com/MaazzAlii/movie-ticket-booking-frontend-react-vite" }],
  },
  {
    slug: "hotel-booking-engine",
    title: "Hotel Booking Engine & REST API",
    category: "Enterprise Full-Stack & SaaS",
    visibility: "public",
    description: "Real-time availability checks, authentication, bookings, and reviews.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/MaazzAlii/hotel-booking-api-node-express-mongodb-jwt",
    links: [{ label: "Frontend repo", url: "https://github.com/MaazzAlii/hotel-booking-frontend-react-vite" }],
  },
  {
    slug: "trading-post",
    title: "Trading Post Platform",
    category: "Enterprise Full-Stack & SaaS",
    visibility: "public",
    description: "Storefront demonstrating both Context API and Redux Toolkit — with async thunks for live API data — side by side.",
    tech: ["React", "Redux Toolkit", "Context API", "Vite"],
    github: "https://github.com/MaazzAlii/Trading-Post",
  },
  {
    slug: "personal-portfolio-v2",
    title: "Maaz Ali — AI Engineer Portfolio (v2)",
    category: "Enterprise Full-Stack & SaaS",
    visibility: "public",
    description: "This site — a data-driven portfolio with per-project detail pages, dark/light themes, and optimized Web Vitals.",
    tech: ["Next.js 15", "TypeScript", "Tailwind", "Framer Motion", "Resend"],
    github: "https://github.com/MaazzAlii/Maaz-Ali-Portfolio",
  },

  // ───────────────────────── Mobile Apps ─────────────────────────
  {
    slug: "ridewave-ride-sharing",
    title: "RideWave — Real-Time Car Booking Platform",
    category: "Mobile Apps",
    visibility: "public",
    description: "Full-stack mobile ride-hailing app with real-time geolocation tracking, driver matching, and fare estimation.",
    tech: ["React Native", "Node.js", "WebSockets"],
    github: "https://github.com/MaazzAlii/ridewave-react-native-ride-sharing-app",
  },
  {
    slug: "book-tracker-app",
    title: "Book Tracker Mobile App",
    category: "Mobile Apps",
    visibility: "public",
    description: "Library and reading-goal tracker with progress tracking, built on Expo and Appwrite.",
    tech: ["React Native", "Expo", "Appwrite"],
    github: "https://github.com/MaazzAlii/react-native-expo-appwrite-book-tracker",
  },

  // ───────────────────────── Python Core & Utilities ─────────────────────────
  {
    slug: "karmax-ml-microapps",
    title: "Karmax Internship — ML Micro-Apps",
    category: "Python Core & Utilities",
    visibility: "public",
    description: "Four classical-ML micro-apps served via FastAPI: resume screening, churn prediction, fraud detection, and chatbot NLP.",
    tech: ["FastAPI", "scikit-learn", "joblib", "pandas"],
    github: "https://github.com/MaazzAlii/Karmax-Intership",
  },
  {
    slug: "delivery-sales-forecast-dashboard",
    title: "Delivery Partner Sales Forecast Dashboard",
    category: "Python Core & Utilities",
    visibility: "public",
    description: "Forecasting dashboard pairing a Python model with a Next.js UI (synthetic data, no real-brand affiliation).",
    tech: ["Next.js", "Python"],
    github: "https://github.com/MaazzAlii/delivery-partner-sales-forecast-dashboard",
  },
  {
    slug: "markitdown-web-ui",
    title: "MarkItDown Web UI — Document Converter",
    category: "Python Core & Utilities",
    visibility: "public",
    description: "Web GUI wrapper for converting PDFs, Office documents, and web pages into clean Markdown.",
    tech: ["Streamlit", "Microsoft MarkItDown"],
    github: "https://github.com/MaazzAlii/markitdown-web-ui",
  },
  {
    slug: "pdf-ppt-image-merger",
    title: "PDF/PPT/Image Merger",
    category: "Python Core & Utilities",
    visibility: "public",
    description: "Utility for merging and converting between PDF, PowerPoint, and image formats.",
    tech: ["Streamlit", "pypdf", "python-pptx", "reportlab"],
    github: "https://github.com/MaazzAlii/pdf-ppt-image-merger",
  },
  {
    slug: "python-fundamentals-collection",
    title: "Python Fundamentals Collection",
    category: "Python Core & Utilities",
    visibility: "public",
    description: "Turtle-graphics and core-syntax exercises: Pizza Deliveries, Tip Calculator, and Treasure Island.",
    tech: ["Python"],
    github: "https://github.com/MaazzAlii/python-pizza-deliveries",
    links: [
      { label: "Tip Calculator", url: "https://github.com/MaazzAlii/python-tip-calculator" },
      { label: "Treasure Island", url: "https://github.com/MaazzAlii/python-treasure-island" },
    ],
  },

  // ───────────────────────── Client & Freelance Work (private, anonymized) ─────────────────────────
  {
    slug: "hospital-management-system",
    title: "Offline Hospital Management System",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "Desktop HMS built for a real clinic client — offline-first, local database, PDF invoicing/reports, multi-role staff workflows.",
    tech: ["Electron", "Next.js", "SQLite"],
  },
  {
    slug: "ai-voice-receptionist-saas",
    title: "AI Voice Receptionist SaaS",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "Multi-tenant voice-agent platform letting local service businesses (clinics, salons, hotels) deploy customizable phone receptionists.",
    tech: ["Python", "FastAPI", "Web Speech API"],
  },
  {
    slug: "geospatial-intelligence-platform",
    title: "Geospatial Intelligence Agentic AI Platform",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "Agentic AI platform for a Dubai-based client engagement, delivered with a contracted development partner.",
    tech: ["LangGraph", "Python", "Geospatial APIs"],
  },
  {
    slug: "voice-taxi-booking-agent",
    title: "AI Voice & Taxi-Booking Agent",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "Conversational voice agent handling taxi-booking flows end-to-end, delivered with a contracted development partner.",
    tech: ["Python", "Voice AI", "Booking Engine"],
  },
  {
    slug: "ai-shopping-voice-assistant",
    title: "AI Shopping Assistant Voice Agent",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "Retail voice assistant combining LLM function-calling with retrieval-augmented product Q&A for a client's storefront.",
    tech: ["Retell AI", "OpenAI Embeddings", "RAG"],
  },
  {
    slug: "ocr-document-processing-pipeline",
    title: "OCR & Document Processing Pipeline",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "Automated pipeline extracting structured data from scanned documents and receipts during a company internship engagement.",
    tech: ["Vision LLMs", "OCR", "spaCy"],
  },
  {
    slug: "accounting-firm-website-audit",
    title: "Website Audit for an Accounting Firm",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "Full front-end audit deliverable — written report plus before/after screenshots — for an accounting firm client.",
    tech: ["React", "Vite"],
  },
  {
    slug: "multilanguage-booking-demo",
    title: "Multi-Language Booking Platform (Demo)",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "Paid multi-language booking demo built for a client; on hold pending the client's production budget.",
    tech: ["Full-Stack Web"],
  },
  {
    slug: "hotel-concierge-bot",
    title: "Hotel Booking Concierge Bot",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "AI voice and chat concierge for real-time hotel room reservations, delivered as an internship project.",
    tech: ["FastAPI", "Node.js/Express", "React", "Voice/Chat AI"],
  },
  {
    slug: "ecommerce-support-bot",
    title: "E-Commerce Customer Support & Return Handler Bot",
    category: "Client & Freelance Work",
    visibility: "private",
    description: "Knowledge-base-driven support bot handling customer service and return-flow queries for an e-commerce client.",
    tech: ["Conversational AI"],
  },

  // ───────────────────────── Personal Ventures (private) ─────────────────────────
  {
    slug: "handlescope",
    title: "HandleScope",
    category: "Personal Ventures",
    visibility: "private",
    description: "Domain and social-handle availability checker product, kept closed-source.",
    tech: ["Python"],
  },
  {
    slug: "ai-business-os",
    title: "AI Business OS",
    category: "Personal Ventures",
    visibility: "private",
    description: "All-in-one AI operating system for small businesses: internal document RAG, dashboards, and workflow automation.",
    tech: ["FastAPI", "ChromaDB", "Mistral AI"],
  },
  {
    slug: "innoventix-crm-saas",
    title: "Innoventix — Multi-Tenant CRM & Project Management SaaS",
    category: "Personal Ventures",
    visibility: "private",
    description: "Multi-tenant SaaS combining CRM pipelines with project/task management, built as a personal venture.",
    tech: ["Next.js", "FastAPI", "MongoDB"],
  },
  {
    slug: "enterprise-voice-agent-scaffold",
    title: "Enterprise AI Voice Agent Platform",
    category: "Personal Ventures",
    visibility: "private",
    description: "Early-stage platform scaffold for a self-serve enterprise AI voice receptionist product.",
    tech: ["LangGraph", "Qdrant", "Twilio"],
  },
  {
    slug: "local-image-upscaler",
    title: "Local Image Upscaler & Resizer",
    category: "Personal Ventures",
    visibility: "private",
    description: "Offline tool for image upscaling, batch processing, and resolution management.",
    tech: ["Streamlit", "Python", "Pillow"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

// FYP — separate type because it has many more images and dedicated section
export type FYPImage = {
  path: string;
  caption: string;
};

export const fyp: {
  title: string;
  shortDescription: string;
  tech: string[];
  metrics: string[];
  github: string;
  demo?: string;
  images: FYPImage[];
} = {
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
  // Each image has a path + caption describing what it shows.
  // Real screenshots were never dropped in public/projects/fyp/, which made every
  // slide 404 against the same missing file on every render — collapsed to the
  // one existing placeholder until real screenshots are added.
  // To restore the full gallery: drop files in public/projects/fyp/ and re-add
  // entries like { path: "/projects/fyp/landing.png", caption: "Landing Page — Hero & Navigation" }.
  images: [
    { path: "/temp.png", caption: "AI-Assisted Tourism Recommendation & Booking System" },
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
    images: ["/apps/prayer-times.png"],
  },
  {
    name: "Pakistani GPA & CGPA Calculator",
    description:
      "GPA and CGPA calculator for Pakistani university grading systems with multi-university support and PDF report generation.",
    tags: ["Flutter", "AdMob", "PDF Generation"],
    metrics: ["Published on Google Play", "Multi-University Support", "PDF Export"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.maazinex.pakistani_gpa_calculator",
    image: "/apps/gpa-calculator.png",
    images: ["/apps/gpa-calculator.png"],
  },
];

export const experience = {
  role: "Agentic AI Developer & Full Stack Engineer",
  location: "Rawalpindi, Pakistan",
  period: "2025 — Present",
  points: [
    "Architected and deployed multi-agent AI systems using LangGraph StateGraphs — including self-correcting RAG pipelines, ReAct tool-use agents, and orchestrated Researcher/Writer/Reviewer workflows.",
    "Built production-grade LLM applications integrating ChromaDB vector stores, Mistral AI, and Ollama for semantic retrieval, document intelligence, and real-time conversational AI.",
    "Designed and shipped n8n and GoHighLevel automations for client businesses — lead routing, AI voice/chat agents, and CRM workflows that run unattended.",
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
  body: "Open to AI Engineer roles, internships, software engineering positions, and freelance / automation projects.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
