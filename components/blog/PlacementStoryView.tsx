"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Award,
  ArrowRight,
  Code2,
  Database,
  Terminal,
  Cpu,
  Network,
  HardDrive,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  HelpCircle,
  Compass,
  ArrowDown,
  ArrowLeft,
  Target,
  Sparkles,
} from "lucide-react";

const MILESTONES = [
  { id: "hero", label: "Overview" },
  { id: "strategy", label: "Strategic Focus" },
  { id: "dsa-roadmap", label: "DSA Priorities" },
  { id: "languages", label: "Languages" },
  { id: "sql-mastery", label: "SQL Strategy" },
  { id: "cs-core", label: "CS Core Pillars" },
  { id: "project-deepdive", label: "Project Defense" },
  { id: "interview-day", label: "Interview Rounds" },
  { id: "resources", label: "Resources" },
  { id: "formula", label: "What Mattered" },
];

export interface PlacementStoryViewProps {
  onBack?: () => void;
}

export const PlacementStoryView: React.FC<PlacementStoryViewProps> = ({
  onBack,
}) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Interactive states
  const [comparisonMode, setComparisonMode] = useState<"strategic" | "exhaustive">("strategic");
  const [activeCsPillar, setActiveCsPillar] = useState<string>("oop");
  const [activeProjectQuestion, setActiveProjectQuestion] = useState<number | null>(0);
  const [activeHrQuestion, setActiveHrQuestion] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(Number.isNaN(currentProgress) ? 0 : currentProgress);

      const sectionElements = MILESTONES.map((m) => document.getElementById(m.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(MILESTONES[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-100 z-50">
        <div
          className="h-full bg-neutral-950 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Back Button */}
        {onBack && (
          <div className="mb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT STICKY JOURNEY MAP (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-4">
            <div className="p-4.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 pb-2 border-b border-neutral-100">
                <Compass className="w-4 h-4 text-neutral-900" />
                <span>Roadmap Steps</span>
              </div>
              <nav className="space-y-1">
                {MILESTONES.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full text-left flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                        isActive
                          ? "bg-neutral-950 text-white font-semibold shadow-xs"
                          : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-neutral-100 text-neutral-600"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Placement Offer Card */}
            <div className="p-4.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Offers Secured</span>
              </div>
              <div className="space-y-1.5 pt-1 text-xs font-bold text-neutral-900">
                <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
                  <span>Cognizant</span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Selected
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 border border-neutral-200/70">
                  <span>LTIMindtree</span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Selected
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN ARTICLE CONTENT */}
          <main className="lg:col-span-9 space-y-14">
            {/* 1. HERO */}
            <section id="hero" className="space-y-6 scroll-mt-24">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default" size="sm">
                    Placement Strategy
                  </Badge>
                  <span className="text-xs text-neutral-400 font-medium">•</span>
                  <span className="text-xs text-neutral-500 font-medium">5 min read</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950 leading-tight">
                  The Strategic Blueprint: How I Secured Dual Placement Offers at Cognizant &amp; LTIMindtree
                </h1>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  A high-leverage preparation guide focusing on high-frequency DSA patterns, fluent SQL, CS core fundamentals, and deep project defense instead of endless problem counts.
                </p>
              </div>

              {/* Journey Milestones Strip */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Preparation Journey
                  </span>
                  <span className="text-xs font-semibold text-neutral-800 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                    Target: Campus Drives
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { title: "Foundation", sub: "150+ Solved" },
                    { title: "Language Depth", sub: "Java & Python" },
                    { title: "SQL & CS Core", sub: "Easy to Med" },
                    { title: "Project Defense", sub: "Architecture" },
                    { title: "Final Result", sub: "Dual Offers" },
                  ].map((step, idx) => (
                    <div
                      key={step.title}
                      className="p-3 rounded-xl bg-neutral-50/80 border border-neutral-200/70 text-center space-y-0.5"
                    >
                      <span className="inline-block w-4.5 h-4.5 rounded-full bg-neutral-950 text-white text-[10px] font-mono font-bold leading-4.5 mb-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs font-bold text-neutral-950">{step.title}</p>
                      <p className="text-[10px] text-neutral-500">{step.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-1">
                  <button
                    onClick={() => scrollTo("strategy")}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-all cursor-pointer shadow-2xs"
                  >
                    Explore Strategy
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </section>

            {/* 2. STRATEGIC FOCUS */}
            <section id="strategy" className="space-y-4 scroll-mt-24 pt-4 border-t border-neutral-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Step 01
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                  Prioritizing Fundamentals over 500+ Grinding
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  While comprehensive DSA sheets are valuable, solving hundreds of advanced graph and DP questions is not necessary for most campus rounds. Prioritizing core patterns gives higher confidence and retention.
                </p>
              </div>

              {/* Comparison Switcher */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold text-neutral-900">Compare Approach:</span>
                  <div className="inline-flex p-1 rounded-xl bg-neutral-100">
                    <button
                      onClick={() => setComparisonMode("strategic")}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        comparisonMode === "strategic"
                          ? "bg-white text-neutral-950 shadow-xs"
                          : "text-neutral-600 hover:text-neutral-950"
                      }`}
                    >
                      Strategic (150+ Core)
                    </button>
                    <button
                      onClick={() => setComparisonMode("exhaustive")}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        comparisonMode === "exhaustive"
                          ? "bg-white text-neutral-950 shadow-xs"
                          : "text-neutral-600 hover:text-neutral-950"
                      }`}
                    >
                      Exhaustive 500+ Grind
                    </button>
                  </div>
                </div>

                {comparisonMode === "strategic" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 space-y-1">
                      <p className="font-bold text-neutral-950 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Core DSA Patterns
                      </p>
                      <p className="text-neutral-500">
                        Arrays, Strings, Two Pointers, HashMaps, and Basic Recursion.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 space-y-1">
                      <p className="font-bold text-neutral-950 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Solid CS Core &amp; SQL
                      </p>
                      <p className="text-neutral-500">
                        Fluent in OOP concepts, DBMS, and Easy-to-Medium SQL joins.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-600">
                    <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 space-y-1">
                      <p className="font-bold text-neutral-800 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-neutral-400" />
                        Over-emphasis on Rare Topics
                      </p>
                      <p className="text-neutral-500">
                        Weeks spent on Segment Trees and 3D DP rarely asked in mass drives.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 space-y-1">
                      <p className="font-bold text-neutral-800 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-neutral-400" />
                        Neglecting Project Defense
                      </p>
                      <p className="text-neutral-500">
                        Stumbling when asked why a specific database or auth flow was selected.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 3. DSA ROADMAP */}
            <section id="dsa-roadmap" className="space-y-4 scroll-mt-24 pt-4 border-t border-neutral-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Step 02
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                  DSA Topic Priority Hierarchy
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Focus your practice starting from high-frequency topics at the top before moving down.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    tier: "Tier 1: High Priority (Most Frequent)",
                    topics: [
                      { name: "Programming Syntax & Collections", badge: "Critical", desc: "HashMaps, ArrayLists, Sets" },
                      { name: "Basic Mathematics", badge: "Frequent", desc: "Primes, GCD, Palindromes, Divisors" },
                      { name: "Arrays & Two Pointers", badge: "Critical", desc: "Sliding window, Prefix sums, Sorting" },
                      { name: "Strings", badge: "Critical", desc: "Anagrams, Frequency maps, Substrings" },
                    ],
                  },
                  {
                    tier: "Tier 2: Core Data Structures",
                    topics: [
                      { name: "Stack & Queue", badge: "Core", desc: "Valid Parentheses, Next Greater Element" },
                      { name: "Linked Lists", badge: "Core", desc: "Reversal, Cycle Detection, Merging" },
                      { name: "Recursion Basics", badge: "Core", desc: "Subsets, Permutations" },
                    ],
                  },
                  {
                    tier: "Tier 3: Conceptual Foundations",
                    topics: [
                      { name: "Binary Trees & BST", badge: "Conceptual", desc: "In/Pre/Post traversals, Height" },
                      { name: "Basic DP (1D)", badge: "Conceptual", desc: "Fibonacci, Climbing Stairs" },
                    ],
                  },
                ].map((group) => (
                  <div key={group.tier} className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
                    <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                      {group.tier}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {group.topics.map((t) => (
                        <div key={t.name} className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/70 text-xs">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-bold text-neutral-900">{t.name}</span>
                            <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-200/70 px-1.5 py-0.5 rounded">
                              {t.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500">{t.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. LANGUAGES */}
            <section id="languages" className="space-y-4 scroll-mt-24 pt-4 border-t border-neutral-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Step 03
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                  Mastering Your Core Language
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Deep mastery in one or two languages matters more than basic syntax across five.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-neutral-950">
                    <span className="p-1.5 rounded-lg bg-neutral-100">☕</span> Java
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    <li>• Collections Framework (`HashMap`, `ArrayList`, `Stack`)</li>
                    <li>• OOP mechanics: Inheritance, Polymorphism, Interfaces</li>
                    <li>• Memory model (Stack vs Heap)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs text-neutral-950">
                    <span className="p-1.5 rounded-lg bg-neutral-100">🐍</span> Python
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    <li>• List comprehensions, dictionaries, and slicing</li>
                    <li>• Clean string parsing and built-in algorithms</li>
                    <li>• Applied across AI, ML, and API prototyping</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. SQL STRATEGY */}
            <section id="sql-mastery" className="space-y-4 scroll-mt-24 pt-4 border-t border-neutral-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Step 04
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                  SQL — Target Easy to Medium Problems
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  SQL is frequently tested in technical interviews. Rather than memorizing queries, focus on solving <span className="font-semibold text-neutral-950">Easy to Medium problem patterns</span> on platforms like LeetCode and HackerRank.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Essential SQL Patterns to Practice:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { name: "SELECT & WHERE", desc: "Filtering & conditionals" },
                    { name: "GROUP BY & HAVING", desc: "Aggregations & counts" },
                    { name: "INNER / LEFT JOINS", desc: "Multi-table relational queries" },
                    { name: "Subqueries", desc: "Nested comparisons" },
                    { name: "ORDER BY & LIMIT", desc: "Top-N / rank filtering" },
                    { name: "COUNT & AVG", desc: "Statistical aggregations" },
                  ].map((item) => (
                    <div key={item.name} className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/70">
                      <p className="font-bold text-neutral-900 font-mono text-[11px]">{item.name}</p>
                      <p className="text-[10.5px] text-neutral-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. CS CORE PILLARS */}
            <section id="cs-core" className="space-y-4 scroll-mt-24 pt-4 border-t border-neutral-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Step 05
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                  The Four Pillars of CS Core
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Interviewers frequently ask direct conceptual questions from standard computer science subjects.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "oop", label: "OOP", icon: <Cpu className="w-3.5 h-3.5" /> },
                  { id: "dbms", label: "DBMS", icon: <Database className="w-3.5 h-3.5" /> },
                  { id: "os", label: "OS", icon: <HardDrive className="w-3.5 h-3.5" /> },
                  { id: "cn", label: "Networks", icon: <Network className="w-3.5 h-3.5" /> },
                ].map((pillar) => (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveCsPillar(pillar.id)}
                    className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeCsPillar === pillar.id
                        ? "bg-neutral-950 text-white shadow-xs"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {pillar.icon}
                    <span>{pillar.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-2xs text-xs text-neutral-700">
                {activeCsPillar === "oop" && (
                  <p>
                    <span className="font-bold text-neutral-950">OOP:</span> Encapsulation, Abstraction (interfaces vs abstract classes), Inheritance, and Polymorphism (overloading vs overriding).
                  </p>
                )}
                {activeCsPillar === "dbms" && (
                  <p>
                    <span className="font-bold text-neutral-950">DBMS:</span> ACID properties, Normalization (1NF to 3NF), Primary vs Foreign Keys, Indexing, and Transaction locks.
                  </p>
                )}
                {activeCsPillar === "os" && (
                  <p>
                    <span className="font-bold text-neutral-950">OS:</span> Processes vs Threads, Context Switching, Deadlock conditions (Coffman), Virtual Memory, and Paging.
                  </p>
                )}
                {activeCsPillar === "cn" && (
                  <p>
                    <span className="font-bold text-neutral-950">Networks:</span> OSI / TCP-IP model layers, TCP 3-way handshake, UDP vs TCP, HTTP/HTTPS, and DNS resolution.
                  </p>
                )}
              </div>
            </section>

            {/* 7. PROJECT DEFENSE */}
            <section id="project-deepdive" className="space-y-4 scroll-mt-24 pt-4 border-t border-neutral-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Step 06
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                  Projects — &ldquo;Know What You Built&rdquo;
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Don&apos;t memorize a summary. Understand your project&apos;s architecture, database decisions, and real error-handling trade-offs.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  {
                    q: "Why did you choose this tech stack?",
                    a: "Prescripto uses React + Node/Express for rapid REST APIs and MongoDB for flexible doctor schemas. JobPilot uses Next.js for server-side Gemini API & Browserbase crawling.",
                  },
                  {
                    q: "How does authentication work?",
                    a: "JWT tokens with HTTP-only cookies protect doctor and patient roles in Prescripto. CSPS uses Auth0 domain-restricted authentication for college domains.",
                  },
                  {
                    q: "What challenges did you solve?",
                    a: "In JobPilot, Browserbase crawling required robust DOM handling. I used Stagehand for reliable natural-language web extraction across dynamic career sites.",
                  },
                ].map((item, idx) => {
                  const isOpen = activeProjectQuestion === idx;
                  return (
                    <div key={item.q} className="border border-neutral-200/90 rounded-xl bg-white overflow-hidden shadow-2xs">
                      <button
                        onClick={() => setActiveProjectQuestion(isOpen ? null : idx)}
                        className="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold text-neutral-950 hover:bg-neutral-50 cursor-pointer"
                      >
                        <span>{item.q}</span>
                        {isOpen ? <ChevronUp className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />}
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-xs text-neutral-600 border-t border-neutral-100 bg-neutral-50/50">
                          <p className="pt-2">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 8. INTERVIEW ROUNDS */}
            <section id="interview-day" className="space-y-4 scroll-mt-24 pt-4 border-t border-neutral-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Step 07
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                  The Interview Day Breakdown
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Campus recruitment transitions through Technical evaluation and Behavioral fitment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Technical Round */}
                <div className="p-4.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
                  <span className="text-xs font-bold text-neutral-900 block">
                    Technical Round Checklist
                  </span>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    <li>• Explain logic out loud before typing code</li>
                    <li>• Discuss Time and Space complexities ($O(N)$ vs $O(N^2)$)</li>
                    <li>• Write clean SQL joins and group queries</li>
                    <li>• Defend real project architecture confidently</li>
                  </ul>
                </div>

                {/* HR Round */}
                <div className="p-4.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
                  <span className="text-xs font-bold text-neutral-900 block">
                    HR &amp; Behavioral Round Focus
                  </span>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    <li>• Crisp 90-second introduction highlighting tech and sports ethos</li>
                    <li>• Handling teamwork challenges constructively</li>
                    <li>• Concrete research on company service domains and culture</li>
                    <li>• Expressing enthusiasm for continuous learning</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 9. RESOURCES */}
            <section id="resources" className="space-y-4 scroll-mt-24 pt-4 border-t border-neutral-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Step 08
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
                  Curated Resources
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-white border border-neutral-200/90 shadow-2xs">
                  <p className="font-bold text-neutral-950">Striver A2Z Sheet</p>
                  <p className="text-neutral-500 text-[11px]">Pattern recognition and foundational problem lists.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200/90 shadow-2xs">
                  <p className="font-bold text-neutral-950">LeetCode &amp; GFG</p>
                  <p className="text-neutral-500 text-[11px]">Easy-to-medium company-tagged practice.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200/90 shadow-2xs">
                  <p className="font-bold text-neutral-950">HackerRank SQL</p>
                  <p className="text-neutral-500 text-[11px]">Hands-on practice with joins and aggregations.</p>
                </div>
              </div>
            </section>

            {/* 10. WHAT MATTERED & CONCLUSION */}
            <section id="formula" className="space-y-6 scroll-mt-24 pt-4 border-t border-neutral-100">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  The Final Takeaway
                </span>
                <blockquote className="text-base sm:text-lg font-semibold text-neutral-950 italic max-w-2xl mx-auto leading-relaxed">
                  &ldquo;You don&apos;t always need to know everything. You need to know the right fundamentals deeply enough to explain, apply, and defend them.&rdquo;
                </blockquote>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Result: Dual Placement Offers at Cognizant &amp; LTIMindtree
                </div>
              </div>

              {/* Final CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <Button href="/projects" variant="primary" size="md">
                  Explore My Projects
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  Connect With Me
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
