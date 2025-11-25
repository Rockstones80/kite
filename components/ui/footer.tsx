"use client";

import Image from "next/image";
import { Mail, Phone, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full">
      {/* Upper Section - With Background Image */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/charity/african-kids-enjoying-life.jpg"
            alt="Children background"
            fill
            className="object-cover"
            quality={90}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 py-12 sm:py-16 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-[86px]">
              {/* Column 1: Logo and Foundation Name */}
              <div className="space-y-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    <Image
                      src="/logo.png"
                      alt="KITE Initiative Logo"
                      fill
                      className="object-contain"
                      quality={90}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-yellow-500">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#volunteer"
                      className="text-white hover:text-yellow-500 transition-colors text-sm sm:text-base"
                    >
                      Become a Volunteer
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Causes */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-yellow-500">Causes</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#charity"
                      className="text-white hover:text-yellow-500 transition-colors text-sm sm:text-base"
                    >
                      Charity
                    </a>
                  </li>
                  <li>
                    <a
                      href="#health"
                      className="text-white hover:text-yellow-500 transition-colors text-sm sm:text-base"
                    >
                      Health
                    </a>
                  </li>
                  <li>
                    <a
                      href="#education"
                      className="text-white hover:text-yellow-500 transition-colors text-sm sm:text-base"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-white hover:text-yellow-500 transition-colors text-sm sm:text-base"
                    >
                      Skills
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-yellow-500">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Mail
                      className="w-5 h-5 text-yellow-500 shrink-0"
                      strokeWidth={2.5}
                    />
                    <a
                      href="mailto:Contact@chesfound.org"
                      className="text-white hover:text-yellow-500 transition-colors text-sm sm:text-base"
                    >
                      Contact@chesfound.org
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-yellow-500" />
                    <a
                      href="tel:+2348141819370"
                      className="text-white hover:text-yellow-500 transition-colors text-sm sm:text-base"
                    >
                      +2348141819370
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-yellow-500" />
                    <a
                      href="tel:+2349025222315"
                      className="text-white hover:text-yellow-500 transition-colors text-sm sm:text-base"
                    >
                      +2349025222315
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 5: Raise Money and Donate */}
              <div className="space-y-4">
                {/* <div className="space-y-2">
                  <h4 className="text-lg font-bold text-orange-500 flex items-center gap-2">
                    Raise Money and help them
                    <ArrowDown className="w-5 h-5 text-white" />
                  </h4>
                </div> */}
                <motion.a
                  href="#donate"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-bold text-sm uppercase px-6 py-3  transition-colors"
                >
                  DONATE TODAY
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Copyright and Social Media */}
      <div className="bg-green-800 pt-6 pb-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-white text-sm">© {currentYear} CHESFound by E.E</p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
              aria-label="Twitter"
            >
              <Twitter className="w-3 h-3 text-green-800 group-hover:text-green-700 transition-colors" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-green-800 hover:border-green-700 transition-colors group"
              aria-label="Facebook"
            >
              <svg
                className="w-3 h-3 text-green-800 group-hover:text-green-700 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-green-800 hover:border-green-700 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-3 h-3 text-green-800 group-hover:text-green-700 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3 h-3 text-green-800 group-hover:text-green-700 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
