import React, { useState, useEffect } from 'react';
import AnimatedHeroBackground from './AnimatedHeroBackground';
import ScrollingAnnouncementBanner from './ScrollingAnnouncementBanner';

const HeroSection = () => {
  const slides = [
    "/assets/k1.jpg",
    "/assets/k2.jpg",
    "/assets/k3.jpg",
    "/assets/k4.jpg",
    "/assets/k6.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000); // 3s interval
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section id="home" className="hero-section pt-40 pb-24 md:pt-48 md:pb-32 relative">
      <AnimatedHeroBackground />

      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={slide}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${slide})`,
            opacity: index === currentSlide ? 1 : 0,
            zIndex: 0
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* ✅ Announcement Banner inside Hero */}
      <div className="relative z-20">
        <ScrollingAnnouncementBanner text="📢 National Seminar Conclave in Cyber Security Hyderabad 2025 | 29 October 2025 | By Kibotech" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-30 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight fade-in">
          Specialized in Building and Delivering Software <span className="text-cyan-300">Projects.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto fade-in" style={{ transitionDelay: '150ms' }}>
          We Build and Deliver High-Quality Software Projects.
        </p>
        <div className="fade-in" style={{ transitionDelay: '300ms' }}>
          <a href="#contact" className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-xl transform hover:scale-105">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
