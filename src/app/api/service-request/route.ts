import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendNotificationEmail, buildServiceRequestEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Name, email, and service type are required." },
        { status: 400 }
      );
    }

    if (!supabase) {
      console.warn("Supabase not configured. Service request:", { name, email, phone, service, message });
      return NextResponse.json(
        { success: true, message: "Request received (database pending setup)." },
        { status: 200 }
      );
    }

    const { error } = await supabase.from("service_requests").insert([
      {
        name,
        email,
        phone: phone || null,
        service,
        message: message || null,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      if (error.message?.includes("relation") || error.code === "42P01") {
        return NextResponse.json(
          {
            success: true,
            message: "Request received (database pending setup).",
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Failed to submit request." },
        { status: 500 }
      );
    }

    // Send email notification to sales@nisuae.com
    const emailData = buildServiceRequestEmail({ name, email, phone, service, message });
    sendNotificationEmail(emailData).catch(console.error);

    return NextResponse.json(
      { success: true, message: "Service request submitted successfully." },
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
