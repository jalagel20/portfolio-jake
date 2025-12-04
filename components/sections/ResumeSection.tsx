"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Code, Award, FileText } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";
import { resumeData, skillCategories } from "@/lib/data/resume";

export function ResumeSection() {
  return (
    <Section id="resume" className="bg-muted/30">
      <SectionHeading
        title="Resume"
        subtitle="My professional background and skills"
      />

      {/* Download Button */}
      <FadeIn className="flex justify-center mb-10">
        <Button size="lg" asChild className="gap-2">
          <a href="/resume.pdf" download>
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </FadeIn>

      {/* Tabbed Content */}
      <FadeIn delay={0.2}>
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="experience" className="gap-2">
              <Briefcase className="h-4 w-4 hidden sm:block" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="gap-2">
              <GraduationCap className="h-4 w-4 hidden sm:block" />
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="gap-2">
              <Code className="h-4 w-4 hidden sm:block" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="preview" className="gap-2">
              <FileText className="h-4 w-4 hidden sm:block" />
              Preview
            </TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience">
            {resumeData.experience.length > 0 ? (
              <StaggerContainer className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <StaggerItem key={index}>
                    <Card>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle className="text-lg">{exp.role}</CardTitle>
                            <CardDescription className="text-base">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary" className="w-fit">
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{exp.description}</p>
                        {exp.achievements && exp.achievements.length > 0 && (
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        )}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <EmptyState
                icon={Briefcase}
                title="Experience coming soon"
                description="Add your work experience to lib/data/resume.ts"
              />
            )}
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            {resumeData.education.length > 0 ? (
              <StaggerContainer className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <StaggerItem key={index}>
                    <Card>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle className="text-lg">{edu.degree}</CardTitle>
                            <CardDescription className="text-base">
                              {edu.institution} - {edu.field}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary" className="w-fit">
                            {edu.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      {edu.gpa && (
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            GPA: {edu.gpa}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <EmptyState
                icon={GraduationCap}
                title="Education coming soon"
                description="Add your education to lib/data/resume.ts"
              />
            )}
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skillCategories).map(([category, label]) => {
                const categorySkills = resumeData.skills.filter(
                  (s) => s.category === category
                );
                if (categorySkills.length === 0) return null;

                return (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="text-lg">{label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <StaggerContainer className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <StaggerItem key={skill.name}>
                            <Badge
                              variant={
                                skill.proficiency === "expert"
                                  ? "default"
                                  : skill.proficiency === "advanced"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {skill.name}
                            </Badge>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* PDF Preview Tab */}
          <TabsContent value="preview">
            <motion.div
              initial={{ opacity: 0, rotateY: -10 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              <Card className="overflow-hidden max-w-4xl mx-auto">
                <CardContent className="p-0">
                  <div className="relative bg-muted" style={{ height: "80vh", maxHeight: "900px" }}>
                    <iframe
                      src="/resume.pdf#view=Fit&toolbar=0"
                      className="w-full h-full border-0"
                      title="Resume Preview"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </CardContent>
              </Card>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Can&apos;t see the preview?{" "}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Open PDF directly
                </a>
              </p>
            </motion.div>
          </TabsContent>
        </Tabs>
      </FadeIn>
    </Section>
  );
}

function EmptyState({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="py-12 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <Icon className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
