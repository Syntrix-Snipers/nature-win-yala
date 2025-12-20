"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What wildlife can we see at Yala National Park?",
    answer:
      "Yala National Park is famous for its leopards, elephants, sloth bears, crocodiles, and a wide variety of birds. Guests often spot deer, wild boar, and many other native species during safaris."
  },
  {
    question: "What is the best time to visit Yala?",
    answer:
      "The best time to visit Yala is from February to July, when water levels are low and animals are easier to spot. However, the park is open most of the year and each season offers unique wildlife experiences."
  },
  {
    question: "How do I book a safari or villa stay?",
    answer:
      "You can book directly through our website's 'Book Now' page, or contact us via email at naturewinyala@gmail.com or phone at +94766604986 / +94773784986. We recommend booking in advance for the best availability."
  },
  {
    question: "Is the villa pet-friendly?",
    answer:
      "Yes, our two-bedroom villa is pet-friendly. Please inform us in advance if you are bringing pets so we can make the necessary arrangements."
  },
  {
    question: "How do I find Nature Win Yala?",
    answer:
      "We are located at Rota Wewa Yaya, Uddhakandara, Thabarawa, Galkaduwa, Sri Lanka. Find us easily on Google Maps: https://maps.app.goo.gl/LL3mDUuiCuQBnFHe7"
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Us
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Nature Win Yala</span> — your perfect escape into the wild. We are dedicated to providing unforgettable safari experiences in the heart of Yala, blending adventure, comfort, and nature.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Our team is passionate about wildlife and committed to offering safe, guided, and personalized tours. Whether you're a nature lover, photographer, or someone seeking peace, we ensure a memorable journey.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Join us and experience the beauty, thrill, and serenity of Yala like never before. Your adventure begins here!
        </p>

        {/* FAQ Section */}
        <section className="text-left mt-12">
          <h2 className="text-2xl font-bold text-[#124734] mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white dark:bg-zinc-800 rounded-lg shadow p-4 group">
                <summary className="font-semibold cursor-pointer text-lg text-[#124734] group-open:text-emerald-600 transition-colors">
                  {faq.question}
                </summary>
                <div className="mt-2 text-gray-700 dark:text-gray-300">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>
      </div>
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
};

export default AboutUs;