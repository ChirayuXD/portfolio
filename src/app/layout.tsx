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
  title: "Chirayu Agrawal - ML & AI Engineer",
  description:
    "Portfolio of Chirayu Agrawal - Computer Science student building AI, machine learning, computer vision, NLP, Web3 verification, and full-stack systems.",
  keywords: [
    "Chirayu Agrawal",
    "Machine Learning",
    "AI Engineer",
    "Computer Vision",
    "NLP",
    "Web3",
    "IPFS",
    "Firebase",
    "Next.js",
    "PyTorch",
  ],
  authors: [{ name: "Chirayu Agrawal" }],
  openGraph: {
    title: "Chirayu Agrawal - ML & AI Engineer",
    description:
      "Building robust AI systems across research, product engineering, Web3 verification, NLP, and computer vision.",
    type: "website",
    locale: "en_IN",
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
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}

