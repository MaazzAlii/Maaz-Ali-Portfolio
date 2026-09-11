import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Lock } from "lucide-react";
import { projects, getProjectBySlug, profile } from "@/lib/data";
import ImageSlider from "@/components/ImageSlider";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";
import ProjectTabs from "@/components/ProjectTabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description: project.description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const sliderImages = project.images && project.images.length > 0 ? project.images : project.image ? [project.image] : [];
  const otherProjects = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-content px-6 py-12">
          <Link href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.8fr]">
            <div>
              <div className="overflow-hidden rounded-2xl border border-bg-border">
                {sliderImages.length > 0 ? (
                  <ImageSlider images={sliderImages} alt={project.title} aspectClass="aspect-[16/10]" />
                ) : (
                  <ProjectPlaceholder category={project.category} className="aspect-[16/10] w-full" />
                )}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-bg-border bg-bg-surface px-3 py-1 text-xs font-medium text-ink-dim">
                  {project.category}
                </span>
                {project.visibility === "private" ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-bg-border bg-bg-surface px-3 py-1 text-xs font-medium text-ink-dim">
                    <Lock className="h-3 w-3" /> Private repository
                  </span>
                ) : (
                  <span className="rounded-full border border-emerald-900/40 bg-emerald-950/20 px-3 py-1 text-xs font-medium text-emerald-400">
                    Public repository
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {project.title}
              </h1>

              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span key={m} className="rounded-full border border-accent-dim/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-bright">
                      {m}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-bg-border bg-bg-raised px-3 py-1.5 font-mono text-xs text-ink-faint">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-2.5">
                {project.visibility === "public" && project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
                    <Github className="h-4 w-4" /> View source on GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-bg-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent-dim">
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                )}
                {project.huggingface && (
                  <a href={project.huggingface} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-bg-border px-5 py-2.5 text-sm font-medium text-amber-400 transition-colors hover:border-amber-700">
                    🤗 Hugging Face
                  </a>
                )}
                {project.visibility === "public" && project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {project.links.map((l) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim transition-colors hover:text-ink">
                        <Github className="h-3.5 w-3.5" /> {l.label}
                      </a>
                    ))}
                  </div>
                )}
                {project.visibility === "private" && (
                  <p className="text-xs text-ink-faint">
                    Repository is private for confidentiality. Described here to demonstrate scope of work — happy to walk through details on a call.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-14">
            <ProjectTabs project={project} />
          </div>

          {otherProjects.length > 0 && (
            <div className="mt-20 border-t border-bg-border pt-12">
              <h2 className="text-lg font-semibold text-ink">More in {project.category}</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {otherProjects.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`}
                    className="group rounded-2xl border border-bg-border bg-bg-surface p-5 transition-colors hover:border-accent-dim">
                    <h3 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-dim">{p.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
