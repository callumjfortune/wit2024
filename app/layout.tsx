import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bbcFont = localFont({
  src: "./fonts/bbc.woff",
  variable: "--font-bbc",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WiT 2024",
  description: "WiT event, Bridgewater hall, Manchester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bbcFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
