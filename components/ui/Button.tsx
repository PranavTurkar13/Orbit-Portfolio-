import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external,
  target,
  rel,
  download,
  icon,
  iconPosition = "right",
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-200 focus-visible:ring-offset-2 whitespace-nowrap select-none shrink-0";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5 h-8",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2 h-10.5",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5 h-12",
  };

  const variantStyles = {
    primary:
      "bg-neutral-950 text-white hover:bg-neutral-800 border border-neutral-950 shadow-xs active:scale-[0.99] dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:border-white",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-200/80 active:scale-[0.99] dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:border-neutral-700",
    outline:
      "bg-white text-neutral-900 hover:bg-neutral-50 border border-neutral-300/90 hover:border-neutral-400 shadow-2xs active:scale-[0.99] dark:bg-neutral-900/60 dark:text-neutral-100 dark:hover:bg-neutral-800/80 dark:border-neutral-700 dark:hover:border-neutral-600",
    ghost:
      "bg-transparent text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/80",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const renderContent = () => (
    <>
      {icon && iconPosition === "left" && (
        <span className="inline-flex items-center justify-center shrink-0">{icon}</span>
      )}
      <span className="inline-flex items-center">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-flex items-center justify-center shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    const isExternal = external || target === "_blank" || href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          download={download}
          className={combinedClasses}
        >
          {renderContent()}
        </a>
      );
    }

    return (
      <Link href={href} download={download} className={combinedClasses}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={combinedClasses} {...props}>
      {renderContent()}
    </button>
  );
};
