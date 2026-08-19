"use client";

import React, { useState } from "react";
import { Project, projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/Icons";
import {
  ExternalLink,
  Server,
  X,
  CheckCircle2,
  Database,
  ArrowRight,
} from "lucide-react";

export const ProjectsView: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen py-16 md:py-24 space-y-16">
      {/* Hero Header - Perfectly Centered */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            align="center"
            eyebrow="MY WORK"
            title="Projects & Engineering"
            description="A comprehensive archive of applications, AI agent systems, full-stack platforms, and developer experiments I have engineered."
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner - Clean White Theme with Aligned Buttons */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl pt-8">
        <div className="rounded-3xl bg-white border border-neutral-200/90 p-8 md:p-12 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-950">
              Have an idea? Let&apos;s build together
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              I am open to full-stack and AI software engineering roles, collaborative open-source projects, and technical opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Let&apos;s Build Together
            </Button>
            <Button
              href="https://github.com/PranavTurkar13"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={<GithubIcon size={16} />}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              GitHub Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Project Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-neutral-100 flex items-start justify-between gap-4 bg-neutral-50/70">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Badge variant="subtle" size="sm">
                    {activeModalProject.categoryLabel}
                  </Badge>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">
                  {activeModalProject.name}
                </h3>
                <p className="text-xs md:text-sm text-neutral-500 mt-0.5">
                  {activeModalProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-full hover:bg-neutral-200/80 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-neutral-700">
              {/* Project Screenshot Banner if available */}
              {activeModalProject.image && (
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-neutral-200 shadow-xs">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Detailed Description */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  Overview
                </h4>
                {activeModalProject.description.map((paragraph, idx) => (
                  <p key={idx} className="text-xs md:text-sm leading-relaxed text-neutral-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Verified Metrics if available */}
              {activeModalProject.metrics && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    Key Metrics & Impact
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeModalProject.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 text-center"
                      >
                        <p className="text-base font-bold text-neutral-950">{m.value}</p>
                        <p className="text-[10.5px] text-neutral-500 font-medium leading-tight mt-0.5">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {activeModalProject.features && activeModalProject.features.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    Key Features & Engineering Highlights
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {activeModalProject.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dataset if applicable */}
              {activeModalProject.dataset && (
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    Dataset & Sources
                  </h4>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-medium">
                    <Database className="w-3.5 h-3.5" />
                    {activeModalProject.dataset}
                  </div>
                </div>
              )}

              {/* Technology Stack */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 md:p-6 border-t border-neutral-100 bg-neutral-50/50 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                {activeModalProject.liveDemo && (
                  <Button
                    href={activeModalProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Launch Live Demo
                  </Button>
                )}

                {activeModalProject.github && (
                  <Button
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                  >
                    <GithubIcon size={14} className="mr-1.5" />
                    {activeModalProject.backendGithub ? "Frontend Code" : "Source Code"}
                  </Button>
                )}

                {activeModalProject.backendGithub && (
                  <Button
                    href={activeModalProject.backendGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                  >
                    <Server className="w-3.5 h-3.5 mr-1.5" />
                    Backend Code
                  </Button>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveModalProject(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
