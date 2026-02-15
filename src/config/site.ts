// Site configuration
export const SITE = {
  title: "On Site Computer Repairs",
  description: "Serving St. John's & surrounding area. Virus removal, hardware repair, tune-ups, data recovery, and more. We come to you.",
  url: "https://yourdomain.com",
  author: "On Site Computer Repairs",
  tagline: "Serving St. John's & surrounding area",
  phone: "(555) 123-4567",
  email: "contact@example.com",
} as const;

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/yourcompany",
  twitter: "https://twitter.com/yourcompany",
  facebook: "https://facebook.com/yourcompany",
} as const;

export const services = [
  {
    title: "Virus & Malware Removal",
    description:
      "Remove viruses, malware, and other threats to get your computer running safely again.",
  },
  {
    title: "Hardware Repair",
    description:
      "Screen replacements, battery issues, hard drive upgrades, and other hardware fixes.",
  },
  {
    title: "Software Installation & Updates",
    description:
      "Operating system installs, driver updates, and software setup.",
  },
  {
    title: "Tune-Ups & Performance",
    description:
      "Clean-ups, startup optimization, and general maintenance to speed up your PC.",
  },
  {
    title: "Data Recovery",
    description:
      "Recover lost files from failing drives or accidental deletion when possible.",
  },
  {
    title: "On-Site Service",
    description:
      "We come to you—at home or office—so you don't have to unplug and drop off your computer.",
  },
] as const;
