"use client";

import React from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { certificationsData } from "@/data/certifications";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GraduationCap,
  Trophy,
  Gamepad2,
  Tv,
  Code2,
  Award,
  FileText,
} from "lucide-react";

export const AboutView: React.FC = () => {
  const quickFacts = [
    {
      icon: <GraduationCap className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
      label: "Education",
      value: "B.E. Information Technology",
      subvalue: "P.E.S. Modern College of Engineering (9.09 CGPA)",
    },
    {
      icon: <Trophy className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
      label: "Campus Placements",
      value: "Dual Placement Offers",
      subvalue: "Cognizant & LTIMindtree",
    },
    {
      icon: <Code2 className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
      label: "Problem Solving",
      value: "150+ DSA Problems Solved",
      subvalue: "LeetCode & GeeksforGeeks",
    },
    {
      icon: <Award className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />,
      label: "Social Outreach",
      value: "NSS Volunteer & Camp Leader",
      subvalue: "Led outreach programs & community service",
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24 space-y-20">
      {/* 1. Header & Hero Story with Real Photo */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Bio & Professional Overview */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                GET TO KNOW ME
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-[1.15]">
                Full-stack builder driven by curiosity and competition.
              </h1>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              {profile.aboutBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button href={profile.resumeUrl} variant="primary" size="md" target="_blank" rel="noopener noreferrer">
                Download Resume
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right: Authentic Profile Photo Card */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Subtle Ambient Glow Behind Photo on Hover */}
              <div 
                className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-neutral-400/20 via-neutral-300/10 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" 
                aria-hidden="true"
              />

              {/* Photo Card with White Border & Luminous Shadow Glow */}
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 group-hover:border-neutral-900 dark:group-hover:border-neutral-600 shadow-sm group-hover:shadow-xl dark:group-hover:shadow-[0_0_16px_rgba(255,255,255,0.15)] bg-neutral-100 dark:bg-neutral-900 aspect-4/5 transition-all duration-300">
                <Image
                  src="/pranav.jpg"
                  alt="Pranav Prakash Turkar"
                  fill
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Verified Badge Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 dark:group-hover:shadow-[0_0_16px_rgba(255,255,255,0.15)] px-4 py-1.5 rounded-full shadow-xs flex items-center gap-2 whitespace-nowrap text-xs font-semibold text-neutral-900 dark:text-white transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span>Pranav Prakash Turkar</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Quick Facts Grid */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickFacts.map((fact, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                {fact.icon}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {fact.label}
                </p>
                <p className="text-sm font-bold text-neutral-950 dark:text-white">
                  {fact.value}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {fact.subvalue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Education Timeline */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="ACADEMIC BACKGROUND"
            title="Education Timeline"
            description="Educational journey and academic milestones."
          />
        </div>

        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-6 md:ml-8 pl-6 sm:pl-8 space-y-8">
          {profile.educationTimeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-4 border-neutral-900 dark:border-white shadow-xs"></div>

              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white">
                    {item.degree}
                  </h3>
                  <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 font-mono">
                    {item.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  <span className="text-neutral-950 dark:text-white font-semibold">{item.institution}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                  <span>•</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{item.score}</span>
                </div>

                {item.details && (
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 pt-1 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Verified Certifications with Direct PDF Verification */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="CREDENTIALS"
            title="Verified Certifications"
            description="Professional credentials with direct certificates."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base font-bold text-neutral-950 dark:text-white mt-0.5">
                      {cert.title}
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono shrink-0">
                    {cert.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {cert.description}
                </p>

                {cert.credentialId && (
                  <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                    Credential ID: {cert.credentialId}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <Button
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="outline"
                  className="w-full justify-center !rounded-xl"
                >
                  <FileText className="w-3.5 h-3.5 mr-1.5 text-neutral-500 dark:text-neutral-400" />
                  View Certificate PDF
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Things I Love: Cinema, Gaming & Anime */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="BEYOND CODE"
            title="Things That Fuel My Drive"
            description="The stories, games, and sports mindset that shape my focus and discipline."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Gaming Era */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-neutral-100">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">Nostalgic Gaming Era</h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Growing up playing <span className="font-semibold text-neutral-950 dark:text-white">Minecraft</span>, <span className="font-semibold text-neutral-950 dark:text-white">Fall Guys</span>, <span className="font-semibold text-neutral-950 dark:text-white">Granny</span>, and the classic <span className="font-semibold text-neutral-950 dark:text-white">GTA Vice City &amp; San Andreas</span> sparked my love for digital systems, spatial thinking, and problem-solving under pressure.
            </p>
          </div>

          {/* Cinema & Anime */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-neutral-100">
              <Tv className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">Cinema, Series &amp; Anime</h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Drawn to narratives of unrelenting resilience and purpose—masterpieces like <span className="font-semibold text-neutral-950 dark:text-white">Attack on Titan</span>, <span className="font-semibold text-neutral-950 dark:text-white">Vinland Saga</span>, and iconic feel-good cinema like <span className="font-semibold text-neutral-950 dark:text-white">Munna Bhai M.B.B.S.</span>.
            </p>
          </div>

          {/* First Code Genesis */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-neutral-100">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">First Code Genesis</h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              My very first taste of software creation started in <span className="font-semibold text-neutral-950 dark:text-white">Python</span>, crafting a terminal-based FIFA Football Manager. Seeing logic transform into interactive gameplay cemented my path as a builder.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Pure Inspiring Message */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl text-center space-y-4 pt-10 pb-6">
        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
          &ldquo;Talent without working hard is nothing.&rdquo;
        </blockquote>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          — Cristiano Ronaldo
        </p>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto pt-2">
          Show up every single day, master the fundamentals, embrace the pressure, and execute with relentless discipline. <span className="font-extrabold text-neutral-950 dark:text-white">SUIIIII! ⚡</span>
        </p>
      </section>
    </div>
  );
};
