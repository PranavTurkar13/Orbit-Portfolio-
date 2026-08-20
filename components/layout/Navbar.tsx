"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle body scroll locking on mobile
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-white hover:opacity-80 transition-opacity"
            >
              &lt;<span className="font-semibold">Pranav</span> /&gt;
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-neutral-950 dark:text-white font-semibold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action buttons & Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Button href="/contact" size="sm" variant="primary" className="!rounded-lg px-4 py-2">
                Hire Me
              </Button>
            </div>

            {/* Mobile Actions (Theme Toggle + Menu Trigger) */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2.5 text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white active:bg-neutral-100 dark:active:bg-neutral-900 rounded-xl cursor-pointer bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 touch-manipulation transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Rendered as fixed overlay with high z-index) */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-50 bg-white dark:bg-neutral-950 md:hidden overflow-y-auto border-t border-neutral-200 dark:border-neutral-800 animate-in fade-in duration-150 transition-colors">
          <nav className="flex flex-col p-6 space-y-2.5 bg-white dark:bg-neutral-950 min-h-[calc(100vh-72px)]">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-3 px-4 rounded-xl transition-all touch-manipulation ${
                    isActive
                      ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs"
                      : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 active:bg-neutral-200 dark:active:bg-neutral-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800">
              <Button
                href="/contact"
                size="md"
                variant="primary"
                className="w-full justify-center !rounded-xl text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hire Me
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
