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

    if (!supabase) {
      console.warn("Supabase not configured. Inquiry data:", {
        name,
        email,
        phone,
        message,
      });
    } else {
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
        console.warn("Continuing without database write for inquiry.");
      }
    }

    const emailData = buildInquiryEmail({ name, email, phone, message });
    await sendNotificationEmail({
      ...emailData,
      replyTo: email,
    });

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
