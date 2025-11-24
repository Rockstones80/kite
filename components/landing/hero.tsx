"use client";

import Slideshow from "@/components/ui/slideshow";

export default function Hero() {
  const slides = [
    {
      image: "/hero-1.jpg",
      alt: "Kids In Thriving Environments - Community Support",
    },
    {
      image: "/hero-2.jpg",
      alt: "Kids In Thriving Environments - Healthcare Services",
    },
    {
      image: "/hero-3.jpg",
      alt: "Kids In Thriving Environments - Empowerment Programs",
    },
  ];

  return (
    <section className="relative w-full h-[120vh] overflow-hidden">
      <Slideshow slides={slides} autoPlayInterval={8000} showControls={true} />
    </section>
  );
}
