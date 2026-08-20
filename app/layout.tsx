import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: {
    default: "Travel Friends | Study, Travel & Explore",
    template: "%s | Travel Friends",
  },

  description:
    "Travel Friends provides guidance for students, travelers, families, and individuals planning to study, travel, visit, or perform Umrah abroad.",

  keywords: [
    "Travel Friends",
    "student visa",
    "study abroad",
    "travel visa",
    "visit visa",
    "Umrah visa",
    "visa guidance",
    "travel planning",
    "Saudi Arabia Umrah",
    "study abroad Bangladesh",
  ],

  authors: [
    {
      name: "Travel Friends",
    },
  ],

  creator: "Travel Friends",
  publisher: "Travel Friends",

  metadataBase: new URL("https://mkworld.org"),

  openGraph: {
    title: "Travel Friends | Study, Travel & Explore",
    description:
      "Guidance for study, travel, visa preparation, and Umrah journeys.",
    url: "https://mkworld.org",
    siteName: "Travel Friends",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Travel Friends | Study, Travel & Explore",
    description:
      "Guidance for study, travel, visa preparation, and Umrah journeys.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
        <ContactForm />
      </body>
    </html>
  );
}
