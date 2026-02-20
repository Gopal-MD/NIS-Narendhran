import type { Metadata } from "next";
import { AMCRentalPage } from "./AMCRentalPage";

export const metadata: Metadata = {
  title: "AMC & Rental Solutions",
  description:
    "Explore our printer rental solutions, annual maintenance contracts (AMC), and corporate IT support plans designed for businesses across the UAE.",
};

export default function AMCRental() {
  return <AMCRentalPage />;
}
