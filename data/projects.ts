export interface ProjectMetric {
  label: string;
  value: string;
}

export type ProjectCategory = "All" | "AI / ML" | "Full Stack" | "Web Development" | "Database";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  categoryLabel: string;
  categories: ("AI / ML" | "Full Stack" | "Web Development" | "Database")[];
  shortDescription: string;
  description: string[];
  technologies: string[];
  metrics?: ProjectMetric[];
  features: string[];
  image?: string;
  dataset?: string;
  featured: boolean;
  github?: string;
  backendGithub?: string;
  liveDemo?: string;
  backendLive?: string;
}

export const projects: Project[] = [
  {
    slug: "jobpilot",
    name: "JobPilot",
    tagline: "AI-Powered Job Discovery & Autonomous Company Research Platform",
    categoryLabel: "AI / Full Stack",
    categories: ["AI / ML", "Full Stack"],
    image: "/projects/jobpilot.png",
    shortDescription:
      "AI-powered job discovery platform integrating Jooble & Gemini API for 0–100 candidate match scoring, Browserbase crawling, and dynamic PDF resume generation.",
    description: [
      "Engineered an AI job discovery platform integrating the Jooble API and Gemini API to automate job searches and match scoring from 0–100 against user profiles.",
      "Built an autonomous company research agent using Browserbase and Stagehand to crawl company web pages and synthesize structured dossiers covering technology stack, company culture, and interview preparation.",
      "Implemented resume parsing and dynamic PDF generation using @react-pdf/renderer, backed by InsForge Database, Auth, and Storage with PostHog analytics.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "Browserbase",
      "Stagehand",
      "InsForge",
      "PostHog",
      "@react-pdf/renderer",
    ],
    features: [
      "AI-powered job discovery via Jooble API & Gemini API",
      "0–100 job match scoring against user profile",
      "Autonomous company research crawler with Browserbase & Stagehand",
      "Structured dossiers on tech stack, culture, and interview prep",
      "Resume parsing and dynamic PDF generation (@react-pdf/renderer)",
      "InsForge database, auth, and storage backend with PostHog analytics",
    ],
    featured: true,
    github: "https://github.com/PranavTurkar13/JobPilot/",
    liveDemo: "https://orbit-jobpilot.vercel.app/",
  },
  {
    slug: "student-placement-portal",
    name: "Student Placement Portal (CSPS)",
    tagline: "Comprehensive College Placement & Recruiter Automation System",
    categoryLabel: "Full Stack / Web Development",
    categories: ["Full Stack", "Web Development"],
    image: "/projects/student-placement-portal.png",
    shortDescription:
      "Placement portal serving 300+ students with Auth0 domain-restricted auth, an automated 6+ parameter eligibility engine, and Gmail recruiter automation.",
    description: [
      "Developed student-facing home and notification interfaces for a placement portal serving 300+ students, with job application and status tracking.",
      "Implemented Auth0 domain-restricted authentication and an eligibility engine across 6+ parameters, reducing manual shortlisting effort by 80%.",
      "Built TPO and recruiter workflows for job posting and student analysis, with Gmail notifications using company-specific subjects and pre-filled content, improving administrative workflow efficiency by 60%.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Auth0",
      "Gmail API",
    ],
    metrics: [
      { label: "Students Served", value: "300+" },
      { label: "Eligibility Parameters", value: "6+" },
      { label: "Manual Effort Reduction", value: "80%" },
      { label: "Admin Workflow Efficiency", value: "60%" },
    ],
    features: [
      "Student-facing dashboard for job applications and status tracking",
      "Auth0 domain-restricted secure college authentication",
      "Automated eligibility engine evaluating 6+ academic & profile parameters",
      "Recruiter & TPO portal for posting drives and applicant analytics",
      "Automated Gmail notifications with dynamic company subjects and content",
    ],
    featured: true,
    github: "https://github.com/PranavTurkar13/tnp-frontend",
    backendGithub: "https://github.com/PranavTurkar13/TNP_PORTAL_BACKEND",
    liveDemo: "https://tnp-frontend-gold.vercel.app/home",
  },
  {
    slug: "prescripto",
    name: "Prescripto",
    tagline: "Doctor Appointment Booking System & Healthcare Management",
    categoryLabel: "Full Stack",
    categories: ["Full Stack"],
    image: "/projects/prescripto.png",
    shortDescription:
      "MERN doctor appointment booking platform with specialty filtering, booking/cancellation workflows, JWT auth, MongoDB Atlas, Cloudinary, and Razorpay payments.",
    description: [
      "Built a full-stack doctor appointment platform supporting 2 user roles — doctors and patients — with doctor discovery, specialty filtering, appointment booking, and cancellation.",
      "Implemented JWT authentication, MongoDB Atlas integration, Cloudinary file storage, and 8 REST API endpoints for user, doctor, appointment, and payment workflows.",
      "Integrated Razorpay for online payments and deployed the frontend on Vercel and backend API on Render.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Razorpay",
      "Vercel",
      "Render",
    ],
    metrics: [
      { label: "User Roles", value: "2 (Doctor & Patient)" },
      { label: "REST Endpoints", value: "8" },
    ],
    features: [
      "Doctor discovery with instant specialty filtering",
      "Appointment booking and cancellation management",
      "Role-based workflows with JWT authentication",
      "Cloudinary image uploads & MongoDB Atlas database",
      "Razorpay payment gateway integration",
      "Deployed frontend on Vercel and backend API on Render",
    ],
    featured: true,
    github: "https://github.com/PranavTurkar13/Prescripto-Doctor-Appointment-System",
    liveDemo: "https://prescripto-doctor-appointment-syste.vercel.app/",
    backendLive: "https://prescripto-backend-28iu.onrender.com/",
  },
  {
    slug: "movie-recommendation-system",
    name: "Movie Recommendation System",
    tagline: "Content-Based ML Recommendation Engine with Streamlit Frontend",
    categoryLabel: "AI / Machine Learning",
    categories: ["AI / ML"],
    image: "/projects/movie-recommendation-system.png",
    shortDescription:
      "Content-based movie recommendation system that suggests similar titles using text vectorization, TF-IDF / CountVectorizer, and cosine similarity with a Streamlit interface.",
    description: [
      "Built a content-based recommendation system that calculates pairwise similarity across movie metadata to recommend top 5 relevant films.",
      "Used Jupyter Notebook for data preprocessing, text vectorization (TF-IDF / CountVectorizer), and cosine similarity matrix computation over the TMDB dataset.",
      "Created an interactive Streamlit frontend displaying movie posters, titles, and trending titles.",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Jupyter Notebook",
      "CountVectorizer",
      "TF-IDF",
      "Cosine Similarity",
    ],
    dataset: "TMDB Movie Metadata",
    features: [
      "Movie recommendation based on content similarity",
      "TF-IDF & CountVectorizer text vectorization",
      "Cosine similarity matrix computation",
      "Top 5 similar movie recommendations with posters & titles",
      "Top 10 trending movies display",
      "Interactive Streamlit web frontend",
    ],
    featured: false,
    github: "https://github.com/PranavTurkar13/Movie-Recommendation-System",
  },
  {
    slug: "fifa-management-system",
    name: "FIFA Management System",
    tagline: "Python & MongoDB Player Marketplace & Team Administration System",
    categoryLabel: "Full Stack / Database",
    categories: ["Full Stack", "Database"],
    image: "/projects/fifa-management-system.png",
    shortDescription:
      "A FIFA management platform built with Python and MongoDB where users purchase and manage players while admins perform full CRUD on prices, ranks, and stats.",
    description: [
      "Developed a FIFA manager system with Python and MongoDB allowing users to browse player databases, purchase players, and organize custom squads.",
      "Engineered comprehensive administrative dashboards allowing admins to add, update, and delete player records with dynamic pricing, ranks, and achievements.",
    ],
    technologies: ["Python", "MongoDB", "Database Systems"],
    features: [
      "User player purchasing and squad management system",
      "Detailed player profile, rank, price, and achievement views",
      "Admin CRUD operations for adding, updating, and deleting players",
      "Dynamic pricing and skill rating adjustments",
      "MongoDB document storage for flexible player schemas",
    ],
    featured: false,
    github: "https://github.com/PranavTurkar13/Fifa-Management-system",
  },
  {
    slug: "playtunes",
    name: "Playtunes",
    tagline: "Spotify-Inspired Responsive Web Music Player",
    categoryLabel: "Web Development",
    categories: ["Web Development"],
    image: "/projects/playtunes.png",
    shortDescription:
      "A responsive Spotify-inspired web music player built with HTML5, CSS3, and JavaScript featuring playlists, playback controls, seek bar, and volume slider.",
    description: [
      "Engineered a responsive Spotify-inspired audio player using vanilla HTML5, CSS3, and JavaScript.",
      "Implemented comprehensive playlist navigation, track details, play/pause/skip controls, interactive progress/seek bar, and dynamic volume regulation.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Spotify-inspired dark responsive interface",
      "Playlist and track information display",
      "Play, pause, skip, and rewind playback controls",
      "Interactive seek bar with real-time timestamp tracking",
      "Volume slider and mute toggle controls",
    ],
    featured: false,
    github: "https://github.com/PranavTurkar13/playtunes",
  },
  {
    slug: "earlier-portfolio",
    name: "Earlier Portfolio",
    tagline: "Personal Developer Portfolio Built with React & Vite",
    categoryLabel: "Web Development",
    categories: ["Web Development"],
    image: "/projects/earlier-portfolio.jpg",
    shortDescription:
      "Previous personal portfolio website designed and deployed with React and Vite on Vercel to showcase early development projects.",
    description: [
      "Designed and deployed a responsive personal developer portfolio using React and Vite.",
      "Structured to showcase technical skills, social profiles, and early software engineering projects.",
    ],
    technologies: ["React", "Vite", "JavaScript", "CSS", "Vercel"],
    features: [
      "Fast Vite build pipeline and SPA routing",
      "Interactive project and skill showcase",
      "Deployed and hosted on Vercel",
    ],
    featured: false,
    github: "https://github.com/PranavTurkar13/Portfolio",
    liveDemo: "https://pranavturkar.vercel.app/",
  },
  {
    slug: "trivia-game",
    name: "Trivia Game",
    tagline: "Interactive Quiz & Knowledge Challenge Web App",
    categoryLabel: "Web Development",
    categories: ["Web Development"],
    image: "/projects/trivia-game.png",
    shortDescription:
      "An interactive trivia game web application built with vanilla JavaScript, HTML, and CSS featuring question timers, scoring, and instant feedback.",
    description: [
      "Developed an interactive trivia quiz application using pure HTML, CSS, and vanilla JavaScript.",
      "Implemented dynamic question cycling, real-time score calculation, and visual user response feedback.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Dynamic question presentation and answer validation",
      "Real-time scoring and performance summary",
      "Interactive animations and responsive UI",
    ],
    featured: false,
    github: "https://github.com/PranavTurkar13/Trivia-Game",
  },
];
