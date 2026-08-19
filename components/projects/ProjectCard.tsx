import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/Icons";
import { ExternalLink, Server, Layers } from "lucide-react";

export interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
}) => {
  return (
    <div
      id={project.slug}
      className="group flex flex-col bg-white border border-neutral-200/90 rounded-2xl overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all duration-200"
    >
      {/* Visual Header / Clean Screenshot or Gradient */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100 border-b border-neutral-100">
        {project.image ? (
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-top group-hover:scale-103 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="relative w-full h-full bg-gradient-to-br from-neutral-900 to-slate-950 p-6 flex flex-col justify-end">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            <Layers className="w-8 h-8 text-neutral-400 mb-2" />
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Project Title & Tagline */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-neutral-950 tracking-tight leading-snug">
              {project.name}
            </h3>
            <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-neutral-600 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Key Metrics / Highlights if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 py-1">
              {project.metrics.slice(0, 2).map((m) => (
                <div
                  key={m.label}
                  className="px-2.5 py-1.5 rounded-lg bg-neutral-50 border border-neutral-100"
                >
                  <p className="text-xs font-bold text-neutral-900">{m.value}</p>
                  <p className="text-[10px] text-neutral-500 line-clamp-1">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="subtle" size="sm">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>
        </div>

        {/* Bottom Section: Category Badge + Action Links */}
        <div className="pt-4 border-t border-neutral-100 space-y-3">
          {/* Category Tag above actions */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200/70">
              {project.categoryLabel}
            </span>

            {onOpenDetails && (
              <button
                onClick={() => onOpenDetails(project)}
                className="text-neutral-500 hover:text-neutral-950 font-medium transition-colors text-xs cursor-pointer hover:underline underline-offset-4"
              >
                Details →
              </button>
            )}
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-neutral-600 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-black font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-800" />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-neutral-950 transition-colors"
                  title="Frontend / Main Repository"
                >
                  <GithubIcon size={14} />
                  {project.backendGithub ? "Frontend" : "Code"}
                </a>
              )}

              {project.backendGithub && (
                <a
                  href={project.backendGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-neutral-950 transition-colors"
                  title="Backend Repository"
                >
                  <Server className="w-3.5 h-3.5 text-neutral-500" />
                  Backend
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
