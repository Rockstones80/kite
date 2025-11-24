"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
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

  return (
    <section
      ref={ref}
      className="absolute z-20 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 px-3 sm:px-4 md:px-6 lg:px-12  w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
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
                <h3 className="text-[#0A7F1F] text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
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
