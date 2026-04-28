import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { COMPANY } from "@/lib/constants";
import { getFromAddress, getQuoteTransport } from "@/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Insert into Supabase
    if (!supabase) {
      console.warn("Supabase not configured. Inquiry data:", { name, email, phone, message });
      return NextResponse.json(
        { success: true, message: "Inquiry received (database pending setup)." },
        { status: 200 }
      );
    }

    const { error } = await supabase.from("inquiries").insert([
      {
        name,
        email,
        phone: phone || null,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      // If Supabase is not configured, still return success for development
      if (error.message?.includes("relation") || error.code === "42P01") {
        console.warn(
          "Supabase table not found. Please create the inquiries table."
        );
        return NextResponse.json(
          {
            success: true,
            message: "Inquiry received (database pending setup).",
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Failed to submit inquiry. Please try again." },
        { status: 500 }
      );
    }

    // Send email notification (SMTP) to sales/info (+ test email if present)
    try {
      const transport = getQuoteTransport();
      await transport.sendMail({
        from: getFromAddress(),
        to: [...COMPANY.emails],
        replyTo: email,
        subject: `New Quote Request — ${name}`,
        text: [
          "New quote request received.",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; padding: 16px;">
            <h2 style="margin: 0 0 12px;">New Quote Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 120px;">Name</td><td style="padding: 6px 0;">${name}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 6px 0; font-weight: bold;">Phone</td><td style="padding: 6px 0;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
            </table>
            <div style="margin-top: 14px; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px;">
              <div style="font-weight: bold; margin-bottom: 6px;">Message</div>
              <div style="white-space: pre-wrap; color: #334155;">${String(message).replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
            </div>
          </div>
        `,
      });
    } catch (mailErr) {
      console.error("SMTP email send failed:", mailErr);
      // Still return success so the lead isn't lost (it's stored in DB).
    }

    return NextResponse.json(
      { success: true, message: "Request submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
