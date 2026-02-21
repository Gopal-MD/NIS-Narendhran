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
      return NextResponse.json(
        { success: true, message: "Subscription received (database pending setup)." },
        { status: 200 }
      );
    }

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email }]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { success: true, message: "You are already subscribed." },
          { status: 200 }
        );
      }
      console.error("Supabase error:", error);
      if (error.message?.includes("relation") || error.code === "42P01") {
        return NextResponse.json(
          {
            success: true,
            message: "Subscription received (database pending setup).",
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Failed to subscribe." },
        { status: 500 }
      );
    }

    // Send email notification to sales@nisuae.com
    const emailData = buildNewsletterEmail(email);
    sendNotificationEmail(emailData).catch(console.error);

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
