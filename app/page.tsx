import Hero from "@/components/landing/hero";
import CTACards from "@/components/landing/cta-cards";
import Foundation from "@/components/landing/foundation";
import Charity from "@/components/landing/charity";
import ParallaxSection from "@/components/landing/parallax-section";
import Event from "@/components/landing/event";
import Health from "@/components/landing/health";
import Article from "@/components/landing/article";
import Subscribe from "@/components/landing/subscribe";

export default function Home() {
  return (
    <main>
      <Hero />
      <CTACards />
      <Foundation />
      <Charity />
      <ParallaxSection />
      <Event />
      <Health />
      <Article />
      <Subscribe />
    </main>
  );
}
