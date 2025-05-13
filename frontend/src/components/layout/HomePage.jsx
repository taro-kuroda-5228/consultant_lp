import React from 'react';
import { motion } from 'framer-motion';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import ProblemSection from '../sections/ProblemSection';
import ServiceSection from '../sections/ServiceSection';
import ProcessSection from '../sections/ProcessSection';
import WhyChooseSection from '../sections/WhyChooseSection';
import PricingSection from '../sections/PricingSection';
import FaqSection from '../sections/FaqSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';

const HomePage = () => {
  return (
    <div className="bg-light">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ServiceSection />
        <ProcessSection />
        <WhyChooseSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;