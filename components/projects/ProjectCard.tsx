"use client";

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
  const handleCardClick = () => {
    if (onOpenDetails) {
      onOpenDetails(project);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onOpenDetails && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onOpenDetails(project);
    }
  };

  return (
    <div
      id={project.slug}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role={onOpenDetails ? "button" : undefined}
      tabIndex={onOpenDetails ? 0 : undefined}
      aria-label={onOpenDetails ? `View details for ${project.name}` : undefined}
      className={`group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-400/80 dark:hover:border-neutral-600 hover:shadow-md transition-all duration-200 ${
        onOpenDetails
          ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-200 focus-visible:ring-offset-2"
          : ""
      }`}
    >
      {/* Visual Header / Clean Screenshot or Gradient */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800/80">
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
            <h3 className="text-lg md:text-xl font-bold text-neutral-950 dark:text-white tracking-tight leading-snug group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Key Metrics / Highlights if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 py-1">
              {project.metrics.slice(0, 2).map((m) => (
                <div
                  key={m.label}
                  className="px-2.5 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-100 dark:border-neutral-700"
                >
                  <p className="text-xs font-bold text-neutral-900 dark:text-white">{m.value}</p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
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
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
          {/* Category Tag above actions */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-700">
              {project.categoryLabel}
            </span>

            {onOpenDetails && (
              <span className="inline-flex items-center text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white font-medium transition-colors text-xs group-hover:translate-x-0.5 duration-150">
                View details →
              </span>
            )}
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-neutral-600 dark:text-neutral-400 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white font-semibold transition-colors hover:underline underline-offset-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors hover:underline underline-offset-2"
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
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors hover:underline underline-offset-2"
                  title="Backend Repository"
                >
                  <Server className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
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
