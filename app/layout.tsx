import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0f0f14",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dhun.dploy.avichal.me"),

  title: "Dhun | 2000s Bollywood Bangers",
  description: "Your ultimate retro Bollywood music player. Vibe to the best tracks from 2000-2015.",
  icons: {
    icon: "/dhun-logo.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Dhun | Bollywood Bangers",
    description: "Your ultimate retro Bollywood music player.",
    images: ["/open-graph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
