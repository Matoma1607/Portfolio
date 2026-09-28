import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { TechStack } from './components/TechStack';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 selection:text-white antialiased overflow-x-hidden relative">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none z-0"></div>

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onExplorePortfolio={() => scrollToSection('proyectos')} />

        {/* Bento Grid Portfolio */}
        <Portfolio />

        {/* Developer Skills & Tech Stack Bento */}
        <TechStack />

        {/* Minimalist Contact Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
