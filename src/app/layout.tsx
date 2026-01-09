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
  title: "Appropos - Software Solutions Agency",
  description: "Transform your business with cutting-edge technology. From web applications to enterprise solutions, we deliver innovative software solutions that drive growth and efficiency.",
  keywords: ["software development", "web development", "mobile apps", "cloud solutions", "API development", "software agency", "digital transformation"],
  authors: [{ name: "Appropos" }],
  creator: "Appropos",
  publisher: "Appropos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://appropos.ai",
    siteName: "Appropos",
    title: "Appropos - Software Solutions Agency",
    description: "Transform your business with cutting-edge technology. From web applications to enterprise solutions, we deliver innovative software solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Appropos - Software Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appropos - Software Solutions Agency",
    description: "Transform your business with cutting-edge technology. From web applications to enterprise solutions, we deliver innovative software solutions.",
    images: ["/og-image.png"],
    creator: "@appropos",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://appropos.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
