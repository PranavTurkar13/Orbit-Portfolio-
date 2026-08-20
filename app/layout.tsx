import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pranav Prakash Turkar | Full-Stack Developer",
  description:
    "Information Technology graduate with hands-on experience in Full-Stack Web Development (React.js, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB) and growing expertise in LLM Engineering.",
  keywords: [
    "Pranav Prakash Turkar",
    "Pranav Turkar",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "LLM Engineering",
    "JobPilot",
    "Student Placement Portal",
    "Prescripto",
  ],
  authors: [{ name: "Pranav Prakash Turkar" }],
  openGraph: {
    title: "Pranav Prakash Turkar | Full-Stack Developer",
    description:
      "Information Technology graduate building full-stack web applications and exploring LLM-powered applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pranav Prakash Turkar",
    alternateName: "Pranav Turkar",
    jobTitle: "Full-Stack Developer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "P.E.S. Modern College of Engineering, Pune",
    },
    url: "https://pranav-turkar.vercel.app",
    sameAs: [
      "https://github.com/PranavTurkar13",
      "https://www.linkedin.com/in/pranav-turkar/",
      "https://x.com/1963Pranav23414",
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "LLM Engineering",
      "Python",
      "Java",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-950 transition-colors duration-150">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
