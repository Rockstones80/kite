"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      {/* Background Image Section */}
      <section className="relative h-[43vh] lg:h-[62vh] w-full pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/contact/woman.jpg"
            alt="Contact us background"
            fill
            sizes="100vw"
            className="object-cover"
            quality={90}
            priority
          />
        </div>

        {/* Dark Semi-Transparent Overlay */}
        <div className="absolute inset-0 bg-black/50 lg:bg-black/60 z-10"></div>

        {/* Contact Us Text - Centered */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Contact us
          </h1>
        </div>
      </section>

      {/* Mobile View - Centered Layout */}
      <section className="lg:hidden relative w-full bg-white py-12 px-6">
        <div className="max-w-md mx-auto">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-8 "
          >
            <h2 className="text-yellow-500 text-sm font-medium tracking-wide mb-2">
              Contact Channels
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
              We&apos;d Love to hear from you
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Use any of the contact channels provided on this page to reach out
              to us.
            </p>
          </motion.div>

          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center py-8"
          >
            <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <a
              href="mailto:Contact@chesfound.org"
              className="block text-base text-gray-900 transition-colors mb-1"
            >
              Contact@chesfound.org
            </a>
            <a
              href="mailto:chesfound@gmail.com"
              className="block text-base text-gray-900 transition-colors"
            >
              chesfound@gmail.com
            </a>
          </motion.div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200"></div>

          {/* Phone Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center py-8"
          >
            <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <a
              href="tel:+2348141819370"
              className="block text-base text-gray-900 transition-colors mb-1"
            >
              +2348141819370
            </a>
            <a
              href="tel:+2349025222315"
              className="block text-base text-gray-900 transition-colors"
            >
              +2349025222315
            </a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 pt-8"
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-green-800" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 text-green-800"
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
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-green-800" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-green-800" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Desktop View - White Background (Unchanged) */}
      <section
        ref={ref}
        className="hidden lg:block relative w-full bg-white py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-36 items-start">
            {/* Left Section - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg font-light text-yellow-500"
              >
                Contact Channels
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl font-bold text-gray-900 leading-tight mb-10"
              >
                We&apos;d Love to hear from you
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base font-light text-gray-700 leading-tight "
              >
                Use any of the contact channels provided on this page to reach
                out to us.
              </motion.p>
            </motion.div>

            {/* Right Section - Contact Details and Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-8"
            >
              {/* Email and Phone Section */}
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                {/* Email Section */}
                <div className="flex-1 space-y-4">
                  <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <a
                      href="mailto:Contact@chesfound.org"
                      className="block text-base sm:text-lg text-gray-900 transition-colors"
                    >
                      Contact@chesfound.org
                    </a>
                    <a
                      href="mailto:chesfound@gmail.com"
                      className="block text-base sm:text-lg text-gray-900 transition-colors"
                    >
                      chesfound@gmail.com
                    </a>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block w-px bg-gray-200"></div>

                {/* Phone Section */}
                <div className="flex-1 space-y-4">
                  <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <a
                      href="tel:+2348141819370"
                      className="block text-base sm:text-lg text-gray-900 transition-colors"
                    >
                      +2348141819370
                    </a>
                    <a
                      href="tel:+2349025222315"
                      className="block text-base sm:text-lg text-gray-900 transition-colors"
                    >
                      +2349025222315
                    </a>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block w-px bg-gray-200"></div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-green-800" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-green-800"
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
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-green-800" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-green-800" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
