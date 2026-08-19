import { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact | Pranav Prakash Turkar — Full-Stack Developer",
  description:
    "Get in touch with Pranav Prakash Turkar for full-stack engineering, AI/LLM integration, software development opportunities, and technical collaborations.",
};

export default function ContactPage() {
  return <ContactView />;
}
