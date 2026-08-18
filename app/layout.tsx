import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Travel Friends | Study, Travel & Explore",
  description:
    "Travel Friends provides guidance for students planning to study, travel and build their future abroad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-white antialiased">
        <Navbar />

        {children}
      </body>
    </html>
  );
}