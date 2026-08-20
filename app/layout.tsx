import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: {
    default: "MK World | Study, Travel & Visa Guidance",
    template: "%s | MK World",
  },

  description:
    "MK World provides study abroad, student visa, visit visa, travel and international education guidance for students, travelers and families from Bangladesh.",

  keywords: [
    // Brand
    "MK World",
    "MK World Bangladesh",
    "MK World visa consultancy",
    "MK World travel",
    "MK World study abroad",

    // General
    "study abroad",
    "study abroad Bangladesh",
    "study overseas",
    "international education",
    "international travel",
    "visa consultancy",
    "visa guidance",
    "travel consultancy",
    "education consultancy",
    "study visa",
    "student visa",
    "visit visa",
    "tourist visa",
    "travel visa",

    // Sweden
    "study in Sweden",
    "Sweden study visa",
    "Sweden student visa",
    "student visa Sweden",
    "Sweden student visa Bangladesh",
    "Sweden study abroad",
    "Sweden university",
    "Sweden universities",
    "Sweden admission",
    "Sweden visa",
    "Sweden visit visa",
    "visit visa Sweden",
    "Sweden tourist visa",
    "Sweden travel visa",
    "Sweden visa from Bangladesh",
    "study in Sweden from Bangladesh",
    "Sweden education consultancy",

    // Russia
    "study in Russia",
    "Russia study visa",
    "Russia student visa",
    "student visa Russia",
    "Russia student visa Bangladesh",
    "Russia study abroad",
    "Russia university",
    "Russia universities",
    "Russia admission",
    "Russia visa",
    "Russia visit visa",
    "visit visa Russia",
    "Russia tourist visa",
    "Russia travel visa",
    "Russia visa from Bangladesh",
    "study in Russia from Bangladesh",
    "Russia education consultancy",

    // Cyprus
    "study in Cyprus",
    "Cyprus student visa",
    "Cyprus study visa",
    "student visa Cyprus",
    "Cyprus university",
    "Cyprus admission",
    "Cyprus visa",
    "Cyprus visit visa",
    "visit visa Cyprus",

    // Bangladesh
    "student visa Bangladesh",
    "study abroad consultancy Bangladesh",
    "visa consultancy Bangladesh",
    "student visa consultancy Bangladesh",
    "travel agency Bangladesh",
    "education consultancy Bangladesh",
    "study visa consultant Bangladesh",

    // Travel
    "travel consultation",
    "international travel guidance",
    "visa application guidance",
    "visa application support",
    "study visa guidance",
    "student visa guidance",
    "visit visa guidance",
    "international student consultancy",

    // Umrah
    "Umrah visa",
    "Umrah travel",
    "Umrah guidance",
    "Saudi Arabia Umrah",
  ],

  authors: [
    {
      name: "MK World",
      url: "https://mkworld.org",
    },
  ],

  creator: "MK World",
  publisher: "MK World",

  metadataBase: new URL("https://mkworld.org"),

  alternates: {
    canonical: "https://mkworld.org",
  },

  openGraph: {
    title: "MK World | Study, Travel & Visa Guidance",
    description:
      "Study abroad, student visa, visit visa and international travel guidance from MK World.",
    url: "https://mkworld.org",
    siteName: "MK World",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MK World | Study, Travel & Visa Guidance",
    description:
      "Study abroad, student visa, visit visa and international travel guidance from MK World.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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