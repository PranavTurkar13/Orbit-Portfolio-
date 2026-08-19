"use client";

import React, { useState } from "react";
import { PlacementStoryView } from "@/components/blog/PlacementStoryView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
  ChevronRight,
  Code2,
  Layers,
  Compass,
} from "lucide-react";

export const BlogView: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  if (selectedArticleId === "placement-strategy") {
    return (
      <PlacementStoryView onBack={() => setSelectedArticleId(null)} />
    );
  }

  return (
    <div className="min-h-screen py-16 md:py-24 space-y-16">
      {/* Centered Section Header */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            align="center"
            eyebrow="WRITING & INSIGHTS"
            title="Articles & Technical Roadmaps"
            description="Personal retrospectives, interview preparation blueprints, and software engineering notes."
          />
        </div>
      </section>

      {/* Featured Article & Blog Grid */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-8">
        {/* Main Featured Article Card */}
        <div
          onClick={() => setSelectedArticleId("placement-strategy")}
          className="group relative bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-10 shadow-xs hover:border-neutral-400/80 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-neutral-950 text-white">
                  Featured Article
                </span>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200/60">
                  Interactive Journey
                </span>
                <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  5 min read
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-950 tracking-tight leading-snug group-hover:text-neutral-700 transition-colors">
                  The Strategic Blueprint: How I Secured Dual Placement Offers at Cognizant &amp; LTIMindtree
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  A high-leverage preparation guide focusing on high-frequency DSA patterns, fluent SQL, CS core fundamentals, and deep project defense instead of endless problem counts.
                </p>
              </div>

              {/* Verified highlights preview */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-xs font-semibold text-neutral-800">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  Cognizant &amp; LTIMindtree
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-xs font-medium text-neutral-700">
                  <Code2 className="w-3.5 h-3.5 text-neutral-600" />
                  150+ DSA &amp; SQL Focus
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-xs font-medium text-neutral-700">
                  <Layers className="w-3.5 h-3.5 text-neutral-600" />
                  Project Defense
                </div>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 self-center md:self-end pt-2 md:pt-0">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 text-white text-xs font-semibold group-hover:bg-neutral-800 transition-all shadow-xs">
                Read Interactive Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>

        {/* Simple Coming Soon Note */}
        <div className="pt-6 text-center">
          <p className="text-sm font-medium text-neutral-400 tracking-wide">
            Many blogs coming soon...
          </p>
        </div>
      </section>
    </div>
  );
};
