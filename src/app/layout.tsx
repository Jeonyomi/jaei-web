import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { site } from "@/content/content";

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
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  metadataBase: new URL("https://jaei-web.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.title,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Jae-i on Stage" }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
