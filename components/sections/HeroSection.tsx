"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { AnimatedText } from "@/components/custom/AnimatedText";
import { personalInfo } from "@/lib/data/personal";
import { fadeInUp } from "@/components/animations/variants";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <AnimatedText text={personalInfo.name} />
          </h1>

          {/* Title */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
              {personalInfo.title}
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2 min-w-[160px]"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 min-w-[160px]"
              onClick={() => scrollToSection("#resume")}
            >
              <FileText className="h-4 w-4" />
              View Resume
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm">Scroll down</span>
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
