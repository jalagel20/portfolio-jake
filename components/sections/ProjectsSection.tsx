"use client";

import { motion } from "framer-motion";
import { FolderOpen, Rocket } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { ProjectCard } from "@/components/custom/ProjectCard";
import { Card, CardContent } from "@/components/ui/card";
import { staggerContainer, staggerItem } from "@/components/animations/variants";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of work I'm proud of"
      />

      {projects.length > 0 ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-lg mx-auto">
            <CardContent className="py-12 text-center">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Projects Coming Soon</h3>
              <p className="text-muted-foreground">
                I&apos;m currently working on some exciting projects.
                <br />
                Check back soon to see what I&apos;ve been building!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </Section>
  );
}
