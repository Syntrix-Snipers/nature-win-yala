import { Metadata } from "next";
import BookNowContent from "./BookNowContent";

export const metadata: Metadata = {
  title: "Book Your Stay | Nature Win Yala | Luxury Villa & Safari",
  description: "Secure your luxury stay at Nature Win Yala. Book our two-bedroom villa and plan your unforgettable Yala National Park safari experience today.",
  keywords: [
    "book Yala villa",
    "reserve safari accommodation",
    "Nature Win Yala booking",
    "luxury stay Yala National Park",
    "Sri Lanka villa reservation"
  ],
  openGraph: {
    title: "Book Your Stay | Nature Win Yala",
    description: "Ready for a wildlife adventure? Book your stay at Nature Win Yala now.",
    images: ["/assets/images/houseimg1.png"],
  }
};

export default function BookNowPage() {
  return <BookNowContent />;
}
