import Hero from "@/components/landing/hero";
import CTACards from "@/components/landing/cta-cards";
import Foundation from "@/components/landing/foundation";
import Charity from "@/components/landing/charity";
import ParallaxSection from "@/components/landing/parallax-section";
import Event from "@/components/landing/event";

export default function Home() {
  return (
    <main>
      <Hero />
      <CTACards />
      <Foundation />
      <Charity />
      <ParallaxSection />
      <Event />
    </main>
  );
}
