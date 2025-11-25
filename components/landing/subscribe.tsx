"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function Subscribe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing to newsletter");
  };

  return (
    <section className="relative w-full my-20 overflow-hidden max-w-6xl mx-auto rounded-lg">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <Image
          src="/hero-3.jpg"
          alt="Newsletter background"
          fill
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Dark Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Title - Black text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Subscribe to our newsletter
          </h2>

          {/* Call to Action - Black text */}
          <p className="text-base sm:text-lg text-white font-medium">
            Discover stories that drive change:
          </p>

          {/* Subscribe Button */}
          <motion.button
            onClick={handleSubscribe}
            className="px-8 py-3 bg-green-800 hover:bg-green-900 text-white font-semibold text-base  transition-colors duration-300"
          >
            Subscribe
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
