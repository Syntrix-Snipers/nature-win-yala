import { Metadata } from "next";
import BookNowContent from "./components/BookNowContent";

export const metadata: Metadata = {
  title: "Book Luxury Yala Villa | Reserve Private Safari Accommodation | Nature Win Yala",
  description: "Book the best rated luxury accommodation in Yala National Park. Nature Win Yala offers a private 2-bedroom villa experience superior to standard hotels. Located minutes from the safari entrance. Includes private kitchen, BBQ, and expert jeep safari tours. Ideal for families and couples.",
  keywords: [
    "book Yala villa", "reserve safari accommodation", "Nature Win Yala booking", "luxury stay Yala National Park", "Sri Lanka villa reservation",
    "Yala safari booking", "Yala travel", "Yala Sri Lanka", "Yala National Park hotel", "safari villa Yala",
    "family accommodation Yala", "pet friendly Yala", "wildlife Yala", "Yala safari stay", "Yala travel guide",
    "Yala accommodation", "Yala safari hotel", "private villa yala price", "best value yala accommodation",
    "hotels in yala booking", "agoda yala hotels", "tripadvisor yala hotels", "booking.com yala villas",
    "cinnamon wild yala alternative", "jetwing yala alternative", "chena huts alternative", "hilton yala alternative",
    "budget luxury yala", "5 star experience yala", "best safari driver booking", "yala jeep hire price",
    "katagamuwa entrance hotels", "palatupana entrance accommodation", "tissamaharama hotels", "yala national park bungalow",
    "yala hotel deals", "yala hotel offers", "cheap hotels in yala", "luxury hotels in yala prices", "book yala hotel online",
    "yala villa rental cost", "entire villa yala price", "yala accommodation for groups", "large family villa yala",
    "honeymoon package yala", "yala safari offers", "last minute hotel deals yala", "yala hotel availability",
    "guest house yala", "homestay yala", "airbnb yala sri lanka", "best price yala safari",
    "secure booking yala", "yala hotel cancellation policy", "pay at hotel yala", "credit card booking yala",
    "luxury resorts yala rates", "eco lodge yala price", "glamping yala cost", "camping yala booking"
  ],
  metadataBase: new URL("https://naturewinyala.com"),
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
