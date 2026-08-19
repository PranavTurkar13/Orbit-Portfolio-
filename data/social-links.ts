export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "email";
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/PranavTurkar13/",
    icon: "github",
    label: "Visit Pranav's GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pranav-turkar/",
    icon: "linkedin",
    label: "Visit Pranav's LinkedIn profile",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/1963Pranav23414",
    icon: "twitter",
    label: "Visit Pranav's X (Twitter) profile",
  },
  {
    name: "Email",
    url: "mailto:pranavturkar93@gmail.com",
    icon: "email",
    label: "Send email to Pranav",
  },
];
