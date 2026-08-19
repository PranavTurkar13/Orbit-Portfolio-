import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  action,
  className = "",
}) => {
  const alignmentStyles = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div
      className={`flex flex-col mb-12 sm:mb-16 ${alignmentStyles} ${className}`}
    >
      <div className={`w-full flex ${align === "center" && !action ? "justify-center" : "justify-between"} items-baseline gap-4`}>
        <div className={`flex flex-col ${align === "center" && !action ? "items-center" : ""}`}>
          {eyebrow && (
            <span className="text-xs sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950">
            {title}
          </h2>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>

      {description && (
        <p className={`mt-3.5 text-base sm:text-lg text-neutral-600 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
};
