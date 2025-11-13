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
} from './components';

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <NutritionSection />
      <BiosecuritySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
