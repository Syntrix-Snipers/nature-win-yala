import { Metadata } from "next";
import BookNowContent from "./components/BookNowContent";

export const metadata: Metadata = {
  title: "Book Luxury Yala Villa | Reserve Private Safari Accommodation | Nature Win Yala",
  description: "Secure your luxury 2-bedroom private villa near Yala National Park entrance. Best price guaranteed for family safari stays, authentic cuisine, and entire villa rental. Book your Yala adventure now!",
  keywords: [
    "book Yala villa", "reserve safari accommodation", "Nature Win Yala booking", "luxury stay Yala National Park", "Sri Lanka villa reservation",
    "Yala safari booking", "Yala travel", "Yala Sri Lanka", "Yala National Park hotel", "safari villa Yala",
    "family accommodation Yala", "pet friendly Yala", "wildlife Yala", "Yala safari stay", "Yala travel guide",
    "Yala accommodation", "Yala safari hotel", "private villa yala price", "best value yala accommodation"
  ],
  openGraph: {
    title: "Book Your Stay | Luxury Private Villa Yala | Nature Win Yala",
    description: "Reserve your entire luxury 2-bedroom villa near Yala Park entrance. Private kitchen, BBQ, and safari packages available. Book direct for the best rates.",
    images: [
      {
        url: "/assets/images/houseimg1.png",
        alt: "Book Nature Win Yala Luxury Villa Accommodation"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: "Nature Win Yala"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Luxury Villa Stay in Yala National Park",
    description: "Reserve your private 2-bedroom villa near Yala entrance. Perfect for families and safari lovers. Book now!",
    images: [
      {
        url: "/assets/images/houseimg1.png",
        alt: "Book Nature Win Yala Luxury Villa Accommodation"
      }
    ]
  }
};

export default function BookNowPage() {
  return <BookNowContent />;
}
