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

