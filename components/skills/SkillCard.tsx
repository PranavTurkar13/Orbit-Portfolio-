import React from "react";
import { SkillCategory } from "@/data/skills";
import { Terminal, Code2, Server, Database, Sparkles, Wrench } from "lucide-react";

export interface SkillCardProps {
  skillCategory: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skillCategory }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "terminal":
        return <Terminal className="w-5 h-5 text-neutral-900" />;
      case "code":
        return <Code2 className="w-5 h-5 text-neutral-900" />;
      case "server":
        return <Server className="w-5 h-5 text-neutral-900" />;
      case "database":
        return <Database className="w-5 h-5 text-neutral-900" />;
      case "wrench":
        return <Wrench className="w-5 h-5 text-neutral-900" />;
      case "sparkles":
      default:
        return <Sparkles className="w-5 h-5 text-neutral-900" />;
    }
  };

  return (
    <div
      className={`group h-full flex flex-col justify-between bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-7 hover:border-neutral-400/80 hover:shadow-md transition-all duration-300 ${
        skillCategory.animationDelayClass || ""
      }`}
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-neutral-100">
          <div className="p-2.5 rounded-xl bg-neutral-100/90 border border-neutral-200/70 flex items-center justify-center shrink-0 group-hover:bg-neutral-950 group-hover:text-white transition-colors duration-200">
            <span className="group-hover:[&_svg]:text-white transition-colors">
              {getCategoryIcon(skillCategory.iconName)}
            </span>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight">
              {skillCategory.category}
            </h3>
            <span className="text-[11px] font-medium text-neutral-400">
              {skillCategory.skills.length} core technologies
            </span>
          </div>
        </div>

        {/* Badges Container */}
        <div className="flex flex-wrap gap-2 pt-1">
          {skillCategory.skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-neutral-50/90 text-neutral-800 border border-neutral-200/70 hover:bg-neutral-100 hover:border-neutral-300 hover:scale-[1.03] transition-all duration-150 cursor-default"
            >
              {skill.symbol && (
                <span className="text-[11px] font-mono text-neutral-500 shrink-0 select-none">
                  {skill.symbol}
                </span>
              )}
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
