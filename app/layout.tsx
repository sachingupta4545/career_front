import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Sand Chat UI | Animated Next.js Landing Page",
  description:
    "A Sand Studio-inspired editorial landing page with an animated AI chat interface, strong visual identity, and SEO-ready metadata.",
  keywords: [
    "Next.js chat UI",
    "AI landing page",
    "OpenAI inspired chat",
    "animated website",
    "SEO friendly Next.js",
  ],
  openGraph: {
    title: "Sand Chat UI | Animated Next.js Landing Page",
    description:
      "Editorial hero, dynamic chat interface, and a high-contrast visual system built in Next.js.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sand Chat UI",
    description:
      "Sand-inspired animated chatbox interface built with Next.js and tuned for SEO.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
