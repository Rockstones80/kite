"use client";

import Slideshow from "@/components/ui/slideshow";

export default function Hero() {
  const slides = [
    {
      image: "/hero-1.jpg",
      alt: "Kids In Thriving Environments - Community Support",
      subtitle: "CHES Empowerment Foundation",
      title: "GIVING HUMANITY A HELPING HAND",
      buttonText: "ABOUT US",
      buttonLink: "#about",
      secondaryButtonText: "ACTIVITIES",
      secondaryButtonLink: "#activities",
    },
    {
      image: "/hero-2.jpg",
      alt: "Kids In Thriving Environments - Healthcare Services",
      subtitle: "CHES Empowerment Foundation",
      title: "Providing Health Care & Aid",
      buttonText: "DONATE TODAY",
      buttonLink: "#donate",
    },
    {
      image: "/hero-3.jpg",
      alt: "Kids In Thriving Environments - Empowerment Programs",
      subtitle: "CHES Empowerment Foundation",
      title: "WE BRING HOPE TO THE HOPELESS",
      buttonText: "DONATE TODAY",
      buttonLink: "#donate",
    },
  ];

  return (
    <section className="relative w-full h-[110vh] overflow-hidden">
      <Slideshow slides={slides} autoPlayInterval={15000} showControls={true} />
    </section>
  );
}
