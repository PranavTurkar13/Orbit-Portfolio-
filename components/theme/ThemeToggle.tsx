"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export interface ThemeToggleProps {
  className?: string;
}

const emptySubscribe = () => () => {};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900/80 dark:hover:bg-neutral-800 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-all duration-200 cursor-pointer touch-manipulation focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-200 flex items-center justify-center shrink-0 ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <Sun className="w-4.5 h-4.5 transition-transform duration-300 rotate-0 scale-100 text-amber-400 hover:rotate-45" />
      ) : (
        <Moon className="w-4.5 h-4.5 transition-transform duration-300 rotate-0 scale-100 text-neutral-700 hover:-rotate-12" />
      )}
    </button>
  );
};
