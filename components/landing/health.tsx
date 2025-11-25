"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { HeartHandshake, Handshake, GraduationCap } from "lucide-react";

const panels = [
  {
    title: "Providing health care items",
    icon: HeartHandshake,
    backgroundImage: "/charity/african-kids-enjoying-life.jpg",
    alt: "Medical items including stethoscope, thermometer, and pills",
  },
  {
    title: "Partnerships & Collaborations",
    icon: Handshake,
    backgroundImage: "/charity/close-up-community-solidarity-concept.jpg",
    alt: "Multiple hands stacked together symbolizing unity",
  },
  {
    title: "Providing educational items",
    icon: GraduationCap,
    backgroundImage: "/charity/medium-shot-community-painting-wood.jpg",
    alt: "Child writing on a whiteboard with adult guidance",
  },
];

export default function Health() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="pt-12">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 border border-white">
          {panels.map((panel, index) => {
            const IconComponent = panel.icon;
            return (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}

                className="relative h-64 sm:h-80 md:h-96 lg:h-[325px] overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={panel.backgroundImage}
                    alt={panel.alt}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>

                <div className="absolute inset-0 bg-green-700/60"></div>

                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 sm:px-8 text-white pt-12">
                  {/* Icon Circle */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.2,
                      ease: "easeOut",
                    }}
                    className="mb-4"
                  >
                    <div className="relative w-16 h-16   bg-white rounded-full flex items-center justify-center">
                      <IconComponent
                        className="w-8 h-8  text-green-800"
                        strokeWidth={2}
                      />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                      ease: "easeOut",
                    }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center leading-tight px-10"
                  >
                    {panel.title}
                  </motion.h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
