import type { Metadata } from "next";
import { ProductsPageContent } from "@/components/pages/ProductsPageContent";

export const metadata: Metadata = {
  title: "AI Products & Solutions | SynVael AI",
  description:
    "Explore SynVael AI's groundbreaking product suite: AI Digital Human Interactive Holograms, AI Business Operating System (Autonomous AI CEO & CTO), Custom Private AI Models, and Agentic Swarms.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
