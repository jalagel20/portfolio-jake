"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { hoverScale, tapScale } from "@/components/animations/variants";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={hoverScale}
      whileTap={tapScale}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <FolderOpen className="h-12 w-12 text-muted-foreground/50" />
            </div>
          )}

          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            {project.liveUrl && (
              <Button size="sm" asChild className="gap-2">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="secondary" asChild className="gap-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
