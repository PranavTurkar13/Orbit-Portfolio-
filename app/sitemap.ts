import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pranav-turkar.vercel.app"; // Update with custom domain when connected

  const routes = ["", "/about", "/projects", "/blog", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" || route === "/projects" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
