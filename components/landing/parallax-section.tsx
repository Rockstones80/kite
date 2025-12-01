"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative min-h-[60vh] lg:min-h-screen w-full">
      {/* Mobile Background - Scrolls with content */}
      <div
        className="lg:hidden absolute inset-0"
        style={{
          backgroundImage: "url('/section.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Desktop Background - Fixed parallax */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: "url('/section.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 lg:bg-black/60 z-10"></div>

      {/* Content that scrolls over the fixed background */}
      <div className="relative z-20 min-h-[60vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-white"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl md:text-[20px] font-light text-gray-200 mb-3 lg:mb-2"
            >
              We&apos;re here to support humanity
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl lg:text-4xl md:text-5xl font-bold leading-tight px-2 lg:px-0"
            >
              Fundraising for the people and causes you care about
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 lg:pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-xs lg:text-sm px-6 lg:px-8 py-2.5 lg:py-3 uppercase tracking-wide shadow-lg cursor-pointer"
              >
                START DONATING TODAY
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
