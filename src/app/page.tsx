// SEO metadata for the Home page
export const metadata = {
  title: "Nature Win Yala | Luxury Two-Bedroom Villa & Safari Accommodation in Yala National Park, Sri Lanka",
  description:
    "Book your stay at Nature Win Yala, a luxury two-bedroom villa near Yala National Park. Enjoy private kitchen, pet-friendly amenities, balcony views, and unforgettable safari experiences in Sri Lanka.",
};
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-28"> {/* adjust pt value to match navbar height */}
        <Footer />
      </main>
    </>
  );
}

