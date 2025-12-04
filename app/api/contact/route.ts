import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Check honeypot (spam prevention)
    if (validatedData.honeypot) {
      // Silently reject spam bots
      return NextResponse.json({ success: true });
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "your.email@example.com",
      subject: `Portfolio Contact: ${validatedData.subject}`,
      replyTo: validatedData.email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; border-top: none;">
              <div style="margin-bottom: 20px;">
                <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</strong>
                <p style="margin: 5px 0 0; font-size: 16px;">${validatedData.name}</p>
              </div>
              <div style="margin-bottom: 20px;">
                <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
                <p style="margin: 5px 0 0; font-size: 16px;">
                  <a href="mailto:${validatedData.email}" style="color: #667eea;">${validatedData.email}</a>
                </p>
              </div>
              <div style="margin-bottom: 20px;">
                <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</strong>
                <p style="margin: 5px 0 0; font-size: 16px;">${validatedData.subject}</p>
              </div>
              <div style="margin-bottom: 20px;">
                <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</strong>
                <p style="margin: 5px 0 0; font-size: 16px; white-space: pre-wrap;">${validatedData.message}</p>
              </div>
            </div>
            <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 20px;">
              This email was sent from your portfolio contact form.
            </p>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
