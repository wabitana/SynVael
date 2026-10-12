export const siteConfig = {
  name: "SynVael",
  tagline: "AI & Software Development | Leading Technology Partner",
  email: "info@synvael.com",
  phone: "+251 942497990",
  address: "Addis Ababa, Ethiopia",
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/company/synvael",
  },
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const aboutLinks = [
  { href: "/about", label: "About SynVael" },
  { href: "/team", label: "SynVael Team" },
] as const;

export const navSecondary = [
  { href: "/start-a-project", label: "Start a Project" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
] as const;
