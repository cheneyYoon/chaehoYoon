import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaeho Yoon — Full-Stack Software Engineer",
  description:
    "Chaeho Yoon is a full-stack software engineer who builds scalable platforms and ships products used by millions.",
  keywords: [
    "Chaeho Yoon",
    "software engineer",
    "full-stack developer",
    "React",
    "TypeScript",
    "Next.js",
    "portfolio",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Chaeho Yoon — Full-Stack Software Engineer",
    description:
      "Chaeho Yoon is a full-stack software engineer who builds scalable platforms and ships products used by millions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaeho Yoon — Full-Stack Software Engineer",
    description:
      "Chaeho Yoon is a full-stack software engineer who builds scalable platforms and ships products used by millions.",
  },
  metadataBase: new URL("https://chaehoyoon.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
