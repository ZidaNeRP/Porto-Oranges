
import React from 'react';
import Navigation from '@/components/portfolio/Navigation';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import AboutSection from '@/components/portfolio/AboutSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ContactSection from '@/components/portfolio/ContactSection';

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      <div id="home">
        <PortfolioHero />
      </div>
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
