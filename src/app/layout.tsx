import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { appDefaultFont } from "@/lib/fonts";

// Updated metadata for better SEO
export const metadata: Metadata = {
  title: "EduIfa | AI-Powered Educational Platform for African Students",
  description:
    "EduIfa is an innovative AI-powered educational platform supporting students from primary school to university across Africa. Personalized learning, AI tutors, and comprehensive academic support.",
  keywords:
    "EduIfa, AI education, African students, personalized learning, online tutoring",
  authors: [{ name: "Olajide Abdul Qahar Dolapo" }],
  openGraph: {
    title: "EduIfa - Revolutionizing Education in Africa",
    description:
      "AI-powered personalized learning for students across Africa. Join EduIfa for an innovative educational experience.",
    url: "https://eduifa.up.railway.app/",
    siteName: "EduIfa",
    images: [
      {
        url: "https://eduifa.vercel.app/pLogo.png",
        width: 1200,
        height: 630,
        alt: "EduIfa Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduIfa - AI-Powered Education for African Students",
    description:
      "Personalized learning, AI tutors, and academic support for students across Africa.",
    images: ["https://eduifa.vercel.app/pLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://eduifa.vercel.app/pLogo.png"
          sizes="any"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Olajide Abdul Qahar Dolapo" />
      </head>
      <body className={`antialiased !${appDefaultFont.className} !container `}>
        <Navbar />
        <main>{children}</main>
        <footer>{/* Add footer content here */}</footer>
      </body>
    </html>
  );
}
