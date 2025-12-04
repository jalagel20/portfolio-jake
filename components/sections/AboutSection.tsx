"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { TechBadge } from "@/components/custom/TechBadge";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";
import { personalInfo } from "@/lib/data/personal";
import { resumeData, skillCategories } from "@/lib/data/resume";

export function AboutSection() {
  // Group skills by category
  const skillsByCategory = resumeData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof resumeData.skills>);

  return (
    <Section id="about" className="bg-muted/30">
      <SectionHeading
        title="About Me"
        subtitle="A little bit about who I am and what I do"
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Photo + Bio */}
        <FadeIn direction="left">
          <div className="space-y-6">
            {/* Profile Photo - Centered */}
            <div className="flex justify-center">
              <motion.div
                className="relative w-52 h-64"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-3" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                  <Image
                    src="/images/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Bio */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {personalInfo.bio.split("\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Open to opportunities
              </div>
            </motion.div>
          </div>
        </FadeIn>

        {/* Tech Stack */}
        <FadeIn direction="right" delay={0.2}>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Tech Stack</h3>

            <div className="space-y-6">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">
                    {skillCategories[category as keyof typeof skillCategories]}
                  </h4>
                  <StaggerContainer className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <StaggerItem key={skill.name}>
                        <TechBadge
                          name={skill.name}
                          proficiency={skill.proficiency}
                        />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
