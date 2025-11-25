"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Slide {
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
  subtitle2?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  layout?: "center" | "split";
}

interface SlideshowProps {
  slides: Slide[];
  autoPlayInterval?: number;
  showControls?: boolean;
}

export default function Slideshow({
  slides,
  autoPlayInterval = 5000,
  showControls = true,
}: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [goToNext, autoPlayInterval]);

  return (
    <div
      className="relative w-full h-full max-h-[110vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slideshow Images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          // variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            fill
            className="object-cover"
            priority={currentIndex === 0}
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/85 z-10"></div>

          {/* Conditional Layout Rendering */}
          {slides[currentIndex].layout === "split" ? (
            /* Split Layout - Text Left */
            <div className="absolute inset-0 z-20 flex flex-col lg:flex-row top-1/2">
              {/* Left Side - Text Content */}
              <div className="flex-1 flex flex-col justify-center text-white px-8 sm:px-16 lg:px-16 xl:px-36 2xl:px-48">
                {slides[currentIndex].subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-sm sm:text-base md:text-lg mb-2 tracking-wide font-light"
                  >
                    {slides[currentIndex].subtitle}
                  </motion.p>
                )}

                {slides[currentIndex].title && (
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 max-w-4xl leading-tight tracking-tight"
                  >
                    {slides[currentIndex].title}
                  </motion.h1>
                )}
                {slides[currentIndex].subtitle2 && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold -mt-16 max-w-4xl leading-tight tracking-tight"
                  >
                    {slides[currentIndex].subtitle2}
                  </motion.p>
                )}

                {slides[currentIndex].buttonText && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="pb-72"
                  >
                    <a
                      href={slides[currentIndex].buttonLink || "#"}
                      className="inline-block px-6 sm:px-10 py-3 bg-green-800 hover:bg-green-900 text-white font-bold text-sm uppercase transition-colors"
                    >
                      {slides[currentIndex].buttonText}
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          ) : (
            /* Center Layout - Default */
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4 sm:px-8 top-1/2">
              {slides[currentIndex].subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-sm sm:text-base md:text-lg mb-4 tracking-wide font-light"
                >
                  {slides[currentIndex].subtitle}
                </motion.p>
              )}

              {slides[currentIndex].title && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-[84px]  font-bold text-center mb-8 max-w-[800px] leading-tighter"
                >
                  {slides[currentIndex].title}
                </motion.h1>
              )}

              {(slides[currentIndex].buttonText ||
                slides[currentIndex].secondaryButtonText) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap gap-4 sm:gap-6 justify-center pb-72"
                >
                  {slides[currentIndex].buttonText && (
                    <a
                      href={slides[currentIndex].buttonLink || "#"}
                      className="px-6 sm:px-10 py-3 bg-green-800 hover:bg-green-900 text-white font-bold text-sm uppercase "
                    >
                      {slides[currentIndex].buttonText}
                    </a>
                  )}

                  {slides[currentIndex].secondaryButtonText && (
                    <a
                      href={slides[currentIndex].secondaryButtonLink || "#"}
                      className="px-6 sm:px-10 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-sm uppercase tracking-wider"
                    >
                      {slides[currentIndex].secondaryButtonText}
                    </a>
                  )}
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {showControls && slides.length > 1 && (
        <>
          {/* Previous Button */}
          <AnimatePresence>
            {isHovered && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrevious}
                className="absolute top-1/2 -translate-y-1/2 z-30 backdrop-blur-sm text-white p-3 sm:p-4 transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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

          {/* Next Button */}
          <AnimatePresence>
            {isHovered && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 backdrop-blur-sm text-white p-3 sm:p-4  transition-colors"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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

          {/* Dot Indicators */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3"
              >
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all ${
                      index === currentIndex
                        ? "bg-white w-8 sm:w-8"
                        : "bg-white/50 w-2 sm:w-3 hover:bg-white/70"
                    } h-2 sm:h-3 rounded-full`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
