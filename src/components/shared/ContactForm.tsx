"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ContactFormProps {
  variant?: "full" | "compact";
}

export function ContactForm({ variant = "compact" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const quoteRecipients = COMPANY.emails.join(",");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const subject = encodeURIComponent(
        `Quote Request from ${formData.name || "Website Visitor"}`
      );
      const body = encodeURIComponent(
        [
          "Hello NIS team,",
          "",
          "I would like to request a quote.",
          "",
          `Name: ${formData.name}`,
          `Email: ${formData.email}`,
          `Phone: ${formData.phone || "Not provided"}`,
          "",
          "Requirement details:",
          formData.message,
        ].join("\n")
      );

      window.location.href = `mailto:${quoteRecipients}?subject=${subject}&body=${body}`;
      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={variant === "full" ? "grid md:grid-cols-2 gap-4" : "space-y-4"}>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+971 XX XXX XXXX"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your requirements..."
          rows={variant === "full" ? 5 : 3}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
      </div>

      {status === "success" && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-700">
            Your email app has been opened with a quote request addressed to{" "}
            {COMPANY.emails.join(" / ")}.
          </AlertDescription>
        </Alert>
      )}

      {status === "error" && (
        <Alert className="bg-red-50 border-red-200">
          <AlertDescription className="text-red-700">
            Something went wrong. Please email us directly at sales@nisuae.com
            or info@nisuae.com.
          </AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full gradient-primary text-white font-semibold"
        size="lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Preparing...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Request Quote
          </>
        )}
      </Button>
    </form>
  );
}
