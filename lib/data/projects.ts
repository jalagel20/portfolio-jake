export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "backend" | "fullstack" | "other";
}

// Add your projects here - the section will display an empty state if this array is empty
export const projects: Project[] = [
  // Example project - uncomment and modify when you have projects to show:
  // {
  //   id: "project-1",
  //   title: "Project Name",
  //   description: "A brief description of what this project does and the problem it solves.",
  //   image: "/images/projects/project-1.png",
  //   technologies: ["React", "TypeScript", "Node.js"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/yourusername/project",
  //   featured: true,
  //   category: "fullstack",
  // },
];

export const projectCategories = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "other", label: "Other" },
];
