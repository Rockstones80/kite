"use client";

import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";

const cards = [
  {
    title: "SKILLS",
    description: "Fostering talents and skills to shape a more humane society.",
    icon: "/cta/creative-thinking.png",
  },
  {
    title: "CHARITY",
    description: "Empowering the future with compassion and support.",
    icon: "/cta/charity.png",
  },
  {
    title: "HEALTH",
    description: "Building a healthier tomorrow for children and humanity.",
    icon: "/cta/heartbeat.png",
  },
  {
    title: "EDUCATION",
    description:
      "Illuminating young minds for a brighter, compassionate world.",
    icon: "/cta/graduation-cap.png",
  },
];

export default function CTACards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    <section
      ref={ref}
      className="absolute z-20 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 px-2 sm:px-2 md:px-6 lg:px-12 w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile Carousel View */}
        <div
          className="lg:hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Previous Button - Left Side */}
          <AnimatePresence>
            {isHovered && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-sm transition-colors shadow-lg"
                aria-label="Previous card"
              >
                <svg
                  className="w-5 h-5"
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
            )}
          </AnimatePresence>

          {/* Card Container */}
          <div className="overflow-hidden px-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-none shadow-xl overflow-hidden"
              >
                {/* Card Content */}
                <div className="p-10 space-y-4">
                  {/* Title */}
                  <h3 className="text-green-800 text-xl font-bold tracking-wide">
                    {cards[currentIndex].title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-md leading-relaxed min-h-[60px] font-light">
                    {cards[currentIndex].description}
                  </p>

                  {/* Icon and Arrow */}
                  <div className="flex items-center justify-between pt-3">
                    {/* Icon */}
                    <div className="relative w-14 h-14">
                      <Image
                        src={cards[currentIndex].icon}
                        alt={`${cards[currentIndex].title} icon`}
                        fill
                        className="object-contain"
                        quality={90}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(89%) sepia(98%) saturate(1352%) hue-rotate(0deg) brightness(102%) contrast(92%)",
                        }}
                      />
                    </div>

                    {/* Arrow Button */}
                    <div className="bg-yellow-500 text-white transition-colors duration-300 p-2.5 rounded-sm">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button - Right Side */}
          <AnimatePresence>
            {isHovered && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-sm transition-colors shadow-lg"
                aria-label="Next card"
              >
                <svg
                  className="w-5 h-5"
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
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Grid View - Unchanged */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-none shadow-xl overflow-hidden group cursor-pointer"
            >
              {/* Card Content */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                {/* Title */}
                <h3 className="text-green-800 text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed min-h-[60px] sm:min-h-[70px] md:min-h-[80px] font-light">
                  {card.description}
                </p>

                {/* Icon and Arrow */}
                <div className="flex items-center justify-between pt-2 sm:pt-3 md:pt-4">
                  {/* Icon */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      fill
                      className="object-contain"
                      quality={90}
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(89%) sepia(98%) saturate(1352%) hue-rotate(0deg) brightness(102%) contrast(92%)",
                      }}
                    />
                  </div>

                  {/* Arrow Button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-100 hover:bg-yellow-500 hover:text-white transition-colors duration-300 p-2 sm:p-2.5 md:p-3 rounded-sm group-hover:bg-yellow-500 group-hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Yellow accent bar at bottom */}
              {/* <div className="h-2 bg-yellow-500 w-full"></div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
