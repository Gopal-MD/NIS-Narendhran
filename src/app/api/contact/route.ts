import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendNotificationEmail, buildInquiryEmail } from "@/lib/email";

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

    // Send email notification to sales@nisuae.com
    const emailData = buildInquiryEmail({ name, email, phone, message });
    sendNotificationEmail(emailData).catch(console.error);

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully." },
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
