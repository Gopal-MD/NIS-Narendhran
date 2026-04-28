import { Resend } from "resend";
import { COMPANY } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "NIS Website <onboarding@resend.dev>";

interface SendEmailOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendNotificationEmail({
  subject,
  html,
  replyTo,
}: SendEmailOptions) {
  if (!resend) {
    throw new Error("Resend is not configured. Missing RESEND_API_KEY.");
  }

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [...COMPANY.emails],
    subject,
    html,
    replyTo: replyTo ? [replyTo] : undefined,
  });

  if (error) {
    throw new Error(error.message || "Resend send failed.");
  }

  return data;
}

export function buildInquiryEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return {
    subject: `New Quote Request — ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="margin: 0 0 16px; color: #0A2463;">New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; line-height: 1.6;">${data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      </div>
    `,
  };
}

export function buildServiceRequestEmail(data: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message?: string;
}) {
  return {
    subject: `New Service Request: ${data.service} — ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="margin: 0 0 16px; color: #0A2463;">New Service Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ""}
        <p><strong>Service:</strong> ${data.service}</p>
        ${data.message ? `<p><strong>Details:</strong></p><p style="white-space: pre-wrap; line-height: 1.6;">${data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>` : ""}
      </div>
    `,
  };
}

export function buildNewsletterEmail(email: string) {
  return {
    subject: `New Newsletter Subscriber: ${email}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="margin: 0 0 16px; color: #0A2463;">New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      </div>
    `,
  };
}

