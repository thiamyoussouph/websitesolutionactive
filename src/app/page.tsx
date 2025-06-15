'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProcessusSection from "@/components/ProcessusSection";
import ServicesSection from '@/components/ServicesSection';
import TimelineSection from '@/components/TimelineSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    <ProcessusSection />
      <ServicesSection />
      <TimelineSection />
        <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer/>
         </>
  );
}
