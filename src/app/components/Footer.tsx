import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "../../../data/links";
import { contactData } from "../../../data/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#124734] pt-16 pb-8 border-t border-gray-300">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Logo + Description + Socials */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Image
              src="/assets/images/FooterLogo.png"
              alt="Nature Win Yala Logo"
              width={220}
              height={140}
              className="object-contain"
            />

            <p className="text-white text-sm leading-relaxed max-w-sm">
              Nature Win Yala is your private escape in Yala, offering cozy stays,
              relaxing spaces, and the perfect setting for families and groups.
            </p>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={`/assets/images/${social.name.toLowerCase()}.png`}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="object-contain h-5 w-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-[#F5C27B]">Links</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/" className="hover:text-[#F5C27B] transition-colors">
                  Bookings
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-[#F5C27B] transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/#dine-with-us" className="hover:text-[#F5C27B] transition-colors">
                  Dine With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-[#F5C27B]">Contact Us</h3>
            <ul className="space-y-2 text-sm text-white leading-relaxed">
              <li>
                <span className="font-medium">Email:</span> {contactData.email}
              </li>
              <li>
                <span className="font-medium">Phone:</span> {contactData.phone}
              </li>
              <li>
                <span className="font-medium">Address:</span>{" "}
                {contactData.address}
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-6" />

        {/* Copyright */}
        <p className="text-center text-white/70 text-xs">
          © {currentYear} Nature Win Yala | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
