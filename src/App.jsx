import React from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './index.css'; // Import global styles

// Import all your components
import ScrollingAnnouncementBanner from './components/ScrollingAnnouncementBanner';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClientLogosSection from './components/ClientLogosSection';
import ServicesSection from './components/ServicesSection';
import MissionVisionSection from './components/MissionVisionSection';
import ProcessSection from './components/ProcessSection';
import TechStackSection from './components/TechStackSection';
import TeamSection from './components/TeamSection';
import StatisticsSection from './components/StatisticsSection';
import EventsGallery from './components/EventsGallery';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useScrollAnimation();

  return (
    <div className="bg-white">
      <Header />
      <main>
        <ScrollingAnnouncementBanner />
        <HeroSection />
        <ClientLogosSection />
        <ServicesSection />
        <MissionVisionSection />
        <ProcessSection />
        <TechStackSection />
        <TeamSection />
        <StatisticsSection />
        <EventsGallery />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;