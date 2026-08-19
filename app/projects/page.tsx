import { Metadata } from "next";
import { ProjectsView } from "@/components/projects/ProjectsView";

export const metadata: Metadata = {
  title: "Projects | Pranav Prakash Turkar — Full-Stack Developer",
  description:
    "Explore projects engineered by Pranav Prakash Turkar, including JobPilot (AI Job Discovery & Autonomous Research), Student Placement Portal (CSPS), Prescripto (Healthcare Platform), and ML systems.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
