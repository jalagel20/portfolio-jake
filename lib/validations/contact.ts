import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be under 200 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be under 2000 characters"),
  // Honeypot field for spam prevention
  honeypot: z.string().max(0, "").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
