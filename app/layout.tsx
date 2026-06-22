import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { profile } from "@/lib/data";
import ThemeProvider from "@/components/ThemeProvider";

const siteUrl = "https://maazali.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI Engineer | Agentic AI & LLM Applications`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Maaz Ali is a final-year Computer Science student building agentic AI systems — LangGraph agents, RAG pipelines, and FastAPI-powered LLM applications.",
  keywords: [
    "Maaz Ali",
    "AI Engineer",
    "Agentic AI",
    "LangGraph",
    "LangChain",
    "RAG",
    "LLM Engineer",
    "FastAPI",
    "Python Developer",
    "NUML Islamabad",
    "AI Engineer Pakistan",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — AI Engineer | Agentic AI & LLM Applications`,
    description:
      "Final-year CS student building agentic AI systems — LangGraph agents, RAG pipelines, and FastAPI-powered LLM applications.",
    siteName: `${profile.name} — Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — AI Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineer | Agentic AI & LLM Applications`,
    description:
      "Final-year CS student building agentic AI systems — LangGraph agents, RAG pipelines, and FastAPI-powered LLM applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI Engineer",
  description:
    "Final-year Computer Science student building agentic AI systems, RAG pipelines, and LLM-powered applications.",
  url: siteUrl,
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin, profile.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressCountry: "PK",
  },
  knowsAbout: [
    "Agentic AI",
    "LangGraph",
    "LangChain",
    "Retrieval-Augmented Generation",
    "FastAPI",
    "Python",
    "Multi-Agent Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
