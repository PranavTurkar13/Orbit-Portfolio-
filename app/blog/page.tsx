import { Metadata } from "next";
import { BlogView } from "@/components/blog/BlogView";

export const metadata: Metadata = {
  title: "Blog & Technical Notes | Pranav Prakash Turkar",
  description:
    "Explore technical writing, placement preparation blueprints, and software engineering notes by Pranav Prakash Turkar.",
};

export default function BlogPage() {
  return <BlogView />;
}
