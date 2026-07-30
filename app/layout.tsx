import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Naman Arora - Software Engineer",
  description:
    "Software Engineer • AI/ML Builder • Full Stack Developer • Product Thinker. Building intelligent software and impactful products that solve real-world problems.",
  keywords: [
    "Naman Arora",
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Product Designer",
    "Portfolio",
  ],
  authors: [{ name: "Naman Arora", url: "https://namanarora.dev" }],
  creator: "Naman Arora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://namanarora.dev",
    title: "Naman Arora - Software Engineer",
    description:
      "Software Engineer • AI/ML Builder • Full Stack Developer • Product Thinker.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178036969750-XiqAgEEun11e70XzC4avWz3409xFQc.jpeg",
        width: 1200,
        height: 630,
        alt: "Naman Arora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Arora - Software Engineer",
    description:
      "Software Engineer • AI/ML Builder • Full Stack Developer • Product Thinker.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178036969750-XiqAgEEun11e70XzC4avWz3409xFQc.jpeg",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://namanarora.dev" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Naman Arora",
              url: "https://namanarora.dev",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178036969750-XiqAgEEun11e70XzC4avWz3409xFQc.jpeg",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://linkedin.com/in/naman-arora",
                "https://github.com/namanarora",
              ],
            }),
          }}
        />

        {/* Vercel Analytics & Web Vitals */}
        <script defer src="https://cdn.vercel-analytics.com/v1/script.js" />
        <script defer src="https://va.vercel-analytics.com/v1/script.js" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
