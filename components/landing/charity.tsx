"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

const charityImages = [
  "/charity/african-kids-enjoying-life.jpg",
  "/charity/close-up-community-solidarity-concept.jpg",
  "/charity/medium-shot-community-painting-wood.jpg",
  "/charity/people-preparing-charity-foodbank-poor-people.jpg",
  "/charity/side-view-people-garage-sale.jpg",
  "/charity/volunteers-provide-meal-boxes-canned-goods-needy-individuals-seniors-homeless-people-receive-nourishment-from-smiling-workers-embodying-spirit-food-drive-nonprofit-organization.jpg",
];

export default function Charity() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Create extended array with many duplicates for endless scrolling
  // Duplicate images many times so we can scroll infinitely
  const extendedImages = Array(30)
    .fill(null)
    .flatMap(() => charityImages);

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Calculate transform offset: move by one item width (20% of container)
  // Let it continue infinitely without bounds
  const getTransform = () => {
    return `-${currentIndex * 20}%`;
  };

  return (
    <section
      className="group relative z-20 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-40 px-3 sm:px-4 md:px-4 lg:px-6 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation Arrows - Only show on large screens where we have 5 columns */}
        <motion.button
          onClick={goToPrevious}
          className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 -translate-x-8 z-30 bg-white/90 hover:bg-white shadow-lg rounded-md p-3 group"
          aria-label="Previous images"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.9,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{ pointerEvents: isHovered ? "auto" : "none" }}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-yellow-500 transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 translate-x-8 z-30 bg-white/90 hover:bg-white shadow-lg rounded-md p-3 group"
          aria-label="Next images"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.9,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{ pointerEvents: isHovered ? "auto" : "none" }}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-yellow-500 transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={ref}>
          <motion.div
            className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            animate={{
              x: getTransform(),
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {extendedImages.map((imageSrc, index) => (
              <motion.div
                key={`charity-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative shrink-0 aspect-3/4 sm:aspect-4/5 lg:aspect-4/5 overflow-hidden group cursor-pointer"
                style={{
                  width: `calc((100% - 4 * 1.5rem) / 5)`,
                  minWidth: `calc((100% - 4 * 1.5rem) / 5)`,
                }}
              >
                <Image
                  src={imageSrc}
                  alt={`Charity image ${index + 1}`}
                  fill
                  className="object-cover  transition-transform duration-300"
                  quality={90}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
