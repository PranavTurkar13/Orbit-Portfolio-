export interface GameStory {
  title: string;
  era: string;
  genre: string;
  description: string;
  image: string;
  accent: string;
  tag: string;
}

export interface MediaStory {
  title: string;
  type: "Anime" | "Cinema" | "TV Series";
  quote: string;
  takeaway: string;
  image: string;
  accent: string;
}

export const gamesData: GameStory[] = [
  {
    title: "GTA San Andreas & Vice City",
    era: "Rockstar Classics",
    genre: "Open World Exploration",
    description: "The golden era of storytelling, vibrant 80s neon aesthetics, mission discipline, and exploring huge living game worlds.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    accent: "from-pink-900/80 via-purple-950/90 to-neutral-950",
    tag: "Nostalgic Masterpiece",
  },
  {
    title: "Minecraft",
    era: "Creative & Survival",
    genre: "Sandbox Architecture",
    description: "Building intricate structures from scratch, resource optimization, survival instincts, and boundless creative freedom.",
    image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=800&q=80",
    accent: "from-emerald-950/90 via-teal-950/80 to-neutral-950",
    tag: "Architectural Sandbox",
  },
  {
    title: "Fall Guys",
    era: "Battle Royale",
    genre: "Competitive Agility",
    description: "Fast-paced chaos, reflexes, adaptability, and learning how to bounce back instantly through obstacle courses.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    accent: "from-amber-950/90 via-orange-950/80 to-neutral-950",
    tag: "High Energy & Focus",
  },
  {
    title: "Granny",
    era: "Suspense Survival",
    genre: "Stealth & Strategy",
    description: "Remaining calm under extreme tension, stealthy problem solving, and making decisive moves under pressure.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    accent: "from-zinc-950 via-stone-900 to-neutral-950",
    tag: "Calm Under Pressure",
  },
];

export const mediaData: MediaStory[] = [
  {
    title: "Attack on Titan",
    type: "Anime",
    quote: "Fight. If you don't fight, you can't win.",
    takeaway: "Relentless determination for freedom, strategic thinking in high-stakes situations, and unyielding will to overcome immense odds.",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    accent: "from-stone-900 via-neutral-900 to-amber-950/40",
  },
  {
    title: "Vinland Saga",
    type: "Anime",
    quote: "You have no enemies. No one has any enemies.",
    takeaway: "True strength is not violence or hatred, but emotional mastery, self-discipline, inner peace, and purposeful resilience.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    accent: "from-slate-900 via-neutral-900 to-indigo-950/40",
  },
  {
    title: "Munna Bhai M.B.B.S.",
    type: "Cinema",
    quote: "Jadoo ki jhappi — Human empathy changes everything.",
    takeaway: "The timeless importance of empathy, kindness, warmth, and keeping human connection at the heart of everything you do.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    accent: "from-amber-950/60 via-neutral-900 to-neutral-950",
  },
];

export const sportsQualities = [
  {
    title: "Calmness Under Pressure",
    desc: "Learned from cricket run-chases: when stakes are high, clear thinking beats panic.",
    icon: "shield",
  },
  {
    title: "Calculated Aggression",
    desc: "Knowing precisely when to defend and when to seize the momentum to attack.",
    icon: "zap",
  },
  {
    title: "Teamwork & Cohesion",
    desc: "Playing school football taught me how individual discipline powers the collective goal.",
    icon: "users",
  },
  {
    title: "Decisive Execution",
    desc: "Splitting seconds to make the right tactical call, both on the pitch and in code.",
    icon: "target",
  },
];

export const nssMilestones = [
  {
    stage: "01. The Volunteer",
    role: "Ground Roots",
    description: "Joined NSS in 2nd year of engineering. Started by listening, participating in cleanliness drives, and understanding community needs.",
  },
  {
    stage: "02. Taking Responsibility",
    role: "Event Coordination",
    description: "Stepped forward to manage social outreach programs, logistical coordination, and campus welfare initiatives.",
  },
  {
    stage: "03. Camp Leadership",
    role: "Team Leader",
    description: "Led and managed a dedicated student contingent during the week-long rural NSS camp, resolving conflicts and coordinating field activities.",
  },
  {
    stage: "04. People & Team Management",
    role: "Holistic Growth",
    description: "Mastered public speaking, cross-team empathy, managing responsibilities under tight schedules, and collective accountability.",
  },
];
