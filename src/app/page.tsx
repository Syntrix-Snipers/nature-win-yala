import Home from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nature Win Yala | Luxury Safari Villa in Yala National Park",
  description: "Experience the ultimate private luxury villa in Yala National Park. Nature Win Yala offers spacious cabanas, authentic Sri Lankan cuisine, and exclusive safari tours near the park entrance. Perfect for families and couples seeking a serene alternative to crowded hotels.",
  openGraph: {
    title: "Nature Win Yala | Luxury Safari Villa in Yala National Park",
    description:
      "Luxury two-bedroom villa near Yala National Park. Private kitchen, pet-friendly, local food, and safari experiences. Your ultimate Yala adventure starts here.",
    url: "https://naturewinyala.com/",
    type: "website",
    siteName: "Nature Win Yala",
    images: [
      {
        url: "/assets/images/thumb-1.png",
        width: 1200,
        height: 630,
        alt: "Nature Win Yala Luxury Villa and Safari"
      }
    ]
  },
  keywords: [
    "Nature Win Yala", "Yala National Park Accommodation", "Luxury Villa Yala", "Yala Safari Hotel",
    "Private Villa Sri Lanka", "Yala Jeep Safari", "Best Hotels in Yala", "Family Accommodation Yala",
    "Yala Glamping", "Sri Lanka Safari", "Yala National Park Entrance Hotel", "Katagamuwa Entrance",
    "Palatupana Entrance", "Luxury Cabanas Yala", "Nature Resort Yala"
  ],

  alternates: {
    canonical: "https://naturewinyala.com",
  }
};

export default function RootPage() {
  return <Home />;
}
