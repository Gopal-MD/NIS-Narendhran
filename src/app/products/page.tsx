import type { Metadata } from "next";
import { ProductsPage } from "./ProductsPage";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our comprehensive range of IT products — laptops, desktops, servers, printers, networking equipment, and security systems from leading global brands.",
};

export default function Products() {
  return <ProductsPage />;
}
