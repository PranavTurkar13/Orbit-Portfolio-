export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  score: string;
  duration: string;
  details?: string;
}

export interface Profile {
  name: string;
  shortName: string;
  dob: string;
  title: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  openingLine: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    cgpa: string;
    duration: string;
  };
  educationTimeline: EducationEntry[];
  entrancePercentile: string;
  placements: string[];
  summary: string;
  heroDescription: string;
  aboutBio: string[];
  resumeUrl: string;
}

export const profile: Profile = {
  name: "Pranav Prakash Turkar",
  shortName: "Pranav",
  dob: "13 July 2004",
  title: "Full-Stack Developer",
  role: "Information Technology Graduate",
  location: "Pune, Maharashtra, India",
  email: "pranavturkar93@gmail.com",
  phone: "+91-8275616832",
  openingLine: "Born curious, built to compete, and driven to become better every day.",
  education: {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "P.E.S. Modern College of Engineering",
    location: "Pune, Maharashtra",
    cgpa: "9.09/10",
    duration: "2022 – 2026",
  },
  educationTimeline: [
    {
      degree: "Bachelor of Engineering — Information Technology",
      institution: "P.E.S. Modern College of Engineering",
      location: "Pune, Maharashtra",
      score: "CGPA: 9.09 / 10",
      duration: "Nov 2022 – Jul 2026",
      details: "Discovered passions for Full-Stack Web Development, LLM Engineering, Hackathons, and NSS Leadership.",
    },
    {
      degree: "Class 12th — HSC (Science)",
      institution: "Raj Junior College",
      location: "Yavatmal, Maharashtra",
      score: "81.67%",
      duration: "Completed Mar 2022",
      details: "Achieved 94.04 percentile in MHT-CET Engineering Entrance Exam.",
    },
    {
      degree: "Class 10th — CBSE",
      institution: "Yavatmal Public School",
      location: "Yavatmal, Maharashtra",
      score: "91.00%",
      duration: "Completed Jul 2020",
      details: "Strong foundation in academics and played football for the school team.",
    },
  ],
  entrancePercentile: "94.04 Percentile",
  placements: ["Cognizant", "LTIMindtree"],
  summary:
    "Information Technology graduate with hands-on experience in Full-Stack Web Development using React.js, Next.js, Node.js, Express.js, TypeScript, and MongoDB. Experienced in building RESTful APIs, authentication systems, database-driven applications, and deploying full-stack applications. Currently exploring LLM Engineering using frontier APIs, prompt engineering, and API-based generative AI applications.",
  heroDescription:
    "I build full-stack web applications with modern technologies and explore AI-powered applications using LLMs and generative AI APIs.",
  aboutBio: [
    "I'm Pranav, an Information Technology graduate and full-stack developer who enjoys building practical web applications and exploring emerging AI technologies.",
    "My development experience is centered around building full-stack applications using technologies such as React.js, Next.js, Node.js, Express.js, TypeScript, and MongoDB.",
    "I've worked on projects involving authentication, REST APIs, databases, payments, cloud storage, deployment, and AI-powered workflows.",
    "I'm currently exploring LLM Engineering, frontier APIs, prompt engineering, and API-based generative AI applications while continuing to strengthen my full-stack development skills.",
  ],
  resumeUrl: "/Pranav_Turkar.pdf",
};
