import { Metadata } from "next";
import ExploreContent from "./components/ExploreContent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Explore Yala Safari | Luxury Private Jeep Tours & Nature Walks | Nature Win Yala",
  description: "Discover the best Yala National Park safari experience. We offer exclusive private jeep safaris, expert guides for leopard spotting, and luxury villa accommodation near the Palatupana and Katagamuwa entrances. Explore bird watching, ancient Sithulpawwa temple, and serene nature walks. The ultimate guide to Yala tourism.",
  keywords: [
    "Yala National Park", "Yala safari", "wildlife adventure Sri Lanka", "bird watching Yala", "nature walks Yala",
    "luxury safari accommodation", "Nature Win Yala activities", "best food in Yala", "Yala tourism guide", "Sri Lanka travel tips",
    "how to get to Yala", "safari booking Sri Lanka", "private jeep safari Yala", "leopard safari Yala", "Yala blocks guided tour",
    "Sithulpawwa rock temple visit", "best time to visit yala", "yala safari price", "yala jeep hire", "safari hotels yala",
    "camping in yala", "yala national park entrance fee", "katagamuwa entrance safari", "palatupana entrance safari", "yala block 1 safari",
    "yala block 5 safari", "sloth bear sighting yala", "elephant gathering yala", "magul maha viharaya history", "kataragama temple visit",
    "best safari driver yala", "luxury camping yala", "glamping yala sri lanka", "hotels near yala safari entrance",
    "yala leopard tracker", "morning safari yala", "afternoon safari yala", "full day safari yala", "private safari jeep cost",
    "yala bird list", "Kumana National Park", "Bundala National Park", "Lunugamvehera National Park", "Kirinda Beach",
    "Tissamaharama Lake", "Debarawewa Lake", "Yala night safari", "wildlife photography yala", "sri lanka leopard tour",
    "yala flora and fauna", "best safari guide yala", "family safari yala", "kids safari yala", "yala jeep safari booking online",
    "sri lanka southern province tourism", "hambantota hotels", "mattala airport to yala", "mirissa to yala safari"
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
      "name": "What is the best way to explore Yala National Park?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best way to explore Yala is through a private jeep safari. At Nature Win Yala, we arrange exclusive safaris with experienced drivers who know the best spots for leopard and bear sightings, ensuring a premium wildlife photography experience."
      }
    },
    {
      "@type": "Question",
      "name": "How close is Nature Win Yala to the safari entrance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are located just minutes away from the Katagamuwa and Palatupana entrances, giving you a head start for the morning safari to beat the queues and see wildlife when they are most active."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer food and accommodation packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer full-board and half-board packages including authentic Sri Lankan rice and curry, fresh lake fish, and BBQ dinners using organic vegetables from our garden. Our luxury villas provide a private and comfortable stay."
      }
    },
    {
      "@type": "Question",
      "name": "Can we visit Sithulpawwa or Kataragama from the hotel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Nature Win Yala is centrally located. We can arrange transport for you to visit the ancient Sithulpawwa Rock Temple (inside the park) and the sacred Kataragama Temple nearby."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Nature Win Yala better than other hotels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike large commercial hotels, we offer a private villa experience with personalized service, 1000m² of private land, and direct access to nature. You get the luxury of a hotel with the privacy of a home."
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
