export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  pdfUrl: string;
  description: string;
  skills: string[];
}

export const certificationsData: Certification[] = [
  {
    title: "Advanced MERN Development",
    issuer: "Infosys Springboard",
    date: "February 2026",
    pdfUrl: "/certificates/advanced-mern-development.pdf",
    description: "Comprehensive certification covering advanced MongoDB, Express.js, React.js, and Node.js architectures, authentication, and full-stack performance optimization.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
  },
  {
    title: "Python Full Stack Developer Virtual Internship (10 Weeks)",
    issuer: "AICTE • EduSkills",
    date: "Oct – Dec 2024",
    credentialId: "0a204f71386ff0d7881be79aa372057e",
    pdfUrl: "/certificates/python-fullstack-internship.pdf",
    description: "10-week intensive virtual internship supported by AICTE and EduSkills Academy covering Python full-stack engineering, backend systems, and web architecture.",
    skills: ["Python", "Full-Stack Development", "Backend Architecture", "Web APIs"],
  },
  {
    title: "Cloud Computing with AWS (6 Weeks)",
    issuer: "Internshala Trainings",
    date: "April 2023",
    credentialId: "6a94jk49rmn",
    pdfUrl: "/certificates/aws-cloud-computing.pdf",
    description: "Hands-on training covering AWS IAM, Amazon S3, Virtual Private Cloud (VPC), EC2 Compute, Cloud Architecture, Databases, and Security Management.",
    skills: ["AWS EC2", "AWS S3", "AWS IAM", "VPC", "Cloud Architecture"],
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    date: "January 2023",
    pdfUrl: "/certificates/basics-of-python.pdf",
    description: "Foundational programming certification establishing core algorithmic logic, data structures, and object-oriented programming in Python.",
    skills: ["Python", "Data Structures", "Algorithms", "OOP"],
  },
];
