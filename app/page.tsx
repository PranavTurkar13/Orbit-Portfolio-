import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { socialLinks } from "@/data/social-links";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SkillCard } from "@/components/skills/SkillCard";
import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from "@/components/ui/Icons";
import { Download, ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon size={18} />;
      case "linkedin":
        return <LinkedinIcon size={18} />;
      case "twitter":
        return <XIcon size={17} />;
      case "email":
      default:
        return <MailIcon size={18} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 overflow-hidden">
        {/* Subtle Animated Grid Background */}
        <div className="absolute inset-0 pointer-events-none hero-grid-animated" aria-hidden="true" />

        {/* Very Faint Floating Code Symbols (3-5% Opacity) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden font-mono text-neutral-900/5 dark:text-white/5 font-semibold text-lg sm:text-2xl" aria-hidden="true">
          <span className="absolute top-10 left-[8%] animate-float-symbol-1 text-2xl sm:text-3xl">&lt; /&gt;</span>
          <span className="absolute top-14 right-[10%] animate-float-symbol-2 text-2xl sm:text-3xl">&#123; &#125;</span>
          <span className="absolute top-[42%] left-[6%] animate-float-symbol-3 text-xl sm:text-2xl">01</span>
          <span className="absolute top-[38%] right-[8%] animate-float-symbol-1 text-xl sm:text-2xl font-bold">AI</span>
          <span className="absolute bottom-16 left-[12%] animate-float-symbol-2 text-2xl sm:text-3xl">( )</span>
          <span className="absolute bottom-20 right-[12%] animate-float-symbol-3 text-2xl sm:text-3xl">#</span>
          <span className="absolute top-8 left-[45%] animate-float-symbol-2 text-xl sm:text-2xl">;</span>
          <span className="absolute bottom-8 right-[42%] animate-float-symbol-1 text-xl sm:text-2xl">=&gt;</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Eyebrow */}
            <span className="text-xs sm:text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mb-6">
              WELCOME TO MY PORTFOLIO
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white mb-3">
              Hi, I&apos;m {profile.shortName}{" "}
              <span className="animate-wave select-none">👋</span>
            </h1>

            {/* Role / Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-600 dark:text-neutral-400 tracking-tight mb-6">
              {profile.title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-8">
              {profile.heroDescription}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-10">
              {socialLinks
                .filter((s) => s.icon !== "email")
                .map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700 hover:shadow-xs transition-all duration-150"
                  >
                    {getSocialIcon(item.icon)}
                  </a>
                ))}
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                href={profile.resumeUrl}
                external
                download="Pranav_Turkar_Resume.pdf"
                size="lg"
                variant="primary"
                icon={<Download className="w-4 h-4" />}
                iconPosition="left"
                className="w-full sm:w-auto px-7 py-3.5 !rounded-xl"
              >
                Download Resume
              </Button>

              <Button
                href="#featured-projects"
                size="lg"
                variant="outline"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto px-7 py-3.5 !rounded-xl"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS SECTION */}
      <section
        id="featured-projects"
        className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-neutral-900/30 border-t border-neutral-100 dark:border-neutral-800/80 scroll-mt-16 transition-colors"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PORTFOLIO"
            title="Featured Projects"
            align="left"
            action={
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SKILLS & TECHNOLOGIES SECTION */}
      <section className="py-20 sm:py-28 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800/80 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WHAT I WORK WITH"
            title="Skills & Technologies"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <SkillCard key={cat.category} skillCategory={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. LET'S COLLABORATE / CTA SECTION */}
      <section className="py-20 sm:py-28 bg-neutral-50/70 dark:bg-neutral-900/40 border-t border-neutral-100 dark:border-neutral-800/80 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mb-4">
              LET&apos;S COLLABORATE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white mb-4">
              Got a project in mind?
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or technical collaborations. Reach out and let&apos;s build
              something great together.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto px-8 py-3.5 !rounded-xl"
              >
                Get In Touch
              </Button>

              <Button
                href={`mailto:${profile.email}`}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-7 py-3.5 !rounded-xl"
              >
                {profile.email}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PERSONAL ETHOS / RELENTLESS MINDSET MESSAGE */}
      <section className="py-16 sm:py-20 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800/80 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            PERSONAL ETHOS &amp; MINDSET
          </span>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-snug">
            &ldquo;Talent without working hard is nothing.&rdquo;
          </blockquote>
          <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
            — Cristiano Ronaldo
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto pt-1">
            Whether it is mastering DSA, architecting full-stack web platforms, or preparing for high-stakes placement drives, I bring that same sports ethos to software engineering: show up every single day, master the fundamentals, embrace the pressure, and deliver with pride.
          </p>
        </div>
      </section>
    </div>
  );
}
