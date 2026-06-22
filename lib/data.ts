// lib/data.ts
// Single source of truth for all portfolio content.

export const profile = {
  name: "Maaz Ali",
  title: "AI Engineer — Agentic AI Systems & LLM Applications",
  location: "Rawalpindi, Pakistan",
  email: "maazalisshahid@gmail.com",
  linkedin: "https://linkedin.com/in/MaazzAlii",
  github: "https://github.com/MaazzAlii",
  resumeUrl: "/resume.pdf",
  tagline:
    "I build agent systems that reason, retrieve, and act — not chatbots that just reply.",
};

export const hero = {
  eyebrow: "node: hero · status: building",
  headline: "Building AI agents, RAG systems, and LLM-powered applications",
  subheadline:
    "Final-year Computer Science student focused on agentic AI, LangGraph workflows, FastAPI backends, and intelligent automation systems.",
};

export const agentTrace = [
  { node: "load_documents", detail: "scanned PDFs, handwritten notes" },
  { node: "embed_chunks", detail: "ChromaDB · vector store" },
  { node: "retrieve_context", detail: "semantic search, top-k=6" },
  { node: "grade_relevance", detail: "self-correcting loop" },
  { node: "generate_response", detail: "Mistral AI · streamed" },
  { node: "END", detail: "agent run complete" },
];

export const about = {
  eyebrow: "node: about",
  heading: "About",
  paragraphs: [
    "I'm a final-year BS Computer Science student at NUML Islamabad, and most of my time outside coursework goes into building agentic AI systems — the kind that plan, call tools, and correct themselves instead of just answering a prompt once.",
    "My focus is the practical side of LLM engineering: LangGraph state machines, agentic RAG pipelines, multi-agent coordination, and the FastAPI backends that hold it all together. I've built systems that read scanned and handwritten documents, compare contracts autonomously, and run multi-agent content pipelines end to end — not tutorials, working software with real edge cases.",
    "Before AI, I shipped two Android apps to the Play Store and a Chrome extension to real users, so I care about the unglamorous parts too: error states, loading UX, and code that doesn't fall over outside the happy path. I'm looking for an AI Engineer or Software Engineering role — or freelance work — where I can keep building systems like this with a team that ships.",
  ],
};

export const skills = {
  eyebrow: "node: skills",
  heading: "Skills",
  groups: [
    {
      label: "AI & LLMs",
      items: [
        "LangGraph",
        "LangChain",
        "Agentic RAG",
        "ChromaDB",
        "Mistral AI",
        "Ollama",
        "Prompt Engineering",
        "Multi-Agent Systems",
        "Semantic Search",
        "Vector Databases",
      ],
    },
    {
      label: "Backend",
      items: ["Python", "FastAPI", "REST APIs", "JWT Authentication", "SQLAlchemy"],
    },
    {
      label: "Frontend",
      items: ["React", "JavaScript", "Flutter", "HTML", "CSS"],
    },
    {
      label: "Databases",
      items: ["SQLite", "MongoDB Atlas", "ChromaDB"],
    },
    {
      label: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
  ],
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "vision-rag",
    title: "LangGraph Agentic Vision RAG System",
    description:
      "An agentic Vision RAG system for semantic retrieval across scanned PDFs, handwritten documents, and complex layouts — built as a 7-node LangGraph StateGraph with self-correcting retrieval, ChromaDB for vector storage, and Mistral AI plus Ollama for reasoning.",
    tech: ["LangGraph", "Python", "ChromaDB", "Mistral AI", "Ollama"],
    featured: true,
    github: "https://github.com/MaazzAlii",
  },
  {
    slug: "document-comparison",
    title: "Agentic Document Comparison System",
    description:
      "An autonomous document comparison agent built on LangGraph's ReAct pattern, with six specialized tools and dynamic tool selection. Live reasoning streams in real time through a Streamlit interface, so you watch the agent decide what to check next.",
    tech: ["LangGraph", "Python", "Streamlit", "ChromaDB"],
    featured: true,
    github: "https://github.com/MaazzAlii",
  },
  {
    slug: "content-pipeline",
    title: "Multi-Agent Content Pipeline",
    description:
      "A Researcher → Writer → Reviewer workflow coordinated as a LangGraph state machine, where each agent hands off structured output to the next until the content passes review.",
    tech: ["LangGraph", "Mistral AI", "Streamlit"],
    github: "https://github.com/MaazzAlii",
  },
  {
    slug: "ai-context-saver",
    title: "AI Context Saver Chrome Extension",
    description:
      "A Chrome extension that preserves AI conversations across ChatGPT, Claude, Gemini, and Copilot, using intelligent context compression so long threads stay portable between tools.",
    tech: ["JavaScript", "Chrome APIs", "Mistral AI"],
    github: "https://github.com/MaazzAlii",
  },
  {
    slug: "ai-voice-chatbot",
    title: "AI Voice Chatbot",
    description:
      "A real-time AI voice assistant with continuous speech-to-text and text-to-speech, built on the Web Speech API and Mistral AI, embedded directly in a Streamlit interface.",
    tech: ["Python", "Streamlit", "Mistral AI"],
    github: "https://github.com/MaazzAlii",
  },
  {
    slug: "north-tourism",
    title: "North Tourism — Recommendation & Booking System",
    description:
      "A client-facing Final Year Project for AI-assisted tourism recommendations and bookings across Gilgit-Baltistan: a TF-IDF/SVD recommendation engine, FastAPI backend with JWT auth, a React web platform, and a Flutter mobile companion app.",
    tech: ["FastAPI", "Flutter", "React", "SQLite", "JWT"],
    github: "https://github.com/MaazzAlii",
  },
];

export const androidApps = {
  eyebrow: "node: shipped",
  heading: "Published Android Apps",
  apps: [
    {
      name: "Prayer Times, Azan & Adhkar",
      description:
        "An Islamic companion app with accurate prayer times, Qibla direction, Azan notifications, and a full Quran audio player with multiple reciters — fully localized in Arabic and Urdu with RTL support.",
      tags: ["Flutter", "AdMob", "Localization"],
    },
    {
      name: "Pakistani GPA & CGPA Calculator",
      description:
        "A GPA and CGPA calculator built for Pakistani university grading systems, with multi-university support and PDF report generation.",
      tags: ["Flutter", "AdMob", "PDF Generation"],
    },
  ],
};

export const timeline = {
  eyebrow: "node: trajectory",
  heading: "Timeline",
  items: [
    { year: "2023", label: "Started Python" },
    { year: "2024", label: "Started AI engineering" },
    { year: "2025", label: "Built first AI agents" },
    { year: "2025", label: "Built RAG systems" },
    { year: "2026", label: "Building production AI applications" },
  ],
};

export const certifications = {
  eyebrow: "node: credentials",
  heading: "Certifications",
  items: [
    { name: "Cisco Python Essentials 1", issuer: "Cisco Networking Academy" },
    { name: "Artificial Intelligence Training", issuer: "NAVTTC" },
    { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", status: "In Progress" },
  ],
};

export const stats = [
  { value: "6", label: "AI projects shipped" },
  { value: "2", label: "Published Android apps" },
  { value: "1", label: "Chrome extension live" },
  { value: "7", label: "Nodes in my largest agent graph" },
];

export const whyWorkWithMe = {
  eyebrow: "node: why-me",
  heading: "Why work with me",
  points: [
    {
      title: "I ship, not just prototype",
      body: "Every project here is a working system with error handling, not a notebook that only runs once. I've shipped two apps and an extension to real users.",
    },
    {
      title: "I think in graphs, not scripts",
      body: "LangGraph state machines are my default mental model for agents — explicit nodes, explicit edges, and loops that know when to stop.",
    },
    {
      title: "I move fast without skipping the boring parts",
      body: "Auth, validation, logging, and edge cases are part of the build, not an afterthought I'll get to later.",
    },
  ],
};

export const currentlyLearning = {
  eyebrow: "node: in-progress",
  heading: "What I'm currently learning",
  items: [
    "Production-grade agent observability and tracing",
    "Microsoft Azure Fundamentals",
    "Evaluation frameworks for RAG and agentic pipelines",
    "Scaling multi-agent systems beyond single-process orchestration",
  ],
};

export const focusAreas = {
  eyebrow: "node: focus",
  heading: "AI engineering focus areas",
  items: [
    {
      title: "Agentic RAG",
      body: "Retrieval pipelines that grade their own results and retry instead of returning the first match.",
    },
    {
      title: "Multi-agent orchestration",
      body: "LangGraph state machines coordinating specialist agents with clear handoffs and shared state.",
    },
    {
      title: "Tool-using agents",
      body: "ReAct-style agents that pick from a toolset dynamically based on what the task actually needs.",
    },
    {
      title: "Applied LLM backends",
      body: "FastAPI services wrapping LLM logic with auth, validation, and APIs a frontend can actually rely on.",
    },
  ],
};

export const contact = {
  eyebrow: "node: contact",
  heading: "Let's build something",
  body: "Open to AI Engineer roles, internships, software engineering positions, and freelance projects. The fastest way to reach me is email.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Apps", href: "#apps" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];
