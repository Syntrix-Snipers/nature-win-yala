import { Metadata } from "next";
import ExploreContent from "./components/ExploreContent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Explore Yala Safari | Luxury Private Jeep Tours & Nature Walks | Nature Win Yala",
  description: "Discover Yala National Park with exclusive private safari tours. Spot leopards, elephants, and bears with our personalized jeep safaris. Experience bird watching, nature walks, and the best luxury villa accommodation near Yala entrance.",
  keywords: [
    "Yala National Park", "Yala safari", "wildlife adventure Sri Lanka", "bird watching Yala", "nature walks Yala",
    "luxury safari accommodation", "Nature Win Yala activities", "best food in Yala", "Yala tourism guide", "Sri Lanka travel tips",
    "how to get to Yala", "safari booking Sri Lanka", "private jeep safari Yala", "leopard safari Yala", "Yala blocks guided tour",
    "Sithulpawwa rock temple visit", "best time to visit yala"
  ],
  alternates: {
    canonical: "https://naturewinyala.com/explore",
  },
  openGraph: {
    title: "Explore Yala | Safari Adventures & Nature Experiences | Nature Win Yala",
    description: "Discover the magic of Yala National Park. From thrilling wildlife safaris to serene bird watching and nature walks, explore the adventures awaiting you at Nature Win Yala.",
    url: "https://naturewinyala.com/explore",
    siteName: "Nature Win Yala",
    images: [
      {
        url: "/assets/images/explore-images/Background.jpg",
        width: 1200,
        height: 630,
        alt: "Explore Nature Win Yala Safari Adventures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Yala | Safari Adventures & Nature Experiences | Nature Win Yala",
    description: "Plan your ultimate wildlife adventure. Safaris, nature walks, and more at Nature Win Yala.",
    images: ["/assets/images/explore-images/Background.jpg"],
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Nature Win Yala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nature Win Yala is a unique eco-friendly villa experience located near Yala National Park, offering luxury stays and curated wildlife adventures."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a stay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book your stay directly through our website's 'Book Now' page or contact us for personalized assistance."
      }
    },
    {
      "@type": "Question",
      "name": "Are meals included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer a variety of meal plans including local and international cuisine. Please check your booking details for included options."
      }
    },
    {
      "@type": "Question",
      "name": "Is transportation provided?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can arrange airport transfers and safari transport upon request. Please contact us in advance to schedule your transportation."
      }
    },
    {
      "@type": "Question",
      "name": "What activities are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guests can enjoy guided safaris, bird watching, nature walks, and cultural experiences. Check our Explore page for more details."
      }
    }
  ]
};

export default function ExplorePage() {
  return (
    <>
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ExploreContent />
    </>
  );
}
