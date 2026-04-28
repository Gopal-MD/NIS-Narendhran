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
      console.warn("Supabase not configured. Service request:", {
        name,
        email,
        phone,
        service,
        message,
      });
    } else {
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
        console.warn("Continuing without database write for service request.");
      }
    }

    try {
      const emailData = buildServiceRequestEmail({
        name,
        email,
        phone,
        service,
        message,
      });
      await sendNotificationEmail({
        ...emailData,
        replyTo: email,
      });
    } catch (emailError) {
      console.warn("Email send failed:", emailError);
      // Don't fail the request — service request is logged, email is optional
    }

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
