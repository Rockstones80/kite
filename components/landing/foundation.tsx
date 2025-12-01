"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function Foundation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-green-800 pb-16 lg:pb-64 px-4 sm:px-6 lg:px-16 pt-72"
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout - Centered */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-md"
          >
            <div className="relative w-full h-[350px]">
              {/* Orange accent bars */}
              <div className="absolute -left-3 bottom-0 w-4 h-[90%] bg-[#F4BC21]"></div>
              <div className="absolute -left-3 -bottom-3 w-[70%] h-5 bg-[#F4BC21]"></div>

              {/* Main Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/foundation.jpg"
                  alt="KITE Foundation - Making a Difference"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white space-y-6 text-center px-2"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base leading-relaxed font-light"
            >
              Our foundation is built on the belief that the love for the ART of
              Medicine goes hand in hand with love for humanity. We have a
              strong commitment to making a difference, and we&apos;ve achieved
              this through various projects. Explore our past works and join us
              on this incredible journey of empowerment and compassion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-sm px-8 py-3 uppercase tracking-wide transition-colors duration-200 shadow-lg cursor-pointer mb-10 lg:mb-0"
              >
                ABOUT US
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[550px]">
              {/* Orange accent bars */}
              <div className="absolute -left-5 bottom-0 w-6 h-[90%] bg-[#F4BC21]"></div>
              <div className="absolute -left-5 -bottom-5 w-[70%] h-7 bg-[#F4BC21]"></div>

              {/* Main Image */}
              <div className="relative w-full h-full ">
                <Image
                  src="/foundation.jpg"
                  alt="KITE Foundation - Making a Difference"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl leading-14 font-light"
            >
              Our foundation is built on the belief that the love for the ART of
              Medicine goes hand in hand with love for humanity. We have a
              strong commitment to making a difference, and we&apos;ve achieved
              this through various projects. Explore our past works and join us
              on this incredible journey of empowerment and compassion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-sm rounded-md px-6 py-3 uppercase tracking-wide transition-colors duration-200 shadow-lg flex items-center justify-center w-[27%] mx-auto cursor-pointer"
              >
                ABOUT US
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
