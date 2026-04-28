import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendNotificationEmail, buildNewsletterEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!supabase) {
      console.warn("Supabase not configured. Newsletter sub:", email);
    } else {
      const { error } = await supabase.from("newsletter_subscribers").insert([{ email }]);

      if (error) {
        if (error.code === "23505") {
          return NextResponse.json(
            { success: true, message: "You are already subscribed." },
            { status: 200 }
          );
        }
        console.error("Supabase error:", error);
        console.warn("Continuing without database write for newsletter.");
      }
    }

    const emailData = buildNewsletterEmail(email);
    await sendNotificationEmail(emailData);

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter." },
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
