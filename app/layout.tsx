import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ORCHATHON 2K26 – Innovate Beyond Boundaries | National Level 36-Hour Hackathon",
  description:
    "ORCHATHON 2K26 – Innovate Beyond Boundaries is a National Level 36-Hour Hackathon organized by N. K. Orchid College of Engineering & Technology (NKOCET), Solapur. Participate and win prizes worth ₹50,000.",
  keywords: [
    "Orchathon 2K26",
    "Hackathon Solapur",
    "NKOCET Hackathon",
    "National Level Hackathon India",
    "Data Science Hackathon",
    "Software Development Hackathon"
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
