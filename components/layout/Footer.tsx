import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";
import { GithubIcon, LinkedinIcon, XIcon, MailIcon } from "@/components/ui/Icons";

export const Footer: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon size={18} />;
      case "linkedin":
        return <LinkedinIcon size={18} />;
      case "twitter":
        return <XIcon size={17} />;
      case "email":
        return <MailIcon size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-white border-t border-neutral-200/80 pt-16 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-100">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-neutral-950 inline-block hover:opacity-80 transition-opacity"
            >
              &lt;<span className="font-semibold">{profile.shortName}</span> /&gt;
            </Link>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              Information Technology graduate building full-stack applications and exploring LLM-powered applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-neutral-950 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link href="/" className="hover:text-neutral-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neutral-950 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-neutral-950 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-neutral-950 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neutral-950 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-semibold text-neutral-950 tracking-wide">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>{profile.location}</p>
              <p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-neutral-900 font-medium hover:underline"
                >
                  {profile.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-neutral-500 hover:text-neutral-950 transition-colors p-1"
              >
                {getSocialIcon(item.icon)}
              </a>
            ))}
          </div>

          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
