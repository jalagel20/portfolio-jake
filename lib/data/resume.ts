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
    // Add your work experience here
    // {
    //   company: "Company Name",
    //   role: "Software Engineer",
    //   period: "2022 - Present",
    //   description: "Brief description of your role and responsibilities.",
    //   achievements: [
    //     "Achievement 1",
    //     "Achievement 2",
    //   ],
    //   technologies: ["React", "TypeScript", "Node.js"],
    // },
  ] as Experience[],

  education: [
    // Add your education here
    // {
    //   institution: "University Name",
    //   degree: "Bachelor of Science",
    //   field: "Computer Science",
    //   period: "2018 - 2022",
    //   gpa: "3.8",
    // },
  ] as Education[],

  skills: [
    // Add your skills here
    { name: "TypeScript", category: "languages", proficiency: "advanced" },
    { name: "JavaScript", category: "languages", proficiency: "expert" },
    { name: "Python", category: "languages", proficiency: "intermediate" },
    { name: "React", category: "frameworks", proficiency: "advanced" },
    { name: "Next.js", category: "frameworks", proficiency: "advanced" },
    { name: "Node.js", category: "frameworks", proficiency: "advanced" },
    { name: "Git", category: "tools", proficiency: "advanced" },
    { name: "Docker", category: "tools", proficiency: "intermediate" },
    { name: "PostgreSQL", category: "databases", proficiency: "intermediate" },
  ] as Skill[],

  certifications: [
    // Add certifications here
    // { name: "AWS Certified Developer", issuer: "Amazon", date: "2023" },
  ] as { name: string; issuer: string; date: string }[],
};

export const skillCategories = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  tools: "Tools & Platforms",
  databases: "Databases",
  other: "Other",
};
