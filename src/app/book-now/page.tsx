import { Metadata } from "next";
import BookNowContent from "./components/BookNowContent";

export const metadata: Metadata = {
  title: "Book Your Stay | Yala Safari Villa | Reserve Yala Sri Lanka | Nature Win Yala",
  description: "Book your luxury villa in Yala, Sri Lanka for the ultimate safari adventure. Reserve your stay at Nature Win Yala and enjoy wildlife, family-friendly travel, and the best Yala National Park accommodation. Secure your Yala safari experience today!",
  keywords: [
    "book Yala villa",
    "reserve safari accommodation",
    "Nature Win Yala booking",
    "luxury stay Yala National Park",
    "Sri Lanka villa reservation",
    "Yala safari booking",
    "Yala travel",
    "Yala Sri Lanka",
    "Yala National Park hotel",
    "safari villa Yala",
    "family accommodation Yala",
    "pet friendly Yala",
    "wildlife Yala",
    "Yala safari stay",
    "Yala travel guide",
    "Yala accommodation",
    "Yala safari hotel"
  ],
  openGraph: {
    title: "Book Your Stay | Yala Safari Villa | Nature Win Yala",
    description: "Book your Yala safari villa in Sri Lanka. Reserve your stay at Nature Win Yala for a luxury wildlife adventure near Yala National Park.",
    images: [
      {
        url: "/assets/images/houseimg1.png",
        alt: "Nature Win Yala luxury villa exterior in Yala, Sri Lanka"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: "Nature Win Yala"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Stay | Yala Safari Villa | Nature Win Yala",
    description: "Book your Yala safari villa in Sri Lanka. Reserve your stay at Nature Win Yala for a luxury wildlife adventure near Yala National Park.",
    images: [
      {
        url: "/assets/images/houseimg1.png",
        alt: "Nature Win Yala luxury villa exterior in Yala, Sri Lanka"
      }
    ]
  }
};

export default function BookNowPage() {
  return <BookNowContent />;
}
