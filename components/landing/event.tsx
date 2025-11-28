"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  dateLabel: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "World Menstrual Hygiene Day 2024",
    description: "Theme: A Girl Child, A Special Gift",
    image: "/event/event.jpg",
    date: "28 MAY",
    time: "May 28 @ 9:00 am",
    dateLabel: "28 MAY",
  },
  {
    id: 2,
    title: "World TB Day",
    description: "TB Awareness: Facts, Prevention, and Treatment",
    image: "/event/event.jpg",
    date: "24 MAR",
    time: "March 24",
    dateLabel: "24 MAR",
  },
  {
    id: 3,
    title: "Commemoration of International Mother Tongue Language Day 2025",
    description:
      "Multilingual Education is a Pillar of Learning and Intergenerational learning",
    image: "/event/event.jpg",
    date: "21 FEB",
    time: "February 21",
    dateLabel: "21 FEB",
  },
];

export default function Event() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-16 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-yellow-500 text-sm  font-medium tracking-wide">
              Events
            </h3>
            <div className="h-px w-16 sm:w-20  bg-yellow-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mt-2">
            Upcoming & Past Events
          </h2>
        </motion.div>

        {/* Events Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            //   whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Event Image */}
              <div className="relative w-full aspect-4/5 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  quality={90}
                />
                {/* Dark overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#1a4d4d] via-[#1a4d4d]/95 to-transparent pt-16 pb-6 px-4">
                  {/* Date and Time */}
                  <div className="flex items-center gap-2 text-white mb-2">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  {/* Event Title */}
                  <h3 className="text-white text-base sm:text-lg font-semibold line-clamp-2">
                    {event.title}
                  </h3>
                </div>

                {/* Date Tag in top right corner with wavy edge */}
                <div className="absolute bottom-24 right-0 bg-[#f97316] text-white px-4 py-1 shadow-lg">
                  <span className="text-xs font-bold tracking-wide">
                    {event.dateLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
