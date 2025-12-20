import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "../../../data/links";

import { contactData } from "../../../data/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#124734] pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">

          {/* Logo + Description + Socials */}
          <div className="flex flex-col items-start gap-4 md:w-1/3">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/FooterLogo.png"
                alt="Nature Win Yala Logo"
                width={240}
                height={160}
                className="object-contain"
              />
            </div>
            <p className="text-white text-sm max-w-xs">
              Nature Win Yala is your private escape in Yala, offering cozy stays, relaxing spaces, and the perfect setting for families and groups.
            </p>
            <div className="flex gap-4 mt-2 text-sm">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#F9C170] transition-colors"
                >
                  {social.name === "Facebook" && (
                    <Image src="/assets/images/fb.png" alt="Facebook" width={24} height={24} />
                  )}
                  {social.name === "Instagram" && (
                    <Image src="/assets/images/insta.png" alt="Instagram" width={24} height={24} />
                  )}
                  {social.name === "TikTok" && (
                    <Image src="/assets/images/tiktok.png" alt="TikTok" width={24} height={24} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links + Contact Section */}
          <div className="flex flex-col sm:flex-row gap-8 md:w-2/3 w-full text-sm">
            {/* Links Section */}
            <div className="flex flex-col space-y-2 text-white w-full sm:w-1/2">
              <h3 className="text-lg font-bold text-[#F5C27B]">Links</h3>
              <ul className="space-y-1 font-medium">
                <li>
                  <Link href="/" className="hover:text-[#F5C27B] transition-colors whitespace-nowrap">
                    Bookings
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-[#F5C27B] transition-colors whitespace-nowrap">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-[#F5C27B] transition-colors whitespace-nowrap">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-[#F5C27B] transition-colors whitespace-nowrap">
                    Dine With Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col space-y-2 text-white w-full sm:w-1/2">
              <h3 className="text-lg font-bold text-[#F5C27B]">Contact Us</h3>
              <ul className="space-y-1 font-medium">
                <li>Email: {contactData.email}</li>
                <li>Phone: {contactData.phone}</li>
                <li>Address: {contactData.address}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-100 mb-6" />

        {/* Copyright Section */}
        <div className="text-center text-gray-300 text-xs">
          © {currentYear} Nature Win Yala | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
