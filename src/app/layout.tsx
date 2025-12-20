import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Nature Win Yala | Two-Bedroom Villa & Safari Accommodation in Yala National Park, Sri Lanka",
  description:
    "Nature Win Yala offers a luxury two-bedroom villa for up to 6 guests near Yala National Park. Enjoy private kitchen, pet-friendly stays, balcony views, and unforgettable safari experiences in Sri Lanka.",
  keywords: [
    "Yala villa",
    "two bedroom villa Yala",
    "safari accommodation Yala National Park",
    "luxury villa Sri Lanka",
    "private villa Yala",
    "Nature Win Yala",
    "Yala National Park accommodation",
    "villa with kitchen Yala",
    "pet friendly villa Yala",
    "balcony view villa Yala"
  ],
  openGraph: {
    title: "Nature Win Yala | Two-Bedroom Villa & Safari Accommodation in Yala National Park, Sri Lanka",
    description:
      "Luxury two-bedroom villa for 6 guests near Yala National Park. Private kitchen, pet-friendly, balcony view, and safari experiences. Book your stay at Nature Win Yala.",
    url: "https://naturewinyala.com/",
    type: "website",
    images: [
      {
        url: "/assets/images/thumb-1.png",
        width: 1200,
        height: 630,
        alt: "Nature Win Yala Two-Bedroom Villa"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Win Yala | Two-Bedroom Villa & Safari Accommodation in Yala National Park, Sri Lanka",
    description:
      "Luxury two-bedroom villa for 6 guests near Yala National Park. Private kitchen, pet-friendly, balcony view, and safari experiences. Book your stay at Nature Win Yala.",
    images: [
      "/assets/images/thumb-1.png"
    ],
    site: "@naturewinyala"
  }
};

import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Nature Win Yala",
  "description": "Luxury two-bedroom villa for up to 6 guests near Yala National Park. Private kitchen, pet-friendly, balcony view, and unforgettable safari experiences in Sri Lanka.",
  "url": "https://naturewinyala.com/",
  "telephone": "+94766604986",
  "email": "naturewinyala@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rota Wewa Yaya, Uddhakandara, Thabarawa, Galkaduwa",
    "addressLocality": "Yala",
    "addressRegion": "Southern Province",
    "addressCountry": "Sri Lanka"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Entire villa", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Private kitchen", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Pet friendly", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Balcony view", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free on-site parking", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Private bathroom", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "1000 m²", "value": true }
  ],
  "offers": {
    "@type": "Offer",
    "price": "12500",
    "priceCurrency": "LKR",
    "availability": "https://schema.org/InStock",
    "description": "LKR 12,500 per person per night for the two-bedroom villa."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ld-json-lodgingbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
