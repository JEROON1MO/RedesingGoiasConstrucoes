import { Hero } from "./Hero";
import { CategoryGrid } from "./CategoryGrid";
import { OffersSection } from "./OffersSection";
import { AboutSection } from "./AboutSection";
import { CtaBanner } from "./CtaBanner";
import { LocalExperience } from "./LocalExperience";

export function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <OffersSection />
      <AboutSection />
      <CtaBanner />
      <LocalExperience />
    </>
  );
}