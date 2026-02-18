import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import VideoPodcastSection from './components/VideoPodcastSection';
import ProcessSection from './components/ProcessSection';
import DepartmentsSection from './components/DepartmentsSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProductionPlannerSection from './components/ProductionPlannerSection';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import NextStepsSection from './components/NextStepsSection';
import Footer from './components/Footer';

// Note: Music generation features (Features.tsx, DemoSection.tsx) hidden to match new agency landing page design.

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <VideoPodcastSection />
        <ProcessSection />
        <DepartmentsSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ProductionPlannerSection />
        <FAQSection />
        <BlogSection />
        <ContactSection />
        <NextStepsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;