'use client';

import {
  NavigationHeader,
  HeroSection,
  AboutSection,
  ExploreSection,
  NutritionSection,
  BiosecuritySection,
  ContactSection,
  Footer,
  BackToTopButton,
} from './components';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <NutritionSection />
      <BiosecuritySection />
      <ContactSection />
      <BackToTopButton />
    </>
  );
}
