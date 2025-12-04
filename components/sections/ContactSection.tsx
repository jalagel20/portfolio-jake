"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Mail, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/animations/FadeIn";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { personalInfo } from "@/lib/data/personal";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message sent!", {
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a question or want to work together? I'd love to hear from you."
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <FadeIn direction="left" className="md:col-span-1">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <motion.div
              className="p-4 rounded-lg bg-primary/5 border border-primary/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-sm text-muted-foreground">
                I typically respond within 24-48 hours. Looking forward to connecting!
              </p>
            </motion.div>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn direction="right" delay={0.2} className="md:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register("honeypot")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    {...register("subject")}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, question, or just say hi..."
                    rows={5}
                    {...register("message")}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
