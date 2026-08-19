export interface SkillItem {
  name: string;
  symbol?: string;
}

export interface SkillCategory {
  category: string;
  iconName: "terminal" | "code" | "server" | "database" | "sparkles" | "wrench";
  skills: SkillItem[];
  animationDelayClass?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    iconName: "terminal",
    animationDelayClass: "",
    skills: [
      { name: "Python", symbol: "🐍" },
      { name: "Java", symbol: "☕" },
      { name: "TypeScript", symbol: "TS" },
      { name: "JavaScript", symbol: "JS" },
      { name: "SQL", symbol: "⛁" },
    ],
  },
  {
    category: "Frontend",
    iconName: "code",
    animationDelayClass: "animate-float-delayed",
    skills: [
      { name: "React.js", symbol: "⚛" },
      { name: "Next.js", symbol: "▲" },
      { name: "Tailwind CSS", symbol: "≈" },
      { name: "HTML5 / CSS3", symbol: "</>" },
    ],
  },
  {
    category: "Backend",
    iconName: "server",
    animationDelayClass: "animate-float-alt",
    skills: [
      { name: "Node.js", symbol: "⬢" },
      { name: "Express.js", symbol: "ex" },
      { name: "RESTful APIs", symbol: "⇄" },
      { name: "InsForge", symbol: "⚡" },
    ],
  },
  {
    category: "Databases & Auth",
    iconName: "database",
    animationDelayClass: "animate-float-slow",
    skills: [
      { name: "MongoDB", symbol: "🍃" },
      { name: "PostgreSQL", symbol: "🐘" },
      { name: "MySQL / SQLite", symbol: "🗄" },
      { name: "Prisma ORM", symbol: "▲" },
      { name: "JWT / Auth0", symbol: "🔒" },
    ],
  },
  {
    category: "AI & LLM",
    iconName: "sparkles",
    animationDelayClass: "",
    skills: [
      { name: "Gemini API", symbol: "✦" },
      { name: "OpenAI API", symbol: "✹" },
      { name: "LLM Engineering", symbol: "🧠" },
      { name: "Prompt Engineering", symbol: "⚡" },
      { name: "Browserbase", symbol: "🌐" },
      { name: "Stagehand", symbol: "🤖" },
    ],
  },
  {
    category: "Tools",
    iconName: "wrench",
    animationDelayClass: "animate-float-delayed",
    skills: [
      { name: "Git", symbol: "⎇" },
      { name: "GitHub", symbol: "🐙" },
      { name: "Docker", symbol: "🐋" },
      { name: "Postman", symbol: "🚀" },
      { name: "Vercel / Render", symbol: "▲" },
      { name: "PostHog", symbol: "🦔" },
    ],
  },
];
