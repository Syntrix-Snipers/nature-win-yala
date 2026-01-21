import Home from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nature Win Yala — Private Luxury Safari Villa",
  description: "Nature Win Yala is the premier private luxury villa near Yala National Park entrance. Enjoy spacious cabanas, private kitchens, authentic dining, and exclusive jeep safaris. The perfect serene escape for families and couples.",
  openGraph: {
    title: "Nature Win Yala — Private Luxury Safari Villa",
    description:
      "Your exclusive wildlife escape. Private luxury villas with kitchens, minutes from the Yala Safari entrance. Authentic food, personalized safaris, and total serenity.",
    url: "https://naturewinyala.com/",
    type: "website",
    siteName: "Nature Win Yala",
    locale: "en_US",
    images: [
      {
        url: "https://naturewinyala.com/assets/images/thumb-1.png",
        width: 1200,
        height: 630,
        alt: "Nature Win Yala Private Luxury Villa Exterior"
      },
      {
        url: "https://naturewinyala.com/assets/images/thumb-2.png",
        width: 1200,
        height: 630,
        alt: "Luxury Cabana Bedroom with Nature View"
      },
      {
        url: "https://naturewinyala.com/assets/images/dining1.png",
        width: 1200,
        height: 630,
        alt: "Authentic Sri Lankan Dining at Nature Win Yala"
      },
      {
        url: "https://naturewinyala.com/assets/images/ElephantImg.png",
        width: 1200,
        height: 630,
        alt: "Wild Elephant Safari in Yala National Park"
      }
    ]
  },
  keywords: [
    // Brand & Core
    "Nature Win Yala", "Nature Win Yala Hotel", "Yala National Park Accommodation",

    // Specific Accommodation Types
    "Luxury Villa Yala", "Private Villa Yala", "Yala Cabanas", "Yala Safari Lodge",
    "Private Villa with Kitchen Yala", "Luxury Bungalow Yala", "Glamping Yala",

    // Location Specific
    "Hotels near Yala Entrance", "Katagamuwa Entrance Hotels", "Palatupana Entrance Accommodation",
    "Yala National Park Sri Lanka", "Tissamaharama Hotels",

    // Experience & Features
    "Yala Jeep Safari", "Best Safari Stay Yala", "Family Friendly Hotel Yala",
    "Yala Honeymoon Hotels", "Eco Resort Yala", "Bird Watching Yala",
    "Leopard Safari Yala", "Authentic Sri Lankan Food Yala",

    // Intent / Booking
    "Book Yala Safari", "Best Hotels in Yala 2026", "Affordable Luxury Yala",
    "Yala safari booking 2026", "Luxury villa Yala near park entrance", "Best value Yala safari stay",
    "Private safari jeep tours Yala", "2 bedroom villa Yala for family", "Yala accommodation with private kitchen"
  ],
  authors: [{ name: "Nature Win Yala" }],
  category: "Travel & Tourism",

  alternates: {
    canonical: "https://naturewinyala.com",
  }
};

export default function RootPage() {
  return <Home />;
}
