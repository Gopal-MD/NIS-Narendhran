import type { Metadata } from "next";
import { ContactPage } from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NATHI INTEGRATED IT SOLUTIONS FZE LLC. Located at 26th Floor, Amber Gem Tower, Ajman, UAE. Emails: sales@nisuae.com, info@nisuae.com",
};

export default function Contact() {
  return <ContactPage />;
}
