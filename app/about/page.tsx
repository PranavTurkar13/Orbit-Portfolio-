import { Metadata } from "next";
import { AboutView } from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About | Pranav Prakash Turkar — Full-Stack Developer",
  description:
    "Learn about Pranav Prakash Turkar, an Information Technology graduate with hands-on full-stack development experience, 9.09 CGPA at P.E.S. Modern College of Engineering, verified certifications, and campus placement offers.",
};

export default function AboutPage() {
  return <AboutView />;
}
