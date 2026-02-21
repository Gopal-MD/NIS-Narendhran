import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NATHI INTEGRATED IT SOLUTIONS FZE LLC — a premier IT solutions provider delivering innovative technology services to businesses across the UAE from Ajman.",
};

export default function About() {
  return <AboutPage />;
}
