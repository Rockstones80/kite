"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { CircleUser } from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "CHESFOUND Summer Tech Bootcamp 2024 Ends",
    description:
      "The Chesfound Summer Boot Camp concluded on August 10th, 2024, with an inspiring showcase of",
    image: "/charity/medium-shot-community-painting-wood.jpg",
    date: "18 AUG",
    author: "Chesadmin",
    link: "#",
  },
  {
    id: 2,
    title:
      "Onboarding for the 2024 CHES Empowerment Foundation Summer Tech Bootcamp",
    description:
      "The Onboarding session yesterday was an opportunity for young great minds to connect and engage",
    image:
      "/charity/volunteers-provide-meal-boxes-canned-goods-needy-individuals-seniors-homeless-people-receive-nourishment-from-smiling-workers-embodying-spirit-food-drive-nonprofit-organization.jpg",
    date: "17 JUL",
    author: "Chesadmin",
    link: "#",
  },
  {
    id: 3,
    title: "WORLD MENSTRUAL HYGIENE DAY 2025",
    description:
      "Last month, as part of our commitment to promoting access to quality health and education,",
    image: "/charity/side-view-people-garage-sale.jpg",
    date: "18 JUN",
    author: "Chesadmin",
    link: "#",
  },
];

export default function Article() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-green-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-center items-center"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-yellow-500 text-sm sm:text-base font-medium tracking-wide mb-2">
              Publications
            </h3>
            <div className="h-px w-16 sm:w-20  bg-yellow-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Latest news & articles
          </h2>
        </motion.div>

        {/* Articles Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="bg-white shadow-lg overflow-hidden cursor-pointer group"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  quality={90}
                />
                {/* Date Overlay - Red with rounded bottom corners */}
                <div className="absolute bottom-0 right-0 bg-[#f97316] text-white px-4 py-2">
                  <span className="text-sm font-bold">{article.date}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 space-y-4">
                {/* Author */}
                <div className="flex items-center gap-2 text-gray-700">
                  <CircleUser className="w-4 h-4 text-[#f97316]" />
                  <span className="text-sm font-medium text-gray-500">
                    {article.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed line-clamp-3 font-extralight">
                  {article.description}
                </p>

                {/* Read More Link */}
                <a
                  href={article.link}
                  className="inline-block text-gray-900 font-semibold text-sm"
                >
                  &gt;&gt; READ MORE
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More News Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <motion.a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md"
          >
            More News
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
