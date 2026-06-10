"use server";

import { Resend } from "resend";

interface SendQuoteData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface SendQuoteResponse {
  success: boolean;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Server Action: Send quote request email via Resend
 * Sends to both sales@nisuae.com and info@nisuae.com
 * Uses Resend transactional email API
 */
export async function sendQuote(
  data: SendQuoteData
): Promise<SendQuoteResponse> {
  // Validate required fields
  if (!data.name || !data.email || !data.message) {
    return {
      success: false,
      message: "Name, email, and message are required.",
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "Invalid email address.",
    };
  }

  try {
    // Ensure RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return {
        success: false,
        message: "Email service is not configured. Please try again later.",
      };
    }

    // Recipient emails
    const recipients = ["sales@nisuae.com", "info@nisuae.com"];

    // Build HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
            .header { background: linear-gradient(135deg, #0A2463 0%, #1a3a7a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: white; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 16px; }
            .field-label { font-weight: bold; color: #0A2463; font-size: 14px; text-transform: uppercase; }
            .field-value { color: #555; margin-top: 4px; padding: 8px; background-color: #f5f5f5; border-radius: 4px; }
            .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
            a { color: #0A2463; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Quote Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Full Name</div>
                <div class="field-value">${escapeHtml(data.name)}</div>
              </div>

              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
              </div>

              ${
                data.phone
                  ? `
              <div class="field">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
              </div>
              `
                  : ""
              }

              <div class="field">
                <div class="field-label">Message / Details</div>
                <div class="field-value" style="white-space: pre-wrap;">${escapeHtml(data.message)}</div>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated email from your website contact form.</p>
              <p><a href="https://www.nisuae.com">Visit NIS Website</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to both recipients
    await resend.emails.send({
      from: "NIS Website <onboarding@resend.dev>",
      to: recipients,
      subject: `New Quote Request from ${escapeHtml(data.name)}`,
      html: htmlContent,
      replyTo: data.email,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "NIS Website <onboarding@resend.dev>",
      to: data.email,
      subject: "Quote Request Received - NIS",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
              .header { background: linear-gradient(135deg, #0A2463 0%, #1a3a7a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: white; padding: 20px; border-radius: 0 0 8px 8px; }
              .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
              a { color: #0A2463; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Quote Request</h1>
              </div>
              <div class="content">
                <p>Hi ${escapeHtml(data.name)},</p>
                <p>We have received your quote request and our team will get back to you shortly with a detailed response.</p>
                <p>You can expect to hear from us within 24 business hours.</p>
                <p>If you have any urgent matters, please contact us directly at <a href="tel:+971503223760">+971 50 322 3760</a> or via WhatsApp.</p>
                <p><strong>Best regards,</strong><br/>The NIS Team</p>
              </div>
              <div class="footer">
                <p><a href="https://www.nisuae.com">Visit our website</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return {
      success: true,
      message: "Quote request sent successfully!",
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      message:
        "Failed to send email. Please try again or contact us directly.",
    };
  }
}

/**
 * Escape HTML to prevent XSS attacks in emails
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
