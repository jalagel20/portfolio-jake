"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "./Container";
import { personalInfo } from "@/lib/data/personal";
import { fadeInUp } from "@/components/animations/variants";

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personalInfo.socials.twitter, label: "Twitter" },
].filter(link => link.href); // Only show links that have a URL

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center">
              {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Framer Motion.
            </p>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="gap-2"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </Button>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
