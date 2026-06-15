import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FaviconSpinner } from "@/components/FaviconSpinner";

export const metadata: Metadata = {
  title: "IEEE IES Rwanda Chapter — Industrial Electronics Society",
  description:
    "The Rwanda Chapter of the IEEE Industrial Electronics Society. Robotics, mechatronics, power electronics and industrial AI — engineered locally, connected globally.",
  keywords: [
    "IEEE",
    "Industrial Electronics Society",
    "IES Rwanda",
    "Kigali",
    "robotics",
    "mechatronics",
    "power electronics",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <FaviconSpinner />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
