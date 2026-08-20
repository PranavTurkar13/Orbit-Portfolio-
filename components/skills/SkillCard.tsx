import React from "react";
import { SkillCategory } from "@/data/skills";
import { Terminal, Code2, Server, Database, Sparkles, Wrench } from "lucide-react";

export interface SkillCardProps {
  skillCategory: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skillCategory }) => {
  const getCategoryIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-neutral-900 dark:text-neutral-100 group-hover:text-white dark:group-hover:text-neutral-950 transition-colors";
    switch (iconName) {
      case "terminal":
        return <Terminal className={iconClass} />;
      case "code":
        return <Code2 className={iconClass} />;
      case "server":
        return <Server className={iconClass} />;
      case "database":
        return <Database className={iconClass} />;
      case "wrench":
        return <Wrench className={iconClass} />;
      case "sparkles":
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div
      className={`group h-full flex flex-col justify-between bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-6 sm:p-7 hover:border-neutral-400/80 dark:hover:border-neutral-600 hover:shadow-md transition-all duration-300 ${
        skillCategory.animationDelayClass || ""
      }`}
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-neutral-100 dark:border-neutral-800">
          <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/70 dark:border-neutral-700/80 flex items-center justify-center shrink-0 group-hover:bg-neutral-950 dark:group-hover:bg-white transition-colors duration-200">
            {getCategoryIcon(skillCategory.iconName)}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
              {skillCategory.category}
            </h3>
            <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
              {skillCategory.skills.length} core technologies
            </span>
          </div>
        </div>

        {/* Badges Container */}
        <div className="flex flex-wrap gap-2 pt-1">
          {skillCategory.skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-neutral-50 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/70 dark:border-neutral-700/80 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:scale-[1.03] transition-all duration-150 cursor-default"
            >
              {skill.symbol && (
                <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 shrink-0 select-none">
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
