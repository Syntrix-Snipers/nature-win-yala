import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { galleryMore } from "../../../public/assets/images/images";
import BtnComponent from "../components/BtnComponent";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Official Gallery | Nature Win Yala — Safari Villa & Cabanas in Sri Lanka",
    description:
        "Explore the Official Gallery of Nature Win Yala. View our luxury private villas, authentic dining experiences, and breathtaking wildlife safari moments near Yala National Park entrance.",
    keywords: [
        "Nature Win Yala gallery", "Yala safari photos", "private villa Yala photos", "Sri Lanka safari images",
        "Yala National Park accommodation photos", "luxury villa Yala images", "private cabana yala photos",
        "yala safari jeep photos", "nature win yala interior", "best place to stay in yala gallery"
    ],
};

const GalleryPage = () => {
    return (
        <main className="min-h-screen bg-white selection:bg-[#124734] selection:text-white">
            {/* Hero Section - Matching Explore Theme */}
            <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={galleryMore[21].src}
                    alt="Nature Win Yala Official Gallery Header"
                    fill
                    priority
                    className="object-cover brightness-[0.7]"
                    sizes="100vw"
                />

                {/* Hero Overlay Text */}
                <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-4 leading-tight drop-shadow-lg">
                        Our Official Gallery
                    </h1>

                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                        <Link href="/" className="hover:text-[#F9C170] transition-colors">Home</Link>
                        <ChevronRight size={18} className="opacity-70" />
                        <span className="text-[#F9C170]">Gallery</span>
                    </div>
                </div>
            </div>

            {/* Gallery Content Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    {/* Brand Styled Header - Matching Explore Theme */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 md:w-24 bg-[#124734] opacity-30"></div>
                        <span className="text-sm md:text-xl font-serif font-semibold text-[#124734] uppercase tracking-widest">
                            Visual Sanctuary
                        </span>
                        <div className="h-[1px] w-12 md:w-24 bg-[#124734] opacity-30"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#124734] text-center mb-4">
                        Capture the Moment
                    </h2>

                    <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-20 font-light">
                        Step into a world where wild elegance meets serene comfort. Our curated collection showcases
                        the heartbeat of <strong className="text-[#124734] font-semibold">Nature Win Yala</strong>—from
                        luxurious villas to the raw beauty of the jungle.
                    </p>

                    {/* Masonry Grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
                        {galleryMore.map((item, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#f8fcfb] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                            >
                                <div className="relative overflow-hidden aspect-auto">
                                    <Image
                                        src={item.src}
                                        alt={item.description}
                                        width={800}
                                        height={1000}
                                        className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 cursor-pointer"
                                        loading="lazy"
                                    />

                                    {/* Subtle Overlay on Hover */}
                                    <div className="absolute inset-0 bg-[#124734]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Description Section */}
                                <div className="p-6 bg-white border-t border-gray-50">
                                    <p className="text-[#124734] font-serif text-lg leading-snug italic">
                                        "{item.description}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional SEO Content Section */}
                    <div className="mt-32 pt-24 border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-serif text-[#124734]">A Portal to Yala's Wilderness</h3>
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    Located strategically near the <strong className="text-[#124734]">Palatupana and Katagamuwa gates</strong>,
                                    Nature Win Yala acts as your private portal to the wild. The images in our gallery reflect the close
                                    connection we maintain with the natural world, offering guests a glimpse of the leopards, elephants,
                                    and sloth bears that make <strong className="text-[#124734]">Yala National Park</strong> world-famous.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-serif text-[#124734]">Unparalleled Private Villa Luxury</h3>
                                <p className="text-gray-600 leading-relaxed text-lg font-light">
                                    Our <strong className="text-[#124734]">2-bedroom and 3-bedroom villas</strong> provide the ultimate
                                    peace and privacy. As seen in the gallery, each villa features a fully-equipped private kitchen,
                                    spacious living areas, and en-suite bathrooms. It's the perfect alternative to crowded hotels.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA / Quote */}
                    <div className="mt-32 text-center py-20 bg-[#f8fcfb] rounded-[40px] px-6">
                        <h4 className="text-3xl md:text-4xl font-serif text-[#124734] italic mb-10 max-w-3xl mx-auto leading-tight">
                            "Where every sunset brings a new story and every sunrise starts a new adventure."
                        </h4>
                        <Link href="/#gallery" className="inline-block">
                            <BtnComponent variant="btn_1" className="px-12 py-5 text-lg hover:scale-105 transition-transform">
                                Return to Sanctuary
                            </BtnComponent>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GalleryPage;
