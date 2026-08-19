import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
