import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const SALES_EMAIL = "sales@nisuae.com";

// Use Resend's default sender until custom domain is verified
// Once you verify nisuae.com in Resend, change this to "NIS <noreply@nisuae.com>"
const FROM_EMAIL = "NIS Website <onboarding@resend.dev>";

interface SendEmailOptions {
  subject: string;
  html: string;
}

export async function sendNotificationEmail({ subject, html }: SendEmailOptions) {
  if (!resend) {
    console.warn("Resend not configured (missing RESEND_API_KEY). Email not sent:", subject);
    return null;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [SALES_EMAIL],
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return null;
    }

    console.log("Email sent successfully:", data?.id);
    return data;
  } catch (err) {
    console.error("Failed to send email:", err);
    return null;
  }
}

export function buildInquiryEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return {
    subject: `New Inquiry from ${data.name} — NIS Website`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0A2463 0%, #1E40AF 100%); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">📩 New Website Inquiry</h1>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0A2463; width: 100px; vertical-align: top;">Name:</td>
              <td style="padding: 10px 0; color: #334155;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0A2463; vertical-align: top;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #2563EB;">${data.email}</a></td>
            </tr>
            ${data.phone ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0A2463; vertical-align: top;">Phone:</td>
              <td style="padding: 10px 0;"><a href="tel:${data.phone}" style="color: #2563EB;">${data.phone}</a></td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0A2463; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #334155; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">This email was automatically sent from the NIS website contact form.</p>
        </div>
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
        <div style="background: linear-gradient(135deg, #0A2463 0%, #1E40AF 100%); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">🔧 New Service Request</h1>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0A2463; width: 100px; vertical-align: top;">Name:</td>
              <td style="padding: 10px 0; color: #334155;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0A2463; vertical-align: top;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #2563EB;">${data.email}</a></td>
            </tr>
            ${data.phone ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0A2463; vertical-align: top;">Phone:</td>
              <td style="padding: 10px 0;"><a href="tel:${data.phone}" style="color: #2563EB;">${data.phone}</a></td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0A2463; vertical-align: top;">Service:</td>
              <td style="padding: 10px 0; color: #334155; font-weight: bold;">${data.service}</td>
            </tr>
            ${data.message ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0A2463; vertical-align: top;">Details:</td>
              <td style="padding: 10px 0; color: #334155; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</td>
            </tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">This email was automatically sent from the NIS website service request form.</p>
        </div>
      </div>
    `,
  };
}

export function buildNewsletterEmail(email: string) {
  return {
    subject: `New Newsletter Subscriber: ${email}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0A2463 0%, #1E40AF 100%); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">📬 New Newsletter Subscriber</h1>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <p style="color: #334155; font-size: 16px; margin: 0 0 8px;">A new visitor subscribed to the newsletter:</p>
          <p style="color: #2563EB; font-size: 18px; font-weight: bold; margin: 0;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">This email was automatically sent from the NIS website newsletter form.</p>
        </div>
      </div>
    `,
  };
}
