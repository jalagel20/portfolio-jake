export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
}

export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "tools" | "databases" | "other";
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}

export const resumeData = {
  experience: [
    {
      company: "Cardinal Law, P.A.",
      role: "Full-Stack Software Engineer",
      period: "Mar 2025 - Present",
      description: "Solo engineer delivering 5+ production projects—from the core website to legal automation tools and mobile apps. Drove 40% increase in client inquiries and achieved top-3 SEO rankings across 40+ keywords.",
      technologies: ["React", "Next.js", "TypeScript", "Swift", "Tailwind CSS"],
    },
    {
      company: "Lucid.Care",
      role: "Junior Software Engineer",
      period: "Aug 2023 - Feb 2025",
      description: "Led front-end development of a mental health mobile app from concept to beta launch in under 12 weeks. Spearheaded Agile processes and improved sprint delivery consistency by 30%.",
      technologies: ["React Native", "TypeScript", "PostgreSQL", "Firebase", "Expo"],
    },
    {
      company: "Volta Health",
      role: "Software Engineer Intern",
      period: "May 2023 - Jul 2023",
      description: "Built a medical care accessibility app for students, supporting 100+ early users. Improved data sync performance by 40% and maintained HIPAA compliance.",
      technologies: ["React Native", "Redux", "Node.js", "Express", "Prisma", "PostgreSQL"],
    },
  ] as Experience[],

  education: [
    {
      institution: "University of Miami",
      degree: "Bachelor of Science",
      field: "Biochemistry",
      period: "2019 - 2023",
    },
  ] as Education[],

  skills: [
    // Languages
    { name: "TypeScript", category: "languages", proficiency: "expert" },
    { name: "JavaScript", category: "languages", proficiency: "expert" },
    { name: "Python", category: "languages", proficiency: "intermediate" },
    { name: "Swift", category: "languages", proficiency: "intermediate" },
    { name: "HTML/CSS", category: "languages", proficiency: "expert" },

    // Frameworks & Libraries
    { name: "React", category: "frameworks", proficiency: "expert" },
    { name: "Next.js", category: "frameworks", proficiency: "expert" },
    { name: "React Native", category: "frameworks", proficiency: "advanced" },
    { name: "Node.js", category: "frameworks", proficiency: "advanced" },
    { name: "Express", category: "frameworks", proficiency: "advanced" },
    { name: "Redux", category: "frameworks", proficiency: "advanced" },
    { name: "Tailwind CSS", category: "frameworks", proficiency: "expert" },
    { name: "Prisma", category: "frameworks", proficiency: "intermediate" },

    // Tools & Platforms
    { name: "Git/GitHub", category: "tools", proficiency: "expert" },
    { name: "Vercel", category: "tools", proficiency: "advanced" },
    { name: "Firebase", category: "tools", proficiency: "advanced" },
    { name: "Jira", category: "tools", proficiency: "advanced" },
    { name: "Stripe", category: "tools", proficiency: "intermediate" },
    { name: "Socket.io", category: "tools", proficiency: "intermediate" },

    // Databases
    { name: "PostgreSQL", category: "databases", proficiency: "advanced" },
    { name: "Firebase", category: "databases", proficiency: "advanced" },
  ] as Skill[],

  certifications: [] as { name: string; issuer: string; date: string }[],
};

export const skillCategories = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  tools: "Tools & Platforms",
  databases: "Databases",
  other: "Other",
};
