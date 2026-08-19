import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "subtle" | "dark" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors whitespace-nowrap";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  const variantStyles = {
    default:
      "bg-neutral-100/90 text-neutral-700 border border-neutral-200/70 hover:bg-neutral-200/70",
    subtle:
      "bg-neutral-50 text-neutral-600 border border-neutral-100",
    dark:
      "bg-neutral-900 text-neutral-100 border border-neutral-800",
    outline:
      "bg-transparent text-neutral-700 border border-neutral-300",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
