import type { Metadata } from "next";
import { ServicesPage } from "./ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive IT services including hardware supply, printer installation & repair, AMC contracts, network setup, CCTV installation, and technical support in the UAE.",
};

export default function Services() {
  return <ServicesPage />;
}
