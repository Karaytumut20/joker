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
  title: "Joker Haul | Fast & Reliable",
  description: "Joker Haul provides top-tier vehicle transport and roadside assistance 24/7. Your vehicle's safety is our ultimate priority.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-neutral-950 text-neutral-50 selection:bg-amber-500/30 selection:text-amber-200 min-h-full flex flex-col">{children}</body>
    </html>
  );
}
